/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
 
 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
'use strict';

goog.provide('Blockly.Blocks.SerialUSB');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
 
  

Blockly.Blocks['serial_init'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	.appendField(Blockly.Msg.SERIAL_Init)
    this.appendDummyInput()
    .appendField(Blockly.Msg.SERIAL_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to Serial object');
  }
};

Blockly.Arduino['serial_init'] = function(block) {
  
 
  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');
  
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin('+dropdown_pinbaudios+');\n';
  var code = '';
  return code;
};


Blockly.Blocks['serial_printfor'] = {
  helpUrl: 'http://arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", "Number")
        .setCheck("Number")
        .appendTitle(Blockly.Msg.Serial_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([["DEC", "DEC"],["HEX", "HEX"],["BIN", "BIN"],["OCT", "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};


Blockly.Arduino['serial_printfor'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
      
  var code = 'Serial.print('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};



Blockly.Blocks['serial_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL_Avai);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['serial_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL_Read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(Serial.read())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['serial_read_string'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL_ReadString);
	this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC')
		.appendField(Blockly.Msg.SERIAL_Readlf)
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_read_string'] = function(block) {
  // TODO: Assemble Python into code variable.
   var logic = this.getFieldValue('LOGIC');
   
   if(logic=='TRUE')
    var code = 'Serial.readStringUntil(\'\\n\')';
  else
    var code = 'Serial.readString()';
   
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['serial_read_number'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL_ReadNum);
	this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC')
		.appendField(Blockly.Msg.SERIAL_Readlf)
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_read_number'] = function(block) {
  // TODO: Assemble Python into code variable.
   var logic = this.getFieldValue('LOGIC');
   
   if(logic=='TRUE')
    var code = 'atof((Serial.readStringUntil(\'\\n\')).c_str())';
  else
    var code = 'Serial.parseFloat()';
   
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['serial_println'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendField(Blockly.Msg.SERIAL_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_println'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.println('+content+');\n';
  return code;
};

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendField(Blockly.Msg.SERIAL_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['serial_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.print('+content+');\n';
  return code;
};

Blockly.Blocks['serial_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/serie.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendTitle(Blockly.Msg.SERIAL_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};



Blockly.Arduino['serial_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
   
  var code = 'Serial.write('+content+');\n';  
  return code;
};



