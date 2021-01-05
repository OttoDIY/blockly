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

goog.provide('Blockly.Blocks.advanced');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['keyboard_function'] = {
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/keyboard.png",46,38))
        .appendField(Blockly.Msg.KeyboardFunction)
        .appendField(new Blockly.FieldDropdown([['Press key','1'],['Release','2'],['Only press','3']]), "KEY_FUN");
   	this.appendValueInput("SelectedKey")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.");
  }
};


Blockly.Arduino['keyboard_function'] = function(block) {
	
  var key_function = block.getFieldValue('KEY_FUN');
  var SelectedKey = Blockly.Arduino.valueToCode(this, 'SelectedKey', Blockly.Arduino.ORDER_ATOMIC);
  var code;
  
  Blockly.Arduino.includes_['include_keyboard'] = '#include <Keyboard.h>\n';
  Blockly.Arduino.setups_['keyboard_begin'] = 'Keyboard.begin();\n';
  
  if (key_function==1)
	  code = 'Keyboard.write('+SelectedKey+');\n';
  else if (key_function==2)
	  code = 'Keyboard.release('+SelectedKey+');\n';
    else
       code = 'Keyboard.press('+SelectedKey+');\n';
  
  return code;
};



Blockly.Blocks['key_pressed'] = {
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/key.png",76,38))
	    .appendField(Blockly.Msg.KeyPressed)
        .appendField(new Blockly.FieldDropdown([['A','\'A\''],['B','\'B\''],['C','\'C\''],['D','\'D\''],['E','\'E\''],['F','\'F\''],['G','\'G\''],['H','\'H\''],['I','\'I\''],['J','\'J\''],['K','\'K\''],['L','\'L\''],['M','\'M\''],['N','\'N\''],['Ñ','\'Ñ\''],['O','\'O\''],['P','\'P\''],['Q','\'Q\''],['R','\'R\''],['S','\'S\''],['T','\'T\''],['U','\'U\''],['V','\'V\''],['W','\'W\''],['X','\'X\''],['Y','\'Y\''],['Z','\'Z\''],['a','\'a\''],['b','\'b\''],['c','\'c\''],['d','\'d\''],['e','\'e\''],['f','\'f\''],['g','\'g\''],['h','\'h\''],['i','\'i\''],['j','\'j\''],['k','\'k\''],['l','\'l\''],['m','\'m\''],['n','\'n\''],['ñ','\'ñ\''],['o','\'o\''],['p','\'p\''],['q','\'q\''],['r','\'r\''],['s','\'s\''],['t','\'t\''],['u','\'u\''],['v','\'v\''],['w','\'w\''],['x','\'x\''],['y','\'y\''],['z','\'z\''],['1','\'1\''],['2','\'2\''],['3','\'3\''],['4','\'4\''],['5','\'5\''],['6','\'6\''],['7','\'7\''],['8','\'8\''],['9','\'9\''],['0','\'0\''],['!','\'!\''],['"','\'"\''],['·','\'·\''],['$','\'$\''],['%','\'%\''],['&','\'&\''],['/','\'/\''],['(','\'(\''],[')','\')\''],['=','\'=\''],['?','\'?\''],['¿','\'¿\''],[';','\';\''],[':','\':\''],['-','\'-\''],[',','\',\''],['.','\'.\''],['_','\'_\''],['{','\'{\''],['}','\'}\''],['[','\'[\''],[']','\']\''],['¡','\'¡\''],['LEFT_CTRL','0x80'],['LEFT_SHIFT','0x81'],['LEFT_ALT','0x82'],['LEFT_GUI','0x83'],['RIGHT_CTRL','0x84'],['RIGHT_SHIFT','0x85'],['RIGHT_ALT','0x86'],['RIGHT_GUI','0x87'],['UP_ARROW','0xDA'],['DOWN_ARROW','0xD9'],['LEFT_ARROW','0xD8'],['RIGHT_ARROW','0xD7'],['BACKSPACE','0xB2'],['TAB','0xB3'],['RETURN','0xB0'],['ESC','0xB1'],['INSERT','0xD1'],['DELETE','0xD4'],['PAGE_UP','0xD3'],['PAGE_DOWN','0xD6'],['HOME','0xD2'],['END','0xD5'],['CAPS_LOCK','0xC1'],['F1','0xC2'],['F2','0xC3'],['F3','0xC4'],['F4','0xC5'],['F5','0xC6'],['F6','0xC7'],['F7','0xC8'],['F8','0xC9'],['F9','0xCA'],['F10','0xCB'],['F11','0xCC'],['F12','0xCD']]), "KEY_PRESSED");
   	this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip("These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.");
  }
};



Blockly.Arduino['key_pressed'] = function(block) {
  var code = this.getFieldValue('KEY_PRESSED');
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['keyboard_text'] = {
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/keyboard.png",53,38))
        .appendField(Blockly.Msg.KeyboardFunction)
   	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.WriteText);
	this.appendDummyInput()
	    .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.LineFeed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.");
  }
};

Blockly.Arduino['keyboard_text'] = function(block) {
  
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
   
   
  Blockly.Arduino.includes_['include_keyboard'] = '#include <Keyboard.h>\n';
  Blockly.Arduino.setups_['keyboard_begin'] = 'Keyboard.begin();\n';
  
 if(logic=='TRUE')
    var code = 'Keyboard.println(String('+value_texttoprint+'));\n';
  else
   var code = 'Keyboard.print(String('+value_texttoprint+'));\n';
 
  return code;
};


Blockly.Blocks['mouse_function'] = {
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mouse.png",46,38))
        .appendField(Blockly.Msg.MouseFunction)
        .appendField(new Blockly.FieldDropdown([['Click','1'],['Press','2'],['Release','3']]), "MOUSE_BUTTON");
   	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['Left','1'],['Right','2'],['Center','3']]), "MOUSE_BUTTON2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.");
  }
};


Blockly.Arduino['mouse_function'] = function(block) {
	
  var mouse_button = block.getFieldValue('MOUSE_BUTTON');
  var mouse_button2 = block.getFieldValue('MOUSE_BUTTON2');
  
  var code;
  
  Blockly.Arduino.includes_['include_mouse'] = '#include <Mouse.h>\n';
  Blockly.Arduino.setups_['mouse_begin'] = 'Mouse.begin();\n';
    
  if (mouse_button==1)
	  {
		if (mouse_button2==1)  
			code = 'Mouse.click(MOUSE_LEFT);\n';
			else if (mouse_button2==2)
			    code = 'Mouse.click(MOUSE_RIGHT);\n';
				else
		            code = 'Mouse.click(MOUSE_MIDDLE);\n';
	  } 
  else if (mouse_button==2)
	{
	  if (mouse_button2==1)  
			code = 'Mouse.press(MOUSE_LEFT);\n';
			else if (mouse_button2==2)
			    code = 'Mouse.press(MOUSE_RIGHT);\n';
				else
		            code = 'Mouse.press(MOUSE_MIDDLE);\n';
	}
    else
	{
       if (mouse_button2==1)  
			code = 'Mouse.release(MOUSE_LEFT);\n';
			else if (mouse_button2==2)
			    code = 'Mouse.release(MOUSE_RIGHT);\n';
				else
		            code = 'Mouse.release(MOUSE_MIDDLE);\n';
	   
	}
  return code;
};




Blockly.Blocks['mouse_move'] = {
  init: function() {
    this.setColour("#2a93e8");
    this.appendValueInput("axis_x","Number")
		.appendField(new Blockly.FieldImage("media/mouse.png",46,38))
        .appendField(Blockly.Msg.MouseMoveX)
		.setCheck("Number")
   	this.appendValueInput("axis_y","Number")
		.appendField(Blockly.Msg.MouseMoveY)
        .setCheck("Number")
	this.appendValueInput("wheel","Number")
		.appendField(Blockly.Msg.MouseMoveW)
        .setCheck("Number")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.");
  }
};


Blockly.Arduino['mouse_move'] = function(block) {
	
  var mouse_move_x = Blockly.Arduino.valueToCode(block, 'axis_x', Blockly.Arduino.ORDER_ATOMIC);
  var mouse_move_y = Blockly.Arduino.valueToCode(block, 'axis_y', Blockly.Arduino.ORDER_ATOMIC);
  var mouse_move_w = Blockly.Arduino.valueToCode(block, 'wheel', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['include_mouse'] = '#include <Mouse.h>\n';
  Blockly.Arduino.setups_['mouse_begin'] = 'Mouse.begin();\n';
    
  var code = 'Mouse.move('+mouse_move_x+','+mouse_move_y+','+mouse_move_w+');\n';

  return code;
};

