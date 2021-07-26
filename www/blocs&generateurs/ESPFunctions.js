 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.ESPFunctions');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['ESP_yield_block'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#00929f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ESP8266icon.png",33,33))
        .appendField(Blockly.Msg.ESP_yield)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('ESP yield');
  }
};

Blockly.Arduino['ESP_yield_block'] = function(block) {
	
 var code = 'yield();\n';
  
 return code;
   
};

Blockly.Blocks['ESP_DeepSleep'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#00929f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ESP8266icon.png",33,33))
        .appendField(Blockly.Msg.ESP_deepsleep)
	this.appendValueInput("Value")
		.setCheck('Number');
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP_timesleep);	 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('To sleep the ESP8266 deeply. Important: You need to connect D0(GPIO16) to Reset pin');
  }
};

Blockly.Arduino['ESP_DeepSleep'] = function(block) {
 		
 var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
  

  var code = 'ESP.deepSleep('+value+'e6);\n';
 
  return code;
};

