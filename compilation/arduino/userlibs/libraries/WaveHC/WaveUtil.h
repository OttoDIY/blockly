

#ifndef WaveUtil_h
#define WaveUtil_h
#include <avr/pgmspace.h>

// ladayada uses this name
#define putstring(x) SerialPrint_P(PSTR(x))

// ladayada uses this name
#define putstring_nl(x) SerialPrintln_P(PSTR(x))

/** Store and print a string in flash memory.*/
#define PgmPrint(x) SerialPrint_P(PSTR(x))

/** Store and print a string in flash memory followed by a CR/LF.*/
#define PgmPrintln(x) SerialPrintln_P(PSTR(x))

int FreeRam(void);
void SerialPrint_P(PGM_P str);
void SerialPrintln_P(PGM_P str);
#endif // WaveUtil_h
