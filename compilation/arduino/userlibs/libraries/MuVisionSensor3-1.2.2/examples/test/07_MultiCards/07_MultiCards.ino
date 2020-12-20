/*
 *
 */

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * Vision Settings
 */
 
/*
 * Set Vision Type
 */
#define VISION_TYPE     VISION_SHAPE_CARD_DETECT | VISION_TRAFFIC_CARD_DETECT | VISION_NUM_CARD_DETECT

/*
 * Set Vision Level
 */
#define VISION_LEVEL    kLevelAccuracy // accuracy first

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
  
  while (1) {
    vision_type = MU.UpdateResult(VISION_TYPE, false); // Update detection results
  
    if (vision_type & VISION_TYPE) {
     vision_state = MU.GetVisionState(VISION_TYPE);
      Serial.print("=====frame:");
      Serial.print(vision_state->frame);
      Serial.println("=====");
      
      Serial.print("shape card : ");
      if (MU.GetValue(VISION_SHAPE_CARD_DETECT, kStatus)) {
        PrintShapeCardLabel(MU.GetValue(VISION_SHAPE_CARD_DETECT, kLabel));
      } else {
        Serial.println("undetected");
      }
  
      Serial.print("traffic card : ");
      if (MU.GetValue(VISION_TRAFFIC_CARD_DETECT, kStatus)) {
        PrintTrafficCardLabel(MU.GetValue(VISION_TRAFFIC_CARD_DETECT, kLabel));
      } else {
        Serial.println("undetected");
      }
  
      Serial.print("number card : ");
      if (MU.GetValue(VISION_NUM_CARD_DETECT, kStatus)) {
        Serial.println(MU.GetValue(VISION_NUM_CARD_DETECT, kLabel));
      } else {
        Serial.println("undetected");
      }
    }
  }
}

void PrintShapeCardLabel(uint8_t label) {
  switch (label) {
    case 1:
      Serial.println("check");
      break;
    case 2:
      Serial.println("cross");
      break;
    case 3:
      Serial.println("circle");
      break;
    case 4:
      Serial.println("square");
      break;
    case 5:
      Serial.println("triangle");
      break;
    default:
      Serial.println("unknown");
      break;
  }
}

void PrintTrafficCardLabel(uint8_t label) {
  switch (label) {
    case 1:
      Serial.println("forward");
      break;
    case 2:
      Serial.println("left");
      break;
    case 3:
      Serial.println("right");
      break;
    case 4:
      Serial.println("turn around");
      break;
    case 5:
      Serial.println("park");
      break;
    default:
      Serial.println("unknown");
      break;
  }
}
