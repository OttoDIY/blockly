#ifdef __AVR__
#include <avr/pgmspace.h>
#elif defined(ESP8266) || defined(ESP32)
#include <pgmspace.h>
#else
#define pgm_read_byte(addr) \
    (*(const unsigned char *)(addr)) ///< PROGMEM workaround for non-AVR
#endif

#define int_swap(a, b) \
    (((a) ^= (b)), ((b) ^= (a)), ((a) ^= (b))) ///< No-temp-var swap operation

#include "Matrix_GFX.h"

Matrix_GFX::Matrix_GFX(uint8_t widthMatrixCount, uint8_t heightMatrixCount)
{
    // Max 8 chips in series
    _count = widthMatrixCount * heightMatrixCount;
    _width = widthMatrixCount * GFXMATRIX_SIZE;
    _height = heightMatrixCount * GFXMATRIX_SIZE;
    _rotation = 0;
    _buffer = (uint8_t *)malloc(_width * heightMatrixCount);
    // empty buffer
    clearDisplay();
}

Matrix_GFX::~Matrix_GFX()
{
    if (_buffer)
    {
        free(_buffer);
        _buffer = NULL;
    }
}

void Matrix_GFX::clearDisplay(void)
{
    memset(_buffer, 0, _count * GFXMATRIX_SIZE);
}

uint8_t *Matrix_GFX::getBuffer(void)
{
    return _buffer;
}

void Matrix_GFX::setRotation(int rotation, uint8_t index)
{
    for (uint8_t m = 0; m <= _count; m++)
    {
        if ((index == GFXMATRIX_ALL) || (index == m))
        {
            // Clear bits for matrix index
            _rotation &= ~(B00000011 << m * 2);
            // Set new value, we only keep the lower bits of rotation value
            _rotation |= (rotation & 0x3) << m * 2;
        }
    }
}

// Returns rotation for the selected index
uint8_t Matrix_GFX::getRotation(uint8_t index)
{
    return (_rotation >> index * 2) & B00000011;
}

// Draws a pixels on a specific matrix, x and y are 0=>7
void Matrix_GFX::drawPixel(int8_t x, int8_t y, uint8_t color)
{
    if ((x >= 0) && (x < _width) && (y >= 0) && (y < _height))
    {
        uint8_t matrixPos = x / GFXMATRIX_SIZE + (_width / GFXMATRIX_SIZE) * (y / GFXMATRIX_SIZE);
        uint8_t rotation = getRotation(matrixPos);
        x = x % GFXMATRIX_SIZE;
        y = y % GFXMATRIX_SIZE;

        // Pixel is in-bounds. Rotate coordinates if needed.
        switch (rotation)
        {
        case 1:
            int_swap(x, y);
            x = GFXMATRIX_SIZE - 1 - x;
            break;
        case 2:
            x = GFXMATRIX_SIZE - 1 - x;
            y = GFXMATRIX_SIZE - 1 - y;
            break;
        case 3:
            int_swap(x, y);
            y = GFXMATRIX_SIZE - 1 - y;
            break;
        }

        x += matrixPos * GFXMATRIX_SIZE;
        if (color == GFX_BLACK)
        {
            _buffer[x] &= ~(1 << y);
        }
        else
        {
            _buffer[x] |= (1 << y);
        }
        /*         switch (color)
        {
        case GFX_WHITE:
            _buffer[x] |= (1 << y);
            break;
        case GFX_BLACK:
            _buffer[x] &= ~(1 << y);
            break;
        case GFX_INVERSE:
            _buffer[x] ^= (1 << y);
            break;
        } */
    }
}

//**************************************************************************************
// All functions below are (if possible) lighter copies from Adafruit_GFX
//**************************************************************************************

/**************************************************************************/
/*!
   @brief    Draw a line
    @param    x0  Start point x coordinate
    @param    y0  Start point y coordinate
    @param    x1  End point x coordinate
    @param    y1  End point y coordinate
    @param    color 16-bit 5-6-5 Color to draw with
*/
/**************************************************************************/
void Matrix_GFX::drawLine(int8_t x0, int8_t y0, int8_t x1, int8_t y1, uint8_t color)
{
    int8_t steep = abs(y1 - y0) > abs(x1 - x0);
    if (steep)
    {
        int_swap(x0, y0);
        int_swap(x1, y1);
    }

    if (x0 > x1)
    {
        int_swap(x0, x1);
        int_swap(y0, y1);
    }

    int8_t dx, dy;
    dx = x1 - x0;
    dy = abs(y1 - y0);

    int8_t err = dx / 2;
    int8_t ystep;

    if (y0 < y1)
    {
        ystep = 1;
    }
    else
    {
        ystep = -1;
    }

    for (; x0 <= x1; x0++)
    {
        if (steep)
        {
            drawPixel(y0, x0, color);
        }
        else
        {
            drawPixel(x0, y0, color);
        }
        err -= dy;
        if (err < 0)
        {
            y0 += ystep;
            err += dx;
        }
    }
}

/**************************************************************************/
/**
   @brief   Draw a rectangle with no fill color
    @param    x   Top left corner x coordinate
    @param    y   Top left corner y coordinate
    @param    w   Width in pixels
    @param    h   Height in pixels
    @param    color 16-bit 5-6-5 Color to draw with
*/
/**************************************************************************/
void Matrix_GFX::drawRect(int8_t x, int8_t y, int8_t w, int8_t h, uint8_t color)
{
    drawLine(x, y, x + w - 1, y, color);
    drawLine(x, y + h - 1, x + w - 1, y + h - 1, color);
    drawLine(x, y, x, y + h - 1, color);
    drawLine(x + w - 1, y, x + w - 1, y + h - 1, color);
}

/**************************************************************************/
/**
   @brief    Fill a rectangle completely with one color. Update in subclasses if
   desired!
    @param    x   Top left corner x coordinate
    @param    y   Top left corner y coordinate
    @param    w   Width in pixels
    @param    h   Height in pixels
   @param    color 16-bit 5-6-5 Color to fill with
*/
/**************************************************************************/
void Matrix_GFX::fillRect(int8_t x, int8_t y, int8_t w, int8_t h, uint8_t color)
{
    for (int8_t i = x; i < x + w; i++)
    {
        drawLine(i, y, i, y + h - 1, color);
    }
}

/**************************************************************************/
/**
   @brief    Draw a circle outline
    @param    x0   Center-point x coordinate
    @param    y0   Center-point y coordinate
    @param    r   Radius of circle
    @param    color 16-bit 5-6-5 Color to draw with
*/
/**************************************************************************/
void Matrix_GFX::drawCircle(int8_t x0, int8_t y0, int8_t r, uint8_t color)
{
    drawCircleHelper(x0, y0, r, 0xFF, color);
    drawPixel(x0, y0 + r, color);
    drawPixel(x0, y0 - r, color);
    drawPixel(x0 + r, y0, color);
    drawPixel(x0 - r, y0, color);
}

/**************************************************************************/
/*!
   @brief    Draw a circle with filled color
    @param    x0   Center-point x coordinate
    @param    y0   Center-point y coordinate
    @param    r   Radius of circle
    @param    color 16-bit 5-6-5 Color to fill with
*/
/**************************************************************************/
void Matrix_GFX::fillCircle(int8_t x0, int8_t y0, int8_t r, uint8_t color)
{
    drawLine(x0, y0 - r, x0, y0 + r, color);
    fillCircleHelper(x0, y0, r, 0xFF, 0, color);
}

/**************************************************************************/
/*!
    @brief    Quarter-circle drawer, used to do circles and roundrects
    @param    x0   Center-point x coordinate
    @param    y0   Center-point y coordinate
    @param    r   Radius of circle
    @param    cornername  Mask bit #1 or bit #2 to indicate which quarters of
   the circle we're doing
    @param    color 16-bit 5-6-5 Color to draw with
*/
/**************************************************************************/
void Matrix_GFX::drawCircleHelper(int8_t x0, int8_t y0, int8_t r,
                                  uint8_t cornername, uint8_t color)
{
    int8_t f = 1 - r;
    int8_t ddF_x = 1;
    int8_t ddF_y = -2 * r;
    int8_t x = 0;
    int8_t y = r;

    while (x < y)
    {
        if (f >= 0)
        {
            y--;
            ddF_y += 2;
            f += ddF_y;
        }
        x++;
        ddF_x += 2;
        f += ddF_x;
        if (cornername & 0x4)
        {
            drawPixel(x0 + x, y0 + y, color);
            drawPixel(x0 + y, y0 + x, color);
        }
        if (cornername & 0x2)
        {
            drawPixel(x0 + x, y0 - y, color);
            drawPixel(x0 + y, y0 - x, color);
        }
        if (cornername & 0x8)
        {
            drawPixel(x0 - y, y0 + x, color);
            drawPixel(x0 - x, y0 + y, color);
        }
        if (cornername & 0x1)
        {
            drawPixel(x0 - y, y0 - x, color);
            drawPixel(x0 - x, y0 - y, color);
        }
    }
}

/**************************************************************************/
/**
    @brief  Quarter-circle drawer with fill, used for circles and roundrects
    @param  x0       Center-point x coordinate
    @param  y0       Center-point y coordinate
    @param  r        Radius of circle
    @param  corners  Mask bits indicating which quarters we're doing
    @param  delta    Offset from center-point, used for round-rects
    @param  color    16-bit 5-6-5 Color to fill with
*/
/**************************************************************************/
void Matrix_GFX::fillCircleHelper(int8_t x0, int8_t y0, int8_t r,
                                  uint8_t corners, int8_t delta,
                                  uint8_t color)
{

    int8_t f = 1 - r;
    int8_t ddF_x = 1;
    int8_t ddF_y = -2 * r;
    int8_t x = 0;
    int8_t y = r;
    int8_t px = x;
    int8_t py = y;

    delta++; // Avoid some +1's in the loop

    while (x < y)
    {
        if (f >= 0)
        {
            y--;
            ddF_y += 2;
            f += ddF_y;
        }
        x++;
        ddF_x += 2;
        f += ddF_x;
        // These checks avoid double-drawing certain lines, important
        // for the SSD1306 library which has an INVERT drawing mode.
        if (x < (y + 1))
        {
            if (corners & 1)
                drawLine(x0 + x, y0 - y, x0 + x, y0 + y + delta-1, color);
            if (corners & 2)
                drawLine(x0 - x, y0 - y, x0 - x, y0 + y + delta-1, color);
        }
        if (y != py)
        {
            if (corners & 1)
                drawLine(x0 + py, y0 - px, x0 + py, y0 + px + delta-1, color);
            if (corners & 2)
                drawLine(x0 - py, y0 - px, x0 - py, y0 + px + delta-1, color);
            py = y;
        }
        px = x;
    }
}

/**************************************************************************/
/**
   @brief   Draw a rounded rectangle with no fill color
    @param    x   Top left corner x coordinate
    @param    y   Top left corner y coordinate
    @param    w   Width in pixels
    @param    h   Height in pixels
    @param    r   Radius of corner rounding
    @param    color 16-bit 5-6-5 Color to draw with
*/
/**************************************************************************/
void Matrix_GFX::drawRoundRect(int8_t x, int8_t y, int8_t w, int8_t h,
                               uint8_t r, uint8_t color)
{
    int8_t max_radius = ((w < h) ? w : h) / 2; // 1/2 minor axis
    if (r > max_radius)
        r = max_radius;
    // Else, won't work for tiny rectangles
    if (r < 2)
    {
        r = 2;
    }
    // smarter version
    drawLine(x + r, y, x + w - 2 * r + 1, y, color);                 // Top
    drawLine(x + r, y + h - 1, x + w - 2 * r + 1, y + h - 1, color); // Bottom
    drawLine(x, y + r, x, y + h - 2 * r + 1, color);                 // Left
    drawLine(x + w - 1, y + r, x + w - 1, y + h - 2 * r + 1, color); // Right
    // draw four corners
    drawCircleHelper(x + r, y + r, r, 1, color);
    drawCircleHelper(x + w - r - 1, y + r, r, 2, color);
    drawCircleHelper(x + w - r - 1, y + h - r - 1, r, 4, color);
    drawCircleHelper(x + r, y + h - r - 1, r, 8, color);
}

/**************************************************************************/
/**
   @brief   Draw a rounded rectangle with fill color
    @param    x   Top left corner x coordinate
    @param    y   Top left corner y coordinate
    @param    w   Width in pixels
    @param    h   Height in pixels
    @param    r   Radius of corner rounding
    @param    color 16-bit 5-6-5 Color to draw/fill with
*/
/**************************************************************************/
void Matrix_GFX::fillRoundRect(int8_t x, int8_t y, int8_t w, int8_t h,
                               uint8_t r, uint8_t color)
{
    uint8_t max_radius = ((w < h) ? w : h) / 2; // 1/2 minor axis
    if (r > max_radius)
        r = max_radius;
    if (r < 2)
    {
      r=2;
    }
    // smarter version
    fillRect(x + r, y, w - 2 * r, h, color);
    //fillRect(x, y + r, w, h - 2 * r, color);


        // draw four corners
        fillCircleHelper(x + w - r - 1, y + r, r, 1, h - 2 * r - 1, color);
        fillCircleHelper(x + r, y + r, r, 2, h - 2 * r - 1, color);
}

/**************************************************************************/
/**
   @brief      Draw a PROGMEM-resident 1-bit image at the specified (x,y)
   position, using the specified foreground (for set bits) and background (unset
   bits) colors.
    @param    x   Top left corner x coordinate
    @param    y   Top left corner y coordinate
    @param    bitmap  byte array with monochrome bitmap
    @param    w   Width of bitmap in pixels
    @param    h   Height of bitmap in pixels
    @param    color 1-bit draw pixels with
    @param    background 1-bit to draw background with. if == GFX_TRANSPARENT then background is not drawn
*/
/**************************************************************************/
void Matrix_GFX::drawBitmap(int8_t x, int8_t y, const uint8_t bitmap[],
                            int8_t w, int8_t h, bool mirror, uint8_t color,
                            uint8_t background)
{
    int8_t byteWidth = (w + 7) / 8; // Bitmap scanline pad = whole byte
    uint8_t byte = 0;
    for (int8_t j = 0; j < h; j++, y++)
    {
        for (int8_t i = 0; i < w; i++)
        {
            if (i & 7)
                byte <<= 1;
            else
                byte = pgm_read_byte(&bitmap[j * byteWidth + i / 8]);
            if (byte & 0x80)
            {
                drawPixel(x + (mirror ? w - 1 - i : i), y, color);
            }
            else if (background != GFX_TRANSPARENT)
            {
                drawPixel(x + (mirror ? w - 1 - i : i), y, background);
            }
        }
    }
}

/**************************************************************************/
/**
   @brief     Initializes the scrolling display:
                - saves parameters values
                - calculate text size
                - calls the scrollDisplay function to make initial display
    @param    text   Text to scroll on the display, *only from PROGMEM !*
    @param    scrollStart  Starting column/pixel index of the scroll area on the screen
    @param    scrollWidth  Width of the scrolling area on screen, in columns/pixels
    @param    scrollInterval   Interval between 2 updates of the display
*/
/**************************************************************************/
void Matrix_GFX::scrollInit(const char text[], uint8_t scrollStart, uint8_t scrollWidth, uint8_t scrollInterval)
{
    _scrollTextSize = 0;
    while (_scrollTextSize < SCROLL_MAX_LENGTH && pgm_read_byte(&text[_scrollTextSize]) != '\0')
    {
        _scrollTextSize++;
    }
    _scrollText = text;
    _scrollStart = scrollStart;
    _scrollWidth = scrollWidth;
    _scrollInterval = scrollInterval;
    _scrollPosition = 0;
    scrollDisplay();
}

/**************************************************************************/
/**
   @brief    Stops the scrolling process by setting _scrollNextUpdate to 0
*/
/**************************************************************************/
void Matrix_GFX::scrollStop()
{
    _scrollNextUpdate = 0;
}

/**************************************************************************/
/**
   @brief      Refreshes the scroll display based on the values
                in the scroll parameters
    @param    refreshDisplay   Refresh the matrix display after writing text
*/
/**************************************************************************/
void Matrix_GFX::scrollDisplay()
{
    uint8_t letterColumn;
    char letter;
    for (uint8_t i = _scrollPosition; i < _scrollPosition + _scrollWidth; i++)
    {
        letterColumn = i % SCROLL_FONT_WIDTH;
        // We are at last position of char width, so we must display an empty column as char separator and not data from the font
        if (letterColumn == SCROLL_FONT_WIDTH - 1)
        {
            // We display an empty column
            letterColumn = 0x00;
        }
        else
        {
            // LetterPos contains
            letter = pgm_read_byte(&_scrollText[i / SCROLL_FONT_WIDTH]);
            // Remove higher chars, translates lower case to higher case
            if (letter > 'Z')
            {
                if (letter >= 'a' && letter <= 'z')
                {
                    letter -= 32; //
                }
                else
                    letter = '?';
            }
            // Remove lower chars, manages specific case of ' ' and '!'
            if (letter < Character_font_5x8_InitialChar)
            {
                switch (letter)
                {
                case ' ':
                    letter = 'Z' + 2;
                    break;
                case '!':
                    letter = 'Z' + 1;
                    break;
                default:
                    letter = '?';
                }
            }
            letterColumn = pgm_read_byte(&Character_font_5x8[(letter - '0') * 5 + letterColumn]);
        }
        // Now we have the column data to display, we just have to set the pixels
        for (uint8_t p = 0; p < 8; p++)
        {
            drawPixel(_scrollStart + i - _scrollPosition, 7 - p, (letterColumn & (1 << p)) ? GFX_WHITE : GFX_BLACK);
        }
    }

    _scrollPosition++;
    if ((_scrollPosition + _scrollWidth - 1) / SCROLL_FONT_WIDTH >= _scrollTextSize)
    {
        scrollStop();
    }
    else
    {
        // if we are on first interval, we use a longer one to see the first letter, else the requested scroll interval is used
        _scrollNextUpdate = millis() + ((_scrollPosition == 1) ? SCROLL_INITIAL_INTERVAL : _scrollInterval);
    }
}

/**************************************************************************/
/**
   @brief      Checks if it's time to refresh the scrolling display
                and calls the scrollDisplay function if so
*/
/**************************************************************************/
void Matrix_GFX::scrollRefresh(bool refreshDisplay)
{
    // We need to update the scroll only if we have a scrolling in progress
    if ((_scrollNextUpdate > 0) && (millis() > _scrollNextUpdate))
    {
        scrollDisplay();
        if (refreshDisplay)
        {
            display();
        }
    }
}