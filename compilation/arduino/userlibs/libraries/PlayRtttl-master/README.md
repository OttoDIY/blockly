# [PlayRtttl](https://github.com/ArminJo/PlayRtttl)
Improved Arduino library version of the RTTTL.pde example code written by Brett Hagman http://www.roguerobotics.com/  bhagman@roguerobotics.com

### [Version 2.0.0](https://github.com/ArminJo/PlayRtttl/releases)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Installation instructions](https://www.ardu-badge.com/badge/PlayRtttl.svg?)](https://www.ardu-badge.com/PlayRtttl)
[![Commits since latest](https://img.shields.io/github/commits-since/ArminJo/PlayRtttl/latest)](https://github.com/ArminJo/PlayRtttl/commits/master)
[![Build Status](https://github.com/ArminJo/PlayRtttl/workflows/LibraryBuild/badge.svg)](https://github.com/ArminJo/PlayRtttl/actions)
![Hit Counter](https://visitor-badge.laobi.icu/badge?page_id=ArminJo_PlayRtttl)

Available as Arduino library "PlayRtttl"
# Features
 - Plays RTTTL melodies/ringtones from FLASH or RAM.
 - Non blocking version.
 - Name output function.
 - Sample melodies.
 - Random play of melodies from array.
 - Supports inverted tone pin logic i.e. tone pin is HIGH at playing a pause.
 - Accepts even invalid specified RTTTL files found in the wild.
 - Supports RTX format - 2 additional parameters: 1. l=<number_of_loops> 2.s=<Style[N|S|C]>).
 - Tone style (relation of tone output to note length) and loop count can be set for a melody.

YouTube video of the RandomMelody example in action.<br/>
[![RandomMelody example](https://i.ytimg.com/vi/0n9_Fm3VP3w/hqdefault.jpg)](https://www.youtube.com/watch?v=0n9_Fm3VP3w)

WOKWI online simulation of the RandomMelody example.<br/>
[![WOKWI online simulation of the RandomMelody example](https://github.com/ArminJo/PlayRtttl/blob/master/pictures/Wokwi_PlayRandowMelody.png)](https://wokwi.com/arduino/projects/299510184400650762).

# Sample code
## Blocking play melody from FLASH
```c++
#include <PlayRtttl.h>
const int TONE_PIN = 11;
...
    playRtttlBlockingPGM(TONE_PIN, Bond);
...

```
## Non blocking play

```c++
...
    startPlayRtttlPGM(TONE_PIN, TakeOnMe);
    while (updatePlayRtttl()) {
        // your own code here...
        delay(1);
    }
...
```

# RTTTL format
\<NameString>:\<Option>:(\<Option>:)\<Note>,\<Note>...<br/>

Option:<br/>
- d=Default duration of a note
- o=Default octave
- b=Beats per minutes of a quarter note
- opt l=Number of loops
- opt s=Style - see "#define RTX_STYLE_CONTINUOUS 'C'" and following above

Note:<br/>
- opt duration (1 for a whole, 4 for a quarter note, etc.)
- note (p = pause)
- opt dot to increase duration by half
- opt octave

Example: `"Short:d=4,o=3,b=240,s=4:c4,8g,8g,a,g.,b,c4"`

# Compile options / macros for this library
To customize the library to different requirements, there are some compile options / macros available.<br/>
These macros must be defined in your program before the line `#include <PlayRtttl.hpp>` to take effect.<br/>
Modify them by enabling / disabling them, or change the values if applicable.

| Name | Default value | Description |
|-|-|-|
| `USE_NO_RTX_EXTENSIONS` | disabled | Disables interpretation of RTX format definitions `'s'` (style) and `'l'` (loop).<br/>Even with `USE_NO_RTX_EXTENSIONS` activated, the default style is natural (Tone length = note length - 1/16).<br/>Saves up to 332 bytes program memory. |
| `RTX_STYLE_DEFAULT` | 'N' | (Natural) Tone length = note length - 1/16. |

### Changing include (*.h) files with Arduino IDE
First, use *Sketch > Show Sketch Folder (Ctrl+K)*.<br/>
If you have not yet saved the example as your own sketch, then you are instantly in the right library folder.<br/>
Otherwise you have to navigate to the parallel `libraries` folder and select the library you want to access.<br/>
In both cases the library source and include files are located in the libraries `src` directory.<br/>
The modification must be renewed for each new library version!

### Modifying compile options / macros with PlatformIO
If you are using PlatformIO, you can define the macros in the *[platformio.ini](https://docs.platformio.org/en/latest/projectconf/section_env_build.html)* file with `build_flags = -D MACRO_NAME` or `build_flags = -D MACRO_NAME=macroValue`.

### Modifying compile options / macros with Sloeber IDE
If you are using [Sloeber](https://eclipse.baeyens.it) as your IDE, you can easily define global symbols with *Properties > Arduino > CompileOptions*.<br/>
![Sloeber settings](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/pictures/SloeberDefineSymbols.png)


# Running with 1 MHz
If running with 1 MHz, e.g on an ATtiny, the millis() interrupt needs so much time, that it disturbes the tone() generation by interrupt. You can avoid this by using a tone pin, which is directly supported by hardware. Look at the appropriate *pins_arduino.h*, find `digital_pin_to_timer_PGM[]` and choose pins with TIMER1x entries.

# More songs
More RTTTL songs can be found under http://www.picaxe.com/RTTTL-Ringtones-for-Tune-Command/ or ask Google.
[C array of songs on GitHub](https://github.com/granadaxronos/120-SONG_NOKIA_RTTTL_RINGTONE_PLAYER_FOR_ARDUINO_UNO/blob/master/RTTTL_PLAYER/songs.h)

# Compiling for ATtinies
In order to fit the examples to the 8K flash of ATtiny85 and ATtiny88, the [Arduino library ATtinySerialOut](https://github.com/ArminJo/ATtinySerialOut) is required for this CPU's.

# Revision History
### Version 2.0.0
- Renamed PlayRttl.cpp to PlayRttl.hpp.
- Removed Macros SUPPORT_RTX_EXTENSIONS and SUPPORT_RTX_FORMAT.

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
- Printing functions have parameter (..., Stream *aSerial) to print to any serial. Call it (..., &Serial) using [Sloeber]tandard Serial;
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
