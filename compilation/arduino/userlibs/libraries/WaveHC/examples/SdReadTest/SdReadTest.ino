// this sketch wiil do a read stress test on a SD card.
// run time is about 25 seconds

#include <avr/pgmspace.h>
#include <FatReader.h>
#include <WaveUtil.h>
SdReader card;

uint8_t cidDmp(void) {
  cid_t cid;
  if (!card.readCID(cid)) {
    putstring("readCID failed");
    sdError();
    return 0;
  }
  putstring("\nManufacturer ID: ");
  Serial.println(cid.mid, HEX);
  putstring("OEM ID: ");
  Serial.write(cid.oid[0]);
  Serial.write(cid.oid[1]);
  Serial.println();
  putstring("Product: ");
  for (uint8_t i = 0; i < 5; i++) {
    Serial.write(cid.pnm[i]);
  }
  putstring("\nVersion: ");
  Serial.print(cid.prv_n, DEC);
  Serial.write('.');
  Serial.println(cid.prv_m, DEC);
  putstring("Serial number: ");
  Serial.println(cid.psn);
  putstring("Manufacturing date: ");
  Serial.print(cid.mdt_month, DEC);
  Serial.write('/');
  Serial.println(2000 + cid.mdt_year_low + (cid.mdt_year_high << 4));
  Serial.println();
  return 1;
}
// print partition table
uint8_t partDmp(void) {
  part_t pt;
  putstring_nl("partion,boot,type,start,length");  
  for (uint8_t ip = 1; ip < 5; ip++) {
      if (!card.readData(0, PART_OFFSET + 16*(ip-1), (uint8_t *)&pt, 16)) {
        putstring("read partition table failed");
        sdError();
        return 0;
      }
      Serial.print(ip, DEC);
      Serial.write(',');
      Serial.print(pt.boot,HEX);
      Serial.write(',');
      Serial.print(pt.type, HEX);
      Serial.write(',');
      Serial.print(pt.firstSector);
      Serial.write(',');
      Serial.println(pt.totalSectors); 
  }
  return true;
}

void sdError(void) {
  putstring_nl("SD error");
  putstring("errorCode: ");
  Serial.println(card.errorCode(), HEX);
  putstring("errorData: ");
  Serial.println(card.errorData(), HEX);  
  return;
}
void setup(void) {
  Serial.begin(9600);
}

void loop(void) {
  while (Serial.read() >= 0) {}
  putstring_nl("\ntype any character to start");
  while (Serial.read() < 0) {}
  uint32_t t0 = millis();
  uint8_t r = card.init(0);
  uint32_t d = millis()- t0;
  if (!r) {
    putstring_nl("\ncard.init failed");
    sdError();
    return;
  }
  putstring("\ninit time: ");
  Serial.println(d);
    putstring("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      putstring_nl("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      putstring_nl("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      putstring_nl("SDHC");
      break;
    default:
      putstring_nl("Unknown");
  }
  
  if(!cidDmp()) return;
  uint32_t size = card.cardSize();
  if (size == 0) {
    putstring("cardSize failed");
    sdError();
    return;
  }
  putstring("card size: ");
  Serial.print(size);
  putstring(" (512 byte blocks)\n");
  if(!partDmp()) return;
  uint16_t nTest = 20000;
  uint16_t nRead = 0;
  uint8_t buf[2];
  d = size/nTest;
  uint32_t b;
  putstring_nl("Read test starting. Please Wait.");
  uint32_t m0 = millis();
  for (nRead = 0; nRead < nTest; nRead++){
    b = nRead*d;
    if (!(r = card.readData(b, 510, buf, 2))) break;
    if (nRead == 0 && (buf[0] != 0X55 || buf[1] != 0XAA)) {
      putstring("Invalid block zero signature: ");
      Serial.print(buf[0], HEX);
      Serial.write(',');
      Serial.println(buf[1], HEX);
    }
  }
  uint32_t m1 = millis();
  putstring("\nRead ");
  Serial.print(nRead);
  putstring_nl(" blocks");
  putstring("mills: ");
  Serial.println(m1 - m0);
  if(r) {
    putstring_nl("\nDone");
  }
  else {
    putstring_nl("\nRead Failure");
    putstring("lbn: ");
    Serial.println(b);  
    sdError();
  }
}
