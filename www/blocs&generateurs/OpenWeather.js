/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.OpenWeather');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['Init_OpenWeather'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
       	.appendField(Blockly.Msg.Openweather_init);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Api_key)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxx"), "API_KEY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init OpenWeather configuration');
    this.setHelpUrl(''); 
  }
}; 



Blockly.Arduino['Init_OpenWeather'] = function(block) {
	
	var api_key = this.getFieldValue('API_KEY');

	Blockly.Arduino.includes_['include_OpenWeather'] = '#include <ESP8266HTTPClient.h>\n'+
  '#include <WiFiClient.h>\n'+
  '#include <ArduinoJson.h>\n';

  Blockly.Arduino.definitions_['definition_OpenWeather'] = 'String openWeatherMapApiKey = "'+api_key+'";\n'+
'String city;\n'+
'String country_code;\n'+
'String location;\n'+
'String country;\n'+
'String icono;\n'+
'String weather;\n'+
'String description;\n'+
'float temperature;\n'+
'float humidity;\n'+
'float pressure;\n'+
'int sunrise;\n'+
'int sunset;\n'+
'float temp_min;\n'+
'float temp_max;\n'+
'float feels_like;\n'+
'float Cloud;\n'+
'float visibility;\n'+
'float wind_speed;\n'+
'float wind_angle;\n'+
'int id;\n'+
'\n'+
'String jsonBuffer;\n';
 
 Blockly.Arduino.codeFunctions_['functions_OpenWeather'] = 'String httpGETRequest(const char* serverName) {\n'+
  'HTTPClient http;\n'+
  'http.begin(serverName);\n'+
  'int httpResponseCode = http.GET();\n'+
  'String payload = "{}";\n'+ 
  'if (httpResponseCode>0) {\n'+
  '  payload = http.getString();\n'+
  '}\n'+
 'http.end();\n'+
 '\n'+
  'return payload;\n'+
 '}\n'+
 '\n'+
'void GetValuesWeather (String jsonBuffer)\n'+
'{\n'+
'   jsonBuffer.replace(\'[\', \' \');\n'+
'   jsonBuffer.replace(\']\', \' \');\n'+ 
'   char jsonArray [jsonBuffer.length()+1];\n'+
'   jsonBuffer.toCharArray(jsonArray,sizeof(jsonArray));\n'+
'   jsonArray[jsonBuffer.length() + 1] = \'\\0\';\n'+ 
'\n'+
'   DynamicJsonDocument root(1024);\n'+
'   DeserializationError error = deserializeJson(root, jsonArray);\n'+
'   if (error)\n'+
'      return;\n'+
'    location = (const char *)root["name"];\n'+
'    country = (const char *)root["sys"]["country"];\n'+
'    temperature = root["main"]["temp"];\n'+
'    humidity = root["main"]["humidity"];\n'+
'    weather = (const char *)root["weather"]["main"];\n'+
'    description = (const char *)root["weather"]["description"];\n'+
'    pressure = root["main"]["pressure"];\n'+
'    sunrise = root["sys"]["sunrise"];\n'+
'    sunset = root["sys"]["sunset"];\n'+
'    feels_like = root["main"]["feels_like"];\n'+
'    temp_min = root["main"]["temp_min"];\n'+
'    temp_max = root["main"]["temp_max"];\n'+
'    Cloud = root["clouds"]["all"];\n'+
'    visibility = root["visibility"];\n'+
'    wind_angle = root["wind"]["deg"];\n'+
'    wind_speed = root["wind"]["speed"];\n'+
'    icono = (const char *)root["weather"]["icon"];\n'+
'    id= root["weather"]["id"];\n'+
'}\n';

  
	var code='';
	return code;
};



Blockly.Blocks['order_read_OpenWeather_server'] = {
  init: function() {
   this.setColour("#008080");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/openweather.png",25,25))
        .appendField(Blockly.Msg.ReadWeather);
	this.appendValueInput("city")
        .setCheck(null)
		.appendField(Blockly.Msg.City);	
	this.appendValueInput("countrycode")
        .setCheck(null)
		.appendField(Blockly.Msg.CountryCode);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Order to read of OpenWeather server");
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['order_read_OpenWeather_server'] = function(block) {
	
  var city = Blockly.Arduino.valueToCode(block, 'city', Blockly.Arduino.ORDER_ATOMIC);
  var countrycode = Blockly.Arduino.valueToCode(block, 'countrycode', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'if(WiFi.status()== WL_CONNECTED){\n'+
    'city='+city+';\n'+
	'country_code='+countrycode+';\n'+
    'String serverPath = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country_code+"&lang='+window.localStorage.lang+'&APPID="+openWeatherMapApiKey;\n'+
    'jsonBuffer = httpGETRequest(serverPath.c_str());\n'+
    'GetValuesWeather (jsonBuffer);\n'+
    '}\n';
   
  return code;
};

Blockly.Blocks['values_OpenWeather_server'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
		.appendField(Blockly.Msg.OW_Value)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.OW_Temperature, "0"],[Blockly.Msg.Humidity, "1"], [Blockly.Msg.Preassure, "2"],[Blockly.Msg.Temp_max, "3"],[Blockly.Msg.Temp_min, "4"],[Blockly.Msg.Feels_like, "5"],[Blockly.Msg.Cloud, "6"],[Blockly.Msg.wind_speed, "7"],[Blockly.Msg.wind_angle, "8"],[Blockly.Msg.icon_id, "9"],[Blockly.Msg.Visibility, "10"],[Blockly.Msg.sunrise, "11"],[Blockly.Msg.sunset, "12"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.NTP_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the date or time parameter');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['values_OpenWeather_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==0)
	var code = '(temperature-273.15)';
	else if (Output_Value==1)
		var code = 'humidity';
		else if (Output_Value==2)
			var code = 'pressure';
			else if (Output_Value==3)
				var code = '(temp_max-273.15)';
				else if (Output_Value==4)
					var code = '(temp_min-273.15)';
					else if (Output_Value==5)
						var code = '(feels_like-273.15)';
						else if (Output_Value==6)
							var code = 'Cloud/100.00';
							else if (Output_Value==7)
								var code = 'wind_speed';
								else if (Output_Value==8)
									var code = 'wind_angle';
									else if (Output_Value==9)
										var code = 'id';
										else if (Output_Value==10)
											var code = 'visibility/100.00';
											else if (Output_Value==11)
												var code = 'sunrise';
												else
													var code = 'sunset';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['values_text_OpenWeather_server'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
		.appendField(Blockly.Msg.OW_Value)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Description, "0"], [Blockly.Msg.Weather, "1"],[Blockly.Msg.Icon, "2"],[Blockly.Msg.Country, "3"],[Blockly.Msg.LocationOW, "4"]]), "OUTPUT_VALUE")
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the text of day of week or month');
	this.setHelpUrl(''); 
  }
};


Blockly.Arduino['values_text_OpenWeather_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==0)
	  var code = 'description';
   else if (Output_Value==1)
	   var code = 'weather';
		else if (Output_Value==2)
			var code = 'icono';
			else if (Output_Value==3)
				var code = 'country';
					else 
						var code = 'location';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

