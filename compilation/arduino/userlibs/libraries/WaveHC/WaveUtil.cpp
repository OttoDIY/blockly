
#if ARDUINO < 100
#include <WProgram.h>
#else // ARDUINO
#include <Arduino.h>
#endif // ARDUINO
#include <WaveUtil.h>
//------------------------------------------------------------------------------
/** Return the number of bytes currently free in RAM. */
int FreeRam(void) {
  extern int __bss_end;
  extern int *__brkval;
  int free_memory;
  if ((int)__brkval == 0) {
    // if no heap use from end of bss section
    free_memory = ((int)&free_memory) - ((int)&__bss_end);
  } else {
    // use from top of stack to heap
    free_memory = ((int)&free_memory) - ((int)__brkval);
  }
  return free_memory;
}
//------------------------------------------------------------------------------
/**
 * %Print a string in flash memory to the serial port.
 *
 * \param[in] str Pointer to string stored in flash memory.
 */
void SerialPrint_P(PGM_P str) {
  for (uint8_t c; (c = pgm_read_byte(str)); str++)
    Serial.write(c);
}
//------------------------------------------------------------------------------
/**
 * %Print a string in flash memory followed by a CR/LF.
 *
 * \param[in] str Pointer to string stored in flash memory.
 */
void SerialPrintln_P(PGM_P str) {
  SerialPrint_P(str);
  Serial.println();
}