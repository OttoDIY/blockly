/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.NTP');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['Init_NTP'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
       	.appendField(Blockly.Msg.NTP_NAME);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NTP_GMT)
		.appendField(new Blockly.FieldDropdown([['-12', '-12'],['-11', '-11'],['-10', '-10'],['-9', '-9'],['-8', '-8'],['-7', '-7'],['-6', '-6'],['-5', '-5'],['-4', '-4'],['-3', '-3'],['-2', '-2'],['-1', '-1'],['0', '0'],['+12', '12'],['+11', '11'],['+10', '10'],['+9', '9'],['+8', '8'],['+7', '7'],['+6', '6'],['+5', '5'],['+4', '4'],['+3', '3'],['+2', '2'],['+1', '1']]),"GMT")		
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init IFTTT configuration');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['Init_NTP'] = function(block) {
	
	var gmt_local = this.getFieldValue('GMT');

	Blockly.Arduino.includes_['include_NTPClient'] = '#include <NTPClient.h>\n'+
  '#include <WiFiUdp.h>\n';

  Blockly.Arduino.definitions_['definition_NTPClient'] = 'WiFiUDP ntpUDP;\n'+
  'NTPClient timeClient(ntpUDP, "pool.ntp.org",(int)('+gmt_local+'*3600), 60000);\n'+
  'unsigned long epochTime;\n'+
  'struct tm *ptm;\n'+
  'String weekDays[7]={"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};\n'+
  'String months[12]={"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};\n';
  
    
  Blockly.Arduino.setups_['setup_NTPClient'] = 'timeClient.begin();\n';

	var code='';
	return code;
};

Blockly.Blocks['order_read_NTP_server'] = {
  init: function() {
   this.setColour("#008080");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
        .appendField(Blockly.Msg.NTP_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Order to read of NTP server");
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['order_read_NTP_server'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 'timeClient.update();\n'+
  'epochTime = timeClient.getEpochTime();\n'+
  'ptm = gmtime ((time_t *)&(epochTime));\n'
   
  return code;
};

Blockly.Blocks['values_NTP_server'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
		.appendField(Blockly.Msg.NTP_NAME2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.NTP_EPOCH, "0"],[Blockly.Msg.NTP_YEAR, "1"], [Blockly.Msg.NTP_MONTH, "2"],[Blockly.Msg.NTP_DAY, "3"],[Blockly.Msg.NTP_HOUR, "4"],[Blockly.Msg.NTP_MINUTE, "5"],[Blockly.Msg.NTP_SECOND, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.NTP_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the date or time parameter');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['values_NTP_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==6)
	  var code = 'timeClient.getSeconds()';
  else if (Output_Value==5)
		var code = 'timeClient.getMinutes()';
   else if (Output_Value==4)
			var code = 'timeClient.getHours()';
    else if (Output_Value==3)
				var code = 'ptm->tm_mday';
	 else if (Output_Value==2)
				var code = 'ptm->tm_mon+1';
			else if (Output_Value==1)
					var code = 'ptm->tm_year+1900';
				else
					var code = 'timeClient.getEpochTime()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['values_text_NTP_server'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
		.appendField(Blockly.Msg.NTP_NAME2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.NTP_TEXT_DOFWEEK, "0"], [Blockly.Msg.NTP_TEXT_MONTH, "1"],[Blockly.Msg.NTP_TEXT_TIME, "2"]]), "OUTPUT_VALUE")
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the text of day of week or month');
	this.setHelpUrl(''); 
  }
};


Blockly.Arduino['values_text_NTP_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'months[ptm->tm_mon]';
   else if (Output_Value==0)
	   var code = 'weekDays[timeClient.getDay()]';
     else 
	    var code = 'timeClient.getFormattedTime()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};