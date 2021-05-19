/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.IFTTT');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['ifttt_init'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ifttt.png",62,38))
       	.appendField(Blockly.Msg.IFTTT_init)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxx"), "API_KEY");			
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init IFTTT configuration');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['ifttt_init'] = function(block) {
	
	var api_key = block.getFieldValue('API_KEY');  

	Blockly.Arduino.definitions_['define_IFTTT'] = '#define IFTTTKEY "'+api_key+'"\n';

	Blockly.Arduino.variables_['ifttt_client'] = 'WiFiClientSecure clientIFTTT;\n';

	var code='';
	return code;
};


Blockly.Blocks['ifttt_send'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ifttt.png",62,38))
        .appendField(Blockly.Msg.IFTTT_send)
	this.appendValueInput("evento")
		.appendField(Blockly.Msg.IFTTT_event);
    this.appendValueInput("value1")
        .appendField(Blockly.Msg.IFTTT_value1);
    this.appendValueInput("value2")
        .appendField(Blockly.Msg.IFTTT_value2);
	this.appendValueInput("value3")
		.appendField(Blockly.Msg.IFTTT_value3);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send request to IFTTT');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['ifttt_send'] = function(block) {
  var value1 = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
  var value2 = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);
  var value3 = Blockly.Arduino.valueToCode(block, 'value3', Blockly.Arduino.ORDER_ATOMIC);
  var evento = Blockly.Arduino.valueToCode(block, 'evento', Blockly.Arduino.ORDER_ATOMIC); 
  
  
Blockly.Arduino.includes_['include_httpclient'] = '#include "ESP8266HTTPClient.h"\n';  
  
    
Blockly.Arduino.codeFunctions_['send_ifttt_function'] = 'void enviar_ifttt(String evento,String valor1, String valor2, String valor3)\n'+
'{\n'+
' // Cerramos cualquier conexión anterior\n'+
' HTTPClient http;\n'+
'\n'+
'String servername=\"http://maker.ifttt.com/trigger/\"+evento+\"/with/key/\"+IFTTTKEY;\n'+
'http.begin(servername);\n'+
'\n'+
' http.addHeader(\"Content-Type\",\"application/x-www-form-urlencoded\");\n'+
'\n'+
' // Hacemos la petición final\n'+
'String httpRequestData = \"value1=\"+String(valor1)+"&value2=\"+String(valor2)+\"&value3=\"+String(valor3);\n'+
     
' // Send HTTP POST request\n'+
' http.POST(httpRequestData);\n'+
' http.end();\n'+
'}\n';


  var code= 'enviar_ifttt('+evento+','+value1+','+value2+','+value3+');\n';
  return code;
};

