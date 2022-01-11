#ifndef _TM1640_GFX_H_
#define _TM1640_GFX_H_

#define TM1640_CMD_ADDRESS_AUTO B01000000
#define TM1640_CMD_ADDRESS_FIXED B01000100
#define TM1640_CMD_ADDRESS_SET B11000000

#define TM1640_CMD_BRIGHTNESS B10001000    // Add brightness level on 3 bits
#define TM1640_CMD_DISPLAY_ON B10001000
#define TM1640_CMD_DISPLAY_OFF B10000000


#define TM1640_ALLMATRIX 0
#define TM1640_NOVALUE 0xFFFF

#include <SPI.h>
#include <Matrix_GFX.h>

class TM1640_GFX : public Matrix_GFX
{
private:
  uint8_t _data;
  uint8_t _clk;
  void customShiftOut(uint8_t data);
public:
  TM1640_GFX(uint8_t data, uint8_t clk, uint8_t width);
  void init();
  void display();
  void setBrightness(uint8_t level);
  void sendCommand(uint8_t command, bool endTransfer = true);
};

#endif