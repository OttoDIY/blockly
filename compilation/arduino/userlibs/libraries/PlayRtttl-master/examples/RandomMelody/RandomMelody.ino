/*
 * RandomMelody.cpp
 *
 * Plays a random melody. If you here the same melody twice and miss some melodies, than you get an idea of pseudo random.
 *
 * More RTTTL songs can be found under http://www.picaxe.com/RTTTL-Ringtones-for-Tune-Command/
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
 *  along with this program. If not, see <http://www.gnu.org/licenses/gpl.html>.
 *
 */

#include <Arduino.h>

//#define USE_NO_RTX_EXTENSIONS // Disables RTX format definitions `'s'` (style) and `'l'` (loop). Saves up to 332 bytes program memory
#include <PlayRtttl.hpp>

#if defined(__AVR_ATtiny25__) || defined(__AVR_ATtiny45__) || defined(__AVR_ATtiny85__) || defined(__AVR_ATtiny87__) || defined(__AVR_ATtiny167__)
#include "ATtinySerialOut.hpp" // Available as Arduino library "ATtinySerialOut"
#endif

const int TONE_PIN = 11;
const int BUTTON_PIN = 2;

void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(115200);
#if defined(__AVR_ATmega32U4__) || defined(SERIAL_PORT_USBVIRTUAL) || defined(SERIAL_USB) /*stm32duino*/|| defined(USBCON) /*STM32_stm32*/|| defined(SERIALUSB_PID) || defined(ARDUINO_attiny3217)
    delay(4000); // To be able to connect Serial monitor after reset or power up and before first print out. Do not wait for an attached Serial Monitor!
#endif
    // Just to know which program is running on my Arduino
    Serial.println(F("START " __FILE__ " from " __DATE__ "\r\nUsing library version " VERSION_PLAY_RTTTL));
    Serial.println(F("Press the button to end the current melody and start the next one"));

    // get "true" random
    randomSeed(analogRead(0));

    // enable button press detection
    pinMode(BUTTON_PIN, INPUT_PULLUP);

#if !defined(USE_NO_RTX_EXTENSIONS)
    setDefaultStyle(RTTTL_STYLE_CONTINUOUS);
#endif
}

/*
 * Enable low delays for slow blink
 */
void toggleLED_BUILTIN_Every10thCall() {
    static int tCount = 0;
    if (++tCount == 10) {
        tCount = 0;
        digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    }
}

void loop() {
    /*
     * Play random melody
     * If you here the same melody twice and miss some melodies, than you get an idea of pseudo random.
     */
#if defined(__AVR_ATtiny25__) || defined(__AVR_ATtiny45__) || defined(__AVR_ATtiny85__) || defined(__AVR_ATtiny87__)
    // use smaller array to fit into FLASH
    startPlayRandomRtttlFromArrayPGM(TONE_PIN, RTTTLMelodiesTiny, ARRAY_SIZE_MELODIES_TINY);
#else
    startPlayRandomRtttlFromArrayPGMAndPrintName(TONE_PIN, RTTTLMelodies, ARRAY_SIZE_MELODIES, &Serial);
#endif
// for Christmas
//    startPlayRandomRtttlFromArrayPGMAndPrintName(TONE_PIN, RTTTLChristmasMelodies, ARRAY_SIZE_CHRISTMAS_SONGS, &Serial);

    while (updatePlayRtttl()) {
        /*
         * Blink LED
         */
        toggleLED_BUILTIN_Every10thCall();
        /*
         * Check if button is pressed.
         * If yes stop melody wait and start with next loop
         */
        if (digitalRead(BUTTON_PIN) == LOW) {
            // stop playing melody
            stopPlayRtttl();
            break;
        }
        delay(10);
    }
    // wait after playing
    delay(1000);
}

