 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.GPS');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['GPS_init_ss'] = {
  helpUrl: '',
  init: function() {
	 var card=window.localStorage.card;
	this.setColour("#2a93e8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/GPS.png",33,33))
        .appendField(Blockly.Msg.GPS_init)
	this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_TX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_TX");
    this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_RX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_RX");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the GPS module');
  }
};

Blockly.Arduino['GPS_init_ss'] = function(block) {
	
 var pin_rx = this.getFieldValue('PIN_RX');
 var pin_tx = this.getFieldValue('PIN_TX');
  
 Blockly.Arduino.includes_['define_softwareserial_library'] = '#include <SoftwareSerial.h>';
 Blockly.Arduino.includes_['define_gps_library'] = '#include <TinyGPS.h>';
 Blockly.Arduino.definitions_['define_GPS_variable'] = 'TinyGPS gps;\n';
 Blockly.Arduino.definitions_['define_softwareserial_gps'] = 'SoftwareSerial mySoftwareSerialgps('+pin_rx+','+pin_tx+');\n';
 Blockly.Arduino.definitions_['gps_variables'] ='float flat,flon,falt,fc,fk,fmph,fmps,fkmph;\n'+
'int year;\n'+ 
'byte month, day, hour, minutes, second, hundredths,nsat;\n'+ 
'unsigned long fix_age; \n';   
 
 Blockly.Arduino.setups_['setup_sserial_gps_baudios'] = 'mySoftwareSerialgps.begin(9600);\n';
 

  var code='';
  return code;
   
};


Blockly.Blocks['GPS_read_save_values'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_readvalues)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read the GPS values and save in the variables');
  }
};

Blockly.Arduino['GPS_read_save_values'] = function(block) {
 		
 var code = 'while (mySoftwareSerialgps.available())\n'+
' {\n'+ 
'  int c = mySoftwareSerialgps.read();\n'+ 
'  if (gps.encode(c)) \n'+
'   {\n'+
'     gps.f_get_position(&flat, &flon, &fix_age);\n'+
'     falt = gps.f_altitude(); // +/- altitude in meters \n'+
'     fc = gps.f_course(); // course in degrees \n'+
'     fk = gps.f_speed_knots(); // speed in knots \n'+
'     fmph = gps.f_speed_mph(); // speed in miles/hr \n'+
'     fmps = gps.f_speed_mps(); // speed in m/sec \n'+
'     fkmph = gps.f_speed_kmph(); // speed in km/hr \n'+
'     gps.crack_datetime(&year, &month, &day,&hour, &minutes, &second, &hundredths, &fix_age);\n'+
'     nsat=gps.satellites();\n'+
'   }\n'+
'  }\n';

  return code;
};

Blockly.Blocks['GPS_location'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter)
		.appendField(new Blockly.FieldDropdown([['Latitude','0'],['Longitude','1'],['Altitude in meters','2'],['Course in degrees','3'],['Number of satellites','4']]), "PARAMETERS1")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return location parameters');
  }
};

Blockly.Arduino['GPS_location'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS1'); 
 
 
  if(parameter ==0)
   var code='flat';
  else  if(parameter ==1)
   var code='flon';
	else  if(parameter ==2)
		 var code='falt';
	 else if(parameter ==3)
		 var code='fc';
		else
	      var code='nsat';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Blocks['GPS_speed'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name)
		.appendField(new Blockly.FieldDropdown([['Speed in knots','0'],['Speed in miles/h','1'],['Speed in m/sec','2'],['Speed in km/h','3']]), "PARAMETERS2")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return speed parameters');
  }
};


Blockly.Arduino['GPS_speed'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS2'); 
 
 
  if(parameter ==0)
   var code='fk';
  else  if(parameter ==1)
   var code='fmph';
	else  if(parameter ==2)
		 var code='fmps';
		else
	      var code='fkmph';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Blocks['GPS_datetime'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()

        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter3)
		.appendField(new Blockly.FieldDropdown([['Year','0'],['Month','1'],['Day','2'],['Hours','3'],['Minutes','4'],['Seconds','5']]), "PARAMETERS3")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return datetime parameters');
  }
};

Blockly.Arduino['GPS_datetime'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS3'); 
 
 
  if(parameter ==0)
   var code='year';
  else  if(parameter ==1)
   var code='month';
	else  if(parameter ==2)
		 var code='day';
	 else if(parameter ==3)
		 var code='hour';
		else if(parameter ==4)
			var code='minutes';
			else
				var code='second';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};
