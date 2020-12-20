/*
 * Choose communication mode define here:
 *    I2C_MODE    : I2C mode, default pin: MU_SDA <==> ARDUINO_SDA, MU_SCL <==> ARDUINO_SCL
 *    SERIAL_MODE : Serial mode, default pin: MU_TX <==> ARDUINO_PIN3, MU_RX <==> ARDUINO_PIN2
 */
#define I2C_MODE
//#define SERIAL_MODE

/*
 * Choose MU address here: 0x60, 0x61, 0x62, 0x63
 *        default address: 0x60
 */
#define MU_ADDRESS    0x60

#include <MuVisionSensor.h>

#ifdef I2C_MODE
#include <Wire.h>
#endif
#ifdef SERIAL_MODE
#include <SoftwareSerial.h>
#define TX_PIN 2
#define RX_PIN 3
SoftwareSerial mySerial(RX_PIN, TX_PIN);
#endif
MuVisionSensor Mu(MU_ADDRESS);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  uint8_t err = 0;
#ifdef I2C_MODE
  Wire.begin();
  // initialized MU on the I2C port
  err = Mu.begin(&Wire);
#elif defined SERIAL_MODE
  mySerial.begin(9600);
  // initialized MU on the soft serial port
  err = Mu.begin(&mySerial);
#endif
  if (err == MU_OK) {
    Serial.println("MU initialized.");
  } else {
    do {
      Serial.print("fail to initialize MU! Please check device ID is: ");
      Serial.print(MU_DEVICE_ID);
      Serial.println(" or make sure MU is working on the correct port with correct mode.");
      delay(5000);
    } while (1);
  }
  // enable gesture detection
  Mu.LsBegin(LS_GESTURE_ENABLE);
}

void loop() {
  // read gesture data
  MuVsLsGesture gesture = Mu.LsReadGesture();
  if (gesture) {
    Serial.print("gesture : ");
    switch (gesture) {
      case kGestureUp:
        Serial.println("upward");
        break;
      case kGestureDown:
        Serial.println("downward");
        break;
      case kGestureLeft:
        Serial.println("leftward");
        break;
      case kGestureRight:
        Serial.println("rightward");
        break;
      case kGesturePush:
        Serial.println("push down");
        break;
      case kGesturePull:
        Serial.println("lift up");
        break;
      default:
        Serial.print("unknow gesture type[");
        Serial.print(gesture);
        Serial.println(']');
        break;
    }
  }
}

