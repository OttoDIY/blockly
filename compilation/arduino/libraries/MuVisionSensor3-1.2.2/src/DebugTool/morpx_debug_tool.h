/*
 * morpx_debug_tool.h
 *
 *  Created on: 2019年10月11日
 *      Author: ysq
 */

#ifndef MUVISIONSENSOR_SRC_DEBUGTOOL_MORPX_DEBUG_TOOL_H_
#define MUVISIONSENSOR_SRC_DEBUGTOOL_MORPX_DEBUG_TOOL_H_

#define MORPX_DEBUG_ENABLE      0

#if MORPX_DEBUG_ENABLE != 0
#define ERROR_OUTPUT            1
#define WARNING_OUTPUT          1
// LOG_OUTPUT:  1 -> Simple Output
//              2 -> Complete Output
#define LOG_OUTPUT              2
#endif

#if LOG_OUTPUT != 0
#define IPRINTF(s,...)                  printf("\e[0;32mI:" s "\e[0m", ##__VA_ARGS__)
#else
#define IPRINTF(s,...)
#endif

#if WARNING_OUTPUT != 0
#define WPRINTF(s,...)                  printf("\e[0;33min file:%s, function:%s, line: %d\nW:" s "\e[0m",\
                                                __FILE__, \
                                                __PRETTY_FUNCTION__,\
                                                __LINE__, \
                                                ##__VA_ARGS__)
#else
#define WPRINTF(s,...)
#endif

#if ERROR_OUTPUT != 0
#define EPRINTF(s,...)                  printf("\e[0;31min file:%s, function:%s, line: %d\nE:" s "\e[0m",\
                                                __FILE__,\
                                                __PRETTY_FUNCTION__,\
                                                __LINE__,\
                                                ##__VA_ARGS__)
#else
#define EPRINTF(s,...)
#endif

#endif /* MUVISIONSENSOR_SRC_DEBUGTOOL_MORPX_DEBUG_TOOL_H_ */
