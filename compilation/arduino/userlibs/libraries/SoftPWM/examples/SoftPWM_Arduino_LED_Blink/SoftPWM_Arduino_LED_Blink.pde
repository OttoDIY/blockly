#include <SoftPWM.h>

void setup()
{
  SoftPWMBegin();
  
  SoftPWMSet(13, 0);

  SoftPWMSetFadeTime(13, 1000, 1000);
}

void loop()
{
  SoftPWMSet(13, 255);
  delay(1000);
  SoftPWMSet(13, 0);
  delay(1000);
}
