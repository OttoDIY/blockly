/* ---------------------------------------------------------------------------- */
/*                  Atmel Microcontroller Software Support                      */
/*                       SAM Software Package License                           */
/* ---------------------------------------------------------------------------- */
/* Copyright (c) 2015, Atmel Corporation                                        */
/*                                                                              */
/* All rights reserved.                                                         */
/*                                                                              */
/* Redistribution and use in source and binary forms, with or without           */
/* modification, are permitted provided that the following condition is met:    */
/*                                                                              */
/* - Redistributions of source code must retain the above copyright notice,     */
/* this list of conditions and the disclaimer below.                            */
/*                                                                              */
/* Atmel's name may not be used to endorse or promote products derived from     */
/* this software without specific prior written permission.                     */
/*                                                                              */
/* DISCLAIMER:  THIS SOFTWARE IS PROVIDED BY ATMEL "AS IS" AND ANY EXPRESS OR   */
/* IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF */
/* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE   */
/* DISCLAIMED. IN NO EVENT SHALL ATMEL BE LIABLE FOR ANY DIRECT, INDIRECT,      */
/* INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT */
/* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,  */
/* OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF    */
/* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING         */
/* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, */
/* EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.                           */
/* ---------------------------------------------------------------------------- */

#ifndef _SAMG55_USART2_INSTANCE_
#define _SAMG55_USART2_INSTANCE_

/* ========== Register definition for USART2 peripheral ========== */
#if (defined(__ASSEMBLY__) || defined(__IAR_SYSTEMS_ASM__))
  #define REG_USART2_CR                      (0x40024200U) /**< \brief (USART2) USART Control Register */
  #define REG_USART2_MR                      (0x40024204U) /**< \brief (USART2) USART Mode Register */
  #define REG_USART2_IER                     (0x40024208U) /**< \brief (USART2) USART Interrupt Enable Register */
  #define REG_USART2_IDR                     (0x4002420CU) /**< \brief (USART2) USART Interrupt Disable Register */
  #define REG_USART2_IMR                     (0x40024210U) /**< \brief (USART2) USART Interrupt Mask Register */
  #define REG_USART2_CSR                     (0x40024214U) /**< \brief (USART2) USART Channel Status Register */
  #define REG_USART2_RHR                     (0x40024218U) /**< \brief (USART2) USART Receive Holding Register */
  #define REG_USART2_THR                     (0x4002421CU) /**< \brief (USART2) USART Transmit Holding Register */
  #define REG_USART2_BRGR                    (0x40024220U) /**< \brief (USART2) USART Baud Rate Generator Register */
  #define REG_USART2_RTOR                    (0x40024224U) /**< \brief (USART2) USART Receiver Time-out Register */
  #define REG_USART2_TTGR                    (0x40024228U) /**< \brief (USART2) USART Transmitter Timeguard Register */
  #define REG_USART2_FIDI                    (0x40024240U) /**< \brief (USART2) USART FI DI Ratio Register */
  #define REG_USART2_NER                     (0x40024244U) /**< \brief (USART2) USART Number of Errors Register */
  #define REG_USART2_IF                      (0x4002424CU) /**< \brief (USART2) USART IrDA Filter Register */
  #define REG_USART2_LINMR                   (0x40024254U) /**< \brief (USART2) USART LIN Mode Register */
  #define REG_USART2_LINIR                   (0x40024258U) /**< \brief (USART2) USART LIN Identifier Register */
  #define REG_USART2_LINBRR                  (0x4002425CU) /**< \brief (USART2) USART LIN Baud Rate Register */
  #define REG_USART2_CMPR                    (0x40024290U) /**< \brief (USART2) USART Comparison Register */
  #define REG_USART2_WPMR                    (0x400242E4U) /**< \brief (USART2) USART Write Protection Mode Register */
  #define REG_USART2_WPSR                    (0x400242E8U) /**< \brief (USART2) USART Write Protection Status Register */
  #define REG_USART2_RPR                     (0x40024300U) /**< \brief (USART2) Receive Pointer Register */
  #define REG_USART2_RCR                     (0x40024304U) /**< \brief (USART2) Receive Counter Register */
  #define REG_USART2_TPR                     (0x40024308U) /**< \brief (USART2) Transmit Pointer Register */
  #define REG_USART2_TCR                     (0x4002430CU) /**< \brief (USART2) Transmit Counter Register */
  #define REG_USART2_RNPR                    (0x40024310U) /**< \brief (USART2) Receive Next Pointer Register */
  #define REG_USART2_RNCR                    (0x40024314U) /**< \brief (USART2) Receive Next Counter Register */
  #define REG_USART2_TNPR                    (0x40024318U) /**< \brief (USART2) Transmit Next Pointer Register */
  #define REG_USART2_TNCR                    (0x4002431CU) /**< \brief (USART2) Transmit Next Counter Register */
  #define REG_USART2_PTCR                    (0x40024320U) /**< \brief (USART2) Transfer Control Register */
  #define REG_USART2_PTSR                    (0x40024324U) /**< \brief (USART2) Transfer Status Register */
#else
  #define REG_USART2_CR     (*(__O  uint32_t*)0x40024200U) /**< \brief (USART2) USART Control Register */
  #define REG_USART2_MR     (*(__IO uint32_t*)0x40024204U) /**< \brief (USART2) USART Mode Register */
  #define REG_USART2_IER    (*(__O  uint32_t*)0x40024208U) /**< \brief (USART2) USART Interrupt Enable Register */
  #define REG_USART2_IDR    (*(__O  uint32_t*)0x4002420CU) /**< \brief (USART2) USART Interrupt Disable Register */
  #define REG_USART2_IMR    (*(__I  uint32_t*)0x40024210U) /**< \brief (USART2) USART Interrupt Mask Register */
  #define REG_USART2_CSR    (*(__I  uint32_t*)0x40024214U) /**< \brief (USART2) USART Channel Status Register */
  #define REG_USART2_RHR    (*(__I  uint32_t*)0x40024218U) /**< \brief (USART2) USART Receive Holding Register */
  #define REG_USART2_THR    (*(__O  uint32_t*)0x4002421CU) /**< \brief (USART2) USART Transmit Holding Register */
  #define REG_USART2_BRGR   (*(__IO uint32_t*)0x40024220U) /**< \brief (USART2) USART Baud Rate Generator Register */
  #define REG_USART2_RTOR   (*(__IO uint32_t*)0x40024224U) /**< \brief (USART2) USART Receiver Time-out Register */
  #define REG_USART2_TTGR   (*(__IO uint32_t*)0x40024228U) /**< \brief (USART2) USART Transmitter Timeguard Register */
  #define REG_USART2_FIDI   (*(__IO uint32_t*)0x40024240U) /**< \brief (USART2) USART FI DI Ratio Register */
  #define REG_USART2_NER    (*(__I  uint32_t*)0x40024244U) /**< \brief (USART2) USART Number of Errors Register */
  #define REG_USART2_IF     (*(__IO uint32_t*)0x4002424CU) /**< \brief (USART2) USART IrDA Filter Register */
  #define REG_USART2_LINMR  (*(__IO uint32_t*)0x40024254U) /**< \brief (USART2) USART LIN Mode Register */
  #define REG_USART2_LINIR  (*(__IO uint32_t*)0x40024258U) /**< \brief (USART2) USART LIN Identifier Register */
  #define REG_USART2_LINBRR (*(__I  uint32_t*)0x4002425CU) /**< \brief (USART2) USART LIN Baud Rate Register */
  #define REG_USART2_CMPR   (*(__IO uint32_t*)0x40024290U) /**< \brief (USART2) USART Comparison Register */
  #define REG_USART2_WPMR   (*(__IO uint32_t*)0x400242E4U) /**< \brief (USART2) USART Write Protection Mode Register */
  #define REG_USART2_WPSR   (*(__I  uint32_t*)0x400242E8U) /**< \brief (USART2) USART Write Protection Status Register */
  #define REG_USART2_RPR    (*(__IO uint32_t*)0x40024300U) /**< \brief (USART2) Receive Pointer Register */
  #define REG_USART2_RCR    (*(__IO uint32_t*)0x40024304U) /**< \brief (USART2) Receive Counter Register */
  #define REG_USART2_TPR    (*(__IO uint32_t*)0x40024308U) /**< \brief (USART2) Transmit Pointer Register */
  #define REG_USART2_TCR    (*(__IO uint32_t*)0x4002430CU) /**< \brief (USART2) Transmit Counter Register */
  #define REG_USART2_RNPR   (*(__IO uint32_t*)0x40024310U) /**< \brief (USART2) Receive Next Pointer Register */
  #define REG_USART2_RNCR   (*(__IO uint32_t*)0x40024314U) /**< \brief (USART2) Receive Next Counter Register */
  #define REG_USART2_TNPR   (*(__IO uint32_t*)0x40024318U) /**< \brief (USART2) Transmit Next Pointer Register */
  #define REG_USART2_TNCR   (*(__IO uint32_t*)0x4002431CU) /**< \brief (USART2) Transmit Next Counter Register */
  #define REG_USART2_PTCR   (*(__O  uint32_t*)0x40024320U) /**< \brief (USART2) Transfer Control Register */
  #define REG_USART2_PTSR   (*(__I  uint32_t*)0x40024324U) /**< \brief (USART2) Transfer Status Register */
#endif /* (defined(__ASSEMBLY__) || defined(__IAR_SYSTEMS_ASM__)) */

#endif /* _SAMG55_USART2_INSTANCE_ */
