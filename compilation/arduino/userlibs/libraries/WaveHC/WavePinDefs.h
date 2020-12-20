/**
 * \file
 * Pin definitions
 */
#include <ArduinoPins.h>
#ifndef WavePinDefs_h
#define WavePinDefs_h

// SPI pin definitions

/** SPI slave select pin. Warning: SS may be redefined as another pin
 but the hardware SS_PIN must be set to output mode before any calls to
 WaveHC functions. The SS_PIN can then be used as a general output pin */
#define SS SS_PIN

/** SPI master output, slave input pin. */
#define MOSI MOSI_PIN

/** SPI master input, slave output pin. */
#define MISO MISO_PIN

/** SPI serial clock pin. */
#define SCK SCK_PIN

//------------------------------------------------------------------------------
// DAC pin definitions

// LDAC may be connected to ground to save a pin
/** Set USE_MCP_DAC_LDAC to 0 if LDAC is grounded. */
#define USE_MCP_DAC_LDAC 1

// use arduino pins 2, 3, 4, 5 for DAC

// pin 2 is DAC chip select

/** Data direction register for DAC chip select. */
#define MCP_DAC_CS_DDR PIN2_DDRREG
/** Port register for DAC chip select. */
#define MCP_DAC_CS_PORT PIN2_PORTREG
/** Port bit number for DAC chip select. */
#define MCP_DAC_CS_BIT PIN2_BITNUM

// pin 3 is DAC serial clock
/** Data direction register for DAC clock. */
#define MCP_DAC_SCK_DDR PIN3_DDRREG
/** Port register for DAC clock. */
#define MCP_DAC_SCK_PORT PIN3_PORTREG
/** Port bit number for DAC clock. */
#define MCP_DAC_SCK_BIT PIN3_BITNUM

// pin 4 is DAC serial data in

/** Data direction register for DAC serial in. */
#define MCP_DAC_SDI_DDR PIN4_DDRREG
/** Port register for DAC clock. */
#define MCP_DAC_SDI_PORT PIN4_PORTREG
/** Port bit number for DAC clock. */
#define MCP_DAC_SDI_BIT PIN4_BITNUM

// pin 5 is LDAC if used
#if USE_MCP_DAC_LDAC
/** Data direction register for Latch DAC Input. */
#define MCP_DAC_LDAC_DDR PIN5_DDRREG
/** Port register for Latch DAC Input. */
#define MCP_DAC_LDAC_PORT PIN5_PORTREG
/** Port bit number for Latch DAC Input. */
#define MCP_DAC_LDAC_BIT PIN5_BITNUM
#endif // USE_MCP_DAC_LDAC

#endif // WavePinDefs_h