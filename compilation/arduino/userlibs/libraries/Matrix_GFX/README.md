# Matrix_GFX
Arduino library for LED matrix displays, compatible with Adafruit_GFX but lighter to save as much memory as possible on Atmega328 boards

## Arduino boards Compatibility
This library have been tested on atmega328 (Uno, Nano), ESP8266 and ESP32, it should be compatible with most other boards but I have not tested them.

## Matrix compatibilities
At the moment the library supports:
 - MAX7219 (and MAX7221)
 - TM1640
 - HT16K33
 - simulated matrices on OLED (I2C only, SSD1306 & SH1106) 
 *Only tested on 128x64 & 128x32 screens, please report if you try other resolutions*

## Rotation
Rotation can be managed 8x8 matrix by 8x8 matrix or for all matrices at the same time.
To apply to all matrices, pass no matrix index and the constant GFXMATRIX_ALL will be used by default.
For example:
```myMatrix.setRotation(2)```

## Documentation
### Text scrolling
The scrolling function is non-blocking, it works in 2 steps :
1. Declare strings you want to scroll in PROGMEM to save RAM ``const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT!";``
2. Initialize the scrolling ``matrix.scrollInit(scrollString, 0, 15, 200);`` here scrolling area starts at pixel 0, it is 15 pixels wide and we wait 200ms between each scroll step.
3. Call the refresh function as often as possible to update the scrolling text ``matrix.scrollRefresh(true);``. Pass false instead of true if you don't want the library to refresh the matrix immediately, for example if you want to make another update on the display. In that case the scrolling text won't be refreshed until you call the ``matrix.display()`` function

### Multiple OLEDs
It is possible to use multiple OLEDs using a TCA9548 multiplexer. In that case :
 - set the last parameter of the init() function to true
 - all OLED displays must have the same resolution and the same controller (SSD1306 or SH1106)
 - there will only be 1 simulated matrix per OLED display
 - matrix order will be the order of output pairs of the TCA9548 (1st matrix on SD0/SC0, 2nd one on SD1/SC1 etc)

### Everything else
Please see the examples, they show initialization of all matrices types and use all the functions implemented in the library.
Basically, the syntax for the drawing methods is the same than in Adafruit_GFX.



