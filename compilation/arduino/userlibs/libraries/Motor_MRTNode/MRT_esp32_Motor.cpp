/*
 * @Author: Oscar F 
 * @Date: 2022-05-25
 * @LastEditors: DESKTOP-H5SE9D0
 * @Description: functions for use the MRT motors in the MRT node ESP32 board
 * @FilePath: 
 */

#include "MRT_esp32_Motor.h"

void DcMotor_init(){
  // Setup timer and attach timer to a motor speed pin
  ledcSetup(LEDC_CHANNEL_0, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_1, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_2, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_3, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_4, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_5, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_6, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_7, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcAttachPin(MOTOR_L1_PIN1, LEDC_CHANNEL_0);
  ledcAttachPin(MOTOR_L1_PIN2, LEDC_CHANNEL_1);
  ledcAttachPin(MOTOR_R1_PIN1, LEDC_CHANNEL_2);
  ledcAttachPin(MOTOR_R1_PIN2, LEDC_CHANNEL_3);
  ledcAttachPin(MOTOR_L2_PIN1, LEDC_CHANNEL_4);
  ledcAttachPin(MOTOR_L2_PIN2, LEDC_CHANNEL_5);
  ledcAttachPin(MOTOR_R2_PIN1, LEDC_CHANNEL_6);
  ledcAttachPin(MOTOR_R2_PIN2, LEDC_CHANNEL_7);
}


/**
 * @description: DC Motor driven
 * @param {uint8_t} port  port number (1, 2, 3, 4) 
 * @param {int} direction 0:forward ，1: backward
 * @param {int} speed (0 ~ 255)
 * @return {*}
 */

void setDcMotor(uint8_t port, int direction, int speed) {
  int motorPin1Channel = 0;
  int motorPin2Channel = 0;
   
  speed = constrain(speed,0,255);

  switch(port)
  {
    case MOTOR_L1: 
      motorPin1Channel = MOTOR_L1_PIN1_CHANNEL;
      motorPin2Channel = MOTOR_L1_PIN2_CHANNEL;
      break;
    case MOTOR_R1:
      motorPin1Channel = MOTOR_R1_PIN2_CHANNEL;
      motorPin2Channel = MOTOR_R1_PIN1_CHANNEL;
      break;
    case MOTOR_L2: 
      motorPin1Channel = MOTOR_L2_PIN2_CHANNEL;
      motorPin2Channel = MOTOR_L2_PIN1_CHANNEL;
      break;
    case MOTOR_R2: 
      motorPin1Channel = MOTOR_R2_PIN1_CHANNEL;
      motorPin2Channel = MOTOR_R2_PIN2_CHANNEL;
      break;
    default:
		return;
  }

  if(direction)  // Backward
  {
    ledcWrite(motorPin1Channel,0);
    ledcWrite(motorPin2Channel,speed);
  }else{         // Forward
    ledcWrite(motorPin1Channel,speed);
    ledcWrite(motorPin2Channel,0);
  }
  
}


