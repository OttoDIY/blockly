'use strict';

goog.provide('Blockly.Blocks.simpleSensors');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

Blockly.Blocks['button_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/sensor_touch.png",33,33))
	    .appendField(Blockly.Msg.BUTTON_TOUCH_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUTTON")
    this.appendDummyInput()
    .appendField(Blockly.Msg.BUTTON_PRESSED)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
    this.appendDummyInput()  .appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",33,33))
    .appendField("#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "US_NUMBER")
		.appendField(Blockly.Msg.ultrasonic_ranger)
        .appendField(Blockly.Msg.TRIG)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_TRIG")
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
	
    Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrasound_distance_'+us_number+'() {\n'+
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
		
	 var code = '';
	 return code;	
};

Blockly.Blocks["ultrasonic_distance"]={init:function(){
  this.appendDummyInput()
	.appendField(new Blockly.FieldImage("media/sensor_ultrasound.png",25,15)) 
  .appendField("#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "US_NUMBER")
	.appendField(Blockly.Msg.ultrason_distance1);
  this.setColour("#2a93e8");
  this.setHelpUrl(Blockly.Msg.ultrason_helpurl);
  this.setInputsInline(false);
  this.setOutput(true, "Number");
  this.setTooltip(Blockly.Msg.ultrason_distance2)}
};
Blockly.Arduino["ultrasonic_distance"]=function(block){
  var code;
  var us_number = this.getFieldValue('US_NUMBER');
  
  code = 'ultrasound_distance_'+us_number+'()';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Analog_temperature_sensor2'] = {
  helpUrl: '',
  init: function() {
	 var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
        
  var code = '((analogRead('+dropdown_pin+')*500)/1024)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['potentiometer_ranger_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
    this.appendDummyInput("DHT11").appendField(new Blockly.FieldImage("media/humidity11.png",33,33));
    this.appendDummyInput()	.appendField("#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "DHT_NUMBER")
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
  this.setColour("#2a93e8");
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
  this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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



Blockly.Blocks['Vibration_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;  
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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


Blockly.Blocks['pir_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVapor+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVapor+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['AmbientLight_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
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
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinWater+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinWater+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Moisture_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinMoisture+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinMoisture+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Blocks['Joystick_axis_sensor2'] = {
  helpUrl: '',
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
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
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/joystick.png",33,33))
	    .appendField(Blockly.Msg.JOYSTICK_BUTTON)
	    .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_JOYSTICK")
    this.appendDummyInput()
		.appendField(Blockly.Msg.JOYSTICK_PRESSED)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};



Blockly.Arduino['joystick_button_sensor2'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, "PIN_JOYSTICK", Blockly.Arduino.ORDER_NONE);
  
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



