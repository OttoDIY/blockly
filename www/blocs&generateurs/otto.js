'use strict';

goog.provide('Blockly.Blocks.otto');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');

Blockly.Blocks['otto_i2cConfig'] = {init: function() {
  var card=window.localStorage.card;
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/otto_bend.png', 33, 33, "*"))
    .appendField(Blockly.Msg.OTTO_HOME_TEXT).appendField("I²C");
    this.appendDummyInput()
    .appendField("SDA")
    .appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_SDA");
    this.appendDummyInput()
    .appendField("SCL")
    .appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_SCL");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_i2cConfig'] = function(block) {
  var PIN_SDA= block.getFieldValue('PIN_SDA');
  var PIN_SCL= block.getFieldValue('PIN_SCL');

  Blockly.Arduino.includes_['otto_i2cConfig_lib'] = '#include <Wire.h>\n';

  Blockly.Arduino.definitions_['otto_i2cConfig_def'] = '#define PIN_SDA '+ PIN_SDA +'\n'
	+ '#define PIN_SCL '+ PIN_SCL +'\n';

  Blockly.Arduino.setups_['otto_i2cConfig_begin']='Wire.begin(PIN_SDA, PIN_SCL);';

  var code = '';
  return code;
};

Blockly.Blocks['otto_arms_init'] = {init: function() {
	var card=window.localStorage.card;
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/humanoid_arms.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT);
	this.appendDummyInput()
	.appendField(Blockly.Msg.OTTO9_ARMS_TEXT+Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_AL");
	this.appendDummyInput()
	.appendField(Blockly.Msg.right) .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_AR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_arms_init'] = function(block) {

  var PIN_AL= block.getFieldValue('PIN_AL');
  var PIN_AR= block.getFieldValue('PIN_AR');

    Blockly.Arduino.includes_['otto_arms'] = '#include <Servo.h>\n'
    + 'Servo AL, AR;';
    Blockly.Arduino.variables_['otto_arms'] = 'int adj[]={ 0, 0,};\n'
    +'int pos[]={ 90,90}; \n'
    +'int shift = 60; \n'
    +'int shift_inc = 10;  \n'
    +'int shift_delay = 50;  \n'
  ;
    Blockly.Arduino.definitions_['otto_arms'] = '#define PIN_AL '+ PIN_AL +' // left arm\n'
    +'#define PIN_AR '+ PIN_AR +' // right arm \n'
    +'void move_servo(){ AL.write(pos[1]+adj[1]); AR.write(pos[2]+adj[2]);}';
    Blockly.Arduino.setups_['otto_arms']='AL.attach(PIN_AR);\n'
    +'AR.attach(PIN_AL);\n'
    +'move_servo();\n'
    +'delay(100);';
  var code = '';
  return code;
};

Blockly.Blocks['otto_arms'] = { init: function() {
    this.appendDummyInput()
    .appendField(Blockly.Msg.CAT_OTTO_ARMS) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), "otto_arms_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setTooltip(Blockly.Msg.OTTO9_ARMS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto_arms'] = function(block) {
  var dropdown_otto_arms_choice = block.getFieldValue('otto_arms_choice');
  var code = '';
  switch(dropdown_otto_arms_choice) {
	case 'HANDSUP':
    code += 'AL.write(160);\n'
    +'AR.write(20);\n'
    +'delay(shift_delay);';
    break;
  case 'HANDSDOWN':
    code += 'AL.write(20);\n'
    +'AR.write(160);\n'
    +'delay(shift_delay);';
		break;
	case 'HANDWAVE1':
		code += 'for(int angle=90; angle<90+shift; angle+=shift_inc){  pos[1] = angle;    move_servo();  delay(shift_delay);}\n'
    +'for(int angle=90+shift; angle>90-shift; angle-=shift_inc) { pos[1] = angle;  move_servo(); delay(shift_delay); }\n'
    +'for(int angle=90-shift; angle<90; angle+=shift_inc) {pos[1] = angle;  move_servo();   delay(shift_delay); }\n';
		break;
	case 'HANDWAVE2':
		code += 'for(int angle=90; angle<90+shift; angle+=shift_inc){  pos[2] = angle;    move_servo();  delay(shift_delay);}\n'
     +'for(int angle=90+shift; angle>90-shift; angle-=shift_inc) { pos[2] = angle;  move_servo(); delay(shift_delay); }\n'
     +'for(int angle=90-shift; angle<90; angle+=shift_inc) {pos[2] = angle;  move_servo();   delay(shift_delay); }\n';
		break;
  }
  return code;
};

Blockly.Blocks['otto_arms_home'] = {init: function() {
  this.appendDummyInput("")  .appendField("🦾 "+Blockly.Msg.OTTO9_HOME_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_arms_home'] = function(block) {
var code = 'AL.write(90);\n'
+'AR.write(90);\n'
+'delay(shift_delay);';
return code;
};

Blockly.Blocks['otto_quad_configuration'] = {init: function() {
	var card=window.localStorage.card;
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/otto_quad.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT);
	this.appendDummyInput()
	.appendField("Front R Hip").setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "FRH");
	this.appendDummyInput()
	.appendField(Blockly.Msg.left) .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "FLH");
	this.appendDummyInput()
	.appendField(Blockly.Msg.OTTO9_CALIBRATION_LEG+Blockly.Msg.right).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "FRL");
	this.appendDummyInput()
	.appendField(Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "FLL");
	this.appendDummyInput()
	.appendField("Back R Hip").setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "BRH");
  this.appendDummyInput()
	.appendField(Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "BLH");
  this.appendDummyInput()
	.appendField(Blockly.Msg.OTTO9_CALIBRATION_LEG+Blockly.Msg.right).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "BRL");
  this.appendDummyInput()
	.appendField(Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "BLL");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_quad_configuration'] = function(block) {

  var FRH= block.getFieldValue('FRH');
  var FLH= block.getFieldValue('FLH');
  var FRL= block.getFieldValue('FRL');
  var FLL= block.getFieldValue('FLL');
  var BLH= block.getFieldValue('BLH');
  var BRH= block.getFieldValue('BRH');
  var BRL= block.getFieldValue('BRL');
  var BLL= block.getFieldValue('BLL');

  Blockly.Arduino.includes_['otto_lib'] = '#include <Quad.h>\n'
	+ 'Quad Quad;';

  Blockly.Arduino.definitions_['otto_legs'] = '#define FRH '+ FRH +' // FRONT_RIGHT_HIP pin, servo[0]\n'
 	+ '#define FLH '+ FLH +' // FRONT_LEFT_HIP pin, servo[1]\n'
	+ '#define FRL '+ FRL +' // FRONT_RIGHT_LEG pin, servo[2]\n'
  + '#define FLL '+ FLL +' // FRONT_LEFT_LEG pin, servo[3]\n'
  + '#define BLH '+ BLH +' // BACK_RIGHT_HIP pin, servo[4]\n'
  + '#define BRH '+ BRH +' // BACK_LEFT_HIP pin, servo[5]\n'
  + '#define BRL '+ BRL +' // BACK_RIGHT_LEG pin, servo[6]\n'
  + '#define BLL '+ BLL +' // BACK_LEFT_LEG pin, servo[7]\n'
  + 'void pause(int period) { long timeout = millis() + period;  do   {  Quad.refresh(); } \n'
  + ' while (millis() <= timeout); }';

  Blockly.Arduino.setups_['otto_init']='Quad.init(FRH, FLH, FRL, FLL, BLH, BRH, BRL, BLL);\n'
  + 'Quad.home();\n';
  var code = '';
  return code;
};

Blockly.Blocks['otto_quad_home'] = {init: function() {
  this.appendDummyInput("") .appendField("🕷️ " + Blockly.Msg.OTTO9_HOME_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_quad_home'] = function(block) {
var code = 'Quad.home();\n';
return code;
};

Blockly.Blocks['otto_quad_hello'] = {init: function() {
  this.appendDummyInput("") .appendField("🕷️ Hello");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_quad_hello'] = function(block) {
var code = 'Quad.hello();\n';
return code;
};

Blockly.Blocks['otto_quad_jump'] = {init: function() {
  this.appendDummyInput("") .appendField("🕷️ Jump");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_quad_jump'] = function(block) {
var code = 'Quad.jump();\n';
return code;
};

Blockly.Blocks['otto_quad_scared'] = {init: function() {
  this.appendDummyInput("") .appendField("🕷️ Scared");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_quad_scared'] = function(block) {
var code = 'Quad.scared();\n';
return code;
};

Blockly.Blocks['otto_quad_move'] = {init: function() {
  this.appendDummyInput()  .appendField("🕷️ " +Blockly.Msg.OTTO9_MOVE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto_quad_move'] = function(block) {
var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');

var code = '';
switch(dropdown_otto_move_sens) {
case 'FORWARD':
  code = 'Quad.walk(1,4,' + dropdown_otto_move_speed + '); // FORWARD\n';
  break;
case 'BACKWARD':
  code = 'Quad.walk(0,4,' + dropdown_otto_move_speed + '); // BACKWARD\n';
  break;
case 'LEFT':
  code = 'Quad.turnL(2,' + dropdown_otto_move_speed + '); // LEFT\n';
  break;
case 'RIGHT':
  code = 'Quad.turnR(2,' + dropdown_otto_move_speed + '); // RIGHT\n';
  break;
case 'BENDLEFT':
  code = 'Quad.pushUp(1,' + dropdown_otto_move_speed + ');\n';
  break;
case 'BENDRIGHT':
  code = 'Quad.frontBack(1,' + dropdown_otto_move_speed + ');\n';
  break;
case 'SHAKERIGHT':
  code = 'Quad.waveHAND(1,' + dropdown_otto_move_speed + ');\n';
  break;
case 'SHAKELEFT':
  code = 'Quad.dance(1,' + dropdown_otto_move_speed + ');\n';
  break;
  case 'jump':
  code = 'Quad.upDown(1,' + dropdown_otto_move_speed + ');\n';
  break;
}
return code;
};

Blockly.Blocks['otto_ninja_init'] = {init: function() {
	var card=window.localStorage.card;
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/otto_ninja.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT)
	.appendField(Blockly.Msg.OTTO9_CALIBRATION_LEG+Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_LL")
	.appendField(Blockly.Msg.right) .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RL")
	.appendField(Blockly.Msg.OTTO9_CALIBRATION_FOOT+Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_LF")
	.appendField(Blockly.Msg.right).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RF");
  this.appendDummyInput()
	.appendField(Blockly.Msg.OTTO9_ARMS_TEXT+Blockly.Msg.left).setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_LA")
	.appendField(Blockly.Msg.right) .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RA")
	.appendField('Head').setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_H");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_ninja_init'] = function(block) {

  var PIN_LL= block.getFieldValue('PIN_LL');
  var PIN_RL= block.getFieldValue('PIN_RL');
  var PIN_LF= block.getFieldValue('PIN_LF');
  var PIN_RF= block.getFieldValue('PIN_RF');
  var PIN_LA= block.getFieldValue('PIN_LA');
  var PIN_RA= block.getFieldValue('PIN_RA');
  var PIN_H= block.getFieldValue('PIN_H');

  Blockly.Arduino.includes_['otto_lib'] = '#include <Servo.h>\n';

  Blockly.Arduino.definitions_['otto_legs'] =
      'const uint8_t ServoLeftLegPin ='+ PIN_LL +'; // D8 or 15 \n'
 	  + 'const uint8_t ServoRightLegPin='+ PIN_RL +'; // D4 or 2 \n'
	  + 'const uint8_t ServoLeftFootPin  ='+ PIN_LF +'; // D7 or 13 \n'
    + 'const uint8_t ServoRightFootPin ='+ PIN_RF +'; // D3 or 0 \n'
    + 'const uint8_t ServoLeftArmPin ='+ PIN_LA +'; // D0 or 16 \n'
    + 'const uint8_t ServoRightArmPin ='+ PIN_RA +'; // RX or 3 \n'
    + 'const uint8_t ServoHeadPin   ='+ PIN_H +'; // TX or 1 \n'
    + 'Servo myservoLeftLeg;\n'
    + 'Servo myservoLeftFoot;\n'
    + 'Servo myservoRightFoot;\n'
    + 'Servo myservoRightLeg;\n'
    + 'Servo myservoLeftArm;\n'
    + 'Servo myservoRightArm;\n'
    + 'Servo myservoHead;\n'
    ;
  var code = '';
  return code;
};

Blockly.Blocks['otto_ninja_calibration']={init:function(){

  this.appendValueInput("LA0") .setCheck("Number").appendField("🐱‍👤 "+ Blockly.Msg.OTTO9_CALIBRATION +"°"+ " LLS").setAlign(Blockly.ALIGN_RIGHT)
  this.appendValueInput("RA0") .setCheck("Number").appendField("RLS").setAlign(Blockly.ALIGN_RIGHT)
  this.appendValueInput("LATL") .setCheck("Number").appendField("LLL").setAlign(Blockly.ALIGN_RIGHT)
  this.appendValueInput("RATL") .setCheck("Number").appendField("RLL").setAlign(Blockly.ALIGN_RIGHT)
  this.appendValueInput("LATR") .setCheck("Number").appendField("LLR").setAlign(Blockly.ALIGN_RIGHT)
  this.appendValueInput("RATR") .setCheck("Number").appendField("RLR").setAlign(Blockly.ALIGN_RIGHT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setTooltip("Ninja Leg servo calibration.            "
    +"LLS: Left Leg standing position (0 default += adjust tilt left -= adjust tilt right)"
    +"RLS: Right Leg standing position (0 default += adjust tilt left -= adjust tilt right)"
    +"LLL: Left Leg tilt left position (40 default += adjust tilt left -= adjust tilt right)"
    +"RLL: Right Leg tilt left position (60 default += adjust tilt left -= adjust tilt right)"
    +"LLR: Left Leg tilt right position (60 default += adjust tilt left -= adjust tilt right)"
    +"RLR: Right Leg tilt right position (40 default += adjust tilt left -= adjust tilt right)"
    );
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
  };

  Blockly.Arduino['otto_ninja_calibration']=function(block){
  var valuela= Blockly.Arduino.valueToCode(block, 'LA0', Blockly.Arduino.ORDER_ATOMIC);
  var valuera= Blockly.Arduino.valueToCode(block, 'RA0', Blockly.Arduino.ORDER_ATOMIC);
  var valuerlatl= Blockly.Arduino.valueToCode(block, 'LATL', Blockly.Arduino.ORDER_ATOMIC);
  var valuerratl= Blockly.Arduino.valueToCode(block, 'RATL', Blockly.Arduino.ORDER_ATOMIC);
  var valuerlatr= Blockly.Arduino.valueToCode(block, 'LATR', Blockly.Arduino.ORDER_ATOMIC);
  var valuerratr= Blockly.Arduino.valueToCode(block, 'RATR', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['ninja_calibration'] =
 'int LA0= 60 +'+ valuela +'; // Left Leg standing Position; 0 = Full Tilt Right   180 = Full Tilt Left    Default = 60\n'
     + 'int RA0= 120 +'+ valuera +';// Right Leg standing position; 0 = Full Tilt Right   180 = Full Tilt Left    Default = 120 \n'
     + 'int LA1= 180; // Left Leg roll Position; 0 = Full Tilt Right   180 = Full Tilt Left    Default = 170\n'
     + 'int RA1= 0;  // Right Leg roll position,0 = Full Tilt Right   180 = Full Tilt Left     Default = 10\n'
     + 'int LATL= LA0 +'+ valuerlatl +';  // Left Leg tilt left walking position,0 = Full Tilt Right   180 = Full Tilt Left    Default = 90  \n'
     + 'int RATL= RA0 +'+ valuerratl +';  // Right Leg tilt left walking position,0 = Full Tilt Right   180 = Full Tilt Left    Default = 180   \n'
     + 'int LATR= LA0 -'+ valuerlatr +';  // Left Leg tilt right walking position,0 = Full Tilt Right   180 = Full Tilt Left     Default = 0   \n'
     + 'int RATR= RA0 -'+ valuerratr +';  // Right Leg tilt right walking position,0 = Full Tilt Right   180 = Full Tilt Left     Default = 90  \n'
      ;
      var code = '';
      return code;
  };

  Blockly.Blocks['otto_ninja_speed']={init:function(){

    this.appendValueInput("LFFWRS") .setCheck("Number") .appendField("🐱‍👤 "+ Blockly.Msg.OTTO9_CALIBRATION + Blockly.Msg.OTTO9_MOVE_SPEED_TEXT+"  FL").setAlign(Blockly.ALIGN_RIGHT)
    this.appendValueInput("RFFWRS") .setCheck("Number").appendField("FR") .setAlign(Blockly.ALIGN_RIGHT)
    this.appendValueInput("LFBWRS") .setCheck("Number").appendField("BL").setAlign(Blockly.ALIGN_RIGHT)
    this.appendValueInput("RFBWRS") .setCheck("Number").appendField("BR").setAlign(Blockly.ALIGN_RIGHT)
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour("#4759F5");
      this.setTooltip("FL= Formward Left"
      +"FR= Formward Right"
      +"BL= Backward Left"
      +"BR= Backward Right"
      );
      this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
    };

    Blockly.Arduino['otto_ninja_speed']=function(block){
    var valuellf= Blockly.Arduino.valueToCode(block, 'LFFWRS', Blockly.Arduino.ORDER_ATOMIC);
    var valuerff= Blockly.Arduino.valueToCode(block, 'RFFWRS', Blockly.Arduino.ORDER_ATOMIC);
    var valuelfb= Blockly.Arduino.valueToCode(block, 'LFBWRS', Blockly.Arduino.ORDER_ATOMIC);
    var valuerfb= Blockly.Arduino.valueToCode(block, 'RFBWRS', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['otto_ninja_speed'] =
         'int LFFWRS='+ valuellf +'; // Left foot forward walking rotation Speed; 0 = Slowest  90 = Fastest    Default = 20\n'
       + 'int RFFWRS='+ valuerff +' ; // Right foot forward walking rotation Speed; 0 = Slowest  90 = Fastest    Default = 20\n'
       + 'int LFBWRS= '+ valuelfb +'; // Left foot Backward walking rotation Speed; 0 = Slowest  90 = Fastest    Default = 20\n'
       + 'int RFBWRS= '+ valuerfb +'; // Right foot Backward walking rotation Speed; 0 = Slowest  90 = Fastest    Default = 20\n'
        ;
        var code = '';
        return code;
    };


Blockly.Blocks['otto_ninja_home'] = {init: function() {
  this.appendDummyInput("") .appendField("🐱‍👤 " + Blockly.Msg.OTTO9_HOME_TEXT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto_ninja_home'] = function(block) {
  Blockly.Arduino.definitions_['ninja_home'] =   'void NinjaHome()\n'
  +'{ \n'
  +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);\n'
  +'myservoRightFoot.attach(ServoRightFootPin, 544, 2400); \n'
  +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400); \n'
  +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400); \n'
  +'myservoHead.attach(ServoHeadPin, 544, 2400); \n'
  +'myservoLeftArm.write(180); \n'
  +'myservoRightArm.write(0);\n'
  +'myservoHead.write(90); \n'
  +'delay(400); \n'
  +'myservoLeftFoot.write(90); \n'
  +'myservoRightFoot.write(90);  \n'
  +'myservoLeftLeg.write(60); \n'
  +'myservoRightLeg.write(120); \n'
  +'delay(400);\n'
  +'myservoLeftLeg.detach();\n'
  +'myservoRightLeg.detach();\n'
  +'myservoLeftArm.detach();\n'
  +'myservoRightArm.detach();\n'
  +'myservoHead.detach();\n'
  +'}';
var code = 'NinjaHome();\n';
return code;
};

Blockly.Blocks['otto_ninja_setwalk']={init:function(){
  this.appendDummyInput()
      .appendField("🐱‍👤 Walk mode");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_setwalk'] = function(block) {
  Blockly.Arduino.definitions_['ninja_setwalk'] =
  'void NinjaSetWalk()\n'
    +' {\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    +'  myservoRightArm.attach(ServoRightArmPin, 544, 2400); \n'
    +'  myservoLeftArm.write(90);   \n'
    +'  myservoRightArm.write(90);  \n'
    +' delay(200);\n'
    +' myservoLeftArm.detach();\n'
    +' myservoRightArm.detach();\n'
    +' myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    + 'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    + 'myservoLeftLeg.write(LA0);\n'
    + 'myservoRightLeg.write(RA0); \n'
    +' delay(300);\n'
    +' myservoLeftLeg.detach(); \n'
    +'myservoRightLeg.detach();\n'
    +' myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    + 'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
    +' myservoLeftArm.write(180); \n'
    +'myservoRightArm.write(0); \n'
    +' delay(300);\n'
    +' myservoLeftArm.detach(); \n'
    +'myservoRightArm.detach();\n'
    +'}  \n'
  ;
var code = 'NinjaSetWalk();\n';
return code;
};

Blockly.Blocks['otto_ninja_setroll']={init:function(){
  this.appendDummyInput()
      .appendField("🐱‍👤 Roll mode");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_setroll'] = function(block) {
  Blockly.Arduino.definitions_['ninja_setroll'] =
  'void NinjaSetRoll()\n'
  +' {myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
  + 'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
  + 'myservoLeftArm.write(90);myservoRightArm.write(90); \n'
  +' delay(200);\n'
  +' myservoLeftArm.detach();myservoRightArm.detach();\n'
  + 'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
  + 'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);   \n'
  +'myservoLeftLeg.write(LA1); \n'
  +'myservoRightLeg.write(RA1);\n'
  +' delay(300);\n'
  +' myservoLeftLeg.detach();myservoRightLeg.detach();\n'
  +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
  +'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
  +' myservoLeftArm.write(180);myservoRightArm.write(0);\n'
  +' delay(300);\n'
  +' myservoLeftArm.detach();myservoRightArm.detach();}\n'
  ;
var code = 'NinjaSetRoll();\n';
return code;
};

Blockly.Blocks['otto_ninja_walkstop']={init:function(){
  this.appendDummyInput() .appendField("🐱‍👤 Walk 🛑 Stop");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_walkstop'] = function(block) {
  Blockly.Arduino.definitions_['ninja_walkstop'] =
  'void NinjaWalkStop()\n'
  + '{myservoLeftFoot.write(90);\n'
  +' myservoRightFoot.write(90); \n'
  +' myservoLeftLeg.write(LA0); \n'
  +' myservoRightLeg.write(RA0);}\n'
  ;
var code = 'NinjaWalkStop();\n';
return code;
};

Blockly.Blocks['otto_ninja_rollstop']={init:function(){
  this.appendDummyInput() .appendField("🐱‍👤 Roll 🛑 Stop");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_rollstop'] = function(block) {
  Blockly.Arduino.definitions_['ninja_rollstop'] =
  'void NinjaRollStop()\n'
  +'{myservoLeftFoot.write(90);\n'
  +'myservoRightFoot.write(90); \n'
  +'myservoLeftFoot.detach(); \n'
  +'myservoRightFoot.detach();} \n'
  ;
var code = 'NinjaRollStop();\n';
return code;
};

Blockly.Blocks['otto_ninja_walk']={init:function(){
  this.appendDummyInput()
      .appendField("🐱‍👤Walk")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AV, "F"], [Blockly.Msg.AR , "B"], [Blockly.Msg.right, "R"], [Blockly.Msg.left, "L"]]), "Walk")
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_walk'] = function(block) {
  var Walk = block.getFieldValue('Walk');
  Blockly.Arduino.definitions_['ninja_walk'] = 'void NinjaWalkForward()\n'
  + '{\n'
  +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
  +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
  +'myservoLeftLeg.write(LATR); \n'
  +'myservoRightLeg.write(RATR);\n'
  +' delay(300);\n'
  +' myservoRightFoot.attach(ServoRightFootPin, 544, 2400);  \n'
  +'myservoRightFoot.write(90-RFFWRS); \n'
  +' delay(300);\n'
  +' myservoRightFoot.detach();\n'
  +' delay(100);\n'
  +'myservoLeftLeg.write(LATL); \n'
  +'myservoRightLeg.write(RATL); \n'
  +' delay(300);\n'
  +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400); \n'
  +'myservoLeftFoot.write(90+LFFWRS);  \n'
  +' delay(300);\n'
  +' myservoLeftFoot.detach();\n'
  +' delay(100);\n'
  +'} \n'
  + 'void NinjaWalkBackward()\n'
  + '{\n'
  +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
  +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
  +'myservoLeftLeg.write(LATR); \n'
  +'myservoRightLeg.write(RATR);\n'
  +' delay(300);\n'
  +' myservoRightFoot.attach(ServoRightFootPin, 544, 2400); \n'
  +' myservoRightFoot.write(90+RFFWRS); \n'
  +' delay(300);\n'
  +' myservoRightFoot.detach();\n'
  +' delay(100);\n'
  +'myservoLeftLeg.write(LATL); \n'
  +'myservoRightLeg.write(RATL); \n'
  +' delay(300);\n'
  +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400); \n'
  +'myservoLeftFoot.write(90-LFFWRS);  \n'
  +' delay(300);\n'
  +' myservoLeftFoot.detach();\n'
  +' delay(100);\n'
  +'} \n'
  + 'void NinjaWalkLeft()\n'
  + '{\n'
  +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
  +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
  +'myservoLeftLeg.write(LATR); \n'
  +'myservoRightLeg.write(RATR);\n'
  +' delay(300);\n'
  +' myservoRightFoot.attach(ServoRightFootPin, 544, 2400); \n'
  +' myservoRightFoot.write(90-RFFWRS); \n'
  +' delay(50);\n'
  +' myservoRightFoot.detach();\n'
  +' delay(100);\n'
  +'myservoLeftLeg.write(LATL); \n'
  +'myservoRightLeg.write(RATL); \n'
  +' delay(300);\n'
  +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400); \n'
  +'myservoLeftFoot.write(90+LFFWRS);  \n'
  +' delay(300);\n'
  +' myservoLeftFoot.detach();\n'
  +' delay(100);\n'
  +'} \n'
  + 'void NinjaWalkRight()\n'
  + '{\n'
  +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
  +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
  +'myservoLeftLeg.write(LATR); \n'
  +'myservoRightLeg.write(RATR);\n'
  +' delay(300);\n'
  +' myservoRightFoot.attach(ServoRightFootPin, 544, 2400);  \n'
  +'myservoRightFoot.write(90-RFFWRS); \n'
  +' delay(300);\n'
  +' myservoRightFoot.detach();\n'
  +' delay(100);\n'
  +'myservoLeftLeg.write(LATL); \n'
  +'myservoRightLeg.write(RATL); \n'
  +' delay(300);\n'
  +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400); \n'
  +'myservoLeftFoot.write(90+LFFWRS);  \n'
  +' delay(50);\n'
  +' myservoLeftFoot.detach();\n'
  +' delay(100);\n'
  +'} ';
  var code = '';
  switch(Walk) {
  case 'F':
    code = 'NinjaWalkForward(); \n';
    break;
  case 'B':
    code = 'NinjaWalkBackward(); \n';
    break;
  case 'L':
    code = 'NinjaWalkLeft(); \n';
    break;
  case 'R':
    code = 'NinjaWalkRight();\n';
    break;
  }
  return code;
  };

Blockly.Blocks['otto_ninja_roll']={init:function(){
  this.appendDummyInput()
      .appendField("🐱‍👤 Roll")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AV, "F"], [Blockly.Msg.AR , "B"], [Blockly.Msg.right, "R"], [Blockly.Msg.left, "L"]]), "Roll")
  this.appendValueInput("SPEED", 'Number')
      .appendField("with power (1-100)%") // add Blockly message
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setHelpUrl('https://www.ottodiy.com/ninja')}
};

Blockly.Arduino['otto_ninja_roll'] = function(block) {
  var Roll = block.getFieldValue('Roll');
  Blockly.Arduino.definitions_['ninja_roll'] = [
    'void NinjaRollForward(int speed)',
    '{',
    '  myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);',
    '  myservoRightFoot.attach(ServoRightFootPin, 544, 2400);',
    '  myservoLeftFoot.write(90 + speed);',
    '  myservoRightFoot.write(90 - speed);',
    '}',
    'void NinjaRollBackward(int speed)',
    '{',
    '  myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);',
    '  myservoRightFoot.attach(ServoRightFootPin, 544, 2400);',
    '  myservoLeftFoot.write(90 - speed);',
    '  myservoRightFoot.write(90 + speed);',
    '}',
    'void NinjaRollLeft(int speed)',
    '{',
    '  myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);',
    '  myservoRightFoot.attach(ServoRightFootPin, 544, 2400);',
    '  myservoLeftFoot.write(90 - speed);',
    '  myservoRightFoot.write(90 - speed);',
    '}',
    'void NinjaRollRight(int speed)',
    '{',
    '  myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);',
    '  myservoRightFoot.attach(ServoRightFootPin, 544, 2400);',
    '  myservoLeftFoot.write(90 + speed);',
    '  myservoRightFoot.write(90 + speed);',
    '}'
  ].join('\n');

  var speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '100';
  speed = 'map(' + speed + ', 0, 100, 0, 90)';
  var code = '';
  switch(Roll) {
  case 'F':
    code = 'NinjaRollForward(' + speed + ');\n';
    break;
  case 'B':
    code = 'NinjaRollBackward(' + speed + ');\n';
    break;
  case 'L':
    code = 'NinjaRollLeft(' + speed + ');\n';
    break;
  case 'R':
    code = 'NinjaRollRight(' + speed + ');\n';
    break;
  }
  return code;
};

  Blockly.Blocks['otto_ninja_wifi'] = {
    init: function() {
    this.setColour("#4759F5");
    this.appendDummyInput()
     .appendField(new Blockly.FieldImage("media/wifi.png",22,22))
     .appendField(Blockly.Msg.WIFI_ssid)
     .appendField(new Blockly.FieldTextInput("MyOttoNinja"), "SSID").setAlign(Blockly.ALIGN_RIGHT);
     this.appendDummyInput().appendField(Blockly.Msg.WIFI_password)
     .appendField(new Blockly.FieldTextInput("12345678"), "PASSWORD").setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init Wifi for Otto Ninja App');
    this.setHelpUrl('');
   }
  };

  Blockly.Arduino['otto_ninja_wifi'] = function(block) {
    var ssid = block.getFieldValue('SSID');
    var wifipassword = block.getFieldValue('PASSWORD');

   Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n'
   +'#define REMOTEXY_SERVER_PORT 6377 \n';
   Blockly.Arduino.definitions_['define_wifi_ninja'] =
   '#define REMOTEXY_WIFI_SSID "'+ssid+'"\n'+
   '#define REMOTEXY_WIFI_PASSWORD "'+wifipassword+'"\n';
   var code = '';
    return code;
  };

  Blockly.Blocks['otto_ninja_app'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/wifi.png', 22, 22, "*"))   .appendField('🐱‍👤 WiFi App code');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setTooltip('Use alone with wifi, pins and calibration blocks');
    this.setHelpUrl('https://www.ottodiy.com/ninja');
  }
  };
  Blockly.Arduino['otto_ninja_app'] = function(block) {
    Blockly.Arduino.includes_['otto_ninja_app'] =
     '#define REMOTEXY_MODE__ESP8266WIFI_LIB_POINT\n'
    +'#include <RemoteXY.h>\n'
    +'#include <Wire.h>\n'
    +'#include <Adafruit_GFX.h>\n'
    +'#include "Adafruit_LEDBackpack.h"\n'
    +'#pragma pack(push, 1) \n'
    +'uint8_t RemoteXY_CONF[] ={ 255,6,0,0,0,66,0,13,8,0,5,32,3,12,41,41,1,26,31,1,3,79,16,16,12,1,31,82,240,159,166,190,0,1,3,56,39,18,12,1,31,240,159,146,191,0,1,3,79,39,17,12,1,31,240,159,166,191,0,1,3,56,16,17,12,1,31,76,240,159,166,190,0 }; \n'
    +'struct {\n'
    +'int8_t J_x; // =-100..100 x-coordinate joystick position  \n'
    +'int8_t J_y; // =-100..100 y-coordinate joystick position  \n'
    +'uint8_t button_B; // =1 if button pressed, else =0  \n'
    +'uint8_t button_X; // =1 if button pressed, else =0  \n'
    +'uint8_t button_Y; // =1 if button pressed, else =0  \n'
    +'uint8_t button_A; // =1 if button pressed, else =0  \n'
    +'uint8_t connect_flag;  // =1 if wire connected, else =0  \n'
    +'} RemoteXY; \n'
    +'#pragma pack(pop) \n'
    ;
    Blockly.Arduino.variables_['otto_ninja_app'] =
    'int currentmillis1 = 0;\n'
    +'int currentmillis2 = 0; \n'
    +'int currentmillis3 = 0;\n'
    +'int ModeCounter = 0;\n'
    Blockly.Arduino.definitions_['otto_ninja_app'] =
    'void NinjaStop()\n'
    +' {\n'
    +'myservoLeftFoot.detach();\n'
    +' myservoRightFoot.detach();  \n'
    +' myservoLeftLeg.detach();\n'
    +' myservoRightLeg.detach();\n'
    +'}\n'
    +'void NinjaSetWalk()\n'
    +' {\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    +'  myservoRightArm.attach(ServoRightArmPin, 544, 2400); \n'
    +'  myservoLeftArm.write(90);   \n'
    +'  myservoRightArm.write(90);  \n'
    +' delay(200);\n'
    +' myservoLeftArm.detach();\n'
    +' myservoRightArm.detach();\n'
    +' myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    + 'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    + 'myservoLeftLeg.write(LA0);\n'
    + 'myservoRightLeg.write(RA0); \n'
    +' delay(300);\n'
    +' myservoLeftLeg.detach(); \n'
    +' myservoRightLeg.detach();\n'
    +' myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    + 'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
    +' myservoLeftArm.write(180); \n'
    +' myservoRightArm.write(0); \n'
    +' delay(300);\n'
    +' myservoLeftArm.detach(); \n'
    +' myservoRightArm.detach();\n'
    +'}  \n'
    +'void NinjaSetRoll()\n'
    +' {\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    + 'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
    + 'myservoLeftArm.write(90);\n'
    +'myservoRightArm.write(90); \n'
    +' delay(200);\n'
    +' myservoLeftArm.detach();\n'
    +'myservoRightArm.detach();\n'
    + 'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    + 'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    +'myservoLeftLeg.write(LA1); \n'
    +'myservoRightLeg.write(RA1);\n'
    +' delay(300);\n'
    +' myservoLeftLeg.detach();\n'
    +'myservoRightLeg.detach();\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    +'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
    +' myservoLeftArm.write(180);\n'
    +' myservoRightArm.write(0);\n'
    +' delay(300);\n'
    +' myservoLeftArm.detach();\n'
    +' myservoRightArm.detach();\n'
    +'}\n'
    +'void NinjaWalkStop()\n'
    +'{\n'
    +'myservoLeftFoot.write(90);\n'
    +' myservoRightFoot.write(90); \n'
    +' myservoLeftLeg.write(LA0); \n'
    +' myservoRightLeg.write(RA0);}\n'
    +'void NinjaRollStop()\n'
    +' {\n'
    +'myservoLeftFoot.write(90);\n'
    +' myservoRightFoot.write(90); \n'
    +' myservoLeftFoot.detach(); \n'
    +' myservoRightFoot.detach();\n'
    +'} \n'
    +'void NinjaLeftArm()\n'
    +'{\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400); \n'
      +'myservoLeftArm.write(90);\n'
      +'} \n'
    +'void NinjaRightArm()\n'
    +'{\n'
    +'myservoRightArm.attach(ServoRightArmPin, 544, 2400); \n'
      +'myservoRightArm.write(90);\n'
      +'}\n'
    +'void NinjaLeftArmDown()\n'
    +'{\n'
    +'myservoLeftArm.write(180);\n'
    +'} \n'
    +'void NinjaRightArmDown()\n'
    +'{\n'
    +'myservoRightArm.write(0);\n'
    +'} \n'
    ;
    Blockly.Arduino.setups_['otto_ninja_app']=
     'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);\n'
    +'myservoRightFoot.attach(ServoRightFootPin, 544, 2400);  \n'
    +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    +'myservoLeftArm.attach(ServoLeftArmPin, 544, 2400);\n'
    +'myservoRightArm.attach(ServoRightArmPin, 544, 2400);\n'
    +'myservoHead.attach(ServoHeadPin, 544, 2400);\n'
    +'myservoHead.write(90);   \n'
    +'myservoLeftArm.write(90);    \n'
    +'myservoRightArm.write(90);     \n'
    +'delay(300);  \n'
    +'myservoLeftFoot.write(90);   \n'
    +'myservoRightFoot.write(90);        \n'
    +'myservoLeftLeg.write(60);   \n'
    +'myservoRightLeg.write(120);     \n'
    +'delay(300);     \n'
    +'myservoLeftArm.write(180);\n'
    +'myservoRightArm.write(0); \n'
    +'delay(500);\n'
    +'myservoLeftFoot.detach();\n'
    +'myservoRightFoot.detach();  \n'
    +'myservoLeftLeg.detach();\n'
    +'myservoRightLeg.detach();\n'
    +'myservoLeftArm.detach();\n'
    +'myservoRightArm.detach();\n'
    +'myservoHead.detach();\n'
    +'RemoteXY_Init ();\n'
    var code =
    'RemoteXY_Handler (); \n'
    +'if (RemoteXY.button_X == HIGH){NinjaSetRoll(); ModeCounter = 1;} \n'
    +'if (RemoteXY.button_Y == HIGH){NinjaSetWalk(); ModeCounter = 0;}\n'
    +'if (RemoteXY.button_A == HIGH){NinjaLeftArm();} \n'
    +'if (RemoteXY.button_A == LOW) {NinjaLeftArmDown();} \n'
    +'if (RemoteXY.button_B == HIGH){NinjaRightArm();} \n'
    +'if (RemoteXY.button_B == LOW) { NinjaRightArmDown();}\n'
    +'if (ModeCounter == 0) {   \n'
    +'if ((RemoteXY.J_x >= -10)&&(RemoteXY.J_x <= 10)&&(RemoteXY.J_y >= -10)&&(RemoteXY.J_y <= 10)) { NinjaWalkStop();  } \n'
    +'if (RemoteXY.J_y > 0)  {\n'
    +'int lt= map(RemoteXY.J_x, 100, -100, 200, 700); \n'
    +'int rt= map(RemoteXY.J_x, 100, -100, 700, 200); \n'
    +'int Interval1 = 250; \n'
    +'int Interval2 = 250 + rt; \n'
    +'int Interval3 = 250 + rt + 250;\n'
    +'int Interval4 = 250 + rt + 250 + lt; \n'
    +'int Interval5 = 250 + rt + 250 + lt + 50;\n'
    +'if(millis() > currentmillis1 + Interval5){ currentmillis1 = millis();} \n'
    +'if(millis() - currentmillis1 <= Interval1) {   \n'
    +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    +'myservoRightFoot.attach(ServoRightFootPin, 544, 2400);  \n'
    +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);  \n'
    +'myservoLeftLeg.write(LATR);  \n'
    +'myservoRightLeg.write(RATR);} \n'
    +'if((millis() - currentmillis1 >= Interval1)&&(millis() - currentmillis1 <= Interval2)){myservoRightFoot.write(90-RFFWRS);} \n'
    +'if((millis() - currentmillis1 >= Interval2)&&(millis() - currentmillis1 <= Interval3)){myservoRightFoot.detach();myservoLeftLeg.write(LATL); myservoRightLeg.write(RATL);}\n'
    +'if((millis() - currentmillis1 >= Interval3)&&(millis() - currentmillis1 <= Interval4)){myservoLeftFoot.write(90+LFFWRS);}   \n'
    +'if((millis() - currentmillis1 >= Interval4)&&(millis() - currentmillis1 <= Interval5)){myservoLeftFoot.detach();  }  }   \n'
    +'if (RemoteXY.J_y < 0){ \n'
    +'int lt= map(RemoteXY.J_x, 100, -100, 200, 700);  \n'
    +'int rt= map(RemoteXY.J_x, 100, -100, 700, 200);  \n'
    +'int Interval1 = 250; \n'
    +'int Interval2 = 250 + rt; \n'
    +'int Interval3 = 250 + rt + 250;\n'
    +'int Interval4 = 250 + rt + 250 + lt; \n'
    +'int Interval5 = 250 + rt + 250 + lt + 50;\n'
    +'if(millis() > currentmillis1 + Interval5){currentmillis1 = millis();}\n'
    +'if(millis() - currentmillis1 <= Interval1){   \n'
    +'myservoLeftLeg.attach(ServoLeftLegPin, 544, 2400);\n'
    +'myservoRightLeg.attach(ServoRightLegPin, 544, 2400);\n'
    +'myservoRightFoot.attach(ServoRightFootPin, 544, 2400);  \n'
    +'myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);  \n'
    +'myservoLeftLeg.write(LATR);  \n'
    +'myservoRightLeg.write(RATR);} \n'
    +'if((millis() - currentmillis1 >= Interval1)&&(millis() - currentmillis1 <= Interval2)){myservoRightFoot.write(90+RFBWRS);}\n'
    +'if((millis() - currentmillis1 >= Interval2)&&(millis() - currentmillis1 <= Interval3)){myservoRightFoot.detach();myservoLeftLeg.write(LATL); myservoRightLeg.write(RATL);}\n'
    +'if((millis() - currentmillis1 >= Interval3)&&(millis() - currentmillis1 <= Interval4)){myservoLeftFoot.write(90-LFFWRS);}   \n'
    +'if((millis() - currentmillis1 >= Interval4)&&(millis() - currentmillis1 <= Interval5)){myservoLeftFoot.detach();  }  }}   \n'
    +'if (ModeCounter == 1){   \n'
    +'if ((RemoteXY.J_x >= -10)&&(RemoteXY.J_x <= 10)&&(RemoteXY.J_y >= -10)&&(RemoteXY.J_y <= 10)){NinjaRollStop();} \n'
    +' else{myservoLeftFoot.attach(ServoLeftFootPin, 544, 2400);  myservoRightFoot.attach(ServoRightFootPin, 544, 2400); \n'
    +'int LWS= map(RemoteXY.J_y, 100, -100, 135,    45);  \n'
    +'int RWS= map(RemoteXY.J_y, 100, -100,  45,   135);  \n'
    +'int LWD= map(RemoteXY.J_x, 100, -100,  45,     0);  \n'
    +'int RWD= map(RemoteXY.J_x, 100, -100,   0,   -45); \n'
    +'myservoLeftFoot.write(LWS+LWD); \n'
    +'myservoRightFoot.write(RWS+RWD); }} \n'
    +' Serial.print("  X: ");   \n'
    +' Serial.print(RemoteXY.J_x);\n'
    +' Serial.print("  Y: ");  \n'
    +' Serial.print(RemoteXY.J_y);\n'
    +' Serial.print("  MC: ");   \n'
    +' Serial.println(ModeCounter); \n'
    return code;
  };

Blockly.Blocks['otto9_app'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/bt.png', 33, 33, "*"))   .appendField('App code');
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4759F5");
  this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};
Blockly.Arduino['otto9_app'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Servo.h>\n'
  + '#include <Oscillator.h>\n'
  + '#include <EEPROM.h>\n'
  +'#include <SerialCommand.h>\n'
  + 'SoftwareSerial BTserial = SoftwareSerial(11,12);\n'
 + 'SerialCommand SCmd(BTserial);\n'
+  '#include <Otto.h>\n'
+  'Otto Otto;  \n';
  Blockly.Arduino.variables_['otto9_var'] = 'const char programID[] = "Otto Bluetooth App Firmware";\n'
  +'const char name_fac = \'$\'; \n'
  +'const char name_fir = \'#\';\n'
  +'int T = 1000;  \n'
  +'int moveId = 0; \n'
 +'int moveSize = 15;\n'
 + 'volatile bool buttonPushed=false; \n'
 +'unsigned long previousMillis = 0;\n'
 + 'int randomDance = 0;\n'
 + 'int randomSteps = 0;\n'
+  'bool obstacleDetected = false;\n'
+  'unsigned long int matrix;\n'
+  'unsigned long timerMillis = 0;\n'
+'void receiveStop() { sendAck(); Otto.home(); sendFinalAck(); }\n'
+'void receiveLED() { sendAck(); Otto.home(); unsigned long int matrix; char *arg; char *endstr; arg = SCmd.next(); if (arg != NULL) { matrix = strtoul(arg, &endstr, 2); Otto.putMouth(matrix, false); } else { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } sendFinalAck(); }\n'
+'void recieveBuzzer() { sendAck(); Otto.home(); bool error = false; int frec; int duration; char *arg; arg = SCmd.next(); if (arg != NULL) frec = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) duration = atoi(arg); else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else Otto._tone(frec, duration, 1); sendFinalAck(); }\n'
+'void receiveTrims() { sendAck(); Otto.home(); int trim_YL, trim_YR, trim_RL, trim_RR; bool error = false; char *arg; arg = SCmd.next(); if (arg != NULL) trim_YL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_YR = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_RL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_RR = atoi(arg); else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else { Otto.setTrims(trim_YL, trim_YR, trim_RL, trim_RR); Otto.saveTrimsOnEEPROM(); } sendFinalAck(); }\n'
+'void receiveServo() { sendAck(); moveId = 30; bool error = false; char *arg; int servo_YL, servo_YR, servo_RL, servo_RR; arg = SCmd.next(); if (arg != NULL) servo_YL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) servo_YR = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) servo_RL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) { servo_RR = atoi(arg); } else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else { int servoPos[4] = {servo_YL, servo_YR, servo_RL, servo_RR}; Otto._moveServos(200, servoPos); } sendFinalAck(); }\n'
+'void receiveMovement() { sendAck(); if (Otto.getRestState() == true) Otto.setRestState(false); char *arg; arg = SCmd.next(); if (arg != NULL) moveId = atoi(arg); else { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); moveId = 0; } arg = SCmd.next(); if (arg != NULL) T = atoi(arg); else T = 1000; arg = SCmd.next(); if (arg != NULL) moveSize = atoi(arg); else moveSize = 15; }\n'
+'void move(int moveId) { bool manualMode = false; switch (moveId) { case 0: Otto.home(); break; case 1: Otto.walk(1, T, 1); break; case 2: Otto.walk(1, T, -1); break; case 3: Otto.turn(1, T, 1); break; case 4: Otto.turn(1, T, -1); break; case 5: Otto.updown(1, T, moveSize); break; case 6: Otto.moonwalker(1, T, moveSize, 1); break; case 7: Otto.moonwalker(1, T, moveSize, -1); break; case 8: Otto.swing(1, T, moveSize); break; case 9: Otto.crusaito(1, T, moveSize, 1); break; case 10: Otto.crusaito(1, T, moveSize, -1); break; case 11: Otto.jump(1, T); break; case 12: Otto.flapping(1, T, moveSize, 1); break; case 13: Otto.flapping(1, T, moveSize, -1); break; case 14: Otto.tiptoeSwing(1, T, moveSize); break; case 15: Otto.bend(1, T, 1); break; case 16: Otto.bend(1, T, -1); break; case 17: Otto.shakeLeg(1, T, 1); break; case 18: Otto.shakeLeg(1, T, -1); break; case 19: Otto.jitter(1, T, moveSize); break; case 20: Otto.ascendingTurn(1, T, moveSize); break; default: manualMode = true; break; } if (!manualMode) sendFinalAck(); } \n'
+'void receiveGesture() { sendAck(); Otto.home();  int gesture = 0; char *arg; arg = SCmd.next(); if (arg != NULL) gesture = atoi(arg); else     delay(2000); switch (gesture) { case 1: Otto.playGesture(OttoHappy); break; case 2: Otto.playGesture(OttoSuperHappy); break; case 3: Otto.playGesture(OttoSad); break; case 4: Otto.playGesture(OttoSleeping); break; case 5: Otto.playGesture(OttoFart); break; case 6: Otto.playGesture(OttoConfused); break; case 7: Otto.playGesture(OttoLove); break; case 8: Otto.playGesture(OttoAngry); break; case 9: Otto.playGesture(OttoFretful); break; case 10: Otto.playGesture(OttoMagic); break; case 11: Otto.playGesture(OttoWave); break; case 12: Otto.playGesture(OttoVictory); break; case 13: Otto.playGesture(OttoFail); break; default: break; } sendFinalAck(); }\n'
+'void receiveSing() { sendAck(); Otto.home(); int sing = 0; char *arg; arg = SCmd.next(); if (arg != NULL) sing = atoi(arg); else     delay(2000); switch (sing) { case 1: Otto.sing(S_connection); break; case 2: Otto.sing(S_disconnection); break; case 3: Otto.sing(S_surprise); break; case 4: Otto.sing(S_OhOoh); break; case 5: Otto.sing(S_OhOoh2); break; case 6: Otto.sing(S_cuddly); break; case 7: Otto.sing(S_sleeping); break; case 8: Otto.sing(S_happy); break; case 9: Otto.sing(S_superHappy); break; case 10: Otto.sing(S_happy_short); break; case 11: Otto.sing(S_sad); break; case 12: Otto.sing(S_confused); break; case 13: Otto.sing(S_fart1); break; case 14: Otto.sing(S_fart2); break; case 15: Otto.sing(S_fart3); break; case 16: Otto.sing(S_mode1); break; case 17: Otto.sing(S_mode2); break; case 18: Otto.sing(S_mode3); break; case 19: Otto.sing(S_buttonPushed); break; default: break; } sendFinalAck(); }\n'
+'void receiveName() { sendAck(); Otto.home(); char newOttoName[11] = ""; int eeAddress = 5; char *arg; arg = SCmd.next(); if (arg != NULL) { int k = 0; while ((*arg) && (k < 11)) { newOttoName[k] = *arg++; k++; } EEPROM.put(eeAddress, newOttoName); } else { delay(2000); } sendFinalAck(); }\n'
+'void requestName() { Otto.home(); char actualOttoName[11] = ""; int eeAddress = 5; EEPROM.get(eeAddress, actualOttoName); Serial.print(F("&&")); Serial.print(F("E ")); Serial.print(actualOttoName); Serial.println(F("%%")); Serial.flush(); }\n'
+'void requestProgramId() { Otto.home(); Serial.print(F("&&")); Serial.print(F("I ")); Serial.print(programID); Serial.println(F("%%")); Serial.flush(); }\n'
+'void sendAck() { delay(30); Serial.print(F("&&")); Serial.print(F("A")); Serial.println(F("%%")); Serial.flush(); }\n'
+'void sendFinalAck() { delay(30); Serial.print(F("&&")); Serial.print(F("F")); Serial.println(F("%%")); Serial.flush(); }\n'
+'void ButtonPushed(){ if(!buttonPushed){ buttonPushed=true; Otto.putMouth(smallSurprise); } } \n'

Blockly.Arduino.definitions_['otto9_legs'] = '#define N_SERVOS 4\n'
  + '#define LeftLeg 2 \n'
	+ '#define RightLeg 3 \n'
	+ '#define LeftFoot 4 \n'
  + '#define RightFoot 5 \n'
  +'#define Buzzer  13 \n'
 +'#define DIN_PIN    A3 \n'
  +'#define CS_PIN     A2 \n'
  +'#define CLK_PIN    A1 \n'
  +'#define LED_DIRECTION  1 \n'
  +'#define PIN_Button   A0 \n'
  +'#define PIN_ASSEMBLY    7\n'
  ;
  Blockly.Arduino.setups_['otto9_init']='Serial.begin(9600);\n'
  +'BTserial.begin(9600);\n'
 +'Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);\n'
  +'Otto.initMATRIX(DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n'
  +'Otto.matrixIntensity(1);\n'
  +'pinMode(PIN_ASSEMBLY, INPUT_PULLUP);\n'
  +'pinMode(PIN_Button, INPUT);\n'
  +'SCmd.addCommand("S", receiveStop);    \n'
  +'SCmd.addCommand("L", receiveLED);     \n'
  +'SCmd.addCommand("T", recieveBuzzer);    \n'
  +'SCmd.addCommand("M", receiveMovement);   \n'
  +'SCmd.addCommand("H", receiveGesture);    \n'
  +'SCmd.addCommand("K", receiveSing);       \n'
  +'SCmd.addCommand("C", receiveTrims);      \n'
  +'SCmd.addCommand("G", receiveServo);      \n'
  +'SCmd.addCommand("R", receiveName);       \n'
  +'SCmd.addCommand("E", requestName);\n'
  +'SCmd.addCommand("I", requestProgramId);\n'
  +'SCmd.addDefaultHandler(receiveStop);\n'
  +'Otto.sing(S_connection);\n'
  +'Otto.home();\n'

  +'for (int i = 0; i < 2; i++) {\n'
  +'for (int i = 0; i < 8; i++) {\n'
      +'Otto.putAnimationMouth(littleUuh, i);\n'
      +'delay(150);\n'
    +'}\n'
  +'}\n'
  +'//Smile for a happy Otto :)\n'
  +'Otto.putMouth(smile);\n'
  +'Otto.sing(S_happy);\n'
  +'delay(200);\n'
  +'if (EEPROM.read(5) == name_fir) {\n'
    +'Otto.jump(1, 700);\n'
    +'delay(200);\n'
    +'Otto.shakeLeg(1, T, 1);\n'
    +'Otto.putMouth(smallSurprise);\n'
    +'Otto.swing(2, 800, 20);\n'
    +'Otto.home();\n'
  +'}\n'
  +'Otto.putMouth(happyOpen);\n'
  +'previousMillis = millis();\n'
 +'while (digitalRead(PIN_ASSEMBLY) == LOW) {\n'
    +'Otto.home();\n'
    +'Otto.sing(S_happy_short);   // sing every 5 seconds so we know OTTO is still working\n'
    +'delay(5000);}\n'

  var code = 'SCmd.readSerial();     if (Otto.getRestState()==false){ move(moveId); }  \n'
  return code;
};

Blockly.Blocks['otto9_smooth'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/smooth.png', 33, 33, "*"))   .appendField('Dance smooth criminal');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Arduino['otto9_smooth'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Servo.h>\n'
  + '#include <Oscillator.h>\n'
  + '#include <EEPROM.h>\n'
  + '#define N_SERVOS 4';
  Blockly.Arduino.variables_['otto9_var'] = 'void goingUp(int tempo);\n'
  + 'void drunk (int tempo);\n'
  + 'void noGravity(int tempo);\n'
  + 'void kickLeft(int tempo);\n'
  + 'void kickRight(int tempo);\n'
  + 'void run(int steps, int T=500);\n'
  + 'void walk(int steps, int T=1000);\n'
  + 'void backyard(int steps, int T=3000);\n'
  + 'void backyardSlow(int steps, int T=5000);\n'
  + 'void turnLeft(int steps, int T=3000);\n'
  + 'void turnRight(int steps, int T=3000);\n'
  + 'void moonWalkLeft(int steps, int T=1000);\n'
  + 'void moonWalkRight(int steps, int T=1000);\n'
  + 'void crusaito(int steps, int T=1000);\n'
  + 'void swing(int steps, int T=1000);\n'
  + 'void upDown(int steps, int T=1000);\n'
  + 'void flapping(int steps, int T=1000);\n'
  + 'int t=495; // TEMPO: 121 BPM\n'
  + 'double pause=0;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define N_SERVOS 4\n'
  + '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define INTERVALTIME 10.0\n'
  + 'Oscillator servo[N_SERVOS];';
  Blockly.Arduino.setups_['otto9_init']='  servo[0].attach(PIN_RR);\n'
  + 'servo[1].attach(PIN_RL);\n'
  + 'servo[2].attach(PIN_YR);\n'
  + 'servo[3].attach(PIN_YL);\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);\n'
  var code = 'dance();}\n'
  + 'void dance(){ primera_parte(); segunda_parte(); moonWalkLeft(4,t*2); moonWalkRight(4,t*2); moonWalkLeft(4,t*2); moonWalkRight(4,t*2); primera_parte();  crusaito(1,t*8); crusaito(1,t*7);\n'
  + 'for (int i=0; i<16; i++){   flapping(1,t/4);   delay(3*t/4); }  moonWalkRight(4,t*2); moonWalkLeft(4,t*2);  moonWalkRight(4,t*2);  moonWalkLeft(4,t*2);  drunk(t*4);drunk(t*4);  drunk(t*4);  drunk(t*4);\n'
  + 'kickLeft(t);  kickRight(t);  drunk(t*8);  drunk(t*4);drunk(t/2);  delay(t*4);   drunk(t/2);  delay(t*4);   walk(2,t*2);  backyard(2,t*2);  goingUp(t*2);  goingUp(t*1);  noGravity(t*2); crusaito(1,t*2);  crusaito(1,t*8); crusaito(1,t*2); crusaito(1,t*8); crusaito(1,t*2); crusaito(1,t*3);\n'
  + 'delay(t);  primera_parte();    for (int i=0; i<32; i++){   flapping(1,t/2);  delay(t/2); }   for(int i=0;i<4;i++) servo[i].SetPosition(90);} \n'
  + 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){  for (int i=0; i<4; i++) {   servo[i].SetO(O[i]); servo[i].SetA(A[i]); servo[i].SetT(T); servo[i].SetPh(phase_diff[i]); }  double ref=millis(); for (double x=ref; x<T+ref; x=millis()){ for (int i=0; i<4; i++){ servo[i].refresh(); }}}\n'
  + 'unsigned long final_time; unsigned long interval_time;int oneTime;int iteration;float increment[N_SERVOS];  int oldPosition[]={90,90,90,90}; \n'
  + 'void moveNServos(int time, int  newPosition[]){\n'
  + 'for(int i=0;i<N_SERVOS;i++)	increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);  final_time =  millis() + time;  iteration = 1; \n'
  + 'while(millis() < final_time){ interval_time = millis()+INTERVALTIME;   oneTime=0;      while(millis()<interval_time){	 if(oneTime<1){ for(int i=0;i<N_SERVOS;i++){  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i])); }	iteration++;oneTime++; } } }  \n'
  + 'for(int i=0;i<N_SERVOS;i++){	 oldPosition[i] = newPosition[i]; }   }\n'
  + 'void goingUp(int tempo){\n'
  + 'pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90);\n'
  + 'delay(tempo);servo[0].SetPosition(80);servo[1].SetPosition(100);delay(tempo);servo[0].SetPosition(70); servo[1].SetPosition(110); delay(tempo); servo[0].SetPosition(60); servo[1].SetPosition(120); delay(tempo); servo[0].SetPosition(50); servo[1].SetPosition(130); delay(tempo); servo[0].SetPosition(40); servo[1].SetPosition(140); delay(tempo); servo[0].SetPosition(30); servo[1].SetPosition(150);delay(tempo); servo[0].SetPosition(20); servo[1].SetPosition(160); delay(tempo); while(millis()<pause+8*t);}\n'
  + 'void primera_parte(){\n'
  + 'int move1[4] = {60,120,90,90}; int move2[4] = {90,90,90,90}; int move3[4] = {40,140,90,90}; for(int x=0; x<3; x++){ for(int i=0; i<3; i++){  lateral_fuerte(1,t/2);  lateral_fuerte(0,t/4); lateral_fuerte(1,t/4);  delay(t);  } pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90); moveNServos(t*0.4,move1); moveNServos(t*0.4,move2); while(millis()<(pause+t*2)); }for(int i=0; i<2; i++){ lateral_fuerte(1,t/2); lateral_fuerte(0,t/4); lateral_fuerte(1,t/4); delay(t); } pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90);crusaito(1,t*1.4); moveNServos(t*1,move3); for(int i=0;i<4;i++) servo[i].SetPosition(90); while(millis()<(pause+t*4)); }\n'
  + 'void segunda_parte(){\n'
  + 'int move1[4] = {90,90,80,100};int move2[4] = {90,90,100,80};int move3[4] = {90,90,80,100};int move4[4] = {90,90,100,80};   int move5[4] = {40,140,80,100};int move6[4] = {40,140,100,80};int move7[4] = {90,90,80,100};int move8[4] = {90,90,100,80}; int move9[4] = {40,140,80,100}; int move10[4] = {40,140,100,80}; int move11[4] = {90,90,80,100};int move12[4] = {90,90,100,80};\n'
  + 'for(int x=0; x<7; x++){ for(int i=0; i<3; i++){ pause=millis(); moveNServos(t*0.15,move1); moveNServos(t*0.15,move2); moveNServos(t*0.15,move3); moveNServos(t*0.15,move4);  while(millis()<(pause+t)); }pause=millis(); moveNServos(t*0.15,move5); moveNServos(t*0.15,move6); moveNServos(t*0.15,move7); moveNServos(t*0.15,move8);  while(millis()<(pause+t));  }\n'
  + 'for(int i=0; i<3; i++){ pause=millis();moveNServos(t*0.15,move9);moveNServos(t*0.15,move10);moveNServos(t*0.15,move11); moveNServos(t*0.15,move12);while(millis()<(pause+t));}}\n'
  + 'void lateral_fuerte(boolean side, int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);if (side) servo[0].SetPosition(40);else servo[1].SetPosition(140);delay(tempo/2);servo[0].SetPosition(90);servo[1].SetPosition(90);delay(tempo/2);}\n'
  + 'void drunk (int tempo){\n'
  + 'pause=millis();int move1[] = {60,70,90,90};int move2[] = {110,120,90,90};int move3[] = {60,70,90,90};int move4[] = {110,120,90,90};moveNServos(tempo*0.235,move1);  moveNServos(tempo*0.235,move2);moveNServos(tempo*0.235,move3);moveNServos(tempo*0.235,move4);while(millis()<(pause+tempo));}\n'
  + 'void noGravity(int tempo){int move1[4] = {120,140,90,90};int move2[4] = {140,140,90,90};int move3[4] = {120,140,90,90};int move4[4] = {90,90,90,90};for(int i=0;i<4;i++) servo[i].SetPosition(90);for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;moveNServos(tempo*2,move1);moveNServos(tempo*2,move2);delay(tempo*2);moveNServos(tempo*2,move3);moveNServos(tempo*2,move4);}\n'
  + 'void kickLeft(int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);delay(tempo);servo[0].SetPosition(50); servo[1].SetPosition(70);delay(tempo);servo[0].SetPosition(80); servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(30); servo[1].SetPosition(70);delay(tempo/4);servo[0].SetPosition(80);servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(30); servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(80);servo[1].SetPosition(70); delay(tempo); }\n'
  + 'void kickRight(int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);delay(tempo);servo[0].SetPosition(110);servo[1].SetPosition(130); delay(tempo);servo[0].SetPosition(110); servo[1].SetPosition(100); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(150); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(80); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(150); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(100); delay(tempo);}\n'
  + 'void walk(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff); }\n'
  + 'void run(int steps, int T){int A[4]= {10, 10, 10, 10};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff); }\n'
  + 'void backyard(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void backyardSlow(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void turnLeft(int steps, int T){int A[4]= {20, 20, 10, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void turnRight(int steps, int T){int A[4]= {20, 20, 30, 10};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void moonWalkRight(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15 ,15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void moonWalkLeft(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void crusaito(int steps, int T){int A[4]= {25, 25, 30, 30};int O[4] = {- 15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void swing(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void upDown(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(180), DEG2RAD(0), DEG2RAD(270), DEG2RAD(270)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void flapping(int steps, int T){int A[4]= {15, 15, 8, 8};int O[4] = {-A[0], A[1], 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void test(int steps, int T){int A[4]= {15, 15, 8, 8};int O[4] = {-A[0] + 10, A[1] - 10, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n'
  return code;
};
