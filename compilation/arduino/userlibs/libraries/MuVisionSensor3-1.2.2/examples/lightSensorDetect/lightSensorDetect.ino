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
  // enable proximity/color/ambient light detection
  Mu.LsBegin(LS_PROXIMITY_ENABLE | LS_COLOR_ENABLE | LS_AMBIENT_LIGHT_ENABLE);
  // light set sensitivity, default value is kSensitivity2
  Mu.LsSetSensitivity(kSensitivity2);
  // enable white balance for color detection
  Mu.LsWhiteBalanceEnable();
}

void loop() {
  // read color from light sensor
  uint8_t r = Mu.LsReadColor(kLsColorRed);
  uint8_t g = Mu.LsReadColor(kLsColorGreen);
  uint8_t b = Mu.LsReadColor(kLsColorBlue);
  uint16_t h = Mu.LsReadColor(kLsColorHue);
  uint8_t s = Mu.LsReadColor(kLsColorSaturation);
  uint8_t v = Mu.LsReadColor(kLsColorValue);
  uint8_t proximity = Mu.LsReadProximity();
  uint8_t color_label = Mu.LsReadColor(kLsColorLabel);
  uint16_t als = Mu.LsReadAmbientLight();
  Serial.print("color=");
  switch(color_label) {
    case MU_COLOR_BLACK:
      Serial.print("BLACK");
      break;
    case MU_COLOR_WHITE:
      Serial.print("WHITE");
      break;
    case MU_COLOR_RED:
      Serial.print("RED");
      break;
    case MU_COLOR_YELLOW:
      Serial.print("YELLOW");
      break;
    case MU_COLOR_GREEN:
      Serial.print("GREEN");
      break;
    case MU_COLOR_CYAN:
      Serial.print("CYAN");
      break;
    case MU_COLOR_BLUE:
      Serial.print("BLUE");
      break;
    case MU_COLOR_PURPLE:
      Serial.print("PURPLE");
      break;
    default:
      Serial.print("unknow color[");
      Serial.print(color_label);
      Serial.print(']');
      break;
  }
  Serial.print(",r=");
  Serial.print(r);
  Serial.print(",g=");
  Serial.print(g);
  Serial.print(",b=");
  Serial.print(b);
  Serial.print(",h=");
  Serial.print(h);
  Serial.print(",s=");
  Serial.print(s);
  Serial.print(",v=");
  Serial.println(v);
  Serial.print("proximity=");
  Serial.println(proximity);
  Serial.print("ambient light=");
  Serial.println(als);
}

