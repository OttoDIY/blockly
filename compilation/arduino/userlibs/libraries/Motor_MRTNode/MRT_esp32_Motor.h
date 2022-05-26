/*
 * @Author: Oscar F 
 * @Date: 2022-05-25
 * @LastEditors: DESKTOP-H5SE9D0
 * @Description: functions for use the MRT motors in the MRT node ESP32 board
 * @FilePath: 
 */

#ifndef _MRT_ESP32_MOTOR_H
#define _MRT_ESP32_MOTOR_H

#include <Arduino.h>

// use first channel of 16 channels (started from zero)
#define LEDC_CHANNEL_0     0
#define LEDC_CHANNEL_1     1
#define LEDC_CHANNEL_2     2
#define LEDC_CHANNEL_3     3
#define LEDC_CHANNEL_4     4
#define LEDC_CHANNEL_5     5
#define LEDC_CHANNEL_6     6
#define LEDC_CHANNEL_7     7

//Motor pins
#define MOTOR_L1_PIN1           2
#define MOTOR_L1_PIN2           15
#define MOTOR_R1_PIN1           19 
#define MOTOR_R1_PIN2           18
#define MOTOR_L2_PIN1           12
#define MOTOR_L2_PIN2           14
#define MOTOR_R2_PIN1           16
#define MOTOR_R2_PIN2           17

// MOTORS
#define MOTOR_L1       1
#define MOTOR_R1       2 
#define MOTOR_L2       3
#define MOTOR_R2       4

// Channels
#define MOTOR_L1_PIN1_CHANNEL       LEDC_CHANNEL_0  
#define MOTOR_L1_PIN2_CHANNEL       LEDC_CHANNEL_1
#define MOTOR_R1_PIN1_CHANNEL       LEDC_CHANNEL_2
#define MOTOR_R1_PIN2_CHANNEL       LEDC_CHANNEL_3
#define MOTOR_L2_PIN1_CHANNEL       LEDC_CHANNEL_4
#define MOTOR_L2_PIN2_CHANNEL       LEDC_CHANNEL_5
#define MOTOR_R2_PIN1_CHANNEL       LEDC_CHANNEL_6
#define MOTOR_R2_PIN2_CHANNEL       LEDC_CHANNEL_7

// use 13 bit precission for LEDC timer
#define LEDC_TIMER  8

// use 5000 Hz as a LEDC base frequency
#define LEDC_BASE_FREQ     5000

#define MOTOR_SPEED_MAX 255

void DcMotor_init(void);

/**
 * @description: DC Motor driven
 * @param {uint8_t} port  port number (1: ML1, 2: MR1, 3: ML2, 4: MR2)
 * @param {int} direction 0:Forward 1:Backward
 * @param {int} speed (0 ~ 255)
 * @return {*}
 */
void setDcMotor(uint8_t port, int direction, int speed);


#endif // MRT_MOTOR_H
