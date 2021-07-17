# [PlayRtttl](https://github.com/ArminJo/PlayRtttl)
Available as Arduino library "PlayRtttl"

### [Version 1.4.2](https://github.com/ArminJo/PlayRtttl/releases)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Installation instructions](https://www.ardu-badge.com/badge/PlayRtttl.svg?)](https://www.ardu-badge.com/PlayRtttl)
[![Commits since latest](https://img.shields.io/github/commits-since/ArminJo/PlayRtttl/latest)](https://github.com/ArminJo/PlayRtttl/commits/master)
[![Build Status](https://github.com/ArminJo/PlayRtttl/workflows/LibraryBuild/badge.svg)](https://github.com/ArminJo/PlayRtttl/actions)
[![Hit Counter](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FArminJo%2FPlayRtttl)](https://github.com/brentvollebregt/hit-counter)

Improved Arduino library version of the RTTTL.pde example code written by Brett Hagman http://www.roguerobotics.com/  bhagman@roguerobotics.com
 - Plays RTTTL melodies/ringtones from FLASH or RAM.
 - Non blocking version.
 - Name output function.
 - Sample melodies.
 - Random play of melodies from array.
 - Supports inverted tone pin logic i.e. tone pin is HIGH at playing a pause.
 - Accepts even invalid specified RTTTL files found in the wild.
 - Supports RTX format - 2 additional parameters: 1. l=<number_of_loops> 2.s=<Style[N|S|C]>).
 - Tone style (relation of tone output to note length) and loop count can be set for a melody.

YouTube video of the RandomMelody example in action

[![RandomMelody example](https://i.ytimg.com/vi/0n9_Fm3VP3w/hqdefault.jpg)](https://www.youtube.com/watch?v=0n9_Fm3VP3w)

# Sample code
## Blocking play melody from FLASH
```
#include <PlayRtttl.h>
const int TONE_PIN = 11;
...
    playRtttlBlockingPGM(TONE_PIN, Bond);
...

```
## Non blocking play

```
...
    startPlayRtttlPGM(TONE_PIN, TakeOnMe);
    while (updatePlayRtttl()) {
        // your own code here...
        delay(1);
    }
...
```

# Compile options / macros for this library
To customize the library to different requirements, there are some compile options / makros available.<br/>
Modify it by commenting them out or in, or change the values if applicable. Or define the macro with the -D compiler option for gobal compile (the latter is not possible with the Arduino IDE, so consider to use [Sloeber](https://eclipse.baeyens.it).
Some options which are enabed by default can be disabled also by defining a *inhibit* macro like `USE_NO_RTX_EXTENSIONS`.
| Macro | Default | File | Disable macro | Description |
|-|-|-|-|-|
| `SUPPORT_RTX_EXTENSIONS` | enabled | PlayRtttl.h | `USE_NO_RTX_EXTENSIONS` | Support loop and style.<br/>Even without `SUPPORT_RTX_EXTENSIONS` the default style is natural (Tone length = note length - 1/16).<br/>Requires around 182 additional bytes FLASH. |
| `SUPPORT_RTX_FORMAT` | enabled | PlayRtttl.h | `USE_NO_RTX_EXTENSIONS` | Enables evaluating RTX format definitions `'s'` and `'l'`. |
| `RTX_STYLE_DEFAULT` | 'N' | PlayRtttl.h |  | (Natural) Tone length = note length - 1/16. |

### Modifying library properties with Arduino IDE
First use *Sketch/Show Sketch Folder (Ctrl+K)*.<br/>
If you did not yet stored the example as your own sketch, then you are instantly in the right library folder.<br/>
Otherwise you have to navigate to the parallel `libraries` folder and select the library you want to access.<br/>
In both cases the library files itself are located in the `src` directory.<br/>

### Modifying library properties with Sloeber IDE
If you are using Sloeber as your IDE, you can easily define global symbols with *Properties/Arduino/CompileOptions*.<br/>
![Sloeber settings](https://github.com/ArminJo/ServoEasing/blob/master/pictures/SloeberDefineSymbols.png)

# Running with 1 MHz
If running with 1 MHz, e.g on an ATtiny, the millis() interrupt needs so much time, that it disturbes the tone() generation by interrupt. You can avoid this by using a tone pin, which is directly supported by hardware. Look at the appropriate *pins_arduino.h*, find `digital_pin_to_timer_PGM[]` and choose pins with TIMER1x entries.

# More songs
More RTTTL songs can be found under http://www.picaxe.com/RTTTL-Ringtones-for-Tune-Command/ or ask Google.
[C array of songs on GitHub](https://github.com/granadaxronos/120-SONG_NOKIA_RTTTL_RINGTONE_PLAYER_FOR_ARDUINO_UNO/blob/master/RTTTL_PLAYER/songs.h)

# Revision History
### Version 1.4.2
- New example ReactionTimeTestGame.

### Version 1.4.1
- Removed blocking wait for ATmega32U4 Serial in examples.

### Version 1.4.0
- Supporting direct tone output at pin 11 for ATmega328. Can be used with interrupt blocking libraries for NeoPixel etc.
- Use Print * instead of Stream *.
- Improved non-AVR compatibility.
- New Christmas songs example.

### Version 1.3.0
- Support all octaves below 8
- New styles '1' to '9' in addition to RTX styles 'C', 'N', 'S'.

### Version 1.2.2
- Tested with ATtiny85 and 167.
- Ported to non AVR architectures.

### Version 1.2.1
- Natural is the new default style.
- New `RTTTLMelodiesSmall` sample array with less entries.
- Parameter now order independent.
- Modified `OneMelody` example.

### Version 1.2.0
- No Serial.print statements in this library anymore, to avoid problems with different Serial implementations.
- Function `playRandomRtttlBlocking()` + `startPlayRandomRtttlFromArrayPGM()` do not print name now. If needed, use new functions `playRandomRtttlSampleBlockingAndPrintName()` + `startPlayRandomRtttlFromArrayPGMAndPrintName()`.
- Printing functions have parameter (..., Stream *aSerial) to print to any serial. Call it (..., &Serial) to use standard Serial;
- `playRandomRtttlBlocking()` renamed to `playRandomRtttlSampleBlocking()` and bug fixing.

### Version 1.1.0
- RTX song format support.
- new `setNumberOfLoops()` and `setDefaultStyle()` functions.

### Version 1.0.0
Initial Arduino library version

# CI
Since Travis CI is unreliable and slow, the library examples are now tested with GitHub Actions for the following boards:

- arduino:avr:uno
- arduino:avr:leonardo
- arduino:avr:mega
- esp8266:esp8266:huzzah:eesz=4M3M,xtal=80
- esp32:esp32:featheresp32:FlashFreq=80
- STM32:stm32:GenF1:pnum=BLUEPILL_F103C8

## Requests for modifications / extensions
Please write me a PM including your motivation/problem if you need a modification or an extension.

#### If you find this library useful, please give it a star.
