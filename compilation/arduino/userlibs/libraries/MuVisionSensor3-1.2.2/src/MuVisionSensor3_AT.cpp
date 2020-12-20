/*
 * MuVisionSensor_AT.c
 *
 *  Created on: 2019年9月16日
 *      Author: ysq
 */

#include "MuVisionSensor3_AT.h"
#include <Arduino.h>

MuVisionSensor3_AT::MuVisionSensor3_AT(int (*p_readByte)(void),
                                       void (*p_writeByte)(uint8_t))
  : readByte(p_readByte),
    writeByte(p_writeByte) {}

MuVisionSensor3_AT::~MuVisionSensor3_AT(void) {}

void MuVisionSensor3_AT::Default(void) {
  writeStr(MU_AT_START "+" MU_AT_DEFAULT MU_AT_END_LINE);
  while(readByte() != '\n');
}

uint8_t MuVisionSensor3_AT::UartBaud(const char* baud) {
  writeStr(MU_AT_START "+" MU_AT_UARTBAUD "=");
  writeStr(baud);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::AWB(const char* awb) {
  writeStr(MU_AT_START "+" MU_AT_AWB "=");
  writeStr(awb);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::Zoom(const char* zoom) {
  writeStr(MU_AT_START "+" MU_AT_ZOOM "=");
  writeStr(zoom);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::Rotate(const char* status) {
  writeStr(MU_AT_START "+" MU_AT_ROTATE "=");
  writeStr(status);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::HFPS(const char* status) {
  writeStr(MU_AT_START "+" MU_AT_HFPS "=");
  writeStr(status);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::LED(const char* id,
                                const char* det_color,
                                const char* undet_color,
                                const char* brightness) {
  writeStr(MU_AT_START "+" MU_AT_LED "=");
  writeStr(id);
  writeByte(',');
  writeStr(det_color);
  writeByte(',');
  writeStr(undet_color);
  writeByte(',');
  writeStr(brightness);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+25] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::Level(const char* vision, const char* level) {
  writeStr(MU_AT_START "+" MU_AT_LEVEL "=");
  writeStr(vision);
  writeByte(',');
  writeStr(level);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::Vision(const char* vision, const char* status) {
  writeStr(MU_AT_START "+" MU_AT_VISION "=");
  writeStr(vision);
  writeByte(MU_AT_PARAM_SEPARATOR);
  writeStr(status);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::Read(const char* vision, MuVsVisionState* result) {
  writeStr(MU_AT_START "+" MU_AT_READ "=");
  for(size_t i = 0; i < strlen(vision); ++i) {
    writeByte(vision[i]);
  }
  writeStr(",0" MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+1] = {0};
  size_t read_len = readUntil('+', buf, sizeof(buf));
  size_t i = 0;
  for (i = 0; i < read_len; i++) {
    if (buf[i] != '+') {
      buf_.push(buf[i]);
    } else {
      break;
    }
  }
  if (buf[i] != '+') {
    return 1;
  }
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->frame = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->detect = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->vision_result[0].x_value = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->vision_result[0].y_value = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->vision_result[0].width = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil(MU_AT_PARAM_SEPARATOR, buf, sizeof(buf));
  result->vision_result[0].height = (buf[read_len-3]-'0')*10+buf[read_len-2]-'0';
  read_len = readUntil('\n', buf, sizeof(buf));
  result->vision_result[0].label = (buf[read_len-4]-'0')*10+buf[read_len-3]-'0';
  memset(buf, 0, sizeof(buf));
  read_len = readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  } else if (!strcmp(buf, MU_AT_ERROR)) {
    readUntil('\n', buf, sizeof(buf));
    return 1;
  }
  return 1;
}

uint8_t MuVisionSensor3_AT::Write(const char* vision,
                                  const char* type,
                                  const char* data) {
  writeStr(MU_AT_START "+" MU_AT_WRITE "=");
  writeStr(vision);
  writeByte(',');
  writeStr(type);
  writeByte(',');
  writeStr(data);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  size_t buf_len = readUntil('\n', buf, sizeof(buf));
  if (strstr(buf, MU_AT_OK)) {
    for (size_t i = 0; i < buf_len; ++i) {
      if (buf[i] == MU_AT_OK[0] && buf[i+1] == MU_AT_OK[1]) {
        break;
      } else {
        buf_.push(buf[i]);
      }
    }
    return 0;
  } else if (strstr(buf, "+MUWRITE:")) {
    readUntil('\n', buf, sizeof(buf));    // read "ERROR\r\n"
    return 1;
  }
  return 2;
}

uint8_t MuVisionSensor3_AT::WifiSet(const char* ssid, const char* password, const char* apmode) {
  writeStr(MU_AT_START "+" MU_AT_WIFISET "=");
  writeStr(ssid);
  writeByte(MU_AT_PARAM_SEPARATOR);
  writeStr(password);
  writeByte(MU_AT_PARAM_SEPARATOR);
  writeStr(apmode);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

uint8_t MuVisionSensor3_AT::WifiCon(const char* status) {
  writeStr(MU_AT_START "+" MU_AT_WIFICON "=");
  writeStr(status);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));   // waiting for connecting
  size_t err_count = 0;
  for (;;) {
    memset(buf, 0, sizeof(buf));
    readUntil('\n', buf, sizeof(buf));
    if (!strcmp(buf, MU_AT_OK)) {
      return 0;
    } else if (!strcmp(buf, MU_AT_ERROR)) {
      return 1;
    }
    if (++err_count > 15) {
      return 1;
    }
  }
  return 1;
}

String MuVisionSensor3_AT::WifiSIP(void) {
  writeStr(MU_AT_START "+" MU_AT_WIFISIP MU_AT_END_LINE);
  char buf[MU_BUF_DEEP] = {0};
  readUntil('\n', buf, sizeof(buf));   // waiting for connecting
  size_t len = strspn(buf, "+WIFISIP:");
  String sip = buf+len;
  sip.replace('\r', 0);
  while(readByte() != '\n');
  return sip;
}
String MuVisionSensor3_AT::WifiCIP(void) {
  writeStr(MU_AT_START "+" MU_AT_WIFICIP MU_AT_END_LINE);
  char buf[MU_BUF_DEEP] = {0};
  readUntil('\n', buf, sizeof(buf));   // waiting for connecting
  size_t len = strspn(buf, "+WIFICIP:");
  String cip = buf+len;
  cip.replace('\r', 0);
  while(readByte() != '\n');
  return cip;
}
uint8_t MuVisionSensor3_AT::WifiUDP(const char* ip, const char* port) {
  writeStr(MU_AT_START "+" MU_AT_WIFIUDP "=");
  writeStr(ip);
  writeByte(MU_AT_PARAM_SEPARATOR);
  writeStr(port);
  writeStr(MU_AT_END_LINE);
  char buf[MU_BUF_DEEP+20] = {0};
  readUntil('\n', buf, sizeof(buf));
  if (!strcmp(buf, MU_AT_OK)) {
    return 0;
  }
  readUntil('\n', buf, sizeof(buf));
  return 1;
}

void MuVisionSensor3_AT::writeStr(const char buf[]) {
  size_t len = strlen(buf);
  for (size_t i = 0; i < len; ++i) {
    writeByte(buf[i]);
  }
}

size_t MuVisionSensor3_AT::readUntil(char c, char* const buf, size_t len) {
  size_t read_len = 0;
  int temp;
  while (read_len < len) {
    temp = readByte();
    if (temp >= 0) {
      buf[read_len++] = temp;
      if (temp == c) {
        break;
      }
    } else {
      break;
    }
  }
  return read_len;
}



