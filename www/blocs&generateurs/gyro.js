'use strict';

goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.gyro');
goog.require('Blockly.Arduino');

												   
Blockly.Blocks['otto9_gyro'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_gyro.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#2a93e8");
    this.setTooltip("gyro read");
    this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
  }
};
Blockly.Arduino['otto9_gyro'] = function(block) {
  Blockly.Arduino.variables_['gyro'] = 'int16_t ax, ay, az; \n'
  +'int16_t gx, gy, gz;\n';
  Blockly.Arduino.includes_['gyro'] = '#include "Wire.h"\n'
  +'#include "I2Cdev.h"\n'
  +'#include "MPU6050.h"\n';
  Blockly.Arduino.definitions_['gyro'] = 'MPU6050 accelgyro;';
  Blockly.Arduino.setups_['gyro']=' Wire.begin();\n'
  +'Serial.begin(9600);    //  initialize serial communication\n'
  +'Serial.println("Initializing I2C devices...");\n'
  +'accelgyro.initialize();\n'
  +'Serial.println("Testing device connections...");\n'
  +'Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");\n';
  var code = 'accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);\n'
  +'Serial.print("ax "); Serial.print(ax);Serial.print(" ay ");Serial.print(ay);Serial.print(" az ");Serial.print(az);Serial.print(" gx ");Serial.print(gx);Serial.print(" gy ");Serial.print(gy); Serial.print(" gz "); Serial.println(gz);\n';
  return code;
};

Blockly.Blocks['otto9_getg'] = {init: function() {
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_gyro.png', 15, 15, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT2)
  .appendField(new Blockly.FieldDropdown([["ax", "ax"], ["ay", "ay"], ["az", "az"], ["gx", "gx"], ["gy", "gy"], ["gz", "gz"]]), "getg");
  this.setInputsInline(true);
  this.setOutput(true, "Number");
  this.setColour("#2a93e8");
  this.setTooltip("gyro get actual value");
  this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
}
};
Blockly.Arduino['otto9_getg'] = function(block) {
var dropdown_getg = block.getFieldValue('getg');
var code = dropdown_getg;
return [code, Blockly.Arduino.ORDER_ATOMIC];
};