/*
 *  
 *  Author: pan
 */

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * LED settings
 */

/*
* Select mode
* 0: Auto Mode, If MU detect object shows (DETECTED_COLOR), else shows (UNDETECTED_COLOR)
* 1: Manual Mode, MU shows the (DETECTED_COLOR) by user settings whether it's detected or not
*/
#define LED1_MANUAL_MODE  0 // Auto
//#define LED1_MANUAL_MODE  1 // Manual

#define LED2_MANUAL_MODE  0 // Auto
//#define LED2_MANUAL_MODE  1 // Manual

/*
 * Hold or not?
 * 0: Clear the led of each frame
 * 1: Hold the led light of each frame 
 */
#define LED1_HOLD   0
//#define LED1_HOLD   1

#define LED2_HOLD   0
//#define LED2_HOLD   1

/*                    
 * Set LED1 Color
 */
//#define LED1_DETECTED_COLOR kLedClose    // 0
//#define LED1_DETECTED_COLOR kLedRed      // 1
//#define LED1_DETECTED_COLOR kLedGreen    // 2
//#define LED1_DETECTED_COLOR kLedYellow   // 3
#define LED1_DETECTED_COLOR kLedBlue     // 4
//#define LED1_DETECTED_COLOR kLedPurple   // 5
//#define LED1_DETECTED_COLOR kLedCyan     // 6
//#define LED1_DETECTED_COLOR kLedWhite    // 7

//#define LED1_UNDETECTED_COLOR kLedClose    // 0
//#define LED1_UNDETECTED_COLOR kLedRed      // 1/
#define LED1_UNDETECTED_COLOR kLedGreen    // 2/
//#define LED1_UNDETECTED_COLOR kLedYellow   // 3
//#define LED1_UNDETECTED_COLOR kLedBlue     // 4
//#define LED1_UNDETECTED_COLOR kLedPurple   // 5
//#define LED1_UNDETECTED_COLOR kLedCyan     // 6
//#define LED1_UNDETECTED_COLOR kLedWhite    // 7

/*
 * Set LED2 Color
 */
//#define LED2_DETECTED_COLOR kLedClose    // 0
//#define LED2_DETECTED_COLOR kLedRed      // 1
//#define LED2_DETECTED_COLOR kLedGreen    // 2
//#define LED2_DETECTED_COLOR kLedYellow   // 3
#define LED2_DETECTED_COLOR kLedBlue     // 4
//#define LED2_DETECTED_COLOR kLedPurple   // 5
//#define LED2_DETECTED_COLOR kLedCyan     // 6
//#define LED2_DETECTED_COLOR kLedWhite    // 7

//#define LED2_UNDETECTED_COLOR kLedClose    // 0
#define LED2_UNDETECTED_COLOR kLedRed      // 1
//#define LED2_UNDETECTED_COLOR kLedGreen    // 2
//#define LED2_UNDETECTED_COLOR kLedYellow   // 3
//#define LED2_UNDETECTED_COLOR kLedBlue     // 4
//#define LED2_UNDETECTED_COLOR kLedPurple   // 5
//#define LED2_UNDETECTED_COLOR kLedCyan     // 6
//#define LED2_UNDETECTED_COLOR kLedWhite    // 7

/*                    
 * Set LED Brightness Level
 * range: 0~15
 */
#define LED1_LEVEL    1 //0~15
#define LED2_LEVEL    1 //0~15

/*
 * Output Settings
 */
//#define OUTPUT_MODE_UART  1 // Uart/Serial - Select output switch to 00
#define OUTPUT_MODE_I2C  1 // I2C - Select output switch to 01

/*
 * Set soft serial pins
 */
#define SOFT_SERIAL_RX_PIN  2
#define SOFT_SERIAL_TX_PIN  3

/*
 * Vision Settings
 * Take BODY vision as example
 */
#define VISION_TYPE VISION_BODY_DETECT

/*
 * Functions
 */
MuVisionSensor MU(0x60); // Set address

#ifdef OUTPUT_MODE_UART
SoftwareSerial SoftSerial(SOFT_SERIAL_RX_PIN, SOFT_SERIAL_TX_PIN);  // RX, TX  // The hardware serial port is used for log output, so we use soft serial port
#endif

void setup() {
  Serial.begin(115200);
  Serial.println("==========Start==========");

  Serial.println("MU begin...");
#ifdef OUTPUT_MODE_UART
  SoftSerial.begin(9600);
  MU.begin(&SoftSerial);   // Uart/Serial
#elif OUTPUT_MODE_I2C
  Wire.begin();
  MU.begin(&Wire);             //I2C
#endif
  Serial.println("Finised");

  Serial.println("Led begin...");
  MU.LedSetMode(kLed1, LED1_MANUAL_MODE, LED1_HOLD);
  MU.LedSetMode(kLed2, LED2_MANUAL_MODE, LED2_HOLD);
  
  MU.LedSetColor(kLed1, LED1_DETECTED_COLOR, LED1_UNDETECTED_COLOR, LED1_LEVEL);
  MU.LedSetColor(kLed2, LED2_DETECTED_COLOR, LED2_UNDETECTED_COLOR, LED2_LEVEL);
  Serial.println("Finished");
   
  Serial.println("Vision begin...");
  MU.VisionBegin(VISION_TYPE);
  Serial.println("Finished");
  Serial.println("MU Vision Sensor Processing...");
}

void loop() {
  if (MU.GetValue(VISION_TYPE, kStatus)) {
    Serial.println("detect");
  } else {
    Serial.println("undetect");
  }
}
