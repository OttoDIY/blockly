/*
 * morpx_uart_interface.cpp
 *
 *  Created on: 2019年9月4日
 *      Author: ysq
 */

#include <DebugTool/morpx_debug_tool.h>
#include <mu_uart_interface.h>

MuUart::MuUart(hw_port_t hw_port)
    : hw_port_(hw_port) {
}

MuUart::~MuUart() {
}

size_t MuUart::available(void) {
  return hw_port_->available();
}

size_t MuUart::read(uint8_t* buf, unsigned int length) {
  size_t ret = hw_port_->readBytes(buf, length);
#if MORPX_DEBUG_ENABLE && LOG_OUTPUT
  for (unsigned int i = 0; i < ret; ++i) {
    printf("0x%02x,", buf[i]);
  }
#endif
  return ret;
}

size_t MuUart::write(uint8_t* buf, unsigned int length) {
#if MORPX_DEBUG_ENABLE && LOG_OUTPUT
  for (unsigned int i = 0; i < length; ++i) {
    printf("%02x,", buf[i]);
  }
#endif
  return hw_port_->write(buf, length);
}

