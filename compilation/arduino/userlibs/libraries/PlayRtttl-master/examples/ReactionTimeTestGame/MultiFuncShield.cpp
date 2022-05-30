#include "MultiFuncShield.h"

#define BUTTON_SAMPLE_INTERVAL_SCALE  20
#define BUTTON_SAMPLE_INTERVAL  (1000 / BUTTON_SAMPLE_INTERVAL_SCALE)


MultiFuncShield MFS;

// Display specific variables

const byte LED[] = {LED_1_PIN, LED_2_PIN, LED_3_PIN, LED_4_PIN};

/* Segment byte maps for numbers 0 to 9 */
const byte SEGMENT_MAP_DIGIT[] = {0xC0,0xF9,0xA4,0xB0,0x99,0x92,0x82,0xF8,0X80,0X90};
/* Segment byte maps for alpha a-z */
const byte SEGMENT_MAP_ALPHA[] = {136, 131, 167, 161, 134, 142, 144, 139 ,207, 241, 182, 199, 182, 171, 163, 140, 152, 175, 146, 135, 227, 182, 182, 182, 145, 182};

/* Byte maps to select digit 1 to 4 */
const byte SEGMENT_SELECT[] = {0xF1,0xF2,0xF4,0xF8};
const char DISPLAY_OVERFLOW_ERROR = 'E';

const byte BLINK_ON_COUNT = 65;
const byte BLINK_OFF_COUNT = 20;

volatile byte displayMemory[4] = {255,255,255,255};
byte displayTimerScaler = 4;


// Sonar ranger specific variables

int sonarData[9];
byte sonarDataIndex = 0;

// LM35 specific variables

int lm35Data[8];
byte lm35DataIndex = 0;

// Misc methods and functions.
void isrWrapper ();
void WriteValueToSegment(byte Segment, byte Value);
byte AsciiToSegmentValue (byte ascii);
void writeBeeper (byte value);
byte readButton (byte btnIndex);
void writeLed(byte ledIdx, byte value);

int MedianOf9(int s0, int s1, int s2, int s3, int s4, int s5, int s6, int s7, int s8);
int MedianOf5(int s0, int s1, int s2, int s3, int s4);

// Pulse in counter port specifics.
uint8_t pulseInBit;
uint8_t pulseInPort;


void initShield()
{
    /* Set each LED pin to outputs */
  pinMode(LED[0], OUTPUT);
  pinMode(LED[1], OUTPUT);
  pinMode(LED[2], OUTPUT);
  pinMode(LED[3], OUTPUT);
  
  /* Turn all the LED's off */
  digitalWrite(LED[0], HIGH);
  digitalWrite(LED[1], HIGH);
  digitalWrite(LED[2], HIGH);
  digitalWrite(LED[3], HIGH);

  /* Set Segment display DIO pins to outputs */
  pinMode(LATCH_PIN,OUTPUT);
  pinMode(CLK_PIN,OUTPUT);
  pinMode(DATA_PIN,OUTPUT); 
  
  WriteValueToSegment(0,255);
  
  /* Set the buzzer pin to an output and turn the buzzer off */
  pinMode(BEEPER_PIN, OUTPUT);
  digitalWrite(BEEPER_PIN, HIGH);
}

// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::initialize(TimerOne *timer1Instance)
{
  initShield();
  
  timer1 = timer1Instance;
  timer1->attachInterrupt(isrWrapper, 1000); // effectively, 1000 times per second
}


void MultiFuncShield::initialize()
{
  initShield();
}

// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::initSonar(byte level)
{
  sonarSmoothingLevel = level;
  sonarDataIndex = 0;
  
  for (int i=0; i < 9; i++)
  {
    sonarData[i] = 0;
  }
}


// ----------------------------------------------------------------------------------------------------
unsigned int MultiFuncShield::getSonarDataCm(byte triggerPin, byte echoPin)
{
  uint8_t bit = digitalPinToBitMask(echoPin);
  uint8_t port = digitalPinToPort(echoPin);
  uint8_t stateMask = (HIGH ? bit : 0); 
  
  noInterrupts();
  digitalWrite(triggerPin, LOW); //Low, high and low level take a short time to TrigPin pulse
  delayMicroseconds(2);
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  interrupts();
 
  // wait for any previous pulse to end
  while ((*portInputRegister(port) & bit) == stateMask) ; 

  // wait for the pulse to start
  while ((*portInputRegister(port) & bit) != stateMask) ; 

  unsigned long timeStart = micros();
  // wait for the pulse to stop
  while ((*portInputRegister(port) & bit) == stateMask) ; 

  sonarData [sonarDataIndex] = ((micros() - timeStart) * 141) >> 13;  // (value * 1.00) / 58
  
  int medianReading;
  
  if (sonarSmoothingLevel == SMOOTHING_NONE)
  {
    medianReading  = sonarData [sonarDataIndex];
  }
  else if (sonarSmoothingLevel == SMOOTHING_MODERATE)
  {
      sonarDataIndex++;
      if (sonarDataIndex >= 5)
      {
        sonarDataIndex = 0;
      }
      medianReading = MedianOf5(sonarData[0], sonarData[1], sonarData[2], sonarData[3], sonarData[4]);
  }
  else
  {
      sonarDataIndex++;
      if (sonarDataIndex >= 9)
      {
        sonarDataIndex = 0;
      }
      medianReading = MedianOf9(sonarData[0], sonarData[1], sonarData[2], sonarData[3], sonarData[4], sonarData[5], sonarData[6], sonarData[7], sonarData[8]);
  }
  
  return medianReading;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::initLM35(byte level)
{
  lm35SmoothingLevel = level;
  lm35DataIndex = 0;
  
  for (int i=0; i < 8; i++)
  {
    lm35Data[i] = 0;
  }
}


// ----------------------------------------------------------------------------------------------------
int MultiFuncShield::getLM35Data()
{
  
  lm35Data [lm35DataIndex] = analogRead(LM35_PIN);
  
  int reading =0;
  
  if (lm35SmoothingLevel == SMOOTHING_NONE)
  {
    reading  = lm35Data [lm35DataIndex];
  }
  else if (lm35SmoothingLevel == SMOOTHING_MODERATE)
  {
      lm35DataIndex++;
      if (lm35DataIndex >= 4)
      {
        lm35DataIndex = 0;
      }
     
      for (int i=0; i<4; i++)
      {
        reading = reading + lm35Data[i];
      }
  }
  else
  {
      lm35DataIndex++;
      if (lm35DataIndex >= 8)
      {
        lm35DataIndex = 0;
      }

      for (int i=0; i<8; i++)
      {
        reading = reading + lm35Data[i];
      }
  }
  
  if (lm35SmoothingLevel == SMOOTHING_NONE)
  {
    return ((unsigned long)1250 * reading) >> 8;;
  }
  else if (lm35SmoothingLevel == SMOOTHING_MODERATE)
  {
    return ((unsigned long)1250 * reading) >> 10;
  }
  else
  {
    return ((unsigned long)1250 * reading) >> 11;
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::initPulseInCounter(byte pin, unsigned int timeOut, byte trigger)
{
  pulseInWriteInProgress = 1;

  pulseInBit = digitalPinToBitMask(pin);
  pulseInPort = digitalPinToPort(pin);
  
  pulseInTimeOut = timeOut;
  pulseInPin = pin;
  pulseInPeriodCounter =timeOut;
  pulseInPeriod_volatile =0;
  pulseInPeriod_safe =0;
  pulseInState =0;
  pulseInTrigger = trigger;
  pulseInTotalCount_volatile = 0;
  pulseInTotalCount_safe = 0;
  
  pulseInWriteInProgress = 0;
  pulseInEnabled = true;
}

void MultiFuncShield::disablePulseInCounter ()
{
  pulseInEnabled = false;
}

// ----------------------------------------------------------------------------------------------------
unsigned int MultiFuncShield::getPulseInPeriod()
{
  unsigned int period;
  
  pulseInReadInProgress = 1;
  period = pulseInPeriod_safe;
  pulseInReadInProgress =0;
  
  return period;
}


// ----------------------------------------------------------------------------------------------------
unsigned long MultiFuncShield::getPulseInTotalCount()
{
  unsigned long count;
  
  pulseInReadInProgress = 1;
  count = pulseInTotalCount_safe;
  pulseInReadInProgress =0;
  
  return count;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::resetPulseInTotalCount()
{
  pulseInWriteInProgress = 1;
  pulseInTotalCount_volatile = 0;
  pulseInTotalCount_safe = 0;
  pulseInWriteInProgress = 0;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::setPulseInTimeOut(unsigned int timeOut)
{
  pulseInWriteInProgress = 1;
  pulseInTimeOut = timeOut;
  pulseInWriteInProgress = 0;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::queueButton (byte button)
{
  if (buttonBufferCount <= sizeof (buttonBuffer))
  {
    buttonBuffer [button_write_pos] = button;
    buttonBufferCount++;
    button_write_pos++;
    
    if (button_write_pos >= sizeof (buttonBuffer))
    {
      button_write_pos = 0;
    }
  }
}


// ----------------------------------------------------------------------------------------------------
byte MultiFuncShield::getButton ()
{
  byte button = 0;
  
  if (buttonBufferCount > 0)
  {
    button = buttonBuffer [button_read_pos];
    buttonBufferCount--;
    button_read_pos++;
    
    if (button_read_pos >= sizeof (buttonBuffer))
    {
      button_read_pos = 0;
    }
  }
  
  return button;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::beep(unsigned int onPeriod, unsigned int offPeriod, byte cycles, unsigned int loopCycles, unsigned int loopDelayPeriod)
{
  cycles = cycles == 0 ? 1 : cycles;

  beeperModifyInProgress = 1;  // must do this first before changing volatile fields.
  
  if (onPeriod == 0)
  {
    digitalWrite(BEEPER_PIN, 1);  // turn off beeper immediately
  }
  
  beeperState = 0;
  beeperOnPeriodReloadValue = onPeriod * 10;
  beeperOffPeriodReloadValue = offPeriod * 10;
  beeperPeriodCounter = onPeriod * 10;
  
  beeperCycleReloadValue = cycles;
  beeperCycleCounter = cycles;
  
  beeperLoopCycleCounter = loopCycles;
  beeperLoopDelayPeriodReloadValue = loopDelayPeriod * 10;
  
  beeperModifyInProgress = 0; // must do this last.
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::setBeepOffPeriod(unsigned int offPeriod)
{
  beeperModifyInProgress = 1;  // must do this first before changing volatile fields.
  
  if (beeperState == 1)
  {
    if (offPeriod * 10 < beeperPeriodCounter)
    {
      beeperPeriodCounter = offPeriod * 10;
    }
  }
  
  beeperOffPeriodReloadValue = offPeriod * 10;
  beeperModifyInProgress = 0; // must do this last.
}


// ----------------------------------------------------------------------------------------------------
//void MultiFuncShield::setLedControlMask(byte controlMask)
//{
//  ledControlMask = controlMask;
//}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::writeLeds(byte leds, byte lit)
{
  if (lit)
  {
    ledState = ledState | leds;
    //ledControlMask = ledControlMask | leds;
  }
  else
  {
    ledState = ledState & (255 - leds);
    //ledControlMask = ledControlMask & (255 - leds);
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::blinkLeds(byte leds, byte enabled)
{
  if (enabled)
  {
    ledBlinkEnabled = ledBlinkEnabled | leds;
  }
  else
  {
    ledBlinkEnabled = ledBlinkEnabled & (255 - leds);
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::write(int integer)
{
  char displayText[5] = {' ',' ',' ',' ',0};
  
  if (integer > 9999 || integer < -999)
  {
    displayText[3] = DISPLAY_OVERFLOW_ERROR;
    write(displayText);
  }
  else if (integer == 0)
  {
    displayText[3] = '0';
    write (displayText);
  }
  else
  {
    byte sign = 0;
    if (integer < 0)
    {
      sign = 1;
      integer = integer * -1;
    }
    
    byte idx = 3;
    for (; idx >=0 && integer !=0; integer /= 10, idx--)
    {
      displayText[idx]=(integer % 10) + '0';
    }
    
    if (sign)
    {
      displayText[idx] = '-';
    }
    
    write (displayText);
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::write(float number, byte decimalPlaces)
{
  char outstr[7];
  dtostrf(number, 4, decimalPlaces, outstr);
 
  if (strlen(outstr) > 5)
  {
    outstr[0] = DISPLAY_OVERFLOW_ERROR;
    outstr[1] = 0;
  }
  write(outstr,1);
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::write(const char *text, byte rightJustify)
{
  byte displayBuf[] = {0,0,0,0}, *pBuf = displayBuf;
  
  byte idx =0;
  
  for (; *text != 0 && idx < sizeof(displayBuf); text++)
  {
    byte offset = 0;
    
    if (*text == '.')
    {
      if (idx > 0)
      {
        displayBuf[idx-1] = displayBuf[idx-1] & 127;
      }
      else
      {
        displayBuf[idx] = AsciiToSegmentValue(*text);
        idx++;
      }
    }
    else
    {
      displayBuf[idx] = AsciiToSegmentValue(*text);
      idx++;
    }
  }
  
  for (; idx < sizeof(displayBuf); idx++)
  {
    displayBuf[idx] = 255;
  }
  
  // Copy display buffer to display memory
  
  if (rightJustify)
  {
    // right justify
    int i_src = sizeof(displayBuf)-1;
    int i_dst = sizeof(displayMemory)-1;
    
    for (; i_src >= 0 && displayBuf[i_src] == 255; i_src--) ;
      
    for (; i_src >= 0 && i_dst >= 0; i_src--, i_dst--)
    {
      displayMemory[i_dst] = displayBuf[i_src];
    }
    
    for (; i_dst >= 0; i_dst--)
    {
      displayMemory[i_dst] = 255;
    }
  }
  // left justify
  else
  {
    for (int i =0; i < sizeof(displayBuf); i++)
    {
      displayMemory[i] = displayBuf[i];
    }
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::blinkDisplay(byte digits, byte enabled)
{
  if (enabled)
  {
    blinkEnabled = blinkEnabled | digits;
  }
  else
  {
    blinkEnabled = blinkEnabled & (255 - digits);
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::setTimer(unsigned long thousandths)
{
  timerWriteInProgress = 1;
  timer_volatile = thousandths;
  timerWriteInProgress = 0;
  
  timerReadInProgress = 1;
  timer_safe = thousandths;
  timerReadInProgress = 0;
}


// ----------------------------------------------------------------------------------------------------
unsigned long MultiFuncShield::getTimer()
{
  unsigned long timer;
  timerReadInProgress = 1;
  timer = timer_safe;
  timerReadInProgress = 0;

  return timer;
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::wait(unsigned long thousandths)
{
  setTimer(thousandths);
  while (getTimer()) __asm__("nop\n\t""nop\n\t""nop\n\t""nop\n\t");
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::isrCallBack()
{
  byte displayEnabled = 1;
  
  displayTimerScaler--;
  
  if (displayTimerScaler == 0)
  {
    displayTimerScaler = 4;
    
    // Global bink control
    if (blinkEnabled || ledBlinkEnabled)
    {
      blinkCounter++;
      if (blinkState)
      {
        displayEnabled = 1;
        if (blinkCounter > BLINK_ON_COUNT)
        {
          blinkState = 0;
          blinkCounter = 0;
          displayEnabled = 0;
        }
      }
      else
      {
        displayEnabled = 0;
        if (blinkCounter > BLINK_OFF_COUNT)
        {
          blinkState = 1;
          blinkCounter = 0;
          displayEnabled = 1;
        }
      }
    }
    
    // Digit display blink control
    if (blinkEnabled & (1 << displayIdx))
    {
      if (displayEnabled)
      {
        WriteValueToSegment(displayIdx, displayMemory[displayIdx]);
      }
      else
      {
        WriteValueToSegment(displayIdx, 255);
      }
    }
    else
    {
      WriteValueToSegment(displayIdx, displayMemory[displayIdx]);
    }
    
    displayIdx++;
    if (displayIdx > sizeof(displayMemory)-1)
    {
      displayIdx = 0;
    }
    
  
    // LED output and blink control.
    
    byte ledOutputNew = (ledState & (displayEnabled ? 255 : 0) & ledBlinkEnabled) | (ledState & ~ledBlinkEnabled);
    
    if (ledOutputNew != ledOutput)
    {
      for (byte ledIdx = 0; ledIdx < 4; ledIdx++)
      {
        if ((ledOutputNew ^ ledOutput) & (1 << ledIdx))    // only set LED if its state has changed
        {
          if (ledBlinkEnabled & (1 << ledIdx))
          {
            //digitalWrite(LED[ledIdx], !(displayEnabled && ledState & (1 << ledIdx)));
            writeLed(ledIdx, !(displayEnabled && ledState & (1 << ledIdx)));
          }
          else
          {
            //digitalWrite(LED[ledIdx], !(ledState & (1 << ledIdx)));
            writeLed(ledIdx, !(ledState & (1 << ledIdx)));
          }
        }
      }
      ledOutput = ledOutputNew;
    }
  }


  // Beeper control.
  
  if (!beeperModifyInProgress && beeperOnPeriodReloadValue)
  {    
    if (beeperPeriodCounter == 0)
    {
      switch (beeperState)
      {
        case 0:  // on period
              if (beeperOffPeriodReloadValue)
              {
                beeperPeriodCounter = beeperOffPeriodReloadValue;
                beeperState = 1;
                break;
              }
              // Fall thru to next state immediately.
        case 1:  // off period
              beeperCycleCounter--;
              if (beeperCycleCounter)
              {
                beeperPeriodCounter = beeperOnPeriodReloadValue;
                beeperState = 0;
                break;
              }
              else
              {
                beeperCycleCounter = beeperCycleReloadValue;
                beeperPeriodCounter = beeperLoopDelayPeriodReloadValue;
                beeperState = 2;
                
                if (beeperLoopDelayPeriodReloadValue)
                {  
                  break;
                }
              }
              // Fall thru to next state immediately.
        case 2:  // loop cycle delay period
              if (beeperLoopCycleCounter == 0)  // loop beeper indefinitely
              {
                beeperPeriodCounter = beeperOnPeriodReloadValue;
                beeperState = 0;
              }
              else
              {
                beeperLoopCycleCounter--;
                if (beeperLoopCycleCounter == 0)
                {          
                  beeperOnPeriodReloadValue = 0;    // beeper activity has now ended.
                  //digitalWrite(BEEPER_PIN, 1);
                  writeBeeper(1);
                }
                else
                {
                  beeperPeriodCounter = beeperOnPeriodReloadValue;
                  beeperState = 0;
                }
              }
              break;
      }
    }
    
    if (beeperPeriodCounter)
    {
      beeperPeriodCounter--;
    }
    
    if (beeperState == 0)
    {
      // beep on
      //digitalWrite(BEEPER_PIN, 0);
      writeBeeper(0);
    }
    else
    {
      // beep off
      //digitalWrite(BEEPER_PIN, 1);
      writeBeeper(1);
    }
  }
   

  // Bump button sample interval counter
  
  if (buttonSampleIntervalCounter++ >= BUTTON_SAMPLE_INTERVAL)
  {
    buttonSampleIntervalCounter =0;
    
    byte btnStateNow;
    
    for (int i=0; i < sizeof(buttonPins); i++)
    {
      //btnStateNow = !digitalRead(buttonPins[i]);
      btnStateNow = !readButton(i);
      
      // If button state has changed, action the change.
      if (buttonState[i] != btnStateNow)
      {
        // if button state changes to pressed, queue SHORT PRESS to buffer.
        if (btnStateNow)
        {
          queueButton((i+1) | BUTTON_PRESSED_IND);
        }
        else
        {
          // otherwise button state has changed to up, queue SHORT or LONG RELEASE state to buffer, and reset pressed time counter.
          if (buttonPressTime[i] > (1000 / BUTTON_SAMPLE_INTERVAL))
          {
            queueButton((i+1) | BUTTON_LONG_RELEASE_IND);
          }
          else
          {
            queueButton((i+1) | BUTTON_SHORT_RELEASE_IND);
          }
          buttonPressTime[i] = 0;
        }
        buttonState[i] = btnStateNow;
      }

      // if button state pressed, increment pressed time counter. Queue LONG PRESS to buffer, if button is held long.  
      if (btnStateNow)
      {
        if (buttonPressTime[i] > (1000 / BUTTON_SAMPLE_INTERVAL) && (buttonPressTime[i] & 3) == 0)
        {
          queueButton((i+1) | BUTTON_LONG_PRESSED_IND);
        }
        
        if (buttonPressTime[i] < 65535)
        {
          buttonPressTime[i]++;
        }
      }
    }    
  }

  // Pulse in processing
  
  if (pulseInEnabled && !pulseInWriteInProgress)
  {
    //byte pulseInStateNow = digitalRead(pulseInPin);
    byte pulseInStateNow = (*portInputRegister(pulseInPort) & pulseInBit ? 1 : 0);
    
    // Has the state of the pulse changed?
    if ((pulseInState != pulseInStateNow) && (pulseInStateNow == pulseInTrigger))
    {
      pulseInTotalCount_volatile++;
      
      pulseInPeriod_volatile = (pulseInPeriodCounter >= pulseInTimeOut ? 0 : pulseInPeriodCounter);
      pulseInPeriodCounter = 0;
    }
    else
    {
      if (pulseInPeriodCounter < pulseInTimeOut)
      {
        pulseInPeriodCounter++;
      }
      else
      {
        pulseInPeriod_volatile = 0;
      }
    }

    if (!pulseInReadInProgress)
    {
      pulseInPeriod_safe = pulseInPeriod_volatile;
      pulseInTotalCount_safe = pulseInTotalCount_volatile;
    }
      
    if (pulseInState != pulseInStateNow)
    {
      pulseInState = pulseInStateNow;
    }
  }

  // Bump the count down timer.
  if (timer_volatile && !timerWriteInProgress)
  {
    timer_volatile--;
  }
  
  if (!timerReadInProgress)
  {
    timer_safe = timer_volatile;
  }
  
  if (userInterrupt)
  {
    userInterrupt();
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::manualDisplayRefresh()
{
  WriteValueToSegment(displayIdx, displayMemory[displayIdx]);
  
  displayIdx++;
  if (displayIdx > sizeof(displayMemory)-1)
  {
    displayIdx = 0;
  }
}


// ----------------------------------------------------------------------------------------------------
void MultiFuncShield::manualButtonHandler()
{
  byte btnStateNow;
  
  for (int i=0; i < sizeof(buttonPins); i++)
  {
    btnStateNow = !digitalRead(buttonPins[i]);
    
    // If button state has changed, action the change.

    if (buttonState[i] != btnStateNow)
    {
      // if button state changes to pressed, queue SHORT PRESS to buffer.
      if (btnStateNow)
      {
        queueButton((i+1) | BUTTON_PRESSED_IND);
      }
      else
      {
        // otherwise button state has changed to up, queue SHORT RELEASE state to buffer.
        queueButton((i+1) | BUTTON_SHORT_RELEASE_IND);
      }
      buttonState[i] = btnStateNow;
    }
  }
}


// ----------------------------------------------------------------------------------------------------
void isrWrapper ()
{
  MFS.isrCallBack();
}


// ----------------------------------------------------------------------------------------------------
byte AsciiToSegmentValue (byte ascii)
{
  byte segmentValue = 182;
  
  if (ascii >= '0' && ascii <= '9')
  {
    segmentValue = SEGMENT_MAP_DIGIT[ascii - '0'];
  }
  else if (ascii >= 'a' && ascii <='z')
  {
    segmentValue = SEGMENT_MAP_ALPHA[ascii - 'a'];
  }
  else if (ascii >= 'A' && ascii <='Z')
  {
    segmentValue = SEGMENT_MAP_ALPHA[ascii - 'A'];
  }
  else
  {
    switch (ascii)
    {
      case '-':
        segmentValue = 191;
        break;
      case '.':
        segmentValue = 127;
        break;
      case '_':
        segmentValue = 247;
        break;
      case ' ':
        segmentValue = 255;
        break;
    }
  }
  
  return segmentValue;
}

// ----------------------------------------------------------------------------------------------------
int MedianOf5(int s0, int s1, int s2, int s3, int s4)
{
  int tmp;

  if (s1 > s2)
  {
    tmp = s1;
    s1 = s2;
    s2 = tmp;
  }
  
  if (s0 > s1)
  {
    tmp = s0;
    s0 = s1;
    s1 = tmp;
  }
  if (s3 > s4)
  {
    tmp = s3;
    s3 = s4;
    s4 = tmp;
  }
  
  if (s1 > s2)
  {
    tmp = s1;
    s1 = s2;
    s2 = tmp;
  }
  
  if (s0 > s3)
  {
    s3 = s0;
  }
  
  if (s1 > s4)
  {
    s1 = s4;
  }
  
  if (s1 > s3)
  {
    s3 = s1;
  }
  
  if (s2 > s3)
  {
    s2 = s3;
  }

  return s2;
}


// ----------------------------------------------------------------------------------------------------
// Find the median value, given nine data samples. 
int MedianOf9(int s0, int s1, int s2, int s3, int s4, int s5, int s6, int s7, int s8)
{
  int tmp;

  if (s1 > s2)
  {
    tmp = s1;
    s1 = s2;
    s2 = tmp;
  }
  if (s4 > s5)
  {
    tmp = s4;
    s4 = s5;
    s5 = tmp;
  }
  if (s7 > s8)
  {
    tmp = s7;
    s7 = s8;
    s8 = tmp;
  }
  
  if (s0 > s1)
  {
    tmp = s0;
    s0 = s1;
    s1 = tmp;
  }
  if (s3 > s4)
  {
    tmp = s3;
    s3 = s4;
    s4 = tmp;
  }
  if (s6 > s7)
  {
    tmp = s6;
    s6 = s7;
    s7 = tmp;
  }
  
  if (s1 > s2)
  {
    tmp = s1;
    s1 = s2;
    s2 = tmp;
  }
  if (s4 > s5)
  {
    tmp = s4;
    s4 = s5;
    s5 = tmp;
  }
  if (s7 > s8)
  {
    tmp = s7;
    s7 = s8;
    s8 = tmp;
  }
  
  if (s3 > s6)
  {
    tmp = s3;
    s3 = s6;
    s6 = tmp;
  }
  if (s4 > s7)
  {
    tmp = s4;
    s4 = s7;
    s7 = tmp;
  }
  if (s5 > s8)
  {
    s5 = s8;
  }
  if (s0 > s3)
  {
    tmp = s0;
    s3 = tmp;
  }
  
  if (s1 > s4)
  {
    tmp = s1;
    s1 = s4;
    s4 = tmp;
  }
  if (s2 > s5)
  {
    s2 = s5;
  }
  if (s3 > s6)
  {
    tmp = s3;
    s3 = s6;
    s6 = tmp;
  }
  
  if (s4 > s7)
  {
    s4 = s7;
  }
  if (s1 > s3)
  {
    s3 = s1;
  }
  
  if (s2 > s6)
  {
    tmp = s2;
    s2 = s6;
    s6 = tmp;
  }
  
  if (s2 > s3)
  {
    s3 = s2;
  }
  if (s4 > s6)
  {
    s4 = s6;
  }
  
  if (s3 > s4)
  {
    s4 = s3;
  }
  return s4;
}

/* ---------------------------------------------------------------------- */

#if defined(__AVR_ATmega328P__)      // Uno

  /* Write a value to one of the 4 digits of the display */
  void WriteValueToSegment(byte Segment, byte Value)
  {
    bitClear(PORTD, 4);

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTB, 0, !!(Value & (1 << (7 - i))));
    bitSet(PORTD, 7);
    bitClear(PORTD, 7);
    } 

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTB, 0, !!(SEGMENT_SELECT[Segment] & (1 << (7 - i))));
    bitSet(PORTD, 7);
    bitClear(PORTD, 7);          
    } 

    bitSet(PORTD, 4);
  }

  
  byte readButton (byte btnIndex)
  {
    switch (btnIndex)
    {
    case 0:
      return bitRead(PINC, 1);
    case 1:
      return bitRead(PINC, 2);
    case 2:
      return bitRead(PINC, 3);
    }
  }
  
  void writeBeeper (byte value)
  {
    bitWrite(PORTD, 3, value);
  }
  
  void writeLed(byte ledIdx, byte value)
  {
    switch (ledIdx)
    {
    case 0:
      bitWrite(PORTB, 5, value);
      break;
    case 1:
      bitWrite(PORTB, 4, value);
      break;
    case 2:
      bitWrite(PORTB, 3, value);
      break;
    case 3:
      bitWrite(PORTB, 2, value);
      break;
      }
  }

#elif defined(__AVR_ATmega32U4__)   // Leonardo

  /* Write a value to one of the 4 digits of the display */
  void WriteValueToSegment(byte Segment, byte Value)
  {
    bitClear(PORTD, 4);

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTB, 4, !!(Value & (1 << (7 - i))));
    bitSet(PORTE, 6);
    bitClear(PORTE, 6);
    } 

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTB, 4, !!(SEGMENT_SELECT[Segment] & (1 << (7 - i))));
    bitSet(PORTE, 6);
    bitClear(PORTE, 6);          
    } 

    bitSet(PORTD, 4);
  }

  
  byte readButton (byte btnIndex)
  {
    switch (btnIndex)
    {
    case 0:
      return bitRead(PINF, 6);
    case 1:
      return bitRead(PINF, 5);
    case 2:
      return bitRead(PINF, 4);
    }
  }
  
  void writeBeeper (byte value)
  {
    bitWrite(PORTD, 0, value);
  }
  
  void writeLed(byte ledIdx, byte value)
  {
    switch (ledIdx)
    {
    case 0:
      bitWrite(PORTC, 7, value);
      break;
    case 1:
      bitWrite(PORTD, 6, value);
      break;
    case 2:
      bitWrite(PORTB, 7, value);
      break;
    case 3:
      bitWrite(PORTB, 6, value);
      break;
      }
  }
  
#elif defined(__AVR_ATmega2560__) // Mega 2560

/* Write a value to one of the 4 digits of the display */
/*
void WriteValueToSegment(byte Segment, byte Value)
{
  digitalWrite(LATCH_PIN,LOW);
  shiftOut(DATA_PIN, CLK_PIN, MSBFIRST, Value); 
  shiftOut(DATA_PIN, CLK_PIN, MSBFIRST, SEGMENT_SELECT[Segment] );
  digitalWrite(LATCH_PIN,HIGH);
}
*/

  /* Write a value to one of the 4 digits of the display */
  void WriteValueToSegment(byte Segment, byte Value)
  {
    bitClear(PORTG, 5);

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTH, 5, !!(Value & (1 << (7 - i))));
    bitSet(PORTH, 4);
    bitClear(PORTH, 4);
    } 

    for (uint8_t i = 0; i < 8; i++)  {
    bitWrite(PORTH, 5, !!(SEGMENT_SELECT[Segment] & (1 << (7 - i))));
    bitSet(PORTH, 4);
    bitClear(PORTH, 4);          
    } 

    bitSet(PORTG, 5);
  }

  
  byte readButton (byte btnIndex)
  {
    switch (btnIndex)
    {
    case 0:
      return bitRead(PINF, 1);
    case 1:
      return bitRead(PINF, 2);
    case 2:
      return bitRead(PINF, 3);
    }
  }
  
  void writeBeeper (byte value)
  {
    bitWrite(PORTE, 5, value);
  }
  
  void writeLed(byte ledIdx, byte value)
  {
    switch (ledIdx)
    {
    case 0:
      bitWrite(PORTB, 7, value);
      break;
    case 1:
      bitWrite(PORTB, 6, value);
      break;
    case 2:
      bitWrite(PORTB, 5, value);
      break;
    case 3:
      bitWrite(PORTB, 4, value);
      break;
      }
  }
#endif
