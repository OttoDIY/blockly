/*
 * morpx_protocol_analysis.h
 *
 *  Created on: 2019年9月4日
 *      Author: ysq
 */

#ifndef PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_ANALYSIS_H_
#define PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_ANALYSIS_H_

#include "morpx_protocol_types.h"

class PtotocolAnalysis {
 public:
  PtotocolAnalysis(port_addr_t uart,
                   dev_addr_t address);
  virtual ~PtotocolAnalysis();
  PtotocolAnalysis(const PtotocolAnalysis&) = delete;
  PtotocolAnalysis& operator=(const PtotocolAnalysis &) = delete;

  static void portListShow(void) {
printf("port_list_:0x%x\n",(size_t)&port_list_);
printf("  ├─size:%u\n",port_list_.size());
    port_node_t* port_node = port_list_.front();
    while (port_node) {
printf("  └─port_node:0x%x\n", (size_t)port_node);
printf("  │ ├─port_addr:0x%x\n", port_node->element_.port_addr);
printf("  │ └─device_list:0x%x\n", (size_t)&port_node->element_.device_list);
printf("  │   ├─size:%u\n",port_node->element_.device_list.size());
      device_node_t* dev_node = port_node->element_.device_list.front();
      while (dev_node) {
printf("  │   └─dev_node:0x%x\n", (size_t)dev_node);
printf("  │   │ ├─port_addr:0x%x\n", dev_node->element_.dev_addr);
printf("  │   │ └─data_q:0x%x\n", (size_t)&dev_node->element_.data_q);
printf("  │   │   ├─size:%u\n  │   │   └─", dev_node->element_.data_q.size());
        dev_node->element_.data_q.showMessage();
        dev_node = dev_node->next_;
      }
      port_node = port_node->next_;
    }
  }

  virtual uint8_t receive() = 0;
  virtual uint8_t transmit(const pkg_t& pkg) = 0;
  size_t size() { return device_node_.element_.data_q.size(); }
  pkg_t& popPackage() { return device_node_.element_.data_q.pop(); }
  pkg_t& peekPackage() { return device_node_.element_.data_q.peek(); }
  void flush() { device_node_.element_.data_q.clear(); }

 private:
  void registerPort(port_addr_t uart,
                    dev_addr_t address);
  void releasePort();

 protected:
  void pushPackage(dev_addr_t dev_addr, const pkg_t& pkg);
  static port_list_t port_list_;
  port_node_t* port_node_ = nullptr;
  device_node_t device_node_;
  dev_addr_t address_;
};



#endif /* PRODUCTS_MORPXPROTOCOLANALYSIS_MORPX_PROTOCOL_ANALYSIS_H_ */
