/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.TCS34725');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['init_tcs34725'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/TCS34725.png",33,33))
        .appendField(Blockly.Msg.TCS34725_name_init)
		.appendField(Blockly.Msg.TCS34725_name_init2)
	 this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['No Gain configured ','TCS34725_GAIN_1X '],['4x Gain','TCS34725_GAIN_4X '],['16x Gain','TCS34725_GAIN_16X ']]), "Gain")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init TCS34725 functions');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['init_tcs34725'] = function(block) {
	
	
 var Gain = block.getFieldValue('Gain');  	
	
	
 Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
 Blockly.Arduino.definitions_['define_adafruit_tcs34725'] = '#include "Adafruit_TCS34725.h"\n';
 Blockly.Arduino.definitions_['define_colorconverter'] = '#include "ColorConverterLib.h"\n';
 
 Blockly.Arduino.definitions_['define_tcs34725'] = 'Adafruit_TCS34725 tcs34725 = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,'+Gain+');\n';
  
 Blockly.Arduino.definitions_['define_tcs34725_variables'] = 'double  tcs34725_r=0;\n'+
'double  tcs34725_g=0;\n'+
'double  tcs34725_b=0;\n'+
'uint16_t  tcs34725_clear=0;\n'+
'uint16_t  tcs_red, tcs_green, tcs_blue, colorTemp, lux;\n'+
'double  tcs34725_h=0;\n'+
'double  tcs34725_s=0;\n'+
'double  tcs34725_v=0;\n';

Blockly.Arduino.definitions_['define_tcs34725_capturecolor'] = 'void fnc_tcs34725_capturecolor()\n'+
'{\n'+
'   tcs34725.setInterrupt(false);\n'+
'   delay(60); // 50msec to capture the color;\n'+
'	tcs34725.getRawData(&tcs_red, &tcs_green, &tcs_blue, &tcs34725_clear);\n'+
'   tcs34725.setInterrupt(true);\n'+
'	if (tcs34725_clear == 0) {\n'+
'		tcs34725_r=tcs34725_g=tcs34725_b=0;\n'+
'		return;\n'+
'	}\n'+
'   colorTemp = tcs34725.calculateColorTemperature_dn40(tcs_red, tcs_green, tcs_blue, tcs34725_clear);\n'+
'   lux = tcs34725.calculateLux(tcs_red, tcs_green, tcs_blue);\n'+
'	tcs34725_r = ((float)tcs_red / (float)(tcs34725_clear)) * 256.0;\n'+
'	tcs34725_g = ((float)tcs_green / (float)(tcs34725_clear)) * 256.0;\n'+
'	tcs34725_b = ((float)tcs_blue / (float)(tcs34725_clear)) * 256.0;\n'+
'	ColorConverter::RgbToHsv(static_cast<uint8_t>(tcs34725_r), static_cast<uint8_t>(tcs34725_g), static_cast<uint8_t>(tcs34725_b), tcs34725_h, tcs34725_s,tcs34725_v);\n'+
'	tcs34725_h=tcs34725_h*360;\n'+
'	tcs34725_s=tcs34725_s*100;\n'+
'	tcs34725_v=tcs34725_v*100;\n'+
'}\n';
  
  Blockly.Arduino.setups_['setup_tcs34725'] = 'tcs34725.begin();\n';

  var code='';
  return code;
};

Blockly.Blocks['read_tcs34725'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
        .appendField(Blockly.Msg.TCS34725_name)
		.appendField(Blockly.Msg.TCS34725_read)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read tcs34725 values');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['read_tcs34725'] = function(block) {
	
  var code='fnc_tcs34725_capturecolor();\n';
  return code;
};


Blockly.Blocks['tcs34725_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	 this.appendDummyInput()
   .appendField(new Blockly.FieldImage("media/color.png",15,15))
		.appendField(Blockly.Msg.TCS34725_name)
    this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['Red Raw','10'],['Green Raw','11'],['Blue Raw','12'],['Red (RGB)','0'],['Green (RGB)','1'],['Blue (RGB)','2'],['Clarity','3'],['Hue (HSV)','4'],['Saturation (HSV)','5'],['Value (HSV)','6'],['Lux','7'],['Temp ','8']]), "TypeValue")
		.appendField(Blockly.Msg.TCS34725_values)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund several values of the tcs34725 sensor ');
  }
};

Blockly.Arduino['tcs34725_values'] = function(block) {
  
  var typeValue = this.getFieldValue("TypeValue"); 

 if (typeValue==0)
	var code = 'tcs34725_r';
	else if (typeValue==1)
		var code = 'tcs34725_g';
		else if (typeValue==2)
			var code = 'tcs34725_b';
			else if (typeValue==3)
				var code = 'tcs34725_clear';
				else if (typeValue==4)
					var code = 'tcs34725_h';
					else if (typeValue==5)
						var code = 'tcs34725_s';
						else if (typeValue==6)
							var code = 'tcs34725_v';
							else if (typeValue==7)
								var code = 'lux';
								else if (typeValue==8)
									var code = 'colorTemp';
									else if (typeValue==10)
										var code = 'tcs_red';
										else if (typeValue==11)
											var code = 'tcs_green';
											else 
												var code = 'tcs_blue';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['tcs34725_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	 this.appendDummyInput()
   .appendField(new Blockly.FieldImage("media/color.png",15,15))
		.appendField(Blockly.Msg.TCS34725_name)
    this.appendDummyInput()
		.appendField(Blockly.Msg.TCS34725_color)
		.appendField(new Blockly.FieldDropdown([['Red','0'],['Orange','1'],['Yellow','2'],['Green','3'],['Cyan','4'],['Blue','5'],['Violet','6']]), "TypeColor")
		.appendField(Blockly.Msg.TCS34725_color2)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('Refund the color selected ');
  }
};

Blockly.Arduino['tcs34725_color'] = function(block) {
	
Blockly.Arduino.definitions_['define_tcs34725_iscolor'] = 'bool fnc_tcs34725_iscolor(int _color)\n'+
'{\n'+
'	if(tcs34725_h > 330 || tcs34725_h < 20){ if(_color==2) return true; } //red\n'+
'	else if(tcs34725_h < 45){ if(_color==3) return true; }  //orange\n'+
'	else if(tcs34725_h < 90){ if(_color==4) return true; }  //yellow\n'+
'	else if(tcs34725_h < 150){ if(_color==5) return true; } //green\n'+
'	else if(tcs34725_h < 210){ if(_color==6) return true; } //cyan\n'+
'	else if(tcs34725_h < 270){ if(_color==7) return true; } //blue\n'+
' 	else if(tcs34725_h < 330){ if(_color==8) return true; } //violet\n'+
'	return false;\n'+
'}\n';
	 
  var typeColor = this.getFieldValue('TypeColor');  
  
  
  if (typeColor==0)
	var code = 'fnc_tcs34725_iscolor(2)';
	else if (typeColor==1)
		var code = 'fnc_tcs34725_iscolor(3)';
		else if (typeColor==2)
			var code = 'fnc_tcs34725_iscolor(4)';
			else if (typeColor==3)
				var code = 'fnc_tcs34725_iscolor(5)';
				else if (typeColor==4)
					var code = 'fnc_tcs34725_iscolor(6)';
					else if (typeColor==5)
						var code = 'fnc_tcs34725_iscolor(7)';
						else if (typeColor==6)
							var code = 'fnc_tcs34725_iscolor(8)';
							else 
								var code = 'fnc_tcs34725_iscolor(2)';
  
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


