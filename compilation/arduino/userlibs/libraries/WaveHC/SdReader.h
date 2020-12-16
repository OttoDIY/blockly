/* Arduino WaveHC Library
 * Copyright (C) 2008 by William Greiman
 *
 * This file is part of the Arduino FAT16 Library
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
 * along with the Arduino Fat16 Library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */
#ifndef SdReader_h
#define SdReader_h
#include <SdInfo.h>
/**
 * \file
 * SdReader class
 */
/**
 * Some SD card are very sensitive to the SPI bus speed for initialization.
 * Try setting SPI_INIT_SLOW nonzero if you have initialization problems.
 *
 * Set SPI_INIT_SLOW nonzero to reduce the SPI bus speed for SD initaizaton
 * to F_CPU/128.  F_CPU/64 is used if
 */
#define SPI_INIT_SLOW 0
/**
 * Default card SPI speed. Change to true for Wave Shield V1.0
 * The SPI speed is 4 Mhz for 'true' and 8 Mhz for 'false'.
 */
#define SPI_DEFAULT_HALF_SPEED false

/** read timeout ms */
#define SD_READ_TIMEOUT 300

// SD card errors
/** timeout error for command CMD0 */
#define SD_CARD_ERROR_CMD0 0X1
/** CMD8 was not accepted - not a valid SD card*/
#define SD_CARD_ERROR_CMD8 0X2
/** card returned an error response for CMD17 (read block) */
#define SD_CARD_ERROR_CMD17 0X3
/** card returned an error response for CMD24 (write block) */
#define SD_CARD_ERROR_CMD24 0X4
/** card returned an error response for CMD58 (read OCR) */
#define SD_CARD_ERROR_CMD58 0X5
/** card's ACMD41 initialization process timeout */
#define SD_CARD_ERROR_ACMD41 0X6
/** card returned a bad CSR version field */
#define SD_CARD_ERROR_BAD_CSD 0X7
/** read CID or CSD failed */
#define SD_CARD_ERROR_READ_REG 0X8
/** bad response echo from CMD8 */
#define SD_CARD_ERROR_CMD8_ECHO 0X09
/** timeout while waiting for start of read data */
#define SD_CARD_ERROR_READ_TIMEOUT 0XD
/** card returned an error token instead of read data */
#define SD_CARD_ERROR_READ 0X10
//
// card types
/** Standard capacity V1 SD card */
#define SD_CARD_TYPE_SD1 1
/** Standard capacity V2 SD card */
#define SD_CARD_TYPE_SD2 2
/** High Capacity SD card */
#define SD_CARD_TYPE_SDHC 3
//------------------------------------------------------------------------------
/**
 * \class SdReader
 * \brief Hardware access class for SD flash cards
 *
 * Supports raw access to SD and SDHC flash memory cards.
 *
 */
class SdReader {
  uint32_t block_;
  uint8_t errorCode_;
  uint8_t errorData_;
  uint8_t inBlock_;
  uint16_t offset_;
  uint8_t partialBlockRead_;
  uint8_t response_;
  uint8_t type_;
  uint8_t cardCommand(uint8_t cmd, uint32_t arg);
  void error(uint8_t code) { errorCode_ = code; }
  void error(uint8_t code, uint8_t data) {
    errorCode_ = code;
    errorData_ = data;
  }
  uint8_t readRegister(uint8_t cmd, uint8_t *dst);
  void type(uint8_t value) { type_ = value; }
  uint8_t waitNotBusy(uint16_t timeoutMillis);
  uint8_t waitStartBlock(void);

public:
  /** Construct an instance of SdReader. */
  SdReader(void) : errorCode_(0), inBlock_(0), partialBlockRead_(0), type_(0){};
  uint32_t cardSize(void);
  /** \return error code for last error */
  uint8_t errorCode(void) { return errorCode_; }
  /** \return error data for last error */
  uint8_t errorData(void) { return errorData_; }
  uint8_t init(uint8_t slow = SPI_DEFAULT_HALF_SPEED);
  /**
   * Enable or disable partial block reads.
   *
   * Enabling partial block reads improves performance by allowing a block
   * to be read over the SPI bus as several sub-blocks.  Errors will occur
   * if the time between reads is too long since the SD card will timeout.
   *
   * Use this for applications like the Adafruit Wave Shield.
   *
   * \param[in] value The value TRUE (non-zero) or FALSE (zero).)
   */
  void partialBlockRead(uint8_t value) {
    readEnd();
    partialBlockRead_ = value;
  }
  /**
   * Read a 512 byte block from a SD card device.
   *
   * \param[in] block Logical block to be read.
   * \param[out] dst Pointer to the location that will receive the data.
   *
   * \return The value one, true, is returned for success and
   * the value zero, false, is returned for failure.
   */
  uint8_t readBlock(uint32_t block, uint8_t *dst) {
    return readData(block, 0, dst, 512);
  }
  uint8_t readData(uint32_t block, uint16_t offset, uint8_t *dst,
                   uint16_t count);
  /**
   * Read a cards CID register. The CID contains card identification information
   * such as Manufacturer ID, Product name, Product serial number and
   * Manufacturing date. */

  /*!
      @brief  Read a cards CID register. The CID contains card identification
     information such as Manufacturer ID, Product name, Product serial number
     and Manufacturing date.
      @param cid the pointer to the cid struct the data should be placed in
      @returns the return code after the read
  */
  uint8_t readCID(cid_t &cid) { return readRegister(CMD10, (uint8_t *)&cid); }

  /*!
    @brief Read a cards CSD register. The CSD contains Card-Specific Data that
    provides information regarding access to the card contents.
    @param csd pointer to the struct the data should be placed in.
    @returns the return code after the read.
  */
  uint8_t readCSD(csd_t &csd) { return readRegister(CMD9, (uint8_t *)&csd); }
  void readEnd(void);
  /*!
    @brief Return the card type: SD V1, SD V2 or SDHC
    @returns the type
  */
  uint8_t type() { return type_; }
};
#endif // SdReader_h
