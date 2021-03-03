# SoftPWM Library #

----

## What's New? ##

Version 1.0.1

* Changes from Paul Stoffregen
  * Use IntervalTimer on Teensy 3.x
  * Use LED_BUILTIN for WLED in example

Version 1.0.0

* Initial release

## Description ##

A Wiring Framework (and Arduino) Library to produce PWM signals on any arbitrary pin.

It was originally designed for use controlling the brightness of LEDs, but could be modified to control servos and other low frequency PWM controlled devices as well.

It uses a single hardware timer (Timer 2 on AVR, or IntervalTimer on Teensy 3.x) on the microcontroller to generate up to 20 PWM channels.

----

## Features ##

* Arbitrary output pins
* Up to 20 different channels can be created
* True zero level, i.e. off == off
* Separate fade rates for on and off

----

## Download and Installation ##

You can use the Arduino Library Manager (Sketch -> Include Library -> Manage Libraries...) to download the library.

Alternatively, you can download the library directly, and install it yourself.

* [SoftPWM Library - Latest Version](https://github.com/bhagman/SoftPWM/archive/master.zip)

Unzip the folder and rename it to `SoftPWM`, then move it to your `arduinosketchfolder/libraries/` folder.

----

## Usage Example ##

```
#include "SoftPWM.h"

void setup()
{
  // Initialize
  SoftPWMBegin();

  // Create and set pin 13 to 0 (off)
  SoftPWMSet(13, 0);

  // Set fade time for pin 13 to 100 ms fade-up time, and 500 ms fade-down time
  SoftPWMSetFadeTime(13, 100, 500);
}

void loop()
{
  // Turn on - set to 100%
  SoftPWMSetPercent(13, 100);

  // Wait for LED to turn on - you could do other tasks here
  delay(100);

  // Turn off - set to 0%
  SoftPWMSetPercent(13, 0);

  // Wait for LED to turn off
  delay(500);
}
```

----
## Function Descriptions ##

`SoftPWMBegin([defaultPolarity])`

* Initializes the library - sets up the timer and other tasks.
* optional `defaultPolarity` allows all newly defined pins to take on this polarity.
  * Values: `SOFTPWM_NORMAL`, `SOFTPWM_INVERTED`

`SoftPWMSet(pin,value)`

* `pin` is the output pin.
* `value` is a value between 0 and 255 (inclusive).

`SoftPWMSetPercent(pin,percent)`

* `pin` is the output pin.
* `percent` is a value between 0 and 100 (inclusive).

`SoftPWMSetFadeTime(pin,fadeUpTime,fadeDownTime)`

* `pin` is the output pin.
* `fadeuptime` is the time in milliseconds that it will take the channel to fade from 0 to 255.
  * Range: 0 to 4000
* `fadedowntime` is the time in milliseconds that it will take the channel to fade from 255 to 0.
  * Range: 0 to 4000

`SoftPWMSetPolarity(pin,polarity)`

* `pin` is the output pin.
* `polarity` is the polarity for the given pin.

### Notes ###

* You can use `ALL` in place of the pin number to have the function act on all currently set channels.
  * e.g. `SoftPWMSetFadeTime(ALL, 100, 400)` - this will set all created channels to have a fade-up time of 100 ms and a fade-down time of 400.
* The polarity setting of the pin is as follows:
  * `SOFTPWM_NORMAL` means that the pin is LOW when the PWM value is 0, whereas `SOFTPWM_INVERTED` indicates the pin should be HIGH when the PWM value is 0.


----

## Demonstrations ##

Arduino Duemilanove LED Blink example - available as library example:

[![Arduino SoftPWM example](https://img.youtube.com/vi/9tTd7aLm9aQ/0.jpg)](https://www.youtube.com/watch?v=9tTd7aLm9aQ)

rDuino LEDHead Bounce example - available as library example:

[![rDuino LEDHead SoftPWM example](https://img.youtube.com/vi/jE7Zw1zNL6c/0.jpg)](https://www.youtube.com/watch?v=jE7Zw1zNL6c)

More demos:

https://www.youtube.com/view_play_list?p=33BB5D2E20609C52

----
