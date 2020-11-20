/*
 * morpx_protocol_types.h
 *
 *  Created on: 2019年9月3日
 *      Author: ysq
 */

#ifndef PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_TYPES_H_
#define PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_TYPES_H_

#include "SimpleList.h"
#include <stdint.h>
#include <string.h>

#define PROTOCOL_SINGLE_BUFFER_SIZE 40
#define PROTOCOL_BUFFER_DEEP        1

//Error Type
#define MU_OK                         0x00
#define MU_FAIL                       0x01
#define MU_WRITE_TIMEOUT              0x02
#define MU_READ_TIMEOUT               0x03
#define MU_CHECK_ERROR                0x04
#define MU_UNKNOW_PARAM               0x10
#define MU_UNKNOW_PROTOCOL            0x11
#define MU_SLAVE_OK                   0xE0
#define MU_SLAVE_FAIL                 0xE1
#define MU_SLAVE_UNKNOW               0xE2
#define MU_SLAVE_TIMEOUT              0xE3
#define MU_SLAVE_CHECK_ERROR          0xE4
#define MU_SLAVE_LENGTH_ERROR         0xE5
#define MU_SLAVE_UNKNOW_COMMAND       0xE6
#define MU_SLAVE_UNKNOW_REG_ADDRESS   0xE7
#define MU_SLAVE_UNKNOW_REG_VALUE     0xE8
#define MU_SLAVE_READ_ONLY            0xE9
#define MU_SLAVE_RESTART_ERROR        0xEA

typedef size_t port_addr_t;
typedef uint8_t dev_addr_t;

struct pkg_t {
  size_t len;
  uint8_t buf[PROTOCOL_SINGLE_BUFFER_SIZE];
};

typedef SimpleQueue<pkg_t, PROTOCOL_BUFFER_DEEP> data_queue_t;
struct device_t {
  dev_addr_t dev_addr;
  data_queue_t data_q;
};

typedef SimpleNode<device_t> device_node_t;
typedef SimpleList<device_node_t> device_list_t;
struct port_t {
  port_addr_t port_addr;
  device_list_t device_list;
};
typedef SimpleNode<port_t> port_node_t;
typedef SimpleList<port_node_t> port_list_t;

#endif /* PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_TYPES_H_ */
