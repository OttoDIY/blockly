#ifndef _OLED_GFX_H_
#define _OLED_GFX_H_

/*!
 * @file OLED_Zoom.h
 *
 * 2021/08/21 Nca78
 *  Adapted for Matrix_GFX: 
 *    - based on Matrix_GFX instead of Adafruit_GFX
 *    - only runs on I2C OLEDs to make things lighter
 * 
 *  Original header from Adafruit below:
 */
/*
 * This is part of for Adafruit's SSD1306 library for monochrome
 * OLED displays: http://www.adafruit.com/category/63_98
 *
 * These displays use I2C or SPI to communicate. I2C requires 2 pins
 * (SCL+SDA) and optionally a RESET pin. SPI requires 4 pins (MOSI, SCK,
 * select, data/command) and optionally a reset pin. Hardware SPI or
 * 'bitbang' software SPI are both supported.
 *
 * Adafruit invests time and resources providing this open source code,
 * please support Adafruit and open-source hardware by purchasing
 * products from Adafruit!
 *
 * Written by Limor Fried/Ladyada for Adafruit Industries, with
 * contributions from the open source community.
 *
 * BSD license, all text above, and the splash screen header file,
 * must be included in any redistribution.
 *
 */

#include <Matrix_GFX.h>
#include <Wire.h>

#define SSD1306_MEMORYMODE 0x20          ///< See datasheet
#define SSD1306_COLUMNADDR 0x21          ///< See datasheet
#define SSD1306_PAGEADDR 0x22            ///< See datasheet
#define SSD1306_SETCONTRAST 0x81         ///< See datasheet
#define SSD1306_CHARGEPUMP 0x8D          ///< See datasheet
#define SSD1306_SEGREMAP 0xA0            ///< See datasheet
#define SSD1306_DISPLAYALLON_RESUME 0xA4 ///< See datasheet
#define SSD1306_DISPLAYALLON 0xA5        ///< Not currently used
#define SSD1306_NORMALDISPLAY 0xA6       ///< See datasheet
#define SSD1306_INVERTDISPLAY 0xA7       ///< See datasheet
#define SSD1306_SETMULTIPLEX 0xA8        ///< See datasheet
#define SSD1306_DISPLAYOFF 0xAE          ///< See datasheet
#define SSD1306_DISPLAYON 0xAF           ///< See datasheet
#define SSD1306_COMSCANINC 0xC0          ///< Not currently used
#define SSD1306_COMSCANDEC 0xC8          ///< See datasheet
#define SSD1306_SETDISPLAYOFFSET 0xD3    ///< See datasheet
#define SSD1306_SETDISPLAYCLOCKDIV 0xD5  ///< See datasheet
#define SSD1306_SETPRECHARGE 0xD9        ///< See datasheet
#define SSD1306_SETCOMPINS 0xDA          ///< See datasheet
#define SSD1306_SETVCOMDETECT 0xDB       ///< See datasheet

#define SSD1306_SETLOWCOLUMN 0x00  ///< Not currently used
#define SSD1306_SETHIGHCOLUMN 0x10 ///< Not currently used
#define SSD1306_SETSTARTLINE 0x40  ///< See datasheet

#define SSD1306_EXTERNALVCC 0x01  ///< External display voltage source
#define SSD1306_SWITCHCAPVCC 0x02 ///< Gen. display voltage from 3.3V

#define SSD1306_RIGHT_HORIZONTAL_SCROLL 0x26              ///< Init rt scroll
#define SSD1306_LEFT_HORIZONTAL_SCROLL 0x27               ///< Init left scroll
#define SSD1306_VERTICAL_AND_RIGHT_HORIZONTAL_SCROLL 0x29 ///< Init diag scroll
#define SSD1306_VERTICAL_AND_LEFT_HORIZONTAL_SCROLL 0x2A  ///< Init diag scroll
#define SSD1306_DEACTIVATE_SCROLL 0x2E                    ///< Stop scroll
#define SSD1306_ACTIVATE_SCROLL 0x2F                      ///< Start scroll
#define SSD1306_SET_VERTICAL_SCROLL_AREA 0xA3             ///< Set scroll range

// ADDITIONAL DEFINES FOR SH1106 compatibility
#define SH1106_SETLOWCOLUMNSTART 0x02
#define SH1106_SETCOLUMNHIGHBITS 0x10

// Default I2C address for TCA9548A
#define TCA9548_I2C_ADDRESS 0x70

// MAX NUMBER OF MATRICES
#define MAX_MATRICES_COUNT 4

enum OLEDZoomLevel
{
  OLEDZoomNoZoom = 1,
  OLEDZoomX2 = 2,
  OLEDZoomX4 = 4,
  OLEDZoomX8 = 8
};

// enum value is in units of 16 pixels:  height * 16 + width so it encodes the screen dimensions
enum OLEDResolution
{
  OLED_12864 = 72,
  OLED_12832 = 40,
  OLED_9664 = 70,
  OLED_6448 = 52
};

// Possible output values for x2 zoom (based of 4 bits of data in original byte)
const uint8_t OLED_ZoomBytes2[] = {B00000000, B00000011, B00001100, B00001111, B00110000, B00110011, B00111100, B00111111, B11000000, B11000011, B11001100, B11001111, B11110000, B11110011, B11111100, B11111111};
// Possible output values for x4 zoom (based of 2 bits of data in original byte)
const uint8_t OLED_ZoomBytes4[] = {B00000000, B00001111, B11110000, B11111111};

class OLED_GFX : public Matrix_GFX
{
private:
  TwoWire *wire;
  void ssd1306_command1(uint8_t c);
  void ssd1306_commandList(const uint8_t *c, uint8_t n);
  void select_i2c_output(uint8_t outputNumber);
  void sendMatrix(uint8_t x1, uint8_t y1, uint8_t zoomLevel, uint8_t matrixIndex);
#if ARDUINO >= 157
  uint32_t wireClk;    // Wire speed for SSD1306 transfers
  uint32_t restoreClk; // Wire speed following SSD1306 transfers
#endif
  uint8_t contrast; // normal contrast setting for this device
public:
  int8_t _i2caddr;
  uint8_t _resolution;
  bool _multipleOLEDs;
  bool _SH1106;
  OLED_GFX(int8_t i2cAddress, uint8_t resolution = OLED_12864, uint8_t matrixCount = 2, bool isSH1106 = false, bool multipleOLEDs = false);
  void init();
  void display();
  void setBrightness(uint8_t level, uint8_t index = 0);
};

#endif