#include <EEPROM.h>
#include "Quad.h"

#define __LOAD_TRIM_FROM_EEPROM__
#define EEPROM_MAGIC  0xabcd
#define EEPROM_OFFSET 2   //eeprom starting offset to store trim[]
/*
   (servo index, pin to attach pwm)
   __________ __________ _________________
  |(3,FLL)_____)(1,FLH)      (0,FRH)(______(2,FRL)|
  |__|       |left FRONT right|        |__|
             |                |
             |                |
             |                |
   _________ |                | __________
  |(7,BLL)_____)(5,BLH)______(4,BRH)(______(6,BRL)|
  |__|                                 |__|

*/
//comment below manually setting trim in Quad() constructor
// FRONT_RIGHT_HIP servo 0  Pin 2
// FRONT_LEFT_HIP servo 1  Pin 8
// FRONT_RIGHT_LEG servo 2  Pin 3
// FRONT_LEFT_LEG servo 3  Pin 9
// BACK_RIGHT_HIP servo 4  Pin 4
// BACK_LEFT_HIP servo 5  Pin 6
// BACK_RIGHT_LEG servo 6  Pin 5
// BACK_LEFT_LEG servo 7  Pin 7

void Quad::reverseServo(int id) {
  if (reverse[id])
    reverse[id] = 0;
  else
    reverse[id] = 1;
}
void Quad::init(int FRH, int FLH, int FRL, int FLL, int BRH, int BLH, int BRL, int BLL) {

  board_pins[0] = FRH; // front left inner
  board_pins[1] = FLH; // front right inner
  board_pins[2] = FRL; // back left inner
  board_pins[3] = FLL; // back right inner
  board_pins[4] = BRH; // front left outer
  board_pins[5] = BLH; // front right outer
  board_pins[6] = BRL; // back left outer
  board_pins[7] = BLL; // back right outer

  /*
     trim[] for calibrating servo deviation, initial posture (home) should like below in symmetric
        \       / front left
         \_____/
         |     |->
         |_____|->
         /     \
        /       \ front right
  */
  /*
    trim[FRONT_LEFT_HIP] = 0;
    trim[FRONT_RIGHT_HIP] = -8;
    trim[BACK_LEFT_HIP] = 8;
    trim[BACK_RIGHT_HIP] = 5;

    trim[FRONT_LEFT_LEG] = 2;
    trim[FRONT_RIGHT_LEG] = -6;
    trim[BACK_LEFT_LEG] = 6;
    trim[BACK_RIGHT_LEG] = 5;
  */
#ifdef __LOAD_TRIM_FROM_EEPROM__
  int val = EEPROMReadWord(0);
  if (val != EEPROM_MAGIC) {
    EEPROMWriteWord(0, EEPROM_MAGIC);
    storeTrim();
  }
#endif

  for (int i = 0; i < 8; i++) {
    servo[i].attach(board_pins[i]);

#ifdef __LOAD_TRIM_FROM_EEPROM__
    int val = EEPROMReadWord(i * 2 + EEPROM_OFFSET);
    if (val >= -90 && val <= 90) {
      trim[i] = val;
    }
#endif
  }

  home();

}

void Quad::attachServo(){
   for (int i = 0; i < 8; i++) {
    servo[i].attach(board_pins[i]);
  }
}
void Quad::detachServo(){
   for (int i = 0; i < 8; i++) {
    servo[i].detach();
  }
}
void Quad::turnL(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int x_amp = 15;
  int z_amp = 15;
  int ap = 15;
  //int hi = 23;
  int hi = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {90 + ap, 90 - ap, 90 - hi, 90 + hi, 90 - ap, 90 + ap, 90 + hi, 90 - hi};
  int phase[] = {0, 180, 90, 90, 180, 0, 90, 90};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::turnR(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int x_amp = 15;
  int z_amp = 15;
  int ap = 15;
  int hi = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {90 + ap, 90 - ap, 90 - hi, 90 + hi, 90 - ap, 90 + ap, 90 + hi, 90 - hi};
  int phase[] = {180, 0, 90, 90, 0, 180, 90, 90};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::dance(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }
  digitalWrite(13, 0);
  int x_amp = 0;
  int z_amp = 40;
  int ap = 30;
  int hi = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {90 + ap, 90 - ap, 90 - hi, 90 + hi, 90 - ap, 90 + ap, 90 + hi, 90 - hi};
  int phase[] = {0, 0, 0, 270, 0, 0, 90, 180};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::frontBack(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int x_amp = 30;
  int z_amp = 25;
  int ap = 20;
  int hi = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {90 + ap, 90 - ap, 90 - hi, 90 + hi, 90 - ap, 90 + ap, 90 + hi, 90 - hi};
  int phase[] = {0, 180, 270, 90, 0, 180, 90, 270};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::run(int dir, float steps, float T) {
 
        setRestState(true);

digitalWrite(13, 0);
  int x_amp = 15;
  int z_amp = 15;
  int ap = 15;
  int hi = 0;
  int front_x = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {    90 + ap - front_x,
                      90 - ap + front_x,
                      90 - hi,
                      90 + hi,
                      90 - ap - front_x,
                      90 + ap + front_x,
                      90 + hi,
                      90 - hi
                 };
  int phase[] = {0, 0, 90, 90, 180, 180, 90, 90};
  if (dir == 1) {
    phase[0] = phase[1] = 180;
    phase[4] = phase[5] = 0;
  }
  execute(steps, period, amplitude, offset, phase);
  setRestState(false);
}

void Quad::omniWalk(bool side, float T, float turn_factor) {
  if(getRestState()==true){
        setRestState(false);
  }
  digitalWrite(13, 0);
  int x_amp = 15;
  int z_amp = 15;
  int ap = 15;
  int hi = 23;
  int front_x = 6 * (1 - pow(turn_factor, 2));
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {    90 + ap - front_x,
                      90 - ap + front_x,
                      90 - hi,
                      90 + hi,
                      90 - ap - front_x,
                      90 + ap + front_x,
                      90 + hi,
                      90 - hi
                 };

  int phase[8];
  if (side) {
    int phase1[] =  {0,   0,   90,  90,  180, 180, 90,  90};
    int phase2R[] = {0,   180, 90,  90,  180, 0,   90,  90};
    for (int i = 0; i < 8; i++)
      phase[i] = phase1[i] * (1 - turn_factor) + phase2R[i] * turn_factor;
  }
  else {
    int phase1[] =  {0,   0,   90,  90,  180, 180, 90,  90};
    int phase2L[] = {180, 0,   90,  90,  0,   180, 90,  90};
    for (int i = 0; i < 8; i++)
      phase[i] = phase1[i] * (1 - turn_factor) + phase2L[i] * turn_factor;// + oscillator[i].getPhaseProgress();
  }

  execute(1, period, amplitude, offset, phase);
}

void Quad::moonwalkL(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int z_amp = 45;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {0, 0, z_amp, z_amp, 0, 0, z_amp, z_amp};
  int offset[] = {90, 90, 90, 90, 90, 90, 90, 90};
  int phase[] = {0, 0, 0, 120, 0, 0, 180, 290};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::walk(int dir, float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int x_amp = 15;
  int z_amp = 20;
  int ap = 20;
  int hi = -10;
  float period[] = {T, T, T / 2, T / 2, T, T, T / 2, T / 2};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {   90 + ap,
                     90 - ap,
                     90 - hi,
                     90 + hi,
                     90 - ap,
                     90 + ap,
                     90 + hi,
                     90 - hi
                 };
  int  phase[] = {270, 270, 270, 90, 90, 90, 90, 270};
  if (dir == 0) { //backward
    phase[0] = phase[1] = 90;
    phase[4] = phase[5] = 270;
  }
  for (int i = 0; i < 8; i++) {
    oscillator[i].reset();
    oscillator[i].setPeriod(period[i]);
    oscillator[i].setAmplitude(amplitude[i]);
    oscillator[i].setPhase(phase[i]);
    oscillator[i].setOffset(offset[i]);
    oscillator[i].start();
  }
  unsigned long _init_time = millis();
  unsigned long _now_time = _init_time;
  unsigned long _final_time = _init_time + period[0] * steps;
  bool side;

  while (_now_time < _final_time) {
    side = (int)((_now_time - _init_time) / (period[0] / 2)) % 2;

    setServo(0, oscillator[0].update()); //FRONT_RIGHT_HIP
    setServo(1, oscillator[1].update()); //FRONT_LEFT_HIP
    setServo(4, oscillator[4].update()); //BACK_RIGHT_HIP
    setServo(5, oscillator[5].update()); //BACK_LEFT_HIP

    if (side == 0) {
      setServo(3, oscillator[3].update()); //FRONT_LEFT_LEG
      setServo(6, oscillator[6].update()); //BACK_RIGHT_LEG
    }
    else {
      setServo(2, oscillator[2].update()); //FRONT_RIGHT_LEG
      setServo(7, oscillator[7].update()); //BACK_LEFT_LEG
    }
    pause(1);
    _now_time = millis();
  }

}

void Quad::upDown(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int x_amp = 0;
  int z_amp = 35;
  int ap = 20;
  //int hi = 25;
  int hi = 0;
  int front_x = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {x_amp, x_amp, z_amp, z_amp, x_amp, x_amp, z_amp, z_amp};
  int offset[] = {    90 + ap - front_x,
                      90 - ap + front_x,
                      90 - hi,
                      90 + hi,
                      90 - ap - front_x,
                      90 + ap + front_x,
                      90 + hi,
                      90 - hi
                 };
  int phase[] = {0, 0, 90, 270, 180, 180, 270, 90};

  execute(steps, period, amplitude, offset, phase);
}


void Quad::pushUp(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int z_amp = 40;
  int x_amp = 65;
  int hi = 0;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {0, 0, z_amp, z_amp, 0, 0, 0, 0};
  int offset[] = {90, 90, 90 - hi, 90 + hi, 90 - x_amp, 90 + x_amp, 90 + hi, 90 - hi};
  int phase[] = {0, 0, 0, 180, 0, 0, 0, 180};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::home() {


  int ap = 20;
  int hi = 0;
  int position[] = {90 + ap, 90 - ap, 90 - hi, 90 + hi, 90 - ap, 90 + ap, 90 + hi, 90 - hi};
  for (int i = 0; i < 8; i++) {
    if (position[i] + trim[i] <= 180 && position[i] + trim[i] > 0) {
      oscillator[i].stop();
      setServo(i, position[i] + trim[i]);
    }
    isOttoResting=true;
  }
}


void Quad::waveHAND(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int z_amp = 40;
  int x_amp = 65;
  int hi = 0;
 // (left front hip, right front hip, left front foot, right front foot,left rear hip, right rear hip, left rear foot, right rear foot)
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {0, 0, -20, 0, 0, 0, 0, 0};
  int offset[] = {90, 90, 30, 60 + hi, 90 - x_amp, 110 + x_amp, 90 + hi, 90 - hi};
  int phase[] = {0, 0, 0, 0, 0, 0, 0, 0};

  execute(steps, period, amplitude, offset, phase);
}

void Quad::Hide(float steps, float T) {
  if(getRestState()==true){
        setRestState(false);
  }

  int z_amp = 40;
  int x_amp = 65;
  int hi = 0;
  // 0 - 90 mid pos - 180
 // (left front hip, right front hip, left front foot, right front foot,left rear hip, right rear hip, left rear foot, right rear foot)
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {0, 0, 0, 0, 0, 0, 0, 0};
  int offset[] = {90, 90, 10, 170, 90, 90, 170, 10};
  int phase[] = {0, 0, 0, 0, 0, 0, 0, 0};

  execute(steps, period, amplitude, offset, phase);
}


void Quad::hello() {
  float sentado[] = {90 + 15, 90 - 15, 90 - 65, 90 + 65, 90 + 20, 90 - 20, 90 + 10, 90 - 10};
  moveServos(150, sentado);
  pause(200);

  int z_amp = 40;
  int x_amp = 60;
  int T = 350;
  float period[] = {T, T, T, T, T, T, T, T};
  int amplitude[] = {0, 50, 0, 50, 0, 0, 0, 0};
  int offset[] = {
    90 + 15, 40,
    90 - 10, 90 + 10,
    90 + 20, 90 - 20,
    90 + 65, 90
  };

  int phase[] = {0, 0, 0, 90, 0, 0, 0, 0};

  execute(4, period, amplitude, offset, phase);

  float goingUp[] = {160, 20, 90, 90, 90 - 20, 90 + 20, 90 + 10, 90 - 10};
  moveServos(500, goingUp);
  pause(200);

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void Quad::jump() {
  float sentado[] = {90 + 15, 90 - 15, 30, 150, 90 + 20, 90 - 20, 150, 30};
  
  int ap = 20;
  int hi = 35;
  float salto[] = {90 + ap, 90 - ap, 170, 10, 90 - ap * 3, 90 + ap * 3, 10, 170};
 // (left front hip, right front hip, left front foot, right front foot,left rear hip, right rear hip, left rear foot, right rear foot)
  moveServos(10, sentado);
  
  delay(1000);
  
  moveServos(1, salto);
  delay(100);
  
  home();
}
void Quad::scared() {
  float sentado[] = {90 + 15, 90 - 15, 30, 150, 90 + 20, 90 - 20, 150, 30};
  
  int ap = 20;
  int hi = 35;
  float salto[] = {90 + ap, 90 - ap, 170, 10, 90 - ap * 3, 90 + ap * 3, 10, 170};
  moveServos(10, salto);
  
  delay(2000);
  
  moveServos(1, sentado);
  delay(100);
  
  home();
}

bool Quad::getRestState(){

    return isOttoResting;
}

void Quad::setRestState(bool state){

    isOttoResting = state;
}

//////////////////////////////////////////////////////////////////////////////////////
void Quad::moveServos(int time, float target[8]) {
  if(getRestState()==true){
        setRestState(false);
  }
attachServo();
  float _increment[8];
  float _servo_position[8] = {90, 90, 90, 90, 90, 90, 90, 90};
  unsigned long _final_time;
  unsigned long _partial_time;
  if (time > 10) {
    for (int i = 0; i < 8; i++)  _increment[i] = (target[i] - (_servo_position[i] + trim[i])) / (time / 10.0);
    _final_time =  millis() + time;

    while (millis() < _final_time) {
      _partial_time = millis() + 10;
      for (int i = 0; i < 8; i++) setServo(i, (_servo_position[i] + trim[i]) + _increment[i]);
      //while (millis() < _partial_time); //pause
      pause(_partial_time);
    }
  }
  else {
    for (int i = 0; i < 8; i++) setServo(i, target[i]);
  }
  for (int i = 0; i < 8; i++) _servo_position[i] = target[i];
}

void Quad::setServo(int id, float target) {
  attachServo();
  if (!reverse[id])
  servo[id].write(target + trim[id]);
    
  else
  servo[id].write(180 - (target + trim[id]));
    
}


void Quad::execute(float steps, float period[8], int amplitude[8], int offset[8], int phase[8]) {
  if(getRestState()==true){
        setRestState(false);
  }
attachServo();
          for (int i = 0; i < 8; i++) {
          oscillator[i].setPeriod(period[i]);
          oscillator[i].setAmplitude(amplitude[i]);
          oscillator[i].setPhase(phase[i]);
          oscillator[i].setOffset(offset[i]);
          oscillator[i].start();
          oscillator[i].setTime(millis());
       
      }
}

void Quad::refresh() {
  for (int i = 0; i < 8; i++) {
    if (oscillator[i].isStop()){
      servo[i].detach();
    continue;
    }
    setServo(i, oscillator[i].update());
  }
}

void Quad::storeTrim() {
  for (int i = 0; i < 8; i++) {
    EEPROMWriteWord(i * 2 + EEPROM_OFFSET, trim[i]);
    delay(100);
  }
}

// load/send only trim of hip servo
void Quad::loadTrim() {
  //FRONT_LEFT/RIGHT_HIP
  for (int i = 0; i < 4; i++) {
    Serial.write(EEPROM.read(i + EEPROM_OFFSET));
  }

  //BACK_LEFT/RIGHT_HIP
  for (int i = 8; i < 12; i++) {
    Serial.write(EEPROM.read(i + EEPROM_OFFSET));
  }
}

int Quad::EEPROMReadWord(int p_address)
{
  byte lowByte = EEPROM.read(p_address);
  byte highByte = EEPROM.read(p_address + 1);

  return ((lowByte << 0) & 0xFF) + ((highByte << 8) & 0xFF00);
}

void Quad::EEPROMWriteWord(int p_address, int p_value)
{
  byte lowByte = ((p_value >> 0) & 0xFF);
  byte highByte = ((p_value >> 8) & 0xFF);

  EEPROM.write(p_address, lowByte);
  EEPROM.write(p_address + 1, highByte);
}