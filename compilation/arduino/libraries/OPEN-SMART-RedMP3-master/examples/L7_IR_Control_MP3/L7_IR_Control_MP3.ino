/************************************************* ************************************************** ******
* OPEN-SMART Red Serial MP3 Player Lesson 7: IR control MP3
NOTE!!! First of all you should download the voice resources from our google drive:
https://drive.google.com/drive/folders/0B6uNNXJ2z4CxaXFpakMxR0p1Unc?usp=sharing

Then unzip it and find the 01 and 02 folder and put them into your TF card (should not larger than 32GB). 

* You can learn how to use the Infrared remote control to control the MP3, and when you press the button, the buzzer beep.
*
* The following functions are available:

* buzzer.on();//turn on the buzzer
* buzzer.off();//turn off the buzzer

* IR.enableIRIn(); // Start the receiver
* IR.decode();//if no result, it return 0, otherwise it return 1; .
* IR.resume(); // so that it can receive the next value
* IR.isReleased();//if the button is not released yet, it return 1; otherwise it return 0;

/--------basic operations---------------/
mp3.play();
mp3.pause();
mp3.nextSong();
mp3.previousSong();
mp3.volumeUp();
mp3.volumeDown();
mp3.forward();    //fast forward
mp3.rewind();     //fast rewind
mp3.stopPlay();  
mp3.stopInject(); //when you inject a song, this operation can stop it and come back to the song befor you inject
mp3.singleCycle();//it can be set to cycle play the currently playing song 
mp3.allCycle();   //to cycle play all the songs in the TF card
/--------------------------------/

mp3.playWithIndex(int8_t index);//play the song according to the physical index of song in the TF card

mp3.injectWithIndex(int8_t index);//inject a song according to the physical index of song in the TF card when it is playing song.

mp3.setVolume(int8_t vol);//vol is 0~0x1e, 30 adjustable level

mp3.playWithFileName(int8_t directory, int8_t file);//play a song according to the folder name and prefix of its file name
                                                            //foler name must be 01 02 03...09 10...99
                                                            //prefix of file name must be 001...009 010...099

mp3.playWithVolume(int8_t index, int8_t volume);//play the song according to the physical index of song in the TF card and the volume set

mp3.cyclePlay(int16_t index);//single cycle play a song according to the physical index of song in the TF

mp3.playCombine(int16_t folderAndIndex[], int8_t number);//play combination of the songs with its folder name and physical index
      //folderAndIndex: high 8bit is folder name(01 02 ...09 10 11...99) , low 8bit is index of the song
      //number is how many songs you want to play combination

About SoftwareSerial library:
The library has the following known limitations:
If using multiple software serial ports, only one can receive data at a time.

Not all pins on the Mega and Mega 2560 support change interrupts, so only the following can be used for RX: 
10, 11, 12, 13, 14, 15, 50, 51, 52, 53, A8 (62), A9 (63), A10 (64), A11 (65), A12 (66), A13 (67), A14 (68), A15 (69).

Not all pins on the Leonardo and Micro support change interrupts, so only the following can be used for RX: 
8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).
On Arduino or Genuino 101 the current maximum RX speed is 57600bps.
On Arduino or Genuino 101 RX doesn't work on Pin 13.

Store: dx.com/440175
https://open-smart.aliexpress.com/store/1199788

************************************************** **************************************************/
#include <SoftwareSerial.h>

#include "RedMP3.h"
#include "IRremote.h"
#include "OS_Buzzer.h"

#define BUZZER_PIN 9          //buzzer connect to D9 of Arduino
Buzzer buzzer(BUZZER_PIN);//buy from dx.com/316418

#define MP3_RX 7//RX of Serial MP3 module connect to D7 of Arduino
#define MP3_TX 8//TX to D8, note that D8 can not be used as RX on Mega2560, you should modify this if you donot use Arduino UNO
MP3 mp3(MP3_RX, MP3_TX);//buy from dx.com/440175

#define RECV_PIN 2//buy from dx.com/391979
IRrecv IR(RECV_PIN);

int8_t flag_play = 1;
void setup()
{
  delay(500);//Requires 500ms to wait for the MP3 module to initialize  
  IR.enableIRIn();
  Serial.begin(9600);
}

void loop()
{
  if (IR.decode()) {//If decode is valid

    if(IR.isReleased())//
	{
	  buzzer.on();//every time you press the key, the buzzer will beep
	  switch(IR.keycode)
	  {
	    case KEY_PLUS:  mp3.volumeUp();break;
		case KEY_MINUS: mp3.volumeDown();break;
		case KEY_PLAY:  flag_play = !flag_play;
			            if(flag_play)mp3.play();
						else mp3.pause();
						break;
		case KEY_PREV: mp3.previousSong();break;
		case KEY_NEXT:  mp3.nextSong();break;
		case KEY_ONE:  mp3.playWithIndex(0x01);break;
		case KEY_TWO:   mp3.playWithIndex(0x02);break;
		default: break;
	  }	 
	  delay(100);   //buzzer beep for 100ms
	  buzzer.off(); //turn off the buzzer
    }
    IR.resume(); // Receive the next value
  }
  
}

/*********************************************************************************************************
The end of file
*********************************************************************************************************/
