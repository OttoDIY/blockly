/*
 * Breadboard.h
 *
 * Pin mappings for the example breadboard
 *
 * Copyright 2019 Armin Joachimsmeyer
 * This code is released under GPLv3 license.
 *
 * This file is part of Arduino-Lessons-for-School https://github.com/ArminJo/Arduino-Lessons-for-School.
 *
 *  ServoEasing is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 */

#ifndef BREADBOARD_H_
#define BREADBOARD_H_

#define PIN_GREEN_LED        2
#define PIN_YELLOW_LED       3
#define PIN_RED_LED          4

#define PIN_RIGHT_LED        PIN_GREEN_LED
#define PIN_MIDDLE_LED       PIN_YELLOW_LED
#define PIN_LEFT_LED         PIN_RED_LED

#define PIN_RIGHT_BUTTON    A1
#define PIN_LEFT_BUTTON     A4

#define PIN_LASER            5
#define PIN_SERVO_HORIZONTAL 6
#define PIN_SERVO_VERTICAL   7
#define PIN_NEOPIXEL         8
#define PIN_TRIGGER_OUT      9
#define PIN_ECHO_IN         10
#define PIN_BUZZER          11
#define PIN_INTERNAL_LED    13 // aka LED_BUILTIN

#define PIN_POTENTIOMETER   A0
#define PIN_LDR             A5

/*
 * Set output pins to OUTPUT and button pins to INPUT_PULLUP
 */
void initBreadboardPins() {

    // Enable output on the LED pins
    pinMode(PIN_RED_LED, OUTPUT);
    pinMode(PIN_YELLOW_LED, OUTPUT);
    pinMode(PIN_GREEN_LED, OUTPUT);

    // Prepare for buttons at the pins
    pinMode(PIN_RIGHT_BUTTON, INPUT_PULLUP);
    pinMode(PIN_LEFT_BUTTON, INPUT_PULLUP);

    pinMode(PIN_LASER, OUTPUT);
    pinMode(PIN_TRIGGER_OUT, OUTPUT);
//  Is done by tone()
//    pinMode(PIN_BUZZER, OUTPUT);
    pinMode(LED_BUILTIN, OUTPUT);

}

#endif /* BREADBOARD_H_ */
