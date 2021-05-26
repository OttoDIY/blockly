'use strict';

goog.provide('Blockly.Blocks.otto_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');

Blockly.Blocks['otto9_configuration'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/otto_plus.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT);
  this.appendValueInput("PIN_YL") .setCheck("Number").appendField(Blockly.Msg.OTTO9_YL)
  this.appendValueInput("PIN_YR") .setCheck("Number").appendField(Blockly.Msg.OTTO9_YR)
  this.appendValueInput("PIN_RL") .setCheck("Number").appendField(Blockly.Msg.OTTO9_RL)
  this.appendValueInput("PIN_RR") .setCheck("Number").appendField(Blockly.Msg.OTTO9_RR)
  this.appendValueInput("PIN_Buzzer") .setCheck("Number").appendField(Blockly.Msg.OTTO9_BUZZER)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto9_configuration'] = function(block) {
  
  var PIN_YL= Blockly.Arduino.valueToCode(block, 'PIN_YL', Blockly.Arduino.ORDER_ATOMIC);
  var PIN_YR= Blockly.Arduino.valueToCode(block, 'PIN_YR', Blockly.Arduino.ORDER_ATOMIC);
  var PIN_RL= Blockly.Arduino.valueToCode(block, 'PIN_RL', Blockly.Arduino.ORDER_ATOMIC);
  var PIN_RR= Blockly.Arduino.valueToCode(block, 'PIN_RR', Blockly.Arduino.ORDER_ATOMIC);
  var PIN_Buzzer= Blockly.Arduino.valueToCode(block, 'PIN_Buzzer', Blockly.Arduino.ORDER_ATOMIC);
	
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';

  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL '+ PIN_YL +' // left leg, servo[0]\n'
 	+ '#define PIN_YR '+ PIN_YR +' // right leg, servo[1]\n'
	+ '#define PIN_RL '+ PIN_RL +' // left foot, servo[2]\n'
    + '#define PIN_RR '+ PIN_RR +' // right foot, servo[3]\n'
    + '#define PIN_Trigger 8 // ultrasound \n'
    + '#define PIN_Echo 9 // ultrasound \n'
    + '#define PIN_Buzzer '+ PIN_Buzzer +' //buzzer \n'; 
	
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true,  A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  
  var code = '';
  return code;
};

Blockly.Blocks['otto9_home'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/otto_plus.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto9_home'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.home();\n';
  return code;
};

Blockly.Python['otto9_home'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = "Otto.home()\n";
    return code;
};
Blockly.Blocks['otto9_calibration']={init:function(){
  this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_CALIBRATION + Blockly.Msg.OTTO9_CALIBRATION_LEG + Blockly.Msg.left)
  .appendField(new Blockly.FieldNumber("0"), "LL") .appendField(Blockly.Msg.right) .appendField(new Blockly.FieldNumber("0"), "RL")
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_CALIBRATION_FOOT+  Blockly.Msg.left)
  .appendField(new Blockly.FieldNumber("0"), "LF")  .appendField(Blockly.Msg.right).appendField(new Blockly.FieldNumber("0"), "RF");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_calibration']=function(block){
  var valuell = block.getFieldValue('LL');
  var valuerl = block.getFieldValue('RL');
  var valuelf = block.getFieldValue('LF');
  var valuerf = block.getFieldValue('RF');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  Blockly.Arduino.setups_['otto9_cal']= 'Otto.setTrims('+ valuell +','+ valuerl +',' +valuelf +','+ valuerf+');';
  var code = '//calibrated\n';
  return code;
};

Blockly.Python['otto9_calibration'] = function(block) {
    var valuell = block.getFieldValue('LL');
    var valuerl = block.getFieldValue('RL');
    var valuelf = block.getFieldValue('LF');
    var valuerf = block.getFieldValue('RF');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = 'Otto.setTrims('+ valuell +','+ valuerl +',' +valuelf +','+ valuerf+')\n';
    return code;
};

Blockly.Blocks['otto9_eeprom'] = {init: function() {
    this.appendDummyInput("")  .appendField(Blockly.Msg.OTTO9_EEPROM_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#ff6600");
    this.setTooltip(Blockly.Msg.OTTO9_EEPROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_eeprom'] = function(block) {
  Blockly.Arduino.setups_['otto9_eeprom']='Otto.saveTrimsOnEEPROM();';
  var code = '//calibration saved\n';
  return code;
};

Blockly.Python['otto9_eeprom'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    var code = 'Otto.saveTrimsOnEEPROM()\n';
    return code;
									  
};

Blockly.Blocks['otto9_move'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/otto_bend.png', 33, 33, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};


Blockly.Arduino['otto9_move'] = function(block) {
  var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = '';
  switch(dropdown_otto_move_sens) {
	case 'FORWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1); // FORWARD\n';
		break;
	case 'BACKWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1); // BACKWARD\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // LEFT\n';
		break;
	case 'RIGHT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // RIGHT\n';
		break;
	case 'BENDLEFT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'BENDRIGHT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',-1);\n';
		break;
	case 'SHAKERIGHT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'SHAKELEFT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',-1);\n';
    break;
    case 'jump':
		code = 'Otto.jump(1,' + dropdown_otto_move_speed + ');\n';
		break;
  }
  return code;
};

Blockly.Python['otto9_move'] = function(block) {
    var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
    var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = '';
    switch(dropdown_otto_move_sens) {
        case 'FORWARD':
            code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1) # FORWARD\n';
            break;
        case 'BACKWARD':
            code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1) # BACKWARD\n';
            break;
        case 'LEFT':
            code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1) # LEFT\n';
            break;
        case 'RIGHT':
            code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1) # RIGHT\n';
            break;
        case 'BENDLEFT':
            code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',1)\n';
            break;
        case 'BENDRIGHT':
            code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',-1)\n';
            break;
        case 'SHAKERIGHT':
            code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',1)\n';
            break;
        case 'SHAKELEFT':
            code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',-1)\n';
            break;
        case 'jump':
            code = 'Otto.jump(1,' + dropdown_otto_move_speed + ')\n';
            break;
    }
    return code;
};												

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/otto_moonwalk.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Arduino['otto9_dance'] = function(block) {
  var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = '';
  switch(dropdown_otto_dance_movement) {
    case 'moonwalkerLEFT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'moonwalkerRIGHT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'crusaitoLEFT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'crusaitoRIGHT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'flappingFRONT':
      code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'flappingBACK':
      code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    }
  return code;
};

	Blockly.Python['otto9_dance'] = function(block) {
    var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
    var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
    var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = '';
    switch(dropdown_otto_dance_movement) {
        case 'moonwalkerLEFT':
            code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
            break;
        case 'moonwalkerRIGHT':
            code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
            break;
        case 'crusaitoLEFT':
            code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
            break;
        case 'crusaitoRIGHT':
            code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
            break;
        case 'flappingFRONT':
            code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
            break;
        case 'flappingBACK':
            code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
            break;
    }
    return code;
};


Blockly.Blocks['otto9_do'] = {init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_do.png', 33, 33, "*"))
        .appendField(Blockly.Msg.OTTO9_DO_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Arduino['otto9_do'] = function(block) {
  var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ');\n';
  return code;
};

Blockly.Python['otto9_do'] = function(block) {
    var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
    var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
    var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ')\n';
    return code;
};

Blockly.Blocks['otto9_gesture'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/otto_emoji.png', 22, 22, "*")).appendField(Blockly.Msg.OTTO9_GESTURE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Arduino['otto9_gesture'] = function(block) {
  var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.playGesture(' + dropdown_otto_gesture + ');\n';
  return code;
};

Blockly.Python['otto9_gesture'] = function(block) {
    var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
    Blockly.Python.definitions_['import_otto9'] = 'import otto9';
    Blockly.Python.definitions_['import_gestures'] = 'import gestures';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = 'Otto.playGesture(' + 'gestures.' + dropdown_otto_gesture.toUpperCase() + ')\n';
    return code;
};
Blockly.Blocks['otto9_sound'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/otto_music.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO9_SOUND_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a600d3");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Arduino['otto9_sound'] = function(block) {
  var dropdown_otto_sound = block.getFieldValue('otto_sound');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
  return code;
};

Blockly.Python['otto9_sound'] = function(block) {
    var dropdown_otto_sound = block.getFieldValue('otto_sound');
    Blockly.Python.definitions_['import_otto9'] = 'import otto9';
    Blockly.Python.definitions_['import_songs'] = 'import songs';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = 'Otto.sing(songs.' + dropdown_otto_sound.toUpperCase().substring(2) + ')\n';
    return code;
};
Blockly.Blocks['otto9_tone'] = {init: function() {
    this.appendDummyInput().appendField("🎼")
        .appendField(new Blockly.FieldDropdown([["C₄ | Do₄", "262"], ["D₄ | Re₄", "294"], ["E₄ | Mi₄", "330"], ["F₄ | Fa₄", "349"], ["G₄ | Sol₄", "392"], ["A₄ | La₄", "440"], ["B₄ | Si₄", "494"], ["C₅ | Do₅", "523"], ["D₅ | Re₅", "587"] ,["E₅ | Mi₅", "659"], ["F₅ | Fa₅", "698"], ["G₅ | Sol₅", "784"], ["A₅ | La₅", "880"], ["B₅ | Si₅", "988"], ["C₆ | Do₆", "1047"], ["D₆ | Re₆", "1175"], ["E₆ | Mi₆", "1319"], ["F₆ | Fa₆", "1397"], ["G₆ | Sol₆", "1568"], ["A₆ | La₆", "1760"], ["B₆ | Si₆", "1976"]]), "otto_note");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" ")
        .appendField(new Blockly.FieldDropdown([["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]]), "otto_note_duration");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#a600d3");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};

Blockly.Arduino['otto9_tone'] = function(block) {
  var dropdown_otto_note = block.getFieldValue('otto_note');
  var dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = "Otto._tone( " + dropdown_otto_note + "," + dropdown_otto_note_duration + ",1);\n";
return code;				
};

Blockly.Python['otto9_tone'] = function(block) {
    var dropdown_otto_note = block.getFieldValue('otto_note');
    var dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9'] = 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
    var code = "Otto._tone(" + dropdown_otto_note + ", " + dropdown_otto_note_duration + ", 1)\n";
    return code;
};

Blockly.Blocks['otto9_tonehz'] = {init: function() {
  this.appendDummyInput() .appendField("🎼 Hz")
  this.appendValueInput("Hz1")
  this.appendValueInput("duration") .setCheck("Number").appendField("⏰");
  this.appendValueInput("silent") .setCheck("Number").appendField("🔇");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#a600d3");
  this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};

Blockly.Arduino['otto9_tonehz'] = function(block) {
  var Hz1 = Blockly.Arduino.valueToCode(block, 'Hz1', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
  var silent = Blockly.Arduino.valueToCode(block, 'silent', Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
+ 'Otto9 Otto;';
Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
+ '#define PIN_YR 3 // right leg, servo[1]\n'
+ '#define PIN_RL 4 // left foot, servo[2]\n'
+ '#define PIN_RR 5 // right foot, servo[3]\n'
+ '#define PIN_Trigger 8 // ultrasound \n'
+ '#define PIN_Echo 9 // ultrasound \n'
+ '#define PIN_Buzzer  13 //buzzer';
Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
var code = "Otto._tone( " + Hz1 + "," + duration + "," + silent + "); //(float noteFrequency, long noteDuration, int silentDuration)\n";
return code;				
};

Blockly.Blocks['otto9_bendtone'] = {init: function() {
  this.appendDummyInput() .appendField("🎼 Hz1")
  this.appendValueInput("Hz1")
  this.appendValueInput("Hz2") .appendField("Hz2");
  this.appendValueInput("prop") .setCheck("Number").appendField("P");
  this.appendValueInput("duration") .setCheck("Number").appendField("⏰");
  this.appendValueInput("silent") .setCheck("Number").appendField("🔇");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#a600d3");
  this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};

Blockly.Arduino['otto9_bendtone'] = function(block) {
  var Hz1 = Blockly.Arduino.valueToCode(block, 'Hz1', Blockly.Arduino.ORDER_ATOMIC);
  var Hz2 = Blockly.Arduino.valueToCode(block, 'Hz2', Blockly.Arduino.ORDER_ATOMIC);
  var prop = Blockly.Arduino.valueToCode(block, 'prop', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
  var silent = Blockly.Arduino.valueToCode(block, 'silent', Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
+ 'Otto9 Otto;';
Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
+ '#define PIN_YR 3 // right leg, servo[1]\n'
+ '#define PIN_RL 4 // left foot, servo[2]\n'
+ '#define PIN_RR 5 // right foot, servo[3]\n'
+ '#define PIN_Trigger 8 // ultrasound \n'
+ '#define PIN_Echo 9 // ultrasound \n'
+ '#define PIN_Buzzer  13 //buzzer';
Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
var code = "Otto.bendTones( " + Hz1 + "," + Hz2 + "," + prop + "," + duration + "," + silent + "); // (float initFrequency, float finalFrequency, float prop, long noteDuration, int silentDuration) \n";
return code;				
};

Blockly.Blocks['otto9_getdistance'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_ultrasound.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['otto9_getdistance'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib_dist'] = '#include <US.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8 // ultrasound \n'
	+ '#define PIN_Echo 9 // ultrasound';
  var code = 'Otto.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Python['otto9_getdistance'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    var code = 'Otto.getDistance()\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Blocks['otto9_obstacle'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_ultrasound.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETOBSTACLE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_OBSTACLE_CHOICE), "obstacle")
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_obstacle'] = function(block) {
  var dropdown_obstacle = block.getFieldValue('obstacle');
  Blockly.Arduino.includes_['otto9_lib_dist'] = '#include <US.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8 // ultrasound \n'
	+ '#define PIN_Echo 9 // ultrasound';
  var code = '(Otto.getDistance() <' + dropdown_obstacle+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Python['otto9_obstacle'] = function(block) {
    var dropdown_obstacle = block.getFieldValue('obstacle');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    var code = '(Otto.getDistance() < ' + dropdown_obstacle +')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};													
Blockly.Blocks['otto9_getnoise'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_noise.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETNOISE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_getnoise'] = function(block) {
  Blockly.Arduino.variables_['otto9_noise'] = 'bool estado = false;';
  Blockly.Arduino.definitions_['otto9_noise'] = '#define PIN_NoiseSensor A6';
  var code = 'Otto.getNoise()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Python['otto9_getnoise'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    var code = 'Otto.getNoise()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Blocks['otto9_touchbutton'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_touch.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_touchbutton'] = function(block) {
  Blockly.Arduino.variables_['otto9_touchbutton'] = 'volatile bool buttonPushed = false;';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Button A0';
  Blockly.Arduino.setups_['otto9_init']='pinMode(PIN_Button, INPUT);\n';
  var code = 'digitalRead(PIN_Button)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

	Blockly.Python['otto9_touchbutton'] = function(block) {
    Blockly.Python.definitions_['touch_pin'] = 'touch1 = TouchPad(Pin(14))'
    var code = 'touch1.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
												   
Blockly.Blocks['otto9_gyro'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_gyro.png', 28, 28, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#2a93e8");
    this.setTooltip("gyro read");
    this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
  }
};
Blockly.Arduino['otto9_gyro'] = function(block) {
  Blockly.Arduino.variables_['otto9_gyro'] = 'int16_t ax, ay, az; \n'
  +'int16_t gx, gy, gz;\n';
  Blockly.Arduino.includes_['otto9_gyro'] = '#include "Wire.h"\n'
  +'#include "I2Cdev.h"\n'
  +'#include "MPU6050.h"\n';
  Blockly.Arduino.definitions_['otto9_gyro'] = 'MPU6050 accelgyro;';
  Blockly.Arduino.setups_['otto9_gyro']=' Wire.begin();\n'
  +'Serial.begin(9600);    //  initialize serial communication\n'
  +'Serial.println("Initializing I2C devices...");\n'
  +'accelgyro.initialize();\n'
  +'Serial.println("Testing device connections...");\n'
  +'Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");\n';
  var code = 'accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);\n'
  +' //Serial.print("ax "); Serial.print(ax);Serial.print(" ay ");Serial.print(ay);Serial.print(" az ");Serial.print(az);Serial.print(" gx ");Serial.print(gx);Serial.print(" gy ");Serial.print(gy); Serial.print(" gz "); Serial.println(gz);\n';
  return code;
};

Blockly.Blocks['otto9_getg'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/sensor_gyro.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT2).appendField(new Blockly.FieldDropdown([["ax", "ax"], ["ay", "ay"], ["az", "az"], ["gx", "gx"], ["gy", "gy"], ["gz", "gz"]]), "otto_getg");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip("gyro read");
    this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
  }
};
Blockly.Arduino['otto9_getg'] = function(block) {
  var dropdown_otto_getg = block.getFieldValue('otto_getg');
  Blockly.Arduino.variables_['otto9_gyro'] = 'int16_t ax, ay, az; \n'
  +'int16_t gx, gy, gz;\n';
  Blockly.Arduino.includes_['otto9_gyro'] = '#include "Wire.h"\n'
  +'#include "I2Cdev.h"\n'
  +'#include "MPU6050.h"\n';
  Blockly.Arduino.definitions_['otto9_gyro'] = 'MPU6050 accelgyro;';
  Blockly.Arduino.setups_['otto9_gyro']=' Wire.begin();\n'
  +'Serial.begin(9600);    //  initialize serial communication\n'
  +'Serial.println("Initializing I2C devices...");\n'
  +'accelgyro.initialize();\n'
  +'Serial.println("Testing device connections...");\n'
  +'Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");\n';
  var code = dropdown_otto_getg;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

											  
Blockly.Blocks['otto9_eyes'] = { init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/eyes.png', 58, 33, "*"))
     .appendField(Blockly.Msg.OTTO9_EYES_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_EYES_CHOICE), "otto9_eyes_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_eyes'] = function(block) {
  var dropdown_otto9_eyes_choice = block.getFieldValue('otto9_eyes_choice');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.definitions_['otto9_eyes'] = 'static const uint8_t PROGMEM\n'
  +'logo_bmp[] = {  B01111110,B10000001,B10111001,B10101001,B10111001,B10010001,B10111001,B10010001,B10010001,B10111001,B10010001,B10111001,B10101001,B10111001,B10000001,B01111110},\n'
  +'happy_bmp[] = {  B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000,B00000000,B00111100,B00000010,B00000010,B00000010,B00000010,B00111100,B00000000},\n'
  +'eyes_bmp[] = {  B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000,B00000000,B00111100,B01000010,B01001010,B01000010,B01000010,B00111100,B00000000},\n'
  +'sad_bmp[] =  {  B00000000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00000000,B00000000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00000000},\n'
  +'xx_bmp[] =  {  B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00010100,B00001000,B00010100,B00100010,B00000000},\n'
  +'XX_bmp[] = {  B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001,B00000000,B00000000,B01000001,B00100010,B00010100,B00001000,B00010100,B00100010,B01000001},\n'
  +'angry_bmp[] = {  B00000000,B00011110,B00111100,B01111000,B01110000,B00100000,B00000000,B00000000,B00000000,B00000000,B00100000,B01110000,B01111000,B00111100,B00011110,B00000000},\n'
  +'angry2_bmp[] = {  B00000000,B00000010,B00000100,B00001000,B00010000,B00100000,B00000000,B00000000,B00000000,B00000000,B00100000,B00010000,B00001000,B00000100,B00000010,B00000000},\n'
  +'sleep_bmp[] = {  B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000,B00000000,B00000000,B00000000,B00100010,B00110010,B00101010,B00100110,B00100010,B00000000},\n'
  +'freetful_bmp[] = {  B00000000,B00100000,B00010000,B00001000,B00000100,B00000010,B00000000,B00000000,B00000000,B00000000,B00000010,B00000100,B00001000,B00010000,B00100000,B00000000},\n'
  +'love_bmp[] = {  B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000,B00000000,B00001100,B00011110,B00111100,B00111100,B00011110,B00001100,B00000000},\n'
  +'confused_bmp[] = {  B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000,B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000},\n'
  +'wave_bmp[] = {  B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000,B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000},\n'
  +'magic_bmp[] = {  B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000},\n'
  +'fail_bmp[] = {  B00000000,B00110000,B01111000,B01111000,B01111100,B00111100,B00001000,B00000000,B00000000,B00001000,B00111100,B01111100,B01111000,B01111000,B00110000,B00000000},\n'
  +'full_bmp[] =  {   B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111 };';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.clear();\n'
  +'ematrix.drawBitmap(0, 0, + '+ dropdown_otto9_eyes_choice + ' , 8, 16, LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyes_text'] = {init: function() {
    this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYESTEXT_TEXT)  .appendField(new Blockly.FieldTextInput('I am Otto'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};
Blockly.Arduino['otto9_eyes_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.setTextSize(1);\n'
  +'ematrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely\n'
  +'ematrix.setTextColor(LED_ON);\n'
  +'ematrix.setRotation(1);\n'
  +'for (int8_t x=2; x>=-88; x--) {\n'
  +'ematrix.clear();\n'
  +'ematrix.setCursor(x,0);\n'
  +'ematrix.print("' + text_input +'");\n'
  +'ematrix.writeDisplay();\n'
  +'delay(100);}\n'
  +'ematrix.setRotation(0);\n'
  return code;
};
Blockly.Blocks['otto9_eyes#'] = { init: function() {
    this.appendDummyInput()
    this.appendValueInput("eyes") .appendField(Blockly.Msg.OTTO9_EYES_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Arduino['otto9_eyes#'] = function(block) {
  var value_eyes = Blockly.Arduino.valueToCode(block, 'eyes', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.setTextSize(1);\n'
  +'ematrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely\n'
  +'ematrix.setTextColor(LED_ON);\n'
  +'ematrix.setRotation(1);\n'
  +'ematrix.clear();\n'
  +'ematrix.setCursor(0,0);\n'
  +'ematrix.print(' + value_eyes +');\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n'
  +'ematrix.setRotation(0);\n'
  return code;
};

Blockly.Blocks['otto9_eyesp']={ init:function(){
  this.appendDummyInput() .appendField("👀 . X")
  this.appendValueInput("X")  .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['otto9_eyesp'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.drawPixel('+ valuex +','+valuey+', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyesl']={ init:function(){
  this.appendDummyInput() .appendField("👀 _ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_eyesl'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.drawLine('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyesr']={ init:function(){
  this.appendDummyInput() .appendField("👀 🔲 X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['otto9_eyesr'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.drawRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyesf']={ init:function(){
  this.appendDummyInput() .appendField("👀 ⬛ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_eyesf'] = function(block) {
  var valuex1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var valuey1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var valuex2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
  var valuey2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code ='ematrix.fillRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyesc']={ init:function(){
  this.appendDummyInput()  .appendField("👀 ⚪ X") 
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['otto9_eyesc'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var valuer = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.drawCircle('+ valuex +','+valuey+','+ valuer +', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyescf']={ init:function(){
  this.appendDummyInput()  .appendField("👀 ⚫ X") 
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};
Blockly.Arduino['otto9_eyescf'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var valuer = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'ematrix.fillCircle('+ valuex +','+valuey+','+ valuer +', LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_eyes_clear'] = { init: function() {
    this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYES_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};
Blockly.Arduino['otto9_eyes_clear'] = function(block) {
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = ' ematrix.clear();\n';
  return code;
};

Blockly.Blocks['otto9_eyesm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('  ') .appendField('1') .appendField('  2').appendField('  3').appendField(' 4') .appendField(' 5')  .appendField('  6') .appendField(' 7')  .appendField(' 8')
        .appendField(' 9').appendField('10') .appendField('11') .appendField('12') .appendField('13') .appendField('14') .appendField('15') .appendField('16')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel7')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel15')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel23')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel31')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel39')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel47')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel55')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel63')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel71')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel79')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel87')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel95')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel103')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel111')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel119')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel127');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel6')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel22')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel30')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel38')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel46')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel54')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel62')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel70')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel78')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel86')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel94')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel102')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel110')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel118')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel126');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel5')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel13')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel21')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel29')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel37')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel45')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel53')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel61')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel69')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel77')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel85')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel93')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel101')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel109')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel117')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel125');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel4')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel12')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel20')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel36')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel44')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel52')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel60')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel68')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel76')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel84')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel92')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel100')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel108')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel116')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel124');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel11')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel27')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel35')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel43')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel51')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel59')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel67')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel75')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel83')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel91')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel99')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel107')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel115')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel123');
        this.appendDummyInput().appendField('6 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel2')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel10')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel34')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel42')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel50')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel58')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel66')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel74')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel82')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel90')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel98')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel106')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel114')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel122');
        this.appendDummyInput().appendField('7 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel17')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel33')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel41')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel49')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel57')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel65')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel73')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel81')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel89')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel97')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel105')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel113')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel121');
        this.appendDummyInput().appendField('8 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel0')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel8')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel16')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel32')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel40')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel48')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel56')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel64')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel72')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel80')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel88')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel96')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel104')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel112')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel120');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_eyesm'] = function(block) {
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix ematrix = Adafruit_8x16matrix();';
   Blockly.Arduino.setups_['otto9_eyes']='ematrix.begin(0x70);  // pass in the address';
  var code = 'static const uint8_t PROGMEM\n'
  +'eyesm_bmp[]  = {B';
  for (var i=0; i<8; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=8; i<16; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=16; i<24; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=24; i<32; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=32; i<40; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=40; i<48; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=48; i<56; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=56; i<64; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=64; i<72; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=72; i<80; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';}; 
  code += ',B'
  for (var i=80; i<88; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=88; i<96; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=96; i<104; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=104; i<112; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += ',B'
  for (var i=112; i<120; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE') code += '1';else code +='0';};
  code += ',B'
  for (var i=120; i<128; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')code += '1';else code +='0';};
  code += '};\n'
  +'ematrix.clear();\n'
  +'ematrix.drawBitmap(0, 0,eyesm_bmp, 8, 16, LED_ON);\n'
  +'ematrix.writeDisplay();\n'
  +'delay(10);\n';
  return code;
};

Blockly.Blocks['otto9_matrix'] = { init: function() {
    this.appendDummyInput() .appendField('  ') .appendField('1') .appendField('  2').appendField('  3') .appendField(' 4') .appendField(' 5') .appendField('  6')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel5');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel7')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel11');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel15')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel17');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel23');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel29');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_matrix'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);'
  var code = 'matrix = 0b';
  for (var i=0; i<30; i++) {
  if (this.getFieldValue('otto9_matrix_pixel' + i) == 'TRUE')
    code += '1';
    else code +='0';
  };
  code += ';\n'
  +'Otto.putMouth(matrix, false);\n';
  return code;
};

Blockly.Python['otto9_matrix'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var matrix = '0b';
    for (var i=0; i<30; i++) {
        if (this.getFieldValue('otto9_matrix_pixel' + i) == 'TRUE')
            matrix += '1';
        else matrix +='0';
    };
    var code = 'Otto.putMouth(' + matrix +', false)\n';
    return code;
};
											  
Blockly.Blocks["otto9_matrix8x8"] = {  init: function() {
  this.appendDummyInput().appendField('  ').appendField(' 0').appendField(' 1').appendField(' 2').appendField('  3').appendField('  4').appendField(' 5').appendField(' 6').appendField(' 7');
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput().appendField('0 ') 
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel0')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel8')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel16')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel24')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel32')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel40')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel48')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel56');
 this.appendDummyInput().appendField('1 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel1')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel9')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel17')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel25')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel33')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel41')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel49')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel57');
 this.appendDummyInput().appendField('2 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel2')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel10')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel18')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel26')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel34')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel42')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel50')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel58');
 this.appendDummyInput().appendField('3 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel3')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel11')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel19')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel27')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel35')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel43')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel51')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel59');
 this.appendDummyInput().appendField('4 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel4')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel12')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel20')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel28')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel36')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel44')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel52')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel60');
 this.appendDummyInput().appendField('5 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel5')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel13')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel21')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel29')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel37')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel45')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel53')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel61');
 this.appendDummyInput().appendField('6 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel6')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel14')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel22')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel30')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel38')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel46')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel54')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel62');
 this.appendDummyInput().appendField('7 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel7')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel15')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel23')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel31')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel39')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel47')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel55')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel63');
 this.setInputsInline(false);
 this.setPreviousStatement(true, null);
 this.setNextStatement(true, null);
 this.setColour("#4b009f");
 this.setTooltip('');
 this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
},
};
Blockly.Arduino.otto9_matrix8x8 = function() {
Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);'
var code = '';
for (var i=0; i<64; i++) {

 if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
     var on = this.getFieldValue('Pixel' + i)== "TRUE"? "1" : "0";
     var row= i +1 
     {if  (i >= 0 && i <= 7)row=0}{if  (i >= 8 && i < 16)row=1}{if  (i >= 16 && i < 24)row=2}{if  (i >= 24 && i < 32)row=3}
     {if  (i >= 32 && i < 40)row=4}{if  (i >= 40 && i < 48)row=5}{if  (i >= 48 && i < 56)row=6}{if  (i >= 56 && i < 64)row=7}
     var col= i  
     {if  (i > 1 && i <= 7)col=i}{if  (i >= 8 && i < 16)col=i-8}{if  (i >= 16 && i < 24)col=i-16}{if  (i >= 24 && i < 32)col=i-24}
     {if  (i >= 32 && i < 40)col=i-32}{if  (i >= 40 && i < 48)col=i-40}{if  (i >= 48 && i < 56)col=i-48}{if  (i >= 56 && i < 64)col=i-56}
     code += ' Otto.setLed('+row+','+col+',' + on + ');'
 }
};
for (var i=0; i<8; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')row = 0;};
return code;
};

	Blockly.Python['otto9_matrix8x8'] = function() {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = '';
    for (var i = 0; i < 64; i++) {

        if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
            var on = this.getFieldValue('Pixel' + i) == "TRUE" ? "1" : "0";
            var row = Math.floor(i / 8);
            var col = i % 8;
            code += 'Otto.setLed(' + row + ',' + col + ',' + on + ')\n'
        }
    }
    return code;
};
 
Blockly.Blocks['otto9_mouth'] = {  init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/matrix.png', 33, 33, "*"))
        .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_mouth'] = function(block) {
  var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.putMouth(' + dropdown_otto9_mouth_choice + ');\n';
  return code;
};

	Blockly.Python['otto9_mouth'] = function(block) {
    var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.putMouth(mouths.' + dropdown_otto9_mouth_choice.toUpperCase() + ')\n';
    return code;
};
							 
Blockly.Blocks['otto9_mouth#']={ init:function(){
  this.appendDummyInput()
  this.appendValueInput("mouth") .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};

Blockly.Arduino['otto9_mouth#'] = function(block) {
  var valuemouth = Blockly.Arduino.valueToCode(block, 'mouth', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'itoa('+valuemouth+', data, 10);// convert integer into a string so we can display this on the matrix\n'
  + 'Otto.clearMouth();\n'
  + 'Otto.writeText (data,50); // show the data with a fast scroll \n'
  + 'delay(50);';
  return code;
};
	Blockly.Python['otto9_mouth#'] = function(block) {
    var valuemouth = Blockly.Python.valueToCode(block, 'mouth', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n'
        + 'Otto.writeText(str('+valuemouth+'), 50) # show the data with a fast scroll \n'
        + 'delay(50)\n';
    return code;
};
											 
Blockly.Blocks['otto9_matrixp']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput() .appendField("👅 . X");
  this.appendValueInput("X") .setCheck("Number");
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_matrixp'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);'
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'Otto.setLed('+valuex+','+valuey+','+draw+');\n';
  return code;
};

	Blockly.Python['otto9_matrixp'] = function(block) {
    var valuex = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var valuey = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.setLed('+valuex+','+valuey+',1)\n';
    return code;
};
						   

Blockly.Blocks['otto9_matrix_text'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT).appendField(new Blockly.FieldTextInput('I AM OTTO'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_matrix_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.writeText ( '+ '"' + text_input +'"' +',80); // limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n';
  return code;
};

	Blockly.Python['otto9_matrix_text'] = function(block) {
    var text_input = block.getFieldValue('input');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n'
    + 'Otto.writeText('+ '"' + text_input +'"' +',100) # limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n';
    return code;
};
						   
Blockly.Blocks["otto9_matrix_brightness"]={init:function(){
    this.appendValueInput("brightness").setCheck("Number") .appendField(Blockly.Msg.matrice+" intensity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["otto9_matrix_brightness"]=function(block){
	var brightness=Blockly.Arduino.valueToCode(block, "brightness");
    return "Otto.matrixIntensity(" + brightness + ");//the brightness of the display. (0 to 15)\n"
};

	Blockly.Python["otto9_matrix_brightness"]=function(block){
    var brightness=Blockly.Python.valueToCode(block, "brightness");
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    return "Otto.matrixIntensity(" + brightness + ") #the brightness of the display. (0 to 15)\n"
};							
Blockly.Blocks['otto9_clear'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_CLEAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_clear'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.clearMouth();\n';
  return code;
};

	Blockly.Python['otto9_clear'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n';
    return code;
};
								
Blockly.Blocks['otto9_arms'] = { init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/humanoid_arms.png', 33, 33, "*"))  
    .appendField(Blockly.Msg.OTTO9_ARMS_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), "otto9_arms_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_ARMS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_arms'] = function(block) {
  var dropdown_otto9_arms_choice = block.getFieldValue('otto9_arms_choice');
  Blockly.Arduino.includes_['otto9_arms'] = '#include <Servo.h>\n'
	+ 'Servo AL, AR;';
  Blockly.Arduino.variables_['otto9_arms'] = 'int adj[]={ 0, 0, 0, 0 };\n'
  +'int pos[]={ 90,90,90,90 }; \n'
  +'int shift = 60; \n'
  +'int shift_inc = 10;  \n'
  +'int shift_delay = 50;  \n'
;
  Blockly.Arduino.definitions_['otto9_arms'] = '#define PIN_AL 6 // left arm\n'
  +'#define PIN_AR 7 // right arm \n'
  +'void move_servo(){ AL.write(pos[1]+adj[1]); AR.write(pos[2]+adj[2]);}';
  Blockly.Arduino.setups_['otto9_arms']='AL.attach(PIN_AR);\n'
  +'AR.attach(PIN_AL);\n'
  +'move_servo();\n'
  +'delay(1000);';
  var code = '';
  switch(dropdown_otto9_arms_choice) {
	case 'HANDSUP':
    code += 'AL.write(160);\n'
    +'AR.write(20);\n'
    +'delay(500);';
    break;
  case 'HANDSDOWN':
    code += 'AL.write(20);\n'
    +'AR.write(160);\n'
    +'delay(500);';
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

Blockly.Python['otto9_arms'] = function(block) {
    var dropdown_otto9_arms_choice = block.getFieldValue('otto9_arms_choice');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_otto9h'] = 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
    var code = 'Otto.';
    switch(dropdown_otto9_arms_choice) {
        case 'HANDSUP':
            code += 'handsup()\n';
            break;
        case 'HANDWAVE1':
            code += 'handwave(1)\n';
            break;
        case 'HANDWAVE2':
            code += 'handwave(-1)\n';
            break;
    }
    return code;
};

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author Sébastien Canet
 */
'use strict';

Blockly.Blocks['otto9_app'] = {init: function() {
  this.appendDummyInput("") .appendField(new Blockly.FieldImage('media/bt.png', 33, 33, "*"))   .appendField('App code');
  this.setInputsInline(false);
  this.setColour("#32D900");
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
+  '#include <Otto9.h>\n'
+  'Otto9 Otto;  \n';
  Blockly.Arduino.variables_['otto9_var'] = 'const char programID[] = "OttoPLUS_V9";\n'
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
+  'double batteryCHECK = 0;\n'
+  'unsigned long int matrix;\n'
+  'unsigned long timerMillis = 0;\n'
+'void obstacleDetector() { int distance = Otto.getDistance(); if (distance < 15) obstacleDetected = true; else obstacleDetected = false; } \n'
+'void receiveStop() { sendAck(); Otto.home(); sendFinalAck(); }\n'
+'void receiveLED() { sendAck(); Otto.home(); unsigned long int matrix; char *arg; char *endstr; arg = SCmd.next(); if (arg != NULL) { matrix = strtoul(arg, &endstr, 2); Otto.putMouth(matrix, false); } else { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } sendFinalAck(); }\n'
+'void recieveBuzzer() { sendAck(); Otto.home(); bool error = false; int frec; int duration; char *arg; arg = SCmd.next(); if (arg != NULL) frec = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) duration = atoi(arg); else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else Otto._tone(frec, duration, 1); sendFinalAck(); }\n'
+'void receiveTrims() { sendAck(); Otto.home(); int trim_YL, trim_YR, trim_RL, trim_RR; bool error = false; char *arg; arg = SCmd.next(); if (arg != NULL) trim_YL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_YR = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_RL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) trim_RR = atoi(arg); else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else { Otto.setTrims(trim_YL, trim_YR, trim_RL, trim_RR); Otto.saveTrimsOnEEPROM(); } sendFinalAck(); }\n'
+'void receiveServo() { sendAck(); moveId = 30; bool error = false; char *arg; int servo_YL, servo_YR, servo_RL, servo_RR; arg = SCmd.next(); if (arg != NULL) servo_YL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) servo_YR = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) servo_RL = atoi(arg); else error = true; arg = SCmd.next(); if (arg != NULL) { servo_RR = atoi(arg); } else error = true; if (error == true) { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); } else { int servoPos[4] = {servo_YL, servo_YR, servo_RL, servo_RR}; Otto._moveServos(200, servoPos); } sendFinalAck(); }\n'
+'void receiveMovement() { sendAck(); if (Otto.getRestState() == true) Otto.setRestState(false); char *arg; arg = SCmd.next(); if (arg != NULL) moveId = atoi(arg); else { Otto.putMouth(xMouth); delay(2000); Otto.clearMouth(); moveId = 0; } arg = SCmd.next(); if (arg != NULL) T = atoi(arg); else T = 1000; arg = SCmd.next(); if (arg != NULL) moveSize = atoi(arg); else moveSize = 15; }\n'
+'void move(int moveId) { bool manualMode = false; switch (moveId) { case 0: Otto.home(); break; case 1: Otto.walk(1, T, 1); break; case 2: Otto.walk(1, T, -1); break; case 3: Otto.turn(1, T, 1); break; case 4: Otto.turn(1, T, -1); break; case 5: Otto.updown(1, T, moveSize); break; case 6: Otto.moonwalker(1, T, moveSize, 1); break; case 7: Otto.moonwalker(1, T, moveSize, -1); break; case 8: Otto.swing(1, T, moveSize); break; case 9: Otto.crusaito(1, T, moveSize, 1); break; case 10: Otto.crusaito(1, T, moveSize, -1); break; case 11: Otto.jump(1, T); break; case 12: Otto.flapping(1, T, moveSize, 1); break; case 13: Otto.flapping(1, T, moveSize, -1); break; case 14: Otto.tiptoeSwing(1, T, moveSize); break; case 15: Otto.bend(1, T, 1); break; case 16: Otto.bend(1, T, -1); break; case 17: Otto.shakeLeg(1, T, 1); break; case 18: Otto.shakeLeg(1, T, -1); break; case 19: Otto.jitter(1, T, moveSize); break; case 20: Otto.ascendingTurn(1, T, moveSize); break; default: manualMode = true; break; } if (!manualMode) sendFinalAck(); } \n'
+'void receiveGesture() { sendAck(); Otto.home();  int gesture = 0; char *arg; arg = SCmd.next(); if (arg != NULL) gesture = atoi(arg); else     delay(2000); switch (gesture) { case 1: Otto.playGesture(OttoHappy); break; case 2: Otto.playGesture(OttoSuperHappy); break; case 3: Otto.playGesture(OttoSad); break; case 4: Otto.playGesture(OttoSleeping); break; case 5: Otto.playGesture(OttoFart); break; case 6: Otto.playGesture(OttoConfused); break; case 7: Otto.playGesture(OttoLove); break; case 8: Otto.playGesture(OttoAngry); break; case 9: Otto.playGesture(OttoFretful); break; case 10: Otto.playGesture(OttoMagic); break; case 11: Otto.playGesture(OttoWave); break; case 12: Otto.playGesture(OttoVictory); break; case 13: Otto.playGesture(OttoFail); break; default: break; } sendFinalAck(); }\n'
+'void receiveSing() { sendAck(); Otto.home(); int sing = 0; char *arg; arg = SCmd.next(); if (arg != NULL) sing = atoi(arg); else     delay(2000); switch (sing) { case 1: Otto.sing(S_connection); break; case 2: Otto.sing(S_disconnection); break; case 3: Otto.sing(S_surprise); break; case 4: Otto.sing(S_OhOoh); break; case 5: Otto.sing(S_OhOoh2); break; case 6: Otto.sing(S_cuddly); break; case 7: Otto.sing(S_sleeping); break; case 8: Otto.sing(S_happy); break; case 9: Otto.sing(S_superHappy); break; case 10: Otto.sing(S_happy_short); break; case 11: Otto.sing(S_sad); break; case 12: Otto.sing(S_confused); break; case 13: Otto.sing(S_fart1); break; case 14: Otto.sing(S_fart2); break; case 15: Otto.sing(S_fart3); break; case 16: Otto.sing(S_mode1); break; case 17: Otto.sing(S_mode2); break; case 18: Otto.sing(S_mode3); break; case 19: Otto.sing(S_buttonPushed); break; default: break; } sendFinalAck(); }\n'
+'void receiveMode() { sendAck(); Otto.home(); int modeId = 0; char *arg; arg = SCmd.next(); if (arg != NULL) modeId = atoi(arg); else     delay(2000); switch (modeId) { case 0: Otto.putMouth(0); Otto.sing(S_cuddly); Otto.home(); break; case 1: Otto.putMouth(one); randomDance = random(5, 21); if ((randomDance > 14) && (randomDance < 19)) { randomSteps = 1; T = 1600; } else { randomSteps = random(3, 6); T = 1000; } Otto.putMouth(random(10, 21)); for (int i = 0; i < randomSteps; i++) move(randomDance); break; case 2: Otto.putMouth(two); break; case 3: Otto.putMouth(three); break; case 4: Otto.putMouth(four); if (Otto.getBatteryLevel() < 35) { Otto.putMouth(thunder); Otto.bendTones (880, 2000, 1.04, 8, 3); delay(30); Otto.bendTones (2000, 880, 1.02, 8, 3); delay(30); Otto.bendTones (880, 2000, 1.04, 8, 3); delay(30); Otto.bendTones (2000, 880, 1.02, 8, 3); Otto.clearMouth(); matrix = 0b00001100010010010010010010011110; Otto.putMouth(matrix, false); delay(2000); Otto.clearMouth(); delay(1000); matrix = 0b00001100010010010010010010011110; Otto.putMouth(matrix, false); delay(2000); Otto.clearMouth(); Otto.putMouth(happyOpen); } break; default: break; } sendFinalAck(); }\n'
+'void receiveName() { sendAck(); Otto.home(); char newOttoName[11] = ""; int eeAddress = 5; char *arg; arg = SCmd.next(); if (arg != NULL) { int k = 0; while ((*arg) && (k < 11)) { newOttoName[k] = *arg++; k++; } EEPROM.put(eeAddress, newOttoName); } else { delay(2000); } sendFinalAck(); }\n'
+'void requestName() { Otto.home(); char actualOttoName[11] = ""; int eeAddress = 5; EEPROM.get(eeAddress, actualOttoName); Serial.print(F("&&")); Serial.print(F("E ")); Serial.print(actualOttoName); Serial.println(F("%%")); Serial.flush(); }\n'
+'void requestDistance() { Otto.home(); int distance = Otto.getDistance(); Serial.print(F("&&")); Serial.print(F("D ")); Serial.print(distance); Serial.println(F("%%")); Serial.flush(); }\n'
+'void requestNoise() { Otto.home(); int microphone = Otto.getNoise(); Serial.print(F("&&")); Serial.print(F("N ")); Serial.print(microphone); Serial.println(F("%%")); Serial.flush(); }\n'
+'void requestBattery() { Otto.home(); double batteryLevel = Otto.getBatteryLevel(); Serial.print(F("&&")); Serial.print(F("B ")); Serial.print(batteryLevel); Serial.println(F("%%")); Serial.flush(); }\n'
+'void requestProgramId() { Otto.home(); Serial.print(F("&&")); Serial.print(F("I ")); Serial.print(programID); Serial.println(F("%%")); Serial.flush(); }\n'
+'void sendAck() { delay(30); Serial.print(F("&&")); Serial.print(F("A")); Serial.println(F("%%")); Serial.flush(); }\n'
+'void sendFinalAck() { delay(30); Serial.print(F("&&")); Serial.print(F("F")); Serial.println(F("%%")); Serial.flush(); }\n'
+'void ButtonPushed(){ if(!buttonPushed){ buttonPushed=true; Otto.putMouth(smallSurprise); } } \n'

Blockly.Arduino.definitions_['otto9_legs'] = '#define N_SERVOS 4\n'
  + '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
 +'#define PIN_Trigger  8\n'
  +'#define PIN_Echo     9\n'
  +'#define PIN_Buzzer  13 \n'
 +'#define PIN_NoiseSensor A6\n'
 +'#define DIN_PIN    A3 \n'
  +'#define CS_PIN     A2 \n'
  +'#define CLK_PIN    A1 \n'
  +'#define LED_DIRECTION  1 \n'
  +'boolean BATTcheck = false; \n'
  +'#define PIN_Battery   A7 \n'
  +'#define PIN_Button   A0 \n'
  +'#define PIN_ASSEMBLY    7\n'
  ;
  Blockly.Arduino.setups_['otto9_init']='Serial.begin(9600);\n'
  +'BTserial.begin(9600);\n'
 +'Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n'
  +'Otto.initMATRIX(DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n'
  +'Otto.matrixIntensity(1);\n'
  +'Otto.initBatLevel(PIN_Battery);\n'
  +'randomSeed(analogRead(PIN_NoiseSensor));\n'
  +'pinMode(PIN_ASSEMBLY, INPUT_PULLUP);\n'
  +'pinMode(PIN_Button, INPUT);\n'
  +'SCmd.addCommand("S", receiveStop);    \n'
  +'SCmd.addCommand("L", receiveLED);     \n'
  +'SCmd.addCommand("T", recieveBuzzer);    \n'
  +'SCmd.addCommand("M", receiveMovement);   \n'
  +'SCmd.addCommand("H", receiveGesture);    \n'
  +'SCmd.addCommand("K", receiveSing);       \n'
  +'SCmd.addCommand("J", receiveMode);       \n'
  +'SCmd.addCommand("C", receiveTrims);      \n'
  +'SCmd.addCommand("G", receiveServo);      \n'
  +'SCmd.addCommand("R", receiveName);       \n'
  +'SCmd.addCommand("E", requestName);\n'
  +'SCmd.addCommand("D", requestDistance);\n'
  +'SCmd.addCommand("N", requestNoise);\n'
  +'SCmd.addCommand("B", requestBattery);  \n'
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
    this.setColour("#32D900");
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