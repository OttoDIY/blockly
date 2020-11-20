#ifndef _Red_MP3_H__
#define _Red_MP3_H__

#include <SoftwareSerial.h>
#include <Arduino.h>

/************Command byte**************************/
/*basic commands*/
#define CMD_PLAY  0X01
#define CMD_PAUSE 0X02
#define CMD_NEXT_SONG 0X03
#define CMD_PREV_SONG 0X04
#define CMD_VOLUME_UP   0X05
#define CMD_VOLUME_DOWN 0X06
#define CMD_FORWARD 0X0A // >>
#define CMD_REWIND  0X0B // <<
#define CMD_STOP 0X0E
#define CMD_STOP_INJECT 0X0F//stop interruptting with a song, just stop the interlude

#define CMD_CHECK_STATUS 0X10
  #define STATUS_STOP    0
  #define STATUS_PLAY    1
  #define STATUS_PAUSE   2
  #define STATUS_FORWARD 3
  #define STATUS_REWIND  4
  
/*5 bytes commands*/
#define CMD_SEL_DEV 0X35
  #define DEV_TF 0X01


/*6 bytes commands*/  
#define CMD_PLAY_W_INDEX   0X41
#define CMD_PLAY_FILE_NAME 0X42
#define CMD_INJECT_W_INDEX 0X43

/*Special commands*/
#define CMD_SET_VOLUME 0X31
#define CMD_PLAY_W_VOL 0X31

#define CMD_SET_PLAY_MODE 0X33
  #define ALL_CYCLE 0X00
  #define SINGLE_CYCLE 0X01

#define CMD_PLAY_COMBINE 0X45//can play combination up to 15 songs

class MP3
{
public:
	MP3(uint8_t rxd, uint8_t txd);
	void begin();
	void play();
	void pause();
	void nextSong();
	void previousSong();
	void volumeUp();
	void volumeDown();
	void forward();
	void rewind();
	void stopPlay();
	void stopInject();
	void singleCycle();
	void allCycle();
	void playWithIndex(int8_t index);
    void injectWithIndex(int8_t index);

	uint8_t getStatus();

	void setVolume(int8_t vol);
	void playWithFileName(int8_t directory, int8_t file);
	void playWithVolume(int8_t index, int8_t volume);
	void cyclePlay(int16_t index);
	void setCyleMode(int8_t AllSingle);
	void playCombine(int16_t folderAndIndex[], int8_t number);
	
private:
	SoftwareSerial myMP3;
	void sendCommand(int8_t command, int16_t dat = 0);
	void mp3Basic(int8_t command);
	void mp3_5bytes(int8_t command, uint8_t dat);
	void mp3_6bytes(int8_t command, int16_t dat);
	void sendBytes(uint8_t buf[], uint8_t nbytes);
};

#endif
