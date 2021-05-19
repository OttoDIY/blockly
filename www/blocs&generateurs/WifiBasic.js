/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.WifiBasic');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['wifi_init_sta'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",62,38))
        .appendField(Blockly.Msg.WIFI_sta_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid)
        .appendField(new Blockly.FieldTextInput("Red Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");			
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init and connect Wifi in station mode');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['wifi_init_sta'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
Blockly.Arduino.setups_['wifi_station_connect'] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n';

}
else{
Blockly.Arduino.setups_['wifi_station_connect'] = 'delay(2000);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n';
}

  var code='';
  return code;
};


Blockly.Blocks['wifi_init_ap'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",62,38))
        .appendField(Blockly.Msg.WIFI_ap_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid_ap)
        .appendField(new Blockly.FieldTextInput("Otto_Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password_ap)
        .appendField(new Blockly.FieldTextInput("otto1234"), "PASSWORD");			
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init and connect Wifi in access point mode');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['wifi_init_ap'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
Blockly.Arduino.setups_['wifi_ap_connect'] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'   WiFi.mode(WIFI_AP);\n'+
'	Serial.println("Conectando como modo punto de acceso");\n'+
'	while (!WiFi.softAP(wifi_ssid,wifi_pass)){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'   Serial.println();\n'+
'   Serial.print("Iniciado Access point:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("with this IP address:\t");\n'+
'   Serial.println(WiFi.softAPIP());\n';

}
else{
Blockly.Arduino.setups_['wifi_ap_connect'] = 'delay(2000);\n'+
'   WiFi.mode(WIFI_AP);\n'+
'	while (!WiFi.softAP(wifi_ssid,wifi_pass)){\n'+
'	delay(500);\n'+
'	}\n';
}

  var code='';
  return code;
};

Blockly.Blocks['wifi_init_sta_ap'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",62,38))
        .appendField(Blockly.Msg.WIFI_sta_ap_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid)
        .appendField(new Blockly.FieldTextInput("Red Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid_ap)
        .appendField(new Blockly.FieldTextInput("Otto_Wifi"), "SSID2")
		.appendField(Blockly.Msg.WIFI_password_ap)
        .appendField(new Blockly.FieldTextInput("otto1234"), "PASSWORD2");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init and connect Wifi in station and ap mode');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['wifi_init_sta_ap'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var ssid2 = block.getFieldValue('SSID2');  
   var wifipassword2 = block.getFieldValue('PASSWORD2');  
     
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_ssid2[]="'+ssid2+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n'+
'const char wifi_pass2[]="'+wifipassword2+'";\n';
 
if(logic=='TRUE')
{
Blockly.Arduino.setups_['wifi_station_connect'] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'   WiFi.mode(WIFI_AP_STA);\n'+
'	WiFi.softAP(wifi_ssid2,wifi_pass2);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'	WiFi.setAutoReconnect(true);\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n'+
' 	Serial.print("AP dirección IP: ");\n'+
'	Serial.println(WiFi.softAPIP());\n';
}
else{
Blockly.Arduino.setups_['wifi_station_connect'] = 'delay(2000);\n'+
'   WiFi.mode(WIFI_AP_STA);\n'+
'	WiFi.softAP(wifi_ssid2,wifi_pass2);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n'+
'	WiFi.setAutoReconnect(true);\n';
}

  var code='';
  return code;
};







/*

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


*/

