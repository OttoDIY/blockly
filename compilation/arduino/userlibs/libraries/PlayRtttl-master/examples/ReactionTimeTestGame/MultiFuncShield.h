#include "TimerOne.h"

#ifndef MultiFuncShield_h_
#define MultiFuncShield_h_

#include "Arduino.h"

#define ON  1
#define OFF  0

#define LED_1_PIN     13
#define LED_2_PIN     12
#define LED_3_PIN     11
#define LED_4_PIN     10
#define POT_PIN       0
#define BEEPER_PIN    3
#define BUTTON_1_PIN  A1
#define BUTTON_2_PIN  A2
#define BUTTON_3_PIN  A3
#define LATCH_PIN     4
#define CLK_PIN       7
#define DATA_PIN      8
#define LM35_PIN      A4

#define DIGIT_1  1
#define DIGIT_2  2
#define DIGIT_3  4
#define DIGIT_4  8
#define DIGIT_ALL  15

#define LED_1  1
#define LED_2  2
#define LED_3  4
#define LED_4  8
#define LED_ALL  15

// button state indicators
#define BUTTON_PRESSED_IND        (0 << 6)
#define BUTTON_SHORT_RELEASE_IND  (1 << 6)
#define BUTTON_LONG_PRESSED_IND   (2 << 6)
#define BUTTON_LONG_RELEASE_IND   (3 << 6)

#define BUTTON_1_PRESSED        (1 |  BUTTON_PRESSED_IND)
#define BUTTON_1_SHORT_RELEASE  (1 |  BUTTON_SHORT_RELEASE_IND)
#define BUTTON_1_LONG_PRESSED   (1 |  BUTTON_LONG_PRESSED_IND)
#define BUTTON_1_LONG_RELEASE   (1 |  BUTTON_LONG_RELEASE_IND)

#define BUTTON_2_PRESSED        (2 |  BUTTON_PRESSED_IND)
#define BUTTON_2_SHORT_RELEASE  (2 |  BUTTON_SHORT_RELEASE_IND)
#define BUTTON_2_LONG_PRESSED   (2 |  BUTTON_LONG_PRESSED_IND)
#define BUTTON_2_LONG_RELEASE   (2 |  BUTTON_LONG_RELEASE_IND)

#define BUTTON_3_PRESSED        (3 |  BUTTON_PRESSED_IND)
#define BUTTON_3_SHORT_RELEASE  (3 |  BUTTON_SHORT_RELEASE_IND)
#define BUTTON_3_LONG_PRESSED   (3 |  BUTTON_LONG_PRESSED_IND)
#define BUTTON_3_LONG_RELEASE   (3 |  BUTTON_LONG_RELEASE_IND)

#define SMOOTHING_NONE          0
#define SMOOTHING_MODERATE      1
#define SMOOTHING_STRONG        2


class MultiFuncShield
{

  public:
    // Pointer to user interrupt with frequency of 1khz.
    void (*userInterrupt)() = NULL;
    
    // Initializes this instance using a TimerOne instance. A 1khz interrupt is attached. 
    void initialize(TimerOne *timer1);
    
    // Initializes this instance, but interrupt based features are not available.
    void initialize();
    
    // For internal use only.
    void isrCallBack();

    // Initiates a millisecond countdown timer.
    void setTimer (unsigned long thousandths);

    // Gets the current value of the countdown timer.
    unsigned long getTimer();

    // Initiates and waits for millisecond countdown timer to reach 0.
    void wait(unsigned long thousandths);
    
    // Writes to the LED digit display.
    void write(const char *textstring, byte rightJustify =0);
    void write(int integer);
    void write(float number, byte decimalPlaces = 1);
    
    // Manually refreshes the Led digit display.
    // Not to be used whilst interrupt based features are available.
    void manualDisplayRefresh();
    
    // Blinks the digits on the LED digit display.
    void blinkDisplay(byte digits,           // use bitwise or, e.g. DIGIT_1 | DIGIT_2
                      byte enabled = ON      // turns on/off the blinking
                    );
    
    // Turns LEDs on or off.
    void writeLeds(byte leds,                // use bitwise or, e.g. LED_1 | LED_2
                   byte lit                  // ON or OFF
                   );

    // Blinks the LEDs.
    void blinkLeds(byte leds,                // use bitwise or, e.g. LED_1 | LED_2
                   byte enabled = ON         // ON or OFF
                   );
    
    // Engage the beeper, which is managed in the background. Period timing is in 100th of second
    void beep(unsigned int onPeriod = 20, unsigned int offPeriod = 0, byte cycles = 1, unsigned int loopCycles = 1 /* 0=indefinitely */, unsigned int loopDelayPeriod =0);

    // Use this to set the off period whilst the beeper is engaged,
    void setBeepOffPeriod(unsigned int offPeriod);

    // Queues a button action to the button queue, e.g BUTTON_1_PRESSED
    void queueButton (byte button);

    // Pulls a button action from the button queue.
    byte getButton();

    // Queues button short press and release actions. Long button presses are not supported, and long releases are reported as short releases.
    // Should not be used whilst interrupt based features are available.
    void manualButtonHandler();
    
    // Initializes the pulse counter. Used for counting pulses applied to an input pin. Max pulse frequency 500hz.
    void initPulseInCounter(byte pin = BUTTON_1_PIN,        // input pin
                            unsigned int timeOut = 3000,    // the number of milliseconds to wait for a pulse, before resetting pulse in period to 0.
                            byte trigger = LOW              // trigger counter on either rising or falling edge
                            );

    void disablePulseInCounter();
    
    // Gets the period of the most recent pulse (in milliseconds).
    unsigned int getPulseInPeriod();

    // Gets the total number pulses counted.
    unsigned long getPulseInTotalCount();

    // Resets the pulse counter to 0.
    void resetPulseInTotalCount();

    // Sets the pulse in timeout, which is the number of milliseconds to wait for a pulse, before resetting pulse in period to 0.
    void setPulseInTimeOut(unsigned int timeOut);

    // Initializes the sonar reading feature. Needs HC-SR04 sonar module.
    void initSonar(byte level = SMOOTHING_MODERATE); // level 0=none, 1=moderate, 2=strong.

    // Gets the distance measured in centimeters, using HC-SR04 sonar module.
    unsigned int getSonarDataCm(byte triggerPin, byte echoPin);

    // Initializes temperature reading feature. Needs LM35 sensor. Must remove jumper J1 from shield.
    void initLM35(byte level = SMOOTHING_MODERATE); // level 0=none, 1=moderate, 2=strong

    // Gets the temperature reading in 1 tenths of a centigrade.
    int getLM35Data();
    
  private:
    TimerOne *timer1;
    volatile byte timerReadInProgress = 0;
    volatile byte timerWriteInProgress = 0;
    
    const byte buttonPins[3] = {BUTTON_1_PIN, BUTTON_2_PIN, BUTTON_3_PIN};  // must correspond to button macros above
    
    volatile byte buttonBuffer[sizeof(buttonPins) * 2];
    volatile char buttonBufferCount = 0;
    volatile byte button_write_pos = 0;
    volatile byte button_read_pos = 0;
    
    unsigned int buttonSampleIntervalCounter =0;
    byte buttonState[sizeof(buttonPins)] = {0,0,0};    // current up or down state
    unsigned int buttonPressTime[sizeof(buttonPins)] = {0,0,0};
    
    volatile unsigned long timer_volatile = 0;    // count down timer 1000th of a second resolution.
    volatile unsigned long timer_safe = 0;
    
    volatile byte beeperModifyInProgress = 0;
    volatile byte beeperState =0;  // 0=on period; 1=off period
    volatile unsigned int beeperOnPeriodReloadValue =0;
    volatile unsigned int beeperOffPeriodReloadValue =0;
    volatile unsigned int beeperPeriodCounter = 0;
    volatile byte beeperCycleReloadValue = 0;
    volatile byte beeperCycleCounter =0;
    volatile unsigned int beeperLoopCycleCounter =0;
    volatile unsigned int beeperLoopDelayPeriodReloadValue =0;
    
    byte displayIdx = 0;
    byte blinkEnabled = 0;  // least significant bits mapped to display digits.
    byte blinkState = 0;
    byte blinkCounter = 0;
    
    //byte ledControlMask = 0;       // soft enable / disable LED. Disable LEDs here if using PWM from TImerOne library. 
    byte ledState =0;              // least significant bits mapped to LEDs
    byte ledBlinkEnabled =0;       // least significant bits mapped to LEDs
    byte ledOutput=0;              // current led outputs (taking into consideration blink)

    volatile byte pulseInEnabled = false;
    volatile byte pulseInReadInProgress =0;
    volatile byte pulseInWriteInProgress =0;
    
    volatile unsigned int pulseInTimeOut = 3000;  // time frame for measuring pulse period.
    volatile byte pulseInPin = BUTTON_1_PIN;
    volatile unsigned int pulseInPeriodCounter = 3000;
    volatile byte pulseInTrigger = LOW; // trigger on LOW or HIGH
    volatile unsigned int pulseInPeriod_volatile =0;
    volatile unsigned int pulseInPeriod_safe =0;
    volatile byte pulseInState =0;
    volatile unsigned long pulseInTotalCount_volatile = 0;
    volatile unsigned long pulseInTotalCount_safe = 0;
    
    byte sonarSmoothingLevel = SMOOTHING_MODERATE;
    byte lm35SmoothingLevel = SMOOTHING_MODERATE;
};

extern MultiFuncShield MFS;

// returns median of 5 data samples.
extern int MedianOf5(int s0, int s1, int s2, int s3, int s4);

// returns median of 9 data samples.
extern int MedianOf9(int s0, int s1, int s2, int s3, int s4, int s5, int s6, int s7, int s8);

#endif

