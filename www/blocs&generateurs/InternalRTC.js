 'use strict';

goog.provide('Blockly.Blocks.InternalRTC');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RTC_internal'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/rtcds3231.png",33,33))
		.appendField(Blockly.Msg.INTERNALRTC_NAME)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init all to use the Internal RTC');
  }
};

Blockly.Arduino['Init_RTC_internal'] = function(block) {
   
  Blockly.Arduino.definitions_['include_ESP32Time'] = '#include <ESP32Time.h>\n';
  
  Blockly.Arduino.definitions_['init_initernal_RTC'] = 'ESP32Time rtc;\n';
        	 	 
  var code='';
  return code;
};

Blockly.Blocks['DateTime_RTC_internal'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	this.appendDummyInput()
		.appendField(Blockly.Msg.INTERNALRTC_NAME)
    this.appendValueInput("INTERNAL_DAY")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_DAY);
	this.appendValueInput("INTERNAL_MONTH")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_MONTH);		
	this.appendValueInput("INTERNAL_YEAR")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_YEAR);		
	this.appendValueInput("INTERNAL_HOUR")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_HOUR);		
	this.appendValueInput("INTERNAL_MINUTE")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_MINUTE);		
	this.appendValueInput("INTERNAL_SECOND")
			.setCheck("Number")
			.appendField(Blockly.Msg.INTERNALRTC_SECOND);		
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the date time in the Internal RTC');
  }
};

Blockly.Arduino['DateTime_RTC_internal'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'INTERNAL_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'INTERNAL_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'INTERNAL_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'INTERNAL_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'INTERNAL_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'INTERNAL_SECOND', Blockly.Arduino.ORDER_ATOMIC);
   
   var code='rtc.setTime('+sec+','+min+','+hour+','+day+','+month+','+year+');\n';
  return code;
};


Blockly.Blocks['values_internal_RTC'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.INTERNALRTC_NAME)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTERNALRTC_YEAR, "0"], [Blockly.Msg.INTERNALRTC_MONTH, "1"],[Blockly.Msg.INTERNALRTC_DAY, "2"],[Blockly.Msg.INTERNALRTC_HOUR, "3"],[Blockly.Msg.INTERNALRTC_MINUTE, "4"],[Blockly.Msg.INTERNALRTC_SECOND, "5"],[Blockly.Msg.INTERNALRTC_DOFWEEK, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.INTERNALRTC_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the date or time parameter');
  }
};

Blockly.Arduino['values_internal_RTC'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==5)
	  var code = 'rtc.getSecond()';
  else if (Output_Value==4)
		var code = 'rtc.getMinute()';
   else if (Output_Value==3)
			var code = 'rtc.getHour()';
    else if (Output_Value==2)
				var code = 'rtc.getDay()';
	 else if (Output_Value==1)
				var code = 'rtc.getMonth()';
			 else if (Output_Value==0)
				 var code = 'rtc.getYear()';
				 else
					var code = 'rtc.getDayofWeek()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['values_text_internal_RTC'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.INTERNALRTC_NAME)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTERNALRTC_GETTIME, "0"], [Blockly.Msg.INTERNALRTC_GETDATE, "1"]]), "OUTPUT_VALUE")
	    //.appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the text de hora y fecha');
  }
};

Blockly.Arduino['values_text_internal_RTC'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'rtc.getTime()';
  else
	  var code = 'rtc.getDate()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


