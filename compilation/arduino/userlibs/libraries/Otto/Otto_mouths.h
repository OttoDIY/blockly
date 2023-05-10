#ifndef Otto_mouths_h
#define Otto_mouths_h


//***********************************************************************************
//*********************************MOUTHS DEFINES************************************
//***********************************************************************************
const int NUMBER_OF_ELEMENTS = 31;
const unsigned long int Mouthtable[NUMBER_OF_ELEMENTS] PROGMEM = {
  0b00001100010010010010010010001100, //zero_code
  0b00000100001100000100000100001110, //one_code
  0b00001100010010000100001000011110, //two_code
  0b00001100010010000100010010001100, //three_code
  0b00010010010010011110000010000010, //four_code
  0b00011110010000011100000010011100, //five_code
  0b00000100001000011100010010001100, //six_code
  0b00011110000010000100001000010000, //seven_code
  0b00001100010010001100010010001100, //eight_code
  0b00001100010010001110000010001110, //nine_code
  0b00000000100001010010001100000000, //smile_code
  0b00000000111111010010001100000000, //happyOpen_code
  0b00000000111111011110000000000000, //happyClosed_code
  0b00010010101101100001010010001100, //heart_code
  0b00001100010010100001010010001100, //bigSurprise_code
  0b00000000000000001100001100000000, //smallSurprise_code
  0b00111111001001001001000110000000, //tongueOut_code
  0b00111111101101101101010010000000, //vamp1_code
  0b00111111101101010010000000000000, //vamp2_code
  0b00000000000000111111000000000000, //lineMouth_code
  0b00000000001000010101100010000000, //confused_code
  0b00100000010000001000000100000010, //diagonal_code
  0b00000000001100010010100001000000, //sad_code
  0b00000000001100010010111111000000, //sadOpen_code
  0b00000000001100011110110011000000, //sadClosed_code
  0b00000001000010010100001000000000, //okMouth_code
  0b00100001010010001100010010100001, //xMouth_code
  0b00001100010010000100000100000100, //interrogation_code
  0b00000100001000011100001000010000, //thunder_code
  0b00000000100001101101010010000000, //culito_code
  0b00000000011110100001100001000000  //angry_code
} ;

//Mouths sorted by numbers, and after, by happy to sad mouths
#define zero 				0
#define one  				1                
#define two     			      2               
#define three                    3  
#define four                     4
#define five                     5 
#define six                      6 
#define seven                    7  
#define eight                    8 
#define nine   				9
#define smile                    10                  
#define happyOpen      		11  
#define happyClosed 	           12  
#define heart      			13
#define bigSurprise              14  
#define smallSurprise 		15
#define tongueOut 			16
#define vamp1                    17  
#define vamp2                    18  
#define lineMouth        	      19
#define confused                 20  
#define diagonal       		21          
#define sad         		     	22
#define sadOpen 	                	23 
#define sadClosed 		  	24
#define okMouth                 25 
#define xMouth                  26
#define interrogation           27
#define thunder		      	28
#define culito       		    	29
#define angry 				30  
               
#endif