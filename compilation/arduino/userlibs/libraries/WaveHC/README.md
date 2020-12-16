# Adafruit WaveHC Library [![Build Status](https://github.com/adafruit/WaveHC/workflows/Arduino%20Library%20CI/badge.svg)](https://github.com/adafruit/WaveHC/actions)[![Documentation](https://github.com/adafruit/ci-arduino/blob/master/assets/doxygen_badge.svg)](http://adafruit.github.io/WaveHC/html/index.html)

<img src="https://cdn-shop.adafruit.com/970x728/94-05.jpg" height="300"/>

## WaveHC is a library for the Adafruit Wave Shield.:
  * https://www.adafruit.com/products/94

To use this library place the uncompressed WaveHC folder into the 
libraries subfolder in your main sketches folder.  You may need to
create the libraries folder.  Restart the Arduino IDE if it was open.

Be sure to read Ladyada's excellent tutorial for WaveHC:
http://www.ladyada.net/make/waveshield/libraryhc.html

Developers and advanced Arduino users may wish to read the html
documentation starting with html/index.html.

Please read the changes.txt file.

Try daphc.pde in the WaveHC/examples folder.  If you have
problems run the SdReadTest.pde sketch to get more information.


## ATMEGA168

For the AtMega168 be sure to reduce the serial buffer size by setting 
RX_BUFFER_SIZE to 32 or less in 
hardware/arduino/cores/arduino/HardwareSerial.cpp.  I use 16.


## SD CARD INIT PROBLEMS

Some SD card are very sensitive to the SPI bus speed for initialization.
Try setting SPI_INIT_SLOW nonzero if you have initialization problems.
To change edit SdReader.h and change the SPI_INIT_SLOW line to:
#define SPI_INIT_SLOW 1


## WAVE SHIELD V1.0

You may have SD I/O errors with Wave Shield V1.0.  Most SD cards
work with V1.0 but some brands/types fail.  Often reducing the SPI
bus speed to 4 Mhz helps.  You can do this by changing the 'card.init()'
statement in a sketch to 'card.init(true)'.  'true' means use a lower
SPI speed.

The default speed for card.init can be changed to 4 Mhz by changing
the following line in the WaveHC file SdReader.h from
#define SPI_DEFAULT_HALF_SPEED false
to
#define SPI_DEFAULT_HALF_SPEED true


## PREPARING SD CARDS

WaveHC supports FAT16/FAT32 formats on SD/SDHC cards.  WaveHC only
supports short 8.3 DOS style file names.

WaveHC is optimized to play contiguous files. It will play 16-bit
44.1 K files if they are contiguous.  All files copied to a newly
formatted card will be contiguous. It is only possible to create a
fragmented file if you delete a file from an SD and copy a another
file to the SD.

You should use a freshly formatted SD card for best performance.  FAT
file systems become slower if many files have been created and deleted.
As files become fragmented reads are slower because the overhead to
read the file allocation table increases.  Also the time to open a file
increases.  This is because the directory entry for a deleted file is
marked as deleted, but is not deleted.  When a file is opened, these
entries must be scanned to find the file to be opened, a flaw in the
FAT design.

The best way to format an SD card is to use SDFormatter which can be
downloaded from:

http://www.sdcard.org/consumers/formatter/

SDFormatter aligns flash  boundaries with file system structures which
reduces latency and file system overhead.  SDFormatter does not have an
option for FAT type so it may format small cards as FAT12.


## EXAMPLES

I have included several updates examples for WaveHC in the WaveHC/examples 
folder.  More examples can be downloaded from the Adafruit website:
http://www.ladyada.net/make/waveshield/examples.html

The updated examples are:

`daphc.ino` - plays all .WAV files on an SD.

`SdReadTest.ino` - A sketch to get more information about an SD card.

`PiSpeaker.ino` - A text-to-voice sketch that reads pi.  You need to
                put the files from the piwav folder in example files
                on an SD.
                
`SampleRateHC.ino` - A modified version of the Adafruit example that
                   sets player sample rate by reading analog pin zero.
                   
`SoftVolume.ino` - A modified version of the Adafruit example
                 for software volume control.


`openByIndex.ino` - Shows how to reduce latency between files for
                  applications that must not have a large latency
                  between files.

                  
## CUSTOM SETTINGS

Advanced users may wish to change WaveHC settings.  Most setting are
defines in these files:

WaveHC.h  - Buffer size, contiguous file optimization, enable software
            volume, and error control.

WavePinDefs.h - Change default pin definitions. Save pin 5.

SdReader.h - Change default SPI bus speed.
