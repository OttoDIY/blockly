/*
 * @Author: your name
 * @Date: 2021-03-17 08:35:31
 * @LastEditTime: 2022-04-15 10:45:45
 * @LastEditors: DESKTOP-H5SE9D0
 * @Description: In User Settings Edit
 * @FilePath: \recomon\recomon.ino
 */
#include <Arduino.h>
#include <Wire.h>
#include <MRT_Friends_esp32.h>
#include "MRT_Friends_esp32_Motor.h"
#include <MRT_Friends_esp32_IRremote.h>

#define MOTORTEST 1

/*
 * 选择遥控接收器的接口
 * IN1 IN2 IN3 IN4 IN5
 * OUT1 OUT2 OUT3 OUT4 OUT5
 **/
IRrecv irrecv1(IN1);
int remote_button;

void setup()
{
    MRT_Friends_init();
    /* 
注意初始化马达，不然会报错，而且错误难于跟踪，坑爹！如果不初始化，报如下错误

Rebooting...
E (107) psram: PSRAM ID read error: 0xffffffff
Remote control test...
relese
/home/runner/work/esp32-arduino-lib-builder/esp32-arduino-lib-builder/esp-idf/components/freertos/queue.c:1442 (xQueueGenericReceive)- assert failed!
abort() was called at PC 0x40089e5d on core 1

错误追踪分析
Remote control test... 代表初始化正常
relese 自己的打印语句，说明触发了按钮释放
接着就出现错误重启，就是在执行马达语句的时候没有对马达初始化
*/
    DcMotor_init(); 
    Serial.begin(115200);
    irrecv1.enableIRIn();
    recommon_flag = 1;
    Serial.println("Remote control test...");
}

void loop()
{

    if (irrecv1.mrtRemoteStateCheck(remote_button, 44))
    {
        // 上键被按下
        Serial.println("up");
// 前进
#if MOTORTEST
        setDcMotor(1, 0, 100);
        setDcMotor(2, 0, 100);
        setDcMotor(3, 0, 100);
        setDcMotor(4, 0, 100);
#endif
    }
    if (irrecv1.mrtRemoteStateCheck(remote_button, 62))
    {
        // 下键被按下
        Serial.println("down");
#if MOTORTEST
        setDcMotor(1, 1, 100);
        setDcMotor(2, 1, 100);
        setDcMotor(3, 1, 100);
        setDcMotor(4, 1, 100);
#endif
    }
    if (irrecv1.mrtRemoteStateCheck(remote_button, 63))
    {
        // 左键被按下
        Serial.println("left");
#if MOTORTEST
        setDcMotor(1, 1, 100);
        setDcMotor(2, 0, 100);
        setDcMotor(3, 1, 100);
        setDcMotor(4, 0, 100);
#endif
    }
    if (irrecv1.mrtRemoteStateCheck(remote_button, 61))
    {
        // 右键被按下
        Serial.println("right");
#if MOTORTEST
        setDcMotor(1, 0, 100);
        setDcMotor(2, 1, 100);
        setDcMotor(3, 0, 100);
        setDcMotor(4, 1, 100);
#endif
    }
    if (irrecv1.mrtRemoteStateCheck(remote_button, 53))
    {
        // 按键释放
        Serial.println("relese");
#if MOTORTEST
        setDcMotor(1, 0, 0);
        setDcMotor(2, 0, 0);
        setDcMotor(3, 0, 0);
        setDcMotor(4, 0, 0);
#endif
    }

    remote_button = irrecv1.mrtRemoteLoop();
}
