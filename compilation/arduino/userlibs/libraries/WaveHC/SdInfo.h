/* Arduino Sd2Card Library
 * Copyright (C) 2009 by William Greiman
 *
 * This file is part of the Arduino Sd2Card Library
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
 *
 * You should have received a copy of the GNU General Public License
 * along with the Arduino Sd2Card Library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */
#ifndef SdInfo_h
#define SdInfo_h
#include <stdint.h>
/** Based on the document: **/
//
/** SD Specifications **/
/** Part 1 **/
/** Physical Layer **/
/** Simplified Specification **/
/** Version 2.00 **/
/** September 25, 2006 **/
//
/** www.sdcard.org/developers/tech/sdcard/pls/Simplified_Physical_Layer_Spec.pdf
 * **/
//------------------------------------------------------------------------------
/** SD card commands **/
/** GO_IDLE_STATE - init card in spi mode if CS low */
#define CMD0 0X00
/** SEND_IF_COND - verify SD Memory Card interface operating condition.*/
#define CMD8 0X08
/** SEND_CSD - read the Card Specific Data (CSD register) */
#define CMD9 0X09
/** SEND_CID - read the card identification information (CID register) */
#define CMD10 0X0A
/** SEND_STATUS - read the card status register */
#define CMD13 0X0D
/** READ_BLOCK - read a single data block from the card */
#define CMD17 0X11
/** WRITE_BLOCK - write a single data block to the card */
#define CMD24 0X18
/** WRITE_MULTIPLE_BLOCK - write blocks of data until a STOP_TRANSMISSION */
#define CMD25 0X19
/** ERASE_WR_BLK_START - sets the address of the first block to be erased */
#define CMD32 0X20
/** ERASE_WR_BLK_END - sets the address of the last block of the continuous
 * range to be erased*/
#define CMD33 0X21
/** ERASE - erase all previously selected blocks */
#define CMD38 0X26
/** APP_CMD - escape for application specific command */
#define CMD55 0X37
/** READ_OCR - read the OCR register of a card */
#define CMD58 0X3A
/** SET_WR_BLK_ERASE_COUNT - Set the number of write blocks to be pre-erased
 * before writing */
#define ACMD23 0X17
/** SD_SEND_OP_COMD - Sends host capacity support information and activates the
 * card's initialization process */
#define ACMD41 0X29
//------------------------------------------------------------------------------
/** status for card in the ready state */
#define R1_READY_STATE 0
/** status for card in the idle state */
#define R1_IDLE_STATE 1
/** status bit for illegal command */
#define R1_ILLEGAL_COMMAND 4
/** start data token for read or write single block*/
#define DATA_START_BLOCK 0XFE
/** stop token for write multiple blocks*/
#define STOP_TRAN_TOKEN 0XFD
/** start data token for write multiple blocks*/
#define WRITE_MULTIPLE_TOKEN 0XFC
/** mask for data response tokens after a write block operation */
#define DATA_RES_MASK 0X1F
/** write data accepted token */
#define DATA_RES_ACCEPTED 0X05
//------------------------------------------------------------------------------
///< CID typedef struct
typedef struct CID {
  /** byte 0 Manufacturer ID **/
  uint8_t mid;
  /** byte 1-2 OEM/Application ID **/
  char oid[2];
  /** byte 3-7 Product name **/
  char pnm[5];
  /** byte 8 Product revision n.m **/
  unsigned prv_m : 4;
  /** byte 8 Product revision n.m **/
  unsigned prv_n : 4;
  /** byte 9-12 Product serial number **/
  uint32_t psn;
  /** byte 13 Manufacturing date **/
  unsigned mdt_year_high : 4;
  /** byte 13 Manufacturing date **/
  unsigned reserved : 4;
  /** byte 14 **/
  unsigned mdt_month : 4;
  /** byte 14 **/
  unsigned mdt_year_low : 4;
  /** byte 15 **/
  unsigned always1 : 1;
  /** byte 15 **/
  unsigned crc : 7;
} cid_t;
//------------------------------------------------------------------------------
///< CSD for version 1.00 cards
typedef struct CSDV1 {
  /** byte 0 **/
  unsigned reserved1 : 6;
  /** byte 0 **/
  unsigned csd_ver : 2;
  /** byte 1 **/
  uint8_t taac;
  /** byte 2 **/
  uint8_t nsac;
  /** byte 3 **/
  uint8_t tran_speed;
  /** byte 4 **/
  uint8_t ccc_high;
  /** byte 5 **/
  unsigned read_bl_len : 4;
  /** byte 5 **/
  unsigned ccc_low : 4;
  //  unsigned read_bl_len : 4;
  /** byte 6 **/
  unsigned c_size_high : 2;
  /** byte 6 **/
  unsigned reserved2 : 2;
  /** byte 6 **/
  unsigned dsr_imp : 1;
  /** byte 6 **/
  unsigned read_blk_misalign : 1;
  /** byte 6 **/
  unsigned write_blk_misalign : 1;
  /** byte 6 **/
  unsigned read_bl_partial : 1;
  /** byte 7 **/
  uint8_t c_size_mid;
  /** byte 8 **/
  unsigned vdd_r_curr_max : 3;
  /** byte 8 **/
  unsigned vdd_r_curr_min : 3;
  /** byte 8 **/
  unsigned c_size_low : 2;
  /** byte 9 **/
  unsigned c_size_mult_high : 2;
  /** byte 9 **/
  unsigned vdd_w_cur_max : 3;
  /** byte 9 **/
  unsigned vdd_w_curr_min : 3;
  /** byte 10 **/
  unsigned sector_size_high : 6;
  /** byte 10 **/
  unsigned erase_blk_en : 1;
  /** byte 10 **/
  unsigned c_size_mult_low : 1;
  /** byte 11 **/
  unsigned wp_grp_size : 7;
  /** byte 11 **/
  unsigned sector_size_low : 1;
  /** byte 12 **/
  unsigned write_bl_len_high : 2;
  /** byte 12 **/
  unsigned r2w_factor : 3;
  /** byte 12 **/
  unsigned reserved3 : 2;
  /** byte 12 **/
  unsigned wp_grp_enable : 1;
  /** byte 13 **/
  unsigned reserved4 : 5;
  /** byte 13 **/
  unsigned write_partial : 1;
  /** byte 13 **/
  unsigned write_bl_len_low : 2;
  /** byte 14 **/
  unsigned reserved5 : 2;
  /** byte 14 **/
  unsigned file_format : 2;
  /** byte 14 **/
  unsigned tmp_write_protect : 1;
  /** byte 14 **/
  unsigned perm_write_protect : 1;
  /** byte 14 **/
  unsigned copy : 1;
  /** byte 14 **/
  unsigned file_format_grp : 1;
  /** byte 15 **/
  unsigned always1 : 1;
  /** byte 15 **/
  unsigned crc : 7;
} csd1_t;

//------------------------------------------------------------------------------
///< CSD for version 2.00 cards
typedef struct CSDV2 {
  /** byte 0 **/
  unsigned reserved1 : 6;
  /** byte 0 **/
  unsigned csd_ver : 2;
  /** byte 1 **/
  uint8_t taac;
  /** byte 2 **/
  uint8_t nsac;
  /** byte 3 **/
  uint8_t tran_speed;
  /** byte 4 **/
  uint8_t ccc_high;
  /** byte 5 **/
  unsigned read_bl_len : 4;
  /** byte 5 **/
  unsigned ccc_low : 4;
  /** byte 6 **/
  unsigned reserved2 : 4;
  /** byte 6 **/
  unsigned dsr_imp : 1;
  /** byte 6 **/
  unsigned read_blk_misalign : 1;
  /** byte 6 **/
  unsigned write_blk_misalign : 1;
  /** byte 6 **/
  unsigned read_bl_partial : 1;
  /** byte 7 **/
  unsigned reserved3 : 2;
  /** byte 7 **/
  unsigned c_size_high : 6;
  /** byte 8 **/
  uint8_t c_size_mid;
  /** byte 9 **/
  uint8_t c_size_low;
  /** byte 10 **/
  unsigned sector_size_high : 6;
  /** byte 10 **/
  unsigned erase_blk_en : 1;
  /** byte 10 **/
  unsigned reserved4 : 1;
  /** byte 11 **/
  unsigned wp_grp_size : 7;
  /** byte 11 **/
  unsigned sector_size_low : 1;
  /** byte 12 **/
  unsigned write_bl_len_high : 2;
  /** byte 12 **/
  unsigned r2w_factor : 3;
  /** byte 12 **/
  unsigned reserved5 : 2;
  /** byte 12 **/
  unsigned wp_grp_enable : 1;
  /** byte 13 **/
  unsigned reserved6 : 5;
  /** byte 13 **/
  unsigned write_partial : 1;
  /** byte 13 **/
  unsigned write_bl_len_low : 2;
  /** byte 14 **/
  unsigned reserved7 : 2;
  /** byte 14 **/
  unsigned file_format : 2;
  /** byte 14 **/
  unsigned tmp_write_protect : 1;
  /** byte 14 **/
  unsigned perm_write_protect : 1;
  /** byte 14 **/
  unsigned copy : 1;
  /** byte 14 **/
  unsigned file_format_grp : 1;
  /** byte 15 **/
  unsigned always1 : 1;
  /** byte 15 **/
  unsigned crc : 7;
} csd2_t;
//------------------------------------------------------------------------------
///< union of old and new style CSD register
union csd_t {
  csd1_t v1; ///< v1 CSD register
  csd2_t v2; ///< v2 CSD register
};
#endif /** SdInfo_h **/
