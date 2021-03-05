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
  uint8_t pin = random(8);
  
  SoftPWMSet(leds[pin], 255);
  delay(50);
  SoftPWMSet(leds[pin], 0);

  delay(random(DELAY));
}
