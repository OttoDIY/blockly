'use strict';

goog.provide('Blockly.Arduino');
goog.require('Blockly.Generator');
goog.require('Blockly.StaticTyping');

Blockly.Arduino = new Blockly.Generator('Arduino');
Blockly.Arduino.StaticTyping = new Blockly.StaticTyping();
Blockly.Arduino.addReservedWords('Blockly,setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer,constants,floating,point,void,boolean,char,unsigned,byte,int,word,long,float,double,string,String,array,static,volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,detachInterrupt,interrupts,noInterrupts');
Blockly.Arduino.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4;       // + -
Blockly.Arduino.ORDER_SHIFT = 5;          // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6;     // >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8;    // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;    // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_COMMA = 15;    // ,
Blockly.Arduino.ORDER_UNARY_NEGATION = 16;
Blockly.Arduino.ORDER_MEMBER = 17;
Blockly.Arduino.ORDER_NONE = 99;          // (...)
Blockly.Arduino.PinTypes = {
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT',
  PWM: 'PWM',
  SERVO: 'SERVO',
  STEPPER: 'STEPPER',
  SERIAL: 'SERIAL',
  I2C: 'I2C/TWI',
  SPI: 'SPI'
};
Blockly.Arduino.DEF_FUNC_NAME = Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_;
Blockly.Arduino.init = function(workspace) {
  Blockly.Arduino.includes_ = Object.create(null);
  Blockly.Arduino.definitions_ = Object.create(null);
  Blockly.Arduino.variables_ = Object.create(null);
  Blockly.Arduino.codeFunctions_ = Object.create(null);
  Blockly.Arduino.userFunctions_ = Object.create(null);
  Blockly.Arduino.functionNames_ = Object.create(null);
  Blockly.Arduino.setups_ = Object.create(null);
  Blockly.Arduino.pins_ = Object.create(null);
  if (!Blockly.Arduino.variableDB_) {
    Blockly.Arduino.variableDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
  } else {
    Blockly.Arduino.variableDB_.reset();
  }
  var varsWithTypes = Blockly.Arduino.StaticTyping.collectVarsWithTypes(workspace);
  Blockly.Arduino.StaticTyping.setProcedureArgs(workspace, varsWithTypes);
  for ( var varName in varsWithTypes) {
	if (varsWithTypes[varName]) {
		if (varsWithTypes[varName].arrayType) {
			var varType = Blockly.Arduino.recurseArrayType(varName, varsWithTypes);
			Blockly.Arduino.addVariable(varName,varType +' '+ Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)+ ';');
		} else {
			Blockly.Arduino.addVariable(varName,Blockly.Arduino.getArduinoType_(varsWithTypes[varName])+ ' '+ Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)+ ';');
		}
	} else {
		Blockly.Arduino.addVariable(varName,'undefined '+ Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)+ ';');
	}
  }
};
Blockly.Arduino.recurseArrayType = function(varName, varsWithTypes) {
	if (!varsWithTypes[varName].arrayType
			|| varsWithTypes[varName].arrayType instanceof Blockly.Type) {
		var arrayDimension = '';
		if (varsWithTypes[varName].arrayType) {
			var subArray = varsWithTypes[varName].arrayType;
			arrayDimension = '[' + varsWithTypes[varName].arraySize + ']';
			while (subArray.arrayType) {
				arrayDimension += '[' + subArray.arraySize + ']';
				subArray = subArray.arrayType;
			}
			if (!(subArray instanceof Blockly.Type)) {
				varName = subArray[1];
				if (varsWithTypes[varName].arrayType) {
					var varType = Blockly.Arduino.recurseArrayType(varName,	varsWithTypes);
					return varType.substr(0, varType.indexOf('['))
							+ arrayDimension
							+ varType.substr(varType.indexOf('['));
				}
			}
		}
		return Blockly.Arduino.getArduinoType_(varsWithTypes[varName]) + arrayDimension;
	} else {
		var varTab = varsWithTypes[varName].arrayType[1];
		if (varTab == varName || !varsWithTypes[varTab]) {
			return 'undefined';
		} else {
			var varType = Blockly.Arduino.recurseArrayType(varTab, varsWithTypes);
			return Blockly.Arduino.insertParentArraySize(varType, varsWithTypes[varName].arraySize);
		}
	}
};
Blockly.Arduino.insertParentArraySize = function(varType, parentArraySize) {
	if (varType.indexOf('[') >= 0) {
		return varType.substr(0, varType.indexOf('[')) + '[' + parentArraySize + ']' + varType.substr(varType.indexOf('['));
	} else {
		return varType + '[' + parentArraySize + ']';
  }
};
Blockly.Arduino.finish = function(code) {
  var includes = [], definitions = [], variables = [], functions = [], BLOCK_GLOBALS_ARRAY_SIZE=[];
  for (var name in Blockly.Arduino.includes_) {
    includes.push(Blockly.Arduino.includes_[name]);
  }
  if (includes.length) {
    includes.push('\n');
  }
  for (var name in Blockly.Arduino.variables_) {
    variables.push(Blockly.Arduino.variables_[name]);
  }
  if (variables.length) {
    variables.push('\n');
  }
  for (var name in Blockly.Arduino.definitions_) {
    definitions.push(Blockly.Arduino.definitions_[name]);
  }
  if (definitions.length) {
    definitions.push('\n');
  }
  for (var name in Blockly.Arduino.codeFunctions_) {
    functions.push(Blockly.Arduino.codeFunctions_[name]);
  }
  for (var name in Blockly.Arduino.userFunctions_) {
    functions.push(Blockly.Arduino.userFunctions_[name]);
  }
  if (functions.length) {
    functions.push('\n');
  }
  var setups = [''], userSetupCode= '';
  if (Blockly.Arduino.setups_['userSetupCode'] !== undefined) {
    userSetupCode = '\n' + Blockly.Arduino.setups_['userSetupCode'];
    delete Blockly.Arduino.setups_['userSetupCode'];
  }
  for (var name in Blockly.Arduino.setups_) {
    setups.push(Blockly.Arduino.setups_[name]);
  }
  if (userSetupCode) {
    setups.push(userSetupCode);
  }
  delete Blockly.Arduino.includes_;
  delete Blockly.Arduino.definitions_;
  delete Blockly.Arduino.codeFunctions_;
  delete Blockly.Arduino.userFunctions_;
  delete Blockly.Arduino.functionNames_;
  delete Blockly.Arduino.setups_;
  delete Blockly.Arduino.pins_;
  Blockly.Arduino.variableDB_.reset();
  var allDefs = includes.join('\n') + variables.join('\n') + definitions.join('\n') + functions.join('\n');
  var setup = 'void setup() {' + setups.join('\n  ') + '\n}\n\n';
  var loop = 'void loop() {\n  ' + code.replace(/\n/g, '\n  ') + '\n}';
  return allDefs + setup + loop;
};
Blockly.Arduino.addInclude = function(includeTag, code) {
  if (Blockly.Arduino.includes_[includeTag] === undefined) {
    Blockly.Arduino.includes_[includeTag] = code;
  }
};
Blockly.Arduino.addDeclaration = function(declarationTag, code) {
  if (Blockly.Arduino.definitions_[declarationTag] === undefined) {
    Blockly.Arduino.definitions_[declarationTag] = code;
  }
};
Blockly.Arduino.addVariable = function(varName, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.variables_[varName] === undefined)) {
    Blockly.Arduino.variables_[varName] = code;
    overwritten = true;
  }
  return overwritten;
};
Blockly.Arduino.addSetup = function(setupTag, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.setups_[setupTag] === undefined)) {
    Blockly.Arduino.setups_[setupTag] = code;
    overwritten = true;
  }
  return overwritten;
};
Blockly.Arduino.addFunction = function(preferedName, code) {
  if (Blockly.Arduino.codeFunctions_[preferedName] === undefined) {
    var uniqueName = Blockly.Arduino.variableDB_.getDistinctName(preferedName, Blockly.Generator.NAME_TYPE);
    Blockly.Arduino.codeFunctions_[preferedName] = code.replace(Blockly.Arduino.DEF_FUNC_NAME, uniqueName);
    Blockly.Arduino.functionNames_[preferedName] = uniqueName;
  }
  return Blockly.Arduino.functionNames_[preferedName];
};
Blockly.Arduino.reservePin = function(block, pin, pinType, warningTag) {
  if (Blockly.Arduino.pins_[pin] !== undefined) {
    if (Blockly.Arduino.pins_[pin] != pinType) {
      block.setWarningText(Blockly.Msg.ARD_PIN_WARN1.replace('%1', pin)
		.replace('%2', warningTag).replace('%3', pinType)
		.replace('%4', Blockly.Arduino.pins_[pin]), warningTag);
    } else {
      block.setWarningText(null, warningTag);
    }
  } else {
    Blockly.Arduino.pins_[pin] = pinType;
    block.setWarningText(null, warningTag);
  }
};
Blockly.Arduino.scrubNakedValue = function(line) {
  return line + ';\n';
};
Blockly.Arduino.quote_ = function(string) {
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};
Blockly.Arduino.scrub_ = function(block, code) {
  if (code === null) { return ''; }
  var commentCode = '';
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    var comment = block.getCommentText();
    if (comment) {
      commentCode += this.prefixLines(comment, '// ') + '\n';
    }
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
Blockly.Arduino.getArduinoType_ = function(typeBlockly) {
  switch (typeBlockly.typeId) {
    case Blockly.Types.SHORT_NUMBER.typeId:
      return 'byte';
    case Blockly.Types.NUMBER.typeId:
      return 'int';
    case Blockly.Types.LARGE_NUMBER.typeId:
      return 'long';
    case Blockly.Types.DECIMAL.typeId:
      return 'float';
    case Blockly.Types.TEXT.typeId:
      return 'String';
    case Blockly.Types.CHARACTER.typeId:
      return 'char';
    case Blockly.Types.BOOLEAN.typeId:
      return 'boolean';
    case Blockly.Types.NULL.typeId:
      return 'void';
    case Blockly.Types.ARRAY.typeId:
    	return Blockly.Arduino.getArduinoType_(typeBlockly.arrayType);
    case Blockly.Types.UNDEF.typeId:
      return 'undefined';
    case Blockly.Types.CHILD_BLOCK_MISSING.typeId:
      return 'int';
    default:
      return 'Invalid Blockly Type';
    }
};
Blockly.Arduino.noGeneratorCodeInline = function() {
  return ['', Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.noGeneratorCodeLine = function() { return ''; };