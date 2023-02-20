'use strict';

goog.provide('Blockly.Blocks.LcdI2C');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['lcdi2c_setup'] = {
   init: function() {
   this.setColour("#B655F5");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/LCD.png",33,33))
        .appendField(Blockly.Msg.OTTO_HOME_TEXT + Blockly.Msg.LCD_I2C_setup);
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+ Blockly.Msg.LCDP_Clear);
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_Home);
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_SetCursor);
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_SetCursor);
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_Display)
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_scrollDisplay)
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_setBcklight)
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_showCursor)
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
    this.setColour("#B655F5");
    this.appendDummyInput()
        .appendField("📟"+Blockly.Msg.LCDP_blinkCursor)
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



//////////////

Blockly.Blocks["bargraphe"]={init:function(){
  var card=window.localStorage.card;
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/LEDbar.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT + Blockly.Msg.bargraphe);
this.appendDummyInput()	.appendField("CLK").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "clk");
this.appendDummyInput()	.appendField("DIN").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "data");
this.setColour("#B655F5");
this.setInputsInline(true);
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setTooltip(Blockly.Msg.bargraphe_tooltip);
this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/")}
};
Blockly.Arduino["bargraphe"]=function(block){
  var _clock = this.getFieldValue('clk');
  var _data = this.getFieldValue('data');
  Blockly.Arduino.definitions_["ledbar"]="unsigned char _state[]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};";
  Blockly.Arduino.codeFunctions_["ledbar"]="void sendData(unsigned int data) {\n  for (unsigned char i=0; i < 16; i++){\n    unsigned int state=(data&0x8000) ? HIGH : LOW;\n    digitalWrite(" + _data + ", state);\n    state=digitalRead(" + _clock + ") ? LOW : HIGH;\n    digitalWrite(" + _clock + ", state);\n    data <<= 1;\n  }\n}\nvoid setData(unsigned char _state[]) {\n  sendData(0x00);\n  for (unsigned char i=0; i<10; i++) sendData(_state[10-i-1]);\n  sendData(0x00);\n  sendData(0x00);\n  digitalWrite(" + _data + ", LOW);\n  delayMicroseconds(10);\n  for (unsigned char i=0; i<4; i++){\n    digitalWrite(" + _data + ", HIGH);\n    digitalWrite(" + _data + ", LOW);\n  }\n}\nvoid SetLevel(float level) {\n  level=max(0, min(10, level));\n  level *= 8;\n  for (byte i=0; i<10; i++) {\n    _state[i]=(level>8) ? ~0 : (level>0) ? ~(~0 << byte(level)) : 0;\n    level -= 8;\n  };\n  setData(_state);\n}";
  Blockly.Arduino.setups_["ledbar"]="pinMode(" + _clock + ", OUTPUT);\n  pinMode(" + _data + ", OUTPUT);";
  return ""
};
Blockly.Python["bargraphe"]=function(block){
  var _clock=Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
  var _data=Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
Blockly.Python.imports_["pin"]="from machine import Pin";
Blockly.Python.imports_["MY9221"]="import MY9221";
  Blockly.Python.definitions_["pin_"+_clock+"_"+_data]="ledbar = MY9221(di=Pin("+_data+"), dcki=Pin("+_clock+"))";
  return ""
};
//////////////
Blockly.Blocks["bargraphe_allume"]={init:function(){
      this.appendValueInput("del", "Number").appendField(Blockly.Msg.bargraphe_allume);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setColour("#B655F5");
      this.setTooltip(Blockly.Msg.bargraphe_allume_tooltip);
      this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/");
  }
};
Blockly.Arduino["bargraphe_allume"]=function(block){
  var level=Blockly.Arduino.valueToCode(block, 'del', Blockly.Arduino.ORDER_ATOMI);
  return "SetLevel(" + level + ");\n"
};
Blockly.Python["bargraphe_allume"]=function(block){
  var level=Blockly.Python.valueToCode(block, 'del', Blockly.Python.ORDER_ATOMI);
  return "ledbar.level(" + level + ", 0x08)"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*	 lcd OLD */
///////////
Blockly.Blocks["lcd_i2c"]={init:function(){
      this.appendDummyInput().appendField(new Blockly.FieldImage('media/LCD.png', 33, 33, "*"))
    .appendField(Blockly.Msg.LCD+" I2C");
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lcd_fond).appendField(new Blockly.FieldDropdown(Blockly.Msg.couleur), "fond");
      this.setColour("#B655F5");
      this.setTooltip(Blockly.Msg.LCDi2c_tooltip);
      this.setHelpUrl("http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/");
  }
};

Blockly.Arduino["lcd_i2c"]=function(block){
  var fond_couleur=block.getFieldValue("fond");
  Blockly.Arduino.includes_["rgb_lcd"]='#include <Wire.h>\n#include <rgb_lcd.h>';
  Blockly.Arduino.definitions_["rgb_lcd"]="rgb_lcd lcd;";
  switch (fond_couleur) {
      case "bleu":
          var code="  lcd.setRGB(0,0,255);";
          break;
      case "jaune":
          var code="  lcd.setRGB(255,255,0);";
          break;
      case "rouge":
          code="  lcd.setRGB(255,0,0);";
          break;
      case "vert":
          var code="  lcd.setRGB(0,255,0);";
          break
  };
Blockly.Arduino.setups_["rgb_lcd"]="lcd.begin(16,2);\n  lcd.clear();\n"+code;
  return "";
};
Blockly.Python["lcd_i2c"]=function(block){
  var fond_couleur=block.getFieldValue("fond");
  Blockly.Python.imports_["rgb_lcd"]="from grove_rgb_lcd import *";
  switch (fond_couleur) {
      case "bleu":
          Blockly.Python.definitions_["setrgb"]="setRGB(0,0,255)";
          break;
      case "jaune":
          Blockly.Python.definitions_["setrgb"]="setRGB(255,255,0)";
          break;
      case "rouge":
          Blockly.Python.definitions_["setrgb"]="setRGB(255,0,0)";
          break;
      case "vert":
          Blockly.Python.definitions_["setrgb"]="setRGB(0,255,0)";
          break
  }
  return ""
};


Blockly.Blocks["lcd_i2c_2"]={init:function(){
      this.appendDummyInput().appendField(new Blockly.FieldImage('media/LCD.png', 33, 33, "*"))
    .appendField(Blockly.Msg.LCD+" I2C");
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lcd_fond).appendField(new Blockly.FieldDropdown(Blockly.Msg.couleur), "fond");
      this.setColour("#B655F5");
      this.setTooltip(Blockly.Msg.LCDi2c_tooltip);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
      this.setHelpUrl("http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/");
  }
};

Blockly.Arduino["lcd_i2c_2"]=function(block){
  var fond_couleur=block.getFieldValue("fond");

  Blockly.Arduino.includes_["rgb_lcd"]='#include <Wire.h>\n#include <rgb_lcd.h>';
  Blockly.Arduino.definitions_["rgb_lcd"]="rgb_lcd lcd;";

  switch (fond_couleur) {
      case "bleu":
  case "blue":
  case "azul":
          var code="  lcd.setRGB(0,0,255);";
          break;
      case "jaune":
  case "yellow":
  case "amarillo":
          var code="  lcd.setRGB(255,255,0);";
          break;
      case "rouge":
  case "red":
  case "rojo":
          code="  lcd.setRGB(255,0,0);";
          break;
      case "vert":
  case "verde":
  case "green":
          var code="  lcd.setRGB(0,255,0);";
          break
  };
Blockly.Arduino.setups_["rgb_lcd"]="lcd.begin(16,2);\n  lcd.clear();\n"+code;
  return "";
};


//////////////
Blockly.Blocks["lcd_symbole"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.lcd_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L1");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L2");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L3");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L4");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L5");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L6");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L7");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L8");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setHelpUrl(Blockly.Msg.HELPURL);
  this.setColour("#B655F5");
this.setTooltip(Blockly.Msg.lcd_symbole_tooltip)}
};
Blockly.Arduino["lcd_symbole"]=function(block){
  var vname=block.getFieldValue("c_char");
  var l1=block.getFieldValue("L1");
  var l2=block.getFieldValue("L2");
  var l3=block.getFieldValue("L3");
  var l4=block.getFieldValue("L4");
  var l5=block.getFieldValue("L5");
  var l6=block.getFieldValue("L6");
  var l7=block.getFieldValue("L7");
  var l8=block.getFieldValue("L8");
  Blockly.Arduino.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
  Blockly.Arduino.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
return ""
};
Blockly.Python["lcd_symbole"]=function(block){
  var vname=block.getFieldValue("c_char");
  var l1=block.getFieldValue("L1");
  var l2=block.getFieldValue("L2");
  var l3=block.getFieldValue("L3");
  var l4=block.getFieldValue("L4");
  var l5=block.getFieldValue("L5");
  var l6=block.getFieldValue("L6");
  var l7=block.getFieldValue("L7");
  var l8=block.getFieldValue("L8");
  Blockly.Python.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
  Blockly.Python.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
return ""
};
//////////////
Blockly.Blocks["lcd_aff_symbole"]={init:function(){
      this.setColour("#B655F5");
      this.setHelpUrl(Blockly.Msg.HELPURL);
      this.appendDummyInput().appendField(Blockly.Msg.lcd_aff_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.lcd_aff_symbole_tooltip)}
};
Blockly.Arduino["lcd_aff_symbole"]=function(block){
  var value_num_ligne=block.getFieldValue("ligne");
  var value_num_colonne=block.getFieldValue("colonne");
  var variable=block.getFieldValue("c_char");
  return "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.write(" + variable + ");\n"
};
//////////////
Blockly.Blocks["lcd"]={init:function(){
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/LCD.png', 48, 48, "*"))
  .appendField(Blockly.Msg.LCD);
      this.appendValueInput("rs").setAlign(Blockly.ALIGN_RIGHT).appendField("RS");
      this.appendValueInput("en").setAlign(Blockly.ALIGN_RIGHT).appendField("E");
      this.appendValueInput("d4").setAlign(Blockly.ALIGN_RIGHT).appendField("D4");
      this.appendValueInput("d5").setAlign(Blockly.ALIGN_RIGHT).appendField("D5");
      this.appendValueInput("d6").setAlign(Blockly.ALIGN_RIGHT).appendField("D6");
      this.appendValueInput("d7").setAlign(Blockly.ALIGN_RIGHT).appendField("D7");
      this.setColour("#B655F5");
      this.setTooltip(Blockly.Msg.LCD_tooltip);
      this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
  }
};
Blockly.Arduino["lcd"]=function(block){
  var v_rs=Blockly.Arduino.valueToCode(block, "rs", Blockly.Arduino.ORDER_ASSIGNMENT);
  var v_d4=Blockly.Arduino.valueToCode(block, "d4", Blockly.Arduino.ORDER_ASSIGNMENT);
  var v_d5=Blockly.Arduino.valueToCode(block, "d5", Blockly.Arduino.ORDER_ASSIGNMENT);
  var v_d6=Blockly.Arduino.valueToCode(block, "d6", Blockly.Arduino.ORDER_ASSIGNMENT);
  var v_d7=Blockly.Arduino.valueToCode(block, "d7", Blockly.Arduino.ORDER_ASSIGNMENT);
  var v_en=Blockly.Arduino.valueToCode(block, "en", Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
  Blockly.Arduino.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
  Blockly.Arduino.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
  return ''
};
Blockly.Python["lcd"]=function(block){
  var v_rs=Blockly.Python.valueToCode(block, "rs", Blockly.Python.ORDER_ASSIGNMENT);
  var v_d4=Blockly.Python.valueToCode(block, "d4", Blockly.Python.ORDER_ASSIGNMENT);
  var v_d5=Blockly.Python.valueToCode(block, "d5", Blockly.Python.ORDER_ASSIGNMENT);
  var v_d6=Blockly.Python.valueToCode(block, "d6", Blockly.Python.ORDER_ASSIGNMENT);
  var v_d7=Blockly.Python.valueToCode(block, "d7", Blockly.Python.ORDER_ASSIGNMENT);
  var v_en=Blockly.Python.valueToCode(block, "en", Blockly.Python.ORDER_ASSIGNMENT);
  Blockly.Python.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
  Blockly.Python.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
  Blockly.Python.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
  return ''
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09"]={init:function(){
      this.setColour("#B655F5");
      this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
      this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
      this.appendValueInput("TEXT1", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT1);
      this.appendValueInput("TEXT2", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT2);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09"]=function(block){
  var text1=Blockly.Arduino.valueToCode(block, "TEXT1", Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var text2=Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX);
if (text1[0]!='"') text1 = '"' + text1 + '"';
if (text2[0]!='"') text2 = '"' + text2 + '"';
  return "lcd.setCursor(0,0);\nlcd.print(" + text1 + ");\nlcd.setCursor(0,1);\nlcd.print(" + text2 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09"]=function(block){
  var text1=Blockly.Python.valueToCode(block, "TEXT1", Blockly.Python.ORDER_UNARY_POSTFIX);
  var text2=Blockly.Python.valueToCode(block, "TEXT2", Blockly.Python.ORDER_UNARY_POSTFIX);
if (text1[0]!='"') text1 = '"' + text1 + '"';
if (text2[0]!='"') text2 = '"' + text2 + '"';
  return "lcd.setCursor(0,0)\nlcd.print(" + text1 + ")\nlcd.setCursor(0,1)\nlcd.print(" + text2 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_lc"]={init:function(){
var prog = window.localStorage.prog;
  this.setColour("#B655F5");
  this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
if (prog != "python") {
      this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
      this.appendValueInput("TEXT4", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
} else {
  this.appendValueInput("TEXT4", "String").appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
}
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
  var value_num_ligne=block.getFieldValue("ligne");
  var value_num_colonne=block.getFieldValue("colonne");
  var text4=Blockly.Arduino.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
var code = "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.print(";
if (text4[0]!='"') text4 = '"' + text4 + '"';
  return  code + text4 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
  var text4=Blockly.Python.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
var code = "setText(";
if (text4[0]!='"') text4 = '"' + text4 + '"';
  return  code + text4 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_RAZ"]={init:function(){
      this.setColour("#B655F5");
      this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
      this.appendDummyInput().appendField(Blockly.Msg.LCD_raz);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.LCD_raz_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
  return "lcd.clear();\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
  return 'setText("")\n'
};
