//#include <MemoryUsage.h>
#include "TM1640_GFX.h"

#define PIN_CLK D5
#define PIN_DATA D7

TM1640_GFX lc = TM1640_GFX(PIN_DATA, PIN_CLK, 1);

void setup()
{
  Serial.begin(115200);
  lc.init();
  delay(100);
  lc.setRotation(1);
  for (int i = 0; i < 3; i++) {
    lc.drawPixel(i * 3, i*3, GFX_WHITE);
    lc.drawPixel(i * 3 + 1, i*3, GFX_WHITE);
    lc.drawPixel(i * 3 + 1, i*3 + 1, GFX_WHITE);
    lc.drawPixel(i * 3, i*3 + 1, GFX_WHITE);
  }
  lc.display();
}
int y;
void loop()
{
  /*  MEMORY_PRINT_START
    MEMORY_PRINT_HEAPSTART
    MEMORY_PRINT_HEAPEND
    MEMORY_PRINT_STACKSTART
    MEMORY_PRINT_END
    MEMORY_PRINT_HEAPSIZE

    Serial.println();
    Serial.println();
   
    FREERAM_PRINT;*/
  lc.clearDisplay();
  lc.setRotation(y);
  for (int i = 0; i < 2; i++) {
    lc.drawPixel(i * 3, i*3, GFX_WHITE);
    lc.drawPixel(i * 3 + 1, i*3, GFX_WHITE);
    lc.drawPixel(i * 3 + 1, i*3 + 1, GFX_WHITE);
    lc.drawPixel(i * 3, i*3 + 1, GFX_WHITE);
  }
  lc.display();
  y++;
  if (y>3) {
    y=0;
  }
   delay(200);
}
