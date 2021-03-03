#include <SoftPWM.h>

#define DELAY 100
uint8_t leds[8] = {22, 23, 26, 27, 28, 29, 30, 31};

void setup()
{
  SoftPWMBegin();

  for (int i = 0; i < 8; i++)
    SoftPWMSet(leds[i], 0);

  SoftPWMSetFadeTime(ALL, 50, 400);
}

void loop()
{
  int i;

  for (i = 0; i < 7; i++)
  {
    SoftPWMSet(leds[i+1], 255);
    SoftPWMSet(leds[i], 0);
    delay(DELAY);
  }
  
  delay(400);
  
  for (i = 7; i > 0; i--)
  {
    SoftPWMSet(leds[i-1], 255);
    SoftPWMSet(leds[i], 0);
    delay(DELAY);
  }

  delay(400);

}
