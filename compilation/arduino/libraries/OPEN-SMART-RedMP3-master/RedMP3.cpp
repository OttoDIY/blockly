/****************************************************************************/	
//	Function: Cpp file for Red Serial MP3 Player module
//	Hardware: Serial MP3 Player A
//	Arduino IDE: Arduino-1.6.5
//	Author:	 Fred	
//	Date: 	 2017.05.20
//	by OPEN-SMART Team
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/****************************************************************************/
#include <SoftwareSerial.h>
#include "RedMP3.h"

MP3::MP3(uint8_t rxd, uint8_t txd):myMP3(txd, rxd)
{
  myMP3.begin(9600);//baud rate is 9600bps
}
void MP3::begin()
{
  sendCommand(CMD_SEL_DEV, DEV_TF);//select the TF card  
  delay(100);
}
void MP3::play()
{
  sendCommand(CMD_PLAY);
}
void MP3::pause()
{
  sendCommand(CMD_PAUSE);
}

void MP3::nextSong()
{
  sendCommand(CMD_NEXT_SONG);
}

void MP3::previousSong()
{
  sendCommand(CMD_PREV_SONG);
}

void MP3::volumeUp()
{
  sendCommand(CMD_VOLUME_UP);
}

void MP3::volumeDown()
{
  sendCommand(CMD_VOLUME_DOWN);
}

void MP3::forward()
{
  sendCommand(CMD_FORWARD);
}

void MP3::rewind()
{
  sendCommand(CMD_REWIND);
}

void MP3::stopPlay()
{
  sendCommand(CMD_STOP);
}

void MP3::stopInject()
{
  sendCommand(CMD_STOP_INJECT);
}
void MP3::singleCycle()
{
  mp3_5bytes(CMD_SET_PLAY_MODE, SINGLE_CYCLE);
}	
void MP3::allCycle()
{
  mp3_5bytes(CMD_SET_PLAY_MODE, ALL_CYCLE);
}

void MP3::playWithIndex(int8_t index)
{
  sendCommand(CMD_PLAY_W_INDEX,index);
}

void MP3::injectWithIndex(int8_t index)
{
  sendCommand(CMD_INJECT_W_INDEX,index);
}

uint8_t MP3::getStatus()
{
  int dat;
  while(myMP3.available())dat = myMP3.read();
  sendCommand(CMD_CHECK_STATUS);
  while(myMP3.available()<9);
  while(myMP3.read() != CMD_CHECK_STATUS)//the status come after the command 
  	{
  	  
	//  Serial.print(dat,HEX);
	//  Serial.print(" ");
  	}
  dat = myMP3.read();
 // Serial.print("*");
//  Serial.println(dat);
  return dat;
  
}

void MP3::setVolume(int8_t vol)
{
  mp3_5bytes(CMD_SET_VOLUME, vol);
}

void MP3::playWithFileName(int8_t directory, int8_t file)
{
  int16_t dat;
  dat = ((int16_t)directory) << 8;
  dat |= file;
  sendCommand(CMD_PLAY_FILE_NAME, dat);
}

void MP3::playWithVolume(int8_t index, int8_t volume)
{
  if(volume < 0) volume = 0;          //min volume
  else if(volume > 0x1e) volume = 0x1e;//max volume
  int16_t dat;
  dat = ((int16_t)volume) << 8;
  dat |= index;
  mp3_6bytes(CMD_PLAY_W_VOL, dat);
}


/*cycle play with an index*/
void MP3::cyclePlay(int16_t index)
{
  mp3_6bytes(CMD_SET_PLAY_MODE,index);
}

void MP3::setCyleMode(int8_t AllSingle)
{
 //AllSingle parameter should be 0 or 1, 0 is all songs cycle play, 1 is single cycle play
  if((AllSingle == 0) || (AllSingle == 1))
    mp3_5bytes(CMD_SET_PLAY_MODE,AllSingle);
}


void MP3::playCombine(int16_t folderAndIndex[], int8_t number)
{
  if(number > 15) return;//number of songs combined can not be more than 15
  uint8_t nbytes;//the number of bytes of the command with starting byte and ending byte
  nbytes = 2*number + 4;
  uint8_t Send_buf[nbytes];
  Send_buf[0] = 0x7e; //starting byte
  Send_buf[1] = nbytes - 2; //the number of bytes of the command without starting byte and ending byte
  Send_buf[2] = CMD_PLAY_COMBINE; 
  for(uint8_t i=0; i < number; i++)//
  {
    Send_buf[i*2+3] = (folderAndIndex[i])>>8;
	Send_buf[i*2+4] = folderAndIndex[i];
  }
  Send_buf[nbytes - 1] = 0xef;
  sendBytes(Send_buf, nbytes);
}


void MP3::sendCommand(int8_t command, int16_t dat)
{
  delay(20);
  if((command == CMD_PLAY_W_VOL)||(command == CMD_SET_PLAY_MODE)||(command == CMD_PLAY_COMBINE))
  	return;
  else if(command < 0x1F) 
  {
	mp3Basic(command);
  }
  else if(command < 0x40)
  { 
	mp3_5bytes(command, dat);
  }
  else if(command < 0x50)
  { 
	mp3_6bytes(command, dat);
  }
  else return;
 
}

void MP3::mp3Basic(int8_t command)
{
  uint8_t Send_buf[4];
  Send_buf[0] = 0x7e; //starting byte
  Send_buf[1] = 0x02; //the number of bytes of the command without starting byte and ending byte
  Send_buf[2] = command; 
  Send_buf[3] = 0xef; //
  sendBytes(Send_buf, 4);
}
void MP3::mp3_5bytes(int8_t command, uint8_t dat)
{
  uint8_t Send_buf[5];
  Send_buf[0] = 0x7e; //starting byte
  Send_buf[1] = 0x03; //the number of bytes of the command without starting byte and ending byte
  Send_buf[2] = command; 
  Send_buf[3] = dat; //
  Send_buf[4] = 0xef; //
  sendBytes(Send_buf, 5);
}
void MP3::mp3_6bytes(int8_t command, int16_t dat)
{
  uint8_t Send_buf[6];
  Send_buf[0] = 0x7e; //starting byte
  Send_buf[1] = 0x04; //the number of bytes of the command without starting byte and ending byte
  Send_buf[2] = command; 
  Send_buf[3] = (int8_t)(dat >> 8);//datah
  Send_buf[4] = (int8_t)(dat); //datal
  Send_buf[5] = 0xef; //
  sendBytes(Send_buf,6);
}
void MP3::sendBytes(uint8_t buf[], uint8_t nbytes)
{
  for(uint8_t i=0; i < nbytes; i++)//
  {
    myMP3.write(buf[i]) ;
  }
}


