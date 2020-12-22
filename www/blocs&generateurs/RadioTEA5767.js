 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.RadioTEA5767');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['RadioTEA5767_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio.png",53,38))
        .appendField(Blockly.Msg.TEA5767_init)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the RadioTEA5767 module');
  }
};

Blockly.Arduino['RadioTEA5767_init'] = function(block) {
	
   
 Blockly.Arduino.includes_['define_TEA5767_library'] = '#include <TEA5767N.h>';
 Blockly.Arduino.definitions_['define_TEA5767N'] = 'TEA5767N radio=TEA5767N();\n';
  
  var code='';
  return code;
   
};

Blockly.Blocks['RadioTEA5767_activate'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_turnOFF_ON)
		.appendField(new Blockly.FieldDropdown([['ON','1'],['OFF','2']]), "TEA5767_POWER")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('option to activae/deactivate the radio module');
  }
};

Blockly.Arduino['RadioTEA5767_activate'] = function(block) {
 		
 var power = this.getFieldValue('TEA5767_POWER'); 	
  
 if (power==1) 
    var code = 'radio.setStandByOff();\n';
 else
	var code = 'radio.setStandByOn();\n';
 
  return code;
};

Blockly.Blocks['RadioTEA5767_mute'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_muteOFF_ON)
		.appendField(new Blockly.FieldDropdown([['OFF','2'],['ON','1']]), "TEA5767_MUTE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Option to mute/desmute the radio');
  }
};


Blockly.Arduino['RadioTEA5767_mute'] = function(block) {
 		
 var mute = this.getFieldValue('TEA5767_MUTE'); 	
  
 if (mute==1) 
    var code = 'radio.mute();\n';
 else
	var code = 'radio.turnTheSoundBackOn();\n';
 
  return code;
};

Blockly.Blocks['RadioTEA5767_LevelSignal'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#a600d3");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
        .appendField(Blockly.Msg.TEA5767_Level)
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return the level of signal');
  }
};

Blockly.Arduino['RadioTEA5767_LevelSignal'] = function(block) {
         
  var code = 'radio.getSignalLevel()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['RadioTEA5767_Stereo'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#a600d3");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
        .appendField(Blockly.Msg.TEA5767_Stereo)
	this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('return the level of signal');
  }
};



Blockly.Arduino['RadioTEA5767_Stereo'] = function(block) {
         
  var code = 'radio.isStereo()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['RadioTEA5767_setFrequency'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_RadioStation)
	this.appendValueInput("Value")
		.setCheck('Number')
		.appendField(Blockly.Msg.TEA5767_SetFrequency);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Arduino['RadioTEA5767_setFrequency'] = function(block) {
 	
  var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
 
  
  var code = 'radio.selectFrequency((float)'+value+');\n';
  return code;
};

Blockly.Blocks['frequenciesMadrid'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#a600d3");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/radio-3.png",25,25))
	    .appendField(Blockly.Msg.TEA5767_MadridFrequency)
        .appendField(new Blockly.FieldDropdown([['RNE Radio Nacional','88.20'],['M80 Radio','89.00'],['SER Madrid Norte','89.60'],
		['RNE Radio 5 Todo Noticias','90.30'],['Europa FM','91.00'],['Cadena Dial','91.70'],['RNE Radio 3','93.20'],['Los 40 Principales ','93.90'],
		['Melodía FM','98.40'],['Cadena 100','99.50'],['COPE+ Madrid','101.00'],['RNE Radio Clásica','96.50'],['Onda Cero','98.00'],
		['Vaughan Radio','100.40'],['Kiss FM','102.70'],['Onda Madrid ','101.30'],['Radio Marca','103.50']]), "FREQUENCY");
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['frequenciesMadrid'] = function(block) {
  var frequency_madrid = this.getFieldValue('FREQUENCY');
  var code=''+frequency_madrid+'';
  
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
 

