/*
 * Game to measure reaction time with 2 buttons, 3 LEDs and a buzzer
 *
 * Aufgaben:
 * 1. Warte bis ein Button gedrückt wird und gebe die Reaktionszeit aus. Schalte die LED des Spielers an und erhöhe die Punkte des Spielers.
 *      Benutze digitalRead() und z.B. "sRightPlayerScore++".
 * 2. Wenn der Punktestand POINTS_FOR_WIN erreicht hat, lasse die LED blinken und spiele eine Melodie.
 *      Benutze blinkLed() und playRtttlBlockingPGM(PIN_BUZZER, StarWars). Selektiere "StarWars" und drücke Taste F3.
 * 3. Bestrafe cheaten (der Button ist schon vor dem angehen der LED gedrückt) mit Punktabzug und signalisiere das mit einer blinkenden LED.
 *
 *
 *  Copyright (C) 2018-2020  Armin Joachimsmeyer
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
#include "BlinkLed.h"
#include "PlayRtttl.h"

#define VERSION_EXAMPLE "2.0"

/*
 * Comment the next line out if you want to run this program on an Arduino Multifunction Shield
 * https://www.electroschematics.com/getting-started-with-the-arduino-multifunction-shield/
 */
//#define MULTI_FUNCTION_SHIELD
/*
 * Comment the next line out, if you use the breadboard layout for school lessons
 * https://github.com/ArminJo/Arduino-Lessons-for-School#universal-breadboard-layout-for-all-lessons
 */
//#define BREADBOARD_LAYOUT
#ifdef MULTI_FUNCTION_SHIELD
#include "MultiFuncShield.h"
// inverse logic for LEDS and buzzer: they are active at LOW
#define PIN_BUZZER         3

#define PIN_RED_LED        13
#define PIN_RED_LED_2      12
#define PIN_RED_LED_3      11
#define PIN_RED_LED_4      10
#define PIN_RIGHT_LED       PIN_RED_LED_4
#define PIN_LEFT_LED        PIN_RED_LED
#define PIN_START_LED       PIN_RED_LED_2
#define PIN_START_LED_2     PIN_RED_LED_3

#define PIN_RIGHT_BUTTON   A3
#define PIN_LEFT_BUTTON    A1

#define PIN_SERVO_HORIZONTAL 6
#define PIN_SERVO_VERTICAL  5

#define TRIGGER_OUT_PIN     9
#define ECHO_IN_PIN        A5

#define PIN_POTENTIOMETER  A0

#elif defined(BREADBOARD_LAYOUT)
#include "Breadboard.h"

#define PIN_START_LED      PIN_MIDDLE_LED

#else
/*
 *  Layout for "Simon Says" layout
 *  https://learn.sparkfun.com/tutorials/sparkfun-inventors-kit-experiment-guide---v40/circuit-2c-simon-says-game
 *  https://dingfluence.dingfabrik.de/pages/viewpage.action?pageId=31653962
 */
#define PIN_BUZZER        10

#define PIN_RIGHT_LED      7
#define PIN_LEFT_LED       5
#define PIN_START_LED      3
#define PIN_START_LED_2    9

#define PIN_RIGHT_BUTTON   6
#define PIN_LEFT_BUTTON    4
#endif

const int POINTS_FOR_WIN = 3;

int sLeftPlayerScore, sRightPlayerScore;
int sLeftPlayerWins = 0, sRightPlayerWins = 0; // Count wins, to play a random song every second win.
int tHighScore = 8000; // the minimum reaction time in millis

BlinkLed RightLed(PIN_RIGHT_LED);
BlinkLed LeftLed(PIN_LEFT_LED);

// The setup function is called once at startup of the sketch
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(115200);
#if defined(__AVR_ATmega32U4__) || defined(SERIAL_USB) || defined(SERIAL_PORT_USBVIRTUAL)
    delay(2000); // To be able to connect Serial monitor after reset and before first printout
#endif
    // Just to know which program is running on my Arduino
    Serial.println(
            F(
                    "START " __FILE__ "\r\nVersion " VERSION_EXAMPLE " from " __DATE__));

    // Enable output on the LED pins
    pinMode(PIN_RIGHT_LED, OUTPUT);
    pinMode(PIN_LEFT_LED, OUTPUT);
    pinMode(PIN_START_LED, OUTPUT);
#if defined(PIN_START_LED_2)
    pinMode(PIN_START_LED_2, OUTPUT);
#endif

#ifdef MULTI_FUNCTION_SHIELD
    // LEDS are active low on the MuFu shield so switch them off by writing a HIGH
    digitalWrite(PIN_RIGHT_LED, HIGH);
    digitalWrite(PIN_LEFT_LED, HIGH);
    digitalWrite(PIN_START_LED, HIGH);
    digitalWrite(PIN_START_LED_2, HIGH);

    Timer1.initialize();
    MFS.initialize(&Timer1);
    setTonePinIsInverted(true);// configure PlayRtttl output polarity
#endif

    // Prepare for buttons reading
    pinMode(PIN_RIGHT_BUTTON, INPUT_PULLUP);
    pinMode(PIN_LEFT_BUTTON, INPUT_PULLUP);
}

/*
 * Die mittlere Led nach einer zufälligen Zeit anschalten und dann warten, welche Taste zuerst gedrückt wird.
 * Die Zeit bis zum Drücken der Taste ausgeben und die Led an der zuerst gedrückten Taste leuchten lassen.
 * Wenn ein Spieler die Punktzahl erreicht hat eine Melodie spielen.
 * Danach kurz warten und die Messung wieder von vorne beginnen.
 */
void loop() {
    int tRightPlayerButton;
    int tLeftPlayerButton;

    delay(random(500, 4000)); // random delay before next lap

    /*
     * Task 3. Check for cheating just before switching led on and give feedback if detected
     * Bestrafe cheaten (der Button ist schon vor dem angehen der LED gedrückt) mit Punktabzug und signalisiere das mit einer blinkenden LED.
     */
    tRightPlayerButton = digitalRead(PIN_RIGHT_BUTTON);
    tLeftPlayerButton = digitalRead(PIN_LEFT_BUTTON);
    if (tRightPlayerButton == LOW || tLeftPlayerButton == LOW) {
        /*
         * Cheating detected -> blink and decrement score
         */
        if (tRightPlayerButton == LOW) {
            RightLed.blink(5, 50);
            sRightPlayerScore--;
        } else {
            LeftLed.blink(5, 50);
            sLeftPlayerScore--;
        }
        return; // start next lap
    }

    uint32_t tStartMillis = millis();
    /*
     * No cheating here -> switch on start LED(s) and wait for first button to be pressed
     */
#ifdef MULTI_FUNCTION_SHIELD
    digitalWrite(PIN_START_LED, LOW);
    digitalWrite(PIN_START_LED_2, LOW);
    digitalWrite(PIN_BUZZER, LOW);
    MFS.write("");
    delay(20);
    digitalWrite(PIN_BUZZER, HIGH);
#else
    tone(PIN_BUZZER, 2200, 40);
    digitalWrite(PIN_START_LED, HIGH);
#  if defined(PIN_START_LED_2)
    digitalWrite(PIN_START_LED_2, HIGH);
#  endif
#endif

    /*
     * Task 1. Wait for press after LED switched on, give LED feedback and output reaction time
     * Warte bis ein Button gedrückt wird und gebe die Reaktionszeit aus. Schalte die LED des Spielers an und erhöhe die Punkte des Spielers.
     *    Benutze digitalRead() und z.B. "sRightPlayerScore++".
     */
    do {
        tRightPlayerButton = digitalRead(PIN_RIGHT_BUTTON);
        tLeftPlayerButton = digitalRead(PIN_LEFT_BUTTON);
    } while (tRightPlayerButton != LOW && tLeftPlayerButton != LOW);
    int tReactionTimeMilliseconds = millis() - tStartMillis;

    /*
     * Manage high score
     */
#ifdef MULTI_FUNCTION_SHIELD
    bool tIsHighScore = false;
#endif
    if (tReactionTimeMilliseconds < tHighScore) {
        tHighScore = tReactionTimeMilliseconds;
#ifdef MULTI_FUNCTION_SHIELD
        tIsHighScore = true;
#endif
    }

    /*
     * One button is pressed here
     * Output result to Serial
     */
    if (tRightPlayerButton == LOW) {
        // Right button was pressed
        sRightPlayerScore++;
#ifdef MULTI_FUNCTION_SHIELD
        digitalWrite(PIN_RIGHT_LED, LOW);
#else
        digitalWrite(PIN_RIGHT_LED, HIGH);
#endif
        Serial.print("Right player wins with ");
    } else {
        // Left button must be pressed here
        sLeftPlayerScore++;
#ifdef MULTI_FUNCTION_SHIELD
        digitalWrite(PIN_LEFT_LED, LOW);
#else
        digitalWrite(PIN_LEFT_LED, HIGH);
#endif
        Serial.print("Left player wins with ");
    }
    Serial.print(tReactionTimeMilliseconds);
    Serial.println(" ms");

#ifdef MULTI_FUNCTION_SHIELD
    // show time on 4 digit display
    MFS.write(tReactionTimeMilliseconds);
    MFS.blinkDisplay(DIGIT_ALL, tIsHighScore);
#endif

    /*
     * Task 2. Check for score level, blink LED and play melody
     * Wenn der Punktestand POINTS_FOR_WIN erreicht hat, lasse die LED blinken und spiele eine Melodie.
     *    Benutze blinkLed() und playRtttlBlockingPGM(PIN_BUZZER, StarWars). Selektiere "StarWars" und drücke Taste F3.
     */
    if (sRightPlayerScore >= POINTS_FOR_WIN) {
        sLeftPlayerScore = 0;
        sRightPlayerScore = 0;
        /*
         * Here we use the non blocking version of blink and tone, which enables them to act simultaneously.
         * The simple one goes like this:
         *     RightLed.blink(5, 100);
         *     playRtttlBlockingPGM(PIN_BUZZER, StarWars);
         */
        RightLed.startWithPeriod(200);
        sLeftPlayerWins++;
        if (sLeftPlayerWins == 1) {
            // Play StarWars the first win
            startPlayRtttlPGM(PIN_BUZZER, StarWars);
        } else {
            startPlayRandomRtttlFromArrayPGMAndPrintName(PIN_BUZZER,
                    RTTTLMelodies, ARRAY_SIZE_MELODIES, &Serial);
        }
        // update both libraries to let them act simultaneously
        // break if button is pressed after 1000 milliseconds
        uint32_t tStartCheckButtonMillis = millis();
        while (updatePlayRtttl()
                && ((millis() < (tStartCheckButtonMillis + 1000))
                        || digitalRead(PIN_RIGHT_BUTTON))) {
            RightLed.update();
        }
        RightLed.stop();

    } else if (sLeftPlayerScore >= POINTS_FOR_WIN) {
        sLeftPlayerScore = 0;
        sRightPlayerScore = 0;
        //Here we use the non blocking version of blink and tone, which enables them to act simultaneously.
        LeftLed.startWithPeriod(200);
        sRightPlayerWins++;
        if (sRightPlayerWins == 1) {
            // Play MissionImpossible the first win
            startPlayRtttlPGM(PIN_BUZZER, MissionImp);
        } else {
            startPlayRandomRtttlFromArrayPGMAndPrintName(PIN_BUZZER,
                    RTTTLMelodies, ARRAY_SIZE_MELODIES, &Serial);
        }
        uint32_t tStartCheckButtonMillis = millis();
        while (updatePlayRtttl()
                && ((millis() < (tStartCheckButtonMillis + 1000))
                        || digitalRead(PIN_RIGHT_BUTTON))) {
            LeftLed.update();
        }
        LeftLed.stop();
    }

#ifdef MULTI_FUNCTION_SHIELD
    // switch buzzer off
    digitalWrite(PIN_BUZZER, HIGH);
#endif

    // Wait before switching off LEDs
    delay(300);

    // Switching off LEDs
#ifdef MULTI_FUNCTION_SHIELD
    digitalWrite(PIN_RIGHT_LED, HIGH);
    digitalWrite(PIN_LEFT_LED, HIGH);
    digitalWrite(PIN_START_LED, HIGH);
    digitalWrite(PIN_START_LED_2, HIGH);
#else
    digitalWrite(PIN_RIGHT_LED, LOW);
    digitalWrite(PIN_LEFT_LED, LOW);
    digitalWrite(PIN_START_LED, LOW);
#  if defined(PIN_START_LED_2)
    pinMode(PIN_START_LED_2, LOW);
#  endif
#endif

} // loop end
