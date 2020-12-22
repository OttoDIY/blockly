/*
   Copyright 2014 Marcos R. Oliveira

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

#include <Arduino.h>
#include <Wire.h>
#include <TEA5767N.h>

TEA5767N::TEA5767N() {
  Wire.begin();
  initializeTransmissionData();
  muted = false;
}

void TEA5767N::initializeTransmissionData() {
  transmission_data[FIRST_DATA] = 0;            //MUTE: 0 - not muted
                                                //SEARCH MODE: 0 - not in search mode
	
  transmission_data[SECOND_DATA] = 0;           //No frequency defined yet
	
  transmission_data[THIRD_DATA] = 0xB0;         //10110000
                                                //SUD: 1 - search up
                                                //SSL[1:0]: 01 - low; level ADC output = 5
                                                //HLSI: 1 - high side LO injection
                                                //MS: 0 - stereo ON
                                                //MR: 0 - right audio channel is not muted
                                                //ML: 0 - left audio channel is not muted
                                                //SWP1: 0 - port 1 is LOW
	
  transmission_data[FOURTH_DATA] = 0x10;        //00010000
                                                //SWP2: 0 - port 2 is LOW
                                                //STBY: 0 - not in Standby mode
                                                //BL: 0 - US/Europe FM band
                                                //XTAL: 1 - 32.768 kHz
                                                //SMUTE: 0 - soft mute is OFF
                                                //HCC: 0 - high cut control is OFF
                                                //SNC: 0 - stereo noise cancelling is OFF
                                                //SI: 0 - pin SWPORT1 is software programmable port 1
	
  transmission_data[FIFTH_DATA] = 0x00;         //PLLREF: 0 - the 6.5 MHz reference frequency for the PLL is disabled
                                                //DTC: 0 - the de-emphasis time constant is 50 ms
}

void TEA5767N::calculateOptimalHiLoInjection(float freq) {
	byte signalHigh;
	byte signalLow;
	
	setHighSideLOInjection();
	transmitFrequency((float) (freq + 0.45));
	
	signalHigh = getSignalLevel();
	
	setLowSideLOInjection();
	transmitFrequency((float) (freq - 0.45));
	
	signalLow = getSignalLevel();

	hiInjection = (signalHigh < signalLow) ? 1 : 0;
}

void TEA5767N::setFrequency(float _frequency) {
	frequency = _frequency;
	unsigned int frequencyW;
	
	if (hiInjection) {
		setHighSideLOInjection();
		frequencyW = 4 * ((frequency * 1000000) + 225000) / 32768;
	} else {
		setLowSideLOInjection();
		frequencyW = 4 * ((frequency * 1000000) - 225000) / 32768;
	}
	
	transmission_data[FIRST_DATA] = ((transmission_data[FIRST_DATA] & 0xC0) | ((frequencyW >> 8) & 0x3F));
	transmission_data[SECOND_DATA] = frequencyW & 0XFF;
}

void TEA5767N::transmitData() {
	Wire.beginTransmission(TEA5767_I2C_ADDRESS);
	for (int i=0 ; i<6 ; i++) {
		Wire.write(transmission_data[i]);
	}
	Wire.endTransmission();
	delay(100);
}

void TEA5767N::mute() {
	muted = true;
	setSoundOff();
	transmitData();
}

void TEA5767N::setSoundOff() {
	transmission_data[FIRST_DATA] |= 0b10000000;
}

void TEA5767N::turnTheSoundBackOn() {
	muted = false;
	setSoundOn();
	transmitData();
}

void TEA5767N::setSoundOn() {
	transmission_data[FIRST_DATA] &= 0b01111111;
}

boolean TEA5767N::isMuted() {
	return muted;
}

void TEA5767N::transmitFrequency(float frequency) {
	setFrequency(frequency);
	transmitData();
}

void TEA5767N::selectFrequency(float frequency) {
	calculateOptimalHiLoInjection(frequency);
	transmitFrequency(frequency);
}

void TEA5767N::selectFrequencyMuting(float frequency) {
	mute();
	calculateOptimalHiLoInjection(frequency);
	transmitFrequency(frequency);
	turnTheSoundBackOn();
}

void TEA5767N::readStatus() {
	Wire.requestFrom (TEA5767_I2C_ADDRESS, 5);
	
	if (Wire.available ()) {
		for (int i = 0; i < 5; i++) {
			reception_data[i] = Wire.read();
		}
	}
	delay(100);
}

float TEA5767N::readFrequencyInMHz() {
	loadFrequency();
	
	unsigned int frequencyW = (((reception_data[FIRST_DATA] & 0x3F) * 256) + reception_data[SECOND_DATA]);
	return getFrequencyInMHz(frequencyW);
}

void TEA5767N::loadFrequency() {
	readStatus();
	
	//Stores the read frequency that can be the result of a search and it´s not yet in transmission data
	//and is necessary to subsequent calls to search.
	transmission_data[FIRST_DATA] = (transmission_data[FIRST_DATA] & 0xC0) | (reception_data[FIRST_DATA] & 0x3F);
	transmission_data[SECOND_DATA] = reception_data[SECOND_DATA];
}

float TEA5767N::getFrequencyInMHz(unsigned int frequencyW) {
	if (hiInjection) {
		return (((frequencyW / 4.0) * 32768.0) - 225000.0) / 1000000.0;
	} else {
		return (((frequencyW / 4.0) * 32768.0) + 225000.0) / 1000000.0;
	}
}

void TEA5767N::setSearchUp() {
	transmission_data[THIRD_DATA] |= 0b10000000;
}

void TEA5767N::setSearchDown() {
	transmission_data[THIRD_DATA] &= 0b01111111;
}

void TEA5767N::setSearchLowStopLevel() {
	transmission_data[THIRD_DATA] &= 0b10011111;
	transmission_data[THIRD_DATA] |= (LOW_STOP_LEVEL << 5);
}

void TEA5767N::setSearchMidStopLevel() {
	transmission_data[THIRD_DATA] &= 0b10011111;
	transmission_data[THIRD_DATA] |= (MID_STOP_LEVEL << 5);
}

void TEA5767N::setSearchHighStopLevel() {
	transmission_data[THIRD_DATA] &= 0b10011111;
	transmission_data[THIRD_DATA] |= (HIGH_STOP_LEVEL << 5);
}

void TEA5767N::setHighSideLOInjection() {
	transmission_data[THIRD_DATA] |= 0b00010000;
}

void TEA5767N::setLowSideLOInjection() {
	transmission_data[THIRD_DATA] &= 0b11101111;
}

byte TEA5767N::searchNextMuting() {
	byte bandLimitReached;
	
	mute();
	bandLimitReached = searchNext();
	turnTheSoundBackOn();
	
	return bandLimitReached;
}

byte TEA5767N::searchNext() {
	byte bandLimitReached;
	
	if (isSearchUp()) {
		selectFrequency(readFrequencyInMHz() + 0.1);
	} else {
		selectFrequency(readFrequencyInMHz() - 0.1);
	}
	
	//Turns the search on
	transmission_data[FIRST_DATA] |= 0b01000000;
	transmitData();
		
	while(!isReady()) { }
	//Read Band Limit flag
	bandLimitReached = isBandLimitReached();
	//Loads the new selected frequency
	loadFrequency();
	
	//Turns de search off
	transmission_data[FIRST_DATA] &= 0b10111111;
	transmitData();
	
	return bandLimitReached;
}

byte TEA5767N::startsSearchMutingFromBeginning() {
	byte bandLimitReached;
	
	mute();
	bandLimitReached = startsSearchFromBeginning();
	turnTheSoundBackOn();
	
	return bandLimitReached;
}

byte TEA5767N::startsSearchMutingFromEnd() {
	byte bandLimitReached;
	
	mute();
	bandLimitReached = startsSearchFromEnd();
	turnTheSoundBackOn();
	
	return bandLimitReached;
}

byte TEA5767N::startsSearchFromBeginning() {
	setSearchUp();
	return startsSearchFrom(87.0);
}

byte TEA5767N::startsSearchFromEnd() {
	setSearchDown();
	return startsSearchFrom(108.0);
}

byte TEA5767N::startsSearchFrom(float frequency) {
	selectFrequency(frequency);
	return searchNext();
}

byte TEA5767N::getSignalLevel() {
	//Necessary before read status
	transmitData();
	//Read updated status
	readStatus();
	return reception_data[FOURTH_DATA] >> 4;
}

byte TEA5767N::isStereo() {
	readStatus();
	return reception_data[THIRD_DATA] >> 7;
}

byte TEA5767N::isReady() {
	readStatus();
	return reception_data[FIRST_DATA] >> 7;
}

byte TEA5767N::isBandLimitReached() {
	readStatus();
	return (reception_data[FIRST_DATA] >> 6) & 1;
}

byte TEA5767N::isSearchUp() {
	return (transmission_data[THIRD_DATA] & 0b10000000) != 0;
}

byte TEA5767N::isSearchDown() {
	return (transmission_data[THIRD_DATA] & 0b10000000) == 0;
}

boolean TEA5767N::isStandBy() {
	readStatus();
	return (transmission_data[FOURTH_DATA] & 0b01000000) != 0;
}

void TEA5767N::setStereoReception() {
	transmission_data[THIRD_DATA] &= 0b11110111;
	transmitData();
}

void TEA5767N::setMonoReception() {
	transmission_data[THIRD_DATA] |= 0b00001000;
	transmitData();
}

void TEA5767N::setSoftMuteOn() {
	transmission_data[FOURTH_DATA] |= 0b00001000;
	transmitData();
}

void TEA5767N::setSoftMuteOff() {
	transmission_data[FOURTH_DATA] &= 0b11110111;
	transmitData();
}

void TEA5767N::muteRight() {
	transmission_data[THIRD_DATA] |= 0b00000100;
	transmitData();
}

void TEA5767N::turnTheRightSoundBackOn() {
	transmission_data[THIRD_DATA] &= 0b11111011;
	transmitData();
}

void TEA5767N::muteLeft() {
	transmission_data[THIRD_DATA] |= 0b00000010;
	transmitData();
}

void TEA5767N::turnTheLeftSoundBackOn() {
	transmission_data[THIRD_DATA] &= 0b11111101;
	transmitData();
}

void TEA5767N::setStandByOn() {
	transmission_data[FOURTH_DATA] |= 0b01000000;
	transmitData();
}

void TEA5767N::setStandByOff() {
	transmission_data[FOURTH_DATA] &= 0b10111111;
	transmitData();
}

void TEA5767N::setHighCutControlOn() {
	transmission_data[FOURTH_DATA] |= 0b00000100;
	transmitData();
}

void TEA5767N::setHighCutControlOff() {
	transmission_data[FOURTH_DATA] &= 0b11111011;
	transmitData();
}

void TEA5767N::setStereoNoiseCancellingOn() {
	transmission_data[FOURTH_DATA] |= 0b00000010;
	transmitData();
}

void TEA5767N::setStereoNoiseCancellingOff() {
	transmission_data[FOURTH_DATA] &= 0b11111101;
	transmitData();
}