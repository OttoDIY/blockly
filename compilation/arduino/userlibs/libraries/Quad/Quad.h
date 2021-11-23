#ifndef Quad_h
#define Quad_h
#include <Servo.h>
#include "Octosnake.h"

// servo index to board_pins
#define FRONT_RIGHT_HIP 0
#define FRONT_LEFT_HIP 1
#define FRONT_RIGHT_LEG 2
#define FRONT_LEFT_LEG 3
#define BACK_RIGHT_HIP 4
#define BACK_LEFT_HIP 5
#define BACK_RIGHT_LEG 6
#define BACK_LEFT_LEG 7

extern "C" void pause(int);

class Quad {

  public:
    void init(int FRH, int FLH, int FRL, int FLL, int BRH, int BLH, int BRL, int BLL);
    void home();
    void run(int dir = 1, float steps = 4, float T = 550);
    void walk(int dir = 1, float steps = 4, float T = 550);
    void turnL(float steps = 1, float period = 550);
    void turnR(float steps = 1, float period = 550);
    void omniWalk(bool side = true, float T = 1000, float turn_factor = 2);
    void moonwalkL(float steps = 10, float period = 2000);
    void dance(float steps = 1, float period = 2000);
    void upDown(float steps = 1, float period = 500);
    void waveHAND(float steps = 1, float period = 700);
    void Hide(float steps = 1, float period = 700);
    void pushUp(float steps = 1, float period = 5000);
    void frontBack(float steps = 1, float period = 2000);
    void reverseServo(int id);
    void hello();
    void jump();
    void scared();
    void moveServos(int time, float target[8]);
    void setServo(int id, float target);
    void setTrim(int index, int value) {
      trim[index] = value;
    }
    bool getRestState();
    void setRestState(bool state);
    void refresh();
    void storeTrim();
    void loadTrim();
    void attachServo();
    void detachServo();
  private:
    Oscillator oscillator[8];
    Servo servo[8];
    int board_pins[8];
    int trim[8]; //deviation servo offset
    //unsigned long _init_time;
    //unsigned long _final_time;
    bool isOttoResting;
    void execute(float steps, float period[8], int amplitude[8], int offset[8], int phase[8]);
    bool reverse[8];
    int EEPROMReadWord(int p_address);
    void EEPROMWriteWord(int p_address, int p_value);

};

#endif