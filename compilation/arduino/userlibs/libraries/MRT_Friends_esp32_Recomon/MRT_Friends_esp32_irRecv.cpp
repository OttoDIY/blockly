/**
 * @file     irRecv.cpp
 * @version  v1.0.6
 * @date     2018.03.16
 * @details  IR receiver로부터 받은 메시지 처리
 */
#if ONLINE_MODE

#else

#include "MRT_Friends_esp32_IRremote.h"
#include "MRT_Friends_esp32_IRremoteInt.h"
#include <Arduino.h>

//+=============================================================================
// Interrupt Service Routine - Fires every 50uS // 50us 进入一次定时器中断
// TIMER2 interrupt code to collect raw data.	// 注意这个中断函数使用的是TIMER0--郭巧注释
// Widths of alternating SPACE, MARK are recorded in rawbuf.
// Recorded in ticks of 50uS [microseconds, 0.000050 seconds]
// 'rawlen' counts the number of entries recorded so far.
// First entry is the SPACE between transmissions.
// As soon as a the first [SPACE] entry gets long:
//   Ready is set; State switches to IDLE; Timing of SPACE continues.
// As soon as first MARK arrives:
//   Gap width is recorded; Ready is cleared; New logging starts
//
uint8_t  irdata;
void IRAM_ATTR tim0Interrupt()
{
	// Read if IR Receiver -> SPACE [xmt LED off] or a MARK [xmt LED on]
	// digitalRead() is very slow. Optimisation is possible, but makes the code unportable
	uint8_t  irdata = (uint8_t)digitalRead(irparams.recvpin);

	irparams.timer++;  // One more 50uS tick
	if (irparams.rawlen >= RAWBUF)  irparams.rcvstate = STATE_OVERFLOW ;  // Buffer overflow

	switch(irparams.rcvstate) {
		//......................................................................
		case STATE_IDLE: // In the middle of a gap
			if (irdata == MARK) {
				if (irparams.timer < GAP_TICKS)  {  // Not big enough to be a gap.
					irparams.timer = 0;

				} else {
					// Gap just ended; Record duration; Start recording transmission
					// 前导码，低电平触发，这个不记录rawbuf中，再次进中断的时候就开始记录高电平了,遥控器正常信号第一步就执行这个
					irparams.overflow                  = false;
					irparams.rawlen                    = 0;
					irparams.rawbuf[irparams.rawlen++] = irparams.timer;
					irparams.timer                     = 0;
					irparams.rcvstate                  = STATE_MARK; // 
				}
			}
			break;
		//......................................................................
		case STATE_MARK:  // Timing Mark
			if (irdata == SPACE) {   // Mark ended; Record time
				irparams.rawbuf[irparams.rawlen++] = irparams.timer;
				irparams.timer                     = 0;
				irparams.rcvstate                  = STATE_SPACE;
			}
			break;
		//......................................................................
		case STATE_SPACE:  // Timing Space
			if (irdata == MARK) {  // Space just ended; Record time
				irparams.rawbuf[irparams.rawlen++] = irparams.timer;
				irparams.timer                     = 0;
				irparams.rcvstate                  = STATE_MARK;

			} else if (irparams.timer > GAP_TICKS) {  // Space
					// A long Space, indicates gap between codes
					// Flag the current code as ready for processing
					// Switch to STOP
					// Don't reset timer; keep counting Space width
					irparams.rcvstate = STATE_STOP;
			}
			break;
		//......................................................................
		case STATE_STOP:  // Waiting; Measuring Gap
		 	if (irdata == MARK)  irparams.timer = 0 ;  // Reset gap timer
		 	break;
		//......................................................................
		case STATE_OVERFLOW:  // Flag up a read overflow; Stop the State Machine
			irparams.overflow = true;
			irparams.rcvstate = STATE_STOP;
		 	break;
	}
}

decode_results results1;

hw_timer_t *tim0 = NULL;

//+=============================================================================
// Decodes the received IR message
// Returns 0 if no data ready, 1 if data ready.
// Results of decoding are stored in results
//
/**
 * @brief   수신된 IR message 디코드
 *
 * @param   decode_results *results   :  디코드된 결과값
 * @return  int                     0 :  데이터가 준비되지 않음, \n
 *                                  1 :  데이터가 준비됨.
 */
int IRrecv::decode(decode_results *results)
{
	results->rawbuf = irparams.rawbuf;
	results->rawlen = irparams.rawlen;

	results->overflow = irparams.overflow;

	if (irparams.rcvstate != STATE_STOP)
		return false;
#if DECODE_MRT
	DBG_PRINTLN("Attemption MRT decode");
	if (decodeMRT(results))
		return true;
#endif // DECODE_MRT

	// decodeHash returns a hash on any input.
	// Thus, it needs to be last in the list.
	// If you add any decodes, add them before this.
	if (decodeHash(results))
		return true;

	// Throw away and start over
	resume();
	return false;
}

//=============================================================================
/**
 * @brief   생성자
 * @param   int recvpin   :  IR receiver Pin 번호
 */
IRrecv::IRrecv(int recvpin)
{
	irparams.recvpin = recvpin;
	irparams.blinkflag = 0;
}

/**
 * @brief   생성자
 * @param   int recvpin   :  IR receiver Pin 번호
 * @param   int blinkpin  :  LED Pin 번호
 */
IRrecv::IRrecv(int recvpin, int blinkpin)
{
	irparams.recvpin = recvpin;
	irparams.blinkpin = blinkpin;
	pinMode(blinkpin, OUTPUT);
	irparams.blinkflag = 0;
}

// extern void IRAM_ATTR tim0Interrupt();
//+=============================================================================
// initialization
//
/**
 * @brief   IR receiver 초기화 (타이머 인터럽트 세팅)
 */
void IRrecv::enableIRIn()
{
	//======================================开启定时器，定时时间为50us=======================================
	/**
	 * @description:
	 * @param {uint8_t} num --- 定时器编号，ESP32 芯片包含两个硬件定时器组。每组有两个通用硬件定时器。
	 * 它们都是基于 16 位预分频器和 64 位自动重载功能的向上/向下计数器的 64 位通用定时器。
	 * @param {uint16_t} divider --- 分频系数 每个定时器都以 APB 时钟（缩写 APB_CLK，频率通常为 80 MHz）作为基础时钟
	 * @param {bool} countUp --- 是否为向上计数
	 * @return {*} 返回一个计时器结构体指针 hw_timer_t *
	 */
	tim0 = timerBegin(0, 80, true);
	/**
	 * @description: 开启定时器中断
	 * @param {hw_timer_t} *timer ---  目标定时器 ( 计时器结构体指针 hw_timer_t * )
	 * @param void (*fn)(void) -- 中断函数入口地址
	 * @param {bool} edge --- 中断边沿触发 : 是否跳变沿触发中断 定时器中断触发方式有: 电平触发中断(level type) 边缘触发中断(edge type)
	 * @return {*}
	 */
	timerAttachInterrupt(tim0, &tim0Interrupt, true);
	/**
	 * @description: 配置报警计数器保护值timerAlarmWrite
	 * @param {hw_timer_t} *timer --- 目标定时器
	 * @param {uint64_t} alarm_value --- 报警保护值
	 * @param {bool} autoreload --- 是否开启自动重载
	 * @return {*}
	 */
	timerAlarmWrite(tim0, 50, true);	
	/**
	 * @description: 使能定时器报警
	 * @param {hw_timer_t} *timer
	 * @return {*}
	 */
	timerAlarmEnable(tim0);
	//=================================================================================================

	// Initialize state machine variables
	irparams.rcvstate = STATE_IDLE;
	irparams.rawlen = 0;

	// Set pin modes
	pinMode(irparams.recvpin, INPUT);
}

//+=============================================================================
// Enable/disable blinking of pin 13 on IR processing
//
/**
 * @brief   IR 처리시 led 깜빡임 여부 설정
 * @param   int blinkflag   \n
 *                          1:enable, 0:disable
 */
void IRrecv::blink13(int blinkflag)
{
	irparams.blinkflag = blinkflag;
	// if (blinkflag)
	// 	pinMode(BLINKLED, OUTPUT);
}

//+=============================================================================
// Return if receiving new IR signals
//
/**
 * @brief   새로운 IR 시그널 받았는지 여부 확인
 * @return  bool        true  : idle상태, \n
 *                      false : 새 시그널 받음.
 */
bool IRrecv::isIdle()
{
	return (irparams.rcvstate == STATE_IDLE || irparams.rcvstate == STATE_STOP) ? true : false;
	// return (irparams.rcvstate == STATE_IDLE) ? true : false;
}
//+=============================================================================
// Restart the ISR state machine
//
/**
 * @brief    Restart the ISR state machine
 */
void IRrecv::resume()
{
	irparams.rcvstate = STATE_IDLE;
	irparams.rawlen = 0;
}

//+=============================================================================
// hashdecode - decode an arbitrary IR code.
// Instead of decoding using a standard encoding scheme
// (e.g. Sony, NEC, RC5), the code is hashed to a 32-bit value.
//
// The algorithm: look at the sequence of MARK signals, and see if each one
// is shorter (0), the same length (1), or longer (2) than the previous.
// Do the same with the SPACE signals.  Hash the resulting sequence of 0's,
// 1's, and 2's to a 32-bit value.  This will give a unique value for each
// different code (probably), for most code systems.
//
// http://arcfn.com/2010/01/using-arbitrary-remotes-with-arduino.html
//
// Compare two tick values, returning 0 if newval is shorter,
// 1 if newval is equal, and 2 if newval is longer
// Use a tolerance of 20%
//
/**
 * @brief   값 비교
 * @param   unsigned int oldval   :  비교값1
 * @param   unsigned int newval   :  비교값2
 * @return  int                 0 :  비교값1의 오차범위(20%) 적용 값 보다 비교값2가 작을 때 \n
 *                              2 :  비교값2의 오차범위(20%) 적용 값 보다 비교값1이 작을때 \n
 *                              1 :  그밖의 경우
 */
int IRrecv::compare(unsigned int oldval, unsigned int newval)
{
	if (newval < oldval * .8)
		return 0;
	else if (oldval < newval * .8)
		return 2;
	else
		return 1;
}

//+=============================================================================
// Use FNV hash algorithm: http://isthe.com/chongo/tech/comp/fnv/#FNV-param
// Converts the raw code values into a 32-bit hash code.
// Hopefully this code is unique for each button.
// This isn't a "real" decoding, just an arbitrary value.
//
#define FNV_PRIME_32 16777619
#define FNV_BASIS_32 2166136261
/**
 * @brief   raw code를 32-bit hash코드로 변환.
 * @param   decode_results *results   :  hash code 결과가 들어갈 구조체
 * @return  long                    0 :  미변환, \n
 *                                  1 :  변환완료
 */
long IRrecv::decodeHash(decode_results *results)
{
	long hash = FNV_BASIS_32;

	// Require at least 6 samples to prevent triggering on noise
	if (results->rawlen < 6)
		return false;

	for (int i = 1; (i + 2) < results->rawlen; i++)
	{
		int value = compare(results->rawbuf[i], results->rawbuf[i + 2]);
		// Add value into the hash
		hash = (hash * FNV_PRIME_32) ^ value;
	}

	results->value = hash;
	results->bits = 32;
	results->decode_type = UNKNOWN;

	return true;
}

/**
 * @brief   MRT용 decode 루틴
 * @param   decode_results *results   :  decode결과 저장될 구조체
 * @return  long                    0 :  비정상종료, \n
 *                                  1 :  정상종료
 */
long IRrecv::decodeMRT(decode_results *results)
{
	long data = 0;
	int capnum;
	int bitsum = 0;
	int howmany;

	// int offset = 1; // header mark position
	// Initial mark
	if (!MATCH_MARK(results->rawbuf[1], MRT_HDR_MARK))
	{
		return false;
	}
	// Initial space
	/*
	if (!MATCH_SPACE(results->rawbuf[2], MRT_HDR_SPACE)) {
	   return false;
	}
	*/
	// END Space
	if (!MATCH_SPACE(results->rawbuf[irparams.rawlen - 2], MRT_END_SPACE))
	{
		return false;
	}
	// End Mark
	if (!MATCH_MARK(results->rawbuf[irparams.rawlen - 1], MRT_END_MARK))
	{
		return false;
	}

	capnum = (irparams.rawlen - 6) / 2; // total capturednumber - six(2end, 2start, 1m )
	switch (capnum)
	{
	case 1: // 8 bit
		// sample[5] // Initial MARK
		howmany = round((float)results->rawbuf[5] / 7);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[4] // Initial SPACE
		howmany = round((float)results->rawbuf[4] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		break;
	case 2: // 10 bit
		// sample[7] // Initial MARK
		howmany = round((float)results->rawbuf[7] / 7);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[6] // Initial SPACE
		howmany = round((float)results->rawbuf[6] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		// sample[5] // Initial MARK
		howmany = round((float)results->rawbuf[5] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[4] // Initial SPACE
		howmany = round((float)results->rawbuf[4] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		break;

	case 3: // 12 bit
		// sample[9] // Initial MARK
		howmany = round((float)results->rawbuf[9] / 7);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[8] // Initial SPACE
		howmany = round((float)results->rawbuf[8] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		// sample[7] // Initial MARK
		howmany = round((float)results->rawbuf[7] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[6] // Initial SPACE
		howmany = round((float)results->rawbuf[6] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		// sample[5] // Initial MARK
		howmany = round((float)results->rawbuf[5] / 8);
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data = (data << 1) | 1;
			}
		}
		// sample[4] // Initial SPACE
		howmany = round((float)results->rawbuf[4] / 8);
		bitsum += howmany;
		if (howmany > 0)
		{
			for (int i = 0; i < howmany; i++)
			{
				data <<= 1;
			}
		}
		break;
	}

	// sample[3] // Initial MARK
	howmany = round((float)results->rawbuf[3] / 8);
	bitsum += howmany;
	if (howmany > 0)
	{
		for (int i = 0; i < howmany; i++)
		{
			data = (data << 1) | 1;
		}
	}
	// sample[2] -pulse // Initial SPACE
	howmany = round(((float)results->rawbuf[2] - 12) / 8);
	bitsum += howmany;
	if (howmany > 0)
	{
		for (int i = 0; i < howmany; i++)
		{
			data <<= 1;
		}
	}

	//////////////////////////////

	// Success
	/*
	results->bits = (offset - 1) / 2;
	if (results->bits < 12) {
	  results->bits = 0;
	  return ERR;
	}
  */

	results->bits = 10;
	results->value = data;
	results->decode_type = MRT;

	return true;
}

/*********************
 * 2018. 02. 21 추가 *
 *********************/
// MRT 리모컨 디코더
void IRrecv::mrtRemoteDecode(decode_results *results)
{
	buff_count = results->rawlen;
	int value = 0;
	int checkSum = 0;
	int packetCount = 0;
	mrtRemotePoint = mrtRemotePacket;

	if (5 < buff_count && buff_count < 15) // 정상 데이터 패킷 길이
	{

		for (int i = 1; i < buff_count; i++)
		{

			checkSum += results->rawbuf[i] * USECPERTICK;
		}

		// 遥控器一个信号的总时间us范围
		// RF遥控信号的总时间一般接近6.4ms,所以开始区间由6400改成6200
		if (6200 < checkSum && checkSum < 6700)
		{

			for (int i = 1; i < buff_count; i++)
			{
				int value = results->rawbuf[i] * USECPERTICK;
				packetCount = (value + 100) / 400; // 가중치로 보정;

				for (int j = i; j < packetCount + i; j++)
				{
					if (i & 1)
						*(mrtRemotePoint) = 1;
					else
						*(mrtRemotePoint) = 0;

					mrtRemotePoint++;
				}
			} // for (int i = 1; i < count; i++)
		}	  // if (6400 < checkSum && checkSum < 6700)
	}		  // if (count > 5)
}
// long count=0;
int IRrecv::mrtRemoteLoop()
{
  int remote_button=0;
 // static int temp_button=0,temp_button1=0;
  static long ir_count=0;
  remote_currTime = millis();
 
  if (remote_currTime - remote_prevTime > 350) {
    remote_button = 0x35;
    remote_prevTime = remote_currTime;
  }
  
  else {
    if (this->decode(&results1)) {
     
      this->mrtRemoteDecode(&results1);
      remote_id = this->mrtRemoteIdCheck();
      // board_id是0的话代表主板没有设置好id
      if(board_id==0){
        // 按下是遥控器的F4则设置id
        if(mrtRemoteStateCheck(this->mrtRemoteButtonCheck(),37))
        {
          board_id = remote_id;
        }
      }
      if(board_id == remote_id){
		remote_button =  this->mrtRemoteButtonCheck();
	  }
      else {
		remote_button = 0;
		Serial.print("received recomon id error:");
		Serial.println(remote_id);
	  }

      remote_prevTime = remote_currTime;
      this->resume();
    }
  }
         // Serial1.print("ir_remote_button=");
         // Serial1.println(remote_button);
  
	 if( remote_button==53||remote_button==0){
          if(remote_button==53){ ir_count++;} 
		  
		// if(count>5){count=0;}
		 // Serial1.print("ir_count=");
         // Serial1.println(ir_count);
      }
     else {ir_count=0;/*Serial1.println("ir");*/}
 
    if(ir_count>1){remote_button=0;
      }
  
  return remote_button;
}

bool IRrecv::mrtRemoteStateCheck(int button_state, int get_state)
{
	if (button_state == get_state)
		return true;
	else
		return false;
}

// MRT 리모컨 ID 확인
int IRrecv::mrtRemoteIdCheck(void)
{
	int remoteId;
	mrtRemotePoint = mrtRemotePacket;

	remoteId = (*(mrtRemotePoint + 8) * 1) + (*(mrtRemotePoint + 9) * 2) + (*(mrtRemotePoint + 10) * 4) + 1;

	return remoteId;
}

bool IRrecv::mrtRemoteStateCheckCount(int button_state, int get_state, int cnt, int time)
{
	unsigned long startTime = millis();
	unsigned int times = time * 1000;
	uint16_t detectCnt = 0;
	bool result = false;

	while (millis() - startTime <= times)
	{
		if (button_state == get_state)
		{
			delay(times / cnt);
			detectCnt++;
		}

		if (detectCnt >= cnt)
		{
			result = true;
			break;
		}
	}

	return result;
}

// MRT 리모컨 버튼 확인
int IRrecv::mrtRemoteButtonCheck(void)
{
	mrtRemotePoint = mrtRemotePacket;
	uint8_t getButtonState[6];
	int i = 0, j = 0;

	// Serial1.print("rev: ");
	for (i = 0; i < 6; i++)
	{
		getButtonState[i] = *(mrtRemotePoint + i + 2);
		// Serial1.print(getButtonState[i]);
	}
	// Serial1.println();

	for (i = 0; i < 15; i++)
	{

		if (j == 6)
			break;
		else
		{
			for (j = 0; j < 6; j++)
			{
				if (mrtRemoteButtonState[i][j] != getButtonState[j])
					break;
			}
		}
	}

	// Serial1.print("i=");

	switch (i - 1)
	{
	case 0:
		return 0x35;
		break; // 53
	case 1:
		return 0x2C;
		break; // 44
	case 2:
		return 0x3E;
		break; // 62
	case 3:
		return 0x3F;
		break; // 63
	case 4:
		return 0x3D;
		break; // 61
	case 5:
		return 0x32;
		break; // 50
	case 6:
		return 0x23;
		break; // 35
	case 7:
		return 0x34;
		break; // 52
	case 8:
		return 0x25;
		break; // 37
	case 9:
		return 0x26;
		break; // 38
	case 10:
		return 0x37;
		break; // 55
	case 11:
		return 0x36;
		break; // 54
	case 12:
		return 0x3C;
		break; // 60
	case 13:
		return 0x33;
		break; // 51
	case 14:
		return 0x39;
		break; // 57
	default:
		return 0;
		break;
	}
}

#endif