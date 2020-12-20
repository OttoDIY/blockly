/*
 * Adafruit SampleRateMod.pde example modified to use WaveHC.
 *
 * Play files with sample rate controlled by voltage on analog pin zero.
 */
#include <WaveHC.h>
#include <WaveUtil.h>

SdReader card;    // This object holds the information for the card
FatVolume vol;    // This holds the information for the partition on the card
FatReader root;   // This holds the information for the volumes root directory
FatReader file;   // This object represent the WAV file
WaveHC wave;      // This is the only wave (audio) object, since we will only play one at a time

/*
 * Define macro to put error messages in flash memory
 */
#define error(msg) error_P(PSTR(msg))

//////////////////////////////////// SETUP
void setup() {
  Serial.begin(9600);
  Serial.println("Wave test!");

  // try card.init(true) if errors occur on V1.0 Wave Shield
  if (!card.init()) {
    error("Card init. failed!");
  }
  // enable optimize read - some cards may timeout
  card.partialBlockRead(true);
  
  if (!vol.init(card)) {
    error("No partition!");
  }
  if (!root.openRoot(vol)) {
    error("Couldn't open root");
  }
  putstring_nl("Files found:");
  root.ls();
}

// forward declarition
void playcomplete(FatReader &file);

//////////////////////////////////// LOOP
void loop() { 
  uint8_t i, r;
  char c, name[15];
  dir_t dir;

  root.rewind();
  // scroll through the files in the directory
  while (root.readDir(dir) > 0) { 
    // only play .WAV files
    if (strncmp_P((char *)&dir.name[8],PSTR("WAV"), 3)) continue;
    
    if (!file.open(vol, dir)){
      putstring("Can't open ");
      printEntryName(dir);
      Serial.println();
      continue;
    }
    putstring("\n\rPlaying "); 
    printEntryName(dir);
    Serial.println();
    playcomplete(file);
    file.close();    
  }
}
/////////////////////////////////// HELPERS
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
 * print error message and halt if SD I/O error, great for debugging!
 */
void sdErrorCheck(void) {
  if (!card.errorCode()) return;
  PgmPrint("\r\nSD I/O error: ");
  Serial.print(card.errorCode(), HEX);
  PgmPrint(", ");
  Serial.println(card.errorData(), HEX);
  while(1);
}
int16_t lastpotval = 0;
#define HYSTERESIS 3
/*
 * play file with sample rate changes
 */
void playcomplete(FatReader &file) {
  int16_t potval;
  uint32_t newsamplerate;
  
   if (!wave.create(file)) {
     putstring_nl(" Not a valid WAV"); return;
   }
   // ok time to play!
   wave.play();
   
  while (wave.isplaying) {
     potval = analogRead(0);
     if ( ((potval - lastpotval) > HYSTERESIS) || ((lastpotval - potval) > HYSTERESIS)) {
         putstring("pot = ");
         Serial.println(potval, DEC); 
         putstring("tickspersam = ");
         Serial.print(wave.dwSamplesPerSec, DEC);
         putstring(" -> ");
         newsamplerate = wave.dwSamplesPerSec;
         newsamplerate *= potval;
         newsamplerate /= 512;   // we want to 'split' between sped up and slowed down.
        if (newsamplerate > 24000) {
          newsamplerate = 24000;  
        }
        if (newsamplerate < 1000) {
          newsamplerate = 1000;  
        }        
        wave.setSampleRate(newsamplerate);
        
        Serial.println(newsamplerate, DEC);
        lastpotval = potval;
     }
     delay(100);
   }
   sdErrorCheck();
}
