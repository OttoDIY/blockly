/*
 * PlayChristmasMelodyUSDistance.cpp
 *
 * Plays a random Christmas melody if US sensor value is in a defined range.
 *
 *  Copyright (C) 2019  Armin Joachimsmeyer
 *  armin.joachimsmeyer@gmail.com
 *
 *  This file is part of PlayRttl https://github.com/ArminJo/PlayRtttl.
 *
 *  PlayRttl is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/gpl.html>.
 */

#include <Arduino.h>

#include "HCSR04.h"
#include "BlinkLed.h"
#include <PlayRtttl.h>

#define TALKIE_FEEDBACK
#if defined(TALKIE_FEEDBACK)
/*
 * You need to install "Talkie" and "EasyButtonAtInt01" libraries under "Tools -> Manage Libraries..." or "Ctrl+Shift+I" -> use the names as filter string
 */
#include <TalkieUtils.h>
#include <Vocab_US_Large.h>
Talkie Voice;

#define USE_BUTTON_0
#include <EasyButtonAtInt01.cpp.h>
EasyButton Button0AtPB6;
#endif

/*
 * The range for the melody to start
 */
#define MINIMUM_DISTANCE_CENTIMETER 40
#define MAXIMUM_DISTANCE_CENTIMETER 120

#define NUMBER_OF_CONSECUTIVE_IN_RANGE_READINGS 5
#define DELAY_MILLIS_FOR_IN_RANGE_READING 200

#define NUMBER_OF_CONSECUTIVE_OUT_RANGE_READINGS 5
#define DELAY_MILLIS_FOR_OUT_RANGE_READING 1000

#define PIN_BUZZER          3

#define PIN_ECHO_IN         4
#define PIN_TRIGGER_OUT     5

#define PIN_GREEN_LED       A0
#define PIN_YELLOW_LED      A2
#define PIN_RED_LED         A4

BlinkLed RedLed(PIN_RED_LED);
BlinkLed YellowLed(PIN_YELLOW_LED);
BlinkLed GreenLed(PIN_GREEN_LED);

void playRandomSongAndBlink();

//The setup function is called once at startup of the sketch
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(115200);
#if defined(__AVR_ATmega32U4__) || defined(SERIAL_USB) || defined(SERIAL_PORT_USBVIRTUAL)
    delay(2000); // To be able to connect Serial monitor after reset and before first printout
#endif
    // Just to know which program is running on my Arduino
    Serial.println(F("START " __FILE__ " from " __DATE__ "\r\nUsing library version " VERSION_PLAY_RTTTL));

    initUSDistancePins(PIN_TRIGGER_OUT, PIN_ECHO_IN);

    delay(500); // to avoid sound directly at power up
    uint16_t tDistance = getUSDistance();
    if (tDistance < US_DISTANCE_DEFAULT_TIMEOUT_CENTIMETER) {
        randomSeed(tDistance);
        /*
         * Play first song
         */
        playRandomSongAndBlink();
    }
    RedLed.off(); // switch it manually off here
}

void loop() {
    static uint8_t sInRangeCounter = 0;
    static uint16_t tRandomSeed;

    unsigned int tCentimeter = getUSDistanceAsCentiMeterWithCentimeterTimeout(300);
    Serial.print("Distance=");
    Serial.print(tCentimeter);
    Serial.println("cm.");

#if defined(TALKIE_FEEDBACK)
    if (Button0AtPB6.ButtonToggleState) {
        /*
         * Output distance with talkie
         */
        if (tCentimeter == 0) {
            Voice.sayQ(sp2_TIME);
            Voice.sayQ(sp2_OUT);
        } else {
            sayQNumber(&Voice, tCentimeter);
        }
        Voice.wait();
    }
#endif

    if (tCentimeter > MINIMUM_DISTANCE_CENTIMETER && tCentimeter < MAXIMUM_DISTANCE_CENTIMETER) {
        sInRangeCounter++;
        tRandomSeed += tCentimeter;
        if (sInRangeCounter >= NUMBER_OF_CONSECUTIVE_IN_RANGE_READINGS) {
            /*
             * Now an object is for a longer time in the right range.
             * Play one song and wait for the object to leave the range
             * As long as the object is in range, the red LED is active
             */
            randomSeed(tRandomSeed);
            playRandomSongAndBlink();
            sInRangeCounter = 0;

            // wait for distance to be out of range for NUMBER_OF_CONSECUTIVE_OUT_RANGE_READINGS consecutive readings
            uint8_t tCounter = 0;
            while (tCounter < NUMBER_OF_CONSECUTIVE_OUT_RANGE_READINGS) {
                tCentimeter = getUSDistanceAsCentiMeter();
                Serial.print("Distance=");
                Serial.print(tCentimeter);
                Serial.print("cm.");

#if defined(TALKIE_FEEDBACK)
                if (Button0AtPB6.ButtonToggleState) {
                    /*
                     * Output distance with talkie
                     */
                    if (tCentimeter > 0) {
                        sayQNumber(&Voice, tCentimeter);
                    } else {
                        Voice.sayQ(sp2_TIME);
                        Voice.sayQ(sp2_OUT);
                    }
                    Voice.wait();
                }
#endif

                if (tCentimeter < MINIMUM_DISTANCE_CENTIMETER || tCentimeter > MAXIMUM_DISTANCE_CENTIMETER) {
                    tCounter++;
                } else {
                    tCounter = 0; // reset to start condition
                    Serial.print(" Still in range.");
                }
                Serial.print(" Wait for ");
                Serial.print(NUMBER_OF_CONSECUTIVE_OUT_RANGE_READINGS - tCounter);
                Serial.println(" distances out of range.");
                delay(DELAY_MILLIS_FOR_OUT_RANGE_READING);
            }
        } else {
            GreenLed.on();
            delay(5);
            GreenLed.off();
        }
    } else {
        sInRangeCounter = 0;
    }

    RedLed.off();
    delay(DELAY_MILLIS_FOR_IN_RANGE_READING);
}

/*
 * Leaves red LED on
 */
void playRandomSongAndBlink() {
    char StringBuffer[16];
    Serial.println();
    Serial.print("Now playing: ");
    startPlayRandomRtttlFromArrayPGM(PIN_BUZZER, RTTTLChristmasMelodies, ARRAY_SIZE_CHRISTMAS_MELODIES, StringBuffer,
            sizeof(StringBuffer));
    Serial.println(StringBuffer);

    /*
     * Start LEDs blinking
     */
    RedLed.startWithOnOffTime(300, 600);
    YellowLed.startWithOnOffTime(800, 400);
    GreenLed.startWithOnOffTime(1000, 1500);

// wait for the song to end
    while (updatePlayRtttl()) {
        RedLed.update();
        YellowLed.update();
        GreenLed.update();
        delay(1);
    }
// switch off only 2 LEDs, the red one will be on until the "object in the right distance" is gone
    YellowLed.off();
    GreenLed.off();
    RedLed.on();
    delay(2000);
}
