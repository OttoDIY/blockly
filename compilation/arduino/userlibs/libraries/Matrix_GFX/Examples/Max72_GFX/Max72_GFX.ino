#include "Max72_GFX.h"

// Matrix count
#define MATRIX_COUNT 2

// Rotation from 0 to 3
#define MATRIX_ROTATION 0

// Matrix is 2 panels wide (and 1 panel high, default value not passed here)
Max72_GFX matrix = Max72_GFX(12, 11, 10, 3);

static const uint8_t PROGMEM robot[] = {B01111110,B10000001,B10100101,B10000001,B01111110,B10000001,B10000001,B10000001},
mouse[] = {B01000010,B10111101,B10000001,B10100101,B10000001,B01000010,B00100100,B00011000},
reindeer[] = {B01000010,B11100111,B01000010,B00000000,B00100100,B00000000,B00000000,B00011000},
bat[] = {B10000001,B11000011,B10111101,B10000001,B10100101,B10000001,B01011010,B00100100},
robot2[] = {B01111110,B11110001,B11010101,B11110001,B01111110,B10001111,B10001111,B10001111};

const static char scrollString[] PROGMEM = "I CAN SCROLL TEXT and Do SOMEThing else !";

void setup()
{
  matrix.setRotation(MATRIX_ROTATION);
  matrix.init();
}

void loop()
{  
  // shapes
  for (int i=0; i<4;i++) {
    matrix.clearDisplay();
    matrix.drawRect(3-i, 3-i, ((i+1)*2), ((i+1)*2), GFX_WHITE);
    matrix.display();
    delay(500);
  }
  for (int i=0; i<4;i++) {
    matrix.clearDisplay();
    matrix.fillRect(3-i, 3-i, ((i+1)*2), ((i+1)*2), GFX_WHITE);
    matrix.display();
    delay(500);
  }
  
  for (int i=1; i<4;i++) {
    matrix.clearDisplay();
    matrix.drawRoundRect(3-i, 3-i, ((i+1)*2), ((i+1)*2), i-1, GFX_WHITE);
    matrix.display();
    delay(500);
  }
  for (int i=1; i<4;i++) {
    matrix.clearDisplay();
    matrix.fillRoundRect(3-i, 3-i, ((i+1)*2), ((i+1)*2), i-1, GFX_WHITE);
    matrix.display();
    delay(500);
  }
  
  for (int i=1; i<5;i++) {
    matrix.clearDisplay();
    matrix.drawCircle(3,3,i, GFX_WHITE);
    matrix.display();
    delay(500);
  }
  for (int i=1; i<5;i++) {
    matrix.clearDisplay();
    matrix.fillCircle(3,3,i, GFX_WHITE);
    matrix.display();
    delay(500);
  }

  matrix.clearDisplay();
  for (int i=0; i<8;i++) {
    matrix.drawLine(0, i*2, i*2, 0, GFX_WHITE);
    matrix.display();
    delay(500);
  }
  for (int i=0; i<7;i++) {
    matrix.drawLine(0, 6-i*2, 1+i*2, 7, GFX_BLACK);
    matrix.display();
    delay(500);
  }  
    
  // draw pixel
  for (int repeat = 0; repeat < 20; repeat++) {
    matrix.clearDisplay();
    for (int i=0;i<4;i++) {
      for(int j=0;j<4;j++) {
      matrix.drawPixel(j*2 + (repeat+1)%2, i*2, GFX_WHITE);
      matrix.drawPixel(j*2+repeat % 2, i*2+1, GFX_WHITE);
      }
    }
    matrix.display();
    delay(200);
  }

  // display brightness
  for(int repeat = 0; repeat < 4; repeat++) {
    for(int level = 0; level < 16;level++) {
      matrix.setBrightness(repeat % 2 ? level : 15-level);
      delay(125);
    }
  }
  matrix.setBrightness(8);

  // bitmap
  for(int8_t i=0;i<8;i++) {
    matrix.clearDisplay();
    matrix.drawBitmap(7-i, 7-i, robot2, 8, 8, false, GFX_WHITE, GFX_BLACK);
    matrix.display();
    delay(250);
  }
  delay(1000);
  // mirrored bitmap
  matrix.drawBitmap(0, 0, robot2, 8, 8, true, GFX_WHITE, GFX_BLACK);
  matrix.display();
  delay(2000);

  // bitmap again
  uint8_t foreColor = GFX_WHITE;
  uint8_t backColor = GFX_BLACK;
  for(int i=0;i<25;i++) {
    for(int r=0;(r<8 && i%8 == 0)||(r<1);r++) { // ugly trick to flash each time we have a full bitmap displayed
     foreColor = r%2 ? GFX_BLACK: GFX_WHITE;
     backColor = r%2 ? GFX_WHITE : GFX_BLACK;
     matrix.drawBitmap(0-i, 0, robot, 8, 8, false, backColor, foreColor);
     matrix.drawBitmap(8-i, 0, mouse, 8, 8, false, foreColor, backColor);
     matrix.drawBitmap(16-i, 0, reindeer, 8, 8, false, foreColor, backColor);
     matrix.drawBitmap(24-i, 0, bat, 8, 8, false, foreColor, backColor);
     matrix.display();
     delay(200);
    }
  }
  delay(500);


  // scrolling text
  matrix.clearDisplay();
  matrix.scrollInit(scrollString, 0, 7, 200);
  // We do something else while keeping the text scrolling with calls to refresh
  for(int repeat = 0; repeat < 65; repeat++) {
    for(int i=0;i<24;i++) {
      matrix.scrollRefresh(false); // We don't refresh inside the scroll as we need to continue refresh after scroll is finished
      matrix.drawPixel(i/3, 7, GFX_WHITE);
      matrix.drawPixel(7, i/3, GFX_WHITE);
      matrix.display();
      // hide them for next round
      matrix.drawPixel(i/3, 7, GFX_BLACK);
      matrix.drawPixel(7, i/3, GFX_BLACK);
      delay(20);
    }
  }
}
