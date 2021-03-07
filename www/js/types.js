'use strict';

goog.provide('Blockly.Types');
goog.require('Blockly.Type');

Blockly.Types.CHARACTER = new Blockly.Type({
  typeId: 'Character',
  typeMsgName: 'ARD_TYPE_CHAR',
  compatibleTypes: []
});
Blockly.Types.TEXT = new Blockly.Type({
  typeId: 'Text',
  typeMsgName: 'ARD_TYPE_TEXT',
  compatibleTypes: [Blockly.Types.CHARACTER]
});
Blockly.Types.BOOLEAN = new Blockly.Type({
  typeId: 'Boolean',
  typeMsgName: 'ARD_TYPE_BOOL',
  compatibleTypes: []
});
Blockly.Types.SHORT_NUMBER = new Blockly.Type({
  typeId: 'Short Number',
  typeMsgName: 'ARD_TYPE_SHORT',
  compatibleTypes: []
});
Blockly.Types.NUMBER = new Blockly.Type({
  typeId: 'Number',
  typeMsgName: 'ARD_TYPE_NUMBER',
  compatibleTypes: []
});

Blockly.Types.UNUMBER = new Blockly.Type({
  typeId: 'Unsigned Number',
  typeMsgName: 'ARD_TYPE_UNUMBER',
  compatibleTypes: []
});

Blockly.Types.LARGE_NUMBER = new Blockly.Type({
  typeId: 'Large Number',
  typeMsgName: 'ARD_TYPE_LONG',
  compatibleTypes: []
});
Blockly.Types.DECIMAL = new Blockly.Type({
  typeId: 'Decimal',
  typeMsgName: 'ARD_TYPE_DECIMAL',
  compatibleTypes: [Blockly.Types.BOOLEAN,
                    Blockly.Types.SHORT_NUMBER,
                    Blockly.Types.NUMBER,
                    Blockly.Types.LARGE_NUMBER]
});
Blockly.Types.ARRAY = new Blockly.Type({
  typeId: 'Array',
  typeMsgName: 'ARD_TYPE_ARRAY',
  compatibleTypes: []
});
Blockly.Types.NULL = new Blockly.Type({
  typeId: 'Null',
  typeMsgName: 'ARD_TYPE_NULL',
  compatibleTypes: []
});
Blockly.Types.UNDEF = new Blockly.Type({
  typeId: 'Undefined',
  typeMsgName: 'ARD_TYPE_UNDEF',
  compatibleTypes: []
});
Blockly.Types.CHILD_BLOCK_MISSING = new Blockly.Type({
  typeId: 'ChildBlockMissing',
  typeMsgName: 'ARD_TYPE_CHILDBLOCKMISSING',
  compatibleTypes: []
});
Blockly.Types.NUMBER.addCompatibleTypes([Blockly.Types.BOOLEAN,Blockly.Types.SHORT_NUMBER,Blockly.Types.LARGE_NUMBER,Blockly.Types.DECIMAL]);
Blockly.Types.SHORT_NUMBER.addCompatibleTypes([Blockly.Types.BOOLEAN,Blockly.Types.NUMBER,Blockly.Types.LARGE_NUMBER,Blockly.Types.DECIMAL]);
Blockly.Types.LARGE_NUMBER.addCompatibleTypes([Blockly.Types.BOOLEAN,Blockly.Types.SHORT_NUMBER,Blockly.Types.NUMBER,Blockly.Types.DECIMAL]);
Blockly.Types.addType = function(typeId_, typeMsgName_, compatibleTypes_) {
  var key = typeId_.toUpperCase().replace(/ /g, '_');
  if (Blockly.Types[key] !== undefined) {
    throw 'The Blockly type ' + key + ' already exists.';
  }
  Blockly.Types[key] = new Blockly.Type({
    typeId: typeId_,
    typeName: typeMsgName_,
    compatibleTypes: compatibleTypes_
  });
};
Blockly.Types.getValidTypeArray = function() {
  var typesArray = [];
  for (var typeKey in Blockly.Types) {
    if ((typeKey !== 'UNDEF') && (typeKey !== 'CHILD_BLOCK_MISSING') &&
        (typeKey !== 'NULL') && (typeKey !== 'ARRAY') &&
        (typeof Blockly.Types[typeKey] !== 'function') &&
        !(Blockly.Types[typeKey] instanceof RegExp)) {
      typesArray.push([Blockly.Types[typeKey].typeName, typeKey]);
    }
  }
  return typesArray;
};
Blockly.Types.getChildBlockType = function(block) {
  var blockType = null;
  var nextBlock = block;
  while (nextBlock && (nextBlock.getBlockType === undefined) &&
         (nextBlock.inputList.length > 0) && (nextBlock.inputList[0].connection != null)) {
    nextBlock = nextBlock.inputList[0].connection.targetBlock();
  }
  if (nextBlock === block) {
    blockType = Blockly.Types.CHILD_BLOCK_MISSING;
  } else if (nextBlock === null) {
    blockType = Blockly.Types.CHILD_BLOCK_MISSING;
  } else {
    var func = nextBlock.getBlockType;
    if (func) {
      blockType = nextBlock.getBlockType();
    } else {
      blockType = Blockly.Types.NULL;
    }
  }
  return blockType;
};
Blockly.Types.regExpInt_ = new RegExp(/^-?\d+$/);
Blockly.Types.regExpFloat_ = new RegExp(/^-?[0-9]*[.][0-9]+$/);
Blockly.Types.identifyNumber = function(numberString) {
    if (Blockly.Types.regExpInt_.test(numberString)) {
      var intValue = parseInt(numberString);
      if (isNaN(intValue)) {
        return Blockly.Types.NULL;
      }
      if (intValue > 32767 || intValue < -32768) {
        return Blockly.Types.LARGE_NUMBER;
      }
      return Blockly.Types.NUMBER;
    } else if (Blockly.Types.regExpFloat_.test(numberString)) {
      return Blockly.Types.DECIMAL;
    }
    return Blockly.Types.NULL;
};