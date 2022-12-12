#include <Otto.h>
Otto Otto;

#define LeftLeg 2   // left leg pin, servo[0]
#define RightLeg 3  // right leg pin, servo[1]
#define LeftFoot 4  // left foot pin, servo[2]
#define RightFoot 5 // right foot pin, servo[3]
#define Buzzer 13   // buzzer pin

void setup()
{
    Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);
    Otto.home();
}

void loop()
{
    for (int count = 0; count < 2; count++)
    {
        Otto.walk(1, 1000, 1);  // FORWARD
        Otto.walk(1, 1000, -1); // BACKWARD
    }
    for (int count = 0; count < 5; count++)
    {
        Otto.moonwalker(1, 1000, 25, 1);
    }
    for (int count = 0; count < 5; count++)
    {
        Otto.moonwalker(1, 1000, 25, -1);
    }
    for (int count = 0; count < 2; count++)
    {
        Otto.swing(1, 1000, 25);
        Otto.jitter(1, 1000, 25);
    }
}