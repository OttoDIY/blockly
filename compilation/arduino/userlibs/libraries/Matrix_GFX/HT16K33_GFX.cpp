#ifdef __AVR__
#include <avr/pgmspace.h>
#elif defined(ESP8266) || defined(ESP32)
#include <pgmspace.h>
#else
#define pgm_read_byte(addr) \
  (*(const unsigned char *)(addr)) ///< PROGMEM workaround for non-AVR
#endif

#include "HT16K33_GFX.h"


/**
  @brief Constructor for HT16K33 matrix display
  @param width
         Number of 8x8 matrix displays
  @param adr
         I2C address
*/
HT16K33_GFX::HT16K33_GFX(uint8_t width, uint8_t i2caddr)
    : Matrix_GFX(width, 1)
{
  _i2caddr = i2caddr;
}

/**
 * @brief Send a single byte command
 * 
 * @param c Command to send to the display chip
 */
void HT16K33_GFX::sendCommand(uint8_t c) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(c);
  Wire.endTransmission();
}

/**
 * @brief Initialize/configure the display after startup
 * 
 */
void HT16K33_GFX::init()
{
  // list of initialisation tasks from datasheet
  //  Internal system clock enable
  sendCommand(HT16K33_CMD_OSCILLATOR + HT16K33_VAL_OSCON);

  // ROW/INT output pin set  => not needed for us

  // Dimming set => h8/16 duty
  setBrightness(0x01);

  // Blinking set  (and display on)
  sendCommand(HT16K33_CMD_DISPLAYSETUP + HT16K33_VAL_DISPLAYON + HT16K33_VAL_BLINKOFF);

  // display buffer
  display();
}

/**
 * @brief Sets brightness of the matrix
 * @param level Intensity level of the display from 0 to 15
 * @param index Index of matrix to apply luminosity to
 *           Default = HT16K33_ALLMATRIX, will apply to all matrix connected
 */
void HT16K33_GFX::setBrightness(uint8_t level)
{
  // we only keep only the 3 lower bits for level
  sendCommand(HT16K33_CMD_DIMMING | (level & 0x0F));
}

byte HT16K33_GFX::flipByte(uint8_t c){
  char r=0;
  for(uint8_t i = 0; i < 8; i++){
    r <<= 1;
    r |= c & 1;
    c >>= 1;
  }
  return r;
}

/**
    @brief  Sends the content of the memory buffer to the display
            All data is sent for all display matrix
    @return None (void).
*/
void HT16K33_GFX::display()
{
  Wire.beginTransmission(_i2caddr);
  // Write start address (0, we write all data)
  Wire.write(0);
  // Send data
  for (int p = 0; p < 8; p++)
  {
    for (int c = 0; c<_count;c++) {
      Wire.write(flipByte(_buffer[c*8+p]));
    }
  }  
  Wire.endTransmission();
  sendCommand(HT16K33_CMD_DISPLAYSETUP + HT16K33_VAL_DISPLAYON + HT16K33_VAL_BLINKOFF);
}
