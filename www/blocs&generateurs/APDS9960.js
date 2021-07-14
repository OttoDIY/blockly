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
	this.setColour("#2a93e8");
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
	
 Blockly.Arduino.includes_['define_sparkfun_APDS9960'] = '#include <SparkFun_APDS9960.h>';
 Blockly.Arduino.definitions_['define_sparkfun_APDS9960_variable'] = 'SparkFun_APDS9960 apds = SparkFun_APDS9960();\n';
 
 Blockly.Arduino.setups_['setup_sparkfun_APDS9960'] = 'apds.init();\n';
   
  var code='';
  return code;

};

Blockly.Blocks['APDS9960_gesture_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
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
   var code='apds.enableGestureSensor(false);\n';
  else
   var code='apds.disableGestureSensor();\n';

  return code;

};


Blockly.Blocks['APDS9960_color_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
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
 
 Blockly.Arduino.definitions_['define_APDS9960_color_variables'] = 'uint16_t ambient_light=0;\nuint16_t red_light=0;\nuint16_t green_light=0;\nuint16_t blue_light=0;\n';

  if(enable==1)
   var code='apds.enableLightSensor(false);\n';
  else
   var code='apds.disableLightSensor();\n';

  return code;

};


Blockly.Blocks['APDS9960_gesture_gain'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
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

Blockly.Blocks['APDS9960_color_gain'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_color_gain)
		.appendField(new Blockly.FieldDropdown([['Gain x1','0'],['Gain x2','1'],['Gain x4','2'],['Gain x8','3']]), "GAIN")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config gain for color detection in the APDS9960');
  }
};



Blockly.Arduino['APDS9960_color_gain'] = function(block) {
	
	
  var gain = this.getFieldValue('GAIN'); 

  var code='apds.setAmbientLightGain('+gain+');\n';

  return code;

};


Blockly.Blocks['APDS9960_gesture_detected'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.APDS9960_name_gesture)		
		.appendField(Blockly.Msg.APDS9960_gesture_detected)
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip('true if a gesture is detected');
  }
};

Blockly.Arduino['APDS9960_gesture_detected'] = function(block) {
 		
   var code = 'apds.isGestureAvailable()';
 
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['APDS9960_readgesture'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.APDS9960_name_gesture)
        .appendField(new Blockly.FieldDropdown([['Dir Up','DIR_UP'],['Dir Down','DIR_DOWN'],['Dir Left','DIR_LEFT'],['Dir Right','DIR_RIGHT'],['Dir Far','DIR_FAR'],['Dir Near','DIR_NEAR']]), "DIRECTION");
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
	this.setColour("#2a93e8");
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
	
	
   var code='apds.readBlueLight(blue_light);\n'+
' 	apds.readGreenLight(green_light);\n'+
'	apds.readRedLight(red_light);\n'+
'	apds.readAmbientLight(ambient_light);\n';

  return code;

};

Blockly.Blocks['APDS9960_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/color.png",15,15))
	    .appendField(Blockly.Msg.APDS9960_name_color)
        .appendField(new Blockly.FieldDropdown([['Red','0'],['Green','1'],['Blue','2'],['Ambient light','3']]), "color")
		.appendField(Blockly.Msg.APDS9960_colors);
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Color');
  }
};

Blockly.Arduino['APDS9960_color'] = function(block) {
	
	
 var color = this.getFieldValue('color'); 
 
 
  if(color ==0)
   var code='red_light';
  else  if(color ==1)
   var code='green_light';
	else  if(color ==2)
		 var code='blue_light';
		else
	      var code='ambient_light';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};


