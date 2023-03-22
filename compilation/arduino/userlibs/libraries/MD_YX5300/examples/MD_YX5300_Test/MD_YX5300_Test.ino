// Test program for the MD_YX5300 library
//
// Menu driven interface using the Serial Monitor to test individual functions.
//
// Dependencies
// MD_cmdProcessor library found at https://github.com/MajicDesigns/MD_cmdProcessor
//

#ifndef USE_SOFTWARESERIAL
#define USE_SOFTWARESERIAL 1   ///< Set to 1 to use SoftwareSerial library, 0 for native serial port
#endif

#include <MD_YX5300.h>
#include <MD_cmdProcessor.h>

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

#define ARRAY_SIZE(a) (sizeof(a)/sizeof(a[0]))
#define CMD(s) { Console.print(F("\n>")); Console.print(F(s)); Console.print(F(" ")); }

// Define YX5300 global variables
MD_YX5300 mp3(MP3Stream);
bool bUseCallback = true; // use callbacks?
bool bUseSynch = false;   // use synchronous? 

void cbResponse(const MD_YX5300::cbData *status)
// Used to process device responses either as a library callback function
// or called locally when not in callback mode.
{
  if (bUseSynch)
    Console.print(F("\nSync Status: "));
  else
    Console.print(F("\nCback status: "));

  switch (status->code)
  {
  case MD_YX5300::STS_OK:         Console.print(F("STS_OK"));         break;
  case MD_YX5300::STS_TIMEOUT:    Console.print(F("STS_TIMEOUT"));    break;
  case MD_YX5300::STS_VERSION:    Console.print(F("STS_VERSION"));    break;
  case MD_YX5300::STS_CHECKSUM:   Console.print(F("STS_CHECKSUM"));    break;
  case MD_YX5300::STS_TF_INSERT:  Console.print(F("STS_TF_INSERT"));  break;
  case MD_YX5300::STS_TF_REMOVE:  Console.print(F("STS_TF_REMOVE"));  break;
  case MD_YX5300::STS_ERR_FILE:   Console.print(F("STS_ERR_FILE"));   break;
  case MD_YX5300::STS_ACK_OK:     Console.print(F("STS_ACK_OK"));     break;
  case MD_YX5300::STS_FILE_END:   Console.print(F("STS_FILE_END"));   break;
  case MD_YX5300::STS_INIT:       Console.print(F("STS_INIT"));       break;
  case MD_YX5300::STS_STATUS:     Console.print(F("STS_STATUS"));     break;
  case MD_YX5300::STS_EQUALIZER:  Console.print(F("STS_EQUALIZER"));  break;
  case MD_YX5300::STS_VOLUME:     Console.print(F("STS_VOLUME"));     break;
  case MD_YX5300::STS_TOT_FILES:  Console.print(F("STS_TOT_FILES"));  break;
  case MD_YX5300::STS_PLAYING:    Console.print(F("STS_PLAYING"));    break;
  case MD_YX5300::STS_FLDR_FILES: Console.print(F("STS_FLDR_FILES")); break;
  case MD_YX5300::STS_TOT_FLDR:   Console.print(F("STS_TOT_FLDR"));   break;
  default: Console.print(F("STS_??? 0x")); Console.print(status->code, HEX); break;
  }

  Console.print(F(", 0x"));
  Console.print(status->data, HEX);
}

void setCallbackMode(bool b)
{
  bUseCallback = b;
  CMD("Callback");
  Console.print(b ? F("ON") : F("OFF"));
  mp3.setCallback(b ? cbResponse : nullptr);
}

void setSynchMode(bool b)
{
  bUseSynch = b;
  CMD("Synchronous");
  Console.print(b ? F("ON") : F("OFF"));
  mp3.setSynchronous(b);
}


char * getNum(char *cp, uint32_t &v, uint8_t base = 10)
{
  char* rp;

  v = strtoul(cp, &rp, base);

  return(rp);
}

// Command processor handlers
void handlerHelp(char* param);

void handlerP_bang(char* param) { CMD("Play Start"); mp3.playStart(); cbResponse(mp3.getStatus()); }
void handlerPP(char* param)     { CMD("Play Pause"); mp3.playPause(); cbResponse(mp3.getStatus()); }
void handlerPZ(char* param)     { CMD("Play Stop");  mp3.playStop();  cbResponse(mp3.getStatus()); }
void handlerP_gt(char* param)   { CMD("Play Next");  mp3.playNext();  cbResponse(mp3.getStatus()); }
void handlerP_lt(char* param)   { CMD("Play Prev");  mp3.playPrev();  cbResponse(mp3.getStatus()); }

void handlerP(char* param)
{
  uint32_t t;
  
  getNum(param, t);
  CMD("Play Track");
  Console.print(t);
  mp3.playTrack(t);
  cbResponse(mp3.getStatus());
}

void handlerPT(char* param)
{
  uint32_t fldr, file;

  param = getNum(param, fldr);
  getNum(param, file);
  CMD("Play Specific Fldr");
  Console.print(fldr);
  Console.print(F(", "));
  Console.print(file);
  mp3.playSpecific(fldr, file);
  cbResponse(mp3.getStatus());
}

void handlerPF(char* param)
{
  uint32_t fldr;

  getNum(param, fldr);
  CMD("Play Folder");
  Console.print(fldr);
  mp3.playFolderRepeat(fldr);
  cbResponse(mp3.getStatus());
}

void handlerPX(char* param)
{
  uint32_t fldr;
  
  getNum(param, fldr);
  CMD("Play Shuffle Folder");
  Console.print(fldr);
  mp3.playFolderShuffle(fldr);
  cbResponse(mp3.getStatus());
}

void handlerPR(char* param)
{
  uint32_t file;

  getNum(param, file);
  CMD("Play File repeat");
  Console.print(file);
  mp3.playTrackRepeat(file);
  cbResponse(mp3.getStatus());
}


void handlerVM(char *param)
{
  uint32_t cmd;
  
  getNum(param, cmd);
  CMD("Volume Enable");
  Console.print(cmd);
  mp3.volumeMute(cmd != 0);
  cbResponse(mp3.getStatus());
}

void handlerV(char *param)
{
  uint32_t v;
  
  getNum(param, v);
  CMD("Volume"); 
  Console.print(v);
  mp3.volume(v); 
  cbResponse(mp3.getStatus());
}

void handlerV_plus(char* param)  { CMD("Volume Up");   mp3.volumeInc(); cbResponse(mp3.getStatus()); }
void handlerV_minus(char* param) { CMD("Volume Down"); mp3.volumeDec(); cbResponse(mp3.getStatus()); }

void handlerQE(char* param) { CMD("Query Equalizer");    mp3.queryEqualizer();   cbResponse(mp3.getStatus()); }
void handlerQF(char* param) { CMD("Query File");         mp3.queryFile();        cbResponse(mp3.getStatus()); }
void handlerQS(char* param) { CMD("Query Status");       mp3.queryStatus();      cbResponse(mp3.getStatus()); }
void handlerQV(char* param) { CMD("Query Volume");       mp3.queryVolume();      cbResponse(mp3.getStatus()); }
void handlerQX(char* param) { CMD("Query Folder Count"); mp3.queryFolderCount(); cbResponse(mp3.getStatus()); }
void handlerQY(char* param) { CMD("Query Tracks Count"); mp3.queryFilesCount();  cbResponse(mp3.getStatus()); }

void handlerQZ(char* param)
{
  uint32_t fldr;
  
  getNum(param, fldr);
  CMD("Query Folder Files Count");
  Console.print(fldr);
  mp3.queryFolderFiles(fldr);
  cbResponse(mp3.getStatus());
}

void handlerS(char *param) { CMD("Sleep");   mp3.sleep();  cbResponse(mp3.getStatus()); }
void handlerW(char *param) { CMD("Wake up"); mp3.wakeUp(); cbResponse(mp3.getStatus()); }
void handlerZ(char *param) { CMD("Reset");   mp3.reset();  cbResponse(mp3.getStatus()); }

void handlerE(char *param)
{
  uint32_t e;

  getNum(param, e);
  CMD("Equalizer");
  Console.print(e);
  mp3.equalizer(e);
  cbResponse(mp3.getStatus());
}

void handlerX(char *param)
{
  uint32_t cmd;

  getNum(param, cmd);
  CMD("Shuffle");
  Console.print(cmd);
  mp3.shuffle(cmd != 0);
  cbResponse(mp3.getStatus());
}

void handlerR(char* param)
{
  uint32_t cmd;

  getNum(param, cmd);
  CMD("Repeat");
  Console.print(cmd);
  mp3.repeat(cmd != 0);
  cbResponse(mp3.getStatus());
}

void handlerY(char *param)
{
  uint32_t cmd;
  
  getNum(param, cmd);
  setSynchMode(cmd != 0);
}

void handlerC(char * param)
{
  uint32_t cmd;

  getNum(param, cmd);
  setCallbackMode(cmd != 0);
}

const MD_cmdProcessor::cmdItem_t PROGMEM cmdTable[] =
{
  { "?",  handlerHelp,    "",     "Help", 0 },
  { "h",  handlerHelp,    "",     "Help", 0 },
  { "p!", handlerP_bang,  "",     "Play", 1 },
  { "p",  handlerP,       "n",    "Play file index n (0-255)", 1 },
  { "pp", handlerPP,      "",     "Play Pause", 1 },
  { "pz", handlerPZ,      "",     "Play Stop", 1 },
  { "p>", handlerP_gt,    "",     "Play Next", 1 },
  { "p<", handlerP_lt,    "",     "Play Previous", 1 },
  { "pt", handlerPT,      "f n",  "Play Track folder f, file n", 1 },
  { "pf", handlerPF,      "f",    "Play loop folder f", 1 },
  { "px", handlerPX,      "f",    "Play shuffle folder f", 1 },
  { "pr", handlerPR,      "n",    "Play loop file index n", 1 },
  { "v+", handlerV_plus,  "",     "Volume up", 2 },
  { "v-", handlerV_minus, "",     "Volume down", 2 },
  { "v",  handlerV,       "x",    "Volume set x (0-30)", 2 },
  { "vm", handlerVM,      "b",     "Volume Mute on (b=1), off (0)", 2 },
  { "qe", handlerQE,      "",     "Query equalizer", 3 },
  { "qf", handlerQF,      "",     "Query current file", 3 },
  { "qs", handlerQS,      "",     "Query status", 3 },
  { "qv", handlerQV,      "",     "Query volume", 3 },
  { "qx", handlerQX,      "",     "Query folder count", 3 },
  { "qy", handlerQY,      "",     "Query total file count", 3 },
  { "qz", handlerQZ,      "f",    "Query files count in folder f", 3 },
  { "s",  handlerS,       "",     "Sleep", 4 },
  { "w",  handlerW,       "",     "Wake up", 4 },
  { "e",  handlerE,       "n",    "Equalizer type n", 5 },
  { "x",  handlerX,       "b",    "Play Shuffle on (b=1), off (0)", 5 },
  { "r",  handlerR,       "b",    "Play Repeat on (b=1), off (0)", 5 },
  { "z",  handlerZ,       "",     "Reset", 5 },
  { "y",  handlerY,       "b",    "Synchronous mode on (b=1), off (0)", 6 },
  { "c",  handlerC,       "b",    "Callback mode on (b=1), off (0)", 6 },
};

MD_cmdProcessor CP(Console, cmdTable, ARRAY_SIZE(cmdTable));

// handler functions
void handlerHelp(char* param)
{
  Console.print(F("\n[MD_YX5300 Test]\nSet Serial line ending to newline."));
  CP.help();
  Console.print(F("\n"));
}

void setup()
{
  // YX5300 Serial interface
  MP3Stream.begin(MD_YX5300::SERIAL_BPS);
  mp3.begin();
  setCallbackMode(bUseCallback);
  setSynchMode(bUseSynch);

  // command line interface
  Console.begin(57600);
  CP.begin();
  CP.help();
}

void loop()
{
  CP.run();
  mp3.check();
}
