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
      .appendField("calibrate  Leg Left")
      .appendField(new Blockly.FieldNumber("0"), "LL")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RL")
      this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Foot Left")
      .appendField(new Blockly.FieldNumber("0"), "LF")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RF");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eeprom'] = {
  init: function() {
    this.appendDummyInput("")
        .appendField(Blockly.Msg.OTTO9_EEPROM_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#ff6600");
    this.setTooltip(Blockly.Msg.OTTO9_EEEPROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('media/otto_bend.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
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
    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
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
    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
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
  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Leg Left")
      .appendField(new Blockly.FieldNumber("0"), "LL")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RL")
      this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Foot Left")
      .appendField(new Blockly.FieldNumber("0"), "LF")
      .appendField("Right")
      .appendField(new Blockly.FieldNumber("0"), "RF")
      this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
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
      .appendField(new Blockly.FieldImage('media/matrix.png', 48, 48, "*"))
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

Blockly.Blocks['otto9_mouth#']={ init:function(){
  this.appendDummyInput()
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

Blockly.Blocks['otto9_eyes'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/eyes.png', 58, 25, "*"))
        .appendField(Blockly.Msg.OTTO9_EYES_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_EYES_CHOICE), "otto9_eyes_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_eyesl']={
  init:function(){
  this.appendDummyInput()
      .appendField("line X1")
      .appendField(new Blockly.FieldNumber("0"), "X1")
      .appendField("Y1")
      .appendField(new Blockly.FieldNumber("0"), "Y1")
      .appendField("X2")
      .appendField(new Blockly.FieldNumber("0"), "X2")
      .appendField("Y2")
      .appendField(new Blockly.FieldNumber("0"), "Y2");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eyesr']={
  init:function(){
  this.appendDummyInput()
     .appendField("rectangle X1")
     .appendField(new Blockly.FieldNumber("0"), "X1")
      .appendField("Y1")
      .appendField(new Blockly.FieldNumber("0"), "Y1")
     .appendField("X2")
     .appendField(new Blockly.FieldNumber("0"), "X2")
     .appendField("Y2")
     .appendField(new Blockly.FieldNumber("0"), "Y2")
  this.appendDummyInput()
  .setAlign(Blockly.ALIGN_RIGHT)
     .appendField("fill X1")
     .appendField(new Blockly.FieldNumber("0"), "FX1")
     .appendField("Y1")
     .appendField(new Blockly.FieldNumber("0"), "FY1")
     .appendField("X2")
     .appendField(new Blockly.FieldNumber("0"), "FX2")
     .appendField("Y2")
     .appendField(new Blockly.FieldNumber("0"), "FY2");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};


Blockly.Blocks['otto9_eyesc']={
  init:function(){
  this.appendDummyInput()
      .appendField("circle X")
      .appendField(new Blockly.FieldNumber("0"), "X")
      .appendField("Y")
      .appendField(new Blockly.FieldNumber("0"), "Y")
      .appendField("size")
      .appendField(new Blockly.FieldNumber("0"), "R");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eyes_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_EYESTEXT_TEXT)
        .appendField(new Blockly.FieldTextInput('I am Otto'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_eyesm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('  ') .appendField('1') .appendField('  2').appendField('  3').appendField(' 4') .appendField(' 5')  .appendField('  6') .appendField(' 7')  .appendField(' 8')
        .appendField(' 9').appendField('10') .appendField('11') .appendField('12') .appendField('13') .appendField('14') .appendField('15') .appendField('16')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput()
        .appendField('1 ')
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
    this.appendDummyInput()
        .appendField('2 ')
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
    this.appendDummyInput()
        .appendField('3 ')
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
    this.appendDummyInput()
        .appendField('4 ')
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
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel00')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel108')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel116')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel124');
    this.appendDummyInput()
        .appendField('5 ')
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
        this.appendDummyInput()
        .appendField('6 ')
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
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel9106')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel114')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel122');
        this.appendDummyInput()
        .appendField('7 ')
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
        this.appendDummyInput()
        .appendField('8 ')
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
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('  ')
        .appendField('1')
        .appendField('  2')
        .appendField('  3')
        .appendField(' 4')
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
      .appendField("pixel X")
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

Blockly.Arduino['otto9_eeprom'] = function(block) {
  Blockly.Arduino.setups_['otto9_eeprom']='Otto.saveTrimsOnEEPROM();';
  var code = '//calibration saved\n';
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

Blockly.Arduino['otto9_eyes'] = function(block) {
  var dropdown_otto9_eyes_choice = block.getFieldValue('otto9_eyes_choice');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
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
  +'confused_bmp[] = {  B00000000,B01111100,B10000010,B10111010,B10101010,B10001010,B01111000,B00000000,B00000000,B11111111,B10000001,B10111101,B10100101,B10000101,B00000101,B11111101},\n'
  +'wave_bmp[] = {  B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000,B00000000,B00100000,B00010000,B00001000,B00010000,B00100000,B00010000,B00000000},\n'
  +'magic_bmp[] = {  B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B01111110,B11111111,B01111110,B00000000,B00000000},\n'
  +'fail_bmp[] = {  B00000000,B00110000,B01111000,B01111000,B01111100,B00111100,B00001000,B00000000,B00000000,B00001000,B00111100,B01111100,B01111000,B01111000,B00110000,B00000000},\n'
  +'full_bmp[] =  {   B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111,B11111111 };';
  Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
  var code = ' matrix.clear();\n'
  +'matrix.drawBitmap(0, 0, + '+ dropdown_otto9_eyes_choice + ' , 8, 16, LED_ON);\n'
  +'matrix.writeDisplay();\n';
  return code;
};


Blockly.Arduino['otto9_eyesl'] = function(block) {
  var valuex1 = block.getFieldValue('X1');
  var valuey1 = block.getFieldValue('Y1');
  var valuex2 = block.getFieldValue('X2');
  var valuey2 = block.getFieldValue('Y2');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
  var code = ' matrix.clear();\n'
  +'matrix.drawLine('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +', LED_ON);\n'
  +'matrix.writeDisplay();\n';
  return code;
};

Blockly.Arduino['otto9_eyesr'] = function(block) {
  var valuex1 = block.getFieldValue('X1');
  var valuey1 = block.getFieldValue('Y1');
  var valuex2 = block.getFieldValue('X2');
  var valuey2 = block.getFieldValue('Y2');
  var valuefx1 = block.getFieldValue('FX1');
  var valuefy1 = block.getFieldValue('FY1');
  var valuefx2 = block.getFieldValue('FX2');
  var valuefy2 = block.getFieldValue('FY2');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
  var code = ' matrix.clear();\n'
  +'matrix.drawRect('+ valuex1 +','+valuey1+','+ valuex2 +','+ valuey2 +', LED_ON);\n'
  +'matrix.fillRect('+ valuefx1 +','+valuefy1+','+ valuefx2 +','+ valuefy2 +', LED_ON);\n'
  +'matrix.writeDisplay();\n';
  return code;
};

Blockly.Arduino['otto9_eyesc'] = function(block) {
  var valuex = block.getFieldValue('X');
  var valuey = block.getFieldValue('Y');
  var valuer = block.getFieldValue('R');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
  var code = ' matrix.clear();\n'
  +'matrix.drawCircle('+ valuex +','+valuey+','+ valuer +', LED_ON);\n'
  +'matrix.writeDisplay();\n';
  return code;
};

Blockly.Arduino['otto9_eyes_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
  Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
  var code = 'matrix.setTextSize(1);\n'
  +'matrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely\n'
  +'matrix.setTextColor(LED_ON);\n'
  +'matrix.setRotation(1);\n'
  +'for (int8_t x=2; x>=-88; x--) {\n'
  +'matrix.clear();\n'
  +'matrix.setCursor(x,0);\n'
  +'matrix.print("' + text_input +'");\n'
  +'matrix.writeDisplay();\n'
  +'delay(100);}\n'
  +'matrix.setRotation(0);\n'
  return code;
};

Blockly.Arduino['otto9_eyesm'] = function(block) {
  Blockly.Arduino.includes_['otto9_eyes'] = '#include <Wire.h>\n'
  +'#include "Adafruit_LEDBackpack.h"\n'
  +'Adafruit_8x16matrix matrix = Adafruit_8x16matrix();';
   Blockly.Arduino.setups_['otto9_eyes']='matrix.begin(0x70);  // pass in the address';
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
  +'matrix.clear();\n'
  +'matrix.drawBitmap(0, 0,eyesm_bmp, 8, 16, LED_ON);\n'
  +'matrix.writeDisplay();\n';
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
Blockly.Blocks['otto9_smooth'] = {init: function() {
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage('media/smooth.png', 48, 48, "*"))
        .appendField('Dance smooth criminal');
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