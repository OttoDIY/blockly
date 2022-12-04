/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.Alexa');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');



Blockly.Blocks['Alexa_init_esp'] = {
  init: function() {
     this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alexa.png",40,40))
		.appendField(Blockly.Msg.Alexa_init)
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10']]), "NumDevice");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.Alexa_init2)
        .appendField(new Blockly.FieldTextInput(""), "NameDevice");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the library to communicate with Alexa');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['Alexa_init_esp'] = function(block) {
	
  var NumDevice = this.getFieldValue('NumDevice'); 	
  var NameDevice = block.getFieldValue('NameDevice'); 
  
  Blockly.Arduino.includes_['define_Espalexa'] = '#include <Espalexa.h>\n';
  
  Blockly.Arduino.variables_['define_espalexa_variable'] = 'Espalexa ESP_alexa;\n';
  
  Blockly.Arduino.setups_['setup_alexa'] = 'ESP_alexa.begin();\n';
  
  Blockly.Arduino.setups_['setup_cb_device'+NumDevice] = 'ESP_alexa.addDevice("'+NameDevice+'",cb_espalexa_on_device_'+NumDevice+',EspalexaDeviceType::color,0);\n';
  
 
  
  var code = '';
  return code;
};


Blockly.Blocks["Alexa_reception_function"]={init:function(){
		
        this.setColour("#26C6F8");

        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/alexa.png",40,40))
			.appendField(Blockly.Msg.Alexa_cb)
			.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10']]), "NumDevice");	
		this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('')}
};

Blockly.Arduino["Alexa_reception_function"]=function(block){
	
	var NumDevice = this.getFieldValue('NumDevice'); 
	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	
	Blockly.Arduino.codeFunctions_['esp_reception_function'+NumDevice] ='void cb_espalexa_on_device_'+NumDevice+'(EspalexaDevice* d){\n'+
	''+	branch + '}\n';
		
	return "";
};


Blockly.Blocks['Alexa_loop'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alexa.png",40,40))
        .appendField(Blockly.Msg.Alexa_Loop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic attend in the loop');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['Alexa_loop'] = function(block) {

  var code = 'ESP_alexa.loop();\n';
  return code;
};

Blockly.Blocks['Alexa_param'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alexa.png",40,40))
	    .appendField(Blockly.Msg.Alexa_Param)
        .appendField(new Blockly.FieldDropdown([['On/Off state','4'],['Red color(R)','0'],['Green Color(G)','1'],['Blue color(B)','2'],
		['Level of Color(0-255)','3'],['% Color(0-100)','5'],['Brightness(0-100)','6']]), "PARAM_ALEXA");
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Alexa_param'] = function(block) {
  var result_alexa = this.getFieldValue('PARAM_ALEXA');
  
  if (result_alexa==0) 
    var code = '(d->getR())';
	else if (result_alexa==1) 
		var code = '(d->getG())';
		else if (result_alexa==2) 
			 var code = '(d->getB())';
			 else if (result_alexa==3) 
				  var code = '(d->getValue())';
				  else if (result_alexa==4) 
						var code = '((bool)d->getValue())';
						else if (result_alexa==5) 
							var code = '(d->getPercent())';
							else 
								var code = '(d->getDegrees())';
     
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
 