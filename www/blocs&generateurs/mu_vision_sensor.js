'use strict';

goog.provide('Blockly.Blocks.VisionSensor');
goog.require('Blockly.Arduino');
goog.require('Blockly.Blocks');

//Variables para los bloques

var lVisionCardType = [["Shape Card Detect", "VISION_SHAPE_CARD_DETECT"],
                      ["Traffic Card Detect", "VISION_TRAFFIC_CARD_DETECT"],
                      ["Num Card Detect", "VISION_NUM_CARD_DETECT"],
                      ];
var VS_VISION_TYPE = [["Color Detect", "VISION_COLOR_DETECT"],
                      ["Color Recognition", "VISION_COLOR_RECOGNITION"],
                      ["Ball Detect", "VISION_BALL_DETECT"],
                      ["Body Detect", "VISION_BODY_DETECT"],
                      ].concat(lVisionCardType);

var lVsMu = [["MU00", "0"],["MU01", "1"],["MU10", "2"],["MU11", "3"]];

Blockly.Blocks.VisionSensor.HUE = "#0060aa";
Blockly.Blocks.VisionSensor.HUE_SetupMode = "#0060aa";
Blockly.Blocks.VisionSensor.HUE_RunMode = "#0060aa";
Blockly.Blocks.VisionSensor.HUE_LightSensor = "#0060aa";
Blockly.Blocks.VisionSensor.HUE_AT = "#0060aa";

//Variables del código Arduino

var kMuName = 'MU'
var funMuVs2GetColorRCGLabel = '\
int MuVs2GetColorRCGLabel(MuVisionSensor& Mu, int x, int y) {\n\
  static int x_last = -1;\n\
  static int y_last = -1;\n\
  x = x>100 ? 100:(x<0 ? 0:x);\n\
  y = y>100 ? 100:(y<0 ? 0:y);\n\
  if (x != x_last) {\n\
    x_last = x;\n\
    Mu.write(VISION_COLOR_RECOGNITION, kXValue, x);\n\
  }\n\
  if (y != y_last) {\n\
    y_last = y;\n\
    Mu.write(VISION_COLOR_RECOGNITION, kYValue, y);\n\
  }\n\
  return Mu.GetValue(VISION_COLOR_RECOGNITION, kStatus);\n\
}\n\
                              ';
var funMuVs2GetColorDetectLabel = '\
int MuVs2GetColorDetectLabel(MuVisionSensor& Mu, const int label) {\n\
  static int label_last = -1;\n\
  if (label_last != label) {\n\
    label_last = label;\n\
    Mu.write(VISION_COLOR_DETECT, kLabel, label);\n\
  }\n\
  return Mu.GetValue(VISION_COLOR_DETECT, kStatus);\n\
}\n\
        ';
var funMu3ReadGesture = '\
MuVsLsGesture Mu3ReadGesture(MuVisionSensor& Mu, int offset) {\
  mu3_gesture[offset] = Mu.LsReadGesture();\
  return mu3_gesture[offset];\
}\
';
var funMu3AtRead8 = '\
int Mu3AtRead8() {\
  unsigned long time = millis();\
  while(!SERIAL_PORT.available() && millis()-time<1000);\
  if (millis()-time>=1000) {\
    return -1;\
  }\
  return SERIAL_PORT.read();\
}\
';
var funMu3AtWrite8 = '\
void Mu3AtWrite8(uint8_t c) {\
  SERIAL_PORT.write(c);\
}\
';
var Mu3AtPort = '';

//Este bloque hay que revisarlo porque coge el inicio del puerto serie de otra manera

Blockly.Blocks['Vs2MuInit'] = {
  init: function() {
  var dropdown_list = [["I2C","Wire"]/*,["Serial","Serial1"]*/];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/muvision.png",43,38))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_MU)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(' '+Blockly.LKL_VS2_SERIAL)
        .appendField(new Blockly.FieldDropdown(dropdown_list), "SERIAL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip(Blockly.LKL_VS2_HELP_INIT);
  },
  onchange:function(e) {
    if (this.getFieldValue("SERIAL") == "Serial") {
      this.setWarningText(Blockly.LKL_VS2_WARNING_MU_INIT);
    } else {
      this.setWarningText(null);
  }
 }
};

Blockly.Arduino.Vs2MuInit = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_serial = this.getFieldValue('SERIAL');
  var offset = parseInt(dropdown_mu_obj);
  var address = 0x60 + offset;
  Blockly.Arduino.includes_['include_vs2'] = '#include <MuVisionSensor.h>';
  Blockly.Arduino.definitions_['var_declare_vs2_mu'+dropdown_mu_obj] = 'MuVisionSensor MU'+dropdown_mu_obj+'(0x'+address.toString(16)+');';
  if (dropdown_serial == 'Wire') {
    Blockly.Arduino.includes_['define_i2c'] = '#include <Wire.h>';
    Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();\n';
  }
  var code = kMuName+dropdown_mu_obj+'.begin(&'+dropdown_serial+');\n';
  return code;
};


Blockly.Blocks['Vs2Setup'] = {
  init: function() {
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_SetupVS)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ");
    this.appendStatementInput('SETUP_BLOCK');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};

Blockly.Arduino.Vs2Setup = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var branch = Blockly.Arduino.statementToCode(this, 'SETUP_BLOCK');
  branch = branch.replace(/  /g, "");   //去除所有空格
  branch = branch.replace(new RegExp(kMuName+'0.','g'), kMuName+dropdown_mu_obj+'.');
  return branch;
};


Blockly.Blocks['Vs2Reset'] = {
  init: function() {
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_RESET);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2Reset = function() {
  var code = 'while('+kMuName+'0.SensorSetDefault() != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetLEDColor'] = {
  init: function() {
    var led_color = ['#fff','#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff'];
    var color_detected = new Blockly.FieldColour('#0000ff');
    color_detected.setColours(led_color).setColumns(3);
    var color_undetected = new Blockly.FieldColour('#ff0000');
    color_undetected.setColours(led_color).setColumns(3);

    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField('LED')
        .appendField(new Blockly.FieldDropdown([["1", "kLed1"], ["2", "kLed2"], [Blockly.LKL_VS2_ALL, "kLedAll"]]), "LED_ID")
        .appendField(' '+Blockly.LKL_VS2_LED_DETECT_COLOR)
        .appendField(color_detected, "LEDColorDetect")
        .appendField(' '+Blockly.LKL_VS2_LED_UNDETECT_COLOR)
        .appendField(color_undetected, "LEDColorUndetect");
    this.appendValueInput("LEDLevel")
        .appendField(' '+Blockly.LKL_VS2_BRIGHTNESS+'(0~15)')
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};



Blockly.Arduino.Vs2SetLEDColor = function() {
  var color_dic = {'#000000':'kLedClose', '#ff0000':'kLedRed', '#00ff00':'kLedGreen',
                  '#ffff00':'kLedYellow', '#0000ff':'kLedBlue', '#ff00ff':'kLedPurple',
                  '#00ffff':'kLedCyan', '#ffffff':'kLedWhite'};
  var dropdown_led_id = this.getFieldValue('LED_ID');
  var dropdown_led_detect_color = color_dic[this.getFieldValue('LEDColorDetect')];
  var dropdown_led_undetect_color = color_dic[this.getFieldValue('LEDColorUndetect')];
  var input_led_level = Blockly.Arduino.valueToCode(this, "LEDLevel",
          Blockly.Arduino.ORDER_NONE) || '1';
  var code = 'while('+kMuName+'0.LedSetColor('+dropdown_led_id+', '+
  dropdown_led_detect_color+', '+dropdown_led_undetect_color+', '+input_led_level+') != MU_OK);\n';
  if (dropdown_led_detect_color == dropdown_led_undetect_color) {
    code += 'while('+kMuName+'0.LedSetMode('+dropdown_led_id+', 1, 1) != MU_OK);\n';
  } else {
    code += 'while('+kMuName+'0.LedSetMode('+dropdown_led_id+', 0, 0) != MU_OK);\n';
  }
  return code;
};

Blockly.Blocks['Vs2VisionBegin'] = {
  init: function() {
    var lVs2VisionStatus = [[Blockly.LKL_VS2_ENABLE, "Begin"],[Blockly.LKL_VS2_DISABLE, "End"]];
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVs2VisionStatus), "VisionStatus")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VisionType");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  },
};

Blockly.Arduino.Vs2VisionBegin = function() {
  var dropdown_vision_status = this.getFieldValue('VisionStatus');
  var dropdown_vision_type = this.getFieldValue('VisionType');
  var code = '';
  code += 'while('+kMuName+'0.Vision'+dropdown_vision_status+'('+dropdown_vision_type+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetVisionLevel'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VisionType")
        .appendField(' '+Blockly.LKL_VS2_SET_VISION_LEVEL)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_VS2_AUTO,"kLevelDefault"],
                    [Blockly.LKL_VS2_HIGH_SPEED, "kLevelSpeed"],
                    [Blockly.LKL_VS2_NORMAL, "kLevelBalance"],
                    [Blockly.LKL_VS2_HIGH_ACCURACY, "kLevelAccuracy"],
                    ]), "VisionLevel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.LKL_VS2_HELP_VISION_LEVEL);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};



Blockly.Arduino.Vs2SetVisionLevel = function() {
  var dropdown_vision_type = this.getFieldValue('VisionType');
  var dropdown_vision_level = this.getFieldValue('VisionLevel');
  var code = 'while('+kMuName+'0.VisionSetLevel('+dropdown_vision_type+', '+dropdown_vision_level+') != MU_OK);\n';
  return code;
};


Blockly.Blocks['Vs2SetVisionZoom'] = {
  init: function() {
    this.setColour("#0060aa");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_SET_VISION_ZOOM)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_VS2_AUTO,"kZoomDefault"],[Blockly.LKL_VS2_LEVEL+"1", "kZoom1"],
                  [Blockly.LKL_VS2_LEVEL+"2", "kZoom2"],[Blockly.LKL_VS2_LEVEL+"3", "kZoom3"],
                  [Blockly.LKL_VS2_LEVEL+"4", "kZoom4"],[Blockly.LKL_VS2_LEVEL+"5", "kZoom5"]
                  ]), "VisionZoom");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	 this.setTooltip(Blockly.LKL_VS2_HELP_VISION_ZOOM);
	 this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2SetVisionZoom = function() {
  var dropdown_vision_zoom = this.getFieldValue('VisionZoom');
  var code = 'while('+kMuName+'0.CameraSetZoom('+dropdown_vision_zoom+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetColorRecognitionRegion'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_COLOR_RECOGNITION)
        .appendField(Blockly.LKL_VS2_SET_RECOGNITION_REGION);
    this.appendValueInput('Width')
        .setCheck("Number")
        .appendField(Blockly.LKL_VS2_STATE_VALUE_WIDTH+' =');
    this.appendValueInput('Height')
        .setCheck("Number")
        .appendField(Blockly.LKL_VS2_STATE_VALUE_HEIGHT+' =');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};


Blockly.Arduino.Vs2SetColorRecognitionRegion = function() {
  var input_width = Blockly.Arduino.valueToCode(this, "Width",
                    Blockly.Arduino.ORDER_NONE) || '5';
  var input_height = Blockly.Arduino.valueToCode(this, "Height",
                    Blockly.Arduino.ORDER_NONE) || '5';
  var code = 'while('+kMuName+'0.write(VISION_COLOR_RECOGNITION, kWidthValue,'+input_width+') != MU_OK);\n';
  code += 'while('+kMuName+'0.write(VISION_COLOR_RECOGNITION, kHeightValue,'+input_height+') != MU_OK);\n';
  return code;
};


Blockly.Blocks['Vs2SetColorBlockMinBlob'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_COLOR_DETECT)
        .appendField(Blockly.LKL_VS2_SET_MIN_RECOGNITION_SIZE);
    this.appendValueInput('Width')
        .setCheck("Number")
        .appendField(Blockly.LKL_VS2_STATE_VALUE_WIDTH+' =');
    this.appendValueInput('Height')
        .setCheck("Number")
        .appendField(Blockly.LKL_VS2_STATE_VALUE_HEIGHT+' =');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2SetColorBlockMinBlob = function() {
  var input_width = Blockly.Arduino.valueToCode(this, "Width",
                    Blockly.Arduino.ORDER_NONE) || '5';
  var input_height = Blockly.Arduino.valueToCode(this, "Height",
                    Blockly.Arduino.ORDER_NONE) || '5';
  var code = 'while('+kMuName+'0.write(VISION_COLOR_DETECT, kWidthValue,'+input_width+') != MU_OK);\n';
  code += 'while('+kMuName+'0.write(VISION_COLOR_DETECT, kHeightValue,'+input_height+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetUARTBaud'] = {
  init: function() {
		var BAUD = [["9600","kBaud9600"],["19200","kBaud19200"],["38400","kBaud38400"],["57600","kBaud57600"],
    ["115200","kBaud115200"],["230400","kBaud230400"],["460800","kBaud460800"],["921600","kBaud921600"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
				.appendField(Blockly.LKL_VS2_SET_UART_BAUD)
        .appendField(new Blockly.FieldDropdown(BAUD), "BAUD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2SetUARTBaud = function() {
  var dropdown_uart_baud = this.getFieldValue('BAUD');
  var code = 'while('+kMuName+'0.UartSetBaudrate('+dropdown_uart_baud+') != MU_OK);\n';
  return code;
};


Blockly.Blocks['Vs2SetCameraRotate'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_FRAME_ROTATE)
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'FRAME_ROTATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};


Blockly.Arduino.Vs2SetCameraRotate = function() {
  var dropdown_rotate = this.getFieldValue('FRAME_ROTATE');
  if (dropdown_rotate == 'TRUE') {
    dropdown_rotate = 'true';
  } else {
    dropdown_rotate = 'false';
  }
  var code = 'while('+kMuName+'0.CameraSetRotate('+dropdown_rotate+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetCameraHFR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_CAMERA_HFR)
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'CameraHFR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2SetCameraHFR = function() {
  var dropdown_HFR = this.getFieldValue('CameraHFR');
  if (dropdown_HFR == 'TRUE') {
    dropdown_HFR = 'kFPSHigh';
  } else {
    dropdown_HFR = 'kFPSNormal';
  }
  var code = 'while('+kMuName+'0.CameraSetFPS('+dropdown_HFR+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2SetCameraWhiteBalance'] = {
  init: function() {
    var lCameraAWB = [[Blockly.LKL_VS2_AUTO, "kAutoWhiteBalance"],[Blockly.LKL_VS2_LOCK_AWB, "kLockWhiteBalance"],
                      [Blockly.LKL_VS2_WHITE_LIGHT, "kWhiteLight"],[Blockly.LKL_VS2_YELLOW_LIGHT, "kYellowLight"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_CAMERA_AWB)
        .appendField(new Blockly.FieldDropdown(lCameraAWB), 'CameraAWB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Arduino.Vs2SetCameraWhiteBalance = function() {
  var dropdown_AWB = this.getFieldValue('CameraAWB');
  var code = 'while('+kMuName+'0.CameraSetAwb('+dropdown_AWB+') != MU_OK);\n';
  return code;
};

Blockly.Blocks['Vs2Detected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
				.appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VISION_TYPE");
    this.setOutput(true, ["Number","Boolean"]);
	this.setInputsInline(true);
  }
};

Blockly.Arduino.Vs2Detected = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_vision_type = this.getFieldValue('VISION_TYPE');
  var code = kMuName+dropdown_mu_obj+'.GetValue('+dropdown_vision_type+', kStatus)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];  
};

Blockly.Blocks['Vs2DetectedRegionColor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_RECOGNIZED)
        .appendField(Blockly.LKL_VS2_COORDINATE);
    this.appendValueInput('XValue')
        .setCheck("Number")
        .appendField('x=');
    this.appendValueInput('YValue')
        .setCheck("Number")
        .appendField('y=');
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_COLOR);
    this.setOutput(true, ["Number","Boolean"]);
    this.setInputsInline(true);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Vs2DetectedRegionColor = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var input_value_x = Blockly.Arduino.valueToCode(this, "XValue",
                      Blockly.Arduino.ORDER_NONE) || '50';
  var input_value_y = Blockly.Arduino.valueToCode(this, "YValue",
                      Blockly.Arduino.ORDER_NONE) || '50';

  Blockly.Arduino.definitions_['funMuVs2GetColorRCGLabel'] = funMuVs2GetColorRCGLabel;
  var code = 'MuVs2GetColorRCGLabel('+kMuName+dropdown_mu_obj+', '+input_value_x+', '+input_value_y+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Vs2DetectedColorDetect'] = {
  init: function() {
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var color = new Blockly.FieldColour('#ff0000');
    color.setColours(led_color).setColumns(3);

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(color, 'DetectColor')
        .appendField(Blockly.LKL_VS2_COLOR_BLOCK);

    this.setOutput(true, ["Number","Boolean"]);
	this.setInputsInline(true);
  }
};

Blockly.Arduino.Vs2DetectedColorDetect = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var color_dic = {'#000000':'MU_COLOR_BLACK', '#ff0000':'MU_COLOR_RED', '#00ff00':'MU_COLOR_GREEN',
                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
                  '#00ffff':'MU_COLOR_CYAN', '#ffffff':'MU_COLOR_WHITE'};
  var color = color_dic[this.getFieldValue("DetectColor")];

  Blockly.Arduino.definitions_['funMuVs2GetColorDetectLabel'] = funMuVs2GetColorDetectLabel;
  var code = 'MuVs2GetColorDetectLabel('+kMuName+dropdown_mu_obj+', '+color+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vs2GetColorLabel'] = {
  init: function() {
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var color = new Blockly.FieldColour('#ff0000');
    color.setColours(led_color).setColumns(3);

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(Blockly.LKL_VS2_VISION_COLOR_RECOGNITION);
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_COLOR+"=")
        .appendField(color, 'RCGColor');
    this.setOutput(true, 'Boolean');
    this.setInputsInline(true);
  }
};

Blockly.Arduino.Vs2GetColorLabel = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var color_dic = {'#000000':'MU_COLOR_BLACK', '#ff0000':'MU_COLOR_RED', '#00ff00':'MU_COLOR_GREEN',
                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
                  '#00ffff':'MU_COLOR_CYAN', '#ffffff':'MU_COLOR_WHITE'};
  var color = color_dic[this.getFieldValue("RCGColor")];

  var code = '('+kMuName+dropdown_mu_obj+'.GetValue(VISION_COLOR_RECOGNITION, kLabel) == '+color+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Vs2GetMessage'] = {
  init: function() {
  	this.DETECTED_MESSAGE = [[Blockly.LKL_VS2_STATE_VALUE_X,"kXValue"], 
                            [Blockly.LKL_VS2_STATE_VALUE_Y,"kYValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_WIDTH,"kWidthValue"], 
                            [Blockly.LKL_VS2_STATE_VALUE_HEIGHT,"kHeightValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_LABEL,"kLabel"]
                            ];
    this.ColorRCGMessage = [[Blockly.LKL_VS2_STATE_VALUE_R_CHANNEL,"kRValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_G_CHANNEL,"kGValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_B_CHANNEL,"kBValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_LABEL,"kLabel"]
                            ];
    var vision_type = VS_VISION_TYPE.slice();

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
				.appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(vision_type), "VISION_TYPE");
    this.vision_type_ = '';
    this.generateMessageType();
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
  },
  onchange: function(e) {
    var vision_type = this.getFieldValue("VISION_TYPE");
    if (this.vision_type_ != vision_type) {
      if (this.vision_type_ == "VISION_COLOR_RECOGNITION"
        || vision_type == "VISION_COLOR_RECOGNITION") {
        this.generateMessageType();
      } else {
        this.vision_type_ = vision_type;
      }
    }
  },
  generateMessageType: function() {
    var type_index = -1;
    if (this.vision_type_ != '') {
      var last_message_type = this.getFieldValue("DETECTED_MESSAGE");
      var color_message = [];
      var other_message = [];
      for (var i = 0; i < this.ColorRCGMessage.length; i++) {
        color_message.push(this.ColorRCGMessage[i][1]);
      }
      for (var i = 0; i < this.DETECTED_MESSAGE.length; i++) {
        other_message.push(this.DETECTED_MESSAGE[i][1]);
      }
      if (color_message.indexOf(last_message_type) != -1) {
        type_index = color_message.indexOf(last_message_type);
      } else if (other_message.indexOf(last_message_type) != -1) {
        type_index = other_message.indexOf(last_message_type);
      }
    }

    this.vision_type_ = this.getFieldValue("VISION_TYPE");
    this.removeInput("DetectedMessage");
    if (this.vision_type_ == "VISION_COLOR_RECOGNITION") {
      this.appendDummyInput("DetectedMessage")
          .appendField(new Blockly.FieldDropdown(this.ColorRCGMessage), "DETECTED_MESSAGE")
          .appendField(Blockly.LKL_VS2_VALUE);
      if (type_index != -1) {
        if (type_index == this.DETECTED_MESSAGE.length-1) {
          this.setFieldValue(this.ColorRCGMessage[this.ColorRCGMessage.length-1][1], "DETECTED_MESSAGE");
        } else {
          this.setFieldValue(this.ColorRCGMessage[type_index][1], "DETECTED_MESSAGE");
        }
      }
    } else {
      this.appendDummyInput("DetectedMessage")
          .appendField(new Blockly.FieldDropdown(this.DETECTED_MESSAGE), "DETECTED_MESSAGE")
          .appendField(Blockly.LKL_VS2_VALUE);
      if (type_index != -1) {
        if (type_index == this.ColorRCGMessage.length-1) {
          this.setFieldValue(this.DETECTED_MESSAGE[this.DETECTED_MESSAGE.length-1][1], "DETECTED_MESSAGE");
        } else {
          this.setFieldValue(this.DETECTED_MESSAGE[type_index][1], "DETECTED_MESSAGE");
        }
      }
    }
  },
};

Blockly.Arduino.Vs2GetMessage = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_vision_type = this.getFieldValue('VISION_TYPE');
  var dropdown_detected_message = this.getFieldValue('DETECTED_MESSAGE');
  var code = kMuName+dropdown_mu_obj+'.GetValue('+dropdown_vision_type+', '+dropdown_detected_message+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Vs2GetCardType'] = {
  init: function() {
    this.traffic_card_type_ = [["Foward", "MU_TRAFFIC_CARD_FORWARD"],
                              ["Left", "MU_TRAFFIC_CARD_LEFT"],
                              ["Right", "MU_TRAFFIC_CARD_RIGHT"],
                              ["Turn Around", "MU_TRAFFIC_CARD_TURN_AROUND"],
                              ["Park", "MU_TRAFFIC_CARD_PARK"]
                              ];
    this.number_card_type_ = [["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],
                            ["6", "6"],["7", "7"],["8", "8"],["9", "9"],["0", "0"]
                            ];
    this.shape_card_type_ = [["Tick", "MU_SHAPE_CARD_TICK"],
                            ["Cross", "MU_SHAPE_CARD_CROSS"],
                            ["Circle", "MU_SHAPE_CARD_CIRCLE"],
                            ["Square", "MU_SHAPE_CARD_SQUARE"],
                            ["Triangle", "MU_SHAPE_CARD_TRIANGLE"],
                            ];
    this.card_class_dic_ = {'VISION_SHAPE_CARD_DETECT':this.shape_card_type_,
                            'VISION_TRAFFIC_CARD_DETECT':this.traffic_card_type_,
                            'VISION_NUM_CARD_DETECT':this.number_card_type_
                            };
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MuObj")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(lVisionCardType), "VisionCardType")
        .appendField(" "+Blockly.LKL_VS2_CARD_TYPE+"=");
    this.vision_type_ = this.getFieldValue("VisionCardType");
    this.appendDummyInput("CARD_TYPE")
        .appendField(new Blockly.FieldDropdown(this.card_class_dic_[this.vision_type_]), "CardType");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
  },
  onchange: function(e) {
    var vision_type = this.getFieldValue("VisionCardType");
    if (this.vision_type_ != vision_type) {
      this.vision_type_ = vision_type;
      var last_card_type = this.getFieldValue("CardType");
      var traffic_card_type = [];
      var number_card_type = [];
      var shape_card_type = [];
      var type_index = -1;
      for (var i = 0; i < this.traffic_card_type_.length; i++) {
        traffic_card_type.push(this.traffic_card_type_[i][1]);
      }
      for (var i = 0; i < this.number_card_type_.length; i++) {
        number_card_type.push(this.number_card_type_[i][1]);
      }
      for (var i = 0; i < this.shape_card_type_.length; i++) {
        shape_card_type.push(this.shape_card_type_[i][1]);
      }
      if (traffic_card_type.indexOf(last_card_type) != -1) {
        type_index = traffic_card_type.indexOf(last_card_type);
      } else if (number_card_type.indexOf(last_card_type) != -1) {
        type_index = number_card_type.indexOf(last_card_type);
      } else if (shape_card_type.indexOf(last_card_type) != -1) {
        type_index = shape_card_type.indexOf(last_card_type);
      }
      this.removeInput("CARD_TYPE");
      this.appendDummyInput("CARD_TYPE")
          .appendField(new Blockly.FieldDropdown(this.card_class_dic_[this.vision_type_]), "CardType");
      this.setFieldValue(this.card_class_dic_[this.vision_type_][type_index][1], "CardType");
    }
  },
};

Blockly.Arduino.Vs2GetCardType = function() {
  var dropdown_mu_obj = this.getFieldValue('MuObj');
  var dropdown_vision_type = this.getFieldValue('VisionCardType');
  var dropdown_card_type = this.getFieldValue('CardType');
  var code = '('+kMuName+dropdown_mu_obj+'.GetValue('+dropdown_vision_type+', kLabel) == '+dropdown_card_type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// AT command
Blockly.Blocks['Mu3LsBegin'] = {
  init: function() {
    var dropdown_ls_type = [[Blockly.LKL_VS2_PROXIMITY,"LS_PROXIMITY_ENABLE"],
                            [Blockly.LKL_VS2_ALS,"LS_AMBIENT_LIGHT_ENABLE"],
                            [Blockly.LKL_VS2_GESTURE_SENSOR,"LS_GESTURE_ENABLE"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_ENABLE)
        .appendField(new Blockly.FieldDropdown(dropdown_ls_type), "LS_TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsBegin = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_ls_type = this.getFieldValue('LS_TYPE');
  var code = kMuName+dropdown_mu_obj+'.LsBegin('+dropdown_ls_type+');\n';
  return code;
};


Blockly.Blocks['Mu3LsSetSensitivity'] = {
  init: function() {
    var dropdown_sensitivity = [[Blockly.LKL_VS2_DEFAULT,"kSensitivityDefault"],
                                [Blockly.LKL_VS2_LOW,"kSensitivity1"],
                                [Blockly.LKL_VS2_MID,"kSensitivity2"],
                                [Blockly.LKL_VS2_HIGH,"kSensitivity3"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_SET)
        .appendField(Blockly.LKL_VS2_SENSITIVITY)
        .appendField(new Blockly.FieldDropdown(dropdown_sensitivity), "SENSITIVITY");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsSetSensitivity = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_sensitivity = this.getFieldValue('SENSITIVITY');
  var code = kMuName+dropdown_mu_obj+'.LsSetSensitivity('+dropdown_sensitivity+');\n';
  return code;
};

Blockly.Blocks['Mu3LsWhiteBalanceEnable'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_WB_CORRECTION);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsWhiteBalanceEnable = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var code = kMuName+dropdown_mu_obj+'.LsWhiteBalanceEnable();\n';
  return code;
};

Blockly.Blocks['Mu3LsReadProximity'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_PROXIMITY);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsReadProximity = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var code = kMuName+dropdown_mu_obj+'.LsReadProximity()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Mu3LsReadAmbientLight'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_ALS);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
  },
};



Blockly.Arduino.Mu3LsReadAmbientLight = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var code = kMuName+dropdown_mu_obj+'.LsReadAmbientLight()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Mu3LsDetectedGesture'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(Blockly.LKL_VS2_GESTURE);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsDetectedGesture = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  Blockly.Arduino.definitions_['declare_gesture'] = 'MuVsLsGesture mu3_gesture[4];';
  Blockly.Arduino.definitions_['funMu3ReadGesture'] = funMu3ReadGesture;
  var code = 'Mu3ReadGesture('+kMuName+dropdown_mu_obj+', '+dropdown_mu_obj+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['Mu3LsDetectedGestureType'] = {
  init: function() {
    var dropdown_gesture = [[Blockly.LKL_VS2_GESTURE_UP,"kGestureUp"],
                            [Blockly.LKL_VS2_GESTURE_DOWN,"kGestureDown"],
                            [Blockly.LKL_VS2_GESTURE_LEFT,"kGestureLeft"],
                            [Blockly.LKL_VS2_GESTURE_RIGHT,"kGestureRight"],
                            [Blockly.LKL_VS2_GESTURE_LIFT_UP,"kGesturePush"],
                            [Blockly.LKL_VS2_GESTURE_PUSH_DOWN,"kGesturePull"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_GESTURE+' =')
        .appendField(new Blockly.FieldDropdown(dropdown_gesture), "GESTURE");
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3LsDetectedGestureType = function() {
  var dropdown_mu_obj = this.getFieldValue('MU_OBJ');
  var dropdown_gesture = this.getFieldValue('GESTURE');
  var code = '(mu3_gesture['+dropdown_mu_obj+'] == '+dropdown_gesture+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Revisar porque no cuadra este

// AT WiFi
Blockly.Blocks['Mu3AtWiFiInit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_MU)
        .appendField(Blockly.LKL_VS2_SERIAL)
        .appendField(new Blockly.FieldDropdown([["I2C","Wire"] /*,["Serial","Serial1"]*/]), "SERIAL");
 //   this.appendValueInput("BAUD")
 //       .setCheck("Number")
 //       .appendField(Blockly.LKL_VS2_SET_UART_BAUD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  },
  onchange:function(e) {
    if (this.getFieldValue("SERIAL") == "Serial") {
      this.setWarningText(Blockly.LKL_VS2_WARNING_MU_INIT);
    } else {
      this.setWarningText();
    }
  },
}

Blockly.Arduino.Mu3AtWiFiInit = function() {
  var dropdown_serial = this.getFieldValue('SERIAL');
  var baud = Blockly.Arduino.valueToCode(this, "BAUD",
             Blockly.Arduino.ORDER_NONE) || '9600';
  Mu3AtPort = dropdown_serial;
  Blockly.Arduino.includes_['include_mu3_at'] = '#include <MuVisionSensor3_AT.h>';
  Blockly.Arduino.definitions_['funMu3AtRead8'] = funMu3AtRead8.replace(/SERIAL_PORT/g, dropdown_serial);
  Blockly.Arduino.definitions_['funMu3AtWrite8'] = funMu3AtWrite8.replace("SERIAL_PORT", dropdown_serial);
  Blockly.Arduino.definitions_['define_mu3_at'] = 'MuVisionSensor3_AT MU3_AT(Mu3AtRead8, Mu3AtWrite8);';
  
  var code = dropdown_serial+'.begin(9600);\n';
  if (baud != '9600') {
    code += 'MU3_AT.UartBaud("'+baud+'");\n';
    code += dropdown_serial+'.begin('+baud+');\n';
  }
  return code;
};

Blockly.Blocks['Mu3AtWiFiSet'] = {
  init: function() {
    var dropdown_mode = [[Blockly.LKL_VS2_CLIENT,'"STA"'],[Blockly.LKL_VS2_HOT_SPOT,'"AP"']];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_SET);
    this.appendValueInput("SSID")
        .setCheck("String")
        .appendField(Blockly.LKL_VS2_SSID);
    this.appendValueInput("PASSWORD")
        .setCheck("String")
        .appendField(Blockly.LKL_VS2_PASSWORD);
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_MODE)
        .appendField(new Blockly.FieldDropdown(dropdown_mode), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiSet = function() {
  var ssid = Blockly.Arduino.valueToCode(this, "SSID",
              Blockly.Arduino.ORDER_NONE);
  var password = Blockly.Arduino.valueToCode(this, "PASSWORD",
                  Blockly.Arduino.ORDER_NONE);
  var mode = this.getFieldValue('MODE');
  var code = 'MU3_AT.WifiSet('+ssid+', '+password+', '+mode+');\n';
  return code;
};

Blockly.Blocks['Mu3AtWiFiCon'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_WAIT_CONNECT+"?");
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiCon = function() {
  var code = '!MU3_AT.WifiCon("1")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Mu3AtWiFiDiscon'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_DISCONNECT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiDiscon = function() {
  var code = 'MU3_AT.WifiCon("0");\n';
  return code;
};

Blockly.Blocks['Mu3AtWiFiUDP'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_SET);
    this.appendValueInput("IP")
        .setCheck("String")
        .appendField(Blockly.LKL_VS2_TARGET_IP);
    this.appendValueInput("PORT")
        .setCheck("String")
        .appendField(Blockly.LKL_VS2_SERIAL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiUDP = function() {
  var ip = Blockly.Arduino.valueToCode(this, "IP",
            Blockly.Arduino.ORDER_NONE);
  var port = Blockly.Arduino.valueToCode(this, "PORT",
              Blockly.Arduino.ORDER_NONE);
  var code = 'MU3_AT.WifiUDP('+ip+', '+port+');\n';
  return code;
};

Blockly.Blocks['Mu3AtWiFiCip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_TARGET_IP)
    this.setOutput(true, "String");
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiCip = function() {
  var code = 'MU3_AT.WifiCIP().begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Mu3AtWiFiSip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_LOCAL_IP);
    this.setOutput(true, 'String');
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiSip = function() {
  var code = 'MU3_AT.WifiSIP().begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Mu3AtWiFiRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ);
    this.setOutput(true, "Number");
	this.setInputsInline(true);
  },
};


Blockly.Arduino.Mu3AtWiFiRead = function() {
  var code = Mu3AtPort+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['Mu3AtWiFiWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png", 24,18 ))
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_WRITE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Arduino.Mu3AtWiFiWrite = function() {
  var number = Blockly.Arduino.valueToCode(this, "NUMBER",
                Blockly.Arduino.ORDER_NONE);
  var code = Mu3AtPort+'.write('+number+');\n';
  return code;
};



