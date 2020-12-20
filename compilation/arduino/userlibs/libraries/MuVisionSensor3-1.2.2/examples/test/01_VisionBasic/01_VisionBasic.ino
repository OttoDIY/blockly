#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * Vision Settings
 */
 
/*
 * Select Vision Type
 */
//#define VISION_TYPE     VISION_COLOR_DETECT // 01
//#define VISION_TYPE     VISION_COLOR_RECOGNITION // 02
//#define VISION_TYPE     VISION_BALL_DETECT // 03
//#define VISION_TYPE     VISION_BODY_DETECT // 05
#define VISION_TYPE     VISION_SHAPE_CARD_DETECT // 06
//#define VISION_TYPE     VISION_TRAFFIC_CARD_DETECT // 07
//#define VISION_TYPE     VISION_NUM_CARD_DETECT // 08

/*
 * Set Vision Level
 */
//#define VISION_LEVEL    kLevelSpeed // speed first
#define VISION_LEVEL    kLevelBalance // balance
//#define VISION_LEVEL    kLevelAccuracy // accuracy first

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
SoftwareSerial SoftSerial(SOFT_SERIAL_RX_PIN, SOFT_SERIAL_TX_PIN);  // RX, TX	// The hardware serial port is used for log output, so we use soft serial port
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
  MU.VisionBegin(VISION_TYPE);
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
      Serial.print("  || rate:");
      Serial.print((float)detected_count / (float)total_process_count * 100);
      Serial.print("%");
      Serial.print("  time:");
      Serial.print(frame_process_time);
      Serial.print("ms");
      Serial.print("  fps:");
      Serial.print(1000 / (total_process_time / total_process_count));      
      if (vision_state->detect) {
        detected_count++;
        Serial.print("  || detected");
        Serial.print("  label:");
        Serial.print(vision_state->vision_result[0].label);
        if (VISION_TYPE != VISION_COLOR_RECOGNITION) {
          Serial.print("  x:");
          Serial.print(vision_state->vision_result[0].x_value);
          Serial.print("  y:");
          Serial.print(vision_state->vision_result[0].y_value);
          Serial.print("  width:");
          Serial.print(vision_state->vision_result[0].width);
          Serial.print("  height:");
          Serial.print(vision_state->vision_result[0].height);
        } else {
          Serial.print("  r:");
          Serial.print(vision_state->vision_result[0].color_r_value);
          Serial.print("  g:");
          Serial.print(vision_state->vision_result[0].color_g_value);
          Serial.print("  b:");
          Serial.print(vision_state->vision_result[0].color_b_value);
        }
      } else {
        Serial.print("  || undetected");
      }
      Serial.println("");
    }
  }
}
