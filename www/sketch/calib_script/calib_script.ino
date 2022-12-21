#include <Otto.h>
Otto Otto;
#include <EEPROM.h>

int i = 0;
int v = 0;

int positions[] = {90, 90, 90, 90};
int8_t trims[4] = {0, 0, 0, 0};

#define LeftLeg 2   // left leg pin, servo[0]
#define RightLeg 3  // right leg pin, servo[1]
#define LeftFoot 4  // left foot pin, servo[2]
#define RightFoot 5 // right foot pin, servo[3]
#define Buzzer 13   // buzzer pin

void readChar(char ch)
{
    switch (ch)
    {
    case '0' ... '9':
        v = (v * 10 + ch) - 48;
        break;
    case 'a':
        trims[0] = v - 90;
        setTrims();
        v = 0;
        break;
    case 'b':
        trims[1] = v - 90;
        setTrims();
        v = 0;
        break;
    case 'c':
        trims[2] = v - 90;
        setTrims();
        v = 0;
        break;
    case 'd':
        trims[3] = v - 90;
        setTrims();
        v = 0;
        break;
    case 'w':
        for (int count = 0; count < 4; count++)
        {
            Otto.walk(1, 1000, 1); // FORWARD
        }
        break;
    case 's':
        for (i = 0; i <= 3; i = i + 1)
        {
            EEPROM.write(i, trims[i]);
        }
        delay(500);
        Otto.sing(S_superHappy);
        Otto.crusaito(1, 1000, 25, -1);
        Otto.crusaito(1, 1000, 25, 1);
        Otto.sing(S_happy_short);
        break;
    }
}

void setTrims()
{
    Otto.setTrims(trims[0], trims[1], trims[2], trims[3]);
    Otto._moveServos(10, positions);
}

void setup()
{
    Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);
    Otto.home();

    Serial.begin(9600);

    // 1. Upload this code to your robot, wait until is successful
    // 2. Unplug the USB connection and close Otto Blockly.
    // 3. Download, Unzip and Run the calibration app
    // 4. Plug the USB again into Otto (the red cross will turn into a green tick)
    // 5. Now adjust the servo positions so the the legs and feet are correctly aligned in the robot on your table.
    // 6. When the servos on Otto are correctly aligned, click on 'Walk Test' to see how Otto moves.  If does not wlak straight, iterate step 5
    // 7. Once you are happy with the calibration, click 'Save'.
    v = 0;
}

void loop()
{
    if (Serial.available())
    {
        readChar((Serial.read()));
    }
}