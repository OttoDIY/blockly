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

goog.provide('Blockly.Blocks.HMC5883');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Compass_HMC5883'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/hmc5883.png",33,33))
		.appendField(Blockly.Msg.HMC5883)
	this.appendDummyInput()
		.appendField(Blockly.Msg.HMC5883_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the magnet values in the HMC5883 sensors');
  }
};

Blockly.Arduino['Init_Compass_HMC5883'] = function(block) {
   
  Blockly.Arduino.includes_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>';
  Blockly.Arduino.includes_['include_Adafruit_HMC5883_U'] = '#include <Adafruit_HMC5883_U.h>';
  
  Blockly.Arduino.definitions_['init_HMC5883'] = 'Adafruit_HMC5883_Unified mag = Adafruit_HMC5883_Unified(12345);\n';
  Blockly.Arduino.definitions_['init_var1_HMC5883'] = 'sensors_event_t eventmag;\n';
    
  Blockly.Arduino.setups_['setup_HMC5883'] = 'mag.begin();\n';
  	 	 
  var code='';
  return code;
};

Blockly.Blocks['order_to_read_HMC5883_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HMC5883_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Read the values of the HMC5883 sensor. The values are store in internal variable.The units are radians");
  }
};



Blockly.Arduino['order_to_read_HMC5883_values'] = function(block) {
   
  var code = 'mag.getEvent(&eventmag);\n'
   
  return code;
};

Blockly.Blocks['HMC5883_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField("🧭")
		.appendField(new Blockly.FieldDropdown([['magnetic vector.X','0'],['magnetic vector.Y','1'],['magnetic vector.Z','2'],['Heading ºdegree','3']]), "TypeMag")
	    .appendField(Blockly.Msg.HMC5883_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the parameter selected. x, y, z, and Orientation magnetic in degree(Heading).You must then add your Declination Angle. http://www.magnetic-declination.com/');
  }
};

Blockly.Arduino['HMC5883_values'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;
 
  switch (typeMag) {
    case '0':
      code = 'eventmag.magnetic.x';
      break;
    case '1':
      code = 'eventmag.magnetic.y';
      break;
    case '2':
      code = 'eventmag.magnetic.z';
      break;
	 case '3':
      code = '(atan2(eventmag.magnetic.y, eventmag.magnetic.x)*(180/M_PI))';
      break;
    default:
			code = 'eventmag.magnetic.x';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
