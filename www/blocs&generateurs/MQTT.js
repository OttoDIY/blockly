/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.MQTT');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['mqtt_init'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mqtt_image.png",62,38))
        .appendField(Blockly.Msg.MQTT_name_init)
		.appendField(Blockly.Msg.MQTT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_ssid)
        .appendField(new Blockly.FieldTextInput("Red Wifi"), "SSID")
		.appendField(Blockly.Msg.MQTT_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");			
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_server)
        .appendField(new Blockly.FieldTextInput("io.adafruit.com"), "SERVER")
		.appendField(Blockly.Msg.MQTT_port)
        .appendField(new Blockly.FieldTextInput("1883"), "PORT");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_user)
        .appendField(new Blockly.FieldTextInput(" "), "USER")
		.appendField(Blockly.Msg.MQTT_APIkey)
        .appendField(new Blockly.FieldTextInput(" "), "APIKEY")	
		.appendField(Blockly.Msg.MQTT_client)
        .appendField(new Blockly.FieldTextInput("LX5_"), "IDCLIENT");	
		
		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init mqtt functions');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['mqtt_init'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var server = block.getFieldValue('SERVER');  
   var port = block.getFieldValue('PORT');  
   var usermqtt = block.getFieldValue('USER');  
   var APIKey = block.getFieldValue('APIKEY');  
   var Idclient = block.getFieldValue('IDCLIENT'); 
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_mqtt'] = '#include "ESP8266WiFi.h"\n'+
  '#include "PubSubClient.h"\n';
  
  Blockly.Arduino.variables_['define_mqtt_variables'] = 'const char mqtt_wifi_ssid[]="'+ssid+'";\n'+
'const char mqtt_wifi_pass[]="'+wifipassword+'";\n'+
'const char mqtt_broker[]="'+server+'";\n'+
'const int mqtt_port='+port+';\n'+
'const char mqtt_user[]="'+usermqtt+'";\n'+
'const char mqtt_pass[]="'+APIKey+'";\n'+
'const char mqtt_clientid[]="'+Idclient+'";\n'+
'\n'+
'WiFiClient mqtt_wifiClient;\n'+
'PubSubClient mqtt_client(mqtt_wifiClient);\n'+
'\n'+
'char mqtt_payload[64];\n';

Blockly.Arduino.definitions_['define_mqtt_loop'] = 'void mqtt_loop(){\n'+
'	if (!mqtt_client.connected()) {\n'+
'		mqtt_client.connect(mqtt_clientid,mqtt_user,mqtt_pass);\n'+
'		mqtt_subscribe();\n'+
'	}\n'+
'	if (mqtt_client.connected()) {\n'+
' 	mqtt_client.loop();\n'+
'	}\n'+
'}\n';

Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
'}\n';

  
Blockly.Arduino.definitions_['define_mqtt_otherfunctions'] = 'double mqtt_payload2double(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<64; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return atof(mqtt_payload);\n'+
'}\n'+
'\n'+
'String mqtt_payload2string(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<64; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return String(mqtt_payload);\n'+
'}\n';

Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'}\n';
  
if(logic=='TRUE')
{
Blockly.Arduino.setups_['setup_mqtt_setup'] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'	WiFi.begin(mqtt_wifi_ssid,mqtt_wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n'+
'	randomSeed(micros());\n'+
'	mqtt_client.setServer(mqtt_broker, mqtt_port);\n'+
'	mqtt_client.setCallback(mqtt_callback);\n'+
'	mqtt_subscribe();\n';
}
else{
Blockly.Arduino.setups_['setup_mqtt_setup'] = '	delay(2000);\n'+
'	WiFi.begin(mqtt_wifi_ssid,mqtt_wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n'+
'	randomSeed(micros());\n'+
'	mqtt_client.setServer(mqtt_broker, mqtt_port);\n'+
'	mqtt_client.setCallback(mqtt_callback);\n'+
'	mqtt_subscribe();\n';	
}


  var code='';
  return code;
};

Blockly.Blocks['mqtt_loop'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicattend)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic attend in the loop');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['mqtt_loop'] = function(block) {

  var code = 'mqtt_loop();\n';
  return code;
};


Blockly.Blocks['mqtt_subscribe_num'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicsubscribe)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicsubscribe2)
	this.appendValueInput("variable");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic subscription');
    this.setHelpUrl('');
  },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};

Blockly.Arduino['mqtt_subscribe_num'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var varName = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
 
 
//Insert in mqtt_subscribe 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_subscribe']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
		' mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}
else 
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'] + 
		'mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n'; 
	}
 
 //Insert in mqtt_callback
 
 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_callback']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varNum;\n'+
'}\n';
	}
else 
	{
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'] + 
		'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varNum;\n'+
		'}\n';
	}
  
    
  var code = '';
  return code;
};

Blockly.Blocks['mqtt_subscribe_text'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicsubscribe)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicsubscribe3)
	this.appendValueInput("variable");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic subscription');
    this.setHelpUrl('');
  },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};

Blockly.Arduino['mqtt_subscribe_text'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var varName = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
 
 
//Insert in mqtt_subscribe 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_subscribe']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
		' mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}

else 
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'] + '\n mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}
 
 //Insert in mqtt_callback
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_callback']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varText;\n'+
'}\n';
	}

else 
	{
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'] + 
		'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varText;\n'+
		'}\n';
	}
  
    
  var code = '';
  return code;
};


Blockly.Blocks['mqtt_publish'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicpublish)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicvalue)
	this.appendValueInput("variable");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic subscription');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['mqtt_publish'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    
  var code = 'mqtt_client.publish(String(String("'+topic+'")).c_str(),String(String('+variable+')).c_str());\n';
  return code;
};




