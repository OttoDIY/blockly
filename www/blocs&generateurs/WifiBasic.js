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
    this.setColour("#26C6F8");
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
   var card=window.localStorage.card;
  
    if (card =="OttoESP")
		Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
	else
		Blockly.Arduino.includes_['include_wifi'] = '#include "WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
	

Blockly.Arduino.setups_["Wifi_station_mode"] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'	Serial.println("ESP MAC Address:  ");\n'+
'	Serial.println(WiFi.macAddress());\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n';

}
else{
 Blockly.Arduino.setups_["Wifi_station_mode"] = 'delay(2000);\n'+
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
    this.setColour("#26C6F8");
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
   var card=window.localStorage.card;
  
  if (card =="OttoESP")
		Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
	else
		Blockly.Arduino.includes_['include_wifi'] = '#include "WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
Blockly.Arduino.setups_["Wifi_action_point_mode"] = 'Serial.begin(115200);\n'+
'delay(2000);\n'+
'WiFi.mode(WIFI_AP);\n'+
'Serial.println("Conectando como modo punto de acceso");\n'+
'while (!WiFi.softAP(wifi_ssid,wifi_pass)){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'Serial.println("ESP MAC Address:  ");\n'+
'Serial.println(WiFi.macAddress());\n'+
'Serial.println();\n'+
'Serial.print("Iniciado Access point:\t");\n'+
'Serial.println(wifi_ssid); \n'+
'Serial.print("with this IP address:\t");\n'+
'Serial.println(WiFi.softAPIP());\n';

}
else{
Blockly.Arduino.setups_["Wifi_action_point_mode"] = 'delay(2000);\n'+
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
    this.setColour("#26C6F8");
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
    var card=window.localStorage.card;
     
   var logic = this.getFieldValue('LOGIC');
  
  if (card =="OttoESP")
		Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
	else
		Blockly.Arduino.includes_['include_wifi'] = '#include "WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_ssid2[]="'+ssid2+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n'+
'const char wifi_pass2[]="'+wifipassword2+'";\n';
 
if(logic=='TRUE')
{
Blockly.Arduino.setups_["Wifi_ap_sta_mode"] = 'Serial.begin(115200);\n'+
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
'	Serial.println("ESP MAC Address:  ");\n'+
'	Serial.println(WiFi.macAddress());\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n'+
'   Serial.print("Iniciado Access point:\t");\n'+
'   Serial.println(wifi_ssid2); \n'+
' 	Serial.print("AP dirección IP: ");\n'+
'	Serial.println(WiFi.softAPIP());\n';
}
else{
Blockly.Arduino.setups_["Wifi_ap_sta_mode"] = 'delay(2000);\n'+
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

Blockly.Blocks['wifi_ap_staticip'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.Wifi_ap_fixip)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Wifi_ip)
        .appendField(new Blockly.FieldTextInput("192,168,7,2"), "IP")
		.appendField(Blockly.Msg.Wifi_Gateway)
        .appendField(new Blockly.FieldTextInput("192,168,7,1"), "Gateway")
		.appendField(Blockly.Msg.Wifi_Mask)
        .appendField(new Blockly.FieldTextInput("255,255,255,0"), "Mask");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('In access point fix a ip static');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['wifi_ap_staticip'] = function(block) {
	
 var IP_ap = block.getFieldValue('IP'); 
 var Mask_ap = block.getFieldValue('Mask'); 
 var Gateway_ap = block.getFieldValue('Gateway');  
     
    
Blockly.Arduino.variables_['define_wifi_static_ip_ap'] = 'IPAddress staticIP_ap('+IP_ap+');\n'+
'IPAddress gateway_ap('+Gateway_ap+');\n'+
'IPAddress subnet_ap('+Mask_ap+');\n';
 
  var code='WiFi.softAPConfig(staticIP_ap, gateway_ap, subnet_ap);\n';

  return code;
};

Blockly.Blocks['wifi_sta_staticip'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.Wifi_sta_fixip)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Wifi_ip)
        .appendField(new Blockly.FieldTextInput("192,168,1,150"), "IP")
		.appendField(Blockly.Msg.Wifi_Gateway)
        .appendField(new Blockly.FieldTextInput("192,168,1,1"), "Gateway")
		.appendField(Blockly.Msg.Wifi_Mask)
        .appendField(new Blockly.FieldTextInput("255,255,255,0"), "Mask");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('In access point fix a ip static');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['wifi_sta_staticip'] = function(block) {
	
 var IP_sta = block.getFieldValue('IP'); 
 var Mask_sta = block.getFieldValue('Mask'); 
 var Gateway_sta = block.getFieldValue('Gateway');  
     
    
Blockly.Arduino.variables_['define_wifi_static_ip_sta'] = 'IPAddress staticIP_sta('+IP_sta+');\n'+
'IPAddress gateway_sta('+Gateway_sta+');\n'+
'IPAddress subnet_sta('+Mask_sta+');\n';
 
  var code='WiFi.config(staticIP_sta, gateway_sta, subnet_sta);\n';

  return code;
};
