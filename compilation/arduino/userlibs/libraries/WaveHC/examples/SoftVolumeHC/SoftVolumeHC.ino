/*
 * DVOLUME must be set nonzero in WaveHC.h to use this example.
 *
 * Adafruit SoftVolumeChange.pde modified to use WaveHC library.
 *
 * Play files with software volume control.

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
    error("Couldn't open root"); return;
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
/*
 * Play files with software volume control
 */
void playcomplete(FatReader &file) {
  if (!wave.create(file)) {
     putstring_nl(" Not a valid WAV"); return;
  }
   // ok time to play!
  wave.play();
  while (wave.isplaying) {
    putstring("Vol: ");
    
    // DVOLUME must be nonzero in WaveHC.h to use volume.
    Serial.println(wave.volume, DEC);
     
    delay(2000);
    wave.volume++;
    if ( wave.volume == 12) {
      wave.volume = 0;
    }
  }
  sdErrorCheck();
}
