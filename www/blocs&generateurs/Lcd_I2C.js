'use strict';

goog.provide('Blockly.Blocks.LcdI2C');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['lcdi2c_setup'] = {
   init: function() {
   this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x3F"), "NAME");
   this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    
  }
};

Blockly.Arduino['lcdi2c_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.includes_['define_lcd'] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    
   Blockly.Arduino.setups_['setup_lcdi2c']='lcd.init();\n'

  var code = '';
  return code;
};

Blockly.Blocks['lcdi2c_clear'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Arduino['lcdi2c_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Blocks['lcdi2c_home'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalHome');
  }
};


Blockly.Arduino['lcdi2c_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.home();\n';
  return code;
};

Blockly.Blocks['lcdi2c_setcursor'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.LCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalSetCursor');
  }
};

Blockly.Arduino['lcdi2c_setcursor'] = function(block) {
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  
  
  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1; 
  
 
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  code+='lcd.print('+value_texttoprint+');\n';
  return code;
};

Blockly.Blocks['lcdi2c_setcursoralone'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalSetCursor');
  }
};

Blockly.Arduino['lcdi2c_setcursoralone'] = function(block) {
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
   
  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1;
  
 
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  return code;
};


Blockly.Blocks['lcdi2c_display'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_Display)
		.appendField(new Blockly.FieldDropdown([["Display", "1"], ["No Display", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalDisplay');
  }
};

Blockly.Arduino['lcdi2c_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.display();\n';
   else
     var code = 'lcd.noDisplay();\n';
 
  return code;
};


Blockly.Blocks['lcdi2c_scrollDisplay'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_scrollDisplay)
		.appendField(new Blockly.FieldDropdown([["Left", "1"], ["Right", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Arduino['lcdi2c_scrollDisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.scrollDisplayLeft();\n';
   else
     var code = 'lcd.scrollDisplayRight();\n';
  
  return code;
};

Blockly.Blocks['lcdi2c_setBacklight'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_setBcklight)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Arduino['lcdi2c_setBacklight'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.backlight();\n';
   else
     var code = 'lcd.noBacklight();\n';
  
  return code;
};

Blockly.Blocks['lcdi2c_showCursor'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_showCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Arduino['lcdi2c_showCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.cursor();\n';
   else
     var code = 'lcd.noCursor();\n';
  
  return code;
};


Blockly.Blocks['lcdi2c_blinkCursor'] = {
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",53,38))
        .appendField(Blockly.Msg.LCDP_blinkCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Arduino['lcdi2c_blinkCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.blink();\n';
   else
     var code = 'lcd.noBlink();\n';
  
  return code;
};
