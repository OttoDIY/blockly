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
  ledcSetup(LEDC_CHANNEL_8, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_9, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_10, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_11, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_12, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_13, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_14, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcSetup(LEDC_CHANNEL_15, LEDC_BASE_FREQ, LEDC_TIMER);
  ledcAttachPin(MOTOR_L1_PIN1, LEDC_CHANNEL_8);
  ledcAttachPin(MOTOR_L1_PIN2, LEDC_CHANNEL_9);
  ledcAttachPin(MOTOR_R1_PIN1, LEDC_CHANNEL_10);
  ledcAttachPin(MOTOR_R1_PIN2, LEDC_CHANNEL_11);
  ledcAttachPin(MOTOR_L2_PIN1, LEDC_CHANNEL_12);
  ledcAttachPin(MOTOR_L2_PIN2, LEDC_CHANNEL_13);
  ledcAttachPin(MOTOR_R2_PIN1, LEDC_CHANNEL_14);
  ledcAttachPin(MOTOR_R2_PIN2, LEDC_CHANNEL_15);
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


