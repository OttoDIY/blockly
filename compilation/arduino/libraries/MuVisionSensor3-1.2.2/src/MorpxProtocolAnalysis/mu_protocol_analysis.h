/*
 * morpx_protocol_analysis.h
 *
 *  Created on: 2019年9月4日
 *      Author: ysq
 */

#ifndef PRODUCTS_MORPXPROTOCOLANALYSIS_MU_PROTOCOL_ANALYSIS_H_
#define PRODUCTS_MORPXPROTOCOLANALYSIS_MU_PROTOCOL_ANALYSIS_H_

#include "morpx_protocol_analysis.h"

//Protocol
#define MU_PROTOCOL_START             0xFF
#define MU_PROTOCOL_END               0xED
#define MU_PROTOCOL_COMMADN_SET       0x01
#define MU_PROTOCOL_COMMADN_GET       0x02
#define MU_PROTOCOL_MESSAGE           0x11

template<class STREAM, class HW_T>
class MuPtotocolAnalysis : public PtotocolAnalysis, protected STREAM {
 public:
  MuPtotocolAnalysis(HW_T uart, dev_addr_t address)
      : PtotocolAnalysis((port_addr_t) uart, address),
        STREAM(uart) {
  }
  virtual ~MuPtotocolAnalysis() {}
  MuPtotocolAnalysis(const MuPtotocolAnalysis&) = delete;
  MuPtotocolAnalysis& operator=(const MuPtotocolAnalysis &) = delete;

  virtual uint8_t receive(void) override;
  virtual uint8_t transmit(const pkg_t& pkg) override;

 private:
  uint8_t headMatch(uint8_t* buf);
  uint8_t bodyMatch(uint8_t* buf);
  uint8_t check(uint8_t* buf, size_t size);

 protected:
};

template<class STREAM, class HW_T>
uint8_t MuPtotocolAnalysis<STREAM, HW_T>::receive(void) {
  pkg_t data_buf;
  uint8_t* buf = data_buf.buf;
  dev_addr_t dev_addr = 0;
  // get protocol head
  uint8_t err = headMatch(buf);
  // get protocol body
  if (!err) {
    err = bodyMatch(buf);
  }
  if (err) {
    return err;
  }
  dev_addr = buf[2];
  data_buf.len = buf[1]-5;
  memcpy(buf, buf+3, data_buf.len);
  pushPackage(dev_addr, data_buf);
  return err;
}

template<class STREAM, class HW_T>
uint8_t MuPtotocolAnalysis<STREAM, HW_T>::transmit(const pkg_t& pkg) {
  if (pkg.len+5 > PROTOCOL_SINGLE_BUFFER_SIZE) { return 0xE3; }  // buffer too large
  uint8_t buffer[PROTOCOL_SINGLE_BUFFER_SIZE];
  buffer[0] = MU_PROTOCOL_START;
  buffer[1] = 5+pkg.len;
  buffer[2] = address_;
  memcpy(buffer+3, pkg.buf, pkg.len);
  buffer[3+pkg.len] = check(buffer, buffer[1]-2);
  buffer[4+pkg.len] = MU_PROTOCOL_END;
  STREAM::write(buffer, buffer[1]);
  return 0;
}

template<class STREAM, class HW_T>
uint8_t MuPtotocolAnalysis<STREAM, HW_T>::headMatch(uint8_t* buf) {
  while (1) {
    size_t len = STREAM::read(buf, 1);
    if (len) {
      if (buf[0] == MU_PROTOCOL_START) {
        return 0;
      } else {
        continue;
      }
    } else {
      return MU_READ_TIMEOUT;
    }
  }
}

template<class STREAM, class HW_T>
uint8_t MuPtotocolAnalysis<STREAM, HW_T>::bodyMatch(uint8_t* buf) {
  size_t len = STREAM::read(buf+1, 1);
  if (len) {
    len = STREAM::read(buf+2, buf[1]-2);
    if (len == uint8_t(buf[1]-2)) {
      if (buf[buf[1]-1] != MU_PROTOCOL_END) {
        // not end with 0xED
        return 0xE3;
      }
      if (buf[buf[1]-2] != check(buf, buf[1]-2)) {
        // check error
        return MU_CHECK_ERROR;
      }
      return 0;
    } else {
      // not enough data or data lost
      return MU_READ_TIMEOUT;
    }
  } else {
    return MU_READ_TIMEOUT;
  }
}
template<class STREAM, class HW_T>
uint8_t MuPtotocolAnalysis<STREAM, HW_T>::check(uint8_t* buf, size_t size) {
  uint32_t sum = 0;
  for (size_t i = 0; i < size; i++) {
    sum += buf[i];
  }
  return (uint8_t)(sum&0xFF);
}
#endif /* PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_ANALYSIS_H_ */
