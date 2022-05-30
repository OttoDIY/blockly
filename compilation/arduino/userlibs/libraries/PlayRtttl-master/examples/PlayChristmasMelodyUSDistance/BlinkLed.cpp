/*
 * BlinkLed.cpp
 *
 *  This library let multiple LEDs, connected to any Arduino output, blink non blocking and independently.
 *  Therefore you must call update continuously in loop()
 *
 *  Copyright (C) 2018-2019  Armin Joachimsmeyer
 *  armin.joachimsmeyer@gmail.com
 *
 *  This file is part of Arduino-Utils https://github.com/ArminJo/Arduino-Utils.
 *
 *  Arduino-Utils is free software: you can redistribute it and/or modify
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
 */
#include <Arduino.h>

#include "BlinkLed.h"

/*
 * The simple blocking variant
 */
void blinkLEDBlocking(uint8_t aLedPin, uint8_t aBlinkCount, uint16_t aDelayMillis) {
    for (int i = 0; i < aBlinkCount; ++i) {
        digitalWrite(aLedPin, HIGH);
        delay(aDelayMillis);
        digitalWrite(aLedPin, LOW);
        delay(aDelayMillis);
    }
}


BlinkLed::BlinkLed(uint8_t aLedPin) {
    init(aLedPin, false);
    setOnOffTime(1000, 1000);
}

BlinkLed::BlinkLed(uint8_t aLedPin, bool aInitState, unsigned int aOnTimeMillis, unsigned int aOffTimeMillis) {
    init(aLedPin, aInitState);
    setOnOffTime(aOnTimeMillis, aOffTimeMillis);
}

void BlinkLed::init(uint8_t aLedPin, bool aInitState) {
    pin = aLedPin;
    pinMode(pin, OUTPUT);
    digitalWrite(pin, state);
    state = aInitState;
}

/*
 * No count specified here, so set to BLINK_LED_FOREVER
 */
void BlinkLed::setOnOffTime(unsigned int aOnTimeMillis, unsigned int aOffTimeMillis) {
    onDelayMillis = aOnTimeMillis;
    offDelayMillis = aOffTimeMillis;
}

// must be called continuously in loop()
void BlinkLed::update() {

    if (!enabled) {
        return;
    }

    if (state) {
        // check for on time gone to change state
        if ((millis() - lastUpdateMillis >= onDelayMillis)) {
            toggle();
            // count blinks
            if (numberOfBlinks > 0) {
                numberOfBlinks--;
                if (numberOfBlinks == 0) {
                    // stop blinking
                    enabled = false;
                }
            }
        }
    } else if ((millis() - lastUpdateMillis >= offDelayMillis)) {
        toggle();
    }
}

void BlinkLed::start(signed int aBlinkCount, unsigned int aOnTimeMillis, unsigned int aOffTimeMillis) {
    onDelayMillis = aOnTimeMillis;
    offDelayMillis = aOffTimeMillis;
    start(aBlinkCount);
}

/*
 * set to 50% duty cycle
 */
void BlinkLed::start(signed int aBlinkCount, unsigned int aPeriod) {
    onDelayMillis = offDelayMillis = aPeriod / 2;
    start(aBlinkCount);
}

/*
 * set to 50% duty cycle
 */
void BlinkLed::start(signed int aBlinkCount) {
    numberOfBlinks = aBlinkCount;
    start();
}

// Force ON and enable blink
void BlinkLed::start() {
    digitalWrite(pin, HIGH);
    state = true;
    enabled = true;
    lastUpdateMillis = millis();
}

/*
 * set to 50% duty cycle
 */
void BlinkLed::blink(signed int aBlinkCount, unsigned int aPeriod) {
    start(aBlinkCount, aPeriod);
    while (numberOfBlinks > 0) {
        delay(1);
        update();
    }
}

/*
 * No count specified here, so set to BLINK_LED_FOREVER
 */
void BlinkLed::startWithOnOffTime(unsigned int aOnTimeMillis, unsigned int aOffTimeMillis) {
    start(BLINK_LED_FOREVER, aOnTimeMillis, aOffTimeMillis);
}

/*
 * set to 50% duty cycle
 */
void BlinkLed::startWithPeriod(unsigned int aPeriod) {
    start(BLINK_LED_FOREVER, aPeriod);
}

/*
 * set to 50% duty cycle
 */
void BlinkLed::startWithFrequency(float aFrequency) {
    offDelayMillis = onDelayMillis = 500.0 / aFrequency;
    start(BLINK_LED_FOREVER);
}

void BlinkLed::startWithOnTime(unsigned int aOnTimeMillis) {
    onDelayMillis = aOnTimeMillis;
    start();
}

void BlinkLed::startWithOffTime(unsigned int aOffTimeMillis) {
    offDelayMillis = aOffTimeMillis;
    start();
}

// Toggle state and set new timestamp
void BlinkLed::toggle() {
    state = !state;
    digitalWrite(pin, state);
    lastUpdateMillis = millis();
}

// Force ON and disable blink
void BlinkLed::on() {
    digitalWrite(pin, HIGH);
    state = true;
    enabled = false;
}

// Force off and disable blink
void BlinkLed::stop() {
    digitalWrite(pin, LOW);
    state = false;
    enabled = false;
}

// Force off and disable blink - the same as stop
void BlinkLed::off() {
    digitalWrite(pin, LOW);
    state = false;
    enabled = false;
}

/*
 * Might be useful if using negative logic i.e. LED is connected to VCC.
 * You can also access "enabled" directly, but this is not the recommended way to use a class ;-)
 */
void BlinkLed::setEnabled(bool aIsEnabled) {
    enabled = aIsEnabled;
}
