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

goog.provide('Blockly.Blocks.softBT');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
 
  

Blockly.Blocks['soft_bt_init'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
    this.appendValueInput("PIN_TX", "Number")
    .setCheck("Number")
	.appendField(Blockly.Msg.SSERIAL_BT_Init)
    .appendField(Blockly.Msg.SSERIAL_BT_TX)
    this.appendValueInput("PIN_RX", "Number")
    .setCheck("Number")
    .appendField(Blockly.Msg.SSERIAL_BT_RX)
	this.appendDummyInput()
    .appendField(Blockly.Msg.SSERIAL_BT_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};

Blockly.Arduino['soft_bt_init'] = function(block) {
  
  var pin_rx = Blockly.Arduino.valueToCode(this, "PIN_RX", Blockly.Arduino.ORDER_NONE);
  var pin_tx = Blockly.Arduino.valueToCode(this, "PIN_TX", Blockly.Arduino.ORDER_NONE);
  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');
  
  Blockly.Arduino.definitions_['define_ssBT'] = '#include <SoftwareSerial.h>\nSoftwareSerial mySerialBT('+pin_rx+','+pin_tx+');\n';
  Blockly.Arduino.setups_['setup_sserialBT'] = 'mySerialBT.begin('+dropdown_pinbaudios+');\n';
  var code = '';
  return code;
};


Blockly.Blocks['soft_bt_printfor'] = {
  helpUrl: 'http://arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", "Number")
        .setCheck("Number")
        .appendTitle(Blockly.Msg.SSerial_BT_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([["DEC", "DEC"],["HEX", "HEX"],["BIN", "BIN"],["OCT", "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};


Blockly.Arduino['soft_bt_printfor'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
      
  var code = 'mySerialBT.print('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};



Blockly.Blocks['soft_bt_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_BT_Avai);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Arduino['soft_bt_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mySerialBT.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['soft_bt_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_BT_Read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Arduino['soft_bt_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(mySerialBT.read())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['soft_bt_println'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendField(Blockly.Msg.SSERIAL_BT_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['soft_bt_println'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'mySerialBT.println('+content+');\n';
  return code;
};

Blockly.Blocks['soft_bt_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendField(Blockly.Msg.SSERIAL_BT_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['soft_bt_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'mySerialBT.print('+content+');\n';
  return code;
};

Blockly.Blocks['soft_bt_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/bt.png", 20,25 ))
    this.appendValueInput("CONTENT", "String")
        .appendTitle(Blockly.Msg.SSERIAL_BT_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};



Blockly.Arduino['soft_bt_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
   
  var code = 'mySerialBT.write('+content+');\n';  
  return code;
};



