/* ----------------------------------------------------------------------------
 *         SAM Software Package License
 * ----------------------------------------------------------------------------
 * Copyright (c) 2015, Atmel Corporation
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following condition is met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the disclaimer below.
 *
 * Atmel's name may not be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * DISCLAIMER: THIS SOFTWARE IS PROVIDED BY ATMEL "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE
 * DISCLAIMED. IN NO EVENT SHALL ATMEL BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 * OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ----------------------------------------------------------------------------
 */

#ifndef _SAM4C_
#define _SAM4C_

#if defined (__SAM4C4C_0__)
#include "sam4c4c_0.h"
#elif defined (__SAM4C4C_1__)
#include "sam4c4c_1.h"
#elif defined (__SAM4C8C_0__)
#include "sam4c8c_0.h"
#elif defined (__SAM4C8C_1__)
#include "sam4c8c_1.h"
#elif defined (__SAM4C16C_0__)
#include "sam4c16c_0.h"
#elif defined (__SAM4C16C_1__)
#include "sam4c16c_1.h"
#elif defined (__SAM4C32C_0__)
#include "sam4c32c_0.h"
#elif defined (__SAM4C32C_1__)
#include "sam4c32c_1.h"
#elif defined (__SAM4C32E_0__)
#include "sam4c32e_0.h"
#elif defined (__SAM4C32E_1__)
#include "sam4c32e_1.h"
#else
  #error Library does not support the specified device.
#endif

#endif /* _SAM4C_ */
