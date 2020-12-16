/************************************************* ************************************************** ******
* OPEN-SMART Red Serial MP3 Player Lesson 8: Speak temperature
NOTE!!! First of all you should download the voice resources from our google drive:
https://drive.google.com/drive/folders/0B6uNNXJ2z4CxaFVzZEZZVTR5Snc?usp=sharing

Then unzip it and find the 01 and 02 folder and put them into your TF card (should not larger than 32GB). 

* You can learn how to speak the temperature you get from the temperature sensor
   according to the value and the filename of digit /beep tone.
   And only when you touch TCH1 area, it will speak temperature.
*
* The following functions are available:

* touch.get(); / / return is the touch area corresponding Arduino pin number, if not then return -1
*
* disp.init(); // initialization
* disp.display(int Decimal);   // display range: -999 ~ 9999

* temper.getTemperature(); / / get the temperature value, the return of the float is the decimal

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
#include "OS_NTC.h"
#include "OS_4TouchSensor.h"
#include "TM1637.h"
#define CLK 10//CLK of the TM1637 IC connect to D10 of Arduino
#define DIO 11//DIO of the TM1637 IC connect to D11 of Arduino
TM1637 disp(CLK,DIO);//buy from dx.com/341421

#define TOUCH_OUT1 3//out1-TCH1 area corresponds to start speaker temperature
#define TOUCH_OUT2 4//out2-TCH2 area  not use now
#define TOUCH_OUT3 5//out3-TCH3 area not use now
#define TOUCH_OUT4 6//out4-TCH4 area not use now
TouchSensor touch(TOUCH_OUT1,TOUCH_OUT2, TOUCH_OUT3,TOUCH_OUT4);//buy from dx.com/456375

#define NTC_PIN A1  //SIG pin of NTC module connect to A1 of IO Shield, that is pin A1 of Arduino
Temperature temper(NTC_PIN); // initialize an Temperature object "temper" for temperature, buy from dx.com/440802

#define MP3_RX 7//RX of Serial MP3 module connect to D7 of Arduino
#define MP3_TX 8//TX to D8, note that D8 can not be used as RX on Mega2560, you should modify this if you donot use Arduino UNO
MP3 mp3(MP3_RX, MP3_TX);//buy from dx.com/440175

int8_t volume = 0x1a;//0~0x1e (30 adjustable level)
int8_t folderName = 2;//folder name must be 01 02 03 04 ...
int8_t fileName = 1; // prefix of file name must be 001xxx 002xxx 003xxx 004xxx ...099xxx
#define NUM_OFFSET 2//offset between number and file name, such as file name of 0 is 002, 1 is 003

void setup()
{
  delay(500);//Requires 500ms to wait for the MP3 module to initialize  
  disp.init();//The initialization of the display
  mp3.setVolume(volume);
}

void loop()
{
  
  int button;
  uint8_t flag_speak = 0;//0 = not speak, 1 = to speak
  button = touch.get();
  if(button == TOUCH_OUT1) //if touch the TCH1 area
  {
    delay(10);//delay for 10ms
    if(touch.get() == TOUCH_OUT1)//check it again
    {
      flag_speak = 1;
    }
	while(touch.get() == TOUCH_OUT1);//Wait for the button to be released
  }
  float celsius;
  celsius = temper.getTemperature();//get temperature
  displayTemperature((int8_t)celsius);//
  if(flag_speak)
  {
    SpeakTemp(celsius);
	flag_speak = 0;
  }
}
void SpeakTemp(float temp)
{
  if(temp >= 1000)return;
  else if(temp <= -1000)return;
  
  uint8_t addr[10] = {0};
  uint8_t next = 0;
  addr[next++] = 31;//031 before speak time
  addr[next++] = 35;//035 opensmart temperature
  if(temp < 0)
  {
    temp = abs(temp);
	addr[next++] = 40;//040 minus
  }
  int t = temp;//Get the integer part of the temperature
  uint8_t flag_hundred;
  if(t >= 100)
  	{
  	  flag_hundred = 1;
  	  addr[next++] = t / 100 + NUM_OFFSET;//digit befor hundred
	  addr[next++] = 30;//030 hundred
	  t %= 100;
  	}
  else flag_hundred = 0;
  if(t != 0) 
  {
  	if(flag_hundred)addr[next++] = 38;//038 and
  	if(t < 20)
  	{
  	  addr[next++] = t + 2;
  	}
    else
  	{
  	  addr[next++] = t / 10 + 20;
	  t %= 10;
	  if(t != 0)addr[next++] = t + 2;
  	}
  }
 
  addr[next++] = 1;//001 point
 
  uint8_t subbit;
  subbit = ((int)(temp*10))%10;// 
  addr[next++] = subbit + 2; 
  addr[next++] = 36;//036 Degrees Celsius
  SpeakGroup(addr, next);
}
void SpeakGroup(uint8_t addr[], uint8_t size)//
{
  
  for(uint8_t i=0; i < size; i ++)
  {
    while(mp3.getStatus()!=STATUS_STOP)delay(50);
	mp3.playWithFileName(folderName,addr[i]);
  }
  while(mp3.getStatus()!=STATUS_STOP)delay(50);
}


/************************************************* *********************/
/* Function: Display temperature on 4-digit digital tube */
/* Parameter: -int8_t temperature, temperature range is -40 ~ 125 degrees celsius */
/* Return Value: void */

void displayTemperature(int8_t temperature)
{
  int8_t temp[4];
  if(temperature < 0)
	{
		temp[0] = INDEX_NEGATIVE_SIGN;
		temperature = abs(temperature);
	}
	else if(temperature < 100)temp[0] = INDEX_BLANK;
	else temp[0] = temperature/100;
	temperature %= 100;
	temp[1] = temperature / 10;
	temp[2] = temperature % 10;
	temp[3] = 12;	          //index of 'C' for celsius degree symbol.
	disp.display(temp);
}

/*********************************************************************************************************
The end of file
*********************************************************************************************************/

