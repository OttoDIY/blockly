/*
 * LightToTone.cpp
 *
 * Plays a pitch based on the light intensity.
 * As long as light intensity is below a threshold a random melody is played.
 * The button switches between continuous pitch and pentatonic scale.
 * If a TEMT6000 module is attached, this value takes precedence over the LDR value.
 *
 * More RTTTL songs can be found under http://www.picaxe.com/RTTTL-Ringtones-for-Tune-Command/
 *
 *  Copyright (C) 2018  Armin Joachimsmeyer
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
 *
 */

#include <Arduino.h>

#include <PlayRtttl.h>

#define USE_BUTTON_0
#include <EasyButtonAtInt01.cpp.h>

EasyButton Button0AtPin2;
//#define DEBUG

/*
 * Output inverted frequency signal to increase volume
 */
//#define ENABLE_INVERTED_OUTPUT
#ifdef ENABLE_INVERTED_OUTPUT
#include "digitalWriteFast.h"
const int INVERTED_TONE_PIN = 3;
#endif

const int TONE_PIN = 11;

const int LDR_PIN = A4; // LDR connected to Ground and 4700 Ohm connected to VCC (depends on the LDR type).
#define TEMT_6000_DARK_VALUE 10

const int TEMT_6000_PIN = A5;
#define TEMT_6000_DARK_VALUE 10
bool isTEMTConnected = false;

#define LIGHT_LOW_THRESHOLD (2 * TEMT_6000_DARK_VALUE) // If the reading is below this value, a random melody can be played

static int sMinimum = 1024, sMaximum = 0;
static int sLDRMaximum = 0; // only for LDR

// Forward declarations
void maintainMinAndMax(int aLightValue);
int readLDRValue();
int readLightValue();

void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(115200);
#if defined(__AVR_ATmega32U4__) || defined(SERIAL_USB) || defined(SERIAL_PORT_USBVIRTUAL)
    delay(2000); // To be able to connect Serial monitor after reset and before first printout
#endif
    // Just to know which program is running on my Arduino
    Serial.println(F("START " __FILE__ " from " __DATE__ "\r\nUsing library version " VERSION_PLAY_RTTTL));
    pinMode(LDR_PIN, INPUT);

#ifdef ENABLE_INVERTED_OUTPUT
    pinMode(INVERTED_TONE_PIN, OUTPUT);
    OCR2B = 0;
    bitWrite(TIMSK2, OCIE2B, 1);
#endif

    /*
     * Check if TEMT_6000 is connected - 10kOhm to GND
     * do not cover the sensor otherwise the detection will fail
     */
    pinMode(TEMT_6000_PIN, INPUT_PULLUP); // 100kOhm to VCC
    delay(2);
    int tTEMTValue = analogRead(TEMT_6000_PIN);
    pinMode(TEMT_6000_PIN, INPUT);
    Serial.print(F("TEMT test value="));
    Serial.println(tTEMTValue);
    if (tTEMTValue < 950) {
        // assume TEMT6000 connected
        isTEMTConnected = true;
        Serial.println(F("Assume TEMT6000 connected"));
    } else {
        Serial.println(F("Assume no TEMT6000 connected"));
    }
    Serial.println();

    /*
     * Initialize maximum and minimum values
     */
    readLightValue();
    // to avoid playing melody directly
    sLDRMaximum += LIGHT_LOW_THRESHOLD + 2;
    randomSeed(analogRead(LDR_PIN));
    Serial.println();
    delay(500);
}

void loop() {

    int tLightValue = readLightValue();

    if (!Button0AtPin2.ButtonToggleState) {

        /*
         * Play pentatonic notes
         */
        uint8_t tIndex = map(tLightValue, sMinimum, sMaximum, 0, ARRAY_SIZE_NOTE_C5_TO_C7_PENTATONIC - 1);
#ifdef DEBUG
        Serial.print(F("Index="));
        Serial.println(tIndex);
#endif
        uint16_t tFrequency = NoteC5ToC7Pentatonic[tIndex];
        tone(TONE_PIN, tFrequency);
        delay(200); // add an additional delay to make is easier to play a melody
    } else {
        if (tLightValue < LIGHT_LOW_THRESHOLD && tLightValue < sMinimum + 2) {

            /*
             * Play random melody
             * More RTTTL songs can be found under http://www.picaxe.com/RTTTL-Ringtones-for-Tune-Command/
             *
             */
            startPlayRandomRtttlFromArrayPGMAndPrintName(TONE_PIN, RTTTLMelodies, ARRAY_SIZE_MELODIES, &Serial);
            int tThresholdCount = 0;
            while (updatePlayRtttl()) {
                delay(10);
                /*
                 * Read new light value to decide if intensity is still low
                 */
                tLightValue = readLightValue();

                if (tLightValue > (LIGHT_LOW_THRESHOLD * 2)) {
                    // wait for 10 consecutive times of intensity above threshold to avoid spikes
                    tThresholdCount++;
                    if (tThresholdCount > 10) {
                        // stop playing melody
                        stopPlayRtttl();
                        break; // not really required here, since the while condition will also change because of stopPlayRtttl.
                    }
                } else {
                    tThresholdCount = 0;
                }
            }
            delay(500);
        } else {

            /*
             * Play tone
             */
            tone(TONE_PIN, tLightValue * 4);
        }
    }
}

void maintainMinAndMax(int aLightValue) {
    if (aLightValue < sMinimum || aLightValue > sMaximum) {
        if (aLightValue < sMinimum) {
            sMinimum = aLightValue;
        }
        if (aLightValue > sMaximum) {
            sMaximum = aLightValue;
        }
        Serial.print(F("Minimum="));
        Serial.print(sMinimum);
        Serial.print(F(" Maximum="));
        Serial.println(sMaximum);
    }
}

/*
 * Read LDR value, maintain maximum and convert to TEMT value = Maximum - Value + TEMT_6000_DARK_VALUE
 */
int readLDRValue() {
    int tLightValue = analogRead(LDR_PIN);
#ifdef DEBUG
    Serial.print(F("LDR raw="));
    Serial.print(tLightValue);
#endif
    if (tLightValue > sLDRMaximum) {
        Serial.print(F("LDR max="));
        Serial.print(tLightValue);
        sLDRMaximum = tLightValue;
    }

    /*
     * Convert LDR value to be comparable to the TEMT_6000
     */
    tLightValue = (sLDRMaximum - tLightValue) + TEMT_6000_DARK_VALUE;
#ifdef DEBUG
    Serial.print(F(" converted="));
    Serial.print(tLightValue);
#endif
    return tLightValue;
}

int readLightValue() {
    int tLightValue;

    /*
     * Read TEMT_6000
     */
    if (isTEMTConnected) {
        tLightValue = analogRead(TEMT_6000_PIN);
#ifdef DEBUG
        Serial.print(F("TEMT="));
        Serial.print(tLightValue);
        Serial.print(F(" - "));
        // just for serial output
        readLDRValue();
#endif
    } else {
        tLightValue = readLDRValue();
    }
#ifdef DEBUG
    Serial.println();
#endif

    maintainMinAndMax(tLightValue);
    return tLightValue;
}

#ifdef ENABLE_INVERTED_OUTPUT
ISR(TIMER2_COMPB_vect) {
    digitalToggleFast(LED_BUILTIN);
    // set INVERTED_TONE_PIN to inverse value of TONE_PIN
    digitalWriteFast(INVERTED_TONE_PIN, !digitalReadFast(TONE_PIN));
}
#endif
