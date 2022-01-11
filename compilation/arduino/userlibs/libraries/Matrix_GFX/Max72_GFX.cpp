#ifdef __AVR__
#include <avr/pgmspace.h>
#elif defined(ESP8266) || defined(ESP32)
#include <pgmspace.h>
#else
#define pgm_read_byte(addr) \
  (*(const unsigned char *)(addr)) ///< PROGMEM workaround for non-AVR
#endif

#include "Max72_GFX.h"

/*!
  @brief Constructor for MAX7219 matrix display
  @param data
         Data pin
  @param clk
         Clock pin
  @param cs
         Chip select pin
  @param count
         Number of 8x8 matrix displays

*/
Max72_GFX::Max72_GFX(uint8_t data, uint8_t clk, uint8_t cs, uint8_t width, uint8_t height)
    : Matrix_GFX(width, height)
{
  _data = data;
  _clk = clk;
  _cs = cs;
}

/**
 * @brief Initialize/configure the display after startup
 * 
 */
void Max72_GFX::init()
{
  pinMode(_data, OUTPUT);
  pinMode(_clk, OUTPUT);
  pinMode(_cs, OUTPUT);
  // enable (go out of shutdown shutdown)
  sendCommand(MAX72_CMD_SHUTDOWN, MAX72_SHUTDOWN_NORMALOPERATION);
  // set default brightness around half value
  setBrightness(0x08);
  // no test mode
  sendCommand(MAX72_CMD_DISPLAYTEST, MAX72_DISPLAYTEST_NORMALOPERATION);
  // no decode
  sendCommand(MAX72_CMD_DECODEMODE, MAX72_DECODE_NODECODE);
  // scan limit at 7 as we use 8 columns (0->7) in each matrix
  sendCommand(MAX72_CMD_SCANLIMIT, 7);
  // display buffer
  display();
}

/**
 * @brief Sets brightness of the matrix
 * @param level Intensity level of the display from 0 to 15
 * @param index Index of matrix to apply luminosity to
 *           Default = MAX72_ALLMATRIX, will apply to all matrix connected
 */
void Max72_GFX::setBrightness(uint8_t level, uint8_t index)
{
  sendCommand(MAX72_CMD_INTENSITY, level, index);
}

/**
    @brief  Sends a command to the display
    @return None (void).
    @param  command
            MAX72_CMD_xxxxx value from the list of commands in h file
    @param  value
            value/data passed to the command
    @param  index
            Index of matrix to apply luminosity to
            Default = MAX72_ALLMATRIX, will apply to all matrix connected
*/
void Max72_GFX::sendCommand(uint8_t command, uint8_t value, uint8_t index)
{
  // Start transfer, set _cs pin low
  digitalWrite(_cs, LOW);
  // Command must be sent for each led module
  for (uint8_t m = _count; m > 0; m--)
  {
    shiftOut(_data, _clk, MSBFIRST, ((index == MAX72_ALLMATRIX) || (index == m)) ? command : 0);
    shiftOut(_data, _clk, MSBFIRST, ((index == MAX72_ALLMATRIX) || (index == m)) ? value : 0);
  }
  // End transfer
  digitalWrite(_cs, HIGH);
}

/**
    @brief  Sends the content of the memory buffer to the display
            All data is sent for all display matrix
    @return None (void).
*/
void Max72_GFX::display()
{
  // We loop for each column of the matrix
  for (int col = MAX72_CMD_COL0; col <= MAX72_CMD_COL7; col++)
  {
    // Start transfer, set _cs pin low
    digitalWrite(_cs, LOW);
    // Command must be sent for each led module
    for (uint8_t m = _count; m > 0; m--)
    {
      shiftOut(_data, _clk, MSBFIRST, col);
      shiftOut(_data, _clk, MSBFIRST, _buffer[(m -1) * 8 + col - 1]);
    }
    // End transfer
    digitalWrite(_cs, HIGH);
  }
}
