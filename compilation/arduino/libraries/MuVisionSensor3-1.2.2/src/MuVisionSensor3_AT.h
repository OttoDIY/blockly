/*
 * MuVisionSensor3_AT.h
 *
 *  Created on: 2019年9月16日
 *      Author: ysq
 */

#ifndef MUVISIONSENSOR3_AT_H_
#define MUVISIONSENSOR3_AT_H_

#include <stdio.h>
#include <WString.h>
#include "mu_vision_sensor_type.h"

#define MU_BUF_DEEP         50

#define MU_AT_END_LINE      "\r\n"
#define MU_AT_START         "AT"
#define MU_AT_SEPARATOR     '+'
#define MU_AT_PARAM_SEPARATOR     ','
// CMD
#define MU_AT_OK            "OK\r\n"
#define MU_AT_ERROR         "ERROR\r\n"
#define MU_AT_VISION        "MUVISION"
#define MU_AT_WRITE         "MUWRITE"
#define MU_AT_ZOOM          "MUZOOM"
#define MU_AT_AWB           "MUAWB"
#define MU_AT_ROTATE        "MUROTATE"
#define MU_AT_HFPS          "MUHFPS"
#define MU_AT_LED           "MULED"
#define MU_AT_LEVEL         "MULEVEL"
#define MU_AT_DEFAULT       "MUDEF"
#define MU_AT_UARTBAUD      "UARTBAUD"
#define MU_AT_READ          "MUREAD"
#define MU_AT_WRITE         "MUWRITE"
// Wifi
#define MU_AT_WIFISET       "WIFISET"
#define MU_AT_WIFICON       "WIFICON"
#define MU_AT_WIFISIP       "WIFISIP"
#define MU_AT_WIFICIP       "WIFICIP"
#define MU_AT_WIFIUDP       "WIFIUDP"

template<size_t size>
class RingBuffer {
 public:
  size_t available(void) { return len_; }
  int pop(void) {
    int ret = -1;
    if (available()) {
      ret = buf_[start_++];
      if (start_>=size) {
        start_ = 0;
      }
      len_--;
    }
    return ret;
  }
  void push(uint8_t data) {
    if (available()>=size) {
      pop();
    }
    buf_[stop_++] = data;
    if (stop_>=size) {
      stop_ = 0;
    }
    len_++;
  }

 private:
  uint8_t buf_[size];
  size_t len_ = 0;
  size_t start_ = 0;
  size_t stop_ = 0;
};

class MuVisionSensor3_AT {
 public:
  MuVisionSensor3_AT(int (*p_readByte)(void), void (*p_writeByte)(uint8_t));
  virtual ~MuVisionSensor3_AT(void);
  MuVisionSensor3_AT& operator=(const MuVisionSensor3_AT &) = delete;
  MuVisionSensor3_AT(const MuVisionSensor3_AT&) = delete;

  void Default(void);
  uint8_t UartBaud(const char* baud);
  uint8_t Vision(const char* vision, const char* status);
  uint8_t AWB(const char* awb);
  uint8_t Zoom(const char* zoom);
  uint8_t Rotate(const char* status);
  uint8_t HFPS(const char* status);
  uint8_t LED(const char* id, const char* det_color,
              const char* undet_color, const char* brightness);
  uint8_t Level(const char* vision, const char* level);
  uint8_t Read(const char* vision, MuVsVisionState* result);
  uint8_t Write(const char* vision, const char* type, const char* data);

  uint8_t WifiSet(const char* ssid, const char* password, const char* apmode);
  uint8_t WifiCon(const char* status);
  String WifiSIP(void);
  String WifiCIP(void);
  uint8_t WifiUDP(const char* ip, const char* port);

  size_t available(void) { return buf_.available(); }
  int read8(void) {
    if (available()) {
      return buf_.pop();
    } else {
      return readByte();
    }
  }
  void write8(uint8_t c) { writeByte(c); }

 private:
 protected:
  void writeStr(const char buf[]);
  size_t readUntil(char c, char* const buf, size_t len);
  int (*readByte)(void);
  void (*writeByte)(uint8_t);
  RingBuffer<MU_BUF_DEEP> buf_;
};

#endif /* MUVISIONSENSOR_AT_MUVISIONSENSOR_AT_H_ */
