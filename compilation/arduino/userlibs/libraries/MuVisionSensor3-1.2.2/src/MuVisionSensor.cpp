/*
 * MU.cpp
 *
 *  Created on: 2018年8月3日
 *      Author: ysq
 */

#include "MuVisionSensor.h"
#include <Arduino.h>

MuVisionSensor::MuVisionSensor(uint32_t address)
    : address_(address) {
}

MuVisionSensor::~MuVisionSensor() {
  if (mu_vs_method) {
    delete mu_vs_method;
  }
  for (int i = 1; i < kVisionMaxType; i++) {
    free_vision_buffer(MuVsMessageVisionType(i));
  }
}

uint8_t MuVisionSensor::ProtocolVersionCheck() {
  uint8_t protocol_version = 0;
  int err_count = 0;
  mu_err_t err;
  for (;;) {
    err = mu_vs_method->Get(kRegDeviceId, &protocol_version);
    if (!err && protocol_version==MU_DEVICE_ID) break;
    if (++err_count > 3) return MU_UNKNOW_PROTOCOL;
  }
  // sensor set default if version is correction.
  return SensorSetDefault();
}

uint8_t MuVisionSensor::begin(void* communication_port,
                              MuVsMode mode) {
  switch (mode) {
    case kSerialMode:
      return begin((MuUart::hw_port_t)communication_port);
    case kI2CMode:
      return begin((MuVsI2C*)communication_port);
    default:
      return MU_FAIL;
  }
}
uint8_t MuVisionSensor::begin(MuUart::hw_port_t communication_port) {
  if (mode_ == kSerialMode) {
    return MU_OK;
  }
  if (mu_vs_method) {
    delete mu_vs_method;
    mu_vs_method = nullptr;
  }
  mode_ = kSerialMode;
  mu_vs_method = new MuVsUartMethod((MuUart::hw_port_t)communication_port,
                                    address_);
  // check vs2 protocol version
  return ProtocolVersionCheck();
}
uint8_t MuVisionSensor::begin(MuVsI2C* communication_port) {
  if (mode_ == kI2CMode) {
    return MU_OK;
  }
  if (mu_vs_method) {
    delete mu_vs_method;
    mu_vs_method = nullptr;
  }
  mode_ = kI2CMode;
  mu_vs_method = new MuVisionSensorI2C(communication_port,
                                       address_);
  // check vs2 protocol version
  return ProtocolVersionCheck();
}

//Advance interface
uint8_t MuVisionSensor::VisionBegin(MuVisionType vision_type) {
  mu_err_t err;
  err = VisionSetStatus(vision_type, true);
  if (err) return err;
  delay(20);          // FIXME waiting for vision to initialize, may delete in later version
  err = VisionSetOutputMode(kCallBackMode);
  if (err) return err;
  return MU_OK;
}

uint8_t MuVisionSensor::VisionEnd(MuVisionType vision_type) {
  return VisionSetStatus(vision_type, false);
}

int MuVisionSensor::GetValue(MuVisionType vision_type,
                             MuVsObjectInf object_inf) {
  if (object_inf == kStatus) {
    while((UpdateResult(vision_type, true)&vision_type) == 0);
  }
  return (int)read(vision_type, object_inf);
}

MuVsVisionState* MuVisionSensor::GetVisionState(MuVisionType vision_type) {
  for (unsigned int i = 0; i < kVisionMaxType-1; ++i) {
    if (vision_type & (0x01<<i)) {
      return vision_state_[i];
    }
  }
  return nullptr;
}

uint8_t MuVisionSensor::VisionSetStatus(MuVisionType vision_type, bool enable) {
  mu_err_t err;
  MuVsVisionConfig1 vision_config1;
  for (int i = 1; i < kVisionMaxType; i++) {
    if (vision_type & visionTypeEnumToMacro(i)) {
      err = mu_vs_method->Set(kRegVisionId, i);
      if(err) return err;
      err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      if(err) return err;
      if (vision_config1.status != enable) {
        vision_config1.status = enable;
        err = mu_vs_method->Set(kRegVisionConfig1,
                                vision_config1.vision_config_reg_value);
        if (err) return err;
      }
      if (enable) {
        malloc_vision_buffer(MuVsMessageVisionType(i));
      } else {
        free_vision_buffer(MuVsMessageVisionType(i));
      }
      output_mode_ = vision_config1.output_mode;
    }
  }
  return MU_OK;
}

uint8_t MuVisionSensor::VisionSetOutputMode(MuVsStreamOutputMode mode) {
  mu_err_t err;
  MuVsVisionConfig1 vision_config1;
  output_mode_ = mode;
  for (int i = 1; i < kVisionMaxType; ++i) {
    if (vision_state_[i-1] != nullptr) {
      err = mu_vs_method->Set(kRegVisionId, i);
      if(err) return err;
      err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      if (err) return err;
      if (vision_config1.output_mode != mode) {
        vision_config1.output_mode = mode;
        err = mu_vs_method->Set(kRegVisionConfig1,
                                vision_config1.vision_config_reg_value);
        if (err) return err;
      }
    }
  }
  return MU_OK;
}

uint8_t MuVisionSensor::VisionSetOutputEnable(MuVisionType vision_type, bool status) {
  mu_err_t err;
  MuVsVisionConfig1 vision_config1;
  for (int i = 1; i < kVisionMaxType; ++i) {
    if (vision_type & visionTypeEnumToMacro(i)) {
      err = mu_vs_method->Set(kRegVisionId, i);
      if(err) return err;
      err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      if (err) return err;
      if (vision_config1.output_enable != status) {
        vision_config1.output_enable = status;
        err = mu_vs_method->Set(kRegVisionConfig1,
                                vision_config1.vision_config_reg_value);
        if (err) return err;
      }
    }
  }
  return MU_OK;
}

uint8_t MuVisionSensor::VisionSetDefault(MuVisionType vision_type) {
  mu_err_t err;
  MuVsVisionConfig1 vision_config1;
  for (int i = 1; i < kVisionMaxType; ++i) {
    if (vision_type & visionTypeEnumToMacro(i)) {
      err = mu_vs_method->Set(kRegVisionId, i);
      if(err) return err;
      err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      if (err) return err;
      vision_config1.default_setting = 1;
      err = mu_vs_method->Set(kRegVisionConfig1,
                              vision_config1.vision_config_reg_value);
      if (err) return err;
      while (vision_config1.default_setting) {
        err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
        if (err) return err;
      }
    }
  }
  return MU_OK;
}

uint8_t MuVisionSensor::VisionSetLevel(MuVisionType vision_type,
                                       MuVsVisionLevel level) {
  mu_err_t err;
  MuVsVisionConfig1 vision_config1;
  for (int i = 1; i < kVisionMaxType; ++i) {
    if (vision_type & visionTypeEnumToMacro(i)) {
      err = mu_vs_method->Set(kRegVisionId, i);
      if(err) return err;
      err = mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      if (err) return err;
      if (vision_config1.level != level) {
        vision_config1.level = level;
        err = mu_vs_method->Set(kRegVisionConfig1,
                                vision_config1.vision_config_reg_value);
        if (err) return err;
      }
    }
  }
  return MU_OK;
}

bool MuVisionSensor::VisionGetStatus(MuVisionType vision_type) {
  uint8_t vision_status1 = 0;
  mu_vs_method->Get(kRegVisionConfig1, &vision_status1);
  return vision_type&vision_status1;
}

MuVsVisionLevel MuVisionSensor::VisionGetLevel(MuVisionType vision_type) {
  MuVsVisionConfig1 vision_config1;
  for (int i = 1; i < kVisionMaxType; ++i) {
    if (vision_type & visionTypeEnumToMacro(i)) {
      mu_vs_method->Set(kRegVisionId, i);
      mu_vs_method->Get(kRegVisionConfig1, &vision_config1.vision_config_reg_value);
      return vision_config1.level;
    }
  }
  return kLevelDefault;
}

MuVsStreamOutputMode MuVisionSensor::VisionGetOutputMode(void) {
  return output_mode_;
}

MuVisionType MuVisionSensor::UpdateResult(MuVisionType vision_type,
                                          bool wait_all_result) {
  switch (mode_) {
    case kSerialMode:
      return UartUpdateResult(vision_type, wait_all_result);
    case kI2CMode: {
      mu_err_t err;
      MuVisionType vision_type_output = 0;
      MuVsVisionState vision_state;
      err = mu_vs_method->Get(kRegFrameCount, &vision_state.frame);
      if (err) return vision_type_output;
      for (uint8_t i = 1; i < kVisionMaxType; ++i) {
        if ((vision_type & visionTypeEnumToMacro(i)) && vision_state_[i-1]) {
          if (vision_state.frame != vision_state_[i-1]->frame) {
            SensorLockReg(true);
            err = ((MuVisionSensorI2C *) mu_vs_method)->Read(
                (MuVsMessageVisionType) i, &vision_state);
            if (err) return vision_type_output;
            SensorLockReg(false);
            *vision_state_[i-1] = vision_state;
            vision_type_output = vision_type_output | visionTypeEnumToMacro(i);
          }
        }
      }
      return vision_type_output;
    }
    default:
      return UartUpdateResult(vision_type, wait_all_result);
      break;
  }
}

MuVisionType MuVisionSensor::UartUpdateResult(MuVisionType vision_type,
                                              bool wait_all_result) {
  MuVisionType vision_detect = 0;
  MuVsVisionState vision_state;
  MuVsMessageVisionType mu_vision_type;
  mu_err_t err;
  switch(output_mode_) {
    case kCallBackMode: {
      for (int i = 1; i < kVisionMaxType; ++i) {
        if ((vision_type & visionTypeEnumToMacro(i)) && vision_state_[i-1]) {
          ((MuVsUartMethod *)mu_vs_method)->GetMessage((MuVsMessageVisionType)i);
          do {
            err = ((MuVsUartMethod *)mu_vs_method)->Read(&mu_vision_type, &vision_state);
            if (err) return vision_detect;
            if ((vision_type & visionTypeEnumToMacro(mu_vision_type))
                && vision_state_[mu_vision_type-1]->frame != vision_state.frame
                && mu_vision_type
                && mu_vision_type < kVisionMaxType) {
              *vision_state_[mu_vision_type-1] = vision_state;
              vision_type = vision_type&(~visionTypeEnumToMacro(mu_vision_type));
              vision_detect = vision_detect | visionTypeEnumToMacro(mu_vision_type);
              if (mu_vision_type == i && !wait_all_result) return vision_detect;
            }
          } while (mu_vision_type != i);
        }
      }
      break;
    }
    case kDataFlowMode:
    case kEventMode:
      while (vision_type) {
        err = ((MuVsUartMethod *)mu_vs_method)->Read(&mu_vision_type, &vision_state);
        if (err) return vision_detect;
        if ((vision_type & visionTypeEnumToMacro(mu_vision_type))
            && mu_vision_type
            && mu_vision_type < kVisionMaxType
            && vision_state_[mu_vision_type-1]) {
          vision_state_[mu_vision_type-1]->detect = vision_state.detect;
          vision_state_[mu_vision_type-1]->frame = vision_state.frame;
          for (int i = 0; i < vision_state.detect; i++) {
            vision_state_[mu_vision_type-1]->vision_result[i] = vision_state.vision_result[i];
          }
          vision_type = vision_type&(~visionTypeEnumToMacro(mu_vision_type));
          vision_detect = vision_detect | visionTypeEnumToMacro(mu_vision_type);
          if (!wait_all_result) return vision_detect;
        }
      }
      break;
    default:
      return vision_detect;
  }
  return vision_detect;
}

uint8_t MuVisionSensor::write(MuVisionType vision_type,
                              MuVsObjectInf object_inf,
                              uint8_t value) {
  mu_err_t err;
  MuVsRegAddress address;
  uint8_t vs_type = 1;
  while ((vision_type&0x01) == 0
      && vs_type < kVisionMaxType) {
    ++vs_type;
    vision_type >>= 1;
  }
  switch(object_inf) {
    case kRValue:
    case kXValue:
      address = kRegParamValue1;
      break;
    case kGValue:
    case kYValue:
      address = kRegParamValue2;
      break;
    case kBValue:
    case kWidthValue:
      address = kRegParamValue3;
      break;
    case kHeightValue:
      address = kRegParamValue4;
      break;
    case kLabel:
      address = kRegParamValue5;
      break;
    default:
      return MU_FAIL;
  }
  err = mu_vs_method->Set(kRegVisionId, vs_type);
  if (err) return err;
  return mu_vs_method->Set(address, value);
}

uint8_t MuVisionSensor::read(MuVisionType vision_type,
                             MuVsObjectInf object_inf,
                             uint8_t result_num) {
  result_num = result_num ? (result_num-1):1;
  result_num = result_num>MU_MAX_RESULT ? MU_MAX_RESULT:result_num;
  uint8_t vision_pointer = 0;
  while ((vision_type&0x01) == 0) {
    vision_type = vision_type>>1;
    vision_pointer++;
  }
  if (!vision_state_[vision_pointer] || vision_pointer >= kVisionMaxType) return 0;
  switch(object_inf) {
    case kStatus:
      return vision_state_[vision_pointer]->detect;
    case kXValue:
      return vision_state_[vision_pointer]->vision_result[result_num].x_value;
    case kYValue:
      return vision_state_[vision_pointer]->vision_result[result_num].y_value;
    case kWidthValue:
      return vision_state_[vision_pointer]->vision_result[result_num].width;
    case kHeightValue:
      return vision_state_[vision_pointer]->vision_result[result_num].height;
    case kLabel:
      return vision_state_[vision_pointer]->vision_result[result_num].label;
    case kGValue:
      return vision_state_[vision_pointer]->vision_result[result_num].color_g_value;
    case kRValue:
      return vision_state_[vision_pointer]->vision_result[result_num].color_r_value;
    case kBValue:
      return vision_state_[vision_pointer]->vision_result[result_num].color_b_value;
    default:
      return 0;
  }
}

uint8_t MuVisionSensor::SensorSetRestart(void) {
  mu_err_t err;
  err = mu_vs_method->Set(kRegRestart, 1);
  return err;
}

uint8_t MuVisionSensor::SensorSetDefault(void) {
  MuVsSensorConfig1 sensor_config1;
  mu_err_t err;
  sensor_config1.sensor_config_reg_value = 0;
  sensor_config1.default_setting = 1;
  err = mu_vs_method->Set(kRegSensorConfig1, sensor_config1.sensor_config_reg_value);
  while (sensor_config1.default_setting) {
    err = mu_vs_method->Get(kRegSensorConfig1, &sensor_config1.sensor_config_reg_value);
    if (err) return err;
  }
  return err;
}

uint8_t MuVisionSensor::SensorLockReg(bool lock) {
  mu_err_t err;
  err = mu_vs_method->Set(kRegLock, lock);
  return err;
}

//LED functions
uint8_t MuVisionSensor::LedSetMode(MuVsLed led, bool manual, bool hold) {
  MuVsLedConfig led_config;
  MuVsRegAddress address;
  mu_err_t err;
  switch(led) {
    case kLed1:
      address = kRegLed1;
      break;
    case kLed2:
      address = kRegLed2;
      break;
    case kLedAll:
      err = this->LedSetMode(kLed1, manual, hold);
      if (err) return err;
      err = this->LedSetMode(kLed2, manual, hold);
      return err;
    default:
      return MU_UNKNOW_PARAM;
  }
  err = mu_vs_method->Get(address, &led_config.led_reg_value);
  if (err) return err;
  if (led_config.manual != manual
      || led_config.hold != hold) {
    led_config.manual = manual;
    led_config.hold = hold;
    err = mu_vs_method->Set(address, led_config.led_reg_value);
    if (err) return err;
  }

  return err;
}

uint8_t MuVisionSensor::LedSetColor(MuVsLed led,
                                    MuVsLedColor detected_color,
                                    MuVsLedColor undetected_color,
                                    uint8_t level) {
  MuVsLedConfig led_config;
  MuVsRegAddress address;
  mu_err_t err;
  uint8_t led_level;
  // set LED brightness level
  mu_vs_method->Get(kRegLedLevel, &led_level);
  switch(led) {
    case kLed1:
      address = kRegLed1;
      led_level = (led_level&0xF0) | (level&0x0F);
      mu_vs_method->Set(kRegLedLevel, led_level);
      break;
    case kLed2:
      address = kRegLed2;
      led_level = (led_level&0x0F) | ((level&0x0F)<<4);
      mu_vs_method->Set(kRegLedLevel, led_level);
      break;
    case kLedAll:
      err = this->LedSetColor(kLed1, detected_color,
                              undetected_color, level);
      if (err) return err;
      err = this->LedSetColor(kLed2, detected_color,
                              undetected_color, level);
      return err;
    default:
      return MU_UNKNOW_PARAM;
  }
  // set LED color
  err = mu_vs_method->Get(address, &led_config.led_reg_value);
  if (err) return err;
  if (led_config.detected_color != detected_color
      || led_config.undetected_color != undetected_color) {
    led_config.detected_color = detected_color;
    led_config.undetected_color = undetected_color;
    err = mu_vs_method->Set(address, led_config.led_reg_value);
    if (err) return err;
  }

  return err;
}

//Camera functions
uint8_t MuVisionSensor::CameraSetZoom(MuVsCameraZoom zoom) {
  MuVsCameraConfig1 camera_config1;
  mu_err_t err;
  err = mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  if (camera_config1.zoom != zoom) {
    camera_config1.zoom = zoom;
    err = mu_vs_method->Set(kRegCameraConfig1, camera_config1.camera_reg_value);
  }
  return err;
}

uint8_t MuVisionSensor::CameraSetRotate(bool enable) {
  MuVsCameraConfig1 camera_config1;
  mu_err_t err;
  err = mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  if (camera_config1.rotate != enable) {
    camera_config1.rotate = enable;
    err = mu_vs_method->Set(kRegCameraConfig1, camera_config1.camera_reg_value);
  }
  return err;
}

uint8_t MuVisionSensor::CameraSetFPS(MuVsCameraFPS fps) {
  MuVsCameraConfig1 camera_config1;
  mu_err_t err;
  err = mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  if (camera_config1.fps != fps) {
    camera_config1.fps = fps;
    err = mu_vs_method->Set(kRegCameraConfig1, camera_config1.camera_reg_value);
  }
  return err;
}

uint8_t MuVisionSensor::CameraSetAwb(MuVsCameraWhiteBalance awb) {
  MuVsCameraConfig1 camera_config1;
  mu_err_t err;
  err = mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  if (awb == kLockWhiteBalance) {
    camera_config1.awb_locked = 0;
    camera_config1.white_balance = awb;
    err = mu_vs_method->Set(kRegCameraConfig1, camera_config1.camera_reg_value);
    // waiting for lock white balance
    do {
      err = mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
    } while (camera_config1.awb_locked == 0);
  } else if (camera_config1.white_balance != awb) {
    camera_config1.white_balance = awb;
    err = mu_vs_method->Set(kRegCameraConfig1, camera_config1.camera_reg_value);
  }
  return err;
}

MuVsCameraZoom MuVisionSensor::CameraGetZoom(void) {
  MuVsCameraConfig1 camera_config1;
  mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  return camera_config1.zoom;
}

MuVsCameraWhiteBalance MuVisionSensor::CameraGetAwb(void) {
  MuVsCameraConfig1 camera_config1;
  mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  return camera_config1.white_balance;
}

bool MuVisionSensor::CameraGetRotate(void) {
  MuVsCameraConfig1 camera_config1;
  mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  return camera_config1.rotate;
}

MuVsCameraFPS MuVisionSensor::CameraGetFPS(void) {
  MuVsCameraConfig1 camera_config1;
  mu_vs_method->Get(kRegCameraConfig1, &camera_config1.camera_reg_value);
  return camera_config1.fps;
}

//Uart functions
uint8_t MuVisionSensor::UartSetBaudrate(MuVsBaudrate baud) {
  mu_err_t err;
  MuVsUartConfig uart_config;
  err = mu_vs_method->Get(kRegUart, &uart_config.uart_reg_value);
  if (uart_config.baudrate != baud) {
    uart_config.baudrate = baud;
    mu_vs_method->Set(kRegUart, uart_config.uart_reg_value);
  }
  return err;
}

// Light sensor functions
uint8_t MuVisionSensor::LsBegin(MuLightSensorType ls_type) {
  mu_err_t err = MU_OK;
  MuVsLightSensor ls_config;
  err = mu_vs_method->Get(kRegLightSensor, &ls_config.ls_reg_value);
  if (err) return err;
  ls_config.ls_reg_value |= ls_type;
  err = mu_vs_method->Set(kRegLightSensor, ls_config.ls_reg_value);
  return err;
}

uint8_t MuVisionSensor::LsEnd(MuLightSensorType ls_type) {
  mu_err_t err = MU_OK;
  MuVsLightSensor ls_config;
  ls_type = ~(ls_type & 0x0F);
  err = mu_vs_method->Get(kRegLightSensor, &ls_config.ls_reg_value);
  if (err) return err;
  ls_config.ls_reg_value &= ls_type;
  err = mu_vs_method->Set(kRegLightSensor, ls_config.ls_reg_value);
  return err;
}

uint8_t MuVisionSensor::LsSetSensitivity(MuVsLsSensitivity sensitivity) {
  if (sensitivity > kSensitivity3) {
    return MU_FAIL;
  }
  mu_err_t err = MU_OK;
  MuVsLightSensor ls_config;
  err = mu_vs_method->Get(kRegLightSensor, &ls_config.ls_reg_value);
  ls_config.sensitivity = sensitivity;
  err = mu_vs_method->Set(kRegLightSensor, ls_config.ls_reg_value);
  return err;
}

uint8_t MuVisionSensor::LsWhiteBalanceEnable() {
  mu_err_t err = MU_OK;
  MuVsLightSensor ls_config;
  err = mu_vs_method->Get(kRegLightSensor, &ls_config.ls_reg_value);
  ls_config.white_balance_enable = 1;
  err = mu_vs_method->Set(kRegLightSensor, ls_config.ls_reg_value);
  do {
    mu_vs_method->Get(kRegLightSensor, &ls_config.ls_reg_value);
  } while (ls_config.white_balance_enable);
  return err;
}

uint8_t MuVisionSensor::LsReadProximity() {
  uint8_t proximity = 0;
  mu_vs_method->Get(kRegLsProximity, &proximity);
  return proximity;
}

uint16_t MuVisionSensor::LsReadAmbientLight() {
  uint8_t als[2] = {0};
  uint16_t* ret = (uint16_t *)als;
  mu_vs_method->Get(kRegLsAlsL, &als[0]);
  mu_vs_method->Get(kRegLsAlsH, &als[1]);
  return *ret;
}

uint16_t MuVisionSensor::LsReadColor(MuVsLsColorType color_t) {
  uint8_t ret = 0;
  switch(color_t) {
    case kLsColorLabel: {
      mu_vs_method->Get(kRegLsColor, &ret);
      break;
    }
    case kLsColorRed: {
      mu_vs_method->Get(kRegLsColorRed, &ret);
      break;
    }
    case kLsColorGreen: {
      mu_vs_method->Get(kRegLsColorGreen, &ret);
      break;
    }
    case kLsColorBlue: {
      mu_vs_method->Get(kRegLsColorBlue, &ret);
      break;
    }
    case kLsColorHue: {
      uint8_t hue8[2];
      uint16_t* hue16 = (uint16_t*)hue8;
      mu_vs_method->Get(kRegLsColorHueL, &hue8[0]);
      mu_vs_method->Get(kRegLsColorHueH, &hue8[1]);
      return *hue16;
    }
    case kLsColorSaturation: {
      mu_vs_method->Get(kRegLsColorSaturation, &ret);
      break;
    }
    case kLsColorValue: {
      mu_vs_method->Get(kRegLsColorValue, &ret);
      break;
    }
    default:
      break;
  }
  return ret;
}

uint16_t MuVisionSensor::LsReadRawColor(MuVsLsRawColorType color_t) {
  uint8_t ret8[2];
  uint16_t* ret16 = (uint16_t*)ret8;
  switch(color_t) {
    case kLsRawColorRed:
      mu_vs_method->Get(kRegLsRawColorRedL, &ret8[0]);
      mu_vs_method->Get(kRegLsRawColorRedH, &ret8[1]);
      break;
    case kLsRawColorGreen:
      mu_vs_method->Get(kRegLsRawColorGreenL, &ret8[0]);
      mu_vs_method->Get(kRegLsRawColorGreenH, &ret8[1]);
      break;
    case kLsRawColorBlue:
      mu_vs_method->Get(kRegLsRawColorBlueL, &ret8[0]);
      mu_vs_method->Get(kRegLsRawColorBlueH, &ret8[1]);
      break;
    default:
      break;
  }
  return *ret16;
}

MuVsLsGesture MuVisionSensor::LsReadGesture() {
  MuVsLsGestureConfig gesture_config;
  MuVsLsGesture gesture;
  mu_vs_method->Get(kRegLsGesture, &gesture_config.ls_gesture_reg_value);
  gesture = gesture_config.gesture;
  if (gesture_config.gesture) {
    gesture_config.gesture = kGestureNone;
    mu_vs_method->Set(kRegLsGesture, gesture_config.ls_gesture_reg_value);
  }
  if (gesture > kGesturePull) {
    gesture = kGestureNone;
  }
  return gesture;
}

bool MuVisionSensor::malloc_vision_buffer(MuVsMessageVisionType vision_type) {
  if (vision_type
      && vision_type < kVisionMaxType
      && vision_state_[vision_type-1] == nullptr) {
    vision_state_[vision_type-1] = new MuVsVisionState;
    return vision_state_[vision_type-1];
  }
  return false;
}

bool MuVisionSensor::free_vision_buffer(MuVsMessageVisionType vision_type) {
  if (vision_type
      && vision_type < kVisionMaxType
      && vision_state_[vision_type-1]) {
    delete vision_state_[vision_type-1];
    vision_state_[vision_type-1] = nullptr;
  }
  return true;
}



