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

goog.provide('Blockly.Blocks.simpleSensors');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['button_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/button.png",50,38))
	    .appendField(Blockly.Msg.BUTTON_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_BUTTON", "Number").setCheck("Number")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.BUTTON_LOGIC)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
		this.setOutput(true, 'Boolean');
		this.appendDummyInput()
		.appendField(Blockly.Msg.BUTTON_PRESSED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['button_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_BUTTON", Blockly.Arduino.ORDER_NONE);
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['button_touch_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_touch.png",50,38))
	    .appendField(Blockly.Msg.BUTTON_TOUCH_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_BUTTON", "Number").setCheck("Number")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.BUTTON_LOGIC)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
		this.setOutput(true, 'Boolean');
		this.appendDummyInput()
		.appendField(Blockly.Msg.BUTTON_PRESSED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['button_touch_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_BUTTON", Blockly.Arduino.ORDER_NONE);
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['tilt_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tilt.png",50,38))
	    .appendField(Blockly.Msg.TILT_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_BUTTON", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.TILT_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['tilt_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_BUTTON", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_tilt_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['photointerrupter_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/photointerrupter.png",50,38))
	    .appendField(Blockly.Msg.PHOTO_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_BUTTON", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.PHOTO_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['photointerrupter_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_BUTTON", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_photointerrupter_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['knock_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/knock.png",50,38))
	    .appendField(Blockly.Msg.KNOCK_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_BUTTON", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.KNOCK_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['knock_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_BUTTON", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_knock_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['ultrasonic_ranger_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()  .appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",45,38)) .appendField(Blockly.Msg.ultrasonic_ranger)  .appendField(Blockly.Msg.TRIG)
    this.appendValueInput("PIN_TRIG", "Number").setCheck("Number")
	  this.appendValueInput("PIN_ECHO", "Number").setCheck("Number").appendField(Blockly.Msg.Echo);
	  this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Non-contact distance measurement module');
  }
};

Blockly.Arduino['ultrasonic_ranger_sensor'] = function(block) {
    var PIN_TRIG = Blockly.Arduino.valueToCode(this, "PIN_TRIG", Blockly.Arduino.ORDER_NONE); 
    var PIN_ECHO = Blockly.Arduino.valueToCode(this, "PIN_ECHO", Blockly.Arduino.ORDER_NONE);
    Blockly.Arduino.setups_['setup_output_'+PIN_TRIG] = 'pinMode('+PIN_TRIG+', OUTPUT);';
    Blockly.Arduino.setups_['setup_input_'+PIN_ECHO] = 'pinMode('+PIN_ECHO+', INPUT);';
    Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrasound_'+PIN_TRIG+ '() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(2);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);\n'+
        '   delayMicroseconds(10);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration/58;\n'+
        '   return distance;\n'+
        '}\n';;
    var code;
    code = 'ultrasound_'+PIN_TRIG+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Analog_temperature_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/Analog_temperature.png",50,38))
        .appendField(Blockly.Msg.VAR_TemSens)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN", "Number").setCheck("Number")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ?C');
  }
};


Blockly.Arduino['Analog_temperature_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_NONE);
    //Blockly.Arduino.definitions_['include_math'] = '#include <math.h>\n';
	//Blockly.Arduino.setups_['setup_Analog_Temp'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
    Blockly.Arduino.definitions_['define_thermister'] = "double Thermister(int RawADC) \n"+
"{\n"+
     "  double Temp;\n"+
     "  Temp = log(((10240000/RawADC) - 10000));\n"+
     "  Temp = 1 / (0.001129148 + (0.000234125 + (0.0000000876741 * Temp * Temp ))* Temp );\n"+
     "  Temp = Temp - 273.15; // Convert Kelvin to Celcius\n"+
     "  return Temp;\n"+
"}\n";
     
  var code = 'Thermister(analogRead('+dropdown_pin+'))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['LM35_temperature_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/LM35_temperature.png",50,38))
        .appendField(Blockly.Msg.VAR_LM35)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN", "Number").setCheck("Number")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ?C');
  }
};

Blockly.Arduino['LM35_temperature_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_NONE);
  //Blockly.Arduino.setups_['setup_LM35_Temp'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
        
  var code = '((analogRead('+dropdown_pin+')*500)/1024)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['potentiometer_ranger_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/potentiometer.png",50,38))
	    .appendField(Blockly.Msg.POTE_NAME)
        .appendField(Blockly.Msg.PIN)
	this.appendValueInput("PIN_POTENTIOMETER", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
	this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Potentiometer');
  }
};

Blockly.Arduino['potentiometer_ranger_sensor'] = function(block) {
    var PinPotentiometer = Blockly.Arduino.valueToCode(this, "PIN_POTENTIOMETER", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinPotentiometer+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinPotentiometer+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['LDR_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/light.png",50,38))
	    .appendField(Blockly.Msg.LDR_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_LDR", "Number").setCheck("Number")
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('LDR Light sensor. Value');
  }
};


Blockly.Arduino['LDR_sensor'] = function(block) {
    var PinLDR = Blockly.Arduino.valueToCode(this, "PIN_LDR", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinLDR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinLDR+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['LDR_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/light.png",50,38))
	    .appendField(Blockly.Msg.LDR_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_LDR", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.LDR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};



Blockly.Arduino['LDR_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_LDR", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_ldr_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['IR_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/linefollow.png",50,38))
	    .appendField(Blockly.Msg.IR_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_IR", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, "Number");
    this.setTooltip('Infrared sensor.Value');
  }
};


Blockly.Arduino['IR_sensor'] = function(block) {
    var PinIR = Blockly.Arduino.valueToCode(this, "PIN_IR", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinIR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinIR+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['IR_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/linefollow.png",50,38))
	    .appendField(Blockly.Msg.IR_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_IR", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.IR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['IR_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_IR", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_ir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Flame_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/flame.png",50,38))
	    .appendField(Blockly.Msg.FLAME_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_FLAME", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Flame infrared sensor.Value');
  }
};

Blockly.Arduino['Flame_sensor'] = function(block) {
    var PinFlame = Blockly.Arduino.valueToCode(this, "PIN_FLAME", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinFlame+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinFlame+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Flame_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/flame.png",50,38))
	    .appendField(Blockly.Msg.FLAME_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_FLAME", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.FLAME_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['Flame_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_FLAME", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_flame_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Sound_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_noise.png",50,38))
	    .appendField(Blockly.Msg.SOUND_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_SOUND", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Analog sound sensor.Value');
  }
};

Blockly.Arduino['Sound_sensor'] = function(block) {
    var PinSound = Blockly.Arduino.valueToCode(this, "PIN_SOUND", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinSound+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinSound+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Sound_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_noise.png",50,38))
	    .appendField(Blockly.Msg.SOUND_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_SOUND", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.SOUND_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Sound_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_SOUND", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_sound_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['dht_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/humidity11.png",50,38))
		.appendField(new Blockly.FieldImage("media/humidity22.png",50,38))
	    .appendField(Blockly.Msg.DHT_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_DHT", "Number").setCheck("Number")
	this.appendDummyInput()
		.appendField(Blockly.Msg.DHT_Type)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]]), "OUTPUT_TYPE")
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Temp, "0"], [Blockly.Msg.DHT_Humi, "1"],[Blockly.Msg.DHT_Head, "2"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('DHT temperature, humidity and headindex sensor.Reading temperature or humidity takes about 250 milliseconds.OLD Sensor readings may also be up to 2 seconds (its a very slow sensor)');
  }
};


Blockly.Arduino['dht_sensor'] = function(block) {
    var PinDHT = Blockly.Arduino.valueToCode(this, "PIN_DHT", Blockly.Arduino.ORDER_NONE); 
	var TypeDHT = this.getFieldValue('OUTPUT_TYPE');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	
	Blockly.Arduino.includes_['include_dht'] = '#include "DHT.h" \n';
	
	if (TypeDHT=='0')
	{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT11   // DHT 11\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT11);\n';
		}
	else if (TypeDHT=='1')
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT21   // DHT 21\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT21);\n';
		}
	else
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT22   // DHT 22\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT22);\n';
		}
	//Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHTTYPE);\n';
	Blockly.Arduino.setups_['setup_input_'+PinDHT] = 'dht_'+PinDHT+'.begin();\n';
	
    if(Status=='0')
      var code = 'dht_'+PinDHT+'.readTemperature()';  
    else if (Status=='1')
      var code = 'dht_'+PinDHT+'.readHumidity()';
    else
		var code= 'dht_'+PinDHT+'.computeHeatIndex(dht_'+PinDHT+'.readTemperature(),dht_'+PinDHT+'.readHumidity(),true)';	
  
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Gas_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",50,38))
	    .appendField(Blockly.Msg.GAS_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_GAS", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Target gas: carbon monoxide.Gas sensor.Value');
  }
};


Blockly.Arduino['Gas_sensor'] = function(block) {
    var PinGas = Blockly.Arduino.valueToCode(this, "PIN_GAS", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinGas+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinGas+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Gas_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",50,38))
	    .appendField(Blockly.Msg.GAS_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_GAS", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.GAS_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Gas_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_GAS", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_gas_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Alcohol_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alcohol.png",50,38))
	    .appendField(Blockly.Msg.ALCOHOL_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_ALCOHOL", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Target gas: alcohol.Value');
  }
};


Blockly.Arduino['Alcohol_sensor'] = function(block) {
    var PinAlcohol = Blockly.Arduino.valueToCode(this, "PIN_ALCOHOL", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlcohol+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlcohol+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Alcohol_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alcohol.png",50,38))
	    .appendField(Blockly.Msg.ALCOHOL_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_ALCOHOL", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.ALCOHOL_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['Alcohol_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_ALCOHOL", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_Alcohol_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vibration_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vibration.png",50,38))
	    .appendField(Blockly.Msg.VIBRATION_NAME)
        .appendField(Blockly.Msg.PIN)
	this.appendValueInput("PIN_VIBRATION", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Vibration sensor.Value');
  }
};


Blockly.Arduino['Vibration_sensor'] = function(block) {
    var PinVibration = Blockly.Arduino.valueToCode(this, "PIN_VIBRATION", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVibration+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVibration+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vibration_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vibration.png",50,38))
	    .appendField(Blockly.Msg.VIBRATION_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_VIBRATION", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.VIBRATION_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Vibration_status_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_VIBRATION", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_Vibration_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['hall_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/hall.png",50,38))
	    .appendField(Blockly.Msg.HALL_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_HALL", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.HALL_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['hall_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_HALL", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_hall_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['pir_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/pir.png",50,38))
	    .appendField(Blockly.Msg.PIR_NAME)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_PIR", "Number").setCheck("Number")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.PIR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['pir_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_PIR", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_pir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vapor_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vapor.png",50,38))
	    .appendField(Blockly.Msg.VAPOR_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_VAPOR", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Vapor sensor.Value');
  }
};

Blockly.Arduino['Vapor_sensor'] = function(block) {
    var PinVapor = Blockly.Arduino.valueToCode(this, "PIN_VAPOR", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVapor+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVapor+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['AmbientLight_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alight.png",50,38))
	    .appendField(Blockly.Msg.ALIGHT_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_ALIGHT", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Ambient light sensor.Value');
  }
};


Blockly.Arduino['AmbientLight_sensor'] = function(block) {
    var PinAlight = Blockly.Arduino.valueToCode(this, "PIN_ALIGHT", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlight+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlight+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Water_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/water.png",50,38))
	    .appendField(Blockly.Msg.WATER_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_WATER", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Water level sensor.Value');
  }
};


Blockly.Arduino['Water_sensor'] = function(block) {
    var PinWater = Blockly.Arduino.valueToCode(this, "PIN_WATER", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinWater+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinWater+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Moisture_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/moisture.png",50,38))
	    .appendField(Blockly.Msg.MOISTURE_NAME)
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_MOISTURE", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Water level sensor.Value');
  }
};


Blockly.Arduino['Moisture_sensor'] = function(block) {
    var PinMoisture = Blockly.Arduino.valueToCode(this, "PIN_MOISTURE", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinMoisture+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinMoisture+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Joystick_axis_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",50,38))
	    .appendField(Blockly.Msg.JOYSTICK_NAME)
		.appendField(new Blockly.FieldDropdown([["X", "0"], ["Y", "1"]]), "OUTPUT_AXIS")
        .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_JOYSTICK", "Number").setCheck("Number")
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Joystick axes sensor.Value');
  }
};


Blockly.Arduino['Joystick_axis_sensor'] = function(block) {
    var PinJoystick = Blockly.Arduino.valueToCode(this, "PIN_JOYSTICK", Blockly.Arduino.ORDER_NONE); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinJoystick+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinJoystick+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}; 

Blockly.Blocks['joystick_button_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",50,38))
	    .appendField(Blockly.Msg.JOYSTICK_BUTTON)
	    .appendField(Blockly.Msg.PIN)
    this.appendValueInput("PIN_JOYSTICK", "Number").setCheck("Number")
    this.appendDummyInput()
		.appendField(Blockly.Msg.JOYSTICK_PRESSED)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['joystick_button_sensor'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_JOYSTICK", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
