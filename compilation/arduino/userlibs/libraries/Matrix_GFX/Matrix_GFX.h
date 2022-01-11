/*
    This is a core graphics library for small led matrices and white and black displays
    It is heavily inspired by Adafruit_GFX and provides similar basic functions, 
     but with advanced functions (fonts, high resolution, etc) removed to limit overhead
     to the strict minimum.
*/
#ifndef _MATRIX_GFX_H_
#define _MATRIX_GFX_H_

#include "Arduino.h"

#define GFX_BLACK 0 ///< Draw 'off' pixels
#define GFX_WHITE 1 ///< Draw 'on' pixels, any non 0 value will work
//#define GFX_INVERSE 2   ///< Invert pixels

#define GFXMATRIX_ALL 99   /// Constant to apply change to all matrix panels
#define GFXMATRIX_SIZE 8   // Only 8x8 matrices are managed
#define GFX_TRANSPARENT 99 // Used to have transparent background on 1bit bitmaps

/// Constants for scrolling
#define SCROLL_INITIAL_INTERVAL 500  /// Time of first interval
#define SCROLL_MAX_LENGTH 50  /// Maximum number of chars we can scroll to avoid overriding the position
#define SCROLL_FONT_WIDTH 6

#define Character_font_5x8_InitialChar '0'
const static uint8_t Character_font_5x8[] PROGMEM = {
  0x7C, 0x82, 0x82, 0x82, 0x7C,  // '0'
  0x00, 0x42, 0xFE, 0x02, 0x00,  // '1'
  0x46, 0x8A, 0x92, 0x92, 0x62,  // '2'
  0x44, 0x92, 0x92, 0x92, 0x6C,  // '3'
  0x18, 0x28, 0x48, 0xFE, 0x08,  // '4'
  0xF2, 0x92, 0x92, 0x92, 0x8C,  // '5'
  0x7C, 0x92, 0x92, 0x92, 0x4C,  // '6'
  0xC0, 0x80, 0x8E, 0x90, 0xE0,  // '7'
  0x6C, 0x92, 0x92, 0x92, 0x6C,  // '8'
  0x64, 0x92, 0x92, 0x92, 0x7C,  // '9'
  0x00, 0x00, 0x66, 0x66, 0x00,  // ':'
  0x00, 0x02, 0x6E, 0x6C, 0x00,  // ';'
  0x10, 0x38, 0x6C, 0xC6, 0x82,  // '<'
  0x24, 0x24, 0x24, 0x24, 0x24,  // '='
  0x82, 0xC6, 0x6C, 0x38, 0x10,  // '>'
  0x40, 0x80, 0x8A, 0x90, 0x60,  // '?'
  0x3C, 0x42, 0x9A, 0x8A, 0x70,  // '@'
  0x7E, 0x88, 0x88, 0x88, 0x7E,  // 'A'
  0xFE, 0x92, 0x92, 0x92, 0x6C,  // 'B'
  0x7C, 0x82, 0x82, 0x82, 0x44,  // 'C'
  0xFE, 0x82, 0x82, 0x82, 0x7C,  // 'D'
  0xFE, 0x92, 0x92, 0x92, 0x82,  // 'E'
  0xFE, 0x90, 0x90, 0x90, 0x80,  // 'F'
  0x7C, 0x82, 0x82, 0x92, 0x5C,  // 'G'
  0xFE, 0x10, 0x10, 0x10, 0xFE,  // 'H'
  0x00, 0x82, 0xFE, 0x82, 0x00,  // 'I'
  0x04, 0x02, 0x82, 0xFC, 0x80,  // 'J'
  0xFE, 0x10, 0x10, 0x28, 0xC6,  // 'K'
  0xFE, 0x02, 0x02, 0x02, 0x02,  // 'L'
  0xFE, 0x40, 0x30, 0x40, 0xFE,  // 'M'
  0xFE, 0x40, 0x30, 0x08, 0xFE,  // 'N'
  0x7C, 0x82, 0x82, 0x82, 0x7C,  // 'O'
  0xFE, 0x90, 0x90, 0x90, 0x60,  // 'P'
  0x7C, 0x82, 0x8A, 0x84, 0x7A,  // 'Q'
  0xFE, 0x90, 0x90, 0x90, 0x6E,  // 'R'
  0x64, 0x92, 0x92, 0x92, 0x4C,  // 'S'
  0x80, 0x80, 0xFE, 0x80, 0x80,  // 'T'
  0xFC, 0x02, 0x02, 0x02, 0xFC,  // 'U'
  0xF0, 0x0C, 0x02, 0x0C, 0xF0,  // 'V'
  0xFE, 0x04, 0x38, 0x04, 0xFE,  // 'W'
  0xC6, 0x28, 0x10, 0x28, 0xC6,  // 'X'
  0xC0, 0x20, 0x1E, 0x20, 0xC0,  // 'Y'
  0x86, 0x8A, 0x92, 0xA2, 0xC2,  // 'Z'
  0x00, 0xF6, 0xF6, 0x00, 0x00,  // '!'
  0x00, 0x00, 0x00, 0x00, 0x00   // ' '
};

#include <SPI.h>

class Matrix_GFX
{
private:
  uint16_t _rotation; ///< Display rotation (0 thru 3), for max 8 8x8 matrices
  uint8_t _width;
  uint8_t _height;
  void fillCircleHelper(int8_t x0, int8_t y0, int8_t r,
                        uint8_t corners, int8_t delta,
                        uint8_t color);
  void drawCircleHelper(int8_t x0, int8_t y0, int8_t r,
                        uint8_t cornername, uint8_t color);

  // Variables for scrolling
  uint8_t _scrollPosition;  /// Position of the scrolling process, expressed in columns
  uint8_t _scrollStart;     /// Starting column/pixel index of the scroll area on the screen
  uint8_t _scrollWidth;    /// Width of the scrolling area on screen, in columns/pixels
  uint8_t _scrollTextSize;    /// Width of the scrolling display, in columns
  uint8_t _scrollInterval;  /// Interval between 2 updates of the display
  unsigned long _scrollNextUpdate; /// Time of next update of scrolling
  const char *_scrollText; /// Pointer to the PROGMEM char array containing the text to scroll

protected:
  uint8_t *_buffer;
  uint8_t _count;
public:
  Matrix_GFX(uint8_t widthMatrixCount, uint8_t heightMatrixCount = 1);
  virtual ~Matrix_GFX();
  virtual void init(void){};
  virtual void display() {};
  //uint8_t getCount(void) { return _count; };
  uint8_t *getBuffer(void);
  void setRotation(int rotation, uint8_t index = GFXMATRIX_ALL);
  uint8_t getRotation(uint8_t index = 0);
  void clearDisplay(void);
  void drawPixel(int8_t x, int8_t y, uint8_t color);
  void drawLine(int8_t x0, int8_t y0, int8_t x1, int8_t y1, uint8_t color);
  void drawRect(int8_t x, int8_t y, int8_t w, int8_t h, uint8_t color);
  void fillRect(int8_t x, int8_t y, int8_t w, int8_t h, uint8_t color);
  void drawCircle(int8_t x0, int8_t y0, int8_t r, uint8_t color);
  void fillCircle(int8_t x0, int8_t y0, int8_t r, uint8_t color);
  void drawRoundRect(int8_t x, int8_t y, int8_t w, int8_t h,
                     uint8_t r, uint8_t color);
  void fillRoundRect(int8_t x, int8_t y, int8_t w, int8_t h,
                     uint8_t r, uint8_t color);
  void drawBitmap(int8_t x, int8_t y, const uint8_t bitmap[],
                  int8_t w, int8_t h, bool mirror = false, uint8_t color = GFX_WHITE,
                  uint8_t background = GFX_BLACK);

  void scrollStop();
  void scrollInit(const char text[], uint8_t scrollStart, uint8_t scrollWidth, uint8_t scrollInterval);
  void scrollDisplay();
  void scrollRefresh(bool refreshDisplay = true);

};

#endif