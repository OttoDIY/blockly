/*
 * Text-to-speech example to speak the first n digits of pi.
 * The number is stored in flash, each digit is spoken one at a time.
 */
#include <WaveHC.h>
#include <WaveUtil.h>

// put pi in flash memory
const char pi[] PROGMEM = "3.1415926535897932384626433832795028841971693993751058209749";

SdReader card;    // This object holds the information for the card
FatVolume vol;    // This holds the information for the partition on the card
FatReader root;   // This holds the information for the volumes root directory
FatReader file;   // This object represent the WAV file for a pi digit or period
WaveHC wave;      // This is the only wave (audio) object, since we will only play one at a time
/*
 * Define macro to put error messages in flash memory
 */
#define error(msg) error_P(PSTR(msg))

//////////////////////////////////// SETUP

void setup() {
  // set up Serial library at 9600 bps
  Serial.begin(9600);           
  
  PgmPrintln("Pi speaker");
  
  if (!card.init()) {
    error("Card init. failed!");
  }
  if (!vol.init(card)) {
    error("No partition!");
  }
  if (!root.openRoot(vol)) {
    error("Couldn't open dir");
  }

  PgmPrintln("Files found:");
  root.ls();
}

/////////////////////////////////// LOOP

unsigned digit = 0;

void loop() { 
  // get next character from flash memory
  char c = pgm_read_byte(&pi[digit++]);
   
  if (c == 0) {
    digit = 0;
    Serial.println();
    return;
  }
  Serial.write(c);
    
  speaknum(c);
   
  delay(10);
}

/////////////////////////////////// HELPERS

char filename[13];
void speaknum(char c) {
  uint8_t i=0;
  
  // copy flash string for 'period' to filename
  strcpy_P(filename, PSTR("P.WAV"));
  
  if ('0' <= c && c <= '9') {
    // digit - change 'P' to digit
    filename[0] = c;
    i = 1;
  } 
  else if (c != '.') {
    // error if not period
    return;
  }
  playcomplete(filename);
}
/*
 * print error message and halt
 */
void error_P(const char *str) {
  PgmPrint("Error: ");
  SerialPrint_P(str);
  sdErrorCheck();
  while(1);
}
/*
 * print error message and halt if SD I/O error
 */
void sdErrorCheck(void) {
  if (!card.errorCode()) return;
  PgmPrint("\r\nSD I/O error: ");
  Serial.print(card.errorCode(), HEX);
  PgmPrint(", ");
  Serial.println(card.errorData(), HEX);
  while(1);
}
/*
 * Play a file and wait for it to complete
 */
void playcomplete(char *name) {
  playfile(name);
  while (wave.isplaying);
  
  // see if an error occurred while playing
  sdErrorCheck();
}
/*
 * Open and start playing a WAV file
 */
void playfile(char *name) {
  if (wave.isplaying) {// already playing something, so stop it!
    wave.stop(); // stop it
  }
  if (!file.open(root, name)) {
    PgmPrint("Couldn't open file ");
    Serial.print(name); 
    return;
  }
  if (!wave.create(file)) {
    PgmPrintln("Not a valid WAV");
    return;
  }
  // ok time to play!
  wave.play();
}
