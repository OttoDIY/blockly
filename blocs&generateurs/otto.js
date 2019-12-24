'use strict';

goog.provide('Blockly.Blocks.otto_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks['otto9_home'] = {
  init: function() {
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage('media/otto_plus.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_calibration']={
  init:function(){
  this.appendDummyInput()
      .appendField("calibrate  Left Leg")
      .appendField(new Blockly.FieldNumber("0"), "LL")
      .appendField("Right Leg")
      .appendField(new Blockly.FieldNumber("0"), "RL")
      .appendField("Left Foot")
      .appendField(new Blockly.FieldNumber("0"), "LF")
      .appendField("Right Foot")
      .appendField(new Blockly.FieldNumber("0"), "RF");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_bend.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_moonwalk.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Blocks['otto9_do'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_do.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DO_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_emoji.png', 22, 22, "*"))
        .appendField(Blockly.Msg.OTTO9_GESTURE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_music.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/sensor_ultrasound.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_getnoise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/sensor_noise.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETNOISE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_touchbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/sensor_touch.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_getg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/sensor_gyro.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_GETG_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GETG_CHOICE), "otto_getg");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_homeh'] = {
  init: function() {
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage('media/humanoid.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_calibrationh']={
  init:function(){
  this.appendDummyInput()
      .appendField("Leg Left")
      .appendField(new Blockly.FieldNumber("0"), "LL")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RL")
      .appendField("Foot Left")
      .appendField(new Blockly.FieldNumber("0"), "LF")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RF")
      .appendField("Arm Left")
      .appendField(new Blockly.FieldNumber("0"), "LA")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RA");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);}
};

Blockly.Blocks['otto9_moveh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/humanoid_bend.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};
Blockly.Blocks['otto9_danceh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/humanoid_moonwalk.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};
Blockly.Blocks['otto9_doh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/humanoid_do.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DO_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_gestureh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/humanoid_emoji.png', 24, 24, "*"))
        .appendField(Blockly.Msg.OTTO9_GESTURE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_soundh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/humanoid_music.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};
Blockly.Blocks['otto9_mouth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_mouth#']={
  init:function(){
  this.appendValueInput("mouth")
      .setCheck("Number")
      .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
}
};

Blockly.Blocks['otto9_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIX_TEXT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField('1')
        .appendField('  2')
        .appendField('  3')
        .appendField('  4')
        .appendField(' 5')
        .appendField('  6')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel5');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel7')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel11');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel15')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel17');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel23');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel29');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};
Blockly.Blocks['otto9_matrixp']={
  init:function(){
  this.appendDummyInput()
      .appendField("matrix pixel X")
      .appendField(new Blockly.FieldNumber("0"), "X")
      .appendField("Y")
      .appendField(new Blockly.FieldNumber("0"), "Y");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);}
};

Blockly.Blocks['otto9_matrix_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT)
        .appendField(new Blockly.FieldTextInput('I AM OTTO'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_CLEAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_arms'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('media/humanoid_arms.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_ARMS_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), "otto9_arms_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    // this.setColour(Blockly.Blocks.otto_3.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_ARMS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};
/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author Sébastien Canet
 */
'use strict';

goog.provide('Blockly.Arduino.otto');

goog.require('Blockly.Arduino');

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
	case 'RIGHT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // RIGHT\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // LEFT\n';
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

Blockly.Arduino['otto9_getdistance'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib_dist'] = '#include <US.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8 // ultrasound \n'
	+ '#define PIN_Echo 9 // ultrasound';
  var code = 'Otto.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_getnoise'] = function(block) {
  Blockly.Arduino.variables_['otto9_noise'] = 'bool estado = false;';
  Blockly.Arduino.definitions_['otto9_noise'] = '#define PIN_NoiseSensor A6';
  var code = 'Otto.getNoise()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_touchbutton'] = function(block) {
  Blockly.Arduino.variables_['otto9_touchbutton'] = 'volatile bool buttonPushed = false;';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Button A0';
  Blockly.Arduino.setups_['otto9_init']='pinMode(PIN_Button, INPUT);\n';
  var code = 'digitalRead(PIN_Button)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_getg'] = function(block) {
  var dropdown_otto_getg = block.getFieldValue('otto_getg');
  Blockly.Arduino.includes_['otto9_lib_gyro'] = '#include "Gyro.h"\n'
  + 'Gyro gyro;';
  Blockly.Arduino.setups_['otto9_getg']='gyro.begin();\n';
  var code = dropdown_otto_getg;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_homeh'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.home();\n';
  return code;
};

Blockly.Arduino['otto9_calibrationh']=function(block){
  var valuell = block.getFieldValue('LL');
  var valuerl = block.getFieldValue('RL');
  var valuelf = block.getFieldValue('LF');
  var valuerf = block.getFieldValue('RF');
  var valuela = block.getFieldValue('LA');
  var valuera = block.getFieldValue('RA');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  Blockly.Arduino.setups_['otto9_cal']= 'Otto.setTrims('+ valuell +','+ valuerl +',' +valuelf +','+ valuerf+','+ valuela+','+ valuera+');';
  var code = '//humanoid calibrated\n';
  return code;
};

Blockly.Arduino['otto9_moveh'] = function(block) {
  var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';

  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.';
  switch(dropdown_otto_move_sens) {
	case 'FORWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1); // FORWARD\n';
		break;
	case 'BACKWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1); // BACKWARD\n';
		break;
	case 'RIGHT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // RIGHT\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // LEFT\n';
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
Blockly.Arduino['otto9_danceh'] = function(block) {
  var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
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
Blockly.Arduino['otto9_doh'] = function(block) {
  var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ');\n';
  return code;
};

Blockly.Arduino['otto9_gestureh'] = function(block) {
  var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer\n'
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);'
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);'
  var code = 'Otto.playGesture(' + dropdown_otto_gesture + ');\n';
  return code;
};

Blockly.Arduino['otto9_soundh'] = function(block) {
  var dropdown_otto_sound = block.getFieldValue('otto_sound');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
  return code;
};
Blockly.Arduino['otto9_mouth'] = function(block) {
  var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.putMouth(' + dropdown_otto9_mouth_choice + ');\n';
  return code;
};

Blockly.Arduino['otto9_mouth#'] = function(block) {
  var valuemouth = Blockly.Arduino.valueToCode(block, 'mouth', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.putMouth(' + valuemouth + ');';
  return code;
};
Blockly.Arduino['otto9_matrix'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
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

Blockly.Arduino['otto9_matrixp'] = function(block) {
  var valuex = block.getFieldValue('X');
  var valuey = block.getFieldValue('Y');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);'
  var code = 'Otto.setLed('+valuex+','+valuey+',1);\n';
    return code;
};

Blockly.Arduino['otto9_matrix_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_matrix__textdef'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.writeText ( '+ '"' + text_input +'"' +',100); // limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n';
  return code;
};


Blockly.Arduino['otto9_clear'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_matrix__textdef'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);';
  var code = 'Otto.clearMouth();\n';
  return code;
};

Blockly.Arduino['otto9_arms'] = function(block) {
  var dropdown_otto9_arms_choice = block.getFieldValue('otto9_arms_choice');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_arms'] = 'int moveSize = 20;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 ';
  Blockly.Arduino.setups_['otto9_init']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.';
  
  switch(dropdown_otto9_arms_choice) {
	case 'HANDSUP':
		code += 'handsup();\n';
		break;
	case 'HANDWAVE1':
		code += 'handwave(1);\n';
		break;
	case 'HANDWAVE2':
		code += 'handwave(-1);\n';
		break;
  }
  return code;
};