// Simple MP3 player using the MD_YX5300 library.
//
// MP3 player has the following functions:
// - Start/pause track playback with switch (press)
// - Play next track with switch (long press)
// - Volume control using potentiometer
// - Run state shown using LED indicator
//
// Implemented using all synchronous calls and kept as simple as possible.
// All tracks need to be placed in folder PLAY_FOLDER (defined below)
//
// Library dependencies:
// MD_UISwitch can be found at https://github.com/MajicDesigns/MD_UISwitch
//

#ifndef USE_SOFTWARESERIAL
#define USE_SOFTWARESERIAL 1   ///< Set to 1 to use SoftwareSerial library, 0 for native serial port
#endif

#include <MD_YX5300.h>
#include <MD_UISwitch.h>

#if USE_SOFTWARESERIAL
#include <SoftwareSerial.h>

// Connections for serial interface to the YX5300 module
const uint8_t ARDUINO_RX = 4;    // connect to TX of MP3 Player module
const uint8_t ARDUINO_TX = 5;    // connect to RX of MP3 Player module

SoftwareSerial  MP3Stream(ARDUINO_RX, ARDUINO_TX);  // MP3 player serial stream for comms
#define Console Serial           // command processor input/output stream
#else
#define MP3Stream Serial2  // Native serial port - change to suit the application
#define Console   Serial   // command processor input/output stream
#endif

const uint8_t PIN_SWITCH = 6;    // play/pause toggle digital pin, active low (PULLUP)
const uint8_t PIN_LED = 7;       // LED to show status
const uint8_t POT_VOLUME = A0;   // volume control pot analog pin

const uint8_t PLAY_FOLDER = 1;   // tracks are all placed in this folder

// Debug switch for debugging output - set to non-zero to enable
#define DEBUG 0

#ifdef DEBUG
#define PRINT(s,v)    { Console.print(F(s)); Console.print(v); }
#define PRINTX(s,v)   { Console.print(F(s)); Console.print(v, HEX); }
#define PRINTS(s)     { Console.print(F(s)); }
#else
#define PRINT(s,v)
#define PRINTX(s,v)
#define PRINTS(s)
#endif

// Define global variables
MD_YX5300 mp3(MP3Stream);
MD_UISwitch_Digital sw(PIN_SWITCH);
bool playerPause = true;  // true if player is currently paused

void processVolume(bool bForce = false)
// read the volume pot and set the volume if it has changed
{
  static uint8_t vol;   // current audio volume
  uint8_t newVolume = map(analogRead(POT_VOLUME), 0, 1023, 0, mp3.volumeMax());
  
  if (newVolume != vol || bForce)
  {
    PRINT("\nSetting volume ", newVolume);
    vol = newVolume;
    bool b = mp3.volume(vol);
    PRINT(" result ", b);
  }
}

void processSwitch(bool bForce = false)
// read the switch and act if it has been pressed
{
  MD_UISwitch::keyResult_t k = sw.read();

  if ((k == MD_UISwitch::KEY_LONGPRESS || bForce) && !playerPause)
  {
    // note: this command makes no sense if paused so excluded above
    bool b;

    PRINTS("\nPlaying next");
    b = mp3.playNext();
    PRINT(" result ", b);
  }
  // don't use 'else' here in case this is a force
  if (k == MD_UISwitch::KEY_PRESS || bForce)
  {
    bool b;

    if (!bForce) playerPause = !playerPause;
    PRINT("\nSwitching to ", playerPause ? F("PAUSE") : F("PLAY"));
    if (playerPause) b = mp3.playPause(); else b = mp3.playStart();
    PRINT(" result ", b);
  }
}

void setStatusLED(void)
// set the status led - on for running, off for paused
{
  if (playerPause)
    digitalWrite(PIN_LED, LOW);
  else
    digitalWrite(PIN_LED, HIGH);
}

void setup()
{
#if DEBUG
  Console.begin(57600);
#endif
  PRINTS("\n[MD_YX5300 Simple Player]");

  // set the hardware pins
  pinMode(PIN_LED, OUTPUT);
  pinMode(POT_VOLUME, INPUT);

  // initialize global libraries
  MP3Stream.begin(MD_YX5300::SERIAL_BPS);
  mp3.begin();
  mp3.setSynchronous(true);
  mp3.playFolderRepeat(PLAY_FOLDER);
  processVolume(true);    // force these to set up the hardware
  processSwitch(true);

  // Set up the switches modes - only simple switching
  sw.begin();
  sw.enableDoublePress(false);
  sw.enableRepeat(false);
}

void loop()
{
  mp3.check();        // run the mp3 receiver
  processVolume();    // set the volume if required
  processSwitch();    // process the user switch
  setStatusLED();     // set the status LED to current status
}
