/* Arduino WaveHC Library
 * Copyright (C) 2008 by William Greiman
 *
 * This file is part of the Arduino WaveHC Library
 *
 * This Library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This Library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with the Arduino WaveHC Library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */
#if ARDUINO < 100
#include <WProgram.h>
#else // ARDUINO < 100
#include <Arduino.h>
#endif // ARDUINO < 100
#include <SdReader.h>
#include <WavePinDefs.h>
//------------------------------------------------------------------------------
// inline SPI functions
/** Send a byte to the card */
inline void spiSend(uint8_t b) {
  SPDR = b;
  while (!(SPSR & (1 << SPIF)))
    ;
}
/** Receive a byte from the card */
inline uint8_t spiRec(void) {
  spiSend(0XFF);
  return SPDR;
}
/** Set Slave Select high */
inline void spiSSHigh(void) {
  digitalWrite(SS, HIGH);
  // insure SD data out is high Z
  spiSend(0XFF);
}
/** Set Slave Select low */
inline void spiSSLow(void) { digitalWrite(SS, LOW); }
//------------------------------------------------------------------------------
// card status
/** status for card in the ready state */
#define R1_READY_STATE 0
/** status for card in the idle state */
#define R1_IDLE_STATE 1
/** start data token for read or write */
#define DATA_START_BLOCK 0XFE
/** mask for data response tokens after a write block operation */
#define DATA_RES_MASK 0X1F
/** write data accepted token */
#define DATA_RES_ACCEPTED 0X05
/** write data crc error token */
#define DATA_RES_CRC_ERROR 0X0B
/** write data programming error token */
#define DATA_RES_WRITE_ERROR 0X0D
//------------------------------------------------------------------------------
// send command to card
uint8_t SdReader::cardCommand(uint8_t cmd, uint32_t arg) {
  uint8_t r1;

  // end read if in partialBlockRead mode
  readEnd();

  // select card
  spiSSLow();

  // wait up to 300 ms if busy
  waitNotBusy(300);

  // send command
  spiSend(cmd | 0x40);

  // send argument
  for (int8_t s = 24; s >= 0; s -= 8)
    spiSend(arg >> s);

  // send CRC
  uint8_t crc = 0XFF;
  if (cmd == CMD0)
    crc = 0X95; // correct crc for CMD0 with arg 0
  if (cmd == CMD8)
    crc = 0X87; // correct crc for CMD8 with arg 0X1AA
  spiSend(crc);

  // wait for response
  for (uint8_t retry = 0; ((r1 = spiRec()) & 0X80) && retry != 0XFF; retry++)
    ;

  return r1;
}
//------------------------------------------------------------------------------
/**
 * Determine the size of an SD flash memory card.
 * \return The number of 512 byte data blocks in the card
 */
uint32_t SdReader::cardSize(void) {
  csd_t csd;
  if (!readCSD(csd))
    return false;
  if (csd.v1.csd_ver == 0) {
    uint8_t read_bl_len = csd.v1.read_bl_len;
    uint16_t c_size = (csd.v1.c_size_high << 10) | (csd.v1.c_size_mid << 2) |
                      csd.v1.c_size_low;
    uint8_t c_size_mult =
        (csd.v1.c_size_mult_high << 1) | csd.v1.c_size_mult_low;
    return (uint32_t)(c_size + 1) << (c_size_mult + read_bl_len - 7);
  } else if (csd.v2.csd_ver == 1) {
    uint32_t c_size = ((uint32_t)csd.v2.c_size_high << 16) |
                      (csd.v2.c_size_mid << 8) | csd.v2.c_size_low;
    return (c_size + 1) << 10;
  } else {
    error(SD_CARD_ERROR_BAD_CSD);
    return 0;
  }
}
//------------------------------------------------------------------------------
/**
 * Initialize a SD flash memory card.
 *
 * \param[in] slow If \a slow is false (zero) the SPI bus will
 * be initialize at a speed of 8 Mhz.  If \a slow is true (nonzero)
 * the SPI bus will be initialize a speed of 4 Mhz. This may be helpful
 * for some SD cards with Version 1.0 of the Adafruit Wave Shield.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 *
 */
uint8_t SdReader::init(uint8_t slow) {
  uint8_t ocr[4];
  uint8_t r;

  pinMode(SS, OUTPUT);
  digitalWrite(SS, HIGH);
  pinMode(MOSI, OUTPUT);
  pinMode(MISO_PIN, INPUT);
  pinMode(SCK, OUTPUT);

#if SPI_INIT_SLOW
  // Enable SPI, Master, clock rate f_osc/128
  SPCR = (1 << SPE) | (1 << MSTR) | (1 << SPR1) | (1 << SPR0);
#else  // SPI_INIT_SLOW
  // Enable SPI, Master, clock rate f_osc/64
  SPCR = (1 << SPE) | (1 << MSTR) | (1 << SPR1);
#endif // SPI_INIT_SLOW

  // must supply min of 74 clock cycles with CS high.
  for (uint8_t i = 0; i < 10; i++)
    spiSend(0XFF);

  // next two lines prevent re-init hang by cards that were in partial read
  spiSSLow();
  for (uint16_t i = 0; i <= 512; i++)
    spiRec();

  // command to go idle in SPI mode
  for (uint8_t retry = 0;; retry++) {
    if ((r = cardCommand(CMD0, 0)) == R1_IDLE_STATE)
      break;
    if (retry == 10) {
      error(SD_CARD_ERROR_CMD0, r);
      return false;
    }
  }
  // check SD version
  r = cardCommand(CMD8, 0x1AA);
  if (r == R1_IDLE_STATE) {
    for (uint8_t i = 0; i < 4; i++) {
      r = spiRec();
    }
    if (r != 0XAA) {
      error(SD_CARD_ERROR_CMD8_ECHO, r);
      return false;
    }
    type(SD_CARD_TYPE_SD2);
  } else if (r & R1_ILLEGAL_COMMAND) {
    type(SD_CARD_TYPE_SD1);
  } else {
    error(SD_CARD_ERROR_CMD8, r);
  }
  // initialize card and send host supports SDHC if SD2
  for (uint16_t t0 = millis();;) {
    cardCommand(CMD55, 0);
    r = cardCommand(ACMD41, type() == SD_CARD_TYPE_SD2 ? 0X40000000 : 0);
    if (r == R1_READY_STATE)
      break;

    // timeout after 2 seconds
    if (((uint16_t)millis() - t0) > 2000) {
      error(SD_CARD_ERROR_ACMD41);
      return false;
    }
  }
  // if SD2 read OCR register to check for SDHC card
  if (type() == SD_CARD_TYPE_SD2) {
    if (cardCommand(CMD58, 0)) {
      error(SD_CARD_ERROR_CMD58);
      return false;
    }
    if ((spiRec() & 0XC0) == 0XC0)
      type(SD_CARD_TYPE_SDHC);

    // discard rest of ocr
    for (uint8_t i = 0; i < 3; i++)
      spiRec();
  }

  // use max SPI frequency unless slow is true
  SPCR &= ~((1 << SPR1) | (1 << SPR0)); // f_OSC/4

  if (!slow)
    SPSR |= (1 << SPI2X); // Doubled Clock Frequency: f_OSC/2
  spiSSHigh();
  return true;
}
//------------------------------------------------------------------------------
/**
 * Read part of a 512 byte block from a SD card.
 *
 * \param[in] block Logical block to be read.
 * \param[in] offset Number of bytes to skip at start of block
 * \param[out] dst Pointer to the location that will receive the data.
 * \param[in] count Number of bytes to read
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 */
uint8_t SdReader::readData(uint32_t block, uint16_t offset, uint8_t *dst,
                           uint16_t count) {
  if (count == 0)
    return true;
  if ((count + offset) > 512) {
    return false;
  }
  if (!inBlock_ || block != block_ || offset < offset_) {
    block_ = block;

    // use address if not SDHC card
    if (type() != SD_CARD_TYPE_SDHC)
      block <<= 9;
    if (cardCommand(CMD17, block)) {
      error(SD_CARD_ERROR_CMD17);
      return false;
    }
    if (!waitStartBlock()) {
      return false;
    }
    offset_ = 0;
    inBlock_ = 1;
  }

  // start first SPI transfer
  SPDR = 0XFF;

  // skip data before offset
  for (; offset_ < offset; offset_++) {
    while (!(SPSR & (1 << SPIF)))
      ;
    SPDR = 0XFF;
  }

  // transfer data
  uint16_t n = count - 1;
  for (uint16_t i = 0; i < n; i++) {
    while (!(SPSR & (1 << SPIF)))
      ;
    dst[i] = SPDR;
    SPDR = 0XFF;
  }

  // wait for last byte
  while (!(SPSR & (1 << SPIF)))
    ;
  dst[n] = SPDR;
  offset_ += count;
  if (!partialBlockRead_ || offset_ >= 512)
    readEnd();
  return true;
}
//------------------------------------------------------------------------------
/** Skip remaining data in a block when in partial block read mode. */
void SdReader::readEnd(void) {
  if (inBlock_) {
    // skip data and crc
    SPDR = 0XFF;
    while (offset_++ < 513) {
      while (!(SPSR & (1 << SPIF)))
        ;
      SPDR = 0XFF;
    }
    // wait for last crc byte
    while (!(SPSR & (1 << SPIF)))
      ;
    spiSSHigh();
    inBlock_ = 0;
  }
}
//------------------------------------------------------------------------------
/** read CID or CSR register */
uint8_t SdReader::readRegister(uint8_t cmd, uint8_t *dst) {
  if (cardCommand(cmd, 0)) {
    error(SD_CARD_ERROR_READ_REG);
    return false;
  }
  if (!waitStartBlock())
    return false;

  // transfer data
  for (uint16_t i = 0; i < 16; i++)
    dst[i] = spiRec();

  spiRec(); // get first crc byte
  spiRec(); // get second crc byte

  spiSSHigh();
  return true;
}
//------------------------------------------------------------------------------
// wait for card to go not busy
uint8_t SdReader::waitNotBusy(uint16_t timeoutMillis) {
  uint16_t t0 = millis();
  while (spiRec() != 0XFF) {
    if (((uint16_t)millis() - t0) > timeoutMillis)
      return false;
  }
  return true;
}
//------------------------------------------------------------------------------
/** Wait for start block token */
uint8_t SdReader::waitStartBlock(void) {
  uint8_t r;
  uint16_t t0 = millis();
  while ((r = spiRec()) == 0XFF) {
    if (((uint16_t)millis() - t0) > SD_READ_TIMEOUT) {
      error(SD_CARD_ERROR_READ_TIMEOUT);
      return false;
    }
  }
  if (r == DATA_START_BLOCK)
    return true;
  error(SD_CARD_ERROR_READ, r);
  return false;
}
