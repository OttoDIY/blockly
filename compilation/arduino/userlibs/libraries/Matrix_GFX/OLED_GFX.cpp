#ifdef __AVR__
#include <avr/pgmspace.h>
#elif defined(ESP8266) || defined(ESP32)
#include <pgmspace.h>
#else
#define pgm_read_byte(addr) \
  (*(const unsigned char *)(addr)) ///< PROGMEM workaround for non-AVR
#endif

#if (ARDUINO >= 157) && !defined(ARDUINO_STM32_FEATHER)
#define SETWIRECLOCK Wire.setClock(wireClk)    ///< Set before I2C transfer
#define RESWIRECLOCK Wire.setClock(restoreClk) ///< Restore after I2C xfer
#else                                          // setClock() is not present in older Arduino Wire lib (or WICED)
#define SETWIRECLOCK                           ///< Dummy stand-in define
#define RESWIRECLOCK                           ///< keeps compiler happy
#endif

#if defined(SPI_HAS_TRANSACTION)
#define SPI_TRANSACTION_START spi->beginTransaction(spiSettings) ///< Pre-SPI
#define SPI_TRANSACTION_END spi->endTransaction()                ///< Post-SPI
#else                                                            // SPI transactions likewise not present in older Arduino SPI lib
#define SPI_TRANSACTION_START                                    ///< Dummy stand-in define
#define SPI_TRANSACTION_END                                      ///< keeps compiler happy
#endif

// Check first if Wire, then hardware SPI, then soft SPI:
#define TRANSACTION_START SETWIRECLOCK;
#define TRANSACTION_END RESWIRECLOCK;

#if defined(I2C_BUFFER_LENGTH)
#define WIRE_MAX min(256, I2C_BUFFER_LENGTH) ///< Particle or similar Wire lib
#elif defined(BUFFER_LENGTH)
#define WIRE_MAX min(256, BUFFER_LENGTH) ///< AVR or similar Wire lib
#elif defined(SERIAL_BUFFER_SIZE)
#define WIRE_MAX \
  min(255, SERIAL_BUFFER_SIZE - 1) ///< Newer Wire uses RingBuffer
#else
#define WIRE_MAX 32 ///< Use common Arduino core default
#endif

#include "OLED_GFX.h"

/*!
  @brief Constructor for OLED19 matrix display
  @param data
         Data pin
  @param clk
         Clock pin
  @param cs
         Chip select pin
  @param count
         Number of 8x8 matrix displays, limited to 4 (128*32) or 8 (128*64) based on resolution

*/
OLED_GFX::OLED_GFX(int8_t i2cAddress, uint8_t resolution, uint8_t matrixCount, bool isSH1106, bool multipleOLEDs)
    : Matrix_GFX(matrixCount < MAX_MATRICES_COUNT ? matrixCount : MAX_MATRICES_COUNT, 1)
{
  _i2caddr = i2cAddress;
  _SH1106 = isSH1106;
  _resolution = resolution;
  _multipleOLEDs = multipleOLEDs;

  wireClk = 400000UL;
  restoreClk = 100000UL;
}

/**
 * @brief Because command calls are often grouped, transaction and selection
 *  must be started/ended in calling function for efficiency.
 * This is a private function, not exposed
 */
void OLED_GFX::ssd1306_command1(uint8_t c)
{
  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)0x00); // Co = 0, D/C = 0
  Wire.write(c);
  Wire.endTransmission();
}

/**
 * @brief Issue list of commands to SSD1306, same rules as above re: transactions.
 * This is a private function, not exposed.
 */
void OLED_GFX::ssd1306_commandList(const uint8_t *c, uint8_t n)
{
  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)0x00); // Co = 0, D/C = 0
  uint16_t bytesOut = 1;
  while (n--)
  {
    if (bytesOut >= WIRE_MAX)
    {
      Wire.endTransmission();
      Wire.beginTransmission(_i2caddr);
      Wire.write((uint8_t)0x00); // Co = 0, D/C = 0
      bytesOut = 1;
    }
    Wire.write(pgm_read_byte(c++));
    bytesOut++;
  }
  Wire.endTransmission();
}

/**
 * @brief Selects I2C output on TCA9548 I2C multiplexer (when multipleOLEDs is true)
 * 
 * @param outputNumber output to select from 0 to 7 
 */
void OLED_GFX::select_i2c_output(uint8_t outputNumber)
{
  // Active bit must be shifted to the left for each increase of output number
  //  (value 1 is output 0)
  Wire.beginTransmission(TCA9548_I2C_ADDRESS);
  Wire.write(1 << outputNumber);
  Wire.endTransmission();
}

/**
 * @brief Initialize/configure the display after startup
 * 
 */
void OLED_GFX::init()
{
  byte oledCount = _multipleOLEDs ? _count : 1;

  for (int i = 0; i < oledCount; i++)
  {

    if (_multipleOLEDs)
    {
      select_i2c_output(i);
    }

    TRANSACTION_START

    // Init sequence
    static const uint8_t PROGMEM init1[] = {SSD1306_DISPLAYOFF,         // 0xAE
                                            SSD1306_SETDISPLAYCLOCKDIV, // 0xD5
                                            0x80,                       // the suggested ratio 0x80
                                            SSD1306_SETMULTIPLEX};      // 0xA8
    ssd1306_commandList(init1, sizeof(init1));
    ssd1306_command1((uint8_t)63);

    static const uint8_t PROGMEM init2[] = {SSD1306_SETDISPLAYOFFSET,   // 0xD3
                                            0x00,                       // no offset
                                            SSD1306_SETSTARTLINE | 0x0, // line #0
                                            SSD1306_CHARGEPUMP};        // 0x8D
    ssd1306_commandList(init2, sizeof(init2));

    //ssd1306_command1((vccstate == SSD1306_EXTERNALVCC) ? 0x10 : 0x14);
    ssd1306_command1(0x14);

    static const uint8_t PROGMEM init3[] = {SSD1306_MEMORYMODE, // 0x20
                                            0x00,               // 0x0 act like ks0108
                                            SSD1306_SEGREMAP | 0x1,
                                            SSD1306_COMSCANDEC};
    ssd1306_commandList(init3, sizeof(init3));

    // default for 128*32
    uint8_t comPins = 0x02;
    contrast = 0x8F;

    if (_resolution == OLED_12864)
    {
      comPins = 0x12;
      //contrast = (vccstate == SSD1306_EXTERNALVCC) ? 0x9F : 0xCF;
      contrast = 0xCF;
    }
    // else if (((WIDTH * zoomLevel) == 96) && ((HEIGHT * zoomLevel) == 16))
    // {
    //   comPins = 0x2; // ada x12
    //   contrast = (vccstate == SSD1306_EXTERNALVCC) ? 0x10 : 0xAF;
    // }
    // else
    // {
    //   // Other screen varieties -- TBD
    // }

    ssd1306_command1(SSD1306_SETCOMPINS);
    ssd1306_command1(comPins);
    ssd1306_command1(SSD1306_SETCONTRAST);
    ssd1306_command1(contrast);

    ssd1306_command1(SSD1306_SETPRECHARGE); // 0xd9
    //ssd1306_command1((vccstate == SSD1306_EXTERNALVCC) ? 0x22 : 0xF1);
    ssd1306_command1(0xF1);
    static const uint8_t PROGMEM init5[] = {
        SSD1306_SETVCOMDETECT, // 0xDB
        0x40,
        SSD1306_DISPLAYALLON_RESUME, // 0xA4
        SSD1306_NORMALDISPLAY,       // 0xA6
        SSD1306_DEACTIVATE_SCROLL,
        SSD1306_DISPLAYON}; // Main screen turn on
    ssd1306_commandList(init5, sizeof(init5));

    TRANSACTION_END
    // We must now clean the screen, we do it by clearing buffer and sending
    // the first matrix 2 times at x8 size
    //  it will work on 128*64 and overflow on smaller screens but will not be a
    //   problem as we only write empty bytes
    clearDisplay();
    sendMatrix(0, 0, OLEDZoomX8, 0);
    sendMatrix(64, 0, OLEDZoomX8, 0);
  }
}

/**
 * @brief Sets brightness of the matrix
 * @param level Intensity level of the display from 0 to 15
 * @param index Index of matrix to apply luminosity to
 *           Default = OLED_ALLMATRIX, will apply to all matrix connected
 */
void OLED_GFX::setBrightness(uint8_t level, uint8_t index)
{
  // the range of contrast to too small to be really useful
  // it is useful to dim the display
  TRANSACTION_START
  // ssd1306_command1(SSD1306_SETCONTRAST);
  // ssd1306_command1(level);
  TRANSACTION_END
}

/**
    @brief  Sends the content of the memory buffer to the display
            All data is sent for all display matrix
    @return None (void).
*/
void OLED_GFX::display()
{
  uint8_t rotation = getRotation();

  uint8_t x;
  uint8_t y;
  uint8_t width = (_resolution & B00001111) * 16;
  uint8_t height = (_resolution >> 4) * 16;
  // if vertical position we swap width and height
  if (rotation % 2 > 0 && _resolution != OLED_12832)
  {
    y = height;
    height = width;
    width = y;
  }

  // To manage multiple OLEDs we need to be able to override calculation of size and position of "matrices"
  uint8_t countForPosition = _multipleOLEDs ? 1 : _count;
  uint8_t indexForPosition;
  OLEDZoomLevel zoomLevel = OLEDZoomX4;
  // Update zoom level if not 4
  if (width >= countForPosition * OLEDZoomX8 * 8)
  {
    zoomLevel = OLEDZoomX8;
  }
  else if (_resolution == OLED_6448 && countForPosition > 2)
  {
    zoomLevel = OLEDZoomX2;
  }

  for (int matrixIndex = 0; matrixIndex < _count; matrixIndex++)
  {
    if (_multipleOLEDs)
    {
      indexForPosition = 0;
    }
    else
    {
      indexForPosition = matrixIndex;
    }

    // Now we have the zoom level we can calculate left/top margin and position the current matrix
    if (_resolution != OLED_12832)
    {
      x = (width - (countForPosition > 1 ? 2 : 1) * GFXMATRIX_SIZE * zoomLevel) / 2;
      y = (height - (countForPosition > 2 ? 2 : 1) * GFXMATRIX_SIZE * zoomLevel) / 2;
      x += GFXMATRIX_SIZE * zoomLevel * (indexForPosition % 2);

      // Special case for matrix 3/3 (index from 0 = 2...), we must move it half a matrix width to center
      if (countForPosition == 3 && indexForPosition == 2)
      {
        x += (zoomLevel * GFXMATRIX_SIZE) / 2;
      }
      y += GFXMATRIX_SIZE * zoomLevel * ((rotation % 2 == 0) ? (indexForPosition / 2) : (1 - (indexForPosition / 2)));

      // If vertical, we swap x/y
      if (rotation % 2 == 1)
      {
        uint8_t t = y;
        y = x;
        x = t;
      }

      // If more than one element and rotation at 180 or 270° we need to revert matrix position in x & y
      if ((countForPosition > 1) && (rotation > 1))
      {
        // we keep y=0 and only set x
        x = ((rotation == 2) ? width : height) - x + 1 - zoomLevel * GFXMATRIX_SIZE;
        y = ((rotation == 2) ? height : width) - y + 1 - zoomLevel * GFXMATRIX_SIZE;
      }
    }
    else
    {
      // Specific position calculation because of the "stripe" shape of 128x32 OLED
      zoomLevel = OLEDZoomX4;
      y = 32;
      x = (width - (countForPosition * GFXMATRIX_SIZE * zoomLevel)) / 2;
      x += GFXMATRIX_SIZE * zoomLevel * indexForPosition;
      if (rotation > 1) {
        x = width-x-GFXMATRIX_SIZE * zoomLevel;
      }
    }

    // now we have x,y,and index of data to display
    if (_multipleOLEDs)
    {
      select_i2c_output(matrixIndex);
    }
    sendMatrix(x, y, zoomLevel, matrixIndex);
  }
}

/**
 * @brief Sends matrix data to the display
 * Based on DisplayArea function of OLED_Zoom but simplified as we know we are inside screen, aligned to pages etc
 * 
 * @param x1 
 * @param y1 
 * @param zoomLevel 
 * @param matrixIndex 
 */
void OLED_GFX::sendMatrix(uint8_t x1, uint8_t y1, uint8_t zoomLevel, uint8_t matrixIndex)
{
  // we calculate maximum coordinates, and make sure they are inside the buffer size
  uint8_t x2 = x1 + GFXMATRIX_SIZE * zoomLevel - 1;
  uint8_t y2 = y1 + GFXMATRIX_SIZE * zoomLevel - 1;

  TRANSACTION_START
  if (!_SH1106)
  {
    uint8_t dlist1[] = {
        SSD1306_PAGEADDR,
        y1 / 8, // Page start address
        0xFF,   // pages count = zoom level
        SSD1306_COLUMNADDR,
        x1,  // Column start address
        x2}; // Column end address

    ssd1306_commandList(dlist1, sizeof(dlist1));
  }

#if defined(ESP8266)
  // ESP8266 needs a periodic yield() call to avoid watchdog reset.
  // With the limited size of SSD1306 displays, and the fast bitrate
  // being used (1 MHz or more), I think one yield() immediately before
  // a screen write and one immediately after should cover it.  But if
  // not, if this becomes a problem, yields() might be added in the
  // 32-byte transfer condition below.
  yield();
#endif

  uint8_t *ptr = _buffer;
  ptr += matrixIndex * (GFXMATRIX_SIZE / 8) * GFXMATRIX_SIZE; // Initialize pointer at right byte for active matrix
  uint8_t *ptrWork;
  uint8_t byteToSend;
  uint8_t byteToProcess;
  uint8_t bytesOut;

  bool hasData = false;

  uint8_t zShiftMultiplicator = 8 / zoomLevel; // number of bits to shift mask for each row
  uint8_t valForShift = B00000001;             // mask bits that will be shifted left to keep only relevant bits
  if (zoomLevel == OLEDZoomX4)
  {
    valForShift = B00000011;
  }
  else if (zoomLevel == 2)
  {
    valForShift = B00001111;
  }

  // If I2C we initialize transmission and send data command
  Wire.beginTransmission(_i2caddr);
  Wire.write((uint8_t)0x40);
  bytesOut = 1;

  // we loop for each row of bytes
  for (uint8_t yRow = 0; yRow < GFXMATRIX_SIZE / 8; yRow++)
  {
    // We repeat each row/line "zoom" times
    for (uint8_t yRepeat = 0; yRepeat < zoomLevel; yRepeat++)
    {
      // Specific for SH1106 : we must reset the row/page and column for each vertical row
      //  as this driver is not moving on to next row like the SSD1306...
      if (_SH1106)
      {
        Wire.endTransmission();
        ssd1306_command1(0xB0 + y1 / 8 + yRow + yRepeat);                                    // Set row
        ssd1306_command1(SH1106_SETLOWCOLUMNSTART + (x1 & 0x0F));                            // Set lower bits of start column index   SH1106_SETCOLUMNLOWBITS +
        ssd1306_command1(SH1106_SETCOLUMNHIGHBITS + ((SH1106_SETLOWCOLUMNSTART + x1) >> 4)); // Set higher bits of start column index
        Wire.beginTransmission(_i2caddr);
        Wire.write((uint8_t)0x40);
        bytesOut = 1;
      }

      // For each column on screen
      for (uint8_t xCol = 0; xCol < GFXMATRIX_SIZE; xCol++)
      {
        // we set working pointer to start row position
        ptrWork = ptr + xCol;

        byteToProcess = *ptrWork;

        if (zoomLevel == OLEDZoomNoZoom)
        {
          byteToSend = byteToProcess;
        }
        else
        {

          // Mask byte to keep only relevant bits
          byteToProcess = byteToProcess & (valForShift << (zShiftMultiplicator * yRepeat));
          // Shift right to move relevant bits to lowest order
          byteToProcess = byteToProcess >> (zShiftMultiplicator * yRepeat);
          // Now we need to convert to a byte to send, we use OLED_ZoomBytes4/OLED_ZoomBytes2 to save bit manipulations
          if (zoomLevel == 4)
          {
            byteToProcess = OLED_ZoomBytes4[byteToProcess];
          }
          else if (zoomLevel == 2)
          {
            byteToSend = OLED_ZoomBytes2[byteToProcess];
          }
          else
          {
            // For zoom = 8 value is either 0 or 1
            byteToProcess = byteToProcess ? B01111110 : B00000000;
          }
        }
        for (int xRepeat = 0; xRepeat < zoomLevel; xRepeat++)
        {
          if (zoomLevel == 8)
          {
            byteToSend = B00000000;
            if (byteToProcess && (xRepeat > 0) && (xRepeat < 7))
            {
              byteToSend = (xRepeat == 1 || xRepeat == 6) ? B00111100 : byteToProcess;
            }
          }
          else if (zoomLevel == 4)
          {
            byteToSend = byteToProcess;
            if (byteToSend && (xRepeat == 0 || xRepeat == zoomLevel - 1))
            {
              byteToSend = byteToSend & B01100110;
            }
          }
          // I2C
          if (bytesOut >= WIRE_MAX)
          {
            Wire.endTransmission();
            Wire.beginTransmission(_i2caddr);
            Wire.write((uint8_t)0x40);
            bytesOut = 1;
          }
          Wire.write(byteToSend);
          bytesOut++;
        }
      }
    }
    // We have repeated the row "zoom" times, we can increase the pointer to the next line
    // (Not necessary at the moment with an 8x8 matrix)
    //ptr += GFXMATRIX_SIZE;
  }
  // I2C
  Wire.endTransmission();

  TRANSACTION_END

#if defined(ESP8266)
  yield();
#endif
}
