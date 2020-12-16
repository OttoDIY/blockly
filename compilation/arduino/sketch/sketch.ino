#include <Otto9Humanoid.h>
Otto9Humanoid Otto;

int high;
int time;
const char data[] = "VARIABLE#";
unsigned long int matrix;

#define DIN_PIN A3
#define CS_PIN A2
#define CLK_PIN A1
#define LED_DIRECTION 1
#define DIN_PIN A3
#define CS_PIN A2
#define CLK_PIN A1
#define LED_DIRECTION 1

void setup() {
  Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);
    matrix = 0b010010111111111111011110001100;
  Otto.putMouth(matrix, false);

}

void loop() {
    itoa(time, data, 10);// convert integer into a string so we can display this on the matrix
    Otto.clearMouth();
    Otto.writeText (data,50); // show the data with a fast scroll
    delay(50);Otto.setLed(high,0,1);
    high = high + 1;
    time = time + 1;
    delay(200);
    if (high == 8) {
      Otto.clearMouth();
      high = 0;
    }

}