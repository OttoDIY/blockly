/* Arduino FatReader Library
 * Copyright (C) 2009 by William Greiman
 *
 * This file is part of the Arduino FatReader Library
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
 * along with the Arduino FatReader Library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */
#ifndef FatReader_h
#define FatReader_h
#include <FatStructs.h>
#include <SdReader.h>

// flags for ls()
/** ls() flag to print modify date */
#define LS_FLAG_FRAGMENTED 1
/** ls() flag to print file size */
#define LS_SIZE 2
/** ls() flag for recursive list of subdirectories */
#define LS_R 4

// offsets for structures used in volume init
/** Offset to BIOS Parameter Block in FAT Boot Sector */
#define BPB_OFFSET 11
/** Byte count for part of BIOS Parameter Block to be read by init() */
#define BPB_COUNT 37
/** offset to partition table in mbr */
#define PART_OFFSET (512 - 64 - 2)

// format dir.name into name[13] as standard 8.3 string
void dirName(dir_t &dir, char name[]);
// Print name field of dir_t struct in 8.3 format
void printEntryName(dir_t &dir);
//------------------------------------------------------------------------------
/** \class FatVolume
 * \brief FatVolume provides access to FAT volumes.
 */
class FatVolume {
  /** Allow FatReader access to FatVolume private data. */
  friend class FatReader;
  uint8_t blocksPerCluster_;
  uint32_t blocksPerFat_;
  uint32_t clusterCount_;
  uint32_t dataStartBlock_;
  uint8_t fatCount_;
  uint32_t fatStartBlock_;
  uint8_t fatType_;
  SdReader *rawDevice_;
  uint16_t rootDirEntryCount_;
  uint32_t rootDirStart_;
  uint32_t totalBlocks_;
  uint8_t chainIsContiguous(uint32_t cluster);
  uint32_t chainSize(uint32_t cluster);
  uint8_t isEOC(uint32_t cluster) {
    return cluster >= (fatType_ == 16 ? FAT16EOC_MIN : FAT32EOC_MIN);
  }
  uint32_t nextCluster(uint32_t cluster);
  uint8_t rawRead(uint32_t block, uint16_t offset, uint8_t *dst,
                  uint16_t count) {
    return rawDevice_->readData(block, offset, dst, count);
  }
  uint8_t validCluster(uint32_t cluster) {
    return (1 < cluster && cluster < (clusterCount_ + 2));
  }

public:
  /** Create an instance of FatVolume */
  FatVolume(void) : fatType_(0) {}
  /**
   * Initialize a FAT volume.  Try partition one first then try super
   * floppy format.
   *
   * \param[in] dev The SdReader where the volume is located.
   *
   * \return The value one, true, is returned for success and
   * the value zero, false, is returned for failure.  Reasons for
   * failure include not finding a valid partition, not finding a valid
   * FAT file system or an I/O error.
   */
  uint8_t init(SdReader &dev) { return init(dev, 1) ? 1 : init(dev, 0); }
  uint8_t init(SdReader &dev, uint8_t part);

  // inline functions that return volume info
  /** \return The volume's cluster size in blocks. */
  uint8_t blocksPerCluster(void) { return blocksPerCluster_; }
  /** \return The number of blocks in one FAT. */
  uint32_t blocksPerFat(void) { return blocksPerFat_; }
  /** \return The total number of clusters in the volume. */
  uint32_t clusterCount(void) { return clusterCount_; }
  /** \return The logical block number for the start of file data. */
  uint32_t dataStartBlock(void) { return dataStartBlock_; }
  /** \return The number of FAT structures on the volume. */
  uint8_t fatCount(void) { return fatCount_; }
  /** \return The logical block number for the start of the first FAT. */
  uint32_t fatStartBlock(void) { return fatStartBlock_; }
  /** \return The FAT type of the volume. Values are 12, 16 or 32. */
  uint8_t fatType(void) { return fatType_; }

  /*!
      @brief  Raw device for this volume
      @returns the raw device
  */
  SdReader *rawDevice(void) { return rawDevice_; }
  /** \return The number of entries in the root directory for FAT16 volumes. */
  uint32_t rootDirEntryCount(void) { return rootDirEntryCount_; }
  /** \return The logical block number for the start of the root directory
       on FAT16 volumes or the first cluster number on FAT32 volumes. */
  uint32_t rootDirStart(void) { return rootDirStart_; }
  /** \return The total number of blocks in the volume. */
  uint32_t totalBlocks(void) { return totalBlocks_; }
};
//------------------------------------------------------------------------------
/** \class FatReader
 * \brief FatReader implements a minimal FAT16/FAT32 file reader class.
 */
class FatReader {
// values for type_
/** File is contiguous file */
#define FILE_IS_CONTIGUOUS 0X08
/** File type mask */
#define FILE_TYPE_MASK 0X07
/** This FatReader has not been opened. */
#define FILE_TYPE_CLOSED 0X00
/** FatReader for a file */
#define FILE_TYPE_NORMAL 0X01
/** FatReader for a FAT16 root directory */
#define FILE_TYPE_ROOT16 0X02
/** FatReader for a FAT32 root directory */
#define FILE_TYPE_ROOT32 0X03
/** FatReader for a subdirectory */
#define FILE_TYPE_SUBDIR 0X04
/** Test value for directory type */
#define FILE_TYPE_MIN_DIR FILE_TYPE_ROOT16
  uint8_t type_;
  uint32_t fileSize_;
  uint32_t readCluster_;
  uint32_t readPosition_;
  uint32_t firstCluster_;
  FatVolume *vol_;
  int16_t readBlockData(uint8_t *dst, uint16_t count);
  void lsR(dir_t &d, uint8_t flags, uint8_t indent);

public:
  /** Create an instance of FatReader. */
  FatReader(void) : type_(FILE_TYPE_CLOSED) {}
  void ls(uint8_t flags = 0);
  uint8_t openRoot(FatVolume &vol);
  uint8_t open(FatVolume &vol, dir_t &dir);
  uint8_t open(FatReader &dir, char *name);
  uint8_t open(FatReader &dir, uint16_t index);
  void optimizeContiguous(void);
  int16_t read(void *buf, uint16_t count);
  int8_t readDir(dir_t &dir);
  void rewind(void);
  uint8_t seekCur(uint32_t pos);
  // inline functions
  /** Close this instance of FatReader. */
  void close(void) { type_ = FILE_TYPE_CLOSED; }
  /** \return The total number of bytes in a file or directory. */
  uint32_t fileSize(void) { return fileSize_; }
  /**
   * Type of this FatReader.  You should use isFile() or isDir()
   * instead of type() if possible.
   *
   * \return The file or directory type.
   */
  uint8_t fileType(void) { return type_ & FILE_TYPE_MASK; }
  /** \return The first cluster number for a file or directory. */
  uint32_t firstCluster(void) { return firstCluster_; }
  /**
   * \return True if the bit for optimized reads is set.
   * See optimizeContiguous(). */
  uint8_t isContiguous(void) { return type_ & FILE_IS_CONTIGUOUS; }
  /** \return True if this is a FatReader for a directory else false */
  uint8_t isDir(void) { return fileType() >= FILE_TYPE_MIN_DIR; }
  /** \return True if this is a FatReader for a file else false */
  uint8_t isFile(void) { return fileType() == FILE_TYPE_NORMAL; }
  /** \return True if FatReader is for an open file/directory else false */
  uint8_t isOpen(void) { return fileType() != FILE_TYPE_CLOSED; }
  /** \return The current cluster number for a file or directory. */
  uint32_t readCluster(void) { return readCluster_; }
  /** \return The read position for a file or directory. */
  uint32_t readPosition(void) { return readPosition_; }
  /**
   * Set the read position for a file or directory to \a pos.
   *
   * \param[in] pos The new read position in bytes from the beginning
   * of the file.
   *
   * \return The value one, true, is returned for success and
   * the value zero, false, is returned for failure.
   */
  uint8_t seekSet(uint32_t pos) {
    if (pos >= readPosition_)
      return seekCur(pos - readPosition_);
    rewind();
    return seekCur(pos);
  }

  /*!
      @brief  get the parent volume
      @returns the parent volume
  */
  FatVolume *volume(void) { return vol_; }
};
#endif // FatReader_h
