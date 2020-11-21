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

goog.provide('Blockly.Blocks.RemoteControlIR');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');



Blockly.Blocks['Init_generalremotecontrol'] = {
  init: function() {
    this.setColour("#0060aa");
	this.appendValueInput("PIN_IR")
        .appendField(new Blockly.FieldImage("media/genericRC.png",57,38))
		.appendField(Blockly.Msg.GENERAL_IR)
        .appendField(Blockly.Msg.PIN)
		.setCheck("Number");
	this.appendDummyInput()
		.appendField(Blockly.Msg.GENERAL_PRESSED);	
	this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Read the key pressed by a remote control');
  }
};

Blockly.Arduino['Init_generalremotecontrol'] = function(block) {

  var pin_ir = Blockly.Arduino.valueToCode(this, "PIN_IR", Blockly.Arduino.ORDER_NONE);
   
  Blockly.Arduino.includes_['include_IRremote'] = '#include <IRremote.h>\n';
 
  Blockly.Arduino.variables_['reception_function'] = 'IRrecv ir_rx('+pin_ir+');\n'+
'decode_results ir_rx_results;\n'+
'\n'+
'unsigned long fnc_ir_rx_decode()\n'+
' {\n'+
'  bool decoded=false;\n'+
'  if( ir_rx.decode(&ir_rx_results))\n'+
'	{\n'+
'		decoded=true;\n'+
'		ir_rx.resume();\n'+
'	}\n'+
'	if(decoded) \n'+
'		return ir_rx_results.value; \n'+
'	else \n'+
'		return 0;\n'+
' }\n';
  
  
  Blockly.Arduino.setups_['setup_genericRC'] = 'ir_rx.enableIRIn();\n';  
  	 	
  var code='(unsigned long)fnc_ir_rx_decode()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['IR_Remote_Key'] = {
  init: function() {
    this.setColour("#0060aa");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mando.png",65,38))
	    .appendField(Blockly.Msg.KEY)
		.appendField(new Blockly.FieldDropdown([["⬆", "0x00FF629D"], ["⬇", "0x00FFA857"],["⬅", "0x00FF22DD"],["➡", "0x00FFC23D"],["OK", "0x00FF02FD"],["1", "0x00FF6897"],["2", "0x00FF9867"],["3", "0x00FFB04F"],["4", "0x00FF30CF"],["5", "0x00FF18E7"],["6", "0x00FF7A85"],["7", "0x00FF10EF"],["8", "0x00FF38C7"],["9", "0x00FF5AA5"],["0", "0x00FF4AB5"],["*", "0x00FF42BD"],["#", "0x00FF52AD"]]), "KEY")
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('key is pressed');
  }
};

Blockly.Arduino['IR_Remote_Key'] = function(block) {
  var key_detected = this.getFieldValue('KEY');
    
  var code = '('+key_detected+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

