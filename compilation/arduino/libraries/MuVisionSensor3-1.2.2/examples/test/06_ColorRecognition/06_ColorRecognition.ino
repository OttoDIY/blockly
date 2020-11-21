/*
 *      Author: pan
 */

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * Vision Settings
 */

/*
 * Set recognition area
 */
#define CENTER_X  50 // 0~100%
#define CENTER_Y  50 // 0~100%
#define WIDTH     5 // 0~100%
#define HEIGHT    5 // 0~100% 

/*
 * Set vision level
 */
//#define VISION_LEVEL    kLevelSpeed // speed first
#define VISION_LEVEL    kLevelBalance // balance
//#define VISION_LEVEL    kLevelAccuracy // accuracy first

/*
 * Set vision type
 */
#define VISION_TYPE VISION_COLOR_RECOGNITION

/*
 * Set white banlance to LOCK mode
 */
#define AWB_MODE kLockWhiteBalance // Let MU camera face to a white paper for about 1 second to test the white balance and then will auto-locked the params. 

/*
 * Output Settings
 */
//#define OUTPUT_MODE_UART  1 // Uart/Serial - Select output switch to 00
#define OUTPUT_MODE_I2C   1 // I2C - Select output switch to 01

/*
 * Set soft serial pins
 */
#define SOFT_SERIAL_RX_PIN  2
#define SOFT_SERIAL_TX_PIN  3

/*
 * Functions
 */
MuVisionSensor MU(0x60); // 0x60 is device address

#ifdef OUTPUT_MODE_UART
SoftwareSerial SoftSerial(SOFT_SERIAL_RX_PIN, SOFT_SERIAL_TX_PIN);  // RX, TX // The hardware serial port is used for log output, so we use soft serial port
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

  Serial.println("Vision begin...");

#ifdef AWB_MODE
  Serial.println("White Balance Testing...");
  MU.CameraSetAwb(AWB_MODE);
  delay(1000);
#endif
  
  MU.VisionBegin(VISION_TYPE);
  MU.write(VISION_TYPE, kXValue, CENTER_X);
  MU.write(VISION_TYPE, kYValue, CENTER_Y);
  MU.write(VISION_TYPE, kWidthValue, WIDTH);
  MU.write(VISION_TYPE, kHeightValue, HEIGHT);
  
#ifdef VISION_LEVEL
  MU.VisionSetLevel(VISION_TYPE, VISION_LEVEL);
#endif
  Serial.println("Finished");
  Serial.println("MU Vision Sensor Processing...");
}
  
void loop() {
  MuVsVisionState *vision_state;
  MuVisionType vision_type;

  unsigned long frame_begin_time = 0;
  unsigned long frame_process_time = 0;
  unsigned long total_process_time = 0;
  unsigned long detected_count = 0;
  unsigned long total_process_count = 0;

  frame_begin_time = millis();
    
  while (1) {
    vision_type = MU.UpdateResult(VISION_TYPE, false); // Update detection results
    if (vision_type & VISION_TYPE) {
      frame_process_time = millis() - frame_begin_time;
      frame_begin_time = millis();
      
      total_process_time += frame_process_time;
      
      vision_state = MU.GetVisionState(VISION_TYPE);
      
      Serial.print("frame:");
      Serial.print(vision_state->frame);
      
      total_process_count++;
      if (vision_state->detect) {
        detected_count++;
      }      
      Serial.print("  || rate:");
      Serial.print((float)detected_count / (float)total_process_count * 100);
      Serial.print("%");
      Serial.print("  time:");
      Serial.print(frame_process_time);
      Serial.print("ms");
      Serial.print("  fps:");
      Serial.print(1000 / (total_process_time / total_process_count));
      Serial.print("  || label:");
      PrintColorLabel(vision_state->vision_result[0].label);
      Serial.print("  r:");
      Serial.print(vision_state->vision_result[0].x_value);
      Serial.print("  g:");
      Serial.print(vision_state->vision_result[0].y_value);
      Serial.print("  b:");
      Serial.print(vision_state->vision_result[0].width);
      Serial.println("");
    }
  }
}

void PrintColorLabel(uint8_t label) {
  switch (label) {
    case 1:
      Serial.print("black");
      break;
    case 2:
      Serial.print("white");
      break;
    case 3:
      Serial.print("red");
      break;
    case 4:
      Serial.print("yellow");
      break;
    case 5:
      Serial.print("green");
      break;
    case 6:
      Serial.print("cyan");
      break;
    case 7:
      Serial.print("blue");
      break;
    case 8:
      Serial.print("purple");
      break;
    default:
      Serial.print("unknown");
      break;
  }
}
