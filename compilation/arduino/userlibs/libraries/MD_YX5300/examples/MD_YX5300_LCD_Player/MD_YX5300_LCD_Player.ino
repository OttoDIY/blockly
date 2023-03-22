// Complex MP3 player using the MD_YX5300 library.
//
// MP3 player has the following functions:
// - Detects when the SD card has been removed/inserted from the YX5300
// - Single switch (momentary on type) to change modes:
//    - Start/pause track playback with simple press
//    - Random/loop/single playback mode cycle with long press
// - Rotary encoder with switch to control
//    - Play next/previous track 
//    - Volume control 
// - Hitachi type LCD module (1602 LCD display) used to display info.
//
// Implemented using synchronous and asynchronous calls.
// All tracks need to be placed in folder PLAY_FOLDER (defined below).
//
// Library dependencies:
// MD_UISwitch can be found at https://github.com/MajicDesigns/MD_UISwitch
// MD_REncoder can be found at https://github.com/MajicDesigns/MD_REncoder
// LiquidCrystal_SR can be found at https://bitbucket.org/fmalpartida/new-liquidcrystal/overview
//
// NOTE:The LCD display module uses a SR backpack (LiquidCrystal_SR). You may need to change
// this (and initialization parameters) for your specific type of LCD display. The rest should
// work as is.

#ifndef USE_SOFTWARESERIAL
#define USE_SOFTWARESERIAL 1   ///< Set to 1 to use SoftwareSerial library, 0 for native serial port
#endif

#include <MD_YX5300.h>
#include <MD_REncoder.h>
#include <MD_UISwitch.h>
#include <LiquidCrystal_SR.h>

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

const uint8_t PLAY_FOLDER = 1;   // tracks are all placed in this folder

// Play mode switch
const uint8_t SW_PLAY_MODE = 6;  // play mode toggle switch, active low (internal PULLUP)

 // Rotary Encoder
const uint8_t SW_RE_MODE = 7;    // switch on the rotary encoder, active low (internal PULLUP)
const uint8_t RE_A = 2;          // Rotary encoder A pin
const uint8_t RE_B = 3;          // Rotary encoder B pin

// LCD with serial backpack pins
// This and the class initailiser will need to change if the LCD module has a different interface
const uint8_t LCD_CLK = 8;       // LCD backpack CLK pin
const uint8_t LCD_DAT = 9;       // LCD backpack DAT pin

const uint8_t LCD_COLS = 16;     // LCD number of columns
const uint8_t LCD_ROWS = 2;      // LCD number of rows

// Enable debug output - set to non-zero value to enable.
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
MD_UISwitch_Digital swPlayMode(SW_PLAY_MODE);
MD_UISwitch_Digital swREMode(SW_RE_MODE);
MD_REncoder re(RE_A, RE_B);
LiquidCrystal_SR lcd(LCD_DAT, LCD_CLK);

enum playMode_t { M_SEQ, M_SHUFFLE, M_LOOP, M_EJECTED };
enum playStatus_t { S_PAUSED, S_PLAYING, S_STOPPED };
enum encMode_t { E_VOLUME, E_TRACK };

struct    // contains all the running status information
{
  bool needUpdate;        // flag for display update required
  bool initializing;      // loading data from the device
  bool waiting;           // waiting initialization response

  playMode_t playMode;    // playing mode 
  playStatus_t playStatus;// playing status
  encMode_t encMode;      // encoder mode
  uint16_t numTracks;     // number of tracks in this folder
  int16_t curTrack;       // current track being played
  uint16_t volume;        // the current audio volume
} S;

// ---------------
// Static data for custom LCD characters, initialized in setup()
//
// Character identifiers
const uint8_t C_STOP = 0;
const uint8_t C_PLAY = 1;
const uint8_t C_PAUSE = 2;
const uint8_t C_SHUFFLE = 3;
const uint8_t C_LOOP = 4;
const uint8_t C_SEQ = 5;
const uint8_t C_EJECT = 6;

// Information structure
struct lcdData_t
{
  uint8_t code;
  uint8_t data[8];
};

// Character data table
const lcdData_t PROGMEM charDef[] = 
{
  { C_STOP,    { 0x00, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x00, 0x00 } },
  { C_PLAY,    { 0x10, 0x18, 0x1c, 0x1e, 0x1c, 0x18, 0x10, 0x00 } },
  { C_PAUSE,   { 0x00, 0x1b, 0x1b, 0x1b, 0x1b, 0x1b, 0x00, 0x00 } },
  { C_SHUFFLE, { 0x02, 0x17, 0x0a, 0x08, 0x08, 0x0a, 0x17, 0x02 } },
  { C_SEQ,     { 0x02, 0x1f, 0x02, 0x00, 0x02, 0x1f, 0x02, 0x00 } },
  { C_LOOP,    { 0x1e, 0x01, 0x09, 0x1d, 0x09, 0x09, 0x06, 0x00 } },
  { C_EJECT,   { 0x00, 0x04, 0x0e, 0x1f, 0x00, 0x1f, 0x00, 0x00 } }
};
// ---------------

bool initData(bool reset = false)
// Initialize data from the MP3 device. 
// This needs to be metered out as the data requests will generate 
// unsolicited messages to be handled in the callback - message 
// sequence must be maintained with the synchronous message processing
// stream.
// Returns true if the initialization must keep going, false when completed.
{
  static uint8_t state = 0;
  bool b = true;

  if (reset)    // just reset the sequencing
  {
    state = 0;
  }
  else
  {
    switch (state)
    {
    case 0:   // set a default state in the device and then ask for first data
      mp3.playSpecific(PLAY_FOLDER, 1);
      mp3.playPause();
      S.playMode = M_SEQ;
      S.playStatus = S_PAUSED;

      if (S.volume == 0)
        S.volume = (mp3.volumeMax() / 3) * 2;   // 2/3 of volume to start with
      mp3.volume(S.volume);

      // load number of files in the folder - needs wait for response
      mp3.queryFolderFiles(PLAY_FOLDER);
      S.waiting = true;
      state++;
      break;

    case 1: // now load the track playing - needs wait for response
      mp3.queryFile();
      S.waiting = true;
      state++;
      break;

    default:
      // end of sequence handler - reset to start
      state = 0;
      b = false;
      break;
    }
  }

  return(b);
}

void selectNextSong(int direction = 0)
// Pick the next song to play based on playing mode set.
// If direction  < 0 then select a 'previous' song, 
// otherwise the 'next' song is selected.
{
  switch (S.playMode)
  {
    case M_SHUFFLE:   // random selection
      {
        uint16_t x = random(S.numTracks) + 1;
        mp3.playTrack(x);
        PRINT("\nPlay SHUFFLE ", x);
      }
      break;

    case M_LOOP:      // replay the same track
      {
        mp3.playTrack(S.curTrack);
        PRINTS("\nPlay LOOP");
      }
      break;

    case M_SEQ:       // play sequential - next/previous
      {
        if (direction < 0)
          mp3.playPrev();
        else
          mp3.playNext();
        PRINTS("\nPlay SEQ");
      }
      break;

    default:    // do nothing
      break;
  }
  mp3.queryFile();    // force index the update in callback
}

void cbResponse(const MD_YX5300::cbData *status)
// Callback function used to process device unsolicited messages
// or responses to data requests
{
  PRINTS("\n");
  switch (status->code)
  {
  case MD_YX5300::STS_FILE_END:   // track has ended
    PRINTS("STS_FILE_END");
    selectNextSong();
    break;

  case MD_YX5300::STS_TF_INSERT:  // card has been inserted
    PRINTS("STS_TF_INSERT"); 
    S.initializing = initData(true);
    break;

  case MD_YX5300::STS_TF_REMOVE:  // card has been removed
    PRINTS("STS_TF_REMOVE"); 
    S.playMode = M_EJECTED;
    S.playStatus = S_STOPPED;
    S.needUpdate = true;
    break;

  case MD_YX5300::STS_PLAYING:   // current track index 
    PRINTS("STS_PLAYING");    
    S.curTrack = status->data;
    S.needUpdate = true;
    break;

  case MD_YX5300::STS_FLDR_FILES: // number of files in the folder
    PRINTS("STS_FLDR_FILES"); 
    S.numTracks = status->data;
    S.needUpdate = true;
    break;

  // unhandled cases - used for debug only
  case MD_YX5300::STS_VOLUME:     PRINTS("STS_VOLUME");     break;
  case MD_YX5300::STS_TOT_FILES:  PRINTS("STS_TOT_FILES");  break;
  case MD_YX5300::STS_ERR_FILE:   PRINTS("STS_ERR_FILE");   break;
  case MD_YX5300::STS_ACK_OK:     PRINTS("STS_ACK_OK");     break;
  case MD_YX5300::STS_INIT:       PRINTS("STS_INIT");       break;
  case MD_YX5300::STS_STATUS:     PRINTS("STS_STATUS");     break;
  case MD_YX5300::STS_EQUALIZER:  PRINTS("STS_EQUALIZER");  break;
  case MD_YX5300::STS_TOT_FLDR:   PRINTS("STS_TOT_FLDR");   break;
  default: PRINTX("STS_??? 0x", status->code); break;
  }

  PRINTX(", 0x", status->data);
  S.waiting = false;
}

void processPlayMode(void)
// Read the mode selection switch and act if it has been pressed
//  - Start/pause track playback with simple press
//  - Random/repeat/single playback cycle with long press
{
  MD_UISwitch::keyResult_t k = swPlayMode.read();

  switch (k)
  {
  case MD_UISwitch::KEY_PRESS:    // start/pause toggle
    switch (S.playStatus)
    {
    case S_PLAYING:
      if (mp3.playPause()) S.playStatus = S_PAUSED;
      PRINTS("\nSwitched to PAUSE");
      break;

    case S_PAUSED:
      if (mp3.playStart()) S.playStatus = S_PLAYING;
      PRINTS("\nSwitched to PLAY");
      break;

    default:  // do nothing
      break;
    }
    S.needUpdate = true;
    break;

  case MD_UISwitch::KEY_LONGPRESS: // random/loop/single cycle
    switch (S.playMode)
    {
    case M_SEQ:     S.playMode = M_LOOP;    PRINTS("\nMode LOOP");    break;
    case M_LOOP:    S.playMode = M_SHUFFLE; PRINTS("\nMode SHUFFLE"); break;
    case M_SHUFFLE: S.playMode = M_SEQ;     PRINTS("\nMode SINGLE");  break;
    default: break; // do nothing
    }
    S.needUpdate = true;
    break;

  default:    // do nothing
    break;
  }
}

void processEncoder(void)
// Pressing the encoder switch sets Volume or Track mode
// Rotating the Encoder increments/decremenmts the selected function

{
  // handle the encoder switch
  if (swREMode.read() == MD_UISwitch::KEY_PRESS)
  {
    S.encMode = (S.encMode == E_VOLUME) ? E_TRACK : E_VOLUME;
    S.needUpdate = true;
    PRINT("\nEncoder Mode to ", S.encMode == E_TRACK ? 'T' : 'V');
  }

  // handle the encoder turning
  uint8_t x = re.read();
  switch (S.encMode)
  {
  case E_VOLUME:
    if (x == DIR_CW)
    {
      PRINTS("\nVolume +");
      if (S.volume < mp3.volumeMax()) S.volume++;
    }
    else if (x == DIR_CCW)
    {
      PRINTS("\nVolume -");
      if (S.volume > 0) S.volume--;
    }

    if (x != DIR_NONE)
    {
      mp3.volume(S.volume);
      S.needUpdate = true;
    }
    break;

  case E_TRACK:
    if (S.playStatus == S_PLAYING && x != DIR_NONE)
      selectNextSong(x == DIR_CW ? 1 : -1);
    break;
  }
}

void displayNumber(uint8_t c, uint8_t r, uint16_t num, uint8_t n, bool zeroPad = true)
// Display the number x in a field the size of n at row r and column c
// Pad the field with zeroes if zeroPad is true.
// Does not handle negatve numbers
{
  uint16_t x = num;
  uint8_t y;

  //PRINT("\nDisplayNumber ", x);
  //PRINTS(": ");
  for (uint8_t i = 0; i < n; i++)
  {
    y = x % 10;
    x /= 10;
    //PRINT(".", y);
    lcd.setCursor(c + n - i - 1, r);
    if (i == 0)   // always have at least one digit
      lcd.write(y + '0');
    else
    {
      if (y == 0 && !zeroPad)
        lcd.write(' ');
      else
        lcd.write(y + '0');
    }
  }
}

void displayUpdate(void)
// Update the LCD module with the current status
{
  // Rown and column positions for elements on the display
  // R_* are row position, C_* are column position
  const uint8_t R_STS = 0;        // row for status values
  const uint8_t C_PMODE = 0;      // playing mode
  const uint8_t C_STATUS = 2;     // playing status
  const uint8_t C_EMODE = 4;      // encoder mode
  const uint8_t C_VOL = 6;        // volume number
  const uint8_t VOL_WIDTH = 2;    // volume field width

  const uint8_t R_TRK = 1;        // row for track information
  const uint8_t TRK_WIDTH = 3;    // track field width
  const uint8_t C_TRK = 0;        // current track number
  const uint8_t C_TRKSEP = TRK_WIDTH;     // separator character
  const uint8_t C_TOTTRK = TRK_WIDTH + 1; // total number of tracks

  lcd.clear();

  // common display information
  lcd.setCursor(C_PMODE, R_STS);
  switch (S.playMode)
  {
    case M_EJECTED: lcd.write(C_EJECT);   break;
    case M_SEQ:  lcd.write(C_SEQ);  break;
    case M_SHUFFLE: lcd.write(C_SHUFFLE); break;
    case M_LOOP:    lcd.write(C_LOOP);    break;
  }

  lcd.setCursor(C_STATUS, R_STS);
  switch (S.playStatus)
  {
    case S_STOPPED: lcd.write(C_STOP);  break;
    case S_PAUSED:  lcd.write(C_PAUSE); break;
    case S_PLAYING: lcd.write(C_PLAY);  break;
  }

  lcd.setCursor(C_TRKSEP, R_TRK); lcd.write('/');
  lcd.setCursor(C_EMODE, R_STS);  lcd.write(S.encMode == E_VOLUME ? 'V' : 'T');
  displayNumber(C_VOL, R_STS, S.volume, VOL_WIDTH, true);

  // if ejected the display is different - the 
  // track numbers are undefined.
  if (S.playMode == M_EJECTED)
  {
    char s[TRK_WIDTH + 1];

    for (uint8_t i = 0; i < TRK_WIDTH; i++)
      s[i] = '-';
    s[TRK_WIDTH] = '\0';
    lcd.setCursor(C_TRK, R_TRK);    lcd.print(s);
    lcd.setCursor(C_TOTTRK, R_TRK); lcd.print(s);
  }
  else
  {
    displayNumber(C_TRK, R_TRK, S.curTrack, TRK_WIDTH, true);
    displayNumber(C_TOTTRK, R_TRK, S.numTracks, TRK_WIDTH, true);
  }

  // clear the update flag - we are done until next time
  S.needUpdate = false;
}

void setup(void)
{
#if DEBUG
  Console.begin(57600);
#endif
  PRINTS("\n[MD_YX5300 LCD Player]");

  // Initialize global libraries
  MP3Stream.begin(MD_YX5300::SERIAL_BPS);
  mp3.begin();
  mp3.setSynchronous(true);
  mp3.setCallback(cbResponse);
  S.initializing = initData(true);

  // Set up the switches modes - only simple switching
  swPlayMode.begin();
  swREMode.enableDoublePress(false);
  swPlayMode.enableRepeat(false);
  
  // Rotary Encoder
  swREMode.begin();
  swREMode.enableDoublePress(false);
  swREMode.enableRepeat(false);
  swREMode.enableLongPress(false);
  re.begin();
  
  // LCD display - define special characters
  lcd.begin(LCD_COLS, LCD_ROWS);
  for (uint8_t i = 0; i < ARRAY_SIZE(charDef); i++)
  {
    lcdData_t t;

    memcpy_P(&t, &charDef[i], sizeof(lcdData_t));
    lcd.createChar(t.code, t.data);
  }
  displayUpdate();
}

void loop()
{
  mp3.check();        // run the mp3 receiver

  // Initialization must preserve the unsolicited queue order so it 
  // stops any normal synchronous calls from happening
  if (S.initializing && !S.waiting)
    S.initializing = initData();
  else
  {
    processEncoder();   // rotary encoder in current mode
    processPlayMode();  // set the current play mode (switch selection)
  }

  // Finally update the display if anything changed - this minimises 
  // the updates to just what is needed for a more readable display
  if (S.needUpdate)
    displayUpdate();
}
