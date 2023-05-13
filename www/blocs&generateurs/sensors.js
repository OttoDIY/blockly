'use strict';

goog.provide('Blockly.Blocks.sensors');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
Blockly.FieldCheckbox.CHECK_CHAR= '✅'

Blockly.Blocks['button_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/button.png",33,33))
	    .appendField(Blockly.Msg.BUTTON_NAME)
	    .appendField(Blockly.Msg.PIN)
   	    .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
	this.appendDummyInput()
  .appendField(Blockly.Msg.BUTTON_PRESSED)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');

		this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['button_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_BUTTON');

  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['button_touch_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_touch.png",33,33))
	    .appendField(Blockly.Msg.BUTTON_TOUCH_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
    this.appendDummyInput()
    .appendField(Blockly.Msg.BUTTON_PRESSED)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC')
     ;
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['button_touch_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_BUTTON');

  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['tilt_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/tilt.png",33,33))
	    .appendField(Blockly.Msg.TILT_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.TILT_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['tilt_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_BUTTON');

  Blockly.Arduino.setups_['setup_tilt_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['photointerrupter_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/photointerrupter.png",33,33))
	    .appendField(Blockly.Msg.PHOTO_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.PHOTO_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['photointerrupter_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_BUTTON');

  Blockly.Arduino.setups_['setup_photointerrupter_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['knock_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/knock.png",33,33))
	    .appendField(Blockly.Msg.KNOCK_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.KNOCK_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['knock_sensor2'] = function(block) {
 var dropdown_pin = block.getFieldValue('PIN_BUTTON');
  Blockly.Arduino.setups_['setup_knock_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['ultrasonic_sensor'] = {  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()  .appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",33,33))
    .appendField(Blockly.Msg.OTTO_HOME_TEXT + "#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "US_NUMBER")
		.appendField(Blockly.Msg.ultrasonic_ranger).appendField(Blockly.Msg.TRIG).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_TRIG");
	this.appendDummyInput()	.appendField(Blockly.Msg.Echo)	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_ECHO")
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setTooltip(Blockly.Msg.ultrason_tooltip);
  }
};

Blockly.Arduino['ultrasonic_sensor'] = function(block) {
	var PIN_TRIG = block.getFieldValue('PIN_TRIG');
	var PIN_ECHO = block.getFieldValue('PIN_ECHO');
	var us_number = this.getFieldValue('US_NUMBER');

    Blockly.Arduino.setups_['setup_output_'+PIN_TRIG] = 'pinMode('+PIN_TRIG+', OUTPUT);';
    Blockly.Arduino.setups_['setup_input_'+PIN_ECHO] = 'pinMode('+PIN_ECHO+', INPUT);';


if ((PIN_TRIG=="4") && (PIN_ECHO=="5"))
	{
	   Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrasound_distance_simple() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(100);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);\n'+
        '   delayMicroseconds(100);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration/55;\n'+
        '   return distance;\n'+
        '}\n';
	}
	else
	{
		Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrasound_distance_simple() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(2);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);\n'+
        '   delayMicroseconds(10);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration/58;\n'+
        '   return distance;\n'+
        '}\n';
	}

	 var code = '';
	 return code;
};

Blockly.Blocks["ultrasonic_distance"]={init:function(){
  this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",25,15))
  .appendField("#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "US_NUMBER")
	.appendField(Blockly.Msg.ultrason_distance1);
  this.setColour("#54BCF7");
  this.setHelpUrl(Blockly.Msg.ultrason_helpurl);
  this.setInputsInline(false);
  this.setOutput(true, "Number");
  this.setTooltip(Blockly.Msg.ultrason_distance2);}
};
Blockly.Arduino["ultrasonic_distance"]=function(block){
  var code;
  var us_number = this.getFieldValue('US_NUMBER');

  code = 'ultrasound_distance_simple()';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['ultrasonic_sensor2'] = {  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()  .appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",33,33))
		.appendField(Blockly.Msg.OTTO_HOME_TEXT+Blockly.Msg.ultrasonic_ranger).appendField("RGB").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_TRIG");
	this.appendDummyInput()	.appendField("IO")	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_ECHO");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
  }
};


Blockly.Arduino['ultrasonic_sensor2'] = function(block) {
  var PIN_RGB = block.getFieldValue('PIN_TRIG');
  var PIN_IO = block.getFieldValue('PIN_ECHO');

  Blockly.Arduino.variables_["usrgb"]='const int RgbPin = '+PIN_RGB+';\n'+
  'const int SingPin = '+PIN_IO+';\n'+
  'float distance;\n'+
  'unsigned long Time_Echo_us = 0;\n';
  Blockly.Arduino.includes_["usrgb"]="#include <Adafruit_NeoPixel.h>";
  Blockly.Arduino.setups_['setup_IO'] = 'pinMode('+PIN_IO+', OUTPUT);\n';
      Blockly.Arduino.setups_['setup_RGB'] = 'usrgb.begin();\n'+
      'usrgb.clear();\n'+
      'usrgb.fill( usrgb.Color(0, 255, 255));\n'+
        'usrgb.show();\n';
        Blockly.Arduino.definitions_["usrgb"]="Adafruit_NeoPixel usrgb = Adafruit_NeoPixel(6," + PIN_RGB + ", NEO_GRB + NEO_KHZ800);";
        Blockly.Arduino.definitions_['usrgbdistance'] = 'long ultrasound_distance() {\n'+
            '   long Time_Echo_us, distance;\n'+
            '   pinMode('+PIN_IO+', OUTPUT);\n'+
            '   digitalWrite('+PIN_IO+', LOW);\n'+
            '   delayMicroseconds(2);\n'+
            '   digitalWrite('+PIN_IO+', HIGH);\n'+
            '   delayMicroseconds(20);\n'+
            '   digitalWrite('+PIN_IO+', LOW);\n'+
            '    pinMode('+PIN_IO+', INPUT);\n'+
            '   Time_Echo_us = pulseIn('+PIN_IO+', HIGH);\n'+
            
            'if ((Time_Echo_us < 60000) && (Time_Echo_us > 1)) {\n'+
              ' distance = Time_Echo_us / 58.00;\n'+
              '}\n'+
              ' delay(200);\n'+
              '   return distance;\n'+
            '}\n';

	 var code = '';
	 return code;
};

Blockly.Blocks["usgrgb_fill"]={init:function(){
	this.appendDummyInput().appendField("🌈 fill "+Blockly.Msg.ultrasonic_ranger).appendField(Blockly.Msg.pixel3).appendField(new Blockly.FieldColour("#ff0000"),"color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B655F5");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["usgrgb_fill"]=function(block){
	var color=block.getFieldValue("color");
    var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
    var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
    var code = "usrgb.clear();\n"+
    "usrgb.fill( usrgb.Color("  + red + ", " + green + ", " + blue + "));\n"+
    "usrgb.show();\n";
    return code
};

Blockly.Blocks["ultrasonic_distance2"]={init:function(){
  this.appendDummyInput().appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",25,15)).appendField(Blockly.Msg.ultrason_distance1);
  this.setColour("#54BCF7");
  this.setHelpUrl(Blockly.Msg.ultrason_helpurl);
  this.setInputsInline(false);
  this.setOutput(true, "Number");
  this.setTooltip(Blockly.Msg.ultrason_distance2);}
};

Blockly.Arduino["ultrasonic_distance2"]=function(block){
  var code;
  code = 'ultrasound_distance()';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Analog_temperature_sensor2'] = {
  helpUrl: '',
  init: function() {
	 var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/Analog_temperature.png",33,33))
        .appendField(Blockly.Msg.VAR_TemSens)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ?C');
  }
};


Blockly.Arduino['Analog_temperature_sensor2'] = function(block) {

    var dropdown_pin = block.getFieldValue('PIN');
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

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



Blockly.Blocks['LM35_temperature_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/LM35_temperature.png",33,33))
        .appendField(Blockly.Msg.VAR_LM35)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ?C');
  }
};

Blockly.Arduino['LM35_temperature_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  //Blockly.Arduino.setups_['setup_LM35_Temp'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

  var code = '((analogRead('+dropdown_pin+')*500)/1024)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['potentiometer_ranger_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/potentiometer.png",33,33))
	    .appendField(Blockly.Msg.POTE_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_POTENTIOMETER")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
	this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Potentiometer');
  }
};

Blockly.Arduino['potentiometer_ranger_sensor2'] = function(block) {
    var PinPotentiometer = block.getFieldValue('PIN_POTENTIOMETER');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;

	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinPotentiometer+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinPotentiometer+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['LDR_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/light.png",33,33))
	    .appendField(Blockly.Msg.LDR_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_LDR")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('LDR or CDS Light sensor. Value');
  }
};


Blockly.Arduino['LDR_sensor2'] = function(block) {

	var PinLDR = block.getFieldValue('PIN_LDR');
	var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;

	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinLDR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinLDR+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['LDR_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/light.png",33,33))
	    .appendField(Blockly.Msg.LDR_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_LDR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.LDR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('(LDR or CDS) ');
  }
};



Blockly.Arduino['LDR_status_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_LDR');

  Blockly.Arduino.setups_['setup_ldr_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['IR_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/linefollow.png",33,33))
	    .appendField(Blockly.Msg.IR_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_IR")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('Infrared sensor.Value');
  }
};


Blockly.Arduino['IR_sensor2'] = function(block) {

	var PinIR = block.getFieldValue('PIN_IR');
	var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinIR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinIR+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['IR_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/linefollow.png",33,33))
	    .appendField(Blockly.Msg.IR_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_IR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.IR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['IR_status_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_IR');

  Blockly.Arduino.setups_['setup_ir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Flame_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/flame.png",33,33))
	    .appendField(Blockly.Msg.FLAME_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_FLAME")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Flame infrared sensor.Value');
  }
};

Blockly.Arduino['Flame_sensor2'] = function(block) {

	var PinFlame = block.getFieldValue('PIN_FLAME');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinFlame+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinFlame+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Flame_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/flame.png",33,33))
	    .appendField(Blockly.Msg.FLAME_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_FLAME")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.FLAME_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['Flame_status_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_FLAME');
  Blockly.Arduino.setups_['setup_flame_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Sound_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_noise.png",33,33))
	    .appendField(Blockly.Msg.SOUND_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_SOUND")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Analog sound sensor.Value');
  }
};

Blockly.Arduino['Sound_sensor2'] = function(block) {
	var PinSound = block.getFieldValue('PIN_SOUND');
  var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinSound+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinSound+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Sound_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_noise.png",33,33))
	    .appendField(Blockly.Msg.SOUND_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_SOUND")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.SOUND_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Sound_status_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_SOUND');
  Blockly.Arduino.setups_['setup_sound_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//////////////

Blockly.Blocks['dht_sensor2'] = {init: function() {
	  var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput("DHT11").appendField(new Blockly.FieldImage("media/humidity11.png",33,33));
    this.appendDummyInput()	.appendField(Blockly.Msg.OTTO_HOME_TEXT + "#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "DHT_NUMBER")
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]],function(option){this.sourceBlock_.updateShape(option)}), "OUTPUT_TYPE");
    this.appendDummyInput()	.appendField(Blockly.Msg.PIN)	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_DHT")	.setAlign(Blockly.ALIGN_RIGHT)
    this.setTooltip('DHT temperature, humidity and headindex sensor.Reading temperature or humidity takes about 250 milliseconds.OLD Sensor readings may also be up to 2 seconds (its a very slow sensor)');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);},
   updateShape:function(option){
        if (option=="0") {
          this.removeInput("DHT11");
          this.removeInput("DHT21");
          this.removeInput("DHT22");
          this.appendDummyInput("DHT11").appendField(new Blockly.FieldImage("media/humidity11.png",33,33,"*"));
		  this.moveNumberedInputBefore(3, 0);

        }
        if (option=="1"){
          this.removeInput("DHT11");
          this.removeInput("DHT21");
          this.removeInput("DHT22");
          this.appendDummyInput("DHT21").appendField(new Blockly.FieldImage('media/humidity21.png', 33, 33, "*"))
		  this.moveNumberedInputBefore(3, 0);
        }
        if (option=="2"){
          this.removeInput("DHT11");
          this.removeInput("DHT21");
          this.removeInput("DHT22");
          this.appendDummyInput("DHT22").appendField(new Blockly.FieldImage('media/humidity22.png', 33, 33, "*"));
		  this.moveNumberedInputBefore(3, 0);
        }
        },
        mutationToDom:function(){
          var container = document.createElement("mutation");
          container.setAttribute("matrix", this.getFieldValue("matrix"));
          return container
      },
      domToMutation:function(xmlElement){
          this.updateShape(xmlElement.getAttribute("matrix"))
      }
};

Blockly.Arduino['dht_sensor2'] = function(block) {
	var PinDHT = block.getFieldValue('PIN_DHT');
	var TypeDHT = this.getFieldValue('OUTPUT_TYPE');
	var dht_number = this.getFieldValue('DHT_NUMBER');

	Blockly.Arduino.includes_['include_dht'] = '#include "DHT.h" \n';

	if (TypeDHT=='0')
	{
		Blockly.Arduino.definitions_['begin_dht_'+dht_number] = 'DHT dht_'+dht_number+'('+PinDHT+',DHT11);\n';
		}
	else if (TypeDHT=='1')
		{
		Blockly.Arduino.definitions_['begin_dht_'+dht_number] = 'DHT dht_'+dht_number+'('+PinDHT+',DHT21);\n';
		}
	else
		{
		Blockly.Arduino.definitions_['begin_dht_'+dht_number] = 'DHT dht_'+dht_number+'('+PinDHT+',DHT22);\n';
		}

	Blockly.Arduino.setups_['setup_input_'+dht_number] = 'dht_'+dht_number+'.begin();\n';

     var code = '';
	 return code;

};



Blockly.Blocks["dht_measure"]={init:function(){
  this.appendDummyInput("DHT11").appendField(new Blockly.FieldImage("media/humidity11.png",22,22));
  this.appendDummyInput().appendField("#").appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "DHT_NUMBER")
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]],function(option){this.sourceBlock_.updateShape(option)}), "OUTPUT_TYPE");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Temp, "0"], [Blockly.Msg.DHT_Humi, "1"],[Blockly.Msg.DHT_Head, "2"]]), "OUTPUT_VALUE");
  this.setColour("#54BCF7");
  this.setOutput(true, "Number");
  this.setInputsInline(true);
  this.setTooltip(Blockly.Msg.dht22_tooltip)},
  updateShape:function(option){
    if (option=="0") {
      this.removeInput("DHT11");
      this.removeInput("DHT21");
      this.removeInput("DHT22");
      this.appendDummyInput("DHT11").appendField(new Blockly.FieldImage("media/humidity11.png",22,22,"*"));
	  this.moveNumberedInputBefore(3, 0);
    }
    if (option=="1"){
      this.removeInput("DHT11");
      this.removeInput("DHT21");
      this.removeInput("DHT22");
      this.appendDummyInput("DHT21").appendField(new Blockly.FieldImage('media/humidity21.png', 22, 22, "*"));
	  this.moveNumberedInputBefore(3, 0);
    }
    if (option=="2"){
      this.removeInput("DHT11");
      this.removeInput("DHT21");
      this.removeInput("DHT22");
      this.appendDummyInput("DHT22").appendField(new Blockly.FieldImage('media/humidity22.png', 22, 22, "*"));
	  this.moveNumberedInputBefore(3, 0);
    }
    },
    mutationToDom:function(){
      var container = document.createElement("mutation");
      container.setAttribute("matrix", this.getFieldValue("matrix"));
      return container
  },
  domToMutation:function(xmlElement){
      this.updateShape(xmlElement.getAttribute("matrix"))

  }
};

Blockly.Arduino["dht_measure"]=function(block){
var Status = this.getFieldValue('OUTPUT_VALUE');
var code;
var dht_number = this.getFieldValue('DHT_NUMBER');

if(Status=='0')
    code = 'dht_'+dht_number+'.readTemperature()';
else if (Status=='1')
      code = 'dht_'+dht_number+'.readHumidity()';
     else
       code= 'dht_'+dht_number+'.computeHeatIndex(dht_'+dht_number+'.readTemperature(),dht_'+dht_number+'.readHumidity(),true)';

return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks["dht11"]={init:function(){
  this.appendValueInput("PIN", "Number").appendField(new Blockly.FieldImage('media/humidity11.png', 33, 33, "*"))
.appendField(new Blockly.FieldDropdown(Blockly.Msg.menudht), "choix").appendField(Blockly.Msg.pin);
  this.setColour("#54BCF7");
  this.setOutput(true, "Number");
  this.setTooltip(Blockly.Msg.dht11_tooltip)}
};
Blockly.Arduino["dht11"]=function(block){
var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
var choice=block.getFieldValue("choix");
Blockly.Arduino.includes_["dht.h"]='#include <DHT.h>';
Blockly.Arduino.definitions_["dht11"]="DHT dht11(" + dropdown_pin + ", DHT11);";
Blockly.Arduino.setups_["dht11"]="dht11.begin();";
switch (choice) {
  case "h":
      var code="dht11.readHumidity()";
      break;
  case "t":
      var code="dht11.readTemperature()";
      break;
}
return [code, Blockly.Arduino.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['Gas_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",33,33))
	    .appendField(Blockly.Msg.GAS_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_GAS")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
  	this.setInputsInline(true);
    this.setTooltip('(MQ-7) Target gas: carbon monoxide.Gas sensor.Value');
  }
};

Blockly.Arduino['Gas_sensor2'] = function(block) {
    var PinGas = block.getFieldValue('PIN_GAS');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinGas+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinGas+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Gas_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",33,33))
	    .appendField(Blockly.Msg.GAS_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_GAS")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.GAS_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('(MQ-7)');
  }
};

Blockly.Arduino['Gas_status_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_GAS');
  Blockly.Arduino.setups_['setup_gas_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Alcohol_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alcohol.png",33,33))
	    .appendField(Blockly.Msg.ALCOHOL_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_ALCOHOL")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('(MQ-3) Target gas: alcohol.Value');
  }
};


Blockly.Arduino['Alcohol_sensor2'] = function(block) {

	var PinAlcohol = block.getFieldValue('PIN_ALCOHOL');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlcohol+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlcohol+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Alcohol_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alcohol.png",33,33))
	    .appendField(Blockly.Msg.ALCOHOL_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_ALCOHOL")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.ALCOHOL_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Alcohol_status_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_ALCOHOL');
  Blockly.Arduino.setups_['setup_Alcohol_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Air_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",33,33))
	    .appendField(Blockly.Msg.AIR_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_AIR")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('(MQ-135) Air quality. Value');
  }
};


Blockly.Arduino['Air_sensor2'] = function(block) {

	var PinAir = block.getFieldValue('PIN_AIR');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAir+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAir+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Air_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/gas.png",33,33))
	    .appendField(Blockly.Msg.AIR_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_AIR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.ALCOHOL_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['Air_status_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_AIR');
  Blockly.Arduino.setups_['setup_Alcohol_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Vibration_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vibration.png",33,33))
	    .appendField(Blockly.Msg.VIBRATION_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_VIBRATION")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Vibration sensor.Value');
  }
};


Blockly.Arduino['Vibration_sensor2'] = function(block) {

	var PinVibration = block.getFieldValue('PIN_VIBRATION');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVibration+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVibration+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vibration_status_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vibration.png",33,33))
	    .appendField(Blockly.Msg.VIBRATION_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_VIBRATION")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.VIBRATION_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['Vibration_status_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_VIBRATION');
  Blockly.Arduino.setups_['setup_Vibration_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['hall_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/hall.png",33,33))
	    .appendField(Blockly.Msg.HALL_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_HALL")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.HALL_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['hall_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_HALL');
  Blockly.Arduino.setups_['setup_hall_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['hall_sensor2_analog'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/hall.png",33,33))
	    .appendField(Blockly.Msg.HALL_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_MAG")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Magnetic sensor 49E');
  }
};


Blockly.Arduino['hall_sensor2_analog'] = function(block) {

	var PinMag = block.getFieldValue('PIN_MAG');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinMag+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinMag+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};













Blockly.Blocks['pir_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/pir.png",33,33))
	    .appendField(Blockly.Msg.PIR_NAME)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_PIR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.PIR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Arduino['pir_sensor2'] = function(block) {

  var dropdown_pin = block.getFieldValue('PIN_PIR');
  Blockly.Arduino.setups_['setup_pir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Vapor_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/vapor.png",33,33))
	    .appendField(Blockly.Msg.VAPOR_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_VAPOR")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Vapor sensor.Value');
  }
};

Blockly.Arduino['Vapor_sensor2'] = function(block) {

	var PinVapor = block.getFieldValue('PIN_VAPOR');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVapor+'),0,1023,100,0)';
    else
      var code = 'analogRead('+PinVapor+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['AmbientLight_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/alight.png",33,33))
	    .appendField(Blockly.Msg.ALIGHT_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_ALIGHT")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Ambient light sensor (TEMT6000).Value');
  }
};


Blockly.Arduino['AmbientLight_sensor2'] = function(block) {

	var PinAlight = block.getFieldValue('PIN_ALIGHT');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlight+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlight+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Water_sensor2'] = {
  helpUrl: '',
  init: function() {
	  var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/water.png",33,33))
	    .appendField(Blockly.Msg.WATER_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_WATER")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Water level sensor.Value');
  }
};


Blockly.Arduino['Water_sensor2'] = function(block) {

	var PinWater = block.getFieldValue('PIN_WATER');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinWater+'),0,1023,100,0)';
    else
      var code = 'analogRead('+PinWater+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Moisture_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/moisture.png",33,33))
	    .appendField(Blockly.Msg.MOISTURE_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_MOISTURE")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Water level sensor.Value');
  }
};


Blockly.Arduino['Moisture_sensor2'] = function(block) {

	var PinMoisture = block.getFieldValue('PIN_MOISTURE');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';


    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinMoisture+'),0,1023,100,0)';
    else
      var code = 'analogRead('+PinMoisture+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Joystick_axis_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",33,33))
	    .appendField(Blockly.Msg.JOYSTICK_NAME)
		.appendField(new Blockly.FieldDropdown([["X", "0"], ["Y", "1"]]), "OUTPUT_AXIS")
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_JOYSTICK")
	this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Joystick axes sensor.Value');
  }
};


Blockly.Arduino['Joystick_axis_sensor2'] = function(block) {

	var PinJoystick = block.getFieldValue('PIN_JOYSTICK');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;

	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinJoystick+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinJoystick+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['joystick_button_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",33,33))
	    .appendField(Blockly.Msg.JOYSTICK_BUTTON)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_JOYSTICK2")
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};



Blockly.Arduino['joystick_button_sensor2'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN_JOYSTICK2');

  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';

  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['SoundAmp_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_noise.png",33,33))
	    .appendField(Blockly.Msg.SOUND_AMP_NAME)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "PIN_SOUND")
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.VALUE, "1"], [Blockly.Msg.PERCENT, "0"]]), "OUTPUT_VALUE");
	this.appendValueInput("SAMPLE_WINDOW", "Number")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SOUND_WINDOWS);
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Analog mic amplifier sensor.Value peak to peak');
  }
};

Blockly.Arduino['SoundAmp_sensor2'] = function(block) {
	var PinSound = block.getFieldValue('PIN_SOUND');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var SampleWindow=Blockly.Arduino.valueToCode(block, "SAMPLE_WINDOW", Blockly.Arduino.ORDER_ATOMIC);
	var code;

	var card=window.localStorage.card;

	 if (card =="MRTnode")
		Blockly.Arduino.setups_['setup_analogResolutionESP32'] = 'analogReadResolution(10);\n';

   Blockly.Arduino.definitions_['measure_peakToPeak'] = 'int measureVolume() {\n'+
   'unsigned long startMillis= millis();  // Start of sample window \n'+
   'unsigned int peakToPeak = 0;   // peak-to-peak level\n'+
   'int sample;\n'+
   'unsigned int signalMax = 0;\n'+
   'unsigned int signalMin = 1024;\n'+
   ' // collect data for SampleWindow mS\n'+
   'while (millis() - startMillis < '+SampleWindow+')\n'+
   '{\n'+
    '  sample = analogRead('+PinSound+');\n'+
     ' if (sample < 1024)  // toss out spurious readings\n'+
     ' {\n'+
     '    if (sample > signalMax)\n'+
     '    {\n'+
      '      signalMax = sample;  // save just the max levels\n'+
     '    }\n'+
      '   else if (sample < signalMin)\n'+
     '    {\n'+
      '      signalMin = sample;  // save just the min levels\n'+
      '   }\n'+
     ' }\n'+
  ' }\n'+
  ' peakToPeak = signalMax - signalMin;  // max - min = peak-peak amplitude\n'+
  ' return peakToPeak;\n'+
 '}\n';

    if(Status=='0')
      var code = 'map(measureVolume(),0,1023,0,100)';
    else
      var code = 'measureVolume()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Button of the MRTX-Uno board ----------------------------------------------------------------------

Blockly.Blocks['MRTX_button'] = {
  helpUrl: '',
  init: function() {

    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",33,33))
	    .appendField(Blockly.Msg.MRTX_BUTTON)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['MRTX_button'] = function(block) {

  Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Adafruit_MCP23X08.h>\n';
  Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X08 mcp;\n';

  Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();';
  Blockly.Arduino.setups_['mcp0_pin'] = 'pinMode(0,INPUT_PULLUP);';

  var code = '!mcp.digitalRead(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ----------------------------------------------------------------------------------------------------------------


//Button of the MRTNode board ----------------------------------------------------------------------

Blockly.Blocks['MRTNode_button'] = {
  helpUrl: '',
  init: function() {

    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",33,33))
	    .appendField(Blockly.Msg.MRTX_BUTTON)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['MRTNode_button'] = function(block) {


  Blockly.Arduino.setups_['buttonNode_pin'] = 'pinMode(0,INPUT_PULLUP);';

  var code = '!digitalRead(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ----------------------------------------------------------------------------------------------------------------

Blockly.Blocks['touch_internal_esp32'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/finger.png",33,33))
	    .appendField(Blockly.Msg.TOUCH)
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].touch), "PIN_TOUCH")
	this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('some pins in ESP32 are capacitives. In this board these pins can be used');
  }
};

Blockly.Arduino['touch_internal_esp32'] = function(block) {
    var PinTouch = block.getFieldValue('PIN_TOUCH');
   	var code;

    var code = 'touchRead('+PinTouch+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['hall_sensor_esp32'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/hall.png",33,33))
		.appendField("ESP32 Internal")
	    .appendField(Blockly.Msg.HALL_NAME)
	this.setOutput(true, 'Number');
   	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['hall_sensor_esp32'] = function(block) {

  var code = 'hallRead()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  capteur  */
Blockly.Blocks['mc005']={init:function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/infrared.png', 48, 48, "*"))
        .appendField(Blockly.Msg.mc005);
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.mc005_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['mc005'] = function(block) {
	var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + value_pin]="pinMode(" + value_pin + ", INPUT);";
	var code = "digitalRead(" + value_pin + ") == LOW" ;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Python['mc005'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state') == "HIGH" ? "1" : "0";
	Blockly.Python.imports_["pin"]="from machine import Pin";
    Blockly.Python.definitions_["pin_"+value_pin]="BROCHE_"+value_pin+" = Pin("+value_pin+", Pin.IN)";
	var code = "BROCHE_" + value_pin + ".value() == 0" + dropdown_state ;
	return [code, Blockly.Python.ORDER_ATOMIC];
};
//////////////
Blockly.Blocks['inter']={init:function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/switch.png', 33, 33, "*"))
        .appendField(Blockly.Msg.inter)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "state")
        .appendField("connect to the pin");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.inter_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['inter'] = function(block) {
	var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state');
    Blockly.Arduino.setups_["setup_input_" + value_pin]="pinMode(" + value_pin + ", INPUT_PULLUP);";
	var code = "digitalRead(" + value_pin + ") == " + dropdown_state ;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Python['inter'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state') == "HIGH" ? "1" : "0";
	Blockly.Python.imports_["pin"]="from machine import Pin";
    Blockly.Python.definitions_["pin_"+value_pin]="BROCHE_"+value_pin+" = Pin("+value_pin+", Pin.IN, Pin.PULL_UP)";
	var code = "BROCHE_" + value_pin + ".value() == " + dropdown_state ;
	return [code, Blockly.Python.ORDER_ATOMIC];
};
//////////////
Blockly.Blocks["grove_ldr"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
		this.appendDummyInput().appendField(new Blockly.FieldImage('media/light.png', 33, 33, "*"))
		.appendField(Blockly.Msg.grove_ldr).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAtCAIAAAC8k9W3AAAACXBIWXMAACmGAAAphgEi7N+MAAAJkklEQVR42s1Y+VdTVx7nH5iemdM6tdYFlSXYEEJIqogS1pAEUBHBBQTRU3SsjtqqiBsYskIQrIDWFRVwARSLitatiBWIC6DiIC6nztHacRtZAo+EwHzueyEsAyH29Ie+8809L3f73O/+vc+u+0Oerq4utCZT14B+pocZtf2xs6zpsuGhYUxof33VtDS5cFrUzqVJhXi39Nu4CdPaDcWKlaet3eC9MCtwye49JypFS3YLY7LbKYPtyy1C6uUbj9Fo6uy0Rh0GIyaXXL7HnpGKv1iC1nVG6g9X76Mfo9aXY/++urPDfLxdqmz0W5TjF7fL3yphAtjlzNLi3cJHwOJd6EG/LcvRXql6BESjsdMOP6yfv/bIXydvmhCoGOefYpXkaB2ClGi3fFdWffcZWkvPuAA5M8fe/DKQsD9QotbnARFCsoMocIqFCfljfGWTQjSsYPWw5CwlNNpHNtY/ZbTPNryzpP0mOEnVLsEaejeNS4jGhW5ZdA9QYhILgGiw8A3sUcJkTGL2tU5OEpWzVIXJgGGWOElVdKd5AmdmGiQx1i/FUayEDCYSqcgdxWQJUIDdyzeD/bnPNhuxByGJyj4gJXLNIXAmiMyY9+1hHGvm1/vDVh5cllz0ZWTmalXJpFCyOVAYbML3H4INmUOYy2VFMCVgr1KWiOP3ZOVXbMw4C4OITshPzr6AfsjGGjaGrVCPwAeBHx8oD/pqT/T6fH5ExoJ1RzzmbM84VD5nVa5bmNY9PB0yQCCCIobEZjFMEEUOQlaA0c+i4WF9DmKi6fEipZNUM9J72wSRAlqHkU8UKfrqux82Y2vjiOkmw3rp1kyfC0FJGBoWnti5VG0foPCL3blyW97CtQfQj9Mw3sEaSt9Q2Fg/mSKn9NLP985erblQXmehixX3rlbWy7NLx0A2wcMofrRvStS3++tqbzc8qGtsqNt95Bzs3OIag2NDUJ9N31r2Ux36qXa9saPN2KHvNFAdVBsTv85cqRk5bSuDbeHeSdIPG+LFUNmlivq7NVVV1dXVukf/qlvwzT4ciEU7/ZB8Q7YFJT8bqDYSb5jASwf55laKxr4zYuoWRAnELzgruPl/vqFdXrj22vXKW7du6nS6qirdg/u1q2RQqMwl2Co21Hyo6Kf21ibEnba68ldHNiHnkBTSYdiR+2Po0hyfmGxE3+Wy4kUbj0asOURbgGqA1hFGDh678OThPd3Nm3dr74D8F+3EcVmDyhxIMRuIzEd5JxWX3ewytqOn/da5N9/HIykD/u2bt8Ko9L/wN0Wvz1shP7leW7pGfRphGUsGczaFICI9r+hiVbXuSvmNxYm5Y/wYIzXbWuzG/jF19j8PfjotCaZUeLba1NlBDtSTpoxIf0Zj0JKsEV5bnenYCXbhcg5E5qpBrX2CSAmNTJ2fieA61l9OB10y9EVI6idTt4Svzu2XSxAHJs/N/EiQWFymMxkp8AqOOykcoAvj+jbq6MmLa5UFgshM5EpJ/B6f2Gz/xbtolZtjDqvXAM1/cQIHsWpSSM+ZguECMkFERubhcnMOtWTyZj0VtvJAblEFI3P91fwXsgByiK6u982tL58/PX2h0jc2Z13aD+GrchGwgpftsw+UW6zdXkQgATZeRLMeBLcm7o6/MEy8IH7EbTzWoqd6a4cewRLJP3j8EnzDuzBkeHy35dpRvAC7qUXf+LCh8Mx1JGBkC174dvfZ6ZABNgWXjhIwp5IuwgmUHmEqUYzKPlApnK/ymqsaH6gUx6rdZxEZwEGYyq6TxsLOdpYSDiy+b27T1Tbq9a19Ck7I3NTU0vaoseHkuRtwU8QfWBNkiBjJKBKS585UKzQ7JkrTxXEZibLMj4XaZQmZMasz/u6rTVLu8I9OHektE8d/zxRrlsdcKzIW98uLt6WXbsO/iT6a/kv9+gvh20T4ftz4sOBUuTAm5+uUYsgcScmB8W8J+FZPkipCZ0e7eoV7+kdKZ85jTZ4TEDzXVzLXZXJ4yKx57jOS7QNV3DAteLPIeGCtuDTpxIHCa0Tf3d36c3tfJPCJj9H6fvHvJyXnK6dFZan3XoZzQ+xmbDHJGU5BMleOhwfXhctlczhsPs/VjcPmurH5+Mv+wjkggRWi/cw7aUP6mX61ImPn+aW3Q5fv/4ifWNRj553v3xqeP8UQxlta2y5cvp62+zT0jajJnpEG5yFWLTHz7SxO8RBM5fHceR58Dz6ftDTxeB54XESJjpJUzETsCvnHvoKzd4hcO01m/5614sDHnlv6+nd3H/9GfRscnz1KmDQxSAHtIlfSh6DTOc03sHl8Tw8el8bq8wCcxwO2kyQVM+HfqBVnrzrYz79jNhQgYvTENQpdVMOtdyU74GEYf/PmjU90xt+mbEU1gopYunTv9OisKfN2TBQpwY1N2NI0ZzrsjPZFXDtqjmu98dyP5JK8UxWUvpn497Xjv22fY+okdk5R1Kb04imR2sg1h6HsBevyVqQUz/3mMBPPGZkDm9eDzeuFNmMzMh8mj+WfqjBQehOdx7p6ZN6q78DLyfM6rPeJzQHT06J3es7/jsQ1mm/YGocr8HBnu7u7cd04fJ6bO5cQ353D5biyAjcQvsVKq/nbO+nM5RrAGTooaJ0mA94Zsyy9XPOJ52bgIVFC3xMY/6ZtjSWRCwNCuF/6CbwCvf2CXAUBXkKRp7fIVeAv9BWxJZuH5xt2mH3kUv3DZ7fvPq6rf1pX/6S2/mlt/ZN7Dc8aHj/POnwRExCe+hfqJLa4zVRvU253kGiCYtPWJ6WP8NbEr02PXqn91EezWbbdZwGSG3HIIbGZes1RrHAMkjuJFX3JIUiOTgwNUq9JSAxnh6qiVmgQXKdGqCOWqUf7qYLj1KIY9dgA1bzlGkE4Cg3ikMNgIys4EjEOIHQOLI/6p06SMwbkEoInNecSZtqQ2JYaedjb0GCdvTmU1a+aU7H6zLGG/fvvRLbRnwn7d9xDe+oQ8/12qNvCoNgD76EkpibkI9rZjs1c/kZOT0b7QXyTmDrg/o0AOcJrixNddQ9LYBSBaPHm4yfO1y7ZfBzvpJSwZaFYBRRU2Wa+DQbyveV4WQ17RirSOzcs3SppUS0hjXovzKI6jGSLDqMwJhs96LdlOVAKz9fSfBvtunu+eTW1tP/nbcvrdy2vhqbfXje/ftd64GQ1LrqWJIsaJrdEh36MWlmLnbE/UAbWih/0SbCptZ0zSxu38ejFGw/jNh3DDZu5NNn4WLDs+n7rs+VhfPL+o5eo0ieFatDinfnQZuMOFiw728/b/Ud/T/0fdc5VRb6cMY4AAAAASUVORK5CYII=", 41, 45))
		.appendField(Blockly.Msg.grove_ldr+" A0");
	}
    this.setColour("#54BCF7");
    this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Light_Sensor/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.grove_ldr_tooltip)}
};
Blockly.Arduino["grove_ldr"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/7.9";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["grove_ldr"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LDR = ADC(0)";
    return ["LDR.read()/7.9", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["inout_bp"]={init:function(){
        this.appendValueInput("PIN", "Number").appendField(new Blockly.FieldImage('media/button.png', 33, 33, "*"))
			.appendField(Blockly.Msg.bp);
        this.setColour("#54BCF7");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.bp_tooltip)}
};
Blockly.Arduino["inout_bp"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ") == LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["inout_bp"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
    Blockly.Python.definitions_["pin_"+dropdown_pin]="BP_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN, Pin.PULL_UP)";
    var code="BP_" + dropdown_pin + ".value() == 0";
    return [code, Blockly.Python.ORDER_ATOMIC]
};

//////////////
Blockly.Blocks["suiveur_ligne"]={init:function(){
        this.appendValueInput("PIN", "Number").appendField(new Blockly.FieldImage('media/linefollow.png', 33, 33, "*"))
			.appendField(Blockly.Msg.suiveur_ligne);
        this.setColour("#54BCF7");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.suiveur_ligne_tooltip)}
};
Blockly.Arduino["suiveur_ligne"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="digitalRead(" + dropdown_pin + ") == HIGH";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["suiveur_ligne"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
    Blockly.Python.definitions_["pin_"+dropdown_pin]="follower_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
    var code="follower_" + dropdown_pin + ".value() == 1";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["light_sensor"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 40))
		.appendField(Blockly.Msg.light).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 40))
		.appendField(Blockly.Msg.light+" A0");
	}
    this.setColour("#54BCF7");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-la-luminosite-ambiante-avec-une-photoresistance-et-une-carte-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.light_tooltip)}
};
Blockly.Arduino["light_sensor"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["light_sensor"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LDR = ADC(0)";
    return ["LDR.read()/4", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["potentiometre"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/potentiometer.png', 33, 33, "*"))
		.appendField(Blockly.Msg.potar).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 37, 50))
		.appendField(Blockly.Msg.potar+" A0");
	}
    this.setColour("#54BCF7");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/la-conversion-analogique-numerique-avec-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.potar_tooltip)}
};
Blockly.Arduino["potentiometre"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["potentiometre"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="Pot = ADC(0)";
    return ["Pot.read()/4", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["lm35"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 32, 50))
		.appendField(Blockly.Msg.lm35).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 32, 50))
		.appendField(Blockly.Msg.lm35+" A0");
	}
    this.setColour("#54BCF7");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-lm35-et-une-carte-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.lm35_tooltip)}
};
Blockly.Arduino["lm35"]=function(block){
    var pin=block.getFieldValue("broche");
    Blockly.Arduino.setups_["lm35"]="analogReference(INTERNAL);";
    var code="analogRead(" + pin + ")/11";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["lm35"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LM35 = ADC(0)";
    return ["LM35.read()/11", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_pir']={init:function(){
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/pir.png', 33, 33, "*"))
        .appendField(Blockly.Msg.pir+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.pir_tooltip);
    this.setHelpUrl('http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=27');
  }
};
Blockly.Arduino['block_pir']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_pir']=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ASSIGNMENT);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="Present_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
    var code="Present_" + dropdown_pin + ".value()";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_feu']={init:function(){
    this.appendValueInput("FEU")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/flame.png', 33, 33, "*"))
        .appendField(Blockly.Msg.feu+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.feu_tooltip);
    this.setHelpUrl('http://www.tubefr.com/modules-d-arduino-detecteur-de-flamme.html')}
};
Blockly.Arduino['block_feu']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'FEU', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_feu']=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, 'FEU', Blockly.Python.ORDER_ASSIGNMENT);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="Fire_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
    var code="Fire_" + dropdown_pin + ".value()";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_anticollision']={init:function(){
    this.appendValueInput("COLLISION")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/collision.png', 48, 48, "*"))
        .appendField(Blockly.Msg.presence+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.presence_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL);
  }
};
Blockly.Arduino['block_anticollision']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'COLLISION', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_anticollision']=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, 'COLLISION', Blockly.Python.ORDER_ASSIGNMENT);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="Touch_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
    var code="Touch_" + dropdown_pin + ".value()";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_sensitif']={init:function(){
    this.appendValueInput("SENSITIF")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage('media/sensor_touch.png', 33, 33, "*"))
        .appendField(Blockly.Msg.appui+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.appui_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino['block_sensitif']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'SENSITIF', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_sensitif']=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, 'SENSITIF', Blockly.Python.ORDER_ASSIGNMENT);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="sense_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
    var code="sense_" + dropdown_pin + ".value()";
    return [code, Blockly.Python.ORDER_ATOMIC]
};

//////////////
Blockly.Blocks["cap615"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/soil.png', 33, 33, "*"))
		.appendField(Blockly.Msg.hum).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAA8CAIAAAAG1mY/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDElEQVR42u2X30tbZxjHDyiKPxYVf/8CEaoDHdpU4y524bCrXWLSJuecaDWZ08iqk0Hb6eYEdbjdDNnNwJvqNldbbbq2bBciiCBUKu0Ibmzsqu1/MDsVdJpo3OecNx5TGVLW27wcH598n+/3eZ73PTnkOVI4HD74vwuttL+/v7m5OTIy4vF4Ojo6enp6Luurs7Ozq6vL59MsPkh3dzdROF6vFz4qtBJpRkdHJUmqra2tqamJi4tLTk42mUx1dXVnzpy21L2JxQcBj4+PxzebzfBRodX0qqo2NjaGQiHytba2Qi0vf31o8Mrd2W9qa97A4oOYTK/RCPydnZ36+npUEb2iKP39/WJLY2NjFDl1quzalQ+//mrw7fq3sB9f7QUBHx8fF7Te3l5ZliP69vb2oqKihYWFxcXFysrKrKys/Pw8BGVl5afNZirj5+XlgVdXVy8tLc3NzfERVUTv8/kSEhIyMzPT09MhZWdnV1RU0FRDQ0NxcbHFUutyuSwWS5a+MjIyYCYmJoq9aHq81NRUqAUFBYWFhWSBzWk7nU4OtaWlZXh4mG7T0tJoEw7MlJQUbsRRfT4Ty9cXvcHIzc2l25KSkqqqKjZVWloKIggw4R/Vj9Yjxgoq3eKIHeXk5BjRk/QGiUUXgGJf0fhL6amclJTEdwYr2nlZPYuGOUiOze/3Y/FBjOhxPR51IOUdLu7Q/Py88ZzggxhRmPBfOH/j/pGb+2S1WsF3d3f5UmPxQaLvH/yj+pNTkw1W6zm741yTdr1js13/9jrPwt7eHk8oFn/iu4mzBsfuOGuzTn4/GdH77/nt7ma7ql9K84WWllv+WyiRGXbmzoyj+ZCjNuOjiuiJ2WTFJqva5VLtqjo9Ow1OZcPevH2zSTnkyCo+qoh+9sfZJgXIrV2y2+F2wwansmHpiLwRjuLGRxXTx/QxfUwf08f0Mf0r6m2yFrCdrD/k/Gd9/YfdpZ6gtwmOor6gF/NDdO7p2/r8sL9nWDE/CI5utflBe//gb+Xxiur1WF2KXXVbXar7Pc/ywwdi8hHzB/7yyjK4VZtO4Chur2fl0cPwQVirv7G50Tf4yfmLLnK/65SvDvStPf/rWP9rz9euDfQRhXP+ogx/Y2Nd6z+0F+LfjZkbYv80PzE1IcYmY/4TI9TE1KRDdevHrMAHZ7qTgqEgsT/+/N3b1Units73fwk8BiGveDUzfHCPrwMOFj4IWm3/rO1/toe//LzxgvPToc/W9caO1ceur/89MDIIZ+iLYfiiR8mY0O7/fF9uu/SD3li0ODoFbSttl+7+dE80Hzl/ccJPnz394KPLgV8DBmKIDSSwGoDz5NkTbVP6+5okwthgMLj62+rW9pbY0bH6Atza2oID00Ckg1db/wKZDZL9Usyp1AAAAABJRU5ErkJggg==", 21, 60))
		.appendField(Blockly.Msg.hum+" A0");
	}
    this.setColour("#54BCF7");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/la-conversion-analogique-numerique-avec-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.hum_tooltip)}
};
Blockly.Arduino["cap615"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="(1023-analogRead(" + dropdown_pin + "))/8";
	return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["cap615"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="humidity = ADC(0)";
    return ["(1023-humidity.read())/8", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["cap661"]={init:function(){
	var card=window.localStorage.card;
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/encoder.png', 48, 48, "*"))
		.appendField("pulses on the spindle").appendField(new Blockly.FieldDropdown(profile[card].interrupt), "broche");
    this.setColour("#54BCF7");
    this.setHelpUrl("http://www.ferdinandpiette.com/blog/2012/04/asservissement-en-vitesse-dun-moteur-avec-arduino/");
    this.setOutput(true, "Number");
    this.setTooltip("returns the number of slots (full + hollow) of the encoder wheel")}
};
Blockly.Arduino["cap661"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
	Blockly.Arduino.variables_["tick_codeuse"]="unsigned int tick_codeuse = 0;";
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+',codeuse,CHANGE);';
    Blockly.Arduino.codeFunctions_["codeuse"]='void codeuse(){\n  tick_codeuse++;\n}';
    var code="tick_codeuse";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["cap661"]=function(){return''};
//////////////
Blockly.Blocks["BME280"]={init:function(){
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage('media/pressure.png', 33, 33, "*"))
		.appendField(Blockly.Msg.bme280);
    this.setHelpUrl("");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour("#54BCF7");
    this.setTooltip(Blockly.Msg.bme280_tooltip)}
};
Blockly.Arduino["BME280"]=function(block){
    Blockly.Arduino.includes_["bme280"]='#include <BME280.h>';
	Blockly.Arduino.variables_["bme280"]="BME280 bme;";
	Blockly.Arduino.setups_["bme280"]='bme.begin();';
    var code="bme.readFloatPressure()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["BME280"]=function(block){
    Blockly.Python.imports_["bme280"]='import bme280';
    Blockly.Python.imports_["pin"]='from machine import Pin';
    Blockly.Python.imports_["i2c"]='from machine import I2C';
	Blockly.Python.definitions_["bme280"]="i2c = I2C(scl=Pin(5), sda=Pin(4))\nbme = bme280.BME280(i2c=i2c)";
    return ''
};
//////////////
Blockly.Blocks["BME280_pressure"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/pressure.png', 23, 23, "*")).appendField(Blockly.Msg.bme280_pressure);
    this.setColour("#54BCF7");
    this.setHelpUrl("");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.bme280_pressure_tooltip)}
};
Blockly.Arduino["BME280_pressure"]=function(block){
    var code="bme.readFloatPressure()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["BME280_pressure"]=function(block){
    return ["bme.pressure()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["VL53L0X"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/laser.png', 33, 33, "*")).appendField(Blockly.Msg.VL53L0X);
    this.setColour("#54BCF7");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setHelpUrl("");
    this.setTooltip(Blockly.Msg.VL53L0X_tooltip)}
};
Blockly.Arduino["VL53L0X"]=function(block){
	Blockly.Arduino.includes_["wire"]='#include <Wire.h>';
    Blockly.Arduino.includes_["VL53L0X"]='#include <VL53L0X.h>';
	Blockly.Arduino.variables_["VL53L0X"]="VL53L0X cpt;";
	Blockly.Arduino.setups_["VL53L0X"]='Wire.begin();\n  cpt.init();\n  cpt.setTimeout(500);\n  cpt.startContinuous();'
    var code='';
    return code;
};
Blockly.Python["VL53L0X"]=function(block){
    Blockly.Python.imports_["VL53L0X"]='import VL53L0X';
	Blockly.Python.imports_["i2c"]='from machine import I2C';
	Blockly.Python.definitions_["VL53L0X"]="i2c = I2C(scl=Pin(5), sda=Pin(4))\ntof = VL53L0X.VL53L0X(i2c)";
    return ""
};
//////////////
Blockly.Blocks["VL53L0X_distance"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/laser.png', 15, 15, "*")).appendField(Blockly.Msg.VL53L0X_distance);
    this.setColour("#54BCF7");
    this.setHelpUrl("");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.VL53L0X_distance_tooltip)}
};
Blockly.Arduino["VL53L0X_distance"]=function(block){
    var code="cpt.readRangeContinuousMillimeters()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["VL53L0X_distance"]=function(block){
    return ["tof.read()", Blockly.Python.ORDER_ATOMIC]
};

////////// CCS811 Sensor ////////////

Blockly.Blocks['Init_CCS811'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/CCS811.png",33,33))
		.appendField(Blockly.Msg.CCS811)
		.appendField(Blockly.Msg.CCS811_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the values in the CCS811 sensors');
  }
};

Blockly.Arduino['Init_CCS811'] = function(block) {

  Blockly.Arduino.includes_['include_Adafruit_CCS811'] = '#include <Adafruit_CCS811.h>';
  Blockly.Arduino.variables_['init_CCS811'] = 'Adafruit_CCS811 ccs;\n';

  Blockly.Arduino.setups_['setup_CCS811'] = 'ccs.begin();\n';

  var code='';
  return code;
};

Blockly.Blocks['CCS811_available'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/CCS811.png",15,15))
		.appendField(Blockly.Msg.CCS811_name)
	    .appendField(Blockly.Msg.CCS811_available)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['CCS811_available'] = function(block) {

  var code = 'ccs.available()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['CCS811_readed'] = {
  helpUrl: '',
  init: function() {
   this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/CCS811.png",15,15))
		.appendField(Blockly.Msg.CCS811_name)
	    .appendField(Blockly.Msg.CCS811_readed)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['CCS811_readed'] = function(block) {

  var code = '!ccs.readData()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['CCS811_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#54BCF7");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/CCS811.png",15,15))
		.appendField(Blockly.Msg.CCS811_name)
		.appendField(new Blockly.FieldDropdown([['eCO2 ppm','0'],['TVOC ppb','1']]), "TypeMeasure")
	    .appendField(Blockly.Msg.ADXL345_values);
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('Refund the parameter selected. eCO2 (equivalent calculated carbon-dioxide) or TVOC (Total Volatile Organic Compound)');
  }
};


Blockly.Arduino['CCS811_values'] = function(block) {

  var typeMeasure = this.getFieldValue('TypeMeasure');
  var code;

  switch (typeMeasure) {
    case '0':
      code = 'ccs.geteCO2()';
      break;
    case '1':
      code = 'ccs.getTVOC()';
      break;
    default:
			code = 'ccs.geteCO2()';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];

};
