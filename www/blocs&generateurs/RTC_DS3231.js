/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
 
 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
'use strict';

goog.provide('Blockly.Blocks.RTC_DS3231');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RTC_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/rtcds3231.png",33,33))
		.appendField(Blockly.Msg.RTCDS3231_NAME)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init all to use the RTC_DS3231');
  }
};

Blockly.Arduino['Init_RTC_ds3231'] = function(block) {
   
  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['include_RTClib'] = '#include <RTClib.h>\n';
  
  Blockly.Arduino.definitions_['init_ds3232'] = 'RTC_DS3231 rtc;\n'+
  'DateTime t;\n'+
  'String daysOfTheWeek[7]={"Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"};\n'+
  'String monthsNames[12]={"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"};\n';
      
  Blockly.Arduino.setups_['setup_ds3232'] = 'rtc.begin();\n';
  	 	 
  var code='';
  return code;
};

Blockly.Blocks['DateTime_RTC_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_RTC)
    this.appendValueInput("DS3231_DAY")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_DAY);
	this.appendValueInput("DS3231_MONTH")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MONTH);		
	this.appendValueInput("DS3231_YEAR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_YEAR);		
	this.appendValueInput("DS3231_HOUR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_HOUR);		
	this.appendValueInput("DS3231_MINUTE")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MINUTE);		
	this.appendValueInput("DS3231_SECOND")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_SECOND);		
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the date time in the RTC_DS3231');
  }
};

Blockly.Arduino['DateTime_RTC_ds3231'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'DS3231_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'DS3231_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'DS3231_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'DS3231_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'DS3231_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'DS3231_SECOND', Blockly.Arduino.ORDER_ATOMIC);
   
   var code='rtc.adjust(DateTime('+year+','+month+','+day+','+hour+','+min+','+sec+'));\n';
  return code;
};


Blockly.Blocks['order_read_rtc_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RTCDS3231_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Order to read the rtc");
  }
};

Blockly.Arduino['order_read_rtc_ds3231'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 't=rtc.now();\n'
   
  return code;
};

Blockly.Blocks['values_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "0"], [Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"],[Blockly.Msg.RTCDS3231_DOFWEEK, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the date or time parameter');
  }
};

Blockly.Arduino['values_ds3231'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==5)
	  var code = 't.second()';
  else if (Output_Value==4)
		var code = 't.minute()';
   else if (Output_Value==3)
			var code = 't.hour()';
    else if (Output_Value==2)
				var code = 't.day()';
	 else if (Output_Value==1)
				var code = 't.month()';
			 else if (Output_Value==0)
				 var code = 't.year()';
				 else
					var code = 't.dayOfTheWeek()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['values_text_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_TEXT_DOFWEEK, "0"], [Blockly.Msg.RTCDS3231_TEXT_MONTH, "1"]]), "OUTPUT_VALUE")
	    //.appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the text of day of week or month');
  }
};

Blockly.Arduino['values_text_ds3231'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'monthsNames[t.month()-1]';
  else
	  var code = 'daysOfTheWeek[t.dayOfTheWeek()]';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


