/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.Thingspeak');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['thingspeak_init'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name_init)
		.appendField(Blockly.Msg.Thingspeak_channel)
        .appendField(new Blockly.FieldTextInput("1233456"), "CHANNEL")
	this.appendDummyInput()
		.appendField(Blockly.Msg.Thingspeak_apiwrite)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "API_WRITE_KEY")
		.appendField(Blockly.Msg.Thingspeak_apiread)
        .appendField(new Blockly.FieldTextInput("yyyyyyyy"), "API_READ_KEY");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init thingspeak functions');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['thingspeak_init'] = function(block) {
	 
   var Channel = block.getFieldValue('CHANNEL');  
   var APIWriteKey = block.getFieldValue('API_WRITE_KEY');  
   var APIReadKey = block.getFieldValue('API_READ_KEY');  

   Blockly.Arduino.includes_['include_thingspeak'] = '#include "ThingSpeak.h"\n';
  
  
  Blockly.Arduino.variables_['define_thingspeak_variables'] = 'WiFiClient client;\n'+
'unsigned long myChannelNumber ='+Channel+';\n'+
'const char * myWriteAPIKey ="'+APIWriteKey+'";\n'+
'const char * myReadAPIKey="'+APIReadKey+'";\n';


Blockly.Arduino.setups_['setup_thingspeak'] = 'ThingSpeak.begin(client);\n';

  var code='';
  return code;
};


Blockly.Blocks['thingspeak_write'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_Write)
	this.appendValueInput("variable");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.Thingspeak_field)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write field in thingspeak');
    this.setHelpUrl('You need to wait >20 second to send another value');
  }
};

Blockly.Arduino['thingspeak_write'] = function(block) {

 var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 var field = this.getFieldValue('FIELD');
    
  var code = 'ThingSpeak.writeField(myChannelNumber,'+field+','+variable+', myWriteAPIKey);\n';
  return code;
};


Blockly.Blocks['thingspeak_write_long'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_ReadLong)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the field in long or number');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['thingspeak_write_long'] = function(block) {
  var field = this.getFieldValue('FIELD');	
  
  var code = 'ThingSpeak.readLongField(myChannelNumber,'+field+',myReadAPIKey)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['thingspeak_write_float'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_ReadFloat)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the field in long or number');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['thingspeak_write_float'] = function(block) {
  var field = this.getFieldValue('FIELD');	
  
  var code = 'ThingSpeak.readFloatField(myChannelNumber,'+field+',myReadAPIKey)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};








