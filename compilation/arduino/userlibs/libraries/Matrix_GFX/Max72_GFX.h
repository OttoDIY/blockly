#ifndef _Max72_GFX_H_
#define _Max72_GFX_H_

#define MAX72_CMD_NOOP 0x00
#define MAX72_CMD_COL0 0x01
#define MAX72_CMD_COL1 0x02
#define MAX72_CMD_COL2 0x03
#define MAX72_CMD_COL3 0x04
#define MAX72_CMD_COL4 0x05
#define MAX72_CMD_COL5 0x06
#define MAX72_CMD_COL6 0x07
#define MAX72_CMD_COL7 0x08
#define MAX72_CMD_DECODEMODE 0x09
#define MAX72_CMD_INTENSITY 0x0A
#define MAX72_CMD_SCANLIMIT 0x0B
#define MAX72_CMD_SHUTDOWN 0x0C
#define MAX72_CMD_DISPLAYTEST 0x0F

#define MAX72_SHUTDOWN_SHUTDOWN 0x00
#define MAX72_SHUTDOWN_NORMALOPERATION 0x01

#define MAX72_DECODE_NODECODE 0x00
#define MAX72_DECODE_DIGIT0 0x01
#define MAX72_DECODE_DIGITS30 0x0F
#define MAX72_DECODE_DIGITS70 0xFF

#define MAX72_DISPLAYTEST_NORMALOPERATION 0x00
#define MAX72_DISPLAYTEST_TESTMODE 0x01

#define MAX72_ALLMATRIX 0

#include <SPI.h>
#include <Matrix_GFX.h>

class Max72_GFX : public Matrix_GFX
{
private:
  uint8_t _data;
  uint8_t _clk;
  uint8_t _cs;
public:
  Max72_GFX(uint8_t data, uint8_t clk, uint8_t cs, uint8_t width, uint8_t height = 1);
  void init();
  void display();
  void setBrightness(uint8_t level, uint8_t index = MAX72_ALLMATRIX);
  void sendCommand(uint8_t command, uint8_t value, uint8_t index = MAX72_ALLMATRIX);
};

#endif