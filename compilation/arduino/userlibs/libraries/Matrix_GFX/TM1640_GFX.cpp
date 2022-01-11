#ifdef __AVR__
#include <avr/pgmspace.h>
#elif defined(ESP8266) || defined(ESP32)
#include <pgmspace.h>
#else
#define pgm_read_byte(addr) \
  (*(const unsigned char *)(addr)) ///< PROGMEM workaround for non-AVR
#endif

#include "TM1640_GFX.h"

/**
  @brief Constructor for TM1640 matrix display
  @param data
         Data pin
  @param clk
         Clock pin
  @param cs
         Chip select pin
  @param count
         Number of 8x8 matrix displays

*/
TM1640_GFX::TM1640_GFX(uint8_t data, uint8_t clk, uint8_t width)
    : Matrix_GFX(width, 1)
{
  _data = data;
  _clk = clk;
}

/**
 * @brief Initialize/configure the display after startup
 * 
 */
void TM1640_GFX::init()
{
  pinMode(_data, OUTPUT);
  pinMode(_clk, OUTPUT);
  // set default brightness around half value
  setBrightness(0x04);
  // display buffer
  display();
}

/**
 * @brief Sets brightness of the matrix
 * @param level Intensity level of the display from 0 to 15
 * @param index Index of matrix to apply luminosity to
 *           Default = TM1640_ALLMATRIX, will apply to all matrix connected
 */
void TM1640_GFX::setBrightness(uint8_t level)
{
  // we only keep only the 3 lower bits for level
  sendCommand(TM1640_CMD_BRIGHTNESS | (level & 0x07), true);
}

void TM1640_GFX::customShiftOut(uint8_t data)
{
  // shiftout is not working properly as the LOW->HIGH clock transition is reversed
  //  compared to what the TM1640 is expecting, so we have to customize the function
  // shiftOut(_data, _clk, LSBFIRST, data);
  for (uint8_t b = 0; b < 8; b++)
  {
    digitalWrite(_clk, LOW);
    digitalWrite(_data, data & (1 << b) ? HIGH : LOW);
    digitalWrite(_clk, HIGH);
  }
}

/**
    @brief  Sends a command to the display
    @return None (void).
    @param  command
            TM1640_CMD_xxxxx value from the list of commands in h file
*/
void TM1640_GFX::sendCommand(uint8_t command, bool endTransfer)
{
  // From datasheet: Start transfer, set data and clk pin low
  digitalWrite(_data, LOW);
  customShiftOut(command);
  if (endTransfer)
  {
    digitalWrite(_clk, LOW);
    digitalWrite(_data, LOW);
  }
  // From datasheet: End command transfer, set data and clk pin high
  digitalWrite(_clk, HIGH);
  digitalWrite(_data, HIGH);
}

/**
    @brief  Sends the content of the memory buffer to the display
            All data is sent for all display matrix
    @return None (void).
*/
void TM1640_GFX::display()
{
  // Set auto address
  sendCommand(TM1640_CMD_ADDRESS_AUTO);
  // Set address at 0
  sendCommand(TM1640_CMD_ADDRESS_SET, false);
  // From datasheet: Start transfer, set data and clk pin low
  digitalWrite(_data, LOW);
  for (int c = 0; c < _count * 8; c++)
  {
    customShiftOut(_buffer[c]);
  }
  // From datasheet: End command transfer, set data and clk pin high
  digitalWrite(_data, HIGH);
}
