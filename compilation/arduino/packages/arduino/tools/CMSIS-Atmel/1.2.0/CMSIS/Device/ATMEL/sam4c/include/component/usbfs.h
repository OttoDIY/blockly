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

#ifndef _SAM4C_USBFS_COMPONENT_
#define _SAM4C_USBFS_COMPONENT_

/* ============================================================================= */
/**  SOFTWARE API DEFINITION FOR USB Full-Speed Interface */
/* ============================================================================= */
/** \addtogroup SAM4C_USBFS USB Full-Speed Interface */
/*@{*/

#if !(defined(__ASSEMBLY__) || defined(__IAR_SYSTEMS_ASM__))
/** \brief UsbfsDevdma hardware registers */
typedef struct {
  __IO uint32_t USBFS_DEVDMANXTDSC;  /**< \brief (UsbfsDevdma Offset: 0x0) Device DMA Channel Next Descriptor Address Register */
  __IO uint32_t USBFS_DEVDMAADDRESS; /**< \brief (UsbfsDevdma Offset: 0x4) Device DMA Channel Address Register */
  __IO uint32_t USBFS_DEVDMACONTROL; /**< \brief (UsbfsDevdma Offset: 0x8) Device DMA Channel Control Register */
  __IO uint32_t USBFS_DEVDMASTATUS;  /**< \brief (UsbfsDevdma Offset: 0xC) Device DMA Channel Status Register */
} UsbfsDevdma;
/** \brief UsbfsHstdma hardware registers */
typedef struct {
  __IO uint32_t USBFS_HSTDMANXTDSC;  /**< \brief (UsbfsHstdma Offset: 0x0) Host DMA Channel Next Descriptor Address Register */
  __IO uint32_t USBFS_HSTDMAADDRESS; /**< \brief (UsbfsHstdma Offset: 0x4) Host DMA Channel Address Register */
  __IO uint32_t USBFS_HSTDMACONTROL; /**< \brief (UsbfsHstdma Offset: 0x8) Host DMA Channel Control Register */
  __IO uint32_t USBFS_HSTDMASTATUS;  /**< \brief (UsbfsHstdma Offset: 0xC) Host DMA Channel Status Register */
} UsbfsHstdma;
/** \brief Usbfs hardware registers */
#define USBFSDEVDMA_NUMBER 4
#define USBFSHSTDMA_NUMBER 4
typedef struct {
  __IO uint32_t    USBFS_DEVCTRL;                    /**< \brief (Usbfs Offset: 0x0000) Device General Control Register */
  __I  uint32_t    USBFS_DEVISR;                     /**< \brief (Usbfs Offset: 0x0004) Device Global Interrupt Status Register */
  __O  uint32_t    USBFS_DEVICR;                     /**< \brief (Usbfs Offset: 0x0008) Device Global Interrupt Clear Register */
  __O  uint32_t    USBFS_DEVIFR;                     /**< \brief (Usbfs Offset: 0x000C) Device Global Interrupt Set Register */
  __I  uint32_t    USBFS_DEVIMR;                     /**< \brief (Usbfs Offset: 0x0010) Device Global Interrupt Mask Register */
  __O  uint32_t    USBFS_DEVIDR;                     /**< \brief (Usbfs Offset: 0x0014) Device Global Interrupt Disable Register */
  __O  uint32_t    USBFS_DEVIER;                     /**< \brief (Usbfs Offset: 0x0018) Device Global Interrupt Enable Register */
  __IO uint32_t    USBFS_DEVEPT;                     /**< \brief (Usbfs Offset: 0x001C) Device Endpoint Register */
  __I  uint32_t    USBFS_DEVFNUM;                    /**< \brief (Usbfs Offset: 0x0020) Device Frame Number Register */
  __I  uint32_t    Reserved1[55];
  __IO uint32_t    USBFS_DEVEPTCFG[5];               /**< \brief (Usbfs Offset: 0x100) Device Endpoint Configuration Register (n = 0) */
  __I  uint32_t    Reserved2[7];
  __I  uint32_t    USBFS_DEVEPTISR[5];               /**< \brief (Usbfs Offset: 0x130) Device Endpoint Status Register (n = 0) */
  __I  uint32_t    Reserved3[7];
  __O  uint32_t    USBFS_DEVEPTICR[5];               /**< \brief (Usbfs Offset: 0x160) Device Endpoint Clear Register (n = 0) */
  __I  uint32_t    Reserved4[7];
  __O  uint32_t    USBFS_DEVEPTIFR[5];               /**< \brief (Usbfs Offset: 0x190) Device Endpoint Set Register (n = 0) */
  __I  uint32_t    Reserved5[7];
  __I  uint32_t    USBFS_DEVEPTIMR[5];               /**< \brief (Usbfs Offset: 0x1C0) Device Endpoint Mask Register (n = 0) */
  __I  uint32_t    Reserved6[7];
  __O  uint32_t    USBFS_DEVEPTIER[5];               /**< \brief (Usbfs Offset: 0x1F0) Device Endpoint Enable Register (n = 0) */
  __I  uint32_t    Reserved7[7];
  __O  uint32_t    USBFS_DEVEPTIDR[5];               /**< \brief (Usbfs Offset: 0x220) Device Endpoint Disable Register (n = 0) */
  __I  uint32_t    Reserved8[55];
       UsbfsDevdma USBFS_DEVDMA[USBFSDEVDMA_NUMBER]; /**< \brief (Usbfs Offset: 0x310) n = 1 .. 4 */
  __I  uint32_t    Reserved9[44];
  __IO uint32_t    USBFS_HSTCTRL;                    /**< \brief (Usbfs Offset: 0x0400) Host General Control Register */
  __I  uint32_t    USBFS_HSTISR;                     /**< \brief (Usbfs Offset: 0x0404) Host Global Interrupt Status Register */
  __O  uint32_t    USBFS_HSTICR;                     /**< \brief (Usbfs Offset: 0x0408) Host Global Interrupt Clear Register */
  __O  uint32_t    USBFS_HSTIFR;                     /**< \brief (Usbfs Offset: 0x040C) Host Global Interrupt Set Register */
  __I  uint32_t    USBFS_HSTIMR;                     /**< \brief (Usbfs Offset: 0x0410) Host Global Interrupt Mask Register */
  __O  uint32_t    USBFS_HSTIDR;                     /**< \brief (Usbfs Offset: 0x0414) Host Global Interrupt Disable Register */
  __O  uint32_t    USBFS_HSTIER;                     /**< \brief (Usbfs Offset: 0x0418) Host Global Interrupt Enable Register */
  __IO uint32_t    USBFS_HSTPIP;                     /**< \brief (Usbfs Offset: 0x0041C) Host Pipe Register */
  __IO uint32_t    USBFS_HSTFNUM;                    /**< \brief (Usbfs Offset: 0x0420) Host Frame Number Register */
  __IO uint32_t    USBFS_HSTADDR1;                   /**< \brief (Usbfs Offset: 0x0424) Host Address 1 Register */
  __IO uint32_t    USBFS_HSTADDR2;                   /**< \brief (Usbfs Offset: 0x0428) Host Address 2 Register */
  __IO uint32_t    USBFS_HSTADDR3;                   /**< \brief (Usbfs Offset: 0x042C) Host Address 3 Register */
  __I  uint32_t    Reserved10[52];
  __IO uint32_t    USBFS_HSTPIPCFG[5];               /**< \brief (Usbfs Offset: 0x500) Host Pipe Configuration Register (n = 0) */
  __I  uint32_t    Reserved11[7];
  __I  uint32_t    USBFS_HSTPIPISR[5];               /**< \brief (Usbfs Offset: 0x530) Host Pipe Status Register (n = 0) */
  __I  uint32_t    Reserved12[7];
  __O  uint32_t    USBFS_HSTPIPICR[5];               /**< \brief (Usbfs Offset: 0x560) Host Pipe Clear Register (n = 0) */
  __I  uint32_t    Reserved13[7];
  __O  uint32_t    USBFS_HSTPIPIFR[5];               /**< \brief (Usbfs Offset: 0x590) Host Pipe Set Register (n = 0) */
  __I  uint32_t    Reserved14[7];
  __I  uint32_t    USBFS_HSTPIPIMR[5];               /**< \brief (Usbfs Offset: 0x5C0) Host Pipe Mask Register (n = 0) */
  __I  uint32_t    Reserved15[7];
  __O  uint32_t    USBFS_HSTPIPIER[5];               /**< \brief (Usbfs Offset: 0x5F0) Host Pipe Enable Register (n = 0) */
  __I  uint32_t    Reserved16[7];
  __O  uint32_t    USBFS_HSTPIPIDR[5];               /**< \brief (Usbfs Offset: 0x620) Host Pipe Disable Register (n = 0) */
  __I  uint32_t    Reserved17[7];
  __IO uint32_t    USBFS_HSTPIPINRQ[5];              /**< \brief (Usbfs Offset: 0x650) Host Pipe IN Request Register (n = 0) */
  __I  uint32_t    Reserved18[7];
  __IO uint32_t    USBFS_HSTPIPERR[5];               /**< \brief (Usbfs Offset: 0x680) Host Pipe Error Register (n = 0) */
  __I  uint32_t    Reserved19[31];
       UsbfsHstdma USBFS_HSTDMA[USBFSHSTDMA_NUMBER]; /**< \brief (Usbfs Offset: 0x710) n = 1 .. 4 */
  __I  uint32_t    Reserved20[44];
  __IO uint32_t    USBFS_CTRL;                       /**< \brief (Usbfs Offset: 0x0800) General Control Register */
  __I  uint32_t    USBFS_SR;                         /**< \brief (Usbfs Offset: 0x0804) General Status Register */
  __O  uint32_t    USBFS_SCR;                        /**< \brief (Usbfs Offset: 0x0808) General Status Clear Register */
  __O  uint32_t    USBFS_SFR;                        /**< \brief (Usbfs Offset: 0x080C) General Status Set Register */
} Usbfs;
#endif /* !(defined(__ASSEMBLY__) || defined(__IAR_SYSTEMS_ASM__)) */
/* -------- USBFS_DEVCTRL : (USBFS Offset: 0x0000) Device General Control Register -------- */
#define USBFS_DEVCTRL_UADD_Pos 0
#define USBFS_DEVCTRL_UADD_Msk (0x7fu << USBFS_DEVCTRL_UADD_Pos) /**< \brief (USBFS_DEVCTRL) USB Address */
#define USBFS_DEVCTRL_UADD(value) ((USBFS_DEVCTRL_UADD_Msk & ((value) << USBFS_DEVCTRL_UADD_Pos)))
#define USBFS_DEVCTRL_ADDEN (0x1u << 7) /**< \brief (USBFS_DEVCTRL) Address Enable */
#define USBFS_DEVCTRL_DETACH (0x1u << 8) /**< \brief (USBFS_DEVCTRL) Detach */
#define USBFS_DEVCTRL_RMWKUP (0x1u << 9) /**< \brief (USBFS_DEVCTRL) Remote Wake-Up */
/* -------- USBFS_DEVISR : (USBFS Offset: 0x0004) Device Global Interrupt Status Register -------- */
#define USBFS_DEVISR_SUSP (0x1u << 0) /**< \brief (USBFS_DEVISR) Suspend Interrupt */
#define USBFS_DEVISR_SOF (0x1u << 2) /**< \brief (USBFS_DEVISR) Start of Frame Interrupt */
#define USBFS_DEVISR_EORST (0x1u << 3) /**< \brief (USBFS_DEVISR) End of Reset Interrupt */
#define USBFS_DEVISR_WAKEUP (0x1u << 4) /**< \brief (USBFS_DEVISR) Wake-Up Interrupt */
#define USBFS_DEVISR_EORSM (0x1u << 5) /**< \brief (USBFS_DEVISR) End of Resume Interrupt */
#define USBFS_DEVISR_UPRSM (0x1u << 6) /**< \brief (USBFS_DEVISR) Upstream Resume Interrupt */
#define USBFS_DEVISR_PEP_0 (0x1u << 12) /**< \brief (USBFS_DEVISR) Endpoint 0 Interrupt */
#define USBFS_DEVISR_PEP_1 (0x1u << 13) /**< \brief (USBFS_DEVISR) Endpoint 1 Interrupt */
#define USBFS_DEVISR_PEP_2 (0x1u << 14) /**< \brief (USBFS_DEVISR) Endpoint 2 Interrupt */
#define USBFS_DEVISR_PEP_3 (0x1u << 15) /**< \brief (USBFS_DEVISR) Endpoint 3 Interrupt */
#define USBFS_DEVISR_PEP_4 (0x1u << 16) /**< \brief (USBFS_DEVISR) Endpoint 4 Interrupt */
#define USBFS_DEVISR_DMA_1 (0x1u << 25) /**< \brief (USBFS_DEVISR) DMA Channel 1 Interrupt */
#define USBFS_DEVISR_DMA_2 (0x1u << 26) /**< \brief (USBFS_DEVISR) DMA Channel 2 Interrupt */
#define USBFS_DEVISR_DMA_3 (0x1u << 27) /**< \brief (USBFS_DEVISR) DMA Channel 3 Interrupt */
#define USBFS_DEVISR_DMA_4 (0x1u << 28) /**< \brief (USBFS_DEVISR) DMA Channel 4 Interrupt */
/* -------- USBFS_DEVICR : (USBFS Offset: 0x0008) Device Global Interrupt Clear Register -------- */
#define USBFS_DEVICR_SUSPC (0x1u << 0) /**< \brief (USBFS_DEVICR) Suspend Interrupt Clear */
#define USBFS_DEVICR_SOFC (0x1u << 2) /**< \brief (USBFS_DEVICR) Start of Frame Interrupt Clear */
#define USBFS_DEVICR_EORSTC (0x1u << 3) /**< \brief (USBFS_DEVICR) End of Reset Interrupt Clear */
#define USBFS_DEVICR_WAKEUPC (0x1u << 4) /**< \brief (USBFS_DEVICR) Wake-Up Interrupt Clear */
#define USBFS_DEVICR_EORSMC (0x1u << 5) /**< \brief (USBFS_DEVICR) End of Resume Interrupt Clear */
#define USBFS_DEVICR_UPRSMC (0x1u << 6) /**< \brief (USBFS_DEVICR) Upstream Resume Interrupt Clear */
/* -------- USBFS_DEVIFR : (USBFS Offset: 0x000C) Device Global Interrupt Set Register -------- */
#define USBFS_DEVIFR_SUSPS (0x1u << 0) /**< \brief (USBFS_DEVIFR) Suspend Interrupt Set */
#define USBFS_DEVIFR_SOFS (0x1u << 2) /**< \brief (USBFS_DEVIFR) Start of Frame Interrupt Set */
#define USBFS_DEVIFR_EORSTS (0x1u << 3) /**< \brief (USBFS_DEVIFR) End of Reset Interrupt Set */
#define USBFS_DEVIFR_WAKEUPS (0x1u << 4) /**< \brief (USBFS_DEVIFR) Wake-Up Interrupt Set */
#define USBFS_DEVIFR_EORSMS (0x1u << 5) /**< \brief (USBFS_DEVIFR) End of Resume Interrupt Set */
#define USBFS_DEVIFR_UPRSMS (0x1u << 6) /**< \brief (USBFS_DEVIFR) Upstream Resume Interrupt Set */
#define USBFS_DEVIFR_DMA_1 (0x1u << 25) /**< \brief (USBFS_DEVIFR) DMA Channel 1 Interrupt Set */
#define USBFS_DEVIFR_DMA_2 (0x1u << 26) /**< \brief (USBFS_DEVIFR) DMA Channel 2 Interrupt Set */
#define USBFS_DEVIFR_DMA_3 (0x1u << 27) /**< \brief (USBFS_DEVIFR) DMA Channel 3 Interrupt Set */
#define USBFS_DEVIFR_DMA_4 (0x1u << 28) /**< \brief (USBFS_DEVIFR) DMA Channel 4 Interrupt Set */
/* -------- USBFS_DEVIMR : (USBFS Offset: 0x0010) Device Global Interrupt Mask Register -------- */
#define USBFS_DEVIMR_SUSPE (0x1u << 0) /**< \brief (USBFS_DEVIMR) Suspend Interrupt Mask */
#define USBFS_DEVIMR_SOFE (0x1u << 2) /**< \brief (USBFS_DEVIMR) Start of Frame Interrupt Mask */
#define USBFS_DEVIMR_EORSTE (0x1u << 3) /**< \brief (USBFS_DEVIMR) End of Reset Interrupt Mask */
#define USBFS_DEVIMR_WAKEUPE (0x1u << 4) /**< \brief (USBFS_DEVIMR) Wake-Up Interrupt Mask */
#define USBFS_DEVIMR_EORSME (0x1u << 5) /**< \brief (USBFS_DEVIMR) End of Resume Interrupt Mask */
#define USBFS_DEVIMR_UPRSME (0x1u << 6) /**< \brief (USBFS_DEVIMR) Upstream Resume Interrupt Mask */
#define USBFS_DEVIMR_PEP_0 (0x1u << 12) /**< \brief (USBFS_DEVIMR) Endpoint 0 Interrupt Mask */
#define USBFS_DEVIMR_PEP_1 (0x1u << 13) /**< \brief (USBFS_DEVIMR) Endpoint 1 Interrupt Mask */
#define USBFS_DEVIMR_PEP_2 (0x1u << 14) /**< \brief (USBFS_DEVIMR) Endpoint 2 Interrupt Mask */
#define USBFS_DEVIMR_PEP_3 (0x1u << 15) /**< \brief (USBFS_DEVIMR) Endpoint 3 Interrupt Mask */
#define USBFS_DEVIMR_PEP_4 (0x1u << 16) /**< \brief (USBFS_DEVIMR) Endpoint 4 Interrupt Mask */
#define USBFS_DEVIMR_DMA_1 (0x1u << 25) /**< \brief (USBFS_DEVIMR) DMA Channel 1 Interrupt Mask */
#define USBFS_DEVIMR_DMA_2 (0x1u << 26) /**< \brief (USBFS_DEVIMR) DMA Channel 2 Interrupt Mask */
#define USBFS_DEVIMR_DMA_3 (0x1u << 27) /**< \brief (USBFS_DEVIMR) DMA Channel 3 Interrupt Mask */
#define USBFS_DEVIMR_DMA_4 (0x1u << 28) /**< \brief (USBFS_DEVIMR) DMA Channel 4 Interrupt Mask */
/* -------- USBFS_DEVIDR : (USBFS Offset: 0x0014) Device Global Interrupt Disable Register -------- */
#define USBFS_DEVIDR_SUSPEC (0x1u << 0) /**< \brief (USBFS_DEVIDR) Suspend Interrupt Disable */
#define USBFS_DEVIDR_SOFEC (0x1u << 2) /**< \brief (USBFS_DEVIDR) Start of Frame Interrupt Disable */
#define USBFS_DEVIDR_EORSTEC (0x1u << 3) /**< \brief (USBFS_DEVIDR) End of Reset Interrupt Disable */
#define USBFS_DEVIDR_WAKEUPEC (0x1u << 4) /**< \brief (USBFS_DEVIDR) Wake-Up Interrupt Disable */
#define USBFS_DEVIDR_EORSMEC (0x1u << 5) /**< \brief (USBFS_DEVIDR) End of Resume Interrupt Disable */
#define USBFS_DEVIDR_UPRSMEC (0x1u << 6) /**< \brief (USBFS_DEVIDR) Upstream Resume Interrupt Disable */
#define USBFS_DEVIDR_PEP_0 (0x1u << 12) /**< \brief (USBFS_DEVIDR) Endpoint 0 Interrupt Disable */
#define USBFS_DEVIDR_PEP_1 (0x1u << 13) /**< \brief (USBFS_DEVIDR) Endpoint 1 Interrupt Disable */
#define USBFS_DEVIDR_PEP_2 (0x1u << 14) /**< \brief (USBFS_DEVIDR) Endpoint 2 Interrupt Disable */
#define USBFS_DEVIDR_PEP_3 (0x1u << 15) /**< \brief (USBFS_DEVIDR) Endpoint 3 Interrupt Disable */
#define USBFS_DEVIDR_PEP_4 (0x1u << 16) /**< \brief (USBFS_DEVIDR) Endpoint 4 Interrupt Disable */
#define USBFS_DEVIDR_DMA_1 (0x1u << 25) /**< \brief (USBFS_DEVIDR) DMA Channel 1 Interrupt Disable */
#define USBFS_DEVIDR_DMA_2 (0x1u << 26) /**< \brief (USBFS_DEVIDR) DMA Channel 2 Interrupt Disable */
#define USBFS_DEVIDR_DMA_3 (0x1u << 27) /**< \brief (USBFS_DEVIDR) DMA Channel 3 Interrupt Disable */
#define USBFS_DEVIDR_DMA_4 (0x1u << 28) /**< \brief (USBFS_DEVIDR) DMA Channel 4 Interrupt Disable */
/* -------- USBFS_DEVIER : (USBFS Offset: 0x0018) Device Global Interrupt Enable Register -------- */
#define USBFS_DEVIER_SUSPES (0x1u << 0) /**< \brief (USBFS_DEVIER) Suspend Interrupt Enable */
#define USBFS_DEVIER_SOFES (0x1u << 2) /**< \brief (USBFS_DEVIER) Start of Frame Interrupt Enable */
#define USBFS_DEVIER_EORSTES (0x1u << 3) /**< \brief (USBFS_DEVIER) End of Reset Interrupt Enable */
#define USBFS_DEVIER_WAKEUPES (0x1u << 4) /**< \brief (USBFS_DEVIER) Wake-Up Interrupt Enable */
#define USBFS_DEVIER_EORSMES (0x1u << 5) /**< \brief (USBFS_DEVIER) End of Resume Interrupt Enable */
#define USBFS_DEVIER_UPRSMES (0x1u << 6) /**< \brief (USBFS_DEVIER) Upstream Resume Interrupt Enable */
#define USBFS_DEVIER_PEP_0 (0x1u << 12) /**< \brief (USBFS_DEVIER) Endpoint 0 Interrupt Enable */
#define USBFS_DEVIER_PEP_1 (0x1u << 13) /**< \brief (USBFS_DEVIER) Endpoint 1 Interrupt Enable */
#define USBFS_DEVIER_PEP_2 (0x1u << 14) /**< \brief (USBFS_DEVIER) Endpoint 2 Interrupt Enable */
#define USBFS_DEVIER_PEP_3 (0x1u << 15) /**< \brief (USBFS_DEVIER) Endpoint 3 Interrupt Enable */
#define USBFS_DEVIER_PEP_4 (0x1u << 16) /**< \brief (USBFS_DEVIER) Endpoint 4 Interrupt Enable */
#define USBFS_DEVIER_DMA_1 (0x1u << 25) /**< \brief (USBFS_DEVIER) DMA Channel 1 Interrupt Enable */
#define USBFS_DEVIER_DMA_2 (0x1u << 26) /**< \brief (USBFS_DEVIER) DMA Channel 2 Interrupt Enable */
#define USBFS_DEVIER_DMA_3 (0x1u << 27) /**< \brief (USBFS_DEVIER) DMA Channel 3 Interrupt Enable */
#define USBFS_DEVIER_DMA_4 (0x1u << 28) /**< \brief (USBFS_DEVIER) DMA Channel 4 Interrupt Enable */
/* -------- USBFS_DEVEPT : (USBFS Offset: 0x001C) Device Endpoint Register -------- */
#define USBFS_DEVEPT_EPEN0 (0x1u << 0) /**< \brief (USBFS_DEVEPT) Endpoint 0 Enable */
#define USBFS_DEVEPT_EPEN1 (0x1u << 1) /**< \brief (USBFS_DEVEPT) Endpoint 1 Enable */
#define USBFS_DEVEPT_EPEN2 (0x1u << 2) /**< \brief (USBFS_DEVEPT) Endpoint 2 Enable */
#define USBFS_DEVEPT_EPEN3 (0x1u << 3) /**< \brief (USBFS_DEVEPT) Endpoint 3 Enable */
#define USBFS_DEVEPT_EPEN4 (0x1u << 4) /**< \brief (USBFS_DEVEPT) Endpoint 4 Enable */
#define USBFS_DEVEPT_EPEN5 (0x1u << 5) /**< \brief (USBFS_DEVEPT) Endpoint 5 Enable */
#define USBFS_DEVEPT_EPEN6 (0x1u << 6) /**< \brief (USBFS_DEVEPT) Endpoint 6 Enable */
#define USBFS_DEVEPT_EPEN7 (0x1u << 7) /**< \brief (USBFS_DEVEPT) Endpoint 7 Enable */
#define USBFS_DEVEPT_EPEN8 (0x1u << 8) /**< \brief (USBFS_DEVEPT) Endpoint 8 Enable */
#define USBFS_DEVEPT_EPRST0 (0x1u << 16) /**< \brief (USBFS_DEVEPT) Endpoint 0 Reset */
#define USBFS_DEVEPT_EPRST1 (0x1u << 17) /**< \brief (USBFS_DEVEPT) Endpoint 1 Reset */
#define USBFS_DEVEPT_EPRST2 (0x1u << 18) /**< \brief (USBFS_DEVEPT) Endpoint 2 Reset */
#define USBFS_DEVEPT_EPRST3 (0x1u << 19) /**< \brief (USBFS_DEVEPT) Endpoint 3 Reset */
#define USBFS_DEVEPT_EPRST4 (0x1u << 20) /**< \brief (USBFS_DEVEPT) Endpoint 4 Reset */
#define USBFS_DEVEPT_EPRST5 (0x1u << 21) /**< \brief (USBFS_DEVEPT) Endpoint 5 Reset */
#define USBFS_DEVEPT_EPRST6 (0x1u << 22) /**< \brief (USBFS_DEVEPT) Endpoint 6 Reset */
#define USBFS_DEVEPT_EPRST7 (0x1u << 23) /**< \brief (USBFS_DEVEPT) Endpoint 7 Reset */
#define USBFS_DEVEPT_EPRST8 (0x1u << 24) /**< \brief (USBFS_DEVEPT) Endpoint 8 Reset */
/* -------- USBFS_DEVFNUM : (USBFS Offset: 0x0020) Device Frame Number Register -------- */
#define USBFS_DEVFNUM_FNUM_Pos 3
#define USBFS_DEVFNUM_FNUM_Msk (0x7ffu << USBFS_DEVFNUM_FNUM_Pos) /**< \brief (USBFS_DEVFNUM) Frame Number */
#define USBFS_DEVFNUM_FNCERR (0x1u << 15) /**< \brief (USBFS_DEVFNUM) Frame Number CRC Error */
/* -------- USBFS_DEVEPTCFG[5] : (USBFS Offset: 0x100) Device Endpoint Configuration Register (n = 0) -------- */
#define USBFS_DEVEPTCFG_ALLOC (0x1u << 1) /**< \brief (USBFS_DEVEPTCFG[5]) Endpoint Memory Allocate */
#define USBFS_DEVEPTCFG_EPBK_Pos 2
#define USBFS_DEVEPTCFG_EPBK_Msk (0x3u << USBFS_DEVEPTCFG_EPBK_Pos) /**< \brief (USBFS_DEVEPTCFG[5]) Endpoint Banks */
#define USBFS_DEVEPTCFG_EPBK(value) ((USBFS_DEVEPTCFG_EPBK_Msk & ((value) << USBFS_DEVEPTCFG_EPBK_Pos)))
#define   USBFS_DEVEPTCFG_EPBK_1_BANK (0x0u << 2) /**< \brief (USBFS_DEVEPTCFG[5]) Single-bank endpoint */
#define   USBFS_DEVEPTCFG_EPBK_2_BANK (0x1u << 2) /**< \brief (USBFS_DEVEPTCFG[5]) Double-bank endpoint */
#define   USBFS_DEVEPTCFG_EPBK_3_BANK (0x2u << 2) /**< \brief (USBFS_DEVEPTCFG[5]) Triple-bank endpoint */
#define USBFS_DEVEPTCFG_EPSIZE_Pos 4
#define USBFS_DEVEPTCFG_EPSIZE_Msk (0x7u << USBFS_DEVEPTCFG_EPSIZE_Pos) /**< \brief (USBFS_DEVEPTCFG[5]) Endpoint Size */
#define USBFS_DEVEPTCFG_EPSIZE(value) ((USBFS_DEVEPTCFG_EPSIZE_Msk & ((value) << USBFS_DEVEPTCFG_EPSIZE_Pos)))
#define   USBFS_DEVEPTCFG_EPSIZE_8_BYTE (0x0u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 8 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_16_BYTE (0x1u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 16 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_32_BYTE (0x2u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 32 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_64_BYTE (0x3u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 64 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_128_BYTE (0x4u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 128 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_256_BYTE (0x5u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 256 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_512_BYTE (0x6u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 512 bytes */
#define   USBFS_DEVEPTCFG_EPSIZE_1024_BYTE (0x7u << 4) /**< \brief (USBFS_DEVEPTCFG[5]) 1024 bytes */
#define USBFS_DEVEPTCFG_EPDIR (0x1u << 8) /**< \brief (USBFS_DEVEPTCFG[5]) Endpoint Direction */
#define   USBFS_DEVEPTCFG_EPDIR_OUT (0x0u << 8) /**< \brief (USBFS_DEVEPTCFG[5]) The endpoint direction is OUT. */
#define   USBFS_DEVEPTCFG_EPDIR_IN (0x1u << 8) /**< \brief (USBFS_DEVEPTCFG[5]) The endpoint direction is IN (nor for control endpoints). */
#define USBFS_DEVEPTCFG_AUTOSW (0x1u << 9) /**< \brief (USBFS_DEVEPTCFG[5]) Automatic Switch */
#define USBFS_DEVEPTCFG_EPTYPE_Pos 11
#define USBFS_DEVEPTCFG_EPTYPE_Msk (0x3u << USBFS_DEVEPTCFG_EPTYPE_Pos) /**< \brief (USBFS_DEVEPTCFG[5]) Endpoint Type */
#define USBFS_DEVEPTCFG_EPTYPE(value) ((USBFS_DEVEPTCFG_EPTYPE_Msk & ((value) << USBFS_DEVEPTCFG_EPTYPE_Pos)))
#define   USBFS_DEVEPTCFG_EPTYPE_CTRL (0x0u << 11) /**< \brief (USBFS_DEVEPTCFG[5]) Control */
#define   USBFS_DEVEPTCFG_EPTYPE_ISO (0x1u << 11) /**< \brief (USBFS_DEVEPTCFG[5]) Isochronous */
#define   USBFS_DEVEPTCFG_EPTYPE_BLK (0x2u << 11) /**< \brief (USBFS_DEVEPTCFG[5]) Bulk */
#define   USBFS_DEVEPTCFG_EPTYPE_INTRPT (0x3u << 11) /**< \brief (USBFS_DEVEPTCFG[5]) Interrupt */
/* -------- USBFS_DEVEPTISR[5] : (USBFS Offset: 0x130) Device Endpoint Status Register (n = 0) -------- */
#define USBFS_DEVEPTISR_TXINI (0x1u << 0) /**< \brief (USBFS_DEVEPTISR[5]) Transmitted IN Data Interrupt */
#define USBFS_DEVEPTISR_RXOUTI (0x1u << 1) /**< \brief (USBFS_DEVEPTISR[5]) Received OUT Data Interrupt */
#define USBFS_DEVEPTISR_RXSTPI (0x1u << 2) /**< \brief (USBFS_DEVEPTISR[5]) Received SETUP Interrupt */
#define USBFS_DEVEPTISR_NAKOUTI (0x1u << 3) /**< \brief (USBFS_DEVEPTISR[5]) NAKed OUT Interrupt */
#define USBFS_DEVEPTISR_NAKINI (0x1u << 4) /**< \brief (USBFS_DEVEPTISR[5]) NAKed IN Interrupt */
#define USBFS_DEVEPTISR_OVERFI (0x1u << 5) /**< \brief (USBFS_DEVEPTISR[5]) Overflow Interrupt */
#define USBFS_DEVEPTISR_STALLEDI (0x1u << 6) /**< \brief (USBFS_DEVEPTISR[5]) STALLed Interrupt */
#define USBFS_DEVEPTISR_SHORTPACKET (0x1u << 7) /**< \brief (USBFS_DEVEPTISR[5]) Short Packet Interrupt */
#define USBFS_DEVEPTISR_DTSEQ_Pos 8
#define USBFS_DEVEPTISR_DTSEQ_Msk (0x3u << USBFS_DEVEPTISR_DTSEQ_Pos) /**< \brief (USBFS_DEVEPTISR[5]) Data Toggle Sequence */
#define   USBFS_DEVEPTISR_DTSEQ_DATA0 (0x0u << 8) /**< \brief (USBFS_DEVEPTISR[5]) Data0 toggle sequence */
#define   USBFS_DEVEPTISR_DTSEQ_DATA1 (0x1u << 8) /**< \brief (USBFS_DEVEPTISR[5]) Data1 toggle sequence */
#define USBFS_DEVEPTISR_NBUSYBK_Pos 12
#define USBFS_DEVEPTISR_NBUSYBK_Msk (0x3u << USBFS_DEVEPTISR_NBUSYBK_Pos) /**< \brief (USBFS_DEVEPTISR[5]) Number of Busy Banks */
#define   USBFS_DEVEPTISR_NBUSYBK_0_BUSY (0x0u << 12) /**< \brief (USBFS_DEVEPTISR[5]) 0 busy bank (all banks free) */
#define   USBFS_DEVEPTISR_NBUSYBK_1_BUSY (0x1u << 12) /**< \brief (USBFS_DEVEPTISR[5]) 1 busy bank */
#define   USBFS_DEVEPTISR_NBUSYBK_2_BUSY (0x2u << 12) /**< \brief (USBFS_DEVEPTISR[5]) 2 busy banks */
#define   USBFS_DEVEPTISR_NBUSYBK_3_BUSY (0x3u << 12) /**< \brief (USBFS_DEVEPTISR[5]) 3 busy banks */
#define USBFS_DEVEPTISR_CURRBK_Pos 14
#define USBFS_DEVEPTISR_CURRBK_Msk (0x3u << USBFS_DEVEPTISR_CURRBK_Pos) /**< \brief (USBFS_DEVEPTISR[5]) Current Bank */
#define   USBFS_DEVEPTISR_CURRBK_BANK0 (0x0u << 14) /**< \brief (USBFS_DEVEPTISR[5]) Current bank is bank0 */
#define   USBFS_DEVEPTISR_CURRBK_BANK1 (0x1u << 14) /**< \brief (USBFS_DEVEPTISR[5]) Current bank is bank1 */
#define   USBFS_DEVEPTISR_CURRBK_BANK2 (0x2u << 14) /**< \brief (USBFS_DEVEPTISR[5]) Current bank is bank2 */
#define USBFS_DEVEPTISR_RWALL (0x1u << 16) /**< \brief (USBFS_DEVEPTISR[5]) Read/Write Allowed */
#define USBFS_DEVEPTISR_CTRLDIR (0x1u << 17) /**< \brief (USBFS_DEVEPTISR[5]) Control Direction */
#define USBFS_DEVEPTISR_CFGOK (0x1u << 18) /**< \brief (USBFS_DEVEPTISR[5]) Configuration OK Status */
#define USBFS_DEVEPTISR_BYCT_Pos 20
#define USBFS_DEVEPTISR_BYCT_Msk (0x7ffu << USBFS_DEVEPTISR_BYCT_Pos) /**< \brief (USBFS_DEVEPTISR[5]) Byte Count */
#define USBFS_DEVEPTISR_UNDERFI (0x1u << 2) /**< \brief (USBFS_DEVEPTISR[5]) Underflow Interrupt */
#define USBFS_DEVEPTISR_CRCERRI (0x1u << 6) /**< \brief (USBFS_DEVEPTISR[5]) CRC Error Interrupt */
/* -------- USBFS_DEVEPTICR[5] : (USBFS Offset: 0x160) Device Endpoint Clear Register (n = 0) -------- */
#define USBFS_DEVEPTICR_TXINIC (0x1u << 0) /**< \brief (USBFS_DEVEPTICR[5]) Transmitted IN Data Interrupt Clear */
#define USBFS_DEVEPTICR_RXOUTIC (0x1u << 1) /**< \brief (USBFS_DEVEPTICR[5]) Received OUT Data Interrupt Clear */
#define USBFS_DEVEPTICR_RXSTPIC (0x1u << 2) /**< \brief (USBFS_DEVEPTICR[5]) Received SETUP Interrupt Clear */
#define USBFS_DEVEPTICR_NAKOUTIC (0x1u << 3) /**< \brief (USBFS_DEVEPTICR[5]) NAKed OUT Interrupt Clear */
#define USBFS_DEVEPTICR_NAKINIC (0x1u << 4) /**< \brief (USBFS_DEVEPTICR[5]) NAKed IN Interrupt Clear */
#define USBFS_DEVEPTICR_OVERFIC (0x1u << 5) /**< \brief (USBFS_DEVEPTICR[5]) Overflow Interrupt Clear */
#define USBFS_DEVEPTICR_STALLEDIC (0x1u << 6) /**< \brief (USBFS_DEVEPTICR[5]) STALLed Interrupt Clear */
#define USBFS_DEVEPTICR_SHORTPACKETC (0x1u << 7) /**< \brief (USBFS_DEVEPTICR[5]) Short Packet Interrupt Clear */
#define USBFS_DEVEPTICR_UNDERFIC (0x1u << 2) /**< \brief (USBFS_DEVEPTICR[5]) Underflow Interrupt Clear */
#define USBFS_DEVEPTICR_CRCERRIC (0x1u << 6) /**< \brief (USBFS_DEVEPTICR[5]) CRC Error Interrupt Clear */
/* -------- USBFS_DEVEPTIFR[5] : (USBFS Offset: 0x190) Device Endpoint Set Register (n = 0) -------- */
#define USBFS_DEVEPTIFR_TXINIS (0x1u << 0) /**< \brief (USBFS_DEVEPTIFR[5]) Transmitted IN Data Interrupt Set */
#define USBFS_DEVEPTIFR_RXOUTIS (0x1u << 1) /**< \brief (USBFS_DEVEPTIFR[5]) Received OUT Data Interrupt Set */
#define USBFS_DEVEPTIFR_RXSTPIS (0x1u << 2) /**< \brief (USBFS_DEVEPTIFR[5]) Received SETUP Interrupt Set */
#define USBFS_DEVEPTIFR_NAKOUTIS (0x1u << 3) /**< \brief (USBFS_DEVEPTIFR[5]) NAKed OUT Interrupt Set */
#define USBFS_DEVEPTIFR_NAKINIS (0x1u << 4) /**< \brief (USBFS_DEVEPTIFR[5]) NAKed IN Interrupt Set */
#define USBFS_DEVEPTIFR_OVERFIS (0x1u << 5) /**< \brief (USBFS_DEVEPTIFR[5]) Overflow Interrupt Set */
#define USBFS_DEVEPTIFR_STALLEDIS (0x1u << 6) /**< \brief (USBFS_DEVEPTIFR[5]) STALLed Interrupt Set */
#define USBFS_DEVEPTIFR_SHORTPACKETS (0x1u << 7) /**< \brief (USBFS_DEVEPTIFR[5]) Short Packet Interrupt Set */
#define USBFS_DEVEPTIFR_NBUSYBKS (0x1u << 12) /**< \brief (USBFS_DEVEPTIFR[5]) Number of Busy Banks Interrupt Set */
#define USBFS_DEVEPTIFR_UNDERFIS (0x1u << 2) /**< \brief (USBFS_DEVEPTIFR[5]) Underflow Interrupt Set */
#define USBFS_DEVEPTIFR_CRCERRIS (0x1u << 6) /**< \brief (USBFS_DEVEPTIFR[5]) CRC Error Interrupt Set */
/* -------- USBFS_DEVEPTIMR[5] : (USBFS Offset: 0x1C0) Device Endpoint Mask Register (n = 0) -------- */
#define USBFS_DEVEPTIMR_TXINE (0x1u << 0) /**< \brief (USBFS_DEVEPTIMR[5]) Transmitted IN Data Interrupt */
#define USBFS_DEVEPTIMR_RXOUTE (0x1u << 1) /**< \brief (USBFS_DEVEPTIMR[5]) Received OUT Data Interrupt */
#define USBFS_DEVEPTIMR_RXSTPE (0x1u << 2) /**< \brief (USBFS_DEVEPTIMR[5]) Received SETUP Interrupt */
#define USBFS_DEVEPTIMR_NAKOUTE (0x1u << 3) /**< \brief (USBFS_DEVEPTIMR[5]) NAKed OUT Interrupt */
#define USBFS_DEVEPTIMR_NAKINE (0x1u << 4) /**< \brief (USBFS_DEVEPTIMR[5]) NAKed IN Interrupt */
#define USBFS_DEVEPTIMR_OVERFE (0x1u << 5) /**< \brief (USBFS_DEVEPTIMR[5]) Overflow Interrupt */
#define USBFS_DEVEPTIMR_STALLEDE (0x1u << 6) /**< \brief (USBFS_DEVEPTIMR[5]) STALLed Interrupt */
#define USBFS_DEVEPTIMR_SHORTPACKETE (0x1u << 7) /**< \brief (USBFS_DEVEPTIMR[5]) Short Packet Interrupt */
#define USBFS_DEVEPTIMR_NBUSYBKE (0x1u << 12) /**< \brief (USBFS_DEVEPTIMR[5]) Number of Busy Banks Interrupt */
#define USBFS_DEVEPTIMR_KILLBK (0x1u << 13) /**< \brief (USBFS_DEVEPTIMR[5]) Kill IN Bank */
#define USBFS_DEVEPTIMR_FIFOCON (0x1u << 14) /**< \brief (USBFS_DEVEPTIMR[5]) FIFO Control */
#define USBFS_DEVEPTIMR_EPDISHDMA (0x1u << 16) /**< \brief (USBFS_DEVEPTIMR[5]) Endpoint Interrupts Disable HDMA Request */
#define USBFS_DEVEPTIMR_RSTDT (0x1u << 18) /**< \brief (USBFS_DEVEPTIMR[5]) Reset Data Toggle */
#define USBFS_DEVEPTIMR_STALLRQ (0x1u << 19) /**< \brief (USBFS_DEVEPTIMR[5]) STALL Request */
#define USBFS_DEVEPTIMR_UNDERFE (0x1u << 2) /**< \brief (USBFS_DEVEPTIMR[5]) Underflow Interrupt */
#define USBFS_DEVEPTIMR_CRCERRE (0x1u << 6) /**< \brief (USBFS_DEVEPTIMR[5]) CRC Error Interrupt */
/* -------- USBFS_DEVEPTIER[5] : (USBFS Offset: 0x1F0) Device Endpoint Enable Register (n = 0) -------- */
#define USBFS_DEVEPTIER_TXINES (0x1u << 0) /**< \brief (USBFS_DEVEPTIER[5]) Transmitted IN Data Interrupt Enable */
#define USBFS_DEVEPTIER_RXOUTES (0x1u << 1) /**< \brief (USBFS_DEVEPTIER[5]) Received OUT Data Interrupt Enable */
#define USBFS_DEVEPTIER_RXSTPES (0x1u << 2) /**< \brief (USBFS_DEVEPTIER[5]) Received SETUP Interrupt Enable */
#define USBFS_DEVEPTIER_NAKOUTES (0x1u << 3) /**< \brief (USBFS_DEVEPTIER[5]) NAKed OUT Interrupt Enable */
#define USBFS_DEVEPTIER_NAKINES (0x1u << 4) /**< \brief (USBFS_DEVEPTIER[5]) NAKed IN Interrupt Enable */
#define USBFS_DEVEPTIER_OVERFES (0x1u << 5) /**< \brief (USBFS_DEVEPTIER[5]) Overflow Interrupt Enable */
#define USBFS_DEVEPTIER_STALLEDES (0x1u << 6) /**< \brief (USBFS_DEVEPTIER[5]) STALLed Interrupt Enable */
#define USBFS_DEVEPTIER_SHORTPACKETES (0x1u << 7) /**< \brief (USBFS_DEVEPTIER[5]) Short Packet Interrupt Enable */
#define USBFS_DEVEPTIER_NBUSYBKES (0x1u << 12) /**< \brief (USBFS_DEVEPTIER[5]) Number of Busy Banks Interrupt Enable */
#define USBFS_DEVEPTIER_KILLBKS (0x1u << 13) /**< \brief (USBFS_DEVEPTIER[5]) Kill IN Bank */
#define USBFS_DEVEPTIER_FIFOCONS (0x1u << 14) /**< \brief (USBFS_DEVEPTIER[5]) FIFO Control */
#define USBFS_DEVEPTIER_EPDISHDMAS (0x1u << 16) /**< \brief (USBFS_DEVEPTIER[5]) Endpoint Interrupts Disable HDMA Request Enable */
#define USBFS_DEVEPTIER_RSTDTS (0x1u << 18) /**< \brief (USBFS_DEVEPTIER[5]) Reset Data Toggle Enable */
#define USBFS_DEVEPTIER_STALLRQS (0x1u << 19) /**< \brief (USBFS_DEVEPTIER[5]) STALL Request Enable */
#define USBFS_DEVEPTIER_UNDERFES (0x1u << 2) /**< \brief (USBFS_DEVEPTIER[5]) Underflow Interrupt Enable */
#define USBFS_DEVEPTIER_CRCERRES (0x1u << 6) /**< \brief (USBFS_DEVEPTIER[5]) CRC Error Interrupt Enable */
/* -------- USBFS_DEVEPTIDR[5] : (USBFS Offset: 0x220) Device Endpoint Disable Register (n = 0) -------- */
#define USBFS_DEVEPTIDR_TXINEC (0x1u << 0) /**< \brief (USBFS_DEVEPTIDR[5]) Transmitted IN Interrupt Clear */
#define USBFS_DEVEPTIDR_RXOUTEC (0x1u << 1) /**< \brief (USBFS_DEVEPTIDR[5]) Received OUT Data Interrupt Clear */
#define USBFS_DEVEPTIDR_RXSTPEC (0x1u << 2) /**< \brief (USBFS_DEVEPTIDR[5]) Received SETUP Interrupt Clear */
#define USBFS_DEVEPTIDR_NAKOUTEC (0x1u << 3) /**< \brief (USBFS_DEVEPTIDR[5]) NAKed OUT Interrupt Clear */
#define USBFS_DEVEPTIDR_NAKINEC (0x1u << 4) /**< \brief (USBFS_DEVEPTIDR[5]) NAKed IN Interrupt Clear */
#define USBFS_DEVEPTIDR_OVERFEC (0x1u << 5) /**< \brief (USBFS_DEVEPTIDR[5]) Overflow Interrupt Clear */
#define USBFS_DEVEPTIDR_STALLEDEC (0x1u << 6) /**< \brief (USBFS_DEVEPTIDR[5]) STALLed Interrupt Clear */
#define USBFS_DEVEPTIDR_SHORTPACKETEC (0x1u << 7) /**< \brief (USBFS_DEVEPTIDR[5]) Shortpacket Interrupt Clear */
#define USBFS_DEVEPTIDR_NBUSYBKEC (0x1u << 12) /**< \brief (USBFS_DEVEPTIDR[5]) Number of Busy Banks Interrupt Clear */
#define USBFS_DEVEPTIDR_FIFOCONC (0x1u << 14) /**< \brief (USBFS_DEVEPTIDR[5]) FIFO Control Clear */
#define USBFS_DEVEPTIDR_EPDISHDMAC (0x1u << 16) /**< \brief (USBFS_DEVEPTIDR[5]) Endpoint Interrupts Disable HDMA Request Clear */
#define USBFS_DEVEPTIDR_STALLRQC (0x1u << 19) /**< \brief (USBFS_DEVEPTIDR[5]) STALL Request Clear */
#define USBFS_DEVEPTIDR_UNDERFEC (0x1u << 2) /**< \brief (USBFS_DEVEPTIDR[5]) Underflow Interrupt Clear */
#define USBFS_DEVEPTIDR_CRCERREC (0x1u << 6) /**< \brief (USBFS_DEVEPTIDR[5]) CRC Error Interrupt Clear */
/* -------- USBFS_DEVDMANXTDSC : (USBFS Offset: N/A) Device DMA Channel Next Descriptor Address Register -------- */
#define USBFS_DEVDMANXTDSC_NXT_DSC_ADD_Pos 0
#define USBFS_DEVDMANXTDSC_NXT_DSC_ADD_Msk (0xffffffffu << USBFS_DEVDMANXTDSC_NXT_DSC_ADD_Pos) /**< \brief (USBFS_DEVDMANXTDSC) Next Descriptor Address */
#define USBFS_DEVDMANXTDSC_NXT_DSC_ADD(value) ((USBFS_DEVDMANXTDSC_NXT_DSC_ADD_Msk & ((value) << USBFS_DEVDMANXTDSC_NXT_DSC_ADD_Pos)))
/* -------- USBFS_DEVDMAADDRESS : (USBFS Offset: N/A) Device DMA Channel Address Register -------- */
#define USBFS_DEVDMAADDRESS_BUFF_ADD_Pos 0
#define USBFS_DEVDMAADDRESS_BUFF_ADD_Msk (0xffffffffu << USBFS_DEVDMAADDRESS_BUFF_ADD_Pos) /**< \brief (USBFS_DEVDMAADDRESS) Buffer Address */
#define USBFS_DEVDMAADDRESS_BUFF_ADD(value) ((USBFS_DEVDMAADDRESS_BUFF_ADD_Msk & ((value) << USBFS_DEVDMAADDRESS_BUFF_ADD_Pos)))
/* -------- USBFS_DEVDMACONTROL : (USBFS Offset: N/A) Device DMA Channel Control Register -------- */
#define USBFS_DEVDMACONTROL_CHANN_ENB (0x1u << 0) /**< \brief (USBFS_DEVDMACONTROL) Channel Enable Command */
#define USBFS_DEVDMACONTROL_LDNXT_DSC (0x1u << 1) /**< \brief (USBFS_DEVDMACONTROL) Load Next Channel Transfer Descriptor Enable Command */
#define USBFS_DEVDMACONTROL_END_TR_EN (0x1u << 2) /**< \brief (USBFS_DEVDMACONTROL) End of Transfer Enable Control (OUT transfers only) */
#define USBFS_DEVDMACONTROL_END_B_EN (0x1u << 3) /**< \brief (USBFS_DEVDMACONTROL) End of Buffer Enable Control */
#define USBFS_DEVDMACONTROL_END_TR_IT (0x1u << 4) /**< \brief (USBFS_DEVDMACONTROL) End of Transfer Interrupt Enable */
#define USBFS_DEVDMACONTROL_END_BUFFIT (0x1u << 5) /**< \brief (USBFS_DEVDMACONTROL) End of Buffer Interrupt Enable */
#define USBFS_DEVDMACONTROL_DESC_LD_IT (0x1u << 6) /**< \brief (USBFS_DEVDMACONTROL) Descriptor Loaded Interrupt Enable */
#define USBFS_DEVDMACONTROL_BURST_LCK (0x1u << 7) /**< \brief (USBFS_DEVDMACONTROL) Burst Lock Enable */
#define USBFS_DEVDMACONTROL_BUFF_LENGTH_Pos 16
#define USBFS_DEVDMACONTROL_BUFF_LENGTH_Msk (0xffffu << USBFS_DEVDMACONTROL_BUFF_LENGTH_Pos) /**< \brief (USBFS_DEVDMACONTROL) Buffer Byte Length (Write-only) */
#define USBFS_DEVDMACONTROL_BUFF_LENGTH(value) ((USBFS_DEVDMACONTROL_BUFF_LENGTH_Msk & ((value) << USBFS_DEVDMACONTROL_BUFF_LENGTH_Pos)))
/* -------- USBFS_DEVDMASTATUS : (USBFS Offset: N/A) Device DMA Channel Status Register -------- */
#define USBFS_DEVDMASTATUS_CHANN_ENB (0x1u << 0) /**< \brief (USBFS_DEVDMASTATUS) Channel Enable Status */
#define USBFS_DEVDMASTATUS_CHANN_ACT (0x1u << 1) /**< \brief (USBFS_DEVDMASTATUS) Channel Active Status */
#define USBFS_DEVDMASTATUS_END_TR_ST (0x1u << 4) /**< \brief (USBFS_DEVDMASTATUS) End of Channel Transfer Status */
#define USBFS_DEVDMASTATUS_END_BF_ST (0x1u << 5) /**< \brief (USBFS_DEVDMASTATUS) End of Channel Buffer Status */
#define USBFS_DEVDMASTATUS_DESC_LDST (0x1u << 6) /**< \brief (USBFS_DEVDMASTATUS) Descriptor Loaded Status */
#define USBFS_DEVDMASTATUS_BUFF_COUNT_Pos 16
#define USBFS_DEVDMASTATUS_BUFF_COUNT_Msk (0xffffu << USBFS_DEVDMASTATUS_BUFF_COUNT_Pos) /**< \brief (USBFS_DEVDMASTATUS) Buffer Byte Count */
#define USBFS_DEVDMASTATUS_BUFF_COUNT(value) ((USBFS_DEVDMASTATUS_BUFF_COUNT_Msk & ((value) << USBFS_DEVDMASTATUS_BUFF_COUNT_Pos)))
/* -------- USBFS_HSTCTRL : (USBFS Offset: 0x0400) Host General Control Register -------- */
#define USBFS_HSTCTRL_SOFE (0x1u << 8) /**< \brief (USBFS_HSTCTRL) Start of Frame Generation Enable */
#define USBFS_HSTCTRL_RESET (0x1u << 9) /**< \brief (USBFS_HSTCTRL) Send USB Reset */
#define USBFS_HSTCTRL_RESUME (0x1u << 10) /**< \brief (USBFS_HSTCTRL) Send USB Resume */
/* -------- USBFS_HSTISR : (USBFS Offset: 0x0404) Host Global Interrupt Status Register -------- */
#define USBFS_HSTISR_DCONNI (0x1u << 0) /**< \brief (USBFS_HSTISR) Device Connection Interrupt */
#define USBFS_HSTISR_DDISCI (0x1u << 1) /**< \brief (USBFS_HSTISR) Device Disconnection Interrupt */
#define USBFS_HSTISR_RSTI (0x1u << 2) /**< \brief (USBFS_HSTISR) USB Reset Sent Interrupt */
#define USBFS_HSTISR_RSMEDI (0x1u << 3) /**< \brief (USBFS_HSTISR) Downstream Resume Sent Interrupt */
#define USBFS_HSTISR_RXRSMI (0x1u << 4) /**< \brief (USBFS_HSTISR) Upstream Resume Received Interrupt */
#define USBFS_HSTISR_HSOFI (0x1u << 5) /**< \brief (USBFS_HSTISR) Host Start of Frame Interrupt */
#define USBFS_HSTISR_HWUPI (0x1u << 6) /**< \brief (USBFS_HSTISR) Host Wake-Up Interrupt */
#define USBFS_HSTISR_PEP_0 (0x1u << 8) /**< \brief (USBFS_HSTISR) Pipe 0 Interrupt */
#define USBFS_HSTISR_PEP_1 (0x1u << 9) /**< \brief (USBFS_HSTISR) Pipe 1 Interrupt */
#define USBFS_HSTISR_PEP_2 (0x1u << 10) /**< \brief (USBFS_HSTISR) Pipe 2 Interrupt */
#define USBFS_HSTISR_PEP_3 (0x1u << 11) /**< \brief (USBFS_HSTISR) Pipe 3 Interrupt */
#define USBFS_HSTISR_PEP_4 (0x1u << 12) /**< \brief (USBFS_HSTISR) Pipe 4 Interrupt */
#define USBFS_HSTISR_DMA_1 (0x1u << 25) /**< \brief (USBFS_HSTISR) DMA Channel 1 Interrupt */
#define USBFS_HSTISR_DMA_2 (0x1u << 26) /**< \brief (USBFS_HSTISR) DMA Channel 2 Interrupt */
#define USBFS_HSTISR_DMA_3 (0x1u << 27) /**< \brief (USBFS_HSTISR) DMA Channel 3 Interrupt */
#define USBFS_HSTISR_DMA_4 (0x1u << 28) /**< \brief (USBFS_HSTISR) DMA Channel 4 Interrupt */
/* -------- USBFS_HSTICR : (USBFS Offset: 0x0408) Host Global Interrupt Clear Register -------- */
#define USBFS_HSTICR_DCONNIC (0x1u << 0) /**< \brief (USBFS_HSTICR) Device Connection Interrupt Clear */
#define USBFS_HSTICR_DDISCIC (0x1u << 1) /**< \brief (USBFS_HSTICR) Device Disconnection Interrupt Clear */
#define USBFS_HSTICR_RSTIC (0x1u << 2) /**< \brief (USBFS_HSTICR) USB Reset Sent Interrupt Clear */
#define USBFS_HSTICR_RSMEDIC (0x1u << 3) /**< \brief (USBFS_HSTICR) Downstream Resume Sent Interrupt Clear */
#define USBFS_HSTICR_RXRSMIC (0x1u << 4) /**< \brief (USBFS_HSTICR) Upstream Resume Received Interrupt Clear */
#define USBFS_HSTICR_HSOFIC (0x1u << 5) /**< \brief (USBFS_HSTICR) Host Start of Frame Interrupt Clear */
#define USBFS_HSTICR_HWUPIC (0x1u << 6) /**< \brief (USBFS_HSTICR) Host Wake-Up Interrupt Clear */
/* -------- USBFS_HSTIFR : (USBFS Offset: 0x040C) Host Global Interrupt Set Register -------- */
#define USBFS_HSTIFR_DCONNIS (0x1u << 0) /**< \brief (USBFS_HSTIFR) Device Connection Interrupt Set */
#define USBFS_HSTIFR_DDISCIS (0x1u << 1) /**< \brief (USBFS_HSTIFR) Device Disconnection Interrupt Set */
#define USBFS_HSTIFR_RSTIS (0x1u << 2) /**< \brief (USBFS_HSTIFR) USB Reset Sent Interrupt Set */
#define USBFS_HSTIFR_RSMEDIS (0x1u << 3) /**< \brief (USBFS_HSTIFR) Downstream Resume Sent Interrupt Set */
#define USBFS_HSTIFR_RXRSMIS (0x1u << 4) /**< \brief (USBFS_HSTIFR) Upstream Resume Received Interrupt Set */
#define USBFS_HSTIFR_HSOFIS (0x1u << 5) /**< \brief (USBFS_HSTIFR) Host Start of Frame Interrupt Set */
#define USBFS_HSTIFR_HWUPIS (0x1u << 6) /**< \brief (USBFS_HSTIFR) Host Wake-Up Interrupt Set */
#define USBFS_HSTIFR_DMA_1 (0x1u << 25) /**< \brief (USBFS_HSTIFR) DMA Channel 1 Interrupt Set */
#define USBFS_HSTIFR_DMA_2 (0x1u << 26) /**< \brief (USBFS_HSTIFR) DMA Channel 2 Interrupt Set */
#define USBFS_HSTIFR_DMA_3 (0x1u << 27) /**< \brief (USBFS_HSTIFR) DMA Channel 3 Interrupt Set */
#define USBFS_HSTIFR_DMA_4 (0x1u << 28) /**< \brief (USBFS_HSTIFR) DMA Channel 4 Interrupt Set */
/* -------- USBFS_HSTIMR : (USBFS Offset: 0x0410) Host Global Interrupt Mask Register -------- */
#define USBFS_HSTIMR_DCONNIE (0x1u << 0) /**< \brief (USBFS_HSTIMR) Device Connection Interrupt Enable */
#define USBFS_HSTIMR_DDISCIE (0x1u << 1) /**< \brief (USBFS_HSTIMR) Device Disconnection Interrupt Enable */
#define USBFS_HSTIMR_RSTIE (0x1u << 2) /**< \brief (USBFS_HSTIMR) USB Reset Sent Interrupt Enable */
#define USBFS_HSTIMR_RSMEDIE (0x1u << 3) /**< \brief (USBFS_HSTIMR) Downstream Resume Sent Interrupt Enable */
#define USBFS_HSTIMR_RXRSMIE (0x1u << 4) /**< \brief (USBFS_HSTIMR) Upstream Resume Received Interrupt Enable */
#define USBFS_HSTIMR_HSOFIE (0x1u << 5) /**< \brief (USBFS_HSTIMR) Host Start of Frame Interrupt Enable */
#define USBFS_HSTIMR_HWUPIE (0x1u << 6) /**< \brief (USBFS_HSTIMR) Host Wake-Up Interrupt Enable */
#define USBFS_HSTIMR_PEP_0 (0x1u << 8) /**< \brief (USBFS_HSTIMR) Pipe 0 Interrupt Enable */
#define USBFS_HSTIMR_PEP_1 (0x1u << 9) /**< \brief (USBFS_HSTIMR) Pipe 1 Interrupt Enable */
#define USBFS_HSTIMR_PEP_2 (0x1u << 10) /**< \brief (USBFS_HSTIMR) Pipe 2 Interrupt Enable */
#define USBFS_HSTIMR_PEP_3 (0x1u << 11) /**< \brief (USBFS_HSTIMR) Pipe 3 Interrupt Enable */
#define USBFS_HSTIMR_PEP_4 (0x1u << 12) /**< \brief (USBFS_HSTIMR) Pipe 4 Interrupt Enable */
#define USBFS_HSTIMR_DMA_1 (0x1u << 25) /**< \brief (USBFS_HSTIMR) DMA Channel 1 Interrupt Enable */
#define USBFS_HSTIMR_DMA_2 (0x1u << 26) /**< \brief (USBFS_HSTIMR) DMA Channel 2 Interrupt Enable */
#define USBFS_HSTIMR_DMA_3 (0x1u << 27) /**< \brief (USBFS_HSTIMR) DMA Channel 3 Interrupt Enable */
#define USBFS_HSTIMR_DMA_4 (0x1u << 28) /**< \brief (USBFS_HSTIMR) DMA Channel 4 Interrupt Enable */
/* -------- USBFS_HSTIDR : (USBFS Offset: 0x0414) Host Global Interrupt Disable Register -------- */
#define USBFS_HSTIDR_DCONNIEC (0x1u << 0) /**< \brief (USBFS_HSTIDR) Device Connection Interrupt Disable */
#define USBFS_HSTIDR_DDISCIEC (0x1u << 1) /**< \brief (USBFS_HSTIDR) Device Disconnection Interrupt Disable */
#define USBFS_HSTIDR_RSTIEC (0x1u << 2) /**< \brief (USBFS_HSTIDR) USB Reset Sent Interrupt Disable */
#define USBFS_HSTIDR_RSMEDIEC (0x1u << 3) /**< \brief (USBFS_HSTIDR) Downstream Resume Sent Interrupt Disable */
#define USBFS_HSTIDR_RXRSMIEC (0x1u << 4) /**< \brief (USBFS_HSTIDR) Upstream Resume Received Interrupt Disable */
#define USBFS_HSTIDR_HSOFIEC (0x1u << 5) /**< \brief (USBFS_HSTIDR) Host Start of Frame Interrupt Disable */
#define USBFS_HSTIDR_HWUPIEC (0x1u << 6) /**< \brief (USBFS_HSTIDR) Host Wake-Up Interrupt Disable */
#define USBFS_HSTIDR_PEP_0 (0x1u << 8) /**< \brief (USBFS_HSTIDR) Pipe 0 Interrupt Disable */
#define USBFS_HSTIDR_PEP_1 (0x1u << 9) /**< \brief (USBFS_HSTIDR) Pipe 1 Interrupt Disable */
#define USBFS_HSTIDR_PEP_2 (0x1u << 10) /**< \brief (USBFS_HSTIDR) Pipe 2 Interrupt Disable */
#define USBFS_HSTIDR_PEP_3 (0x1u << 11) /**< \brief (USBFS_HSTIDR) Pipe 3 Interrupt Disable */
#define USBFS_HSTIDR_PEP_4 (0x1u << 12) /**< \brief (USBFS_HSTIDR) Pipe 4 Interrupt Disable */
#define USBFS_HSTIDR_DMA_1 (0x1u << 25) /**< \brief (USBFS_HSTIDR) DMA Channel 1 Interrupt Disable */
#define USBFS_HSTIDR_DMA_2 (0x1u << 26) /**< \brief (USBFS_HSTIDR) DMA Channel 2 Interrupt Disable */
#define USBFS_HSTIDR_DMA_3 (0x1u << 27) /**< \brief (USBFS_HSTIDR) DMA Channel 3 Interrupt Disable */
#define USBFS_HSTIDR_DMA_4 (0x1u << 28) /**< \brief (USBFS_HSTIDR) DMA Channel 4 Interrupt Disable */
/* -------- USBFS_HSTIER : (USBFS Offset: 0x0418) Host Global Interrupt Enable Register -------- */
#define USBFS_HSTIER_DCONNIES (0x1u << 0) /**< \brief (USBFS_HSTIER) Device Connection Interrupt Enable */
#define USBFS_HSTIER_DDISCIES (0x1u << 1) /**< \brief (USBFS_HSTIER) Device Disconnection Interrupt Enable */
#define USBFS_HSTIER_RSTIES (0x1u << 2) /**< \brief (USBFS_HSTIER) USB Reset Sent Interrupt Enable */
#define USBFS_HSTIER_RSMEDIES (0x1u << 3) /**< \brief (USBFS_HSTIER) Downstream Resume Sent Interrupt Enable */
#define USBFS_HSTIER_RXRSMIES (0x1u << 4) /**< \brief (USBFS_HSTIER) Upstream Resume Received Interrupt Enable */
#define USBFS_HSTIER_HSOFIES (0x1u << 5) /**< \brief (USBFS_HSTIER) Host Start of Frame Interrupt Enable */
#define USBFS_HSTIER_HWUPIES (0x1u << 6) /**< \brief (USBFS_HSTIER) Host Wake-Up Interrupt Enable */
#define USBFS_HSTIER_PEP_0 (0x1u << 8) /**< \brief (USBFS_HSTIER) Pipe 0 Interrupt Enable */
#define USBFS_HSTIER_PEP_1 (0x1u << 9) /**< \brief (USBFS_HSTIER) Pipe 1 Interrupt Enable */
#define USBFS_HSTIER_PEP_2 (0x1u << 10) /**< \brief (USBFS_HSTIER) Pipe 2 Interrupt Enable */
#define USBFS_HSTIER_PEP_3 (0x1u << 11) /**< \brief (USBFS_HSTIER) Pipe 3 Interrupt Enable */
#define USBFS_HSTIER_PEP_4 (0x1u << 12) /**< \brief (USBFS_HSTIER) Pipe 4 Interrupt Enable */
#define USBFS_HSTIER_DMA_1 (0x1u << 25) /**< \brief (USBFS_HSTIER) DMA Channel 1 Interrupt Enable */
#define USBFS_HSTIER_DMA_2 (0x1u << 26) /**< \brief (USBFS_HSTIER) DMA Channel 2 Interrupt Enable */
#define USBFS_HSTIER_DMA_3 (0x1u << 27) /**< \brief (USBFS_HSTIER) DMA Channel 3 Interrupt Enable */
#define USBFS_HSTIER_DMA_4 (0x1u << 28) /**< \brief (USBFS_HSTIER) DMA Channel 4 Interrupt Enable */
/* -------- USBFS_HSTPIP : (USBFS Offset: 0x0041C) Host Pipe Register -------- */
#define USBFS_HSTPIP_PEN0 (0x1u << 0) /**< \brief (USBFS_HSTPIP) Pipe 0 Enable */
#define USBFS_HSTPIP_PEN1 (0x1u << 1) /**< \brief (USBFS_HSTPIP) Pipe 1 Enable */
#define USBFS_HSTPIP_PEN2 (0x1u << 2) /**< \brief (USBFS_HSTPIP) Pipe 2 Enable */
#define USBFS_HSTPIP_PEN3 (0x1u << 3) /**< \brief (USBFS_HSTPIP) Pipe 3 Enable */
#define USBFS_HSTPIP_PEN4 (0x1u << 4) /**< \brief (USBFS_HSTPIP) Pipe 4 Enable */
#define USBFS_HSTPIP_PEN5 (0x1u << 5) /**< \brief (USBFS_HSTPIP) Pipe 5 Enable */
#define USBFS_HSTPIP_PEN6 (0x1u << 6) /**< \brief (USBFS_HSTPIP) Pipe 6 Enable */
#define USBFS_HSTPIP_PEN7 (0x1u << 7) /**< \brief (USBFS_HSTPIP) Pipe 7 Enable */
#define USBFS_HSTPIP_PEN8 (0x1u << 8) /**< \brief (USBFS_HSTPIP) Pipe 8 Enable */
#define USBFS_HSTPIP_PRST0 (0x1u << 16) /**< \brief (USBFS_HSTPIP) Pipe 0 Reset */
#define USBFS_HSTPIP_PRST1 (0x1u << 17) /**< \brief (USBFS_HSTPIP) Pipe 1 Reset */
#define USBFS_HSTPIP_PRST2 (0x1u << 18) /**< \brief (USBFS_HSTPIP) Pipe 2 Reset */
#define USBFS_HSTPIP_PRST3 (0x1u << 19) /**< \brief (USBFS_HSTPIP) Pipe 3 Reset */
#define USBFS_HSTPIP_PRST4 (0x1u << 20) /**< \brief (USBFS_HSTPIP) Pipe 4 Reset */
#define USBFS_HSTPIP_PRST5 (0x1u << 21) /**< \brief (USBFS_HSTPIP) Pipe 5 Reset */
#define USBFS_HSTPIP_PRST6 (0x1u << 22) /**< \brief (USBFS_HSTPIP) Pipe 6 Reset */
#define USBFS_HSTPIP_PRST7 (0x1u << 23) /**< \brief (USBFS_HSTPIP) Pipe 7 Reset */
#define USBFS_HSTPIP_PRST8 (0x1u << 24) /**< \brief (USBFS_HSTPIP) Pipe 8 Reset */
/* -------- USBFS_HSTFNUM : (USBFS Offset: 0x0420) Host Frame Number Register -------- */
#define USBFS_HSTFNUM_FNUM_Pos 3
#define USBFS_HSTFNUM_FNUM_Msk (0x7ffu << USBFS_HSTFNUM_FNUM_Pos) /**< \brief (USBFS_HSTFNUM) Frame Number */
#define USBFS_HSTFNUM_FNUM(value) ((USBFS_HSTFNUM_FNUM_Msk & ((value) << USBFS_HSTFNUM_FNUM_Pos)))
#define USBFS_HSTFNUM_FLENHIGH_Pos 16
#define USBFS_HSTFNUM_FLENHIGH_Msk (0xffu << USBFS_HSTFNUM_FLENHIGH_Pos) /**< \brief (USBFS_HSTFNUM) Frame Length */
#define USBFS_HSTFNUM_FLENHIGH(value) ((USBFS_HSTFNUM_FLENHIGH_Msk & ((value) << USBFS_HSTFNUM_FLENHIGH_Pos)))
/* -------- USBFS_HSTADDR1 : (USBFS Offset: 0x0424) Host Address 1 Register -------- */
#define USBFS_HSTADDR1_HSTADDRP0_Pos 0
#define USBFS_HSTADDR1_HSTADDRP0_Msk (0x7fu << USBFS_HSTADDR1_HSTADDRP0_Pos) /**< \brief (USBFS_HSTADDR1) USB Host Address */
#define USBFS_HSTADDR1_HSTADDRP0(value) ((USBFS_HSTADDR1_HSTADDRP0_Msk & ((value) << USBFS_HSTADDR1_HSTADDRP0_Pos)))
#define USBFS_HSTADDR1_HSTADDRP1_Pos 8
#define USBFS_HSTADDR1_HSTADDRP1_Msk (0x7fu << USBFS_HSTADDR1_HSTADDRP1_Pos) /**< \brief (USBFS_HSTADDR1) USB Host Address */
#define USBFS_HSTADDR1_HSTADDRP1(value) ((USBFS_HSTADDR1_HSTADDRP1_Msk & ((value) << USBFS_HSTADDR1_HSTADDRP1_Pos)))
#define USBFS_HSTADDR1_HSTADDRP2_Pos 16
#define USBFS_HSTADDR1_HSTADDRP2_Msk (0x7fu << USBFS_HSTADDR1_HSTADDRP2_Pos) /**< \brief (USBFS_HSTADDR1) USB Host Address */
#define USBFS_HSTADDR1_HSTADDRP2(value) ((USBFS_HSTADDR1_HSTADDRP2_Msk & ((value) << USBFS_HSTADDR1_HSTADDRP2_Pos)))
#define USBFS_HSTADDR1_HSTADDRP3_Pos 24
#define USBFS_HSTADDR1_HSTADDRP3_Msk (0x7fu << USBFS_HSTADDR1_HSTADDRP3_Pos) /**< \brief (USBFS_HSTADDR1) USB Host Address */
#define USBFS_HSTADDR1_HSTADDRP3(value) ((USBFS_HSTADDR1_HSTADDRP3_Msk & ((value) << USBFS_HSTADDR1_HSTADDRP3_Pos)))
/* -------- USBFS_HSTADDR2 : (USBFS Offset: 0x0428) Host Address 2 Register -------- */
#define USBFS_HSTADDR2_HSTADDRP4_Pos 0
#define USBFS_HSTADDR2_HSTADDRP4_Msk (0x7fu << USBFS_HSTADDR2_HSTADDRP4_Pos) /**< \brief (USBFS_HSTADDR2) USB Host Address */
#define USBFS_HSTADDR2_HSTADDRP4(value) ((USBFS_HSTADDR2_HSTADDRP4_Msk & ((value) << USBFS_HSTADDR2_HSTADDRP4_Pos)))
#define USBFS_HSTADDR2_HSTADDRP5_Pos 8
#define USBFS_HSTADDR2_HSTADDRP5_Msk (0x7fu << USBFS_HSTADDR2_HSTADDRP5_Pos) /**< \brief (USBFS_HSTADDR2) USB Host Address */
#define USBFS_HSTADDR2_HSTADDRP5(value) ((USBFS_HSTADDR2_HSTADDRP5_Msk & ((value) << USBFS_HSTADDR2_HSTADDRP5_Pos)))
#define USBFS_HSTADDR2_HSTADDRP6_Pos 16
#define USBFS_HSTADDR2_HSTADDRP6_Msk (0x7fu << USBFS_HSTADDR2_HSTADDRP6_Pos) /**< \brief (USBFS_HSTADDR2) USB Host Address */
#define USBFS_HSTADDR2_HSTADDRP6(value) ((USBFS_HSTADDR2_HSTADDRP6_Msk & ((value) << USBFS_HSTADDR2_HSTADDRP6_Pos)))
#define USBFS_HSTADDR2_HSTADDRP7_Pos 24
#define USBFS_HSTADDR2_HSTADDRP7_Msk (0x7fu << USBFS_HSTADDR2_HSTADDRP7_Pos) /**< \brief (USBFS_HSTADDR2) USB Host Address */
#define USBFS_HSTADDR2_HSTADDRP7(value) ((USBFS_HSTADDR2_HSTADDRP7_Msk & ((value) << USBFS_HSTADDR2_HSTADDRP7_Pos)))
/* -------- USBFS_HSTADDR3 : (USBFS Offset: 0x042C) Host Address 3 Register -------- */
#define USBFS_HSTADDR3_HSTADDRP8_Pos 0
#define USBFS_HSTADDR3_HSTADDRP8_Msk (0x7fu << USBFS_HSTADDR3_HSTADDRP8_Pos) /**< \brief (USBFS_HSTADDR3) USB Host Address */
#define USBFS_HSTADDR3_HSTADDRP8(value) ((USBFS_HSTADDR3_HSTADDRP8_Msk & ((value) << USBFS_HSTADDR3_HSTADDRP8_Pos)))
#define USBFS_HSTADDR3_HSTADDRP9_Pos 8
#define USBFS_HSTADDR3_HSTADDRP9_Msk (0x7fu << USBFS_HSTADDR3_HSTADDRP9_Pos) /**< \brief (USBFS_HSTADDR3) USB Host Address */
#define USBFS_HSTADDR3_HSTADDRP9(value) ((USBFS_HSTADDR3_HSTADDRP9_Msk & ((value) << USBFS_HSTADDR3_HSTADDRP9_Pos)))
/* -------- USBFS_HSTPIPCFG[5] : (USBFS Offset: 0x500) Host Pipe Configuration Register (n = 0) -------- */
#define USBFS_HSTPIPCFG_ALLOC (0x1u << 1) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Memory Allocate */
#define USBFS_HSTPIPCFG_PBK_Pos 2
#define USBFS_HSTPIPCFG_PBK_Msk (0x3u << USBFS_HSTPIPCFG_PBK_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Banks */
#define USBFS_HSTPIPCFG_PBK(value) ((USBFS_HSTPIPCFG_PBK_Msk & ((value) << USBFS_HSTPIPCFG_PBK_Pos)))
#define   USBFS_HSTPIPCFG_PBK_1_BANK (0x0u << 2) /**< \brief (USBFS_HSTPIPCFG[5]) Single-bank pipe */
#define   USBFS_HSTPIPCFG_PBK_2_BANK (0x1u << 2) /**< \brief (USBFS_HSTPIPCFG[5]) Double-bank pipe */
#define   USBFS_HSTPIPCFG_PBK_3_BANK (0x2u << 2) /**< \brief (USBFS_HSTPIPCFG[5]) Triple-bank pipe */
#define USBFS_HSTPIPCFG_PSIZE_Pos 4
#define USBFS_HSTPIPCFG_PSIZE_Msk (0x7u << USBFS_HSTPIPCFG_PSIZE_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Size */
#define USBFS_HSTPIPCFG_PSIZE(value) ((USBFS_HSTPIPCFG_PSIZE_Msk & ((value) << USBFS_HSTPIPCFG_PSIZE_Pos)))
#define   USBFS_HSTPIPCFG_PSIZE_8_BYTE (0x0u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 8 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_16_BYTE (0x1u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 16 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_32_BYTE (0x2u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 32 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_64_BYTE (0x3u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 64 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_128_BYTE (0x4u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 128 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_256_BYTE (0x5u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 256 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_512_BYTE (0x6u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 512 bytes */
#define   USBFS_HSTPIPCFG_PSIZE_1024_BYTE (0x7u << 4) /**< \brief (USBFS_HSTPIPCFG[5]) 1024 bytes */
#define USBFS_HSTPIPCFG_PTOKEN_Pos 8
#define USBFS_HSTPIPCFG_PTOKEN_Msk (0x3u << USBFS_HSTPIPCFG_PTOKEN_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Token */
#define USBFS_HSTPIPCFG_PTOKEN(value) ((USBFS_HSTPIPCFG_PTOKEN_Msk & ((value) << USBFS_HSTPIPCFG_PTOKEN_Pos)))
#define   USBFS_HSTPIPCFG_PTOKEN_SETUP (0x0u << 8) /**< \brief (USBFS_HSTPIPCFG[5]) SETUP */
#define   USBFS_HSTPIPCFG_PTOKEN_IN (0x1u << 8) /**< \brief (USBFS_HSTPIPCFG[5]) IN */
#define   USBFS_HSTPIPCFG_PTOKEN_OUT (0x2u << 8) /**< \brief (USBFS_HSTPIPCFG[5]) OUT */
#define USBFS_HSTPIPCFG_AUTOSW (0x1u << 10) /**< \brief (USBFS_HSTPIPCFG[5]) Automatic Switch */
#define USBFS_HSTPIPCFG_PTYPE_Pos 12
#define USBFS_HSTPIPCFG_PTYPE_Msk (0x3u << USBFS_HSTPIPCFG_PTYPE_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Type */
#define USBFS_HSTPIPCFG_PTYPE(value) ((USBFS_HSTPIPCFG_PTYPE_Msk & ((value) << USBFS_HSTPIPCFG_PTYPE_Pos)))
#define   USBFS_HSTPIPCFG_PTYPE_CTRL (0x0u << 12) /**< \brief (USBFS_HSTPIPCFG[5]) Control */
#define   USBFS_HSTPIPCFG_PTYPE_ISO (0x1u << 12) /**< \brief (USBFS_HSTPIPCFG[5]) Isochronous */
#define   USBFS_HSTPIPCFG_PTYPE_BLK (0x2u << 12) /**< \brief (USBFS_HSTPIPCFG[5]) Bulk */
#define   USBFS_HSTPIPCFG_PTYPE_INTRPT (0x3u << 12) /**< \brief (USBFS_HSTPIPCFG[5]) Interrupt */
#define USBFS_HSTPIPCFG_PEPNUM_Pos 16
#define USBFS_HSTPIPCFG_PEPNUM_Msk (0xfu << USBFS_HSTPIPCFG_PEPNUM_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Endpoint Number */
#define USBFS_HSTPIPCFG_PEPNUM(value) ((USBFS_HSTPIPCFG_PEPNUM_Msk & ((value) << USBFS_HSTPIPCFG_PEPNUM_Pos)))
#define USBFS_HSTPIPCFG_INTFRQ_Pos 24
#define USBFS_HSTPIPCFG_INTFRQ_Msk (0xffu << USBFS_HSTPIPCFG_INTFRQ_Pos) /**< \brief (USBFS_HSTPIPCFG[5]) Pipe Interrupt Request Frequency */
#define USBFS_HSTPIPCFG_INTFRQ(value) ((USBFS_HSTPIPCFG_INTFRQ_Msk & ((value) << USBFS_HSTPIPCFG_INTFRQ_Pos)))
/* -------- USBFS_HSTPIPISR[5] : (USBFS Offset: 0x530) Host Pipe Status Register (n = 0) -------- */
#define USBFS_HSTPIPISR_RXINI (0x1u << 0) /**< \brief (USBFS_HSTPIPISR[5]) Received IN Data Interrupt */
#define USBFS_HSTPIPISR_TXOUTI (0x1u << 1) /**< \brief (USBFS_HSTPIPISR[5]) Transmitted OUT Data Interrupt */
#define USBFS_HSTPIPISR_TXSTPI (0x1u << 2) /**< \brief (USBFS_HSTPIPISR[5]) Transmitted SETUP Interrupt */
#define USBFS_HSTPIPISR_PERRI (0x1u << 3) /**< \brief (USBFS_HSTPIPISR[5]) Pipe Error Interrupt */
#define USBFS_HSTPIPISR_NAKEDI (0x1u << 4) /**< \brief (USBFS_HSTPIPISR[5]) NAKed Interrupt */
#define USBFS_HSTPIPISR_OVERFI (0x1u << 5) /**< \brief (USBFS_HSTPIPISR[5]) Overflow Interrupt */
#define USBFS_HSTPIPISR_RXSTALLDI (0x1u << 6) /**< \brief (USBFS_HSTPIPISR[5]) Received STALLed Interrupt */
#define USBFS_HSTPIPISR_SHORTPACKETI (0x1u << 7) /**< \brief (USBFS_HSTPIPISR[5]) Short Packet Interrupt */
#define USBFS_HSTPIPISR_DTSEQ_Pos 8
#define USBFS_HSTPIPISR_DTSEQ_Msk (0x3u << USBFS_HSTPIPISR_DTSEQ_Pos) /**< \brief (USBFS_HSTPIPISR[5]) Data Toggle Sequence */
#define   USBFS_HSTPIPISR_DTSEQ_DATA0 (0x0u << 8) /**< \brief (USBFS_HSTPIPISR[5]) Data0 toggle sequence */
#define   USBFS_HSTPIPISR_DTSEQ_DATA1 (0x1u << 8) /**< \brief (USBFS_HSTPIPISR[5]) Data1 toggle sequence */
#define USBFS_HSTPIPISR_NBUSYBK_Pos 12
#define USBFS_HSTPIPISR_NBUSYBK_Msk (0x3u << USBFS_HSTPIPISR_NBUSYBK_Pos) /**< \brief (USBFS_HSTPIPISR[5]) Number of Busy Banks */
#define   USBFS_HSTPIPISR_NBUSYBK_0_BUSY (0x0u << 12) /**< \brief (USBFS_HSTPIPISR[5]) 0 busy bank (all banks free) */
#define   USBFS_HSTPIPISR_NBUSYBK_1_BUSY (0x1u << 12) /**< \brief (USBFS_HSTPIPISR[5]) 1 busy bank */
#define   USBFS_HSTPIPISR_NBUSYBK_2_BUSY (0x2u << 12) /**< \brief (USBFS_HSTPIPISR[5]) 2 busy banks */
#define   USBFS_HSTPIPISR_NBUSYBK_3_BUSY (0x3u << 12) /**< \brief (USBFS_HSTPIPISR[5]) 3 busy banks */
#define USBFS_HSTPIPISR_CURRBK_Pos 14
#define USBFS_HSTPIPISR_CURRBK_Msk (0x3u << USBFS_HSTPIPISR_CURRBK_Pos) /**< \brief (USBFS_HSTPIPISR[5]) Current Bank */
#define   USBFS_HSTPIPISR_CURRBK_BANK0 (0x0u << 14) /**< \brief (USBFS_HSTPIPISR[5]) Current bank is bank0 */
#define   USBFS_HSTPIPISR_CURRBK_BANK1 (0x1u << 14) /**< \brief (USBFS_HSTPIPISR[5]) Current bank is bank1 */
#define   USBFS_HSTPIPISR_CURRBK_BANK2 (0x2u << 14) /**< \brief (USBFS_HSTPIPISR[5]) Current bank is bank2 */
#define USBFS_HSTPIPISR_RWALL (0x1u << 16) /**< \brief (USBFS_HSTPIPISR[5]) Read/Write Allowed */
#define USBFS_HSTPIPISR_CFGOK (0x1u << 18) /**< \brief (USBFS_HSTPIPISR[5]) Configuration OK Status */
#define USBFS_HSTPIPISR_PBYCT_Pos 20
#define USBFS_HSTPIPISR_PBYCT_Msk (0x7ffu << USBFS_HSTPIPISR_PBYCT_Pos) /**< \brief (USBFS_HSTPIPISR[5]) Pipe Byte Count */
#define USBFS_HSTPIPISR_UNDERFI (0x1u << 2) /**< \brief (USBFS_HSTPIPISR[5]) Underflow Interrupt */
#define USBFS_HSTPIPISR_CRCERRI (0x1u << 6) /**< \brief (USBFS_HSTPIPISR[5]) CRC Error Interrupt */
/* -------- USBFS_HSTPIPICR[5] : (USBFS Offset: 0x560) Host Pipe Clear Register (n = 0) -------- */
#define USBFS_HSTPIPICR_RXINIC (0x1u << 0) /**< \brief (USBFS_HSTPIPICR[5]) Received IN Data Interrupt Clear */
#define USBFS_HSTPIPICR_TXOUTIC (0x1u << 1) /**< \brief (USBFS_HSTPIPICR[5]) Transmitted OUT Data Interrupt Clear */
#define USBFS_HSTPIPICR_TXSTPIC (0x1u << 2) /**< \brief (USBFS_HSTPIPICR[5]) Transmitted SETUP Interrupt Clear */
#define USBFS_HSTPIPICR_NAKEDIC (0x1u << 4) /**< \brief (USBFS_HSTPIPICR[5]) NAKed Interrupt Clear */
#define USBFS_HSTPIPICR_OVERFIC (0x1u << 5) /**< \brief (USBFS_HSTPIPICR[5]) Overflow Interrupt Clear */
#define USBFS_HSTPIPICR_RXSTALLDIC (0x1u << 6) /**< \brief (USBFS_HSTPIPICR[5]) Received STALLed Interrupt Clear */
#define USBFS_HSTPIPICR_SHORTPACKETIC (0x1u << 7) /**< \brief (USBFS_HSTPIPICR[5]) Short Packet Interrupt Clear */
#define USBFS_HSTPIPICR_UNDERFIC (0x1u << 2) /**< \brief (USBFS_HSTPIPICR[5]) Underflow Interrupt Clear */
#define USBFS_HSTPIPICR_CRCERRIC (0x1u << 6) /**< \brief (USBFS_HSTPIPICR[5]) CRC Error Interrupt Clear */
/* -------- USBFS_HSTPIPIFR[5] : (USBFS Offset: 0x590) Host Pipe Set Register (n = 0) -------- */
#define USBFS_HSTPIPIFR_RXINIS (0x1u << 0) /**< \brief (USBFS_HSTPIPIFR[5]) Received IN Data Interrupt Set */
#define USBFS_HSTPIPIFR_TXOUTIS (0x1u << 1) /**< \brief (USBFS_HSTPIPIFR[5]) Transmitted OUT Data Interrupt Set */
#define USBFS_HSTPIPIFR_TXSTPIS (0x1u << 2) /**< \brief (USBFS_HSTPIPIFR[5]) Transmitted SETUP Interrupt Set */
#define USBFS_HSTPIPIFR_PERRIS (0x1u << 3) /**< \brief (USBFS_HSTPIPIFR[5]) Pipe Error Interrupt Set */
#define USBFS_HSTPIPIFR_NAKEDIS (0x1u << 4) /**< \brief (USBFS_HSTPIPIFR[5]) NAKed Interrupt Set */
#define USBFS_HSTPIPIFR_OVERFIS (0x1u << 5) /**< \brief (USBFS_HSTPIPIFR[5]) Overflow Interrupt Set */
#define USBFS_HSTPIPIFR_RXSTALLDIS (0x1u << 6) /**< \brief (USBFS_HSTPIPIFR[5]) Received STALLed Interrupt Set */
#define USBFS_HSTPIPIFR_SHORTPACKETIS (0x1u << 7) /**< \brief (USBFS_HSTPIPIFR[5]) Short Packet Interrupt Set */
#define USBFS_HSTPIPIFR_NBUSYBKS (0x1u << 12) /**< \brief (USBFS_HSTPIPIFR[5]) Number of Busy Banks Set */
#define USBFS_HSTPIPIFR_UNDERFIS (0x1u << 2) /**< \brief (USBFS_HSTPIPIFR[5]) Underflow Interrupt Set */
#define USBFS_HSTPIPIFR_CRCERRIS (0x1u << 6) /**< \brief (USBFS_HSTPIPIFR[5]) CRC Error Interrupt Set */
/* -------- USBFS_HSTPIPIMR[5] : (USBFS Offset: 0x5C0) Host Pipe Mask Register (n = 0) -------- */
#define USBFS_HSTPIPIMR_RXINE (0x1u << 0) /**< \brief (USBFS_HSTPIPIMR[5]) Received IN Data Interrupt Enable */
#define USBFS_HSTPIPIMR_TXOUTE (0x1u << 1) /**< \brief (USBFS_HSTPIPIMR[5]) Transmitted OUT Data Interrupt Enable */
#define USBFS_HSTPIPIMR_TXSTPE (0x1u << 2) /**< \brief (USBFS_HSTPIPIMR[5]) Transmitted SETUP Interrupt Enable */
#define USBFS_HSTPIPIMR_PERRE (0x1u << 3) /**< \brief (USBFS_HSTPIPIMR[5]) Pipe Error Interrupt Enable */
#define USBFS_HSTPIPIMR_NAKEDE (0x1u << 4) /**< \brief (USBFS_HSTPIPIMR[5]) NAKed Interrupt Enable */
#define USBFS_HSTPIPIMR_OVERFIE (0x1u << 5) /**< \brief (USBFS_HSTPIPIMR[5]) Overflow Interrupt Enable */
#define USBFS_HSTPIPIMR_RXSTALLDE (0x1u << 6) /**< \brief (USBFS_HSTPIPIMR[5]) Received STALLed Interrupt Enable */
#define USBFS_HSTPIPIMR_SHORTPACKETIE (0x1u << 7) /**< \brief (USBFS_HSTPIPIMR[5]) Short Packet Interrupt Enable */
#define USBFS_HSTPIPIMR_NBUSYBKE (0x1u << 12) /**< \brief (USBFS_HSTPIPIMR[5]) Number of Busy Banks Interrupt Enable */
#define USBFS_HSTPIPIMR_FIFOCON (0x1u << 14) /**< \brief (USBFS_HSTPIPIMR[5]) FIFO Control */
#define USBFS_HSTPIPIMR_PDISHDMA (0x1u << 16) /**< \brief (USBFS_HSTPIPIMR[5]) Pipe Interrupts Disable HDMA Request Enable */
#define USBFS_HSTPIPIMR_PFREEZE (0x1u << 17) /**< \brief (USBFS_HSTPIPIMR[5]) Pipe Freeze */
#define USBFS_HSTPIPIMR_RSTDT (0x1u << 18) /**< \brief (USBFS_HSTPIPIMR[5]) Reset Data Toggle */
#define USBFS_HSTPIPIMR_UNDERFIE (0x1u << 2) /**< \brief (USBFS_HSTPIPIMR[5]) Underflow Interrupt Enable */
#define USBFS_HSTPIPIMR_CRCERRE (0x1u << 6) /**< \brief (USBFS_HSTPIPIMR[5]) CRC Error Interrupt Enable */
/* -------- USBFS_HSTPIPIER[5] : (USBFS Offset: 0x5F0) Host Pipe Enable Register (n = 0) -------- */
#define USBFS_HSTPIPIER_RXINES (0x1u << 0) /**< \brief (USBFS_HSTPIPIER[5]) Received IN Data Interrupt Enable */
#define USBFS_HSTPIPIER_TXOUTES (0x1u << 1) /**< \brief (USBFS_HSTPIPIER[5]) Transmitted OUT Data Interrupt Enable */
#define USBFS_HSTPIPIER_TXSTPES (0x1u << 2) /**< \brief (USBFS_HSTPIPIER[5]) Transmitted SETUP Interrupt Enable */
#define USBFS_HSTPIPIER_PERRES (0x1u << 3) /**< \brief (USBFS_HSTPIPIER[5]) Pipe Error Interrupt Enable */
#define USBFS_HSTPIPIER_NAKEDES (0x1u << 4) /**< \brief (USBFS_HSTPIPIER[5]) NAKed Interrupt Enable */
#define USBFS_HSTPIPIER_OVERFIES (0x1u << 5) /**< \brief (USBFS_HSTPIPIER[5]) Overflow Interrupt Enable */
#define USBFS_HSTPIPIER_RXSTALLDES (0x1u << 6) /**< \brief (USBFS_HSTPIPIER[5]) Received STALLed Interrupt Enable */
#define USBFS_HSTPIPIER_SHORTPACKETIES (0x1u << 7) /**< \brief (USBFS_HSTPIPIER[5]) Short Packet Interrupt Enable */
#define USBFS_HSTPIPIER_NBUSYBKES (0x1u << 12) /**< \brief (USBFS_HSTPIPIER[5]) Number of Busy Banks Enable */
#define USBFS_HSTPIPIER_PDISHDMAS (0x1u << 16) /**< \brief (USBFS_HSTPIPIER[5]) Pipe Interrupts Disable HDMA Request Enable */
#define USBFS_HSTPIPIER_PFREEZES (0x1u << 17) /**< \brief (USBFS_HSTPIPIER[5]) Pipe Freeze Enable */
#define USBFS_HSTPIPIER_RSTDTS (0x1u << 18) /**< \brief (USBFS_HSTPIPIER[5]) Reset Data Toggle Enable */
#define USBFS_HSTPIPIER_UNDERFIES (0x1u << 2) /**< \brief (USBFS_HSTPIPIER[5]) Underflow Interrupt Enable */
#define USBFS_HSTPIPIER_CRCERRES (0x1u << 6) /**< \brief (USBFS_HSTPIPIER[5]) CRC Error Interrupt Enable */
/* -------- USBFS_HSTPIPIDR[5] : (USBFS Offset: 0x620) Host Pipe Disable Register (n = 0) -------- */
#define USBFS_HSTPIPIDR_RXINEC (0x1u << 0) /**< \brief (USBFS_HSTPIPIDR[5]) Received IN Data Interrupt Disable */
#define USBFS_HSTPIPIDR_TXOUTEC (0x1u << 1) /**< \brief (USBFS_HSTPIPIDR[5]) Transmitted OUT Data Interrupt Disable */
#define USBFS_HSTPIPIDR_TXSTPEC (0x1u << 2) /**< \brief (USBFS_HSTPIPIDR[5]) Transmitted SETUP Interrupt Disable */
#define USBFS_HSTPIPIDR_PERREC (0x1u << 3) /**< \brief (USBFS_HSTPIPIDR[5]) Pipe Error Interrupt Disable */
#define USBFS_HSTPIPIDR_NAKEDEC (0x1u << 4) /**< \brief (USBFS_HSTPIPIDR[5]) NAKed Interrupt Disable */
#define USBFS_HSTPIPIDR_OVERFIEC (0x1u << 5) /**< \brief (USBFS_HSTPIPIDR[5]) Overflow Interrupt Disable */
#define USBFS_HSTPIPIDR_RXSTALLDEC (0x1u << 6) /**< \brief (USBFS_HSTPIPIDR[5]) Received STALLed Interrupt Disable */
#define USBFS_HSTPIPIDR_SHORTPACKETIEC (0x1u << 7) /**< \brief (USBFS_HSTPIPIDR[5]) Short Packet Interrupt Disable */
#define USBFS_HSTPIPIDR_NBUSYBKEC (0x1u << 12) /**< \brief (USBFS_HSTPIPIDR[5]) Number of Busy Banks Disable */
#define USBFS_HSTPIPIDR_FIFOCONC (0x1u << 14) /**< \brief (USBFS_HSTPIPIDR[5]) FIFO Control Disable */
#define USBFS_HSTPIPIDR_PDISHDMAC (0x1u << 16) /**< \brief (USBFS_HSTPIPIDR[5]) Pipe Interrupts Disable HDMA Request Disable */
#define USBFS_HSTPIPIDR_PFREEZEC (0x1u << 17) /**< \brief (USBFS_HSTPIPIDR[5]) Pipe Freeze Disable */
#define USBFS_HSTPIPIDR_UNDERFIEC (0x1u << 2) /**< \brief (USBFS_HSTPIPIDR[5]) Underflow Interrupt Disable */
#define USBFS_HSTPIPIDR_CRCERREC (0x1u << 6) /**< \brief (USBFS_HSTPIPIDR[5]) CRC Error Interrupt Disable */
/* -------- USBFS_HSTPIPINRQ[5] : (USBFS Offset: 0x650) Host Pipe IN Request Register (n = 0) -------- */
#define USBFS_HSTPIPINRQ_INRQ_Pos 0
#define USBFS_HSTPIPINRQ_INRQ_Msk (0xffu << USBFS_HSTPIPINRQ_INRQ_Pos) /**< \brief (USBFS_HSTPIPINRQ[5]) IN Request Number before Freeze */
#define USBFS_HSTPIPINRQ_INRQ(value) ((USBFS_HSTPIPINRQ_INRQ_Msk & ((value) << USBFS_HSTPIPINRQ_INRQ_Pos)))
#define USBFS_HSTPIPINRQ_INMODE (0x1u << 8) /**< \brief (USBFS_HSTPIPINRQ[5]) IN Request Mode */
/* -------- USBFS_HSTPIPERR[5] : (USBFS Offset: 0x680) Host Pipe Error Register (n = 0) -------- */
#define USBFS_HSTPIPERR_DATATGL (0x1u << 0) /**< \brief (USBFS_HSTPIPERR[5]) Data Toggle Error */
#define USBFS_HSTPIPERR_DATAPID (0x1u << 1) /**< \brief (USBFS_HSTPIPERR[5]) Data PID Error */
#define USBFS_HSTPIPERR_PID (0x1u << 2) /**< \brief (USBFS_HSTPIPERR[5]) Data PID Error */
#define USBFS_HSTPIPERR_TIMEOUT (0x1u << 3) /**< \brief (USBFS_HSTPIPERR[5]) Time-Out Error */
#define USBFS_HSTPIPERR_CRC16 (0x1u << 4) /**< \brief (USBFS_HSTPIPERR[5]) CRC16 Error */
#define USBFS_HSTPIPERR_COUNTER_Pos 5
#define USBFS_HSTPIPERR_COUNTER_Msk (0x3u << USBFS_HSTPIPERR_COUNTER_Pos) /**< \brief (USBFS_HSTPIPERR[5]) Error Counter */
#define USBFS_HSTPIPERR_COUNTER(value) ((USBFS_HSTPIPERR_COUNTER_Msk & ((value) << USBFS_HSTPIPERR_COUNTER_Pos)))
/* -------- USBFS_HSTDMANXTDSC : (USBFS Offset: N/A) Host DMA Channel Next Descriptor Address Register -------- */
#define USBFS_HSTDMANXTDSC_NXT_DSC_ADD_Pos 0
#define USBFS_HSTDMANXTDSC_NXT_DSC_ADD_Msk (0xffffffffu << USBFS_HSTDMANXTDSC_NXT_DSC_ADD_Pos) /**< \brief (USBFS_HSTDMANXTDSC) Next Descriptor Address */
#define USBFS_HSTDMANXTDSC_NXT_DSC_ADD(value) ((USBFS_HSTDMANXTDSC_NXT_DSC_ADD_Msk & ((value) << USBFS_HSTDMANXTDSC_NXT_DSC_ADD_Pos)))
/* -------- USBFS_HSTDMAADDRESS : (USBFS Offset: N/A) Host DMA Channel Address Register -------- */
#define USBFS_HSTDMAADDRESS_BUFF_ADD_Pos 0
#define USBFS_HSTDMAADDRESS_BUFF_ADD_Msk (0xffffffffu << USBFS_HSTDMAADDRESS_BUFF_ADD_Pos) /**< \brief (USBFS_HSTDMAADDRESS) Buffer Address */
#define USBFS_HSTDMAADDRESS_BUFF_ADD(value) ((USBFS_HSTDMAADDRESS_BUFF_ADD_Msk & ((value) << USBFS_HSTDMAADDRESS_BUFF_ADD_Pos)))
/* -------- USBFS_HSTDMACONTROL : (USBFS Offset: N/A) Host DMA Channel Control Register -------- */
#define USBFS_HSTDMACONTROL_CHANN_ENB (0x1u << 0) /**< \brief (USBFS_HSTDMACONTROL) Channel Enable Command */
#define USBFS_HSTDMACONTROL_LDNXT_DSC (0x1u << 1) /**< \brief (USBFS_HSTDMACONTROL) Load Next Channel Transfer Descriptor Enable Command */
#define USBFS_HSTDMACONTROL_END_TR_EN (0x1u << 2) /**< \brief (USBFS_HSTDMACONTROL) End of Transfer Enable Control (OUT transfers only) */
#define USBFS_HSTDMACONTROL_END_B_EN (0x1u << 3) /**< \brief (USBFS_HSTDMACONTROL) End of Buffer Enable Control */
#define USBFS_HSTDMACONTROL_END_TR_IT (0x1u << 4) /**< \brief (USBFS_HSTDMACONTROL) End of Transfer Interrupt Enable */
#define USBFS_HSTDMACONTROL_END_BUFFIT (0x1u << 5) /**< \brief (USBFS_HSTDMACONTROL) End of Buffer Interrupt Enable */
#define USBFS_HSTDMACONTROL_DESC_LD_IT (0x1u << 6) /**< \brief (USBFS_HSTDMACONTROL) Descriptor Loaded Interrupt Enable */
#define USBFS_HSTDMACONTROL_BURST_LCK (0x1u << 7) /**< \brief (USBFS_HSTDMACONTROL) Burst Lock Enable */
#define USBFS_HSTDMACONTROL_BUFF_LENGTH_Pos 16
#define USBFS_HSTDMACONTROL_BUFF_LENGTH_Msk (0xffffu << USBFS_HSTDMACONTROL_BUFF_LENGTH_Pos) /**< \brief (USBFS_HSTDMACONTROL) Buffer Byte Length (Write-only) */
#define USBFS_HSTDMACONTROL_BUFF_LENGTH(value) ((USBFS_HSTDMACONTROL_BUFF_LENGTH_Msk & ((value) << USBFS_HSTDMACONTROL_BUFF_LENGTH_Pos)))
/* -------- USBFS_HSTDMASTATUS : (USBFS Offset: N/A) Host DMA Channel Status Register -------- */
#define USBFS_HSTDMASTATUS_CHANN_ENB (0x1u << 0) /**< \brief (USBFS_HSTDMASTATUS) Channel Enable Status */
#define USBFS_HSTDMASTATUS_CHANN_ACT (0x1u << 1) /**< \brief (USBFS_HSTDMASTATUS) Channel Active Status */
#define USBFS_HSTDMASTATUS_END_TR_ST (0x1u << 4) /**< \brief (USBFS_HSTDMASTATUS) End of Channel Transfer Status */
#define USBFS_HSTDMASTATUS_END_BF_ST (0x1u << 5) /**< \brief (USBFS_HSTDMASTATUS) End of Channel Buffer Status */
#define USBFS_HSTDMASTATUS_DESC_LDST (0x1u << 6) /**< \brief (USBFS_HSTDMASTATUS) Descriptor Loaded Status */
#define USBFS_HSTDMASTATUS_BUFF_COUNT_Pos 16
#define USBFS_HSTDMASTATUS_BUFF_COUNT_Msk (0xffffu << USBFS_HSTDMASTATUS_BUFF_COUNT_Pos) /**< \brief (USBFS_HSTDMASTATUS) Buffer Byte Count */
#define USBFS_HSTDMASTATUS_BUFF_COUNT(value) ((USBFS_HSTDMASTATUS_BUFF_COUNT_Msk & ((value) << USBFS_HSTDMASTATUS_BUFF_COUNT_Pos)))
/* -------- USBFS_CTRL : (USBFS Offset: 0x0800) General Control Register -------- */
#define USBFS_CTRL_RDERRE (0x1u << 4) /**< \brief (USBFS_CTRL) Remote Device Connection Error Interrupt Enable */
#define USBFS_CTRL_FRZCLK (0x1u << 14) /**< \brief (USBFS_CTRL) Freeze USB Clock */
#define USBFS_CTRL_USBE (0x1u << 15) /**< \brief (USBFS_CTRL) USBFS Enable */
#define USBFS_CTRL_UIMOD (0x1u << 25) /**< \brief (USBFS_CTRL) USBFS Mode */
#define   USBFS_CTRL_UIMOD_HOST (0x0u << 25) /**< \brief (USBFS_CTRL) The module is in USB Host mode. */
#define   USBFS_CTRL_UIMOD_DEVICE (0x1u << 25) /**< \brief (USBFS_CTRL) The module is in USB Device mode. */
/* -------- USBFS_SR : (USBFS Offset: 0x0804) General Status Register -------- */
#define USBFS_SR_RDERRI (0x1u << 4) /**< \brief (USBFS_SR) Remote Device Connection Error Interrupt (Host mode only) */
#define USBFS_SR_VBUSRQ (0x1u << 9) /**< \brief (USBFS_SR) VBus Request (Host mode only) */
/* -------- USBFS_SCR : (USBFS Offset: 0x0808) General Status Clear Register -------- */
#define USBFS_SCR_RDERRIC (0x1u << 4) /**< \brief (USBFS_SCR) Remote Device Connection Error Interrupt Clear */
#define USBFS_SCR_VBUSRQC (0x1u << 9) /**< \brief (USBFS_SCR) VBus Request Clear */
/* -------- USBFS_SFR : (USBFS Offset: 0x080C) General Status Set Register -------- */
#define USBFS_SFR_RDERRIS (0x1u << 4) /**< \brief (USBFS_SFR) Remote Device Connection Error Interrupt Set */
#define USBFS_SFR_VBUSRQS (0x1u << 9) /**< \brief (USBFS_SFR) VBus Request Set */

/*@}*/


#endif /* _SAM4C_USBFS_COMPONENT_ */
