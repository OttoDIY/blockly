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
#include <string.h>
#if ARDUINO < 100
#include <WProgram.h>
#else // ARDUINO
#include <Arduino.h>
#endif // ARDUINO
#include <FatReader.h>
//------------------------------------------------------------------------------
/**
 *  Format the name field of the dir_t struct \a dir into the 13 byte array
 *  \a name in the standard 8.3 short name format.
 */
void dirName(dir_t &dir, char name[]) {
  uint8_t j = 0;
  for (uint8_t i = 0; i < 11; i++) {
    if (dir.name[i] == ' ')
      continue;
    if (i == 8)
      name[j++] = '.';
    name[j++] = dir.name[i];
  }
  name[j] = 0;
}
//------------------------------------------------------------------------------
/**
 * Print the name field of a dir_t structure in 8.3 format.
 * Append a '/' if it is a subdirectory.
 *
 */
void printEntryName(dir_t &dir) {
  for (uint8_t i = 0; i < 11; i++) {
    if (dir.name[i] == ' ')
      continue;
    if (i == 8)
      Serial.write('.');
    Serial.write(dir.name[i]);
  }
  if (DIR_IS_SUBDIR(dir)) {
    // indicate subdirectory
    Serial.write('/');
  }
}

/**************************************************************************/
/*!
    @brief  list file in a directory
    @param flags file flags
*/
/**************************************************************************/
void FatReader::ls(uint8_t flags) {
  dir_t d;
  if (isDir())
    lsR(d, flags, 0);
}
//------------------------------------------------------------------------------
// recursive part of ls()
void FatReader::lsR(dir_t &d, uint8_t flags, uint8_t indent) {
  while (readDir(d) > 0) {

    // print any indent spaces
    for (int8_t i = 0; i < indent; i++) {
      Serial.write(' ');
    }
    printEntryName(d);

    if (DIR_IS_SUBDIR(d)) {
      Serial.println();
      // recursive call if LS_R
      if (flags & LS_R) {
        FatReader s;
        if (s.open(*vol_, d)) {
          s.lsR(d, flags, indent + 2);
        }
      }
    } else {
      if (flags & LS_FLAG_FRAGMENTED) {
        uint32_t c = (uint32_t)d.firstClusterHigh << 16;
        c |= d.firstClusterLow;

        // fragmented if has clusters and not contiguous
        char f = c && !vol_->chainIsContiguous(c) ? '*' : ' ';
        Serial.write(' ');
        Serial.write(f);
      }
      if (flags & LS_SIZE) {
        Serial.write(' ');
        Serial.print(d.fileSize);
      }
      Serial.println();
    }
  }
}
//------------------------------------------------------------------------------
/** return the next cluster in a chain */
uint32_t FatVolume::nextCluster(uint32_t cluster) {
  if (!validCluster(cluster)) {
    return 0;
  }
  if (fatType_ == 32) {
    uint32_t next;
    uint32_t block = fatStartBlock_ + (cluster >> 7);
    uint16_t offset = 0X1FF & (cluster << 2);
    if (!rawRead(block, offset, (uint8_t *)&next, 4)) {
      return 0;
    }
    return next;
  }
  if (fatType_ == 16) {
    uint16_t next;
    uint32_t block = fatStartBlock_ + (cluster >> 8);
    uint16_t offset = 0X1FF & (cluster << 1);
    if (!rawRead(block, offset, (uint8_t *)&next, 2)) {
      return 0;
    }
    return next;
  }
  return 0;
}
//------------------------------------------------------------------------------
/**
 * Open a file or subdirectory by index.
 *
 * \param[in] dir An open FatReader instance for the directory.
 *
 * \param[in] index The \a index for a file or subdirectory in the
 * directory \a dir. \a index is the byte offset divided by 32 of
 * the directory entry for the file or subdirectory.
 *
 *  To determine the index for a file open it by name. The index for the
 *  file is then is: (dir.readPosition()/32 -1)
 *
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 * Reasons for failure include the FAT volume has not been initialized, \a dir
 * is not a directory, \a name is invalid, the file or subdirectory does not
 *  exist, or an I/O error occurred.
 */
uint8_t FatReader::open(FatReader &dir, uint16_t index) {
  dir_t d;

  // position directory file to entry
  if (!dir.seekSet(32UL * index))
    return false;

  // read entry
  if (dir.read(&d, 32) != 32)
    return false;

  // must be a real file or directory
  if (!DIR_IS_FILE_OR_SUBDIR(d) || d.name[0] == DIR_NAME_FREE ||
      d.name[0] == DIR_NAME_DELETED) {
    return false;
  }
  return open(*dir.volume(), d);
}
//------------------------------------------------------------------------------
/**
 * Open a file or subdirectory by name.
 *
 * \note The file or subdirectory, \a name, must be in the specified
 * directory, \a dir, and must have a DOS 8.3 name.
 *
 * \param[in] dir An open FatReader instance for the directory.
 *
 * \param[in] name A valid 8.3 DOS name for a file or subdirectory in the
 * directory \a dir.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 * Reasons for failure include the FAT volume has not been initialized, \a dir
 * is not a directory, \a name is invalid, the file or subdirectory does not
 *  exist, or an I/O error occurred.
 */
uint8_t FatReader::open(FatReader &dir, char *name) {
  dir_t entry;
  char dname[13];

  dir.rewind();
  while (dir.readDir(entry) > 0) {
    dirName(entry, dname);
    if (strcasecmp(dname, name))
      continue;
    return open(*(dir.vol_), entry);
  }
  return false;
}
//------------------------------------------------------------------------------
/**
 * Open a file or subdirectory by directory structure.
 *
 * \param[in] vol The FAT volume that contains the file or subdirectory.
 *
 * \param[in] dir The directory structure describing the file or subdirectory.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 * Reasons for failure include the FAT volume, \a vol, has not been initialized,
 * \a vol is a FAT12 volume or \a dir is not a valid directory entry.
 */
uint8_t FatReader::open(FatVolume &vol, dir_t &dir) {
  if (vol.fatType() < 16)
    return false;
  if (dir.name[0] == 0 || dir.name[0] == DIR_NAME_DELETED) {
    return false;
  }
  firstCluster_ = (uint32_t)dir.firstClusterHigh << 16;
  firstCluster_ |= dir.firstClusterLow;
  if (DIR_IS_FILE(dir)) {
    type_ = FILE_TYPE_NORMAL;
    fileSize_ = dir.fileSize;
  } else if (DIR_IS_SUBDIR(dir)) {
    type_ = FILE_TYPE_SUBDIR;
    fileSize_ = vol.chainSize(firstCluster_);
  } else {
    return false;
  }
  vol_ = &vol;
  rewind();
  return true;
}
//------------------------------------------------------------------------------
/**
 * Open a volume's root directory.
 *
 * \param[in] vol The FAT volume containing the root directory to be opened.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 * Reasons for failure include the FAT volume has not been initialized
 * or it a FAT12 volume.
 */
uint8_t FatReader::openRoot(FatVolume &vol) {
  if (vol.fatType() == 16) {
    type_ = FILE_TYPE_ROOT16;
    firstCluster_ = 0;
    fileSize_ = 32 * vol.rootDirEntryCount();
  } else if (vol.fatType() == 32) {
    type_ = FILE_TYPE_ROOT32;
    firstCluster_ = vol.rootDirStart();
    fileSize_ = vol.chainSize(firstCluster_);
  } else {
    return false;
  }
  vol_ = &vol;
  rewind();
  return true;
}
//------------------------------------------------------------------------------
/**
 * Check for a contiguous file and enable optimized reads if the
 * file is contiguous.
 */
void FatReader::optimizeContiguous(void) {
  if (isOpen() && firstCluster_) {
    if (vol_->chainIsContiguous(firstCluster_)) {
      type_ |= FILE_IS_CONTIGUOUS;
    }
  }
}
//------------------------------------------------------------------------------
/**
 * Read data from a file at starting at the current read position.
 *
 * \param[out] buf Pointer to the location that will receive the data.
 *
 * \param[in] count Maximum number of bytes to read.
 *
 * \return For success read() returns the number of bytes read.
 * A value less than \a count, including zero, will be returned
 * if end of file is reached.
 * If an error occurs, read() returns -1.  Possible errors include
 * read() called before a file has been opened, corrupt file system
 * or an I/O error occurred.
 */
int16_t FatReader::read(void *buf, uint16_t count) {
  uint8_t *dst = (uint8_t *)buf;
  uint16_t nr = 0;
  int16_t n = 0;
  while (nr < count && (n = readBlockData(dst, count - nr)) > 0) {
    if (!seekCur(n))
      return -1;
    dst += n;
    nr += n;
  }
  return n < 0 ? -1 : nr;
}
//------------------------------------------------------------------------------
// read maximum amount possible from current physical block
int16_t FatReader::readBlockData(uint8_t *dst, uint16_t count) {
  uint32_t block;
  uint16_t offset = readPosition_ & 0X1FF;
  if (count > (512 - offset))
    count = 512 - offset;
  if (count > (fileSize_ - readPosition_))
    count = fileSize_ - readPosition_;
  if (fileType() == FILE_TYPE_ROOT16) {
    block = vol_->rootDirStart() + (readPosition_ >> 9);
  } else {
    uint8_t bpc = vol_->blocksPerCluster();
    block = vol_->dataStartBlock() + (readCluster_ - 2) * bpc +
            ((readPosition_ >> 9) & (bpc - 1));
  }
  return vol_->rawRead(block, offset, dst, count) ? count : -1;
}
//------------------------------------------------------------------------------
/**
 * Read the next directory entry from a directory file.
 *
 * \param[out] dir The dir_t struct that will receive the data.
 *
 * \return For success readDir() returns the number of bytes read.
 * A value of zero will be returned if end of file is reached.
 * If an error occurs, readDir() returns -1.  Possible errors include
 * readDir() called before a directory has been opened, this is not
 * a directory file or an I/O error occurred.
 */
int8_t FatReader::readDir(dir_t &dir) {
  int8_t n;
  // if not a directory file return an error
  if (!isDir())
    return -1;
  while ((n = read((uint8_t *)&dir, sizeof(dir_t))) == sizeof(dir_t) &&
         dir.name[0] != DIR_NAME_FREE) {
    if (dir.name[0] == DIR_NAME_DELETED || dir.name[0] == '.')
      continue;
    if (DIR_IS_FILE(dir) || DIR_IS_SUBDIR(dir))
      return n;
  }
  return n < 0 ? n : 0;
}
//------------------------------------------------------------------------------
/** Set read position to start of file */
void FatReader::rewind(void) {
  readCluster_ = firstCluster_;
  readPosition_ = 0;
}
/**
 * Set the read position for a file or directory to the current position plus
 * \a offset.
 *
 * \param[in] offset The amount to advance the read position.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.
 */
uint8_t FatReader::seekCur(uint32_t offset) {

  uint32_t newPos = readPosition_ + offset;

  // can't position beyond end of file
  if (newPos > fileSize_)
    return false;

  // number of clusters forward
  uint32_t nc = (newPos >> 9) / vol_->blocksPerCluster() -
                (readPosition_ >> 9) / vol_->blocksPerCluster();

  // set new position - only corrupt file system can cause error now
  readPosition_ = newPos;

  // no clusters if FAT16 root
  if (fileType() == FILE_TYPE_ROOT16)
    return true;

  // don't need to read FAT if contiguous
  if (isContiguous()) {
    readCluster_ += nc;
    return true;
  }

  // read FAT chain while nc != 0
  while (nc-- != 0) {
    if (!(readCluster_ = vol_->nextCluster(readCluster_))) {
      return false;
    }
  }
  return true;
}
//------------------------------------------------------------------------------
/** check for contiguous chain */
uint8_t FatVolume::chainIsContiguous(uint32_t cluster) {
  uint32_t next;
  while ((next = nextCluster(cluster))) {
    if (next != (cluster + 1)) {
      return isEOC(next);
    }
    cluster = next;
  }
  return false;
}
//------------------------------------------------------------------------------
/** return the number of bytes in a cluster chain */
uint32_t FatVolume::chainSize(uint32_t cluster) {
  uint32_t size = 0;
  while ((cluster = nextCluster(cluster))) {
    size += 512 * blocksPerCluster_;
  }
  return size;
}
//------------------------------------------------------------------------------
/**
 *  Initialize a FAT volume.
 *
 * \param[in] dev The SD card where the volume is located.
 *
 * \param[in] part The partition to be used.  Legal values for \a part are
 * 1-4 to use the corresponding partition on a device formatted with
 * a MBR, Master Boot Record, or zero if the device is formatted as
 * a super floppy with the FAT boot sector in block zero.
 *
 * \return The value one, true, is returned for success and
 * the value zero, false, is returned for failure.  Reasons for
 * failure include not finding a valid partition, not finding a valid
 *  FAT file system in the specified partition or an I/O error.
 */
uint8_t FatVolume::init(SdReader &dev, uint8_t part) {
  uint8_t buf[BPB_COUNT];
  uint32_t volumeStartBlock = 0;
  rawDevice_ = &dev;
  // if part == 0 assume super floppy with FAT boot sector in block zero
  // if part > 0 assume mbr volume with partition table
  if (part) {
    if (part > 4)
      return false;

    if (!rawRead(volumeStartBlock, PART_OFFSET + 16 * (part - 1), buf, 16)) {
      return false;
    }
    part_t *part = (part_t *)buf;
    if ((part->boot & 0X7F) != 0 || part->totalSectors < 100 ||
        part->firstSector == 0) {
      // not a valid partition
      return false;
    }
    volumeStartBlock = part->firstSector;
  }
  if (!rawRead(volumeStartBlock, BPB_OFFSET, buf, BPB_COUNT)) {
    return false;
  }
  bpb_t *bpb = (bpb_t *)buf;
  if (bpb->bytesPerSector != 512 || bpb->fatCount == 0 ||
      bpb->reservedSectorCount == 0 || bpb->sectorsPerCluster == 0 ||
      (bpb->sectorsPerCluster & (bpb->sectorsPerCluster - 1)) != 0) {
    // not valid FAT volume
    return false;
  }
  fatCount_ = bpb->fatCount;
  blocksPerCluster_ = bpb->sectorsPerCluster;
  blocksPerFat_ =
      bpb->sectorsPerFat16 ? bpb->sectorsPerFat16 : bpb->sectorsPerFat32;
  rootDirEntryCount_ = bpb->rootDirEntryCount;
  fatStartBlock_ = volumeStartBlock + bpb->reservedSectorCount;
  rootDirStart_ = fatStartBlock_ + bpb->fatCount * blocksPerFat_;
  dataStartBlock_ = rootDirStart_ + ((32 * bpb->rootDirEntryCount + 511) / 512);
  totalBlocks_ =
      bpb->totalSectors16 ? bpb->totalSectors16 : bpb->totalSectors32;
  clusterCount_ = (totalBlocks_ - (dataStartBlock_ - volumeStartBlock)) /
                  bpb->sectorsPerCluster;
  if (clusterCount_ < 4085) {
    fatType_ = 12;
  } else if (clusterCount_ < 65525) {
    fatType_ = 16;
  } else {
    rootDirStart_ = bpb->fat32RootCluster;
    fatType_ = 32;
  }
  return true;
}
