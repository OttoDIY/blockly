/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.ST7735');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');


Blockly.Blocks['st7735_init'] = {
   init: function() {
	var card=window.localStorage.card;
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",53,38))
        .appendField(Blockly.Msg.ST7735_init)
		.appendField(Blockly.Msg.ST7735_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_PIN_CS)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_CS");	
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_PIN_DC)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_DC");	
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_PIN_RST)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RST");		
	this.appendDummyInput()
        .appendField(Blockly.Msg.ST7735_WRAP)
		.appendField(new Blockly.FieldDropdown([["1.8\" Black Tab", "INITR_BLACKTAB"], ["1.8\" Green Tab ", "INITR_GREENTAB"],["1.8\"  Red Tab", "INITR_REDTAB"],["0.96\" Mini TFT","INITR_MINI160x80"]]), "WRAP")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the TFT ST7735.Important note:  the Led pin must be connected to 3.3V!!');
    this.setHelpUrl('');
  }
};


Blockly.Arduino['st7735_init'] = function(block) {

     
   var pin_RST = this.getFieldValue('PIN_RST');
   var pin_CS = this.getFieldValue('PIN_CS');
   var pin_DC = this.getFieldValue('PIN_DC');
   
   var wrap = block.getFieldValue('WRAP');  
   	
   Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.includes_['define_Adafruit_GFX'] = '#include <Adafruit_GFX.h>\n';
   Blockly.Arduino.includes_['define_Adafruit_ST7735'] = '#include <Adafruit_ST7735.h>\n';
    
   Blockly.Arduino.definitions_['define_st7735'] = 'Adafruit_ST7735 tft1=Adafruit_ST7735('+pin_CS+','+pin_DC+','+pin_RST+');\n';
 
   Blockly.Arduino.setups_['setup_st7735']='tft1.initR('+wrap+');\n'

  var code = '';
  return code;
};


Blockly.Blocks['st7735_backgroundcolor'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_FILLBACKGROUND)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the background of the color attached.');
    this.setHelpUrl('');
  }
};


Blockly.Arduino['st7735_backgroundcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.fillScreen('+Color+');\n';
  return code;
};


Blockly.Blocks['st7735_icon'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
         .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_IconName)
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_ValueList)
        .appendField(new Blockly.FieldTextInput("0x00,0xff,0xaf,0x00"), "CODES");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write icon bmp image in memory');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_icon'] = function(block) {

   var IconName = block.getFieldValue('NAME');  
   var Var_Codes = block.getFieldValue('CODES');

   Blockly.Arduino.includes_['define_pgmspace'] = '#include <avr/pgmspace.h>\n';   
   Blockly.Arduino.definitions_['define_iconvalus_'+IconName+''] = 'const unsigned char '+IconName+'[] PROGMEM= {'+Var_Codes+'};\n';
 
  var code = '';
  return code;
};


Blockly.Blocks['st7735_rotatedisplay'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_Rotate)
		.appendField(new Blockly.FieldDropdown([["0º","0"],["90º", "1"],["180º", "2"],["270º","3"]]), "DEGREE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Rotate the display');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_rotatedisplay'] = function(block) {

  var Degree = block.getFieldValue('DEGREE');
	   
  var code = 'tft1.setRotation('+Degree+');\n';
  return code;
};


Blockly.Blocks['st7735_invertdisplay'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_Invert)
		.appendField(new Blockly.FieldDropdown([["OFF","0"],["ON", "1"]]), "INVERT_DISPLAY")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Invert the display');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_invertdisplay'] = function(block) {

  var InvertON_OFF = block.getFieldValue('INVERT_DISPLAY');
	   
  var code = 'tft1.invertDisplay('+InvertON_OFF+');\n';
  return code;
};

Blockly.Blocks['st7735_setcursor'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_SetCursor)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set cursor in a position');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_setcursor'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
	   
  var code = 'tft1.setCursor('+x0+','+y0+');\n';
  return code;
};


Blockly.Blocks['st7735_settextcolor'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the color of the text.');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_settextcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.setTextColor('+Color+');\n';
  return code;
};



Blockly.Blocks['st7735_settextsize'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTsize)
		.appendField(new Blockly.FieldDropdown([["Little","1"],["Medium", "2"],["Large", "3"]]), "SIZE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Size of the letter.');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_settextsize'] = function(block) {

  var size = block.getFieldValue('SIZE');
	   
  var code = 'tft1.setTextSize('+size+');\n';
  return code;
};


Blockly.Blocks['st7735_wraptext'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTwrap)
		.appendField(new Blockly.FieldDropdown([["OFF","false"],["ON", "true"]]), "WRAPTEXT")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Wrap text');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_wraptext'] = function(block) {

  var wrapON_OFF = block.getFieldValue('WRAPTEXT');
	   
  var code = 'tft1.setTextWrap('+wrapON_OFF+');\n';
  return code;
};

Blockly.Blocks['st7735_printTextln'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_PrintTextLN)
	this.appendValueInput("text_to_print")
        .setCheck("String")
	 this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_PrintTextLN2)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Print the text');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_printTextln'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'text_to_print', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
     var code = 'tft1.println('+texttoprint+');\n';
  else
    var code = 'tft1.print('+texttoprint+');\n';	   
 
  return code;
};

Blockly.Blocks['st7735_drawpixel'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_DrawPixel)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a pixel');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawpixel'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.drawPixel('+x0+','+y0+','+Color+');\n';
  return code;
};


Blockly.Blocks['st7735_drawline'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawlinefrom)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ST7735_Drawlineto)
	this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X1);
	this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y1);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a line');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawline'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.drawLine('+x0+','+y0+','+x1+','+y1+','+Color+');\n';
  return code;
};

Blockly.Blocks['st7735_drawrectangle'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawrectangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a rectangle');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawrectangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');

	var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillRect('+x0+','+y0+','+width+','+height+','+Color+');\n';
  else
     var code = 'tft1.drawRect('+x0+','+y0+','+width+','+height+','+Color+');\n';
 
  return code;
};

Blockly.Blocks['st7735_drawroundrectangle'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawroundrectangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendValueInput("round")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawroundrectangleradius);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a round rectangle');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawroundrectangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var round = Blockly.Arduino.valueToCode(this, 'round', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillRoundRect('+x0+','+y0+','+width+','+height+','+round+','+Color+');\n';
  else
    var code = 'tft1.drawRoundRect('+x0+','+y0+','+width+','+height+','+round+','+Color+');\n';
    
  return code;
};


Blockly.Blocks['st7735_drawcircle'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawcircle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawcircleradius);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a circle');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawcircle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var radius = Blockly.Arduino.valueToCode(this, 'radius', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillCircle('+x0+','+y0+','+radius+','+Color+');\n';
  else
    var code = 'tft1.drawCircle('+x0+','+y0+','+radius+','+Color+');\n';	   
	   
  return code;
};


Blockly.Blocks['st7735_drawtriangle'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawtriangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X1);
	this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y1);
	this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X2);
	this.appendValueInput("y2")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a line');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawtriangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x2 = Blockly.Arduino.valueToCode(this, 'x2', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y2 = Blockly.Arduino.valueToCode(this, 'y2', Blockly.Arduino.ORDER_ATOMIC) || '0';
 
  var Color = block.getFieldValue('COLOR');

  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillTriangle('+x0+','+y0+','+x1+','+y1+','+x2+','+y2+','+Color+');\n';
  else
    var code = 'tft1.drawTriangle('+x0+','+y0+','+x1+','+y1+','+x2+','+y2+','+Color+');\n';
 
  return code;
};


Blockly.Blocks['st7735_properties'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
		.appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_properties)
        .appendField(new Blockly.FieldDropdown([["Width", "1"], ["Height", "2"],["X cursor position", "3"],["Y cursor position", "4"],["Rotatation value", "5"]]), "Property")   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['st7735_properties'] = function(block) {
	
	var property = block.getFieldValue('Property');  
	
  if (property==1)	
	var code = 'tft1.width()';  
	else if (property==2)
		var code = 'tft1.height()';		
		else if (property==3)
		  var code = 'tft1.getCursorX()';
			else if (property==4)
				var code = 'tft1.getCursorY()';
				 else
					var code = 'tft1.getRotation()';
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['st7735_drawicon'] = {
   init: function() {
    this.setColour("#4b009f");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_DrawiconName)
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a bmp icon');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['st7735_drawicon'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
  var Color = block.getFieldValue('COLOR');


  
  var code = 'tft1.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+','+Color+');\n';
 
  return code;
};

