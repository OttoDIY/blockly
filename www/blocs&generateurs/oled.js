﻿// define blocks
'use strict';

goog.provide('Blockly.Blocks.u8g');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['OLED_init'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
     .appendField(Blockly.Msg.OTTO_HOME_TEXT + "OLED 0.96'' I²C")
     this.appendDummyInput()
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendField(Blockly.Msg.OLED_height)
     .appendField(new Blockly.FieldDropdown([["64", "64"], ["32", "32"]]), "height")
     .appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['OLED_init'] = function(block) {
  var value_height = block.getFieldValue('height');
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] = '#include <Adafruit_GFX.h>\n'
  +'#include <Adafruit_SSD1306.h>';
  Blockly.Arduino.definitions_['OLED'] = '#define SCREEN_WIDTH 128 // OLED display width, in pixels\n'
  +'#define SCREEN_HEIGHT '+value_height+'  // OLED display height, in pixels\n'
  +'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
  +'Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);';
  Blockly.Arduino.setups_['OLED']='display.begin(SSD1306_SWITCHCAPVCC, '+value_address+');\n'
  +'display.clearDisplay();\n'
  +'display.display();\n';
  return ""
};

Blockly.Blocks['OLED_init2'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
     .appendField(Blockly.Msg.OTTO_HOME_TEXT + "OLED 1.3'' I²C")
     this.appendDummyInput()
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['OLED_init2'] = function(block) {
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] = '#include <Adafruit_GFX.h>\n'
  +'#include <Adafruit_SH1106.h>';
  Blockly.Arduino.definitions_['OLED'] = '#define SCREEN_WIDTH 128 // OLED display width, in pixels\n'
  +'#define SCREEN_HEIGHT 64  // OLED display height, in pixels\n'
  +'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
  +'Adafruit_SH1106 display(OLED_RESET);';
  Blockly.Arduino.setups_['OLED']='display.begin(SH1106_SWITCHCAPVCC, '+value_address+');\n'
  +'display.clearDisplay();\n'
  +'display.display();\n';
  return ""
};

Blockly.Blocks['OLED_initU'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
     .appendField(Blockly.Msg.OTTO_HOME_TEXT + "OLED 1.3'' I²C")
    this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['OLED_initU'] = function(block) {
  Blockly.Arduino.includes_['OLED'] = '#include <Arduino.h>\n'
  +'#include <U8g2lib.h>\n'
  +'#include <Wire.h>';
  Blockly.Arduino.definitions_['OLED'] = 'U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);\n'
  ;
  Blockly.Arduino.setups_['OLED']='Wire.begin();\n'
  +'u8g2.begin();  \n'
  +'u8g2.clearBuffer();\n';
  return ""
};

Blockly.Blocks['OLED_display'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ "+Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};
Blockly.Arduino['OLED_display'] = function(block) {
  var code = 'display.display();\n' ;
  return code;
};

Blockly.Blocks['OLED_displayU'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ "+Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};
Blockly.Arduino['OLED_displayU'] = function(block) {
  var code = 'u8g2.sendBuffer(); \n' ;
  return code;
};

Blockly.Blocks['OLED_clear'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ "+Blockly.Msg.LCD_raz_tooltip);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};
Blockly.Arduino['OLED_clear'] = function(block) {
  var code = 'display.clearDisplay();\n' ;
  return code;
};

Blockly.Blocks['OLED_clearU'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ "+Blockly.Msg.LCD_raz_tooltip);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};
Blockly.Arduino['OLED_clearU'] = function(block) {
  var code = 'u8g2.clearBuffer(); \n' ;
  return code;
};

Blockly.Blocks['OLED_rotate'] = {
  init: function() {
     this.appendDummyInput()
     .appendField("🖥️ "+Blockly.Msg.ST7735_Rotate)
     .appendField(new Blockly.FieldDropdown([["0°", "0"], ["90°", "1"], ["180°", "2"], ["270°", "3"]]), "angle");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_rotate'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = 'display.setRotation('+angle+');\n';
  return code
};
Blockly.Blocks['OLED_data'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️ data")
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField("Y");
  this.appendValueInput("height")   .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField(Blockly.Msg.OLED_height);
  this.appendValueInput("print")  .setAlign(Blockly.ALIGN_RIGHT)  .appendField(Blockly.Msg.LCDP_Print);
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_data'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_size  = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.setTextSize('+value_size+');\n'
  +'display.setTextColor('+draw+');\n'
  +'display.setCursor('+value_x+','+value_y+');\n'
  +'display.println('+value_print+');\n';
  return code
};

Blockly.Blocks['OLED_dataU'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️ data")
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField("Y");
  this.appendValueInput("print")  .setAlign(Blockly.ALIGN_RIGHT)  .appendField(Blockly.Msg.LCDP_Print);
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_dataU'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'u8g2.setFont(u8g2_font_ncenB08_tr);\n'
  +'u8g2.setDrawColor('+draw+');\n'
  +'u8g2.drawStr('+value_x+','+value_y+','+value_print+');\n';
  return code
};

Blockly.Blocks['OLED_symbol'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()   .appendField("🖥️ symbol")
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")     .appendField("Y");
  this.appendValueInput("height") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField(Blockly.Msg.OLED_height);
  this.appendValueInput("print") .setAlign(Blockly.ALIGN_RIGHT)  .appendField(Blockly.Msg.LCDP_Print);
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_symbol'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_size  = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.setTextSize('+value_size+');\n'
  +'display.setTextColor('+draw+');\n'
  +'display.setCursor('+value_x+','+value_y+');\n'
  +'display.write('+value_print+');\n';
  return code
};
Blockly.Blocks['OLED_scroll'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ scroll") .appendField(new Blockly.FieldDropdown([["👈", "left"], ["👉", "right"], ["🛑", "stop"]]), "mode") ;
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};

 Blockly.Arduino['OLED_scroll'] = function(block) {
  var mode = block.getFieldValue('mode');
  var code = '';
  switch(mode) {
	case 'right':
		code = 'display.startscrollright(0x00, 0x07);\n';
    break;
    case 'left':
		code = 'display.startscrollleft(0x00, 0x07);\n';
    break;
    case 'stop':
		code = 'display.stopscroll();\n';
    break;
  }
  return code
};
Blockly.Blocks['OLED_invert'] = {
  init: function() {
    this.appendDummyInput()  .appendField("🖥️ invert") .appendField(new Blockly.FieldDropdown([[Blockly.Msg.yes, "true"], [Blockly.Msg.no, "false"]]), "mode") ;
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};

 Blockly.Arduino['OLED_invert'] = function(block) {
  var mode = block.getFieldValue('mode');
  var code = '';
  switch(mode) {
	case 'true':
		code = 'display.invertDisplay(true);\n';
    break;
    case 'false':
		code = 'display.invertDisplay(false);\n';
    break;
  }
  return code
};
Blockly.Blocks['OLED_pixel'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️.");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_pixel'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.drawPixel('+value_x+', '+value_y+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_pixelU'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️.");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_pixelU'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'u8g2.setDrawColor('+draw+');\n'
  +'u8g2.drawPixel('+value_x+', '+value_y+');\n';
  return code
};

Blockly.Blocks['OLED_line'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️_");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X1");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y1");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X2");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_line'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.drawLine('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_lineU'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️_");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X1");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y1");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X2");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_lineU'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'u8g2.setDrawColor('+draw+');\n'
  +'u8g2.drawLine('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
  return code
};

Blockly.Blocks['OLED_rectangle'] = { init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️🔲") ;
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField(Blockly.Msg.OLED_width);
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField(Blockly.Msg.OLED_height);
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_rectangle'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'display.fillRect('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n';
  else code = 'display.drawRect('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_rectangleU'] = { init: function() {
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
this.appendDummyInput()  .appendField("🖥️🔲") ;
this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField(Blockly.Msg.OLED_width);
this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField(Blockly.Msg.OLED_height);
this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
this.setInputsInline(true);
this.setPreviousStatement(true);
this.setNextStatement(true);
   this.setColour("#B655F5");
   this.setTooltip('');
   this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
 }
};

Blockly.Arduino['OLED_rectangleU'] = function(block) {
var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
var draw = ''
if(this.getFieldValue('draw') == 'TRUE') draw= "1";
else draw = "0";
var code = ''
if (this.getFieldValue('fill') == 'TRUE')code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawBox('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
else code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawFrame('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
return code
};

Blockly.Blocks['OLED_round'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️🔲");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField(Blockly.Msg.OLED_width);
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField(Blockly.Msg.OLED_height);
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("round");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_round'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_round = Blockly.Arduino.valueToCode(block, 'round', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'display.fillRoundRect('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_round+','+draw+');\n';
  else code = 'display.drawRoundRect('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_round+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_roundU'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️🔲");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField(Blockly.Msg.OLED_width);
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField(Blockly.Msg.OLED_height);
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("round");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_roundU'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
var draw = ''
if(this.getFieldValue('draw') == 'TRUE') draw= "1";
else draw = "0";
var code = ''
if (this.getFieldValue('fill') == 'TRUE')code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawRBox('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
else code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawRFrame('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
return code
};

Blockly.Blocks['OLED_circle'] = {init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️⚪") ;
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("R");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_circle'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'display.fillCircle('+value_x+', '+value_y+', '+value_width+','+draw+');\n';
  else code = 'display.drawCircle('+value_x+', '+value_y+', '+value_width+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_circleU'] = {init: function() {
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
this.appendDummyInput()  .appendField("🖥️⚪") ;
this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("R");
this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
this.setInputsInline(true);
this.setPreviousStatement(true);
this.setNextStatement(true);
   this.setColour("#B655F5");
   this.setTooltip('');
   this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
 }
};

Blockly.Arduino['OLED_circleU'] = function(block) {
var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
var draw = ''
if(this.getFieldValue('draw') == 'TRUE') draw= "1";
else draw = "0";
var code = ''
if (this.getFieldValue('fill') == 'TRUE')code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawDisc('+value_x+', '+value_y+', '+value_width+');\n';
else code = 'u8g2.setDrawColor('+draw+');\n'
+'u8g2.drawCircle('+value_x+', '+value_y+', '+value_width+');\n';
return code
};

Blockly.Blocks['OLED_triangle'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️📐");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X0");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y0");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X1");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y1");
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("X2");
  this.appendValueInput("angle")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_triangle'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_round = Blockly.Arduino.valueToCode(block, 'round', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'display.fillTriangle('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_round+','+value_angle+','+draw+');\n';
  else code = 'display.drawTriangle('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_round+','+value_angle+','+draw+');\n';
  return code
};

Blockly.Blocks['OLED_triangleU'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🖥️📐");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X0");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y0");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X1");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y1");
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("X2");
  this.appendValueInput("angle")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_triangleU'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width  = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_round = Blockly.Arduino.valueToCode(block, 'round', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code  = 'u8g2.setDrawColor('+draw+');\n'
  +'u8g2.drawTriangle('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_round+','+value_angle+');\n';
  return code
};

Blockly.Blocks['OLED_bitmap'] = {
  init: function() {
    this.appendDummyInput() .appendField("bitmap OLED")
      .appendField(new Blockly.FieldTextInput('0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0xe0, 0x10, 0x08, 0x07, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf8, 0x10, 0x08, 0x1f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x08, 0x10, 0x08, 0x10, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x30, 0x0c, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0d, 0xfe, 0x7f, 0xb0, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x10, 0x08, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x18, 0x10, 0x08, 0x18, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf0, 0x10, 0x08, 0x0f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00'), 'bitmap');
      this.appendDummyInput()  .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
      this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
     this.setHelpUrl('http://javl.github.io/image2cpp/');
  }
};

 Blockly.Arduino['OLED_bitmap'] = function(block) {
  var bitmap = block.getFieldValue('bitmap');
  Blockly.Arduino.definitions_['OLED_bitmap'] = 'const unsigned char bitmap [] PROGMEM = { '+bitmap +'};';
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.drawBitmap(0, 0,  bitmap, 128, 64,'+draw+');\n';
  return code
};

Blockly.Blocks['OLED_bitmap2'] = {
   init: function() {
    this.setColour("#B655F5");
    this.appendDummyInput().appendField("🖥️").appendField(Blockly.Msg.OLED_DrawiconName)
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("IconName"), "NAME");
    this.appendValueInput("x0").setCheck("Number").appendField(Blockly.Msg.OLED_X0);
    this.appendValueInput("y0").setCheck("Number").appendField(Blockly.Msg.OLED_Y0);
    this.appendValueInput("width").setCheck("Number").appendField(Blockly.Msg.OLED_width);
    this.appendValueInput("height").setCheck("Number").appendField(Blockly.Msg.OLED_height);
    this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led).appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
	  //this.appendDummyInput()
    //    .appendField(Blockly.Msg.OLED_COLOR)
	  //	.appendField(new Blockly.FieldDropdown([["Black","BLACK"],["White", "WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a bmp icon');
    this.setHelpUrl('http://javl.github.io/image2cpp/');
  }
};

Blockly.Arduino['OLED_bitmap2'] = function(block) {
  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
 // var Color = block.getFieldValue('COLOR');
  var draw = ''
	if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
		else draw = "BLACK";

  var code = 'display.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+','+draw+');\n';

  return code;
};

Blockly.Blocks['oled_icon'] = {
   init: function() {
    this.setColour("#B655F5");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/oled.png",33,33))
	this.appendDummyInput()
		.appendField(Blockly.Msg.OLED_IconName)
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");
	this.appendDummyInput()
		.appendField(Blockly.Msg.OLED_ValueList)
        .appendField(new Blockly.FieldTextInput("0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0xe0, 0x10, 0x08, 0x07, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf8, 0x10, 0x08, 0x1f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x08, 0x10, 0x08, 0x10, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x30, 0x0c, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0d, 0xfe, 0x7f, 0xb0, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x10, 0x08, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x18, 0x10, 0x08, 0x18, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf0, 0x10, 0x08, 0x0f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00"), "CODES");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write icon bmp image in memory');
    this.setHelpUrl('http://javl.github.io/image2cpp/');
  }
};

Blockly.Arduino['oled_icon'] = function(block) {
   var IconName = block.getFieldValue('NAME');
   var Var_Codes = block.getFieldValue('CODES');
     var card=window.localStorage.card;

  if (card !="MRTnode")
	Blockly.Arduino.includes_['define_pgmspace'] = '#include <avr/pgmspace.h>\n';

   Blockly.Arduino.definitions_['define_iconvalus_'+IconName+''] = 'const unsigned char '+IconName+'[] PROGMEM= {'+Var_Codes+'};\n';
  var code = '';
  return code;
};

Blockly.Blocks['OLED_eyes'] = { init: function() {
  this.appendDummyInput()  .appendField("👀 "+Blockly.Msg.OTTO9_EYES_TEXT)
   .appendField(new Blockly.FieldDropdown([["😃 happy", "Happy"], ["🙄 awake", "Awake"],["😦 sad", "Sad"], ["😡 angry", "Angry"], ["😟 worried", "Worried"],["😩 tired", "Tired"] ,["😴 sleep", "Sleep"],["😉 wink L", "Winkl"],["😉 wink R", "Winkr"]]), "oled_eyes");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};
Blockly.Arduino['OLED_eyes'] = function(block) {
  var oled_eyes = block.getFieldValue('oled_eyes');
  Blockly.Arduino.variables_['oledeyes'] =
  'int x = 34; // x eye posistion \n'
  +'int y = 32; //y eye position\n'
  +'int r = 22; // radius\n'
  +'int t = 8; //thickness\n'
  +'int x2 = 128-x; // 2nd x eye posistion \n'  ;
  Blockly.Arduino.definitions_['oledeyes'] =
  'void NinjaEyesAwake()\n'
+'{ u8g2.setDrawColor(1);u8g2.drawDisc(x,y,r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.setDrawColor(1);u8g2.drawDisc(x2, y, r); u8g2.setDrawColor(0);u8g2.drawDisc(x2, y, r-t);   }\n'
+'void NinjaEyesHappy()\n'
+'{ u8g2.setDrawColor(1); u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.setDrawColor(1);u8g2.drawDisc(x+(t+r)*2, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x+(t+r)*2, y, r-t);u8g2.drawBox(x-r, y, r*2+1, r+2+1);u8g2.drawBox(x-r+(t+r)*2, y, r*2+1, r+2); }\n'
+'void NinjaEyesWorried()\n'
+'{ u8g2.setDrawColor(1); u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.drawTriangle(x-r, y-r, x+r, y-r, x-r,y+r);u8g2.setDrawColor(1);u8g2.drawDisc(x+(t+r)*2, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x+(t+r)*2, y, r-t);u8g2.drawTriangle(x+(t+r)*2-r, y-r, (x+(t+r)*2)+r, y-r, (x+(t+r)*2)+r,y+r);}\n'
+'void NinjaEyesAngry()\n'
+'{ u8g2.setDrawColor(1); u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.drawTriangle(x-r, y-r, x+r+1, y-r, x+r+1,y+r);u8g2.setDrawColor(1);u8g2.drawDisc(x+t+r*2, y, r);  u8g2.setDrawColor(0);u8g2.drawDisc(x+t+r*2, y, r-t);u8g2.drawTriangle(x+t+r*2-r, y-r, (x+t+r*2)+r, y-r, (x+t+r*2)-r,y+r);}\n'
+'void NinjaEyesSleep()\n'
+'{ u8g2.setDrawColor(1);u8g2.drawBox(x-r, y-t/2, r*2, t);u8g2.drawBox(x-r+(t+r)*2, y-t/2, r*2, t);  }\n'
+'void NinjaEyesSad()\n'
+'{ u8g2.setDrawColor(1);u8g2.drawBox(x-r, y, r*2, t);u8g2.drawBox(x-r+(t+r)*2, y, r*2, t); }\n'
+'void NinjaEyesTired()\n'
+'{ u8g2.setDrawColor(1); u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.setDrawColor(1); u8g2.drawDisc(x+(t+r)*2, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x+(t+r)*2, y, r-t);u8g2.drawBox(x-r, y-r, r*2+2, r);u8g2.drawBox(x-r+(t+r)*2, y-r, r*2+2, r);}\n'
+'void NinjaEyesWinkl()\n'
+'{ u8g2.setDrawColor(1); u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.setDrawColor(1);u8g2.drawDisc(x+(t+r)*2, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x+(t+r)*2, y, r-t);u8g2.setDrawColor(0);u8g2.drawBox(x-r+(t+r)*2, y-r, r*2+2, r); }\n'
+'void NinjaEyesWinkr()\n'
+'{ u8g2.setDrawColor(1);u8g2.drawDisc(x, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x, y, r-t);u8g2.setDrawColor(1);u8g2.drawDisc(x+(t+r)*2, y, r);u8g2.setDrawColor(0);u8g2.drawDisc(x+(t+r)*2, y, r-t);u8g2.drawBox(x-r, y-r, r*2+2, r);  }\n'
;
  var code = 'u8g2.clearBuffer();\n'
  +'NinjaEyes'+oled_eyes+'();\n'
  +'u8g2.sendBuffer(); \n';
  return code;
};
