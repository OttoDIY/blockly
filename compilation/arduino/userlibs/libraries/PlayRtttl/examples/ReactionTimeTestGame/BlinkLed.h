/*
 * BlinkLed.h
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
 *  along with this program.  If not, see <http://www.gnu.org/licenses/gpl.html>.
 *
 */

#include <inttypes.h>

#ifndef BLINK_LED_H_
#define BLINK_LED_H_

// The simple blocking variant
void blinkLEDBlocking(uint8_t aLedPin, uint16_t aDelay, uint8_t aRepetitions);

#define BLINK_LED_FOREVER -1
class BlinkLed {
public:
    // constructors and initialization
    BlinkLed();
    BlinkLed(uint8_t aLedPin);
    BlinkLed(uint8_t aLedPin, bool aInitState, unsigned int aOnTime, unsigned int aOffTime);
    void init(uint8_t aLedPin, bool aInitState);
    void setOnOffTime(unsigned int aOnTime, unsigned int aOffTime);

    void blink(signed int aBlinkCount, unsigned int aPeriod); // blocking version

    void update(); // must be called continuously in loop()

    // Blinking ends after aBlinkCount
    void start(signed int aBlinkCount, unsigned int aOnTime, unsigned int aOffTime); // start
    void start(signed int aBlinkCount, unsigned int aPeriod); // start
    void start(signed int aBlinkCount); // use old values for on and off time
    void start();

    // Blinking goes forever until off()
    void startWithOnOffTime(unsigned int aOnTime, unsigned int aOffTime);
    void startWithPeriod(unsigned int aPeriod);
    void startWithOnTime(unsigned int aOnTime);
    void startWithOffTime(unsigned int aOffTime);
    void startWithFrequency(float aFrequency); // set to 50% duty cycle

    void on(); // force on but do not blink
    void stop();
    void off(); // the same as stop()

    void toggle();
    void setEnabled(bool aIsEnabled);

    uint8_t pin; // Pin number connected to LED anode
    volatile bool state; // LED state (volatile so that the compiler doesn't optimize this variable into some constant)
    signed int numberOfBlinks; // Negative values mean forever
    unsigned int onDelay; // On time in milliseconds
    unsigned int offDelay; // Off time in milliseconds
    unsigned long lastUpdate; // The last time (millis) LED was updated
    bool enabled = true; // LED enabled/disabled state
};

#endif /* BLINK_LED_H_ */

#pragma once
