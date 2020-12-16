/*!
 * @file WaveHC.h
 *
 * This library is a highly modified version of Ladyada's Wave Shield library.
 * I have made many changes that may have introduced bugs.
 *
 *
 * Adafruit invests time and resources providing this open source code,
 * please support Adafruit and open-source hardware by purchasing
 * products from Adafruit!
 *
 * BSD license, all text here must be included in any redistribution.
 *
 */

#ifndef WaveHC_h
#define WaveHC_h
#include "Arduino.h"
#include <FatReader.h>
/**
 * \file
 * WaveHC class
 */
/**
 * If nonzero, optimize the player for contiguous files.  It takes
 * longer to open a file but can play contiguous files at higher rates.
 * Disable if you need minimum latency for open.  Also see open by index.
 */
#define OPTIMIZE_CONTIGUOUS 1
/**
 * Software volume control should be compatible with Ladyada's library.
 * Uses shift to decrease volume by 6 dB per step. See DAC ISR in WaveHC.cpp.
 * Must be set after call to WaveHC::create().
 * Decreases MAX_CLOCK_RATE to 22050.
 */
#define DVOLUME 0
/**
 * Set behavior for files that exceed MAX_CLOCK_RATE or MAX_BYTE_RATE.
 * If RATE_ERROR_LEVEL = 2, rate too high errors are fatal.
 * If RATE_ERROR_LEVEL = 1, rate too high errors are warnings.
 * If RATE_ERROR_LEVEL = 0, rate too high errors are ignored.
 */
#define RATE_ERROR_LEVEL 2
//------------------------------------------------------------------------------
// Set the size for wave data buffers.  Must be 256 or 512.
#if defined(__AVR_ATmega168P__) || defined(__AVR_ATmega168__)

/** Buffer length for for 168 Arduino. */
#define PLAYBUFFLEN 256UL
#else // __AVR_ATmega168P__

/** Buffer length for Arduinos other than 168. */
#define PLAYBUFFLEN 512UL
#endif //__AVR_ATmega168P__

// Define max allowed SD read rate in bytes/sec.
#if PLAYBUFFLEN == 512UL && OPTIMIZE_CONTIGUOUS
/** Maximum SD read rate for 512 byte buffer and contiguous file */
#define MAX_BYTE_RATE 88200
#else // MAX_BYTE_RATE
/** Maximum SD read rate for 256 byte buffer or fragmented file */
#define MAX_BYTE_RATE 44100
#endif // MAX_BYTE_RATE

// Define maximum clock rate for DAC.
#if !DVOLUME
/** maximum DAC clock rate */
#define MAX_CLOCK_RATE 44100
#else // DVOLUME
/** Decreased clock rate if volume control is used */
#define MAX_CLOCK_RATE 22050
#endif // DVOLUME

//------------------------------------------------------------------------------
/**
 * \class WaveHC
 * \brief Wave file player.
 *
 * Play wave files from FAT16 and FAT32 file systems
 * on SD and SDHC flash memory cards.
 *
 */
class WaveHC {
public:
  /** Wave file number of channels. Mono = 1, Stereo = 2 */
  uint8_t Channels;
  /** Wave file sample rate. Must be not greater than 44100/sec. */
  uint32_t dwSamplesPerSec;
  /** Wave file bits per sample.  Must be 8 or 16. */
  uint8_t BitsPerSample;
  /** Remaining bytes to be played in Wave file data chunk. */
  uint32_t remainingBytesInChunk;
  /** Has the value true if a wave file is playing else false. */
  volatile uint8_t isplaying;
  /** Number of times data was not available from the SD in the DAC ISR */
  uint32_t errors;

  /** Software volume control. Reduce volume by 6 dB per step. See DAC ISR. */
  uint8_t volume;
  /** FatReader instance for current wave file. */
  FatReader *fd;

  WaveHC(void);
  uint8_t create(FatReader &f);
  /*!
   @brief Return the size of the WAV file
   @returns the size of the WAV file
  */
  uint32_t getSize(void) { return fd->fileSize(); }
  uint8_t isPaused(void);
  void pause(void);
  void play(void);
  int16_t readWaveData(uint8_t *buff, uint16_t len);
  void resume(void);
  void seek(uint32_t pos);
  void setSampleRate(uint32_t samplerate);
  void stop(void);
};

#endif // WaveHC_h
