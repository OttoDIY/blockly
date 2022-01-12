"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

// Matrix GFX blocks
Blockly.Blocks['GFX_matrix_init'] = { init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/eyes.png', 58, 33, "*")).appendField(Blockly.Msg.OTTO9_EYES_TEXT+" "+Blockly.Msg.OTTO_HOME_TEXT+" "+Blockly.Msg.APDS9960_init2);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['GFX_matrix_init'] = function(block) {
Blockly.Arduino.includes_['matrix16x8'] =
'#include "HT16K33_GFX.h""\n'
+'HT16K33_GFX matrixGXF1 = HT16K33_GFX(MATRIX_COUNT, 0x70);';
Blockly.Arduino.variables_['matrix16x8'] = 
'static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},\n'
+'mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000}, \n'
+'reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},\n'
+'bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},\n'
+'robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111};\n'
+'const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";';   
Blockly.Arduino.definitions_['matrix16x8'] = 
'#define MATRIX_COUNT 1 // // Number of simulated matrices or OLED screen (1 to 4)\n'
+'#define MATRIX_ROTATION 3 // // Rotation from 0 to 3\n'
+'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
+'Adafruit_SH1106 display(OLED_RESET);';
Blockly.Arduino.setups_['matrix16x8']=
 'Wire.begin();\n';
+'matrix.setRotation(MATRIX_ROTATION);\n';
+'matrix.init();\n';
var code='';
return code; 
};


Blockly.Blocks['GFX_OLED_init'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
     .appendField("OLED 1.3'' Pins I²C")
     this.appendDummyInput()
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#4b009f");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['GFX_OLED_init'] = function(block) {
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] = 
  '#include <OLED_GFX.h>\n'
  +'OLED_GFX matrixGXF2 = OLED_GFX(0x3C, OLED_12864, MATRIX_COUNT, false, false);';
  Blockly.Arduino.variables_['matrix16x8'] = 
  'static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},\n'
  +'mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000}, \n'
  +'reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},\n'
  +'bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},\n'
  +'robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111};\n'
  +'const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";';   
  Blockly.Arduino.definitions_['matrix16x8'] = 
  '#define MATRIX_COUNT 1 // // Number of simulated matrices or OLED screen (1 to 4)\n'
  +'#define MATRIX_ROTATION 3 // // Rotation from 0 to 3\n'
  +'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
  +'Adafruit_SH1106 display(OLED_RESET);';
  Blockly.Arduino.setups_['matrix16x8']=
   'Wire.begin();\n';
  +'matrix.setRotation(MATRIX_ROTATION);\n';
  +'matrix.init();\n';  
  return ""
};

Blockly.Blocks['GFX_display'] = {init: function() {
  this.appendDummyInput()  .appendField("👀 "+Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip('');
  this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
};
Blockly.Arduino['GFX_display'] = function(block) {
var code = 'matrix.display();\n' ;
return code;
};

Blockly.Blocks['GFX_clear'] = {init: function() {
this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYES_CLEAR_TEXT);
this.setInputsInline(false);
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setColour("#4b009f");
this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
};
Blockly.Arduino['GFX_clear'] = function(block) {
var code = 'matrix.clearDisplay();\n';
return code;
};

Blockly.Blocks['GFX_pixel']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput() .appendField("👀 . X")
  this.appendValueInput("X")  .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['GFX_pixel'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
  else draw = "GFX_BLACK";
  var code = 
  'void drawPixel('+valuex+','+valuey+','+draw+');\n';
  return code;
};

Blockly.Blocks['GFX_line']={ init:function(){
  this.appendDummyInput() .appendField("👀 _ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['GFX_line'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
  else draw = "GFX_BLACK";
  var code = 'matrix.drawLine('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  return code;
};

Blockly.Blocks['GFX_rectangle']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput() .appendField("👀 🔲 X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['GFX_rectangle'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
  else draw = "GFX_BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'matrix.fillRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  else code = 'matrix.drawRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  return code
};

Blockly.Blocks['GFX_circle']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("👀 ⚪ X") 
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['GFX_circle'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var valuer = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
  else draw = "GFX_BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'matrix.fillCircle('+ valuex +','+valuey+','+ valuer +','+draw+');\n';
  else code = 'matrix.drawCircle('+ valuex +','+valuey+','+ valuer +', '+draw+');\n';
  return code
};

Blockly.Blocks['GFX_bitmap'] = {
  init: function() {
   this.setColour("#4b009f");
   this.appendDummyInput().appendField("🖥️").appendField(Blockly.Msg.OLED_DrawiconName)
   this.appendDummyInput().appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
   this.appendValueInput("x0").setCheck("Number").appendField(Blockly.Msg.OLED_X0);
   this.appendValueInput("y0").setCheck("Number").appendField(Blockly.Msg.OLED_Y0);
   this.appendValueInput("width").setCheck("Number").appendField(Blockly.Msg.OLED_width);
   this.appendValueInput("height").setCheck("Number").appendField(Blockly.Msg.OLED_height);
   this.appendDummyInput() .appendField("✏️").appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
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

Blockly.Arduino['GFX_bitmap'] = function(block) {
  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
 // var Color = block.getFieldValue('COLOR');
  var draw = ''
	if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
		else draw = "GFX_BLACK";
  
  var code = 
  'matrix.drawBitmap(('+x0+','+y0+','+IconName+','+width+','+height+',true,'+draw+',GFX_BLACK);\n';
 
  return code;
};

