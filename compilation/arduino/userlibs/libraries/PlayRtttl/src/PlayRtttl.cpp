/*
 * PlayRttl.cpp
 * Plays RTTTL melodies / ringtones from FLASH or RAM.
 * Includes a non blocking version and a name output function.
 *
 *  Copyright (C) 2018  Armin Joachimsmeyer
 *  armin.joachimsmeyer@gmail.com
 *
 *     Based on the RTTTL.pde example code written by Brett Hagman
 *     http://www.roguerobotics.com/
 *     bhagman@roguerobotics.com
 *
 *     The example melodies may have copyrights you have to respect.
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

#include "PlayRtttl.h"

// comment out next line to see the note played on Serial output
//#define TRACE
// comment out next line to see debug output
//#define DEBUG

// Propagate debug level
#ifdef TRACE
#  ifndef DEBUG
#define DEBUG
#  endif
#endif
#ifdef DEBUG
Print * const sPointerToSerial = &Serial;  // needs 0 bytes Flash because it is constant
#endif //DEBUG

struct playRtttlState sPlayRtttlState;

/*
 * The frequencies of notes of the highest octave.
 * Used to compute all other frequencies.
 */
const int Notes[] PROGMEM = { NOTE_C7, NOTE_CS7, NOTE_D7, NOTE_DS7, NOTE_E7, NOTE_F7, NOTE_FS7, NOTE_G7, NOTE_GS7, NOTE_A7,
NOTE_AS7, NOTE_B7 };

#define isdigit(n) (n >= '0' && n <= '9')

uint8_t sDefaultStyleDivisorValue = RTTTL_STYLE_DEFAULT; // Natural (16)

/*
 * Blocking versions
 */
void playRtttlBlocking(uint8_t aTonePin, const char *aRTTTLArrayPtr) {
    startPlayRtttl(aTonePin, aRTTTLArrayPtr, NULL);
    while (updatePlayRtttl()) {
        delay(1); // this in turn calls yield();
    }
}

/*
 * Version for RTTTL Data in RAM. Ie. you must call updatePlayRtttl() in your loop.
 * Since we do not need all the pgm_read_byte() calls this version is more simple and maybe better to understand.
 */
void startPlayRtttl(uint8_t aTonePin, const char *aRTTTLArrayPtr, void (*aOnComplete)()) {
    sPlayRtttlState.Flags.IsPGMMemory = false;
    sPlayRtttlState.OnComplete = aOnComplete;
    sPlayRtttlState.TonePin = aTonePin;
#if defined(ESP32)
    ledcAttachPin(aTonePin, 0);
#endif
    int tNumber;
    /*
     * Skip name and :
     */
#ifdef DEBUG
    sPointerToSerial->print(F("Title="));
#endif
    while (*aRTTTLArrayPtr != ':') {
        /*
         * Read title
         */
#ifdef DEBUG
        sPointerToSerial->print(*aRTTTLArrayPtr);
#endif
        aRTTTLArrayPtr++;
    }

    sPlayRtttlState.DefaultDuration = DEFAULT_DURATION;
    sPlayRtttlState.DefaultOctave = DEFAULT_OCTAVE;
    sPlayRtttlState.TimeForWholeNoteMillis = (60 * 1000L / DEFAULT_BPM) * 4;
#ifdef SUPPORT_RTX_EXTENSIONS
    sPlayRtttlState.NumberOfLoops = 1;
    sPlayRtttlState.StyleDivisorValue = sDefaultStyleDivisorValue;
#endif

#ifdef SUPPORT_RTX_FORMAT
#ifdef DEBUG
    char tStyleChar = RTX_STYLE_DEFAULT;
#else
    char tStyleChar;
#endif
#endif
    int tBPM;

    do {
        /*
         * Get character after separator (comma or colon)
         */
        aRTTTLArrayPtr++;

        /*
         * Read song info with format: d=N(N),o=N,b=NNN:
         */
        if (*aRTTTLArrayPtr == 'd') {
            /*
             * get default duration
             */
            aRTTTLArrayPtr++;
            aRTTTLArrayPtr++;              // skip "d="
            tNumber = 0;
            while (isdigit(*aRTTTLArrayPtr)) {
                tNumber = (tNumber * 10) + (*aRTTTLArrayPtr++ - '0');
            }
            if (tNumber == 0) {
                tNumber = DEFAULT_DURATION;
            }
            sPlayRtttlState.DefaultDuration = tNumber;
        }

        /*
         * get default octave
         */
        if (*aRTTTLArrayPtr == 'o') {
            aRTTTLArrayPtr++;
            aRTTTLArrayPtr++;              // skip "o="
            tNumber = *aRTTTLArrayPtr++ - '0';
            if (tNumber < 3 && tNumber > 7) {
                tNumber = DEFAULT_OCTAVE;
            }
            sPlayRtttlState.DefaultOctave = tNumber;
        }

#ifdef SUPPORT_RTX_FORMAT
        if (*aRTTTLArrayPtr == 's') {
            // get Style
            aRTTTLArrayPtr++;
            aRTTTLArrayPtr++;           // skip "s="
            tStyleChar = *aRTTTLArrayPtr++;
            tNumber = convertStyleCharacterToDivisorValue(tStyleChar);
            sPlayRtttlState.StyleDivisorValue = tNumber;
        }

        // get loops
        if (*aRTTTLArrayPtr == 'l') {
            tNumber = 0;
            aRTTTLArrayPtr++;
            aRTTTLArrayPtr++;              // skip "l="
            while (isdigit(*aRTTTLArrayPtr)) {
                tNumber = (tNumber * 10) + (*aRTTTLArrayPtr++ - '0');
            }
            if (tNumber == 15) {
                tNumber = 0;
            }
            sPlayRtttlState.NumberOfLoops = tNumber;
        }
#endif

        if (*aRTTTLArrayPtr == 'b') {
            // get BPM
            aRTTTLArrayPtr++;
            aRTTTLArrayPtr++;              // skip "b="
            tBPM = 0;
            while (isdigit(*aRTTTLArrayPtr)) {
                tBPM = (tBPM * 10) + (*aRTTTLArrayPtr++ - '0');
            }
            if (tBPM == 0) {
                tBPM = DEFAULT_BPM;
            }
            // BPM usually expresses the number of quarter notes per minute
            sPlayRtttlState.TimeForWholeNoteMillis = (60 * 1000L / tBPM) * 4;
        }

    } while (*aRTTTLArrayPtr != ':');

    aRTTTLArrayPtr++; // skip colon

#ifdef DEBUG
    sPointerToSerial->print(F(" DefaultDuration="));
    sPointerToSerial->print(sPlayRtttlState.DefaultDuration);
    sPointerToSerial->print(F(" DefaultOctave="));
    sPointerToSerial->print(sPlayRtttlState.DefaultOctave);
    sPointerToSerial->print(F(" BPM="));
    sPointerToSerial->print(tBPM);
#ifdef SUPPORT_RTX_FORMAT
    sPointerToSerial->print(F(" Style="));
    sPointerToSerial->print(tStyleChar);
    if (sPlayRtttlState.StyleDivisorValue != 0) {
        sPointerToSerial->print(F(" -> 1/"));
        sPointerToSerial->print(sPlayRtttlState.StyleDivisorValue);
        sPointerToSerial->print(F(" pause between notes,"));
    }
    sPointerToSerial->print(F(" Loops="));
    sPointerToSerial->print(sPlayRtttlState.NumberOfLoops);
#endif
    sPointerToSerial->println();
#endif

    sPlayRtttlState.MillisOfNextAction = 0;
    sPlayRtttlState.NextTonePointer = aRTTTLArrayPtr;
#ifdef SUPPORT_RTX_EXTENSIONS
    sPlayRtttlState.LastTonePointer = aRTTTLArrayPtr;
#endif
    sPlayRtttlState.Flags.IsRunning = true;

    /*
     * Play first tone
     */
    updatePlayRtttl();
}

void stopPlayRtttl(void) {
#if defined(ESP32)
    ledcWriteTone(0,0);
#else
    noTone(sPlayRtttlState.TonePin);
#if defined(TCCR2A)
    // reset direct hardware toggle output at OC2A / pin 11
    TCCR2A &= ~_BV(COM2A0);
#endif
#endif
    // noTone sets pin to LOW ->  need to handle inverted pin mode here
    if (sPlayRtttlState.Flags.IsTonePinInverted) {
        digitalWrite(sPlayRtttlState.TonePin, HIGH);
    }
    sPlayRtttlState.Flags.IsRunning = false;
}

char getNextCharFromRTTLArray(const char *aRTTTLArrayPtr) {
    if (sPlayRtttlState.Flags.IsPGMMemory) {
        return pgm_read_byte(aRTTTLArrayPtr);
    }
    return *aRTTTLArrayPtr;
}

/*
 * Returns true if tone is playing, false if tone has ended or stopped
 */
bool updatePlayRtttl(void) {

    if (!sPlayRtttlState.Flags.IsRunning) {
        return false;
    }

#ifdef TRACE
    bool isSharp = false;
    char tNoteCharUppercase;
#endif

    long tMillis = millis();
    if (tMillis >= sPlayRtttlState.MillisOfNextAction) {
        const char *tRTTTLArrayPtr = sPlayRtttlState.NextTonePointer;

        char tChar;
        tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);

        /*
         * Check if end of string reached
         */
        if (tChar == '\0') {
#ifdef SUPPORT_RTX_EXTENSIONS
            uint8_t tNumberOfLoops = sPlayRtttlState.NumberOfLoops;
            if (tNumberOfLoops > 1) {
                sPlayRtttlState.NumberOfLoops--;
            }
            if (tNumberOfLoops == 1) {
#endif
                // end song
                stopPlayRtttl();
                if (sPlayRtttlState.OnComplete != NULL) {
                    sPlayRtttlState.OnComplete();
                }
                return false;
#ifdef SUPPORT_RTX_EXTENSIONS
            } else {
                // loop again
#ifdef DEBUG
                sPointerToSerial->print(F("Loop count="));
                sPointerToSerial->println(sPlayRtttlState.NumberOfLoops);
#endif
                sPlayRtttlState.MillisOfNextAction = 0;
                sPlayRtttlState.NextTonePointer = sPlayRtttlState.LastTonePointer;
                return updatePlayRtttl();
            }
#endif //  SUPPORT_RTX_EXTENSIONS
        }

        uint8_t tDurationNumber;
        unsigned long tDuration;
        uint8_t tNote;
        uint8_t tOctave;

// first, get note duration, if available
        tDurationNumber = 0;
        while (isdigit(tChar)) {
            tDurationNumber = (tDurationNumber * 10) + (tChar - '0');
            tRTTTLArrayPtr++;
            tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);
        }

        if (tDurationNumber == 0) {
            tDurationNumber = sPlayRtttlState.DefaultDuration; // we will need to check if we are a dotted note after
        }
        tDuration = sPlayRtttlState.TimeForWholeNoteMillis / tDurationNumber;

// now get the note
        tNote = 42; // Pause
#ifdef TRACE
        tNoteCharUppercase = tChar - 0x20;
#endif

        switch (tChar) {
        case 'c':
            tNote = 0;
            break;
        case 'd':
            tNote = 2;
            break;
        case 'e':
            tNote = 4;
            break;
        case 'f':
            tNote = 5;
            break;
        case 'g':
            tNote = 7;
            break;
        case 'a':
            tNote = 9;
            break;
        case 'b':
        case 'h':  // I have seen this
            tNote = 11;
            break;
        case 'p':
        default:
#ifdef TRACE
            tNoteCharUppercase = 'P';
#endif
            tNote = 42; // pause
        }

        tRTTTLArrayPtr++;
        tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);

        // now, get optional '#' sharp (or '_' as seen on many songs)
        if (tChar == '#' || tChar == '_') {
#ifdef TRACE
            isSharp = true;
#endif
            tNote++;
            tRTTTLArrayPtr++;
            tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);
        }

// now, get optional '.' of dotted note
        if (tChar == '.') {
            tDuration += tDuration / 2;
#ifdef DEBUG
            tDurationNumber += tDurationNumber / 2;
#endif
            tRTTTLArrayPtr++;
            tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);
        }

// now, get octave
        if (isdigit(tChar)) {
            tOctave = tChar - '0';
            tRTTTLArrayPtr++;
            tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);
        } else {
            tOctave = sPlayRtttlState.DefaultOctave;
        }

        if (tChar == '.') {         // believe me I have seen this (e.g. in SilentNight)
            tDuration += tDuration / 2;
            tRTTTLArrayPtr++;
            tChar = getNextCharFromRTTLArray(tRTTTLArrayPtr);
        }

        if (tChar == ',') {
            tRTTTLArrayPtr++;       // skip comma for next note (or we may be at the end)
        }

        /*
         * now play the note
         */
#  if defined(SUPPORT_RTX_EXTENSIONS)
#pragma GCC diagnostic ignored "-Wmaybe-uninitialized"
        unsigned long tDurationOfTone;
#endif
        if (tNote <= 12) {
#if defined(__AVR__)
            uint16_t tFrequency = pgm_read_word(&Notes[tNote]) >> (NOTES_OCTAVE - tOctave);
#else
            uint16_t tFrequency = Notes[tNote] >> (NOTES_OCTAVE - tOctave);
#endif // defined(__AVR__)

#if defined(ESP32)
            ledcWriteTone(0, tFrequency);
#else
#  if defined(SUPPORT_RTX_EXTENSIONS)
            if (sPlayRtttlState.StyleDivisorValue != 0) {
                /*
                 * handle style parameter, compute duration of tone output for note and do rounding for integer division
                 */
                tDurationOfTone = tDuration
                        - ((tDuration + (sPlayRtttlState.StyleDivisorValue / 2)) / sPlayRtttlState.StyleDivisorValue);
                tone(sPlayRtttlState.TonePin, tFrequency, tDurationOfTone);
            } else {
                tone(sPlayRtttlState.TonePin, tFrequency, tDuration);
            }

#  else
            // even without SUPPORT_RTX_EXTENSIONS the default style is natural (Tone length = note length - 1/16)
            tone(sPlayRtttlState.TonePin, tFrequency, tDuration - (tDuration >> 4));
#  endif

#  if defined(TCCR2A)
            if (sPlayRtttlState.TonePin == 11) {
                // switch to direct hardware toggle output at OC2A / pin 11
                TCCR2A |= _BV(COM2A0);
            }
#  endif
#endif // defined(ESP32)

        } else {
            // Play pause, need to handle inverted pin mode here
#if defined(ESP32)
            ledcWriteTone(0,0);
#else
            noTone(sPlayRtttlState.TonePin);
#if defined(TCCR2A)
            // reset direct hardware toggle output at OC2A / pin 11
            TCCR2A &= ~_BV(COM2A0);
#endif
#endif // defined(ESP32)

            if (sPlayRtttlState.Flags.IsTonePinInverted) {
                digitalWrite(sPlayRtttlState.TonePin, HIGH);
            }
        }
#ifdef TRACE
        sPointerToSerial->print(F("Playing: NOTE_"));
        sPointerToSerial->print(tNoteCharUppercase);
        if (isSharp) {
            sPointerToSerial->print('#');
        }
        if (tNote <= 12) {
            sPointerToSerial->print(tOctave, 10);
        }
        sPointerToSerial->print(F(", "));
        sPointerToSerial->print(tDurationNumber, 10);

        sPointerToSerial->print(F(" | "));
#  if defined(__AVR__)
        sPointerToSerial->print(pgm_read_word(&Notes[tNote]) >> (NOTES_OCTAVE - tOctave), 10);
#  else
        sPointerToSerial->print(Notes[tNote] >> (NOTES_OCTAVE - tOctave), 10);
#  endif
        sPointerToSerial->print(F(" Hz for "));
#  if defined(SUPPORT_RTX_EXTENSIONS)
        if (sPlayRtttlState.StyleDivisorValue != 0 && tNote <= 12) {
            sPointerToSerial->print(tDurationOfTone, 10);
            sPointerToSerial->print(F(" of "));
        }
#  endif
        sPointerToSerial->print(tDuration, 10);
        sPointerToSerial->println(F(" ms"));

#endif //TRACE
        sPlayRtttlState.MillisOfNextAction = tMillis + tDuration;
        sPlayRtttlState.NextTonePointer = tRTTTLArrayPtr;
    }
    return true;
}

void getRtttlName(const char *aRTTTLArrayPtr, char *aBuffer, uint8_t aBuffersize) {
    char tChar = *aRTTTLArrayPtr++;
    while (tChar != ':' && aBuffersize > 1) {
        *aBuffer++ = tChar;
        aBuffersize--;
        tChar = *aRTTTLArrayPtr++;
    }
    *aBuffer = '\0';
}

/*
 * Prints text "Now playing: Song xy"
 * call it e.g. printNamePGM(RTTTLMelodies[tRandomIndex], &Serial);
 */
void printName(const char *aRTTTLArrayPtr, Print *aSerial) {
    char StringBuffer[16];
    aSerial->print(F("Now playing: "));
    getRtttlName(aRTTTLArrayPtr, StringBuffer, sizeof(StringBuffer));
    aSerial->println(StringBuffer);
}

/*
 * Plays one of the songs in the array specified non blocking. Ie. you must call updatePlayRtttl() in your loop or use the callback function.
 * aNumberOfEntriesInSongArrayPGM is (sizeof(<MyArrayName>) / sizeof(char *) - 1)
 * char StringBuffer[16] is sufficient for most titles.
 */
void startPlayRandomRtttlFromArray(uint8_t aTonePin, const char * const aSongArray[], uint8_t aNumberOfEntriesInSongArray,
        char *aBufferPointer, uint8_t aBufferSize, void (*aOnComplete)()) {
    uint8_t tRandomIndex = random(0, aNumberOfEntriesInSongArray - 1);
    char* tSongPtr = (char*) aSongArray[tRandomIndex];
    startPlayRtttl(aTonePin, tSongPtr, aOnComplete);
    if (aBufferPointer != NULL) {
// copy title to buffer
        getRtttlName(tSongPtr, aBufferPointer, aBufferSize);
    }
}

void startPlayRandomRtttlFromArrayAndPrintName(uint8_t aTonePin, const char * const aSongArray[],
        uint8_t aNumberOfEntriesInSongArray, Print *aSerial, void (*aOnComplete)()) {
    uint8_t tRandomIndex = random(0, aNumberOfEntriesInSongArray - 1);
    char* tSongPtr = (char*) aSongArray[tRandomIndex];
    startPlayRtttl(aTonePin, tSongPtr, aOnComplete);
// print title
    printName(tSongPtr, aSerial);
}

/*
 * Plays one of the samples from RTTTLMelodies array
 */
void playRandomRtttlSampleBlocking(uint8_t aTonePin) {
    uint8_t tRandomIndex = random(0, sizeof(RTTTLMelodies) / sizeof(char*) - 1);
    char* tSongPtr = (char*) RTTTLMelodies[tRandomIndex];
    playRtttlBlocking(aTonePin, tSongPtr);
}

void playRandomRtttlSampleBlockingAndPrintName(uint8_t aTonePin, Print *aSerial) {
    uint8_t tRandomIndex = random(0, sizeof(RTTTLMelodies) / sizeof(char *) - 1);
    char* tSongPtr = (char*) RTTTLMelodies[tRandomIndex];
    printName(tSongPtr, aSerial);
    playRtttlBlocking(aTonePin, tSongPtr);
}

void playRtttlBlockingPGM(uint8_t aTonePin, const char *aRTTTLArrayPtrPGM) {
    startPlayRtttlPGM(aTonePin, aRTTTLArrayPtrPGM, NULL);
    while (updatePlayRtttl()) {
        delay(1); // this in turn calls yield();
    }
}

/*
 * Non blocking version for RTTTL Data in FLASH. Ie. you must call updatePlayRtttl() in your loop.
 */
void startPlayRtttlPGM(uint8_t aTonePin, const char *aRTTTLArrayPtrPGM, void (*aOnComplete)()) {
    sPlayRtttlState.Flags.IsPGMMemory = true;
    sPlayRtttlState.OnComplete = aOnComplete;
    sPlayRtttlState.TonePin = aTonePin;

    int tNumber;

    /*
     * Skip name and :
     */
#ifdef DEBUG
    sPointerToSerial->print(F("Title="));
#endif
    char tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
    while (tPGMChar != ':') {
        /*
         * Read title
         */
#ifdef DEBUG
        sPointerToSerial->print(tPGMChar);
#endif
        aRTTTLArrayPtrPGM++;
        tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
    }

    sPlayRtttlState.DefaultDuration = DEFAULT_DURATION;
    sPlayRtttlState.DefaultOctave = DEFAULT_OCTAVE;
    sPlayRtttlState.TimeForWholeNoteMillis = (60 * 1000L / DEFAULT_BPM) * 4;
#if defined(SUPPORT_RTX_EXTENSIONS)
    sPlayRtttlState.NumberOfLoops = 1;
    sPlayRtttlState.StyleDivisorValue = sDefaultStyleDivisorValue;
#endif

#ifdef SUPPORT_RTX_FORMAT
#ifdef DEBUG
    char tStyleChar = RTX_STYLE_DEFAULT;
#else
    char tStyleChar;
#endif
#endif
    int tBPM;

    do {
        /*
         * Get character after separator (comma or colon)
         */
        aRTTTLArrayPtrPGM++;
        tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
        /*
         * Read song info with format: d=N(N),o=N,b=NNN:
         */
        if (tPGMChar == 'd') {
            /*
             * get default duration
             */
            aRTTTLArrayPtrPGM++;
            aRTTTLArrayPtrPGM++;              // skip "d="
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            tNumber = 0;
            while (isdigit(tPGMChar)) {
                tNumber = (tNumber * 10) + (tPGMChar - '0');
                aRTTTLArrayPtrPGM++;
                tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            }
            if (tNumber == 0) {
                tNumber = DEFAULT_DURATION;
            }
            sPlayRtttlState.DefaultDuration = tNumber;
        } else if (tPGMChar == 'o') {
            /*
             * get default octave
             */
            aRTTTLArrayPtrPGM++;
            aRTTTLArrayPtrPGM++;              // skip "o="
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            tNumber = tPGMChar - '0';
            if (tNumber < 3 && tNumber > 7) {
                tNumber = DEFAULT_OCTAVE;
            }
            sPlayRtttlState.DefaultOctave = tNumber;
            //get comma or colon
            aRTTTLArrayPtrPGM++;
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
        } else

#ifdef SUPPORT_RTX_FORMAT
        if (tPGMChar == 's') {
            // get Style
            aRTTTLArrayPtrPGM++;
            aRTTTLArrayPtrPGM++;              // skip "s="
            tStyleChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            tNumber = convertStyleCharacterToDivisorValue(tStyleChar);
            sPlayRtttlState.StyleDivisorValue = tNumber;
            //get comma or colon
            aRTTTLArrayPtrPGM++;
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
        } else if (tPGMChar == 'l') {
            // get loops
            aRTTTLArrayPtrPGM++;
            aRTTTLArrayPtrPGM++;              // skip "l="
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            tNumber = 0;
            while (isdigit(tPGMChar)) {
                tNumber = (tNumber * 10) + (tPGMChar - '0');
                aRTTTLArrayPtrPGM++;
                tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            }
            if (tNumber == 15) {
                tNumber = 0;
            }
            sPlayRtttlState.NumberOfLoops = tNumber;
        } else
#endif

        // get BPM
        if (tPGMChar == 'b') {
            aRTTTLArrayPtrPGM++;
            aRTTTLArrayPtrPGM++;              // skip "b="
            tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            tBPM = 0;
            while (isdigit(tPGMChar)) {
                tBPM = (tBPM * 10) + (tPGMChar - '0');
                aRTTTLArrayPtrPGM++;
                tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM);
            }
            if (tBPM == 0) {
                tBPM = DEFAULT_BPM;
            }
            // BPM usually expresses the number of quarter notes per minute
            sPlayRtttlState.TimeForWholeNoteMillis = (60 * 1000L / tBPM) * 4;
        }

    } while (tPGMChar != ':');

    aRTTTLArrayPtrPGM++; // skip colon

#ifdef DEBUG
    sPointerToSerial->print(F(" DefaultDuration="));
    sPointerToSerial->print(sPlayRtttlState.DefaultDuration);
    sPointerToSerial->print(F(" DefaultOctave="));
    sPointerToSerial->print(sPlayRtttlState.DefaultOctave);
    sPointerToSerial->print(F(" BPM="));
    sPointerToSerial->print(tBPM);
#ifdef SUPPORT_RTX_FORMAT
    sPointerToSerial->print(F(" Style="));
    sPointerToSerial->print(tStyleChar);
    if (sPlayRtttlState.StyleDivisorValue != 0) {
        sPointerToSerial->print(F(" -> 1/"));
        sPointerToSerial->print(sPlayRtttlState.StyleDivisorValue);
        sPointerToSerial->print(F(" pause between notes,"));
    }
    sPointerToSerial->print(F(" Loops="));
    sPointerToSerial->print(sPlayRtttlState.NumberOfLoops);
#endif
    sPointerToSerial->println();
#endif

    sPlayRtttlState.MillisOfNextAction = 0;
    sPlayRtttlState.NextTonePointer = aRTTTLArrayPtrPGM;
#ifdef SUPPORT_RTX_EXTENSIONS
    sPlayRtttlState.LastTonePointer = aRTTTLArrayPtrPGM;
#endif
    sPlayRtttlState.Flags.IsRunning = true;

    /*
     * Play first tone
     */
    updatePlayRtttl();
}

void getRtttlNamePGM(const char *aRTTTLArrayPtrPGM, char *aBuffer, uint8_t aBuffersize) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    getRtttlName(aRTTTLArrayPtrPGM, aBuffer, aBuffersize);
#else
    char tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM++);
    while (tPGMChar != ':' && aBuffersize > 1) {
        *aBuffer++ = tPGMChar;
        aBuffersize--;
        tPGMChar = pgm_read_byte(aRTTTLArrayPtrPGM++);
    }
    *aBuffer = '\0';
#endif
}

void printNamePGM(const char *aRTTTLArrayPtrPGM, Print *aSerial) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    printName(aRTTTLArrayPtrPGM, aSerial);
#else
    char StringBuffer[16];
    aSerial->print(F("Now playing: "));
    getRtttlNamePGM(aRTTTLArrayPtrPGM, StringBuffer, sizeof(StringBuffer));
    aSerial->println(StringBuffer);
#endif
}

/*
 * !!! Songs are in an array stored in FLASH containing pointers to song arrays also stored in FLASH, see PlayRtttl.h. !!!
 * Plays one of the songs in the array specified non blocking. Ie. you must call updatePlayRtttl() in your loop or use the callback function.
 * aNumberOfEntriesInSongArrayPGM is (sizeof(<MyArrayName>) / sizeof(char *) - 1)
 * char StringBuffer[16] is sufficient for most titles.
 */
void startPlayRandomRtttlFromArrayPGM(uint8_t aTonePin, const char * const aSongArrayPGM[], uint8_t aNumberOfEntriesInSongArrayPGM,
        char *aBufferPointer, uint8_t aBufferSize, void (*aOnComplete)()) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    startPlayRandomRtttlFromArray(aTonePin, aSongArrayPGM, aNumberOfEntriesInSongArrayPGM, aBufferPointer, aBufferSize, aOnComplete);
#else
    uint8_t tRandomIndex = random(0, aNumberOfEntriesInSongArrayPGM - 1);
    const char* tSongPtr = (char*) pgm_read_word(&aSongArrayPGM[tRandomIndex]);
    startPlayRtttlPGM(aTonePin, tSongPtr, aOnComplete);
    if (aBufferPointer != NULL) {
// copy title to buffer
        getRtttlNamePGM(tSongPtr, aBufferPointer, aBufferSize);
    }
#endif
}

/*
 * !!! Songs are in an array stored in FLASH containing pointers to song arrays also stored in FLASH, see PlayRtttl.h. !!!
 */
void startPlayRandomRtttlFromArrayPGMAndPrintName(uint8_t aTonePin, const char * const aSongArrayPGM[],
        uint8_t aNumberOfEntriesInSongArrayPGM, Print *aSerial, void (*aOnComplete)()) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    startPlayRandomRtttlFromArrayAndPrintName(aTonePin, aSongArrayPGM, aNumberOfEntriesInSongArrayPGM, aSerial, aOnComplete);
#else
    uint8_t tRandomIndex = random(0, aNumberOfEntriesInSongArrayPGM - 1);
    const char* tSongPtr = (char*) pgm_read_word(&aSongArrayPGM[tRandomIndex]);
    startPlayRtttlPGM(aTonePin, tSongPtr, aOnComplete);
// print title
    printNamePGM(tSongPtr, aSerial);
#endif
}

/*
 * Plays one of the samples from RTTTLMelodies array
 */
void playRandomRtttlSampleBlockingPGM(uint8_t aTonePin) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    playRandomRtttlSampleBlocking(aTonePin);
#else
    uint8_t tRandomIndex = random(0, sizeof(RTTTLMelodies) / sizeof(char *) - 1);
    const char* tSongPtr = (char*) pgm_read_word(&RTTTLMelodies[tRandomIndex]);
    playRtttlBlockingPGM(aTonePin, tSongPtr);
#endif
}

void playRandomRtttlSampleBlockingPGMAndPrintName(uint8_t aTonePin, Print *aSerial) {
#if !defined(__AVR__) // Let the function work for non AVR platforms
    playRandomRtttlSampleBlockingAndPrintName(aTonePin, aSerial);
#else
    uint8_t tRandomIndex = random(0, sizeof(RTTTLMelodies) / sizeof(char *) - 1);
    const char* tSongPtr = (char*) pgm_read_word(&RTTTLMelodies[tRandomIndex]);
    printNamePGM(tSongPtr, aSerial);
    playRtttlBlockingPGM(aTonePin, tSongPtr);
#endif
}

void setTonePinIsInverted(bool aTonePinIsInverted) {
    sPlayRtttlState.Flags.IsTonePinInverted = aTonePinIsInverted;
}

#ifdef SUPPORT_RTX_EXTENSIONS
/*
 * 0 means forever
 */
void setNumberOfLoops(uint8_t aNumberOfLoops) {
    sPlayRtttlState.NumberOfLoops = aNumberOfLoops;
#ifdef DEBUG
    sPointerToSerial->print(F("Set NumberOfLoops to "));
    sPointerToSerial->println(sPlayRtttlState.NumberOfLoops);
#endif
}

/*
 * Set the divisor for formula: Tone length = note length - note length * (1 / divisor)
 * Default is 16 / RTTTL_STYLE_NATURAL
 */
void setDefaultStyle(uint8_t aDefaultStyleDivisorValue) {
    sDefaultStyleDivisorValue = aDefaultStyleDivisorValue;
}

uint8_t convertStyleCharacterToDivisorValue(char aStyleCharacter) {
    if (aStyleCharacter == RTX_STYLE_STACCATO) {
        return 2;
    } else if (aStyleCharacter == RTX_STYLE_NATURAL) {
        return 16;
    } else if (aStyleCharacter > '0' && aStyleCharacter <= '9') {
        // convert ASCII to number
        return aStyleCharacter - '0';
    }
    return 0; // RTX_STYLE_CONTINUOUS
}
#endif // SUPPORT_RTX_EXTENSIONS
