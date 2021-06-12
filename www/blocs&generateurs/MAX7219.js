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

goog.provide('Blockly.Blocks.MAX7219');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_MAX7219_ledmatrix'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME)
	this.appendValueInput("PIN_DAT", "Number")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_DAT)
	this.appendValueInput("PIN_CLK", "Number")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_CLK)
	this.appendValueInput("PIN_CS", "Number")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_CS)
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4']]), "NumberDisplays")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the library to use the led matrixs');
  }
};

Blockly.Arduino['Init_MAX7219_ledmatrix'] = function(block) {
	
  var pin_clk = Blockly.Arduino.valueToCode(this, "PIN_CLK", Blockly.Arduino.ORDER_NONE);
  var pin_dat = Blockly.Arduino.valueToCode(this, "PIN_DAT", Blockly.Arduino.ORDER_NONE);
  var pin_cs = Blockly.Arduino.valueToCode(this, "PIN_CS", Blockly.Arduino.ORDER_NONE);
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  
  Blockly.Arduino.includes_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_LM'] = 'LedControl lclm=LedControl('+pin_dat+','+pin_clk+','+pin_cs+','+numberDisplays+');\n';
     	 	 
  var code='';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_shutdown'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
     this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_SHUTDOWN)
		.appendField(new Blockly.FieldDropdown([['ON', 'false'], ['OFF', 'true']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The device will switch off/on all the LEDs on the matrix, but the data is retained!!.');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_shutdown'] = function(block) {

  var power = this.getFieldValue('power'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.shutdown('+numberDisplays+','+power+');\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_brightness'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("BRIGHTNESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_Brightness)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config the brigthness of the leds');
  }
};



Blockly.Arduino['MAX7219_ledmatrix_brightness'] = function(block) {
  var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.setIntensity('+numberDisplays+','+brightness+');\n';
  return code;
};


Blockly.Blocks['MAX7219_ledmatrix_clear'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_CLEAR)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Clear the display');
  }
};



Blockly.Arduino['MAX7219_ledmatrix_clear'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.clearDisplay('+numberDisplays+');\n';
  return code;
};


Blockly.Blocks['MAX7219_ledmatrix_draw'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_PAINT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('    1')
        .appendField('   2')
        .appendField('    3')
        .appendField('   4')
        .appendField('    5')
        .appendField('   6')
        .appendField('    7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel0')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel1')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel2')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel3')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel4')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel5')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel6')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel8')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel9')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel10')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel11')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel12')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel13')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel14')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel16')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel17')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel18')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel19')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel20')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel21')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel22')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel24')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel25')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel26')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel27')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel28')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel29')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel30')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel32')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel33')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel34')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel35')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel36')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel37')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel38')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel40')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel41')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel42')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel43')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel44')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel45')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel46')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel48')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel49')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel50')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel51')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel52')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel53')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel54')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
		.appendField(new Blockly.FieldColour('#ffffff'), 'Pixel56')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel57')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel58')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel59')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel60')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel61')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel62')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Paint a image drawn in this block');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_draw'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var code = '';
  var rowcounter=0;
  var rowvalue='B';
  var rowline=0;
  for (var i=0; i<64; i++) {
	
	if (this.getFieldValue('Pixel' + i) != '#ffffff') 
		rowvalue=rowvalue+'1';
	else
		rowvalue=rowvalue+'0';
	
	rowcounter+=1;
	if (rowcounter==8)
		{
		 code+='lclm.setRow('+numberDisplays+','+rowline+','+rowvalue+');';
		 rowcounter=0;
		 rowvalue='B';
		 rowline=rowline+1;
		}
  };
  code+='\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_row'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Row")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Row)
	this.appendValueInput("VALUE")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_value)	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_row'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = Blockly.Arduino.valueToCode(this, 'Row', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
   
     	 	 
  var code='lclm.setRow('+numberDisplays+','+row+','+value+');\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_column'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Column")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Column)
	this.appendValueInput("VALUE")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_value)	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Arduino['MAX7219_ledmatrix_column'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var Column = Blockly.Arduino.valueToCode(this, 'Column', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
   
     	 	 
  var code='lclm.setColumn('+numberDisplays+','+Column+','+value+');\n';
  return code;
};



Blockly.Blocks['MAX7219_ledmatrix_led'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Row")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Row)
	this.appendValueInput("Column")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Column)
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_Led)
		.appendField(new Blockly.FieldDropdown([['ON', 'true'], ['OFF', 'false']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Arduino['MAX7219_ledmatrix_led'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = Blockly.Arduino.valueToCode(this, 'Row', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var Column = Blockly.Arduino.valueToCode(this, 'Column', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = this.getFieldValue('power');
   
     	 	 
  var code='lclm.setLed('+numberDisplays+','+row+','+Column+','+value+');\n';
  return code;
};

Blockly.Blocks['MAX7219_animation'] = {
    init: function() {
		 this.setColour("#4b009f");
	     this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
      this.appendDummyInput() .appendField(Blockly.Msg.matrice+" animation");
      this.appendDummyInput() .appendField(new Blockly.FieldTextInput('0x0010107c10100000,0x0000003c00000000,0x006c38fe386c0000,0x00060c1830600000,0x60660c1830660600,0x00003c003c000000,0x000000365c000000'), 'bitmap');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
            .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
      this.setInputsInline(false);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
      this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
    }
  };
   Blockly.Arduino['MAX7219_animation'] = function(block) {
    var bitmap = block.getFieldValue('bitmap');
	var numberDisplays = this.getFieldValue('NumberDisplays'); 
    var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
    Blockly.Arduino.variables_['matrix_animation'] = 'int ii = 0;';
    Blockly.Arduino.definitions_['matrix_animation'] ='const uint64_t IMAGES[] = {'+ bitmap +'};\n'
    +'const int IMAGES_LEN = sizeof(IMAGES)/8;\n';
    Blockly.Arduino.userFunctions_['matrix_animation'] = 'void displayImage(uint64_t image) {for (int ii = 0; ii < 8; ii++) { byte row = (image >> ii * 8) & 0xFF; for (int jj = 0; jj < 8; jj++) { lclm.setLed('+numberDisplays+', ii, jj, bitRead(row, jj)); } } }';
    var code = 'displayImage(IMAGES[ii]);\n'
    +'if (++ii >= IMAGES_LEN ) { ii = 0;} \n'
    +'delay(' + dropdown_otto_move_speed + ');\n';
    return code
  };


