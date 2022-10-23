/**
  @file     IRremote.h
  @version  v2.5.0
  @date     2017.03.08
  @details  IR receiver \n
*/
//******************************************************************************
// IRremote
// Version 2.0.1 June, 2015
// Copyright 2009 Ken Shirriff
// For details, see http://arcfn.com/2009/08/multi-protocol-infrared-remote-library.html
// Edited by Mitra to add new controller SANYO
//
// Interrupt code based on NECIRrcv by Joe Knapp
// http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1210243556
// Also influenced by http://zovirl.com/2008/11/12/building-a-universal-remote-with-an-arduino/
//
// JVC and Panasonic protocol added by Kristian Lauszus (Thanks to zenwheel and other people at the original blog post)
// LG added by Darryl Smith (based on the JVC protocol)
// Whynter A/C ARC-110WD added by Francesco Meschia
//******************************************************************************

//在线模式不需要这个文件，屏蔽掉
//----------------------------
#if ONLINE_MODE

#else
//在线模式不需要这个文件，屏蔽掉
//----------------------------


#ifndef MRT_Friends_esp32_IRremote_h
#define MRT_Friends_esp32_IRremote_h

//------------------------------------------------------------------------------
// The ISR header contains several useful macros the user may wish to use
//
#include "MRT_Friends_esp32_IRremoteInt.h"

//------------------------------------------------------------------------------
// Supported IR protocols
// Each protocol you include costs memory and, during decode, costs time
// Disable (set to 0) all the protocols you do not need/want!
//
#define DECODE_RC5           1
#define SEND_RC5             1

#define DECODE_RC6           1
#define SEND_RC6             1

#define DECODE_NEC           1
#define SEND_NEC             1

#define DECODE_SONY          1
#define SEND_SONY            1

#define DECODE_PANASONIC     1
#define SEND_PANASONIC       1

#define DECODE_JVC           1
#define SEND_JVC             1

#define DECODE_SAMSUNG       1
#define SEND_SAMSUNG         1

#define DECODE_WHYNTER       1
#define SEND_WHYNTER         1

#define DECODE_AIWA_RC_T501  1
#define SEND_AIWA_RC_T501    1

#define DECODE_LG            1
#define SEND_LG              1

#define DECODE_SANYO         1
#define SEND_SANYO           0 // NOT WRITTEN

#define DECODE_MITSUBISHI    1
#define SEND_MITSUBISHI      0 // NOT WRITTEN

#define DECODE_DISH          0 // NOT WRITTEN
#define SEND_DISH            1

#define DECODE_SHARP         0 // NOT WRITTEN
#define SEND_SHARP           1

#define DECODE_DENON         1
#define SEND_DENON           1

#define DECODE_PRONTO        0 // This function doe not logically make sense
#define SEND_PRONTO          1

/* MRT IR receiver를 위해 추가 */
#define DECODE_MRT           1
#define SEND_MRT             1

//------------------------------------------------------------------------------
// When sending a Pronto code we request to send either the "once" code
//                                                   or the "repeat" code
// If the code requested does not exist we can request to fallback on the
// other code (the one we did not explicitly request)
//
// I would suggest that "fallback" will be the standard calling method
// The last paragraph on this page discusses the rationale of this idea:
//   http://www.remotecentral.com/features/irdisp2.htm
//
#define PRONTO_ONCE        false
#define PRONTO_REPEAT      true
#define PRONTO_FALLBACK    true
#define PRONTO_NOFALLBACK  false

//------------------------------------------------------------------------------
// An enumerated list of all supported formats
// You do NOT need to remove entries from this list when disabling protocols!
//
typedef
enum {
  UNKNOWN      = -1,
  UNUSED       =  0,
  RC5,
  RC6,
  NEC,
  SONY,
  PANASONIC,
  JVC,
  SAMSUNG,
  WHYNTER,
  AIWA_RC_T501,
  LG,
  SANYO,
  MITSUBISHI,
  DISH,
  SHARP,
  DENON,
  PRONTO,
  MRT
}
decode_type_t;


//------------------------------------------------------------------------------
// Set DEBUG to 1 for lots of lovely debug output
//
#define DEBUG  0

//------------------------------------------------------------------------------
// Debug directives
//
#if DEBUG
#	define DBG_PRINT(...)    Serial.print(__VA_ARGS__)
#	define DBG_PRINTLN(...)  Serial.println(__VA_ARGS__)
#else
#	define DBG_PRINT(...)
#	define DBG_PRINTLN(...)
#endif

//------------------------------------------------------------------------------
// Mark & Space matching functions
//
int  MATCH       (int measured, int desired) ;
int  MATCH_MARK  (int measured_ticks, int desired_us) ;
int  MATCH_SPACE (int measured_ticks, int desired_us) ;

//------------------------------------------------------------------------------
// Results returned from the decoder
//
class decode_results
{
  public:
    decode_type_t          decode_type;  // UNKNOWN, NEC, SONY, RC5, ...
    unsigned int           address;      // Used by Panasonic & Sharp [16-bits]
    unsigned long          value;        // Decoded value [max 32-bits]
    int                    bits;         // Number of bits in decoded value
    volatile unsigned int  *rawbuf;      // Raw intervals in 50uS ticks
    int                    rawlen;       // Number of records in rawbuf
    int                    overflow;     // true iff IR raw code too long
};

//------------------------------------------------------------------------------
// Decoded value for NEC when a repeat code is received
//
#define REPEAT 0xFFFFFFFF

//------------------------------------------------------------------------------
// Main class for receiving IR
//



class IRrecv
{
  public:
    /**
         @brief   생성자
         @param   int recvpin   :  IR receiver Pin 번호
    */
    IRrecv (int recvpin) ;
    /**
           @brief   생성자
           @param   int recvpin   :  IR receiver Pin 번호
           @param   int blinkpin  :  LED Pin 번호
    */
    IRrecv (int recvpin, int blinkpin);

    /**
           @brief   IR 처리시 led 깜빡임 여부 설정
           @param   int blinkflag    \n
                                   1:enable, 0:disable
    */
    void  blink13    (int blinkflag) ;
    /**
           @brief   수신된 IR message 디코드

           @param   decode_results *results   :  디코드된 결과값
           @return  int                     0 :  데이터가 준비되지 않음, \n
                                            1 :  데이터가 준비됨.
    */
    int   decode     (decode_results *results) ;

    /**
           @brief   IR receiver 초기화 (타이머 인터럽트 세팅)
    */
    void  enableIRIn ( ) ;
    /**
           @brief   새로운 IR 시그널 받았는지 여부 확인
           @return  bool        true: idle상태, false:새 시그널 받음.
    */
    bool  isIdle     ( ) ;
    /**
           @brief    Restart the ISR state machine
    */
    void  resume     ( ) ;

    
    /*
       2018. 02. 21 추가
    */
    void mrtRemoteDecode(decode_results *results);
    int mrtRemoteLoop();
    bool mrtRemoteStateCheck(int button_state, int get_state);
    bool mrtRemoteStateCheckCount(int button_state, int get_state, int count, int count_time);
    int mrtRemoteIdCheck(void);
    int mrtRemoteButtonCheck(void);

    // MRT add
    int board_id;

  private:
    /**
         @brief   raw code를 32-bit hash코드로 변환.
         @param   decode_results *results   :  hash code 결과가 들어갈 구조체
         @return  long                    0 :  미변환, \n
                                          1 :  변환완료
    */
    long  decodeHash (decode_results *results) ;
    /**
       @brief   값 비교
       @param   unsigned int oldval   :  비교값1
       @param   unsigned int newval   :  비교값2
       @return  int                 0 :  비교값1의 오차범위(20%) 적용 값 보다 비교값2가 작을 때 \n
                                    2 :  비교값2의 오차범위(20%) 적용 값 보다 비교값1이 작을때 \n
                                    1 :  그밖의 경우
    */
    int   compare    (unsigned int oldval, unsigned int newval) ;
    /**
           @brief   MRT용 decode 루틴
           @param   decode_results *results   :  decode결과 저장될 구조체
           @return  long                    0 :  비정상종료, \n
                                            1 :  정상종료
    */
    long  decodeMRT  (decode_results *results);
    //......................................................................
#		if (DECODE_RC5 || DECODE_RC6)
    // This helper function is shared by RC5 and RC6
    int  getRClevel (decode_results *results,  int *offset,  int *used,  int t1) ;
#		endif
#		if DECODE_RC5
    bool  decodeRC5        (decode_results *results) ;
#		endif
#		if DECODE_RC6
    bool  decodeRC6        (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_NEC
    bool  decodeNEC        (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_SONY
    bool  decodeSony       (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_PANASONIC
    bool  decodePanasonic  (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_JVC
    bool  decodeJVC        (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_SAMSUNG
    bool  decodeSAMSUNG    (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_WHYNTER
    bool  decodeWhynter    (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_AIWA_RC_T501
    bool  decodeAiwaRCT501 (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_LG
    bool  decodeLG         (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_SANYO
    bool  decodeSanyo      (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_MITSUBISHI
    bool  decodeMitsubishi (decode_results *results) ;
#		endif
    //......................................................................
#		if DECODE_DISH
    bool  decodeDish (decode_results *results) ; // NOT WRITTEN
#		endif
    //......................................................................
#		if DECODE_SHARP
    bool  decodeSharp (decode_results *results) ; // NOT WRITTEN
#		endif
    //......................................................................
#		if DECODE_DENON
    bool  decodeDenon (decode_results *results) ;
#		endif

    uint8_t mrtRemotePacket[14];
    uint8_t *mrtRemotePoint;
    uint8_t mrtRemoteButtonState[15][6] = {
      { 1, 0, 1, 0, 1, 1 },	// Release		0
      { 0, 0, 1, 1, 0, 1 },	// Up			1
      { 0, 1, 1, 1, 1, 1 },	// Down			2
      { 1, 1, 1, 1, 1, 1 },	// Left			3
      { 1, 0, 1, 1, 1, 1 },	// Right		4
      { 0, 1, 0, 0, 1, 1 },	// F1			5
      { 1, 1, 0, 0, 0, 1 },	// F2			6
      { 0, 0, 1, 0, 1, 1 },	// F3			7
      { 1, 0, 1, 0, 0, 1 },	// F4			8
      { 0, 1, 1, 0, 0, 1 },	// F5			9
      { 1, 1, 1, 0, 1, 1 },	// F6			10
      { 0, 1, 1, 0, 1, 1 },	// Up-Left		11
      { 0, 0, 1, 1, 1, 1 },	// Up-Right		12
      { 1, 1, 0, 0, 1, 1 },	// Down-Left	13
      { 1, 0, 0, 1, 1, 1 }	// Down-Right	14
    };
    
    unsigned long remote_prevTime, remote_currTime;
    int remote_id, remote_button;
    int buff_count;
} ;

//------------------------------------------------------------------------------
// Main class for sending IR
//
class IRsend
{
  public:
    IRsend () { }

    void  custom_delay_usec (unsigned long uSecs);
    void  enableIROut 		(int khz) ;
    void  mark        		(unsigned int usec) ;
    void  space       		(unsigned int usec) ;
    void  sendRaw     		(const unsigned int buf[],  unsigned int len,  unsigned int hz) ;

    //......................................................................
#		if SEND_RC5
    void  sendRC5        (unsigned long data,  int nbits) ;
#		endif
#		if SEND_RC6
    void  sendRC6        (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_NEC
    void  sendNEC        (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_SONY
    void  sendSony       (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_PANASONIC
    void  sendPanasonic  (unsigned int address,  unsigned long data) ;
#		endif
    //......................................................................
#		if SEND_JVC
    // JVC does NOT repeat by sending a separate code (like NEC does).
    // The JVC protocol repeats by skipping the header.
    // To send a JVC repeat signal, send the original code value
    //   and set 'repeat' to true
    void  sendJVC        (unsigned long data,  int nbits,  bool repeat) ;
#		endif
    //......................................................................
#		if SEND_SAMSUNG
    void  sendSAMSUNG    (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_WHYNTER
    void  sendWhynter    (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_AIWA_RC_T501
    void  sendAiwaRCT501 (int code) ;
#		endif
    //......................................................................
#		if SEND_LG
    void  sendLG         (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_SANYO
    void  sendSanyo      ( ) ; // NOT WRITTEN
#		endif
    //......................................................................
#		if SEND_MISUBISHI
    void  sendMitsubishi ( ) ; // NOT WRITTEN
#		endif
    //......................................................................
#		if SEND_DISH
    void  sendDISH       (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_SHARP
    void  sendSharpRaw   (unsigned long data,  int nbits) ;
    void  sendSharp      (unsigned int address,  unsigned int command) ;
#		endif
    //......................................................................
#		if SEND_DENON
    void  sendDenon      (unsigned long data,  int nbits) ;
#		endif
    //......................................................................
#		if SEND_PRONTO
    void  sendPronto     (char* code,  bool repeat,  bool fallback) ;
#		endif
} ;

#endif


//在线模式不需要这个文件，屏蔽掉
//----------------------------
#endif
//在线模式不需要这个文件，屏蔽掉
//----------------------------
