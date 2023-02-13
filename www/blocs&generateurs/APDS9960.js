 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.APDS9960');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['APDS9960_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/APDS9960.png",33,33))
        .appendField(Blockly.Msg.APDS9960_init)
		.appendField(Blockly.Msg.APDS9960_init2)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the APDS9960 sensor to use to detect gestures or color frequencies');
  }
};

Blockly.Arduino['APDS9960_init'] = function(block) {

 Blockly.Arduino.includes_['define_adafruit_APDS9960'] = '#include <Adafruit_APDS9960.h>';
 Blockly.Arduino.definitions_['define_adafruit_APDS9960_variable'] = 'Adafruit_APDS9960 apds;\n';

 Blockly.Arduino.setups_['setup_sparkfun_APDS9960'] = 'apds.begin();\n';

  var code='';
  return code;

};

Blockly.Blocks['APDS9960_gesture_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_detection)
		.appendField(new Blockly.FieldDropdown([['Enable','1'],['Disable','0']]), "ENABLE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enable or disable the gesture module in the APDS9960');
  }
};

Blockly.Arduino['APDS9960_gesture_init'] = function(block) {


 var enable = this.getFieldValue('ENABLE');

  if(enable==1)
   var code='apds.enableProximity(true);\n'+'apds.enableGesture(true);\n';

  else
   var code='apds.enableProximity(false);\n'+'apds.enableGesture(false);\n';

  return code;

};


Blockly.Blocks['APDS9960_color_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_detection)
		.appendField(new Blockly.FieldDropdown([['Enable','1'],['Disable','0']]), "ENABLE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enable or disable the color module in the APDS9960');
  }
};

Blockly.Arduino['APDS9960_color_init'] = function(block) {


 var enable = this.getFieldValue('ENABLE');

 Blockly.Arduino.definitions_['define_APDS9960_color_variables'] = 'uint16_t r_apds;\nuint16_t g_apds;\nuint16_t b_apds;\nuint16_t c_apds;\n';

  if(enable==1)
   var code='apds.enableColor(true);\n';
  else
   var code='apds.enableColor(false);\n';

  return code;

};


Blockly.Blocks['APDS9960_gesture_gain'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_gesture_gain)
		.appendField(new Blockly.FieldDropdown([['Gain x1','0'],['Gain x2','1'],['Gain x4','2'],['Gain x8','3']]), "GAIN")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config gain for gesture detection in the APDS9960');
  }
};



Blockly.Arduino['APDS9960_gesture_gain'] = function(block) {


  var gain = this.getFieldValue('GAIN');

  var code='apds.setGestureGain('+gain+');\n';

  return code;

};

Blockly.Blocks['APDS9960_gesture_detected'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_gesture_detected)
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip('true if a gesture is detected');
  }
};

Blockly.Arduino['APDS9960_gesture_detected'] = function(block) {

   var code = 'apds.gestureValid()';

   return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['APDS9960_color_detected'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_gesture_detected)
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip('true if a color is detected');
  }
};

Blockly.Arduino['APDS9960_color_detected'] = function(block) {

   var code = 'apds.colorDataReady()';

   return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['APDS9960_readgesture'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_readgesture)
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Read gesture');
  }
};

Blockly.Arduino['APDS9960_readgesture'] = function(block) {

   var code = 'apds.readGesture()';

   return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['APDS9960_gesture'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.APDS9960_name_gesture)
        .appendField(new Blockly.FieldDropdown([['Dir Up','APDS9960_UP'],['Dir Down','APDS9960_DOWN'],['Dir Left','APDS9960_LEFT'],['Dir Right','APDS9960_RIGHT']]), "DIRECTION");
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Gesture');
  }
};

Blockly.Arduino['APDS9960_gesture'] = function(block) {
  var direction = this.getFieldValue('DIRECTION');
  var code;

 code= ''+direction+'';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['APDS9960_read_colors'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#54BCF7");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_readcolors)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read colors in the APDS9960 sensor');
  }
};

Blockly.Arduino['APDS9960_read_colors'] = function(block) {


  var code=' apds.getColorData(&r_apds, &g_apds, &b_apds, &c_apds);\n';

  return code;

};

Blockly.Blocks['APDS9960_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
	    .appendField(Blockly.Msg.APDS9960_name_color)
        .appendField(new Blockly.FieldDropdown([['Red','0'],['Green','1'],['Blue','2'],['Clear','3']]), "color")
		.appendField(Blockly.Msg.APDS9960_colors);
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Color');
  }
};

Blockly.Arduino['APDS9960_color'] = function(block) {


 var color = this.getFieldValue('color');


  if(color ==0)
   var code='r_apds';
  else  if(color ==1)
   var code='g_apds';
	else  if(color ==2)
		 var code='b_apds';
		else
	      var code='c_apds';

   return [code, Blockly.Arduino.ORDER_ATOMIC];

};
