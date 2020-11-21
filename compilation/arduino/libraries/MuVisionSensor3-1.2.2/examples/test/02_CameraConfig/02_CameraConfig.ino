#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * Select An Item for Testing
 */
#define AWB_TEST // Take BALL Vision as example
//#define FPS_TEST // Take BALL Vision as example
//#define ZOOM_TEST // Take SHAPE_CARD Vision as example
//#define ROTATE_TEST // Take SHAPE_CARD Vision as example

/*
 * White Banlance Test
 */
#ifdef AWB_TEST
#define AWB_MODE kAutoWhiteBalance // Auto mode
//#define AWB_MODE kLockWhiteBalance // Let MU camera face to a white paper for about 1 second to test the white balance and then will auto-locked the params. 
//#define AWB_MODE kWhiteLight // Use for white light environment
//#define AWB_MODE kYellowLight // Use for yellow light environment

#define VISION_TYPE VISION_COLOR_RECOGNITION
#endif

/*
 * FPS Test
 * This is the camera fps, not vision processing speed
 */
#ifdef FPS_TEST
#define FPS_VALUE  kFPSHigh // high fps
//#define FPS_VALUE  kFPSNormal // normal fps

#define VISION_TYPE VISION_BALL_DETECT
#endif

/*
 * Zoom Test
 * MU can see the object of far distance in the Higher Zoom level but the view angle is become narrow
 */
#ifdef ZOOM_TEST
#define ZOOM_VALUE kZoom1 // Near distance with wide view angle
//#define ZOOM_VALUE kZoom2
//#define ZOOM_VALUE kZoom3
//#define ZOOM_VALUE kZoom4
//#define ZOOM_VALUE kZoom5 // Far distance with narrow view angle

#define VISION_TYPE VISION_SHAPE_CARD_DETECT
#endif

/*
 * Rotate Test
 */
#ifdef ROTATE_TEST
#define ROATAE_FLAG 0  // MU logo up
//#define ROATAE_FLAG 1 // MU logo down

#define VISION_TYPE VISION_SHAPE_CARD_DETECT
#endif

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
  Serial.println("MU begin finised");

#ifdef AWB_TEST
  MU.CameraSetAwb(AWB_MODE);
#endif

#ifdef FPS_TEST
  MU.CameraSetFPS(FPS_VALUE);
#endif

#ifdef ZOOM_TEST
  MU.CameraSetZoom(ZOOM_VALUE);    //zoom值设置
#endif

#ifdef ROTATE_TEST
  MU.CameraSetRotate(ROATAE_FLAG);
#endif

  Serial.println("Vision begin...");
  MU.VisionBegin(VISION_TYPE);
  Serial.println("Finished");
  Serial.println("MU Vision Sensor Processing...");
}

void loop() {
  if (MU.GetValue(VISION_TYPE, kStatus)) {
    Serial.print("detected");
    if (VISION_TYPE != VISION_COLOR_RECOGNITION) {
      Serial.print("  label:");
      Serial.print(MU.GetValue(VISION_TYPE, kLabel));
      Serial.print("  x:");
      Serial.print(MU.GetValue(VISION_TYPE, kXValue));
      Serial.print("  y:");
      Serial.print(MU.GetValue(VISION_TYPE, kYValue));
      Serial.print("  width:");
      Serial.print(MU.GetValue(VISION_TYPE, kWidthValue));
      Serial.print("  height:");
      Serial.print(MU.GetValue(VISION_TYPE, kHeightValue));
      Serial.println("");
    } else {
      Serial.print("  label:");
      PrintColorLabel(MU.GetValue(VISION_TYPE, kLabel));
      Serial.println("");
    }
  } else {
    Serial.println("undetected");
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
