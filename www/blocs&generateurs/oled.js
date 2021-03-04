// define blocks
'use strict';

goog.provide('Blockly.Blocks.u8g');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['OLED_init'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
     .appendField("OLED I2C")
     this.appendDummyInput()
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendField("size")
     .appendField(new Blockly.FieldDropdown([["64", "64"], ["32", "32"]]), "height")
     .appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#4b009f");
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

Blockly.Blocks['OLED_rotate'] = {
  init: function() {
     this.appendDummyInput()
     .appendField("rotate")
     .appendField(new Blockly.FieldDropdown([["0°", "0"], ["90°", "1"], ["180°", "2"], ["270°", "3"]]), "angle");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("display")
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField("Y");
  this.appendValueInput("size")   .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("size");
  this.appendValueInput("print")  .setAlign(Blockly.ALIGN_RIGHT)  .appendField("print");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_data'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_size  = Blockly.Arduino.valueToCode(block, 'size', Blockly.Arduino.ORDER_ATOMIC);
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.setTextSize('+value_size+');\n'
  +'display.setTextColor('+draw+');\n'
  +'display.setCursor('+value_x+','+value_y+');\n'
  +'display.println('+value_print+');\n'
  +'display.display();\n';
  return code
};

Blockly.Blocks['OLED_symbol'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()   .appendField("symbol")
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")     .appendField("Y");
  this.appendValueInput("size") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField("size");
  this.appendValueInput("print") .setAlign(Blockly.ALIGN_RIGHT)  .appendField("print");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
     this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
   }
 };

 Blockly.Arduino['OLED_symbol'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_size  = Blockly.Arduino.valueToCode(block, 'size', Blockly.Arduino.ORDER_ATOMIC);
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = 'display.setTextSize('+value_size+');\n'
  +'display.setTextColor('+draw+');\n'
  +'display.setCursor('+value_x+','+value_y+');\n'
  +'display.write('+value_print+');\n'
  +'display.display();\n';
  return code
};
Blockly.Blocks['OLED_scroll'] = {
  init: function() {
    this.appendDummyInput()   .appendField(new Blockly.FieldDropdown([["👈", "left"], ["👉", "right"], ["🛑", "stop"]]), "mode") .appendField("scroll OLED");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
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
Blockly.Blocks['OLED_pixel'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("."); 
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  var code = 'display.drawPixel('+value_x+', '+value_y+', ,'+draw+');\n'
  +'display.display();\n';
  return code
};

Blockly.Blocks['OLED_line'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("_ ");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X1");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y1");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X2");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField("Y2");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  var code = 'display.drawLine('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n'
  + 'display.display();\n';
  return code
};
Blockly.Blocks['OLED_rectangle'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("🔲 ") ;
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("width");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")  .appendField("height");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  if(this.getFieldValue('draw') == 'TRUE') draw= "WHITE";
  else draw = "BLACK";
  var code = ''
  if (this.getFieldValue('fill') == 'TRUE')code = 'display.fillRect('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n';
  else code = 'display.drawRect('+value_x+', '+value_y+', '+value_width+', '+value_height+','+draw+');\n';
  code += 'display.display();\n';
  return code
};

Blockly.Blocks['OLED_round'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("🗨️ ");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("width");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("height");
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("round");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  code += 'display.display();\n';
  return code
};

Blockly.Blocks['OLED_circle'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("⚪ ") ;
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("R");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  code += 'display.display();\n';
  return code
};

Blockly.Blocks['OLED_triangle'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput()  .appendField("📐 ");
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("X0");
  this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("Y0");
  this.appendValueInput("width")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("X1");
  this.appendValueInput("height")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y1");
  this.appendValueInput("round")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("X2");
  this.appendValueInput("angle")  .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number") .appendField("Y2");
  this.appendDummyInput() .appendField("🥛").appendField(new Blockly.FieldCheckbox("FALSE"), "fill") .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b009f");
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
  code += 'display.display();\n';
  return code
};
Blockly.Blocks['OLED_bitmap'] = {
  init: function() {
    this.appendDummyInput() .appendField("bitmap OLED")
      .appendField(new Blockly.FieldTextInput('0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0xe0, 0x10, 0x08, 0x07, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf8, 0x10, 0x08, 0x1f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x08, 0x10, 0x08, 0x10, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x30, 0x0c, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0d, 0xfe, 0x7f, 0xb0, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0x0c, 0x10, 0x08, 0x30, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x18, 0x10, 0x08, 0x18, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc1, 0xf0, 0x10, 0x08, 0x0f, 0x83, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00'), 'bitmap');
      this.appendDummyInput()  .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
      this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
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
  var code = 'display.drawBitmap(0, 0,  bitmap, 128, 64,'+draw+');\n'
  +'display.display();\n';
  return code
};

Blockly.Blocks['OLED_bitmap2'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(Blockly.Msg.OLED_name)
		.appendField(Blockly.Msg.OLED_DrawiconName)
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.OLED_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.OLED_Y0);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.OLED_width);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.OLED_height);
	this.appendDummyInput() 
		.appendField("✏️")
		.appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
	//this.appendDummyInput()	
    //    .appendField(Blockly.Msg.OLED_COLOR)
	//	.appendField(new Blockly.FieldDropdown([["Black","BLACK"],["White", "WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a bmp icon');
    this.setHelpUrl('');
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
  
  var code = 'display.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+','+draw+');\n'
   +'display.display();\n';
 
  return code;
};

Blockly.Blocks['OLED_clear'] = {
  init: function() {
    this.appendDummyInput()  .appendField("clear OLED");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip('');
     this.setHelpUrl('https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples');
  }
};
Blockly.Arduino['OLED_clear'] = function(block) {
  var code = 'display.clearDisplay();\n' 
  + 'display.display();\n';
  return code;
};


Blockly.Blocks['lp2i_u8g_draw_string'] = {
 init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
        .appendField(Blockly.Msg.lp2i_u8g_draw_string)
    this.appendValueInput("Text")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Text);	  
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};

Blockly.Blocks['lp2i_u8g_draw_4strings'] = {
 init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings)
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display);		
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1);		
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2);			
    this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3);			
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4);			
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};
Blockly.Blocks['lp2i_u8g_print'] = {
 init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))		
        .appendField(Blockly.Msg.lp2i_u8g_print)
	this.appendValueInput("N")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_N);		
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_Y);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};

Blockly.Blocks['lp2i_u8g_4draw_print'] = {
 init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('media/oled.png', 33, 33, "*"))	
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print)
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_to_display);			
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line1);		
	this.appendValueInput("N1")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N1);			
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line2);			
	this.appendValueInput("N2")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N2);		
	this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line3);			
	this.appendValueInput("N3")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N3);		
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line4);			
	this.appendValueInput("N4")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N4);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};
'use strict';

goog.provide('Blockly.Arduino.u8g');
goog.require('Blockly.Arduino');

Blockly.Arduino.lp2i_u8g_draw_string = function() {
  var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);    
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr('+x+', '+y+', '+value_text+');\n'	
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};


Blockly.Arduino.lp2i_u8g_draw_4strings = function() {
  var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr(0, 12, '+value_text_line1+');\n'
	code    += 'u8g.drawStr(0, 28, '+value_text_line2+');\n'
	code    += 'u8g.drawStr(0, 44, '+value_text_line3+');\n'
	code    += 'u8g.drawStr(0, 60, '+value_text_line4+');\n'	
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};

Blockly.Arduino.lp2i_u8g_print = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);    
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code =
	'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.setPrintPos('+x+', '+y+');\n'	
	code    += 'u8g.print('+value_n+');\n'		
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};
Blockly.Arduino.lp2i_u8g_4draw_print = function() {
  var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_n1 = Blockly.Arduino.valueToCode(this, 'N1', Blockly.Arduino.ORDER_ATOMIC);
  var value_n2 = Blockly.Arduino.valueToCode(this, 'N2', Blockly.Arduino.ORDER_ATOMIC);
  var value_n3 = Blockly.Arduino.valueToCode(this, 'N3', Blockly.Arduino.ORDER_ATOMIC);
  var value_n4 = Blockly.Arduino.valueToCode(this, 'N4', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr(0, 12, '+value_text_line1+');\n'
	code    += 'u8g.setPrintPos(100, 12 );\n'	
	code    += 'u8g.print('+value_n1+');\n'		
	code    += 'u8g.drawStr(0, 28, '+value_text_line2+');\n'
	code    += 'u8g.setPrintPos(100, 28 );\n'
	code    += 'u8g.print('+value_n2+');\n'			
	code    += 'u8g.drawStr(0, 44, '+value_text_line3+');\n'
	code    += 'u8g.setPrintPos(100, 44 );\n'
	code    += 'u8g.print('+value_n3+');\n'	
	code    += 'u8g.drawStr(0, 60, '+value_text_line4+');\n'
	code    += 'u8g.setPrintPos(100, 60 );\n'
	code    += 'u8g.print('+value_n4+');\n'		
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};

Blockly.Blocks['oled_icon'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/oled.png",33,33))
         .appendField(Blockly.Msg.OLED_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.OLED_IconName)
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.OLED_ValueList)
        .appendField(new Blockly.FieldTextInput("0x00,0xff,0xaf,0x00"), "CODES");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write icon bmp image in memory');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['oled_icon'] = function(block) {

   var IconName = block.getFieldValue('NAME');  
   var Var_Codes = block.getFieldValue('CODES');

   Blockly.Arduino.includes_['define_pgmspace'] = '#include <avr/pgmspace.h>\n';   
   Blockly.Arduino.definitions_['define_iconvalus_'+IconName+''] = 'const unsigned char '+IconName+'[] PROGMEM= {'+Var_Codes+'};\n';
 
  var code = '';
  return code;
};