/*
 * Author: pan
 */

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "MuVisionSensor.h"
#include <Wire.h>

/*
 * Select MU address
 */

#define MU_DEVICE_ADDRESS     0x60 // Select address switch to 00
//#define MU_DEVICE_ADDRESS     0x61 // Select address switch to 01
//#define MU_DEVICE_ADDRESS     0x62 // Select address switch to 10
//#define MU_DEVICE_ADDRESS     0x63 // Select address switch to 11

/*
 * Output Settings
 */

//#define OUTPUT_MODE_SOFT_SERIAL     1 // Uart/Serial - Select output switch to 00
//#define OUTPUT_MODE_HARD_SERIAL   1 // Uart/Serial - Select output switch to 00 // for Mega1280 or Mega2560
#define OUTPUT_MODE_I2C           1 // I2C - Select output switch to 01

/*
 * Set soft serial pins
 */
#define SOFT_SERIAL_RX_PIN  2
#define SOFT_SERIAL_TX_PIN  3

/*
 * Selet serial baudrate
 * Baud 230400,460800,921600 are not suitable for arduino
 */
#define BAUDRATE  kBaud9600
//#define BAUDRATE  kBaud19200
//#define BAUDRATE  kBaud38400
//#define BAUDRATE  kBaud57600
//#define BAUDRATE  kBaud115200
 
/*
 * Select I2c clock
 */
#define I2C_CLOCK  100000           //I2C
//#define I2C_CLOCK  400000

/*
 * Vision Settings
 * Take BODY vision as example
 */ 
#define VISION_TYPE     VISION_BODY_DETECT // 05

/*
 * Functions
 */
MuVisionSensor MU(MU_DEVICE_ADDRESS); // 0x60 is device address

#ifdef OUTPUT_MODE_SOFT_SERIAL
SoftwareSerial SoftSerial(SOFT_SERIAL_RX_PIN, SOFT_SERIAL_TX_PIN);  // RX, TX  // The hardware serial port is used for log output, so we use soft serial port
#endif

#ifdef OUTPUT_MODE_SOFT_SERIAL
MuVisionSensorUart Register(&SoftSerial, MU_DEVICE_ADDRESS);
#elif OUTPUT_MODE_HARD_SERIAL
MuVisionSensorUart Register(&Serial1, MU_DEVICE_ADDRESS);
#elif OUTPUT_MODE_I2C
MuVisionSensorI2C Register(&Wire,MU_DEVICE_ADDRESS);
#endif

void setup() {
  Serial.begin(115200);
  Serial.println("==========Start==========");

  Serial.println("MU begin...");
  
#ifdef OUTPUT_MODE_SOFT_SERIAL
  uint32_t BaudList[8] = {9600,19200,38400,57600,115200};
  SoftSerial.setTimeout(100);
  uint8_t data_read = 0;
  for (int i = 0; i < 8; i++) {
    Serial.print("Baud Check:");
    Serial.println(BaudList[i]);
    SoftSerial.begin(BaudList[i]);
    delay(100);
    data_read = 0;
    Register.Set(0x25, 0xAA);
    Register.Get(0x25, &data_read);
    if (data_read == 0xAA) {
      break;
    }
  }
  MU.begin(&SoftSerial);   // Soft Uart/Serial
  MU.UartSetBaudrate(BAUDRATE);
  delay(100);
  SoftSerial.begin(BaudList[BAUDRATE]);
  
#elif OUTPUT_MODE_HARD_SERIAL
  uint32_t BaudList[8] = {9600,19200,38400,57600,115200};
  SoftSerial.setTimeout(100);
  uint8_t data_read = 0;
  for (int i = 0; i < 8; i++) {
    Serial.print("Baud Check:");
    Serial.println(BaudList[i]);
    Serial1.begin(BaudList[i]);
    delay(100);
    data_read = 0;
    Register.Set(0x25, 0xAA);
    Register.Get(0x25, &data_read);
    if (data_read == 0xAA) {
      break;
    }
  }
  MU.begin(&Serial1);   // Hard Uart/Serial
  MU.UartSetBaudrate(BAUDRATE);
  delay(100);
  Serial1.begin(BaudList[BAUDRATE]);
  
#elif OUTPUT_MODE_I2C
  Wire.setClock(I2C_CLOCK);
  Wire.begin();
  MU.begin(&Wire);             //I2C
#endif
  Serial.println("Finised");

  Serial.println("Vision begin...");
  MU.VisionBegin(VISION_TYPE);

  Serial.println("Finished");
  Serial.println("MU Vision Sensor Processing...");
}
  
void loop() {
  unsigned long time_start = 0;
  float average_time = 0.0;
  unsigned long success_send = 0;
  unsigned long total_send = 0;
  uint8_t data_write = 0;
  uint8_t data_read = 0;
  while (1) {
    time_start = millis();
    for (uint8_t data_write = 0; data_write < 100; data_write++) {
      Register.Set(0x25, data_write);
      Register.Get(0x25, &data_read);
      if (data_write == data_read) {
        success_send++;
      }
      total_send++;
    }
    average_time = (float)(millis()-time_start) / 100;
    
    Serial.print("total send:");
    Serial.print(total_send);
    Serial.print("  successed:");
    Serial.print(success_send);
    Serial.print("  success rate:");
    Serial.print((float)success_send / (float)total_send * 100);
    Serial.print("  r/w average time:");
    Serial.print(average_time);
    Serial.println("ms");
  }
}
