/*
MD_YX5300 - Library for YX5300 Serial MP3 module

See header file for comments

This file contains class and hardware related methods.

Copyright (C) 2018 Marco Colli. All rights reserved.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
*/
#include "MD_YX5300.h"

/**
 * \file
 * \brief Implements class methods
 */

#define ARRAY_SIZE(a) (sizeof(a)/sizeof(a[0]))  ///< Generic array element count macro

#define LIBDEBUG  0   ///< Set to 1 to enable Debug statement in the library

#if LIBDEBUG
#define DBGStream Serial

#define PRINT(s, v)   do { DBGStream.print(F(s)); DBGStream.print(v); } while (false);      ///< Print a string followed by a value (decimal)
#define PRINTX(s, v)  do { DBGStream.print(F(s)); DBGStream.print(v, HEX); } while (false); ///< Print a string followed by a value (hex)
#define PRINTS(s)     do { DBGStream.print(F(s)); } while (false);                          ///< Print a string
#else
#define PRINT(s, v)   ///< Print a string followed by a value (decimal)
#define PRINTX(s, v)  ///< Print a string followed by a value (hex)
#define PRINTS(s)     ///< Print a string
#endif

void MD_YX5300::begin(void)
{
  uint32_t time = _timeout;

  _timeout = 2000;  // initialization timeout needs to be a long one
  reset();          // long timeout on this message
  _timeout = time;  // put back saved value

  // set the TF card system.
  // The synchronous call will return when the command is accepted
  // then it will be followed by an initialization message saying TF card is inserted.
  // Doc says this should be 200ms, so we set a timeout for 1000ms.
  device(CMD_OPT_DEV_TF); // set the TF card file system
  time = millis();
  while (!check()) 
  {
    if (millis() - time >= 1000) break;
  }
}

bool MD_YX5300::check(void)
// returns true when received full message or timeout
{
  uint8_t c = '\0';

  // check for timeout if waiting response
  if (_waitResponse && (millis() - _timeSent >= _timeout))
  {
    processResponse(true);
    return(true);
  }

  // check if any characters available
  if (!_Out.available())
    return(false);

  // process all the characters waiting
  do
  {
    c = _Out.read();
 
    if (c == PKT_SOM) _bufIdx = 0;      // start of message - reset the index
    
    _bufRx[_bufIdx++] = c;

    if (_bufIdx >= ARRAY_SIZE(_bufRx))  // keep index within array memory bounds
      _bufIdx = ARRAY_SIZE(_bufRx) - 1;
  } while (_Out.available() && c != PKT_EOM);

  // check if we have a whole message to 
  // process and do something with it here!
  if (c == PKT_EOM)
  {
    processResponse();
  }

  return(c == PKT_EOM);   // we have just processed a response
}

int16_t MD_YX5300::checksum(uint8_t *data, uint8_t len)
{
  int16_t sum = 0;

  for (uint8_t i = 0; i < len; i++)
    sum += data[i];

  return(-sum);
}

bool MD_YX5300::sendRqst(cmdSet_t cmd, uint8_t data1, uint8_t data2)
// returns true if the response status is ready for processing
{
  static uint8_t msg[] = 
  { 
    PKT_SOM,      // 0: Start
    PKT_VER,      // 1: Version
    PKT_LEN,      // 2: Length
    CMD_NUL,      // 3: Command
    PKT_FB_ON,    // 4: Feedback
    PKT_DATA_NUL, // 5: Data Hi
    PKT_DATA_NUL, // 6: Data Lo
#if USE_CHECKSUM
    PKT_DATA_NUL, // [7]: Checksum Hi (optional)
    PKT_DATA_NUL, // [8]: Checksum Lo (optional)
#endif
    PKT_EOM       // 7, [9]: End
  };

  msg[3] = cmd;
  msg[5] = data1;
  msg[6] = data2;

#if USE_CHECKSUM
  int16_t chk = checksum(&msg[1], msg[2]);

  msg[7] = (uint8_t)(chk >> 8);
  msg[8] = (uint8_t)(chk & 0x00ff);
#endif

  _Out.write(msg, ARRAY_SIZE(msg));

#if LIBDEBUG
  dumpMessage(msg, ARRAY_SIZE(msg), "S");
#endif
  // according to the documentation, the device takes about 
  // 20ms to process the message, so we should delay to 
  // avoid overloading the device.
  delay(20);
  _timeSent = millis();
  _status.code = STS_OK;
  _waitResponse = true;

  // if synchronous mode enabled, wait for a 
  // response message to be processed
  if (_synch)
  {
    do {} while (!check());
    PRINTS("\nSynch wait over");
    return(true);
  }
  
  return(false);
}

void MD_YX5300::processResponse(bool bTimeout)
{
#if LIBDEBUG
  dumpMessage(_bufRx, _bufIdx, "R");
#endif
  _waitResponse = false;    // definitely no longer waiting

#if USE_CHECKSUM
  int16_t chk = checksum(&_bufRx[1], _bufRx[2]);
  int16_t chkRcv = ((int16_t)_bufRx[7] << 8) + _bufRx[8];
#endif

  // initialize to most probable message outcome
  _status.code = (status_t)_bufRx[3];
  _status.data = ((uint16_t)_bufRx[5] << 8) | _bufRx[6];

  // now override with message packet errors, if any
  if (bTimeout)
    _status.code = STS_TIMEOUT;
  else if (_bufRx[1] != PKT_VER)
    _status.code = STS_VERSION;
#if USE_CHECKSUM
  else if (chk != chkRcv)
    _status.code = STS_CHECKSUM;
#endif

  PRINTX(" -> ", _status.code);
  PRINTS(" : ");

  // allocate the return code & print debug message
  switch (_status.code)
  {
  case STS_OK:         PRINTS("OK");          break;
  case STS_TIMEOUT:    PRINTS("Timeout");     break;
  case STS_VERSION:    PRINTS("Ver error");   break;
#if USE_CHECKSUM
  case STS_CHECKSUM:   PRINT("Chk error calc=", chk); PRINT(" rcv=", chkRcv); break;
#endif
  case STS_TF_INSERT:  PRINTS("TF inserted"); break;
  case STS_TF_REMOVE:  PRINTS("TF removed");  break;
  case STS_ACK_OK:     PRINTS("Ack OK");      break;
  case STS_ERR_FILE:   PRINT("File Error ", _status.data);   break;
  case STS_INIT:       PRINTX("Init 0x", _status.data);      break;
  case STS_FILE_END:   PRINT("Ended track ", _status.data);  break;
  case STS_STATUS:     PRINTX("Status 0x", _status.data);      break;
  case STS_EQUALIZER:  PRINT("Equalizer ", _status.data);    break;
  case STS_VOLUME:     PRINT("Vol ", _status.data);          break;
  case STS_TOT_FILES:  PRINT("Tot files ", _status.data);    break;
  case STS_PLAYING:    PRINT("Playing File ", _status.data); break;
  case STS_FLDR_FILES: PRINT("Folder files ", _status.data); break;
  case STS_TOT_FLDR:   PRINT("Tot folder: ", _status.data);  break;
  default:             PRINTS("Unknown Status Code");        break;
  }

  // finally, call the callback if there is one
  if (_cbStatus != nullptr)
    _cbStatus(&_status);
}

char MD_YX5300::itoh(uint8_t i)
{
  if (i < 10) return(i + '0');
  else return(i - 10 + 'A');
}

void MD_YX5300::dumpMessage(uint8_t *msg, uint8_t len, char *psz)
{
  char sz[3];
  uint32_t maxMillis = 1000000L;
  uint32_t time = millis();

  PRINTS("\n");
  // print the timestamp
  while (maxMillis > time && maxMillis > 0)   //do leading zeros
  {
    PRINTS("0");
    maxMillis /= 10;
  }
  PRINT("", millis());      // now the time

  // now the rest of dump message
  PRINT(" ", psz); PRINTS(": ");
  sz[2] = '\0';
  for (uint8_t i=0; i<len; i++, msg++)
  {
    sz[0] = itoh((*msg & 0xf0) >> 4);
    sz[1] = itoh(*msg & 0x0f);
    PRINT(" ", sz);
  }
}

