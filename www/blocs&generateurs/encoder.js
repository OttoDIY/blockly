'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['encoder'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/potentiometer.png', 48, 39, "*"))
     .appendField("Encoder")
     this.appendDummyInput() .appendField("CLK").appendField(new Blockly.FieldTextInput('2'), 'CLK');
     this.appendDummyInput() .appendField("DT").appendField(new Blockly.FieldTextInput('3'), 'DT');
     //this.appendDummyInput() .appendField("SW").appendField(new Blockly.FieldTextInput('4'), 'SW');
  this.setInputsInline(true);
  this.setOutput(true, "Number");
     this.setColour("#2a93e8");
     this.setTooltip('');
     this.setHelpUrl('https://lastminuteengineers.com/rotary-encoder-arduino-tutorial/');
   }
 };
 Blockly.Arduino['encoder'] = function(block) {
  var CLK = block.getFieldValue('CLK');
  var DT = block.getFieldValue('DT');
  var SW = block.getFieldValue('SW');
  Blockly.Arduino.definitions_['encoder'] = '#define CLK '+CLK+' \n'
  +'#define DT '+DT+'\n'
  +'int counter = 0;\n'
  +'int currentStateCLK;\n'
  +'int lastStateCLK;\n';
  Blockly.Arduino.setups_['encoder']='  pinMode(CLK,INPUT);\n'
  +'pinMode(DT,INPUT);\n'
  +'lastStateCLK = digitalRead(CLK);';
  var code 
  return code
};