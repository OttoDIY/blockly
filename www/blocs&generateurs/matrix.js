"use strict";
goog.provide('Blockly.Blocks.matrix');
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

// Matrix 16x8

Blockly.Blocks['matrix16x8_init'] = {  init: function() {
	var card=window.localStorage.card;
	this.setColour("#B655F5");
	this.appendDummyInput()	.appendField(new Blockly.FieldImage("media/eyes.png",58,33))    .appendField(Blockly.Msg.TM1640_init)
	this.appendDummyInput()	.appendField(Blockly.Msg.TM1640_SCL).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_SCL");
	this.appendDummyInput()	.appendField(Blockly.Msg.TM1640_SDA).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_SDA");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("TM1640 LED matrix 16x8");
	this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['matrix16x8_init'] = function(block) {
// var pin_scl = Blockly.Arduino.valueToCode(this, "PIN_SCL", Blockly.Arduino.ORDER_NONE);
 //var pin_sda = Blockly.Arduino.valueToCode(this, "PIN_SDA", Blockly.Arduino.ORDER_NONE);
  var pin_scl = this.getFieldValue('PIN_SCL');
  var pin_sda = this.getFieldValue('PIN_SDA');
 Blockly.Arduino.includes_['define_Adafruit_GFX'] = '#include <Adafruit_GFX.h>\n';
 Blockly.Arduino.includes_['ematrix16x8'] = '#include <TM1640.h>\n'
  +'#include <TM16xxMatrixGFX.h>\n'
  +'TM1640 module('+pin_scl+', '+pin_sda+');\n'
  +'#define MODULE_SIZECOLUMNS 16    // number of GRD lines, will be the y-height of the display \n'
  +'#define MODULE_SIZEROWS 8    // number of SEG lines, will be the x-width of the display\n'
  +'TM16xxMatrixGFX ematrix(&module, MODULE_SIZECOLUMNS, MODULE_SIZEROWS);    // TM16xx object, columns, rows';
  Blockly.Arduino.setups_['ematrix16x8']='ematrix.setIntensity(7); // Set brightness between 0 and 7 \n'
  +' ematrix.setMirror(false, true); \n'
  +' ematrix.setRotation(0);\n';
 var code='';
 return code;
};

Blockly.Blocks['eyes_init'] = { init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/eyes.png', 58, 33, "*")).appendField(Blockly.Msg.OTTO_HOME_TEXT + Blockly.Msg.MAX7219_LM_NAME+" "+Blockly.Msg.APDS9960_init2);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['eyes_init'] = function(block) {
Blockly.Arduino.includes_['ematrix16x8'] = '#include <Wire.h>\n'
+'#include "Adafruit_LEDBackpack.h"\n'
+'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
Blockly.Arduino.setups_['ematrix16x8']='ematrix.begin(0x70);  // pass in the address\n';
var code='';
return code;
};

Blockly.Blocks["eyes_brightness"]={init:function(){
  this.appendValueInput("brightness").setCheck("Number") .appendField("👀 "+" "+Blockly.LKL_VS2_BRIGHTNESS );
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
  this.setHelpUrl('https://xantorohara.github.io/led-matrix-editor/')}
};
Blockly.Arduino["eyes_brightness"]=function(block){
var brightness=Blockly.Arduino.valueToCode(block, "brightness");
  return "ematrix.setBrightness(" + brightness + ");//the brightness of the LEDs use values from 0 to 15 only\n"
};

Blockly.Blocks['eyes_display'] = {init: function() {
    this.appendDummyInput()  .appendField("👀 "+Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
};
Blockly.Arduino['eyes_display'] = function(block) {
  var code = 'ematrix.writeDisplay();\n' ;
  return code;
};

Blockly.Blocks['eyes_clear'] = {init: function() {
  this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYES_CLEAR_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
  this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
};
Blockly.Arduino['eyes_clear'] = function(block) {
var code = 'ematrix.clear();\n';
return code;
};

Blockly.Blocks['matrizled_clear2'] = { init: function() {
  this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYES_CLEAR_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};
Blockly.Arduino['matrizled_clear2'] = function(block) {
var code = ' ematrix.fillScreen(0);\n';
return code;
};

Blockly.Blocks['eyes_rotate'] = { init: function() {
  this.appendDummyInput() .appendField("👀 "+Blockly.Msg.ST7735_Rotate) .appendField(new Blockly.FieldDropdown([["0°", "0"], ["90°", "1"], ["180°", "2"], ["270°", "3"]]), "angle");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip('');
  this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
 };

 Blockly.Arduino['eyes_rotate'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = 'ematrix.setRotation('+angle+');\n';
  return code
};

Blockly.Blocks['eyes_blink'] = {
  init: function() {
     this.appendDummyInput()
     .appendField("👀 blynk")
     .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "rate");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');
   }
 };

 Blockly.Arduino['eyes_blink'] = function(block) {
  var rate = block.getFieldValue('rate');
  var code = 'ematrix.blinkRate('+rate+');\n';
  return code
};

Blockly.Blocks['eyes_face'] = { init: function() {
  this.appendDummyInput()  .appendField("👀 "+Blockly.Msg.OTTO9_EYES_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_EYES_CHOICE), "otto9_eyes_choice");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};
Blockly.Arduino['eyes_face'] = function(block) {
  var dropdown_otto9_eyes_choice = block.getFieldValue('otto9_eyes_choice');
  Blockly.Arduino.definitions_['matrizled'] = 'static const uint8_t PROGMEM\n'
	+'eyes1_bmp[] = {  B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000,B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000},\n'
  +'eyes2_bmp[] = {  B00111110,B01111111,B01111111,B01100011,B01100011,B01100011,B00111110,B00000000,B00111110,B01111111,B01111111,B01100011,B01100011,B01100011,B00111110,B00000000},\n'
  +'happy1_bmp[] = {  B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000,B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000},\n'
	+'happy2_bmp[] = {  B00000000,B01111100,B01111110,B00000110,B00000110,B01111110,B01111100,B00000000,B00000000,B01111100,B01111110,B00000110,B00000110,B01111110,B01111100,B00000000},\n'
	+'happy3_bmp[] = {  B00000000,B01111000,B01111100,B00001110,B00001110,B01111100,B01111000, B00000000,B00000000,B01111000,B01111100,B00001110,B00001110,B01111100,B01111000, B00000000},\n'
	+'happy4_bmp[] =  {  B00000000,B01110000,B01111000,B00011000,B00011000,B01111000,B01110000,B00000000,B00000000,B01110000,B01111000,B00011000,B00011000,B01111000,B01110000,B00000000},\n'
	+'sad1_bmp[] =  {  B00000000,B00111000,B01111000,B01100000,B01100000,B01111000,B00111000,B00000000,B00000000,B00111000,B01111000,B01100000,B01100000,B01111000,B00111000,B00000000},\n'
	+'sad2_bmp[] =  {  B00000000,B00111110,B01111110,B01100000,B01100000,B01111110,B00111110,B00000000,B00000000,B00111110,B01111110,B01100000,B01100000,B01111110,B00111110,B00000000,},\n'
	+'sad3_bmp[] =  {  B00000000,B00011000,B00011000,B00011000,B00011000,B00011000,B00011000,B00000000,B00000000,B00011000,B00011000,B00011000,B00011000,B00011000,B00011000,B00000000},\n'
  +'angry1_bmp[] = {  B00000000,B00011110,B00111100,B01111000,B01110000,B00100000,B00000000,B00000000,B00000000,B00000000,B00100000,B01110000,B01111000,B00111100,B00011110,B00000000},\n'
  +'angry2_bmp[] = {  B00000000,B00011111,B00111110,B01111100,B11111000,B11110000,B01100000,B00000000,B00000000,B01100000,B11110000, B11111000,B01111100,B00111110,B00011111,B00000000}, \n'
	+'love1_bmp[] = {  B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000,B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000},\n'
	+'love2_bmp[] = {  B00001100,B00011110,B00111110,B01111100,B00111110,B00011110,B00001100,B00000000,B00000000,B00001100,B00011110,B00111110,B01111100,B00111110,B00011110,B00001100},\n'
	+'sleep1_bmp[] = {  B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000},\n'
	+'sleep2_bmp[] = {  B00000000,B01000010,B01100010,B01110010,B01011010,B01001110,B01000110,B00000000,B00000000,B01000010,B01100010,B01110010,B01011010,B01001110,B01000110,B00000000},\n'
  +'confused_bmp[] = {  B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000,B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000},\n'
	+'dizzy1_bmp[] = {  B00000000,B01110000,B00111000,B00011100,B00111000,B01110000,B00111000,B00000000,B00000000,B01110000,B00111000,B00011100,B00111000,B01110000,B00111000,B00000000},\n'
	+'dizzy2_bmp[] = {  B00000000,B00011100,B00111000,B01110000,B00111000,B00011100,B00111000,B00000000,B00000000,B00011100,B00111000,B01110000,B00111000,B00011100,B00111000,B00000000},\n'
  +'wave1_bmp[] = {  B00011100,B00111000,B01110000,B00111000,B00011100,B00111000,B01110000,B00000000,B00000000,B00011100,B00111000,B01110000,B00111000,B00011100,B00111000,B01110000},\n'
	+'wave2_bmp[] = {  B00111000,B00111000,B00111000,B00111000,B00111000,B00111000,B00111000,B00000000,B00000000, B00111000,B00111000,B00111000,B00111000,B00111000,B00111000,B00111000},\n'
	+'wave3_bmp[] = {  B01110000,B00111000,B00011100,B00111000,B01110000,B00111000,B00011100,B00000000, B00000000,B01110000,B00111000,B00011100,B00111000,B01110000,B00111000,B00011100,},\n'
	+'magic1_bmp[] = {  B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000},\n'
	+'magic2_bmp[] = {  B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000},\n'
	+'magic3_bmp[] = {  B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000},\n'
  +'fail_bmp[] = {  B00000000,B00110000,B01111000,B01111000,B01111100,B00111100,B00001000,B00000000,B00000000,B00001000,B00111100,B01111100,B01111000,B01111000,B00110000,B00000000},\n'
	+'fretful1_bmp[] = {  B00000000,B00110000,B01111000,B01111000,B01111100,B00111100,B00001000,B00000000,B00000000,B00001000,B00111100,B01111100,B01111000,B01111000,B00110000,B00000000},\n'
	+'fretful2_bmp[] = {  B00000000,B00111000,B00111000,B00111100,B00011110,B00001110,B00001110,B00000000,B00000000,B00001110,B00001110,B00111110,B00111100,B00111000,B00111000,B00000000},\n'
	+'fretful3_bmp[] = {  B00000000,B00110000,B00111000,B00111100,B00111110,B00011110,B00001110,B00000000,B00000000,B00001110,B00011110,B00111110,B00111100,B00111000,B00110000,B00000000,},\n'
	+'xx_bmp[] =  {  B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000},\n'
  +'XX_bmp[] = {  B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001,B00000000,B00000000,B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001},\n'
  +'full_bmp[] =  {   B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111 };';
  var code = 'ematrix.clear();\n'
  +'ematrix.drawBitmap(0, 0, + '+ dropdown_otto9_eyes_choice + ' , 8, 16, 1);\n'
  +'ematrix.writeDisplay();\n';
  return code;
};

Blockly.Blocks['eyes_text'] = {init: function() {
  this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYESTEXT_TEXT)  .appendField(new Blockly.FieldTextInput('I am Otto'), 'input');
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};
Blockly.Arduino['eyes_text'] = function(block) {
var text_input = block.getFieldValue('input');
var tiempo= text_input.length*6;
var code = 'ematrix.setTextSize(1);\n'
+'ematrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely\n'
+'ematrix.setRotation(1);\n'
+'for (int8_t x=2; x>=-'+tiempo+'; x--) {\n'
+'ematrix.clear();\n'
+'ematrix.setCursor(x,0);\n'
+'ematrix.print("' + text_input +'");\n'
+'ematrix.writeDisplay();\n'
+'delay(100);}\n'
+'ematrix.setRotation(0);\n'
return code;
};


Blockly.Blocks['eyes#'] = { init: function() {
  this.appendDummyInput()
  this.appendValueInput("eyes") .appendField("👀 "+Blockly.Msg.OTTO9_EYES_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['eyes#'] = function(block) {
var value_eyes = Blockly.Arduino.valueToCode(block, 'eyes', Blockly.Arduino.ORDER_ATOMIC);
var code = 'ematrix.setTextSize(1);\n'
+'ematrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely\n'
+'ematrix.setRotation(1);\n'
+'ematrix.setCursor(0,0);\n'
+'ematrix.print('+ value_eyes +');\n'
+'ematrix.writeDisplay();\n'
+'ematrix.setRotation(0);\n'
return code;
};


Blockly.Blocks['eyesp']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput() .appendField("👀 . X")
  this.appendValueInput("X")  .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['eyesp'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'ematrix.drawPixel('+valuex+','+valuey+','+draw+');\n';
  return code;
};

Blockly.Blocks['eyesl']={ init:function(){
  this.appendDummyInput() .appendField("👀 _ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['eyesl'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'ematrix.drawLine('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  return code;
};

Blockly.Blocks['eyesr']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput() .appendField("👀 🔲 X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['eyesr'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'ematrix.fillRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  else code = 'ematrix.drawRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +','+draw+');\n';
  return code
};

Blockly.Blocks['eyesc']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("👀 ⚪ X")
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['eyesc'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var valuer = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'ematrix.fillCircle('+ valuex +','+valuey+','+ valuer +','+draw+');\n';
  else code = 'ematrix.drawCircle('+ valuex +','+valuey+','+ valuer +', '+draw+');\n';
  return code
};

Blockly.Blocks['eyesm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('  ') .appendField('1') .appendField('  2').appendField('  3').appendField(' 4') .appendField(' 5')  .appendField('  6') .appendField(' 7')  .appendField(' 8')
        .appendField(' 9').appendField('10') .appendField('11') .appendField('12') .appendField('13') .appendField('14') .appendField('15') .appendField('16')
   Blockly.FieldCheckbox.CHECK_CHAR= '🔴'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel7')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel15')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel23')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel31')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel39')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel47')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel55')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel63')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel71')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel79')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel87')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel95')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel103')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel111')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel119')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel127');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel6')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel22')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel30')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel38')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel46')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel54')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel62')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel70')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel78')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel86')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel94')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel102')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel110')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel118')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel126');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel5')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel13')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel21')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel29')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel37')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel45')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel53')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel61')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel69')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel77')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel85')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel93')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel101')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel109')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel117')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel125');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel4')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel12')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel20')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel36')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel44')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel52')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel60')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel68')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel76')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel84')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel92')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel100')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel108')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel116')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel124');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel11')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel27')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel35')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel43')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel51')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel59')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel67')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel75')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel83')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel91')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel99')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel107')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel115')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel123');
        this.appendDummyInput().appendField('6 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel2')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel10')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel34')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel42')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel50')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel58')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel66')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel74')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel82')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel90')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel98')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel106')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel114')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel122');
        this.appendDummyInput().appendField('7 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel17')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel33')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel41')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel49')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel57')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel65')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel73')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel81')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel89')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel97')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel105')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel113')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel121');
        this.appendDummyInput().appendField('8 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel0')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel8')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel16')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel32')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel40')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel48')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel56')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel64')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel72')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel80')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel88')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel96')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel104')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel112')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel120');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B655F5");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['eyesm'] = function(block) {
   Blockly.Arduino.definitions_['eyesm_bmp_definition'] = 'uint8_t eyesm_bmp[16];\n'
   var code = 'eyesm_bmp[0] = B';
   for (var i=0; i<8; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[1] = B'
   for (var i=8; i<16; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[2] = B'
   for (var i=16; i<24; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[3] = B'
   for (var i=24; i<32; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[4] = B'
   for (var i=32; i<40; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[5] = B'
   for (var i=40; i<48; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[6] = B'
   for (var i=48; i<56; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[7] = B'
   for (var i=56; i<64; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[8] = B'
   for (var i=64; i<72; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[9] = B'
   for (var i=72; i<80; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[10] = B'
   for (var i=80; i<88; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[11] = B'
   for (var i=88; i<96; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[12] = B'
   for (var i=96; i<104; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[13] = B'
   for (var i=104; i<112; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';eyesm_bmp[14] = B'
   for (var i=112; i<120; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE') code += '1';else code +='0';};
   code += ';eyesm_bmp[15] = B'
   for (var i=120; i<128; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
   code += ';\n'
   +'ematrix.clear();\n'
   +'ematrix.drawBitmap(0, 0,eyesm_bmp, 8, 16, 1);\n'
   +'ematrix.writeDisplay();\n';
   return code;
};

/////
Blockly.Arduino['matrizledm2_old'] = function(block) {

  var code = 'static const uint8_t PROGMEM\n'
  +'eyesm_bmp[]  = {B';
  for (var i=0; i<8; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=8; i<16; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=16; i<24; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=24; i<32; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=32; i<40; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=40; i<48; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=48; i<56; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=56; i<64; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=64; i<72; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=72; i<80; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=80; i<88; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=88; i<96; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=96; i<104; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=104; i<112; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=112; i<120; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE') code += '1';else code +='0';};
  code += ',B'
  for (var i=120; i<128; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += '};\n'
  +'ematrix.clear();\n'
  +'ematrix.drawBitmap(0, 0,eyesm_bmp, 8, 16, 1);\n'
  +'ematrix.write();\n'
  +'delay(10);\n';
  return code;
};

// Matrix GFX blocks
Blockly.Blocks['GFX_matrix_init'] = { init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/eyes.png', 58, 33, "*")).appendField(Blockly.Msg.OTTO9_EYES_TEXT+" "+Blockly.Msg.OTTO_HOME_TEXT+" "+Blockly.Msg.APDS9960_init2);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['GFX_matrix_init'] = function(block) {
Blockly.Arduino.includes_['matrix16x8'] =
'#include "HT16K33_GFX.h"\n'
+'#define MATRIX_COUNT 2 // // Number of simulated matrices or OLED screen (1 to 4)\n'
+'#define MATRIX_ROTATION 3 // // Rotation from 0 to 3\n'
+'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
+'HT16K33_GFX matrix = HT16K33_GFX(MATRIX_COUNT, 0x70);';
Blockly.Arduino.variables_['matrix16x8'] =
'static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},\n'
+'mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000}, \n'
+'reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},\n'
+'bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},\n'
+'robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111};\n'
+'const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";';
Blockly.Arduino.setups_['matrix16x8']=
 'Wire.begin();\n'
+'matrix.setRotation(MATRIX_ROTATION);\n'
+'matrix.init();\n';
var code='';
return code;
};


Blockly.Blocks['GFX_OLED_init'] = {
  init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*")).appendField("OLED 0.96'' Pins I²C")
     this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['GFX_OLED_init'] = function(block) {
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] =
  '#include <OLED_GFX.h>\n'
  +'#define MATRIX_COUNT 2 // // Number of simulated matrices or OLED screen (1 to 4)\n'
  +'#define MATRIX_ROTATION 3 // // Rotation from 0 to 3\n'
  +'OLED_GFX matrix = OLED_GFX('+value_address+', OLED_12864, MATRIX_COUNT, false, false);';
  Blockly.Arduino.variables_['matrix16x8'] =
  'static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},\n'
  +'mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000}, \n'
  +'reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},\n'
  +'bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},\n'
  +'robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111};\n'
  +'const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";';
  Blockly.Arduino.setups_['matrix16x8']=
   'Wire.begin();\n'
  +'matrix.setRotation(MATRIX_ROTATION);\n'
  +'matrix.init();\n';
  return ""
};

Blockly.Blocks['GFX_OLED_init2'] = {
  init: function() {
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*")).appendField("OLED 1.3'' Pins I²C")
     this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#B655F5");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };
 Blockly.Arduino['GFX_OLED_init2'] = function(block) {
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] =
  '#include <OLED_GFX.h>\n'
  +'#define MATRIX_COUNT 2 // // Number of simulated matrices or OLED screen (1 to 4)\n'
  +'#define MATRIX_ROTATION 3 // // Rotation from 0 to 3\n'
  +'OLED_GFX matrix = OLED_GFX('+value_address+', OLED_12864, MATRIX_COUNT, true, false);';
  Blockly.Arduino.setups_['matrix16x8']=
   'Wire.begin();\n'
  +'matrix.setRotation(MATRIX_ROTATION);\n'
  +'matrix.init();\n';
  return ""
};

Blockly.Blocks['GFX_display'] = {init: function() {
  this.appendDummyInput()  .appendField("🔆 "+Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
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
this.setColour("#B655F5");
this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
this.setHelpUrl('https://learn.adafruit.com/adafruit-led-backpack/overview');}
};
Blockly.Arduino['GFX_clear'] = function(block) {
var code = 'matrix.clearDisplay();\n';
return code;
};

Blockly.Blocks['GFX_pixel']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput() .appendField("🔆 . X")
  this.appendValueInput("X")  .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
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
  'matrix.drawPixel('+valuex+','+valuey+','+draw+');\n';
  return code;
};

Blockly.Blocks['GFX_line']={ init:function(){
  this.appendDummyInput() .appendField("🔆 _ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
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
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput() .appendField("🔆 🔲 X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
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
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput()  .appendField("🔆 ⚪ X")
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.appendDummyInput() .appendField(Blockly.Msg.ST7735_Drawfill).appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
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
   this.setColour("#B655F5");
   this.appendDummyInput().appendField("🔆").appendField(Blockly.Msg.OLED_DrawiconName)
   this.appendDummyInput().appendField(new Blockly.FieldTextInput("heart"), "NAME");
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

Blockly.Arduino['GFX_bitmap'] = function(block) {
  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
 // var Color = block.getFieldValue('COLOR');
 Blockly.Arduino.variables_['matrix16x8'] =
 'static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},\n'
 +'mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000}, \n'
 +'reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},\n'
 +'bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},\n'
 +'robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111},\n'
 +'circleSmall[] = {B00000000,B00111000,B01000100,B01000100,B01000100,B00111000,B00000000,B00000000},\n'
 +'circleBig[] = {B00000000,B00111100,B01000010,B01000010,B01000010,B01000010,B00111100,B00000000},\n'
 +'heart[] = {B00000000,B01101100,B10010010,B10000010,B01000100,B00101000,B00010000,B00000000},\n'
 +'halfCircle[] = {B00000000,B00000000,B11111111,B10000001,B01000010,B00111100,B00000000,B00000000},\n'
 +'zigzag[] = {B00000000,B00000000,B00000000,B00100010,B01010100,B10001000,B00000000,B00000000},\n'
  +'logo[] = {  B01111110,B10000001,B10111001,B10101001,B10111001,B10010001,B10111001,B10010001,B10010001,B10111001,B10010001,B10111001,B10101001,B10111001,B10000001,B01111110},\n'
  +'happy[] = {  B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000,B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000},\n'
  +'eyes[] = {  B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000,B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000},\n'
  +'sad[] =  {  B00000000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00000000,B00000000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00000000},\n'
  +'xx[] =  {  B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000},\n'
  +'XX[] = {  B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001,B00000000,B00000000,B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001},\n'
  +'angry[] = {  B00000000,B00011110,B00111100,B01111000,B01110000,B00100000,B00000000,B00000000,B00000000,B00000000,B00100000,B01110000,B01111000,B00111100,B00011110,B00000000},\n'
  +'angry2[] = {  B00000000,B00000010,B00000100,B00001000,B00010000,B00100000,B00000000,B00000000,B00000000,B00000000,B00100000,B00010000,B00001000,B00000100,B00000010,B00000000},\n'
  +'sleep[] = {  B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000},\n'
  +'freetful[] = {  B00000000,B00100000,B00010000,B00001000,B00000100,B00000010,B00000000,B00000000,B00000000,B00000000,B00000010,B00000100,B00001000,B00010000,B00100000,B00000000},\n'
  +'love[] = {  B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000,B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000},\n'
  +'confused[] = {  B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000,B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000},\n'
  +'wave[] = {  B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000,B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000},\n'
  +'magic[] = {  B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000},\n'
  +'fail[] = {  B00000000,B00110000,B01111000,B01111000,B01111100,B00111100,B00001000,B00000000,B00000000,B00001000,B00111100,B01111100,B01111000,B01111000,B00110000,B00000000},\n'
  +'full[] =  {   B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111 };\n'
 +'const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";';
  var draw = ''
	if(this.getFieldValue('draw') == 'TRUE') draw= "GFX_WHITE";
		else draw = "GFX_BLACK";

  var code =
  'matrix.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+',true,'+draw+',GFX_BLACK);\n';

  return code;
};
