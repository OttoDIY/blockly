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
     this.setColour("#54BCF7");
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

// -------------------------------------------------  Encoder new ------------------------------------------------------

Blockly.Blocks['Init_RotaryEncoderInterrupt'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/potentiometer.png",33,33))
		.appendField(Blockly.Msg.RotaryEncoderInit)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINDT)
        .appendField(new Blockly.FieldDropdown(profile[card].interrupt), "PINDT");
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINCLK)
        .appendField(new Blockly.FieldDropdown(profile[card].interrupt), "PINCLK");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to manage rotary encoder using interrupts. More precision');
  }
};

Blockly.Arduino['Init_RotaryEncoderInterrupt'] = function(block) {
  var number = this.getFieldValue('RE_NUMBER');
  var dropdown_pinDT = this.getFieldValue('PINDT');
  var dropdown_pinCLK = this.getFieldValue('PINCLK');

  Blockly.Arduino.includes_['include_encoder'] = '#include <Encoder.h>';
  Blockly.Arduino.definitions_['rotaryencoder_'+number] = 'Encoder encoder_'+number+'('+dropdown_pinDT+','+dropdown_pinCLK+');\n';

  var code='';
  return code;
};


Blockly.Blocks['RotaryEncoder_Write'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
	this.appendDummyInput()
       .appendField(new Blockly.FieldImage("media/potentiometer.png",33,33))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_WRITE);
	this.appendValueInput("Writecounter")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Write the internal counter of the rotary Encoder");
  }
};

Blockly.Arduino['RotaryEncoder_Write'] = function(block) {
  // TODO: Assemble Python into code variable.
  var number = this.getFieldValue('RE_NUMBER');
  var writenumber =Blockly.Arduino.valueToCode(this, 'Writecounter', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'encoder_'+number+'.write('+writenumber+'*4);\n'

  return code;
};


Blockly.Blocks['RotaryEncoder_Read'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/potentiometer.png",33,33))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_READ)
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Read the internal counter of the rotary Encoder');
  }
};

Blockly.Arduino['RotaryEncoder_Read'] = function(block) {

  var number = this.getFieldValue('RE_NUMBER');
  var code = '(encoder_'+number+'.read()/4)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['rotaryencoder_button_sensor'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/potentiometer.png",33,33))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_Button)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RE_BUTTON");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RE_Pressed)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['rotaryencoder_button_sensor'] = function(block) {
  var number = this.getFieldValue('RE_NUMBER');
  var dropdown_pin = this.getFieldValue('PIN_RE_BUTTON');

  Blockly.Arduino.setups_['setup_re_'+number] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';

  var code = '!digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
