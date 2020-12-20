#include <MuVisionSensor3_AT.h>
#include <SoftwareSerial.h>

/*
 * Change vision type here, VISION_TYPE:"COLORBLOCK"
 *                                      "COLORRECOG"
 *                                      "BALL"
 *                                      "BODY"
 *                                      "SHAPECARD"
 *                                      "TRAFFICCARD"
 *                                      "NUMBERCARD"
 */
#define VISION_TYPE         "BALL"
// set WiFi mode : AP or STA
#define MU3_WIFI_MODE       "AP"
// set WiFi SSID, if SSID is empty, the default SSID is used
#define MU3_WIFI_SSID       ""
// set WiFi password, password length should be 8~64 or empty
#define MU3_WIFI_PASSWORD   ""
// set serial port time out, DO NOT change this parameter if not necessary
#define MU3_SERIAL_TIMEOUT  1000
// set connection serial port
#define TX_PIN 2
#define RX_PIN 3
SoftwareSerial mySerial(RX_PIN, TX_PIN);
#define MU3_SERIAL          mySerial

int read8();
void write8(uint8_t c);

MuVisionSensor3_AT Mu(read8, write8);

void setup() {
  // serial begin
  Serial.begin(9600);
  MU3_SERIAL.begin(9600);
  if (String(MU3_WIFI_MODE) == String("STA")
      || String(MU3_WIFI_SSID) != String("")) {
    // WiFi set SSID/password/mode
    Mu.WifiSet(MU3_WIFI_SSID,MU3_WIFI_PASSWORD,MU3_WIFI_MODE);
    Serial.println("waiting...");
    uint8_t err = Mu.WifiCon("1");        // WiFi connection.
    if (!err) {
      if (String(MU3_WIFI_MODE) == String("STA")) {
        Serial.print("Connect to WiFi '");
        Serial.print(MU3_WIFI_SSID);
        Serial.println("' successfully!");
      }
      if (String(MU3_WIFI_MODE) == String("AP")) {
        Serial.print("Create MU WiFi hot-spot '");
        Serial.print(MU3_WIFI_SSID);
        Serial.println("' successfully!");
      }
    } else {
      Serial.print("Connection to WiFi '");
      Serial.print(MU3_WIFI_SSID);
      Serial.println("' failed!");
      Serial.println("Please check your SSID and password, and try again.");
      while(1);
    }
  }
  // enable vision type
  Mu.Vision(VISION_TYPE, "1");
}

void loop() {
  MuVsVisionState vision_state;
  Mu.Read(VISION_TYPE, &vision_state);
  Serial.print("Vision ");
  Serial.print(VISION_TYPE);
  Serial.print(": frame count=");
  Serial.print(vision_state.frame);
  Serial.print(",detect=");
  if (vision_state.detect) {
    Serial.print(",x=");
    Serial.print(vision_state.vision_result[0].x_value);
    Serial.print(",y=");
    Serial.print(vision_state.vision_result[0].y_value);
    Serial.print(",w=");
    Serial.print(vision_state.vision_result[0].width);
    Serial.print(",h=");
    Serial.print(vision_state.vision_result[0].height);
    Serial.print(",label=");
    Serial.println(vision_state.vision_result[0].label);
  } else {
    Serial.println(0);
  }
  // print WiFi passthrough data
  while (Serial.available()) {
    // transmit data from PC serial monitor to target device
    MU3_SERIAL.write(Serial.read());
    if (!Serial.available()) {
      delay(50);
      break;
    }
  }
  while (Mu.available() || MU3_SERIAL.available()) {
    // transmit data from target device to PC serial monitor
    Serial.write(Mu.read8());
  }
}

int read8() {
  unsigned long time = millis();
  while(!MU3_SERIAL.available() && millis()-time<1000);
  if (millis()-time>=1000) {
    return -1;
  }
  return MU3_SERIAL.read();
}
void write8(uint8_t c) {
  MU3_SERIAL.write(c);
}

