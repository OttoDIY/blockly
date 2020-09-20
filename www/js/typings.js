'use strict';

goog.provide('Blockly.StaticTyping');
goog.require('Blockly.Block');
goog.require('Blockly.Type');
goog.require('Blockly.Types');
goog.require('Blockly.Workspace');
goog.require('goog.asserts');

Blockly.StaticTyping = function() {
  this.varTypeDict = Object.create(null);
  this.pendingVarTypeDict = Object.create(null);
};
Blockly.StaticTyping.prototype.collectVarsWithTypes = function(workspace) {
  this.varTypeDict = Object.create(null);
  this.pendingVarTypeDict = Object.create(null);
  var blocks = Blockly.StaticTyping.getAllStatementsOrdered(workspace);
  for (var i = 0; i < blocks.length; i++) {
    var blockVarAndTypes = Blockly.StaticTyping.getBlockVars(blocks[i]);
    for (var j = 0; j < blockVarAndTypes.length; j++) {
      var variableName = blockVarAndTypes[j][0];
      var variableType = blockVarAndTypes[j][1];
      if (goog.isArray(variableType)) {
    	if (variableType[1].substr(variableType[1].lastIndexOf('_')) == '_AGI') {
    		var varAGI = variableType[1].substr(0, variableType[1].lastIndexOf('_'));
    		variableType = this.varTypeDict[varAGI];
    		if (!variableType) {
    			variableType = Blockly.Types.UNDEF;
    		} else if (variableType.arrayType && variableType.arrayType.length == 2) {
				variableType = this.varTypeDict[variableType.arrayType[1]];
    		} else {
    			variableType = variableType.arrayType;
    		}
    	} else {
	        if (this.varTypeDict[variableType[1]]) {
	          variableType = this.varTypeDict[variableType[1]];
	        } else {
	          if (!goog.isArray(this.pendingVarTypeDict[variableType[1]])) {
	            this.pendingVarTypeDict[variableType[1]] = [variableName];
	          } else {
	            this.pendingVarTypeDict[variableType[1]].push(variableName);
	          }
	          variableType = Blockly.Types.UNDEF;
		      }
	        }
	    }
      this.assignTypeToVars(blocks[i], variableName, variableType);
    }
  }
  return this.varTypeDict;
};
Blockly.StaticTyping.getAllStatementsOrdered = function(workspace) {
  if (!workspace.getTopBlocks) {
    throw 'Not a valid workspace: ' + workspace;
  }
  var getAllContinuousStatements = function(startBlock) {
    var block = startBlock;
    var nextBlock = null;
    var connections = null;
    var blockNextConnection = null;
    var blocks = [];
    do {
      blocks.push(block);
      blockNextConnection = block.nextConnection;
      connections = block.getConnections_();
      block = null;
      for (var j = 0; j < connections.length; j++) {
        if (connections[j].type == Blockly.NEXT_STATEMENT) {
          nextBlock = connections[j].targetBlock();
          if (nextBlock) {
            if (connections[j] === blockNextConnection) {
              block = nextBlock;
            } else {
              blocks = blocks.concat(getAllContinuousStatements(nextBlock));
            }
          }
        }
      }
    } while (block);
    return blocks;
  };
  var allStatementBlocks = [];
  var topBlocks = workspace.getTopBlocks(true);
  for (var i = 0; i < topBlocks.length; i++) {
    allStatementBlocks = allStatementBlocks.concat(getAllContinuousStatements(topBlocks[i]));
  }
  return allStatementBlocks;
};
Blockly.StaticTyping.getBlockVars = function(block) {
  var blockVarAndTypes = [];
  var getVars = block.getVars;
  if (getVars) {
    var blockVariables = getVars.call(block);
    for (var i = 0; i < blockVariables.length; i++) {
      var varName = blockVariables[i];
      var getVarType = block.getVarType;
      if (getVarType) {
        var varType = getVarType.call(block, varName);
        blockVarAndTypes.push([varName, varType]);
      } else {
        blockVarAndTypes.push([varName, Blockly.Types.NULL]);
      }
    }
  }
  return blockVarAndTypes;
};
Blockly.StaticTyping.prototype.assignTypeToVars = function(block, varName, varType) {
  switch (this.varTypeDict[varName]) {
    case undefined:
    case Blockly.Types.UNDEF:
      this.varTypeDict[varName] = varType;
      if ((varType != Blockly.Types.UNDEF) && (this.pendingVarTypeDict[varName] !== undefined)) {
        for (var i = 0; i < this.pendingVarTypeDict[varName].length; i++) {
          this.assignTypeToVars(block, this.pendingVarTypeDict[varName][i], varType);
        }
      }
      break;
    default:
      this.setBlockTypeWarning(block, varType, varName, this.varTypeDict[varName]);
      break;
  }
};
Blockly.StaticTyping.prototype.setBlockTypeWarning = function(block, blockType, varName) {
  var warningLabel = 'varType';
  if ((blockType == Blockly.Types.CHILD_BLOCK_MISSING) || (this.varTypeDict[varName] == Blockly.Types.CHILD_BLOCK_MISSING)) {
    block.setWarningText(null, warningLabel);
  } else if ((this.varTypeDict[varName] !== blockType) && (blockType !== Blockly.Types.UNDEF)) {
    block.setWarningText(varName + ' has been first assigned to the "' + this.varTypeDict[varName].typeName + '" type\n' +'and this block tries to assign the type "' + blockType.typeName + '"!', warningLabel);
  } else {
    block.setWarningText(null, warningLabel);
  }
};
Blockly.StaticTyping.prototype.setProcedureArgs = function(workspace) {
  var blocks = workspace.getTopBlocks();
  for (var i = 0, length_ = blocks.length; i < length_; i++) {
    var setArgsType = blocks[i].setArgsType;
    if (setArgsType) {
      setArgsType.call(blocks[i], this.varTypeDict);
    }
  }
};