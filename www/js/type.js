'use strict';

goog.provide('Blockly.Type');
goog.require('goog.asserts');

Blockly.Type = function(args) {
  if ((args.typeId === undefined) || (args.typeMsgName === undefined) ||
      (args.compatibleTypes === undefined)) {
    throw new Error('Creating a Type requires the following format:\n{\n' +
                    '  typeId: string,\n' +
                    '  typeMsgName: Blockly.Msg string member var name to\n' +
                    '               identify the translatable Type name.\n' +
                    '  compatibleTypes: [Blockly.Type,]\n}');
  }
  if (!goog.isArray(args.compatibleTypes)) {
    throw new Error('The compatible types for a Blockly Types needs to be an ' +
                    'array of Blockly.Type items.');
  }
  this.typeId = args.typeId;
  this.typeMsgName_ = args.typeMsgName;
  this.compatibleTypes_ = args.compatibleTypes;
  this.compatibleTypes_.push(this);
  this.generatedCheckList_ = [];
  this.generateCheckList_();
};

Object.defineProperty(Blockly.Type.prototype, 'typeName', {
  get: function() {
    return Blockly.Msg[this.typeMsgName_] || this.typeId;
  },
  set: function(value) {
    console.warn('"Blockly.Type" property "typeName" is not allowed to be set.');
  }
});

Object.defineProperty(Blockly.Type.prototype, 'output', {
  get: function() {
    return this.typeId;
  },
  set: function(value) {
    console.warn('"Blockly.Type" property "output" is not allowed to be set.');
  }
});

Object.defineProperty(Blockly.Type.prototype, 'checkList', {
  get : function() {
    return this.generatedCheckList_;
  },
  set: function(value) {
    console.warn('"Blockly.Type" property "check" is not allowed to be set.');
  }
});

Blockly.Type.prototype.generateCheckList_ = function(compatibleType) {
  this.generatedCheckList_ = [];
  for (var i = 0; i < this.compatibleTypes_.length; i++) {
    var unique = true;
    for (var j = 0; j < this.generatedCheckList_.length; j++) {
      if (this.generatedCheckList_[j] === this.compatibleTypes_[i].typeId) {
        unique = false;
      }
    }
    if (unique) {
      this.generatedCheckList_.push(this.compatibleTypes_[i].typeId);
    }
  }
};

Blockly.Type.prototype.addCompatibleType = function(compatibleType) {
  if (!compatibleType || !compatibleType.constructor ||
      !(compatibleType instanceof Blockly.Type)) {
    throw new Error('To add a compatible type to ' + this.typeId +
                    ' provide a Blockly.Type object.');
  }
  this.compatibleTypes_.push(compatibleType);
  this.generateCheckList_();
};

Blockly.Type.prototype.addCompatibleTypes = function(compatibleTypeArray) {
  if (!goog.isArray(compatibleTypeArray)) {
    throw new Error('To add compatible types to the Blockly Type ' +
                    this.typeId +' provide an array of Blockly.Type items.');
  }
  for (var i = 0; i < compatibleTypeArray.length; i++) {
    if (!compatibleTypeArray[i] || !compatibleTypeArray[i].constructor ||
        !(compatibleTypeArray[i] instanceof Blockly.Type)) {
      throw new Error('To add a compatible type to ' + this.typeId + ' you ' +
                      'must point to a Blockly.Type object.');
    }
    this.compatibleTypes_.push(compatibleTypeArray[i]);
  }
  this.generateCheckList_();
};