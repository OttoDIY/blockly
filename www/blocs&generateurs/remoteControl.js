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
	var card=window.localStorage.card;
    this.setColour("#0060aa");
	this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/genericRC.png",57,38))
		.appendField(Blockly.Msg.GENERAL_IR)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_IR");	
		
	this.appendDummyInput()
		.appendField(Blockly.Msg.GENERAL_PRESSED);	
	this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Read the key pressed by a remote control');
  }
};

Blockly.Arduino['Init_generalremotecontrol'] = function(block) {

  var pin_ir = this.getFieldValue('PIN_IR');
   
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

Blockly.Blocks['Init_remotecontrolMRT'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/genericRC.png",26,38))
		.appendField(Blockly.Msg.MRT_IR)
	this.appendValueInput("PIN_IR", "Number")
		.setCheck("Number")
		.appendField(Blockly.Msg.PIN2)
  	this.appendDummyInput()
        .appendField(Blockly.Msg.MRT_CHANNEL)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'], ]), "CHANNEL");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('My robot Time Remote Control inicialization. Select the channel and the pin. The pin must be an interrupt pin');
  }
};


Blockly.Arduino['Init_remotecontrolMRT'] = function(block) {

  var pin_ir = Blockly.Arduino.valueToCode(this, "PIN_IR", Blockly.Arduino.ORDER_NONE);
  var Channel = this.getFieldValue('CHANNEL');
  
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <EnableInterrupt.h>\n';
  Blockly.Arduino.definitions_['defines_remoteMRT'] = '#define Timeout 500\n'+
'#define Shift 8\n' +
'unsigned long time, dtime,timeout_mark;\n' +
'unsigned long res = 0;\n' +
'unsigned long Button_ID = 0;\n' +
'unsigned int buf = 0;\n' +
'byte impuls = 1;\n' +
'byte Channl_ID = 1;\n' +
'byte Button_en = 0;\n' +
'byte state = 0;\n' +
'byte Channl_buf = 0;\n' +

'// Return if the key was pressed\n' +
'bool RC(long BT_ID)\n' +
'{ \n' +
'  if (Timeout < millis() - timeout_mark)\n' +
'   Button_ID = 0x733;\n' +
'  if (BT_ID == Button_ID) \n' +
'    return 1;\n' +
'  return 0;  \n' +  
'}\n' +
'\n' +
'//Configuration Remote Control\n' +
'\n' +
'void IRRC_setup(int pin, uint8_t Channl)\n' +
'{\n' +
'  \n' +
'  pinMode(pin, INPUT);     //set the pin to input\n' +
'  digitalWrite(pin, HIGH); //use the internal pullup resistor\n' +
'  \n' +
'  time = micros();  \n' +
'  \n' +
'  enableInterrupt(pin, change, CHANGE);\n' +
'  \n' +
' switch ( Channl )\n' +
'  {\n' +
'    case 1:\n' +
'   Channl_ID = 0xFC;\n' +
'    return;\n' +
'    case 2:\n' +
'    Channl_ID = 0x3C;\n' +
'    return;\n' +
'    case 3:\n' +
'    Channl_ID = 0xCC;\n' +
'    return;  \n' +      
'    case 4:\n' +
'    Channl_ID = 0x0C;\n' +
'    return;\n' +
'    case 5:\n' +
'    Channl_ID = 0xF0;\n' +
'    return;\n' +
'    case 6:\n' +
'    Channl_ID = 0x30;\n' +
'    return;\n' +
'    case 7:\n' +
'    Channl_ID = 0xC0;\n' +
'    return;\n' +
'    case 8:\n' +
'    Channl_ID = 0x00;\n' +
'    return;\n' +
'       //default:\n' +
'  }\n' +
'}\n' +
'\n' +
'//Interrupt function\n' +
'void change()\n' +
'{\n' +
'   \n' +
'  dtime = micros();\n' +
'  buf = dtime - time ;\n' +
'  time = dtime;\n' +
'\n' +
'  //procesar la duración del pulso (200 redondeando hacia arriba con buf% 200> 101 y (o) si el pulso es <101 asignación de una sola longitud)\n' +
'  if (buf % 200 > 101)\n' +
'  {\n' +
'    buf = (buf / 200) + 1;\n' +
'  }\n' +
'  else \n' +
'  {\n' +
'    buf = buf / 200;\n' +
'  }\n' +
'  if (buf == 0) buf = 1;\n' +
'\n' +
'  if (state == 0) // Initial state\n' +
'  {\n' +
'      if (!impuls) //Checking the first bits (000)\n' +
'      {\n' +
'        state++;\n' +
'        res = 0;\n' +
'        res = res << buf;\n' +
'        //Serial.println("Start");\n' +
'      }\n' +
'  } else {\n' +
'    if (impuls)\n' +
'    {\n' +
'      res = res << buf;\n' +
'      for (int i = 0; i < buf ; i++) \n' +
'     {\n' +
'        res |= 1 << i ;\n' +
'      }\n' +
'    }else{\n' +
'      res = res << buf;\n' +
'\n' +
'      if ((byte)(res & 0x7F) == 0x38)\n' +
'      { \n' +
'        buf = 1;\n' +
'        for (int i = 1; i < Shift; i ++)\n' +
'          buf = (buf << 1) + 1; \n' +
'\n' +
'        Channl_buf = (res >> 6) & buf ;\n' +
'\n' +
'        if (Channl_buf == Channl_ID)\n' +
'        {\n' +
'          Button_ID = res >> (6+Shift);\n' +
'          while(!(Button_ID & 1)) Button_ID = Button_ID >> 1; \n' +
'          timeout_mark = millis();\n' +
'              //Serial.println (Button_ID, HEX);\n' +
'        }\n' +
'        state = 0;\n' +
'        res = 0;\n' +
'      }\n' +
'    }  \n' +
'  }\n' +
'  impuls = !impuls;\n' +
'}	 \n';
	 	 
	 
  var code = 'IRRC_setup('+pin_ir+','+Channel+');\n';
  return code;
};

Blockly.Blocks['IR_RemoteMRT_Key'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#0060aa");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/remotecontrol.png",65,38))
	    .appendField(Blockly.Msg.MRT_KEY)
		.appendField(new Blockly.FieldDropdown([["UP", "0x1FC3"], ["DOWN", "0x1F"],["LEFT", "0x07"],["RIGHT", "0x73"],["UP and LEFT", "0x7C3"],["UP and RIGHT", "0x7F"],["DOWN and LEFT", "0x70F"],["DOWN and RIGHT", "0x1CF"],["F1", "0x7CF"],["F2", "0x1C3F"],["F3", "0x7F3"],["F4", "0x1CCF"],["F5", "0x1F0F"],["F6", "0x703"],["OFF", "0x733"]]), "KEY")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MRT_PRESSED)
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('Check if the MRT remote control ir key is pressed');
  }
};

Blockly.Arduino['IR_RemoteMRT_Key'] = function(block) {
  var key_detected = this.getFieldValue('KEY');
    
  var code = 'RC('+key_detected+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};












