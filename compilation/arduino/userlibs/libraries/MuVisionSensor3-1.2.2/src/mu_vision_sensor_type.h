// Copyright 2018 Morpx Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#ifndef MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_
#define MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_

#ifdef __cplusplus
 extern "C" {
#endif

typedef unsigned char mu_err_t;

#ifdef BIT
#undef BIT
#endif
#define BIT(x) (0x01<<(x))

#define MU_MAX_RESULT                 1

#define MU_DEVICE_ID                  0x03
#define visionTypeEnumToMacro(v)      (BIT(v-1))

typedef enum {
  kVisionColorDetect  = 1,
  kVisionColorRecog   = 2,
  kVisionBall         = 3,
  kVisionBody         = 5,
  kVisionShapeCard    = 6,
  kVisionTrafficCard  = 7,
  kVisionNumberCard   = 8,
  kVisionMaxType         ,
} MuVsMessageVisionType;
typedef enum {
  kLedClose           = 0,
  kLedRed             = 1,
  kLedGreen           = 2,
  kLedYellow          = 3,
  kLedBlue            = 4,
  kLedPurple          = 5,
  kLedCyan            = 6,
  kLedWhite           = 7,
} MuVsLedColor;
//register address define
typedef enum {
  kRegDeviceId        = 0x01,
  kRegFirmwareVersion = 0x02,
  kRegRestart         = 0x03,
  kRegSensorConfig1   = 0x04,
  kRegLock            = 0x05,
  kRegLed1            = 0x06,
  kRegLed2            = 0x07,
  kRegLedLevel        = 0x08,
  kRegUart            = 0x09,
  kRegLightSensor     = 0x0A,
  kRegIO              = 0x0B,
  kRegBle             = 0x0C,
  kRegCameraConfig1   = 0x10,
  kRegFrameCount      = 0x1F,
  kRegVisionId        = 0x20,
  kRegVisionConfig1   = 0x21,
  kRegVisionConfig2   = 0x22,
  kRegParamValue1     = 0x25,
  kRegParamValue2     = 0x26,
  kRegParamValue3     = 0x27,
  kRegParamValue4     = 0x28,
  kRegParamValue5     = 0x29,
  kRegVisionStatus1   = 0x2A,
  kRegVisionStatus2   = 0x2B,
  kRegVisionDetect1   = 0x30,
  kRegVisionDetect2   = 0x31,
  kRegResultNumber    = 0x34,
  kRegResultId        = 0x35,
  kRegReadStatus1     = 0x36,
  kRegResultData1     = 0x40,
  kRegResultData2     = 0x41,
  kRegResultData3     = 0x42,
  kRegResultData4     = 0x43,
  kRegResultData5     = 0x44,
  kRegLsProximity     = 0x50,
  kRegLsAlsL          = 0x51,
  kRegLsAlsH          = 0x52,
  kRegLsRawColorRedL  = 0x53,
  kRegLsRawColorRedH  = 0x54,
  kRegLsRawColorGreenL= 0x55,
  kRegLsRawColorGreenH= 0x56,
  kRegLsRawColorBlueL = 0x57,
  kRegLsRawColorBlueH = 0x58,
  kRegLsColor         = 0x59,
  kRegLsGesture       = 0x5A,
  kRegLsColorRed      = 0x60,
  kRegLsColorGreen    = 0x61,
  kRegLsColorBlue     = 0x62,
  kRegLsColorHueL     = 0x63,
  kRegLsColorHueH     = 0x64,
  kRegLsColorSaturation  = 0x65,
  kRegLsColorValue    = 0x66,
  kRegSn              = 0xD0,
} MuVsRegAddress;

//type define
typedef enum {
  kLed1,
  kLed2,
  kLedAll,
} MuVsLed;
typedef enum {
  kSerialMode,
  kI2CMode,
} MuVsMode;
typedef enum {
  kBaud9600     = 0x00,
  kBaud19200    = 0x01,
  kBaud38400    = 0x02,
  kBaud57600    = 0x03,
  kBaud115200   = 0x04,
  kBaud230400   = 0x05,
  kBaud460800   = 0x06,
  kBaud921600   = 0x07,
} MuVsBaudrate;
typedef enum {
  kStatus,        //!< whether the target is detected
  kXValue,        //!< target horizontal position
  kYValue,        //!< target vertical position
  kWidthValue,    //!< target width
  kHeightValue,   //!< target height
  kLabel,         //!< target label
  kRValue,        //!< R channel value
  kGValue,        //!< G channel value
  kBValue,        //!< B channel value
} MuVsObjectInf;
typedef enum {
  //!< for UART mode only
  kCallBackMode = 0,      //!< u need send a request first, and wait for response
  kDataFlowMode = 1,      //!< MU will automatically response the result of the vision that u enabled, whether it detected or undetected
  kEventMode    = 2,      //!< MU can only automatically response the result of the vision that u enabled, which detected target
} MuVsStreamOutputMode;
typedef enum {
  kZoomDefault  = 0,
  kZoom1        = 1,
  kZoom2        = 2,
  kZoom3        = 3,
  kZoom4        = 4,
  kZoom5        = 5,
} MuVsCameraZoom;
typedef enum {
  kFPSNormal        = 0,          //!< 25FPS mode
  kFPSHigh          = 1,          //!< 50FPS mode
} MuVsCameraFPS;
typedef enum {
  kAutoWhiteBalance       = 0,    //!< auto white balance mode
  kLockWhiteBalance       = 1,    //!< lock white balance with current value, the entire process takes about 100ms
  kWhiteLight             = 2,    //!< white light mode
  kYellowLight            = 3,    //!< yellow light mode
} MuVsCameraWhiteBalance;
typedef enum {
  kLevelDefault         = 0,
  kLevelSpeed           = 1,      //!< speed first mode
  kLevelBalance         = 2,      //!< balance mode
  kLevelAccuracy        = 3,      //!< accuracy first mode
} MuVsVisionLevel;
typedef enum {
  kSensitivityDefault  = 0,
  kSensitivity1,
  kSensitivity2,
  kSensitivity3,
} MuVsLsSensitivity;
typedef enum {
  kGestureNone = 0,
  kGestureUp,
  kGestureDown,
  kGestureLeft,
  kGestureRight,
  kGesturePush,
  kGesturePull,
} MuVsLsGesture;
typedef enum {
  kLsColorLabel,
  kLsColorRed,
  kLsColorGreen,
  kLsColorBlue,
  kLsColorHue,
  kLsColorSaturation,
  kLsColorValue,
} MuVsLsColorType;
typedef enum {
  kLsRawColorRed,
  kLsRawColorGreen,
  kLsRawColorBlue,
} MuVsLsRawColorType;
// register type
typedef union {
  struct {
    unsigned char reserve0 : 2;
    unsigned char default_setting :1;  //!< set 1 reset all config
  };
  unsigned char sensor_config_reg_value;
} MuVsSensorConfig1;
typedef union {
  struct {
    MuVsBaudrate baudrate :3;
  };
  unsigned char uart_reg_value;
} MuVsUartConfig;
typedef union {
  struct {
    unsigned char manual:1;
    MuVsLedColor detected_color:3;
    unsigned char hold:1;
    MuVsLedColor undetected_color:3;
  };
  unsigned char led_reg_value;
} MuVsLedConfig;
typedef union {
  struct {
    MuVsCameraZoom zoom:3;
    unsigned char rotate:1;
    MuVsCameraFPS fps:1;
    MuVsCameraWhiteBalance white_balance:2;
    unsigned char awb_locked:1;
  };
  unsigned char camera_reg_value;
} MuVsCameraConfig1;
typedef union {
  struct {
    unsigned char status :1;
    unsigned char default_setting :1;  //!< set 1 to reset vision configuration
    MuVsStreamOutputMode output_mode :2;
    MuVsVisionLevel level :2;
    unsigned char reserve6 :1;
    unsigned char output_enable :1;
  };
  unsigned char vision_config_reg_value;
} MuVsVisionConfig1;
typedef union {
  struct {
    unsigned char proximity_enable:1;
    unsigned char als_enable:1;
    unsigned char color_enable:1;
    unsigned char gesture_enable:1;
    MuVsLsSensitivity sensitivity:2;
    bool white_balance_enable:1;
  };
  unsigned char ls_reg_value;
} MuVsLightSensor;
typedef union {
  struct {
    MuVsLsGesture gesture:7;
    bool detect:1;
  };
  unsigned char ls_gesture_reg_value;
} MuVsLsGestureConfig;
typedef struct {
  unsigned char frame;
  unsigned char detect;
  struct {
    union {
      unsigned char result_data1;
      unsigned char x_value;
      unsigned char color_r_value;
      unsigned char top_x_value;
    };
    union {
      unsigned char result_data2;
      unsigned char y_value;
      unsigned char color_g_value;
      unsigned char top_y_value;
    };
    union {
      unsigned char result_data3;
      unsigned char width;
      unsigned char color_b_value;
      unsigned char bot_x_value;
    };
    union {
      unsigned char result_data4;
      unsigned char height;
      unsigned char bot_y_value;
    };
    union {
      unsigned char result_data5;
      unsigned char color;
      unsigned char label;
    };
  } vision_result[MU_MAX_RESULT];
} MuVsVisionState;

#ifdef __cplusplus
 }
#endif

#endif /* ARDUINO_LIB_MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_ */
