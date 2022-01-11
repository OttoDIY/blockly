#ifndef _HT16K33_GFX_H_
#define _HT16K33_GFX_H_

#define HT16K33_CMD_OSCILLATOR 0x20
#define HT16K33_VAL_OSCOFF 0x0
#define HT16K33_VAL_OSCON 0x1

#define HT16K33_CMD_DISPLAYSETUP 0x80
#define HT16K33_VAL_DISPLAYOFF 0x0
#define HT16K33_VAL_DISPLAYON 0x1
#define HT16K33_VAL_BLINKOFF  0x0
#define HT16K33_VAL_BLINKO2HZ 0x2
#define HT16K33_VAL_BLINK1HZ 0x4
#define HT16K33_VAL_BLINK05HZ 0x6

#define HT16K33_CMD_DIMMING 0xEF




#define HT16K33_ALLMATRIX 0
#define HT16K33_NOVALUE 0xFFFF

#include <Matrix_GFX.h>
#include <Wire.h>

class HT16K33_GFX : public Matrix_GFX
{
private:
  uint8_t _i2caddr;
  void sendCommand(uint8_t c);
  byte flipByte(uint8_t c);
public:
  HT16K33_GFX(uint8_t width, uint8_t i2caddr=0x70);
  void init();
  void display();
  void setBrightness(uint8_t level);
};

#endif