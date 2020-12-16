/* ----------------------------------------------------------------------------
 *         SAM Software Package License
 * ----------------------------------------------------------------------------
 * Copyright (c) 2016 Atmel Corporation,
 *                    a wholly owned subsidiary of Microchip Technology Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the Licence at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 */
#ifndef _SAML_INCLUDED_
#define _SAML_INCLUDED_

#if   defined(__SAML21E18A__) || defined(__ATSAML21E18A__)
  #include "saml21a1/saml21e18a.h"
#elif defined(__SAML21G18A__) || defined(__ATSAML21G18A__)
  #include "saml21a1/saml21g18a.h"
#elif defined(__SAML21J18A__) || defined(__ATSAML21J18A__)
  #include "saml21a1/saml21j18a.h"

#elif defined(__SAML21E15B__) || defined(__ATSAML21E15B__)
  #include "saml21b/saml21e15b.h"
#elif defined(__SAML21E16B__) || defined(__ATSAML21E16B__)
  #include "saml21b/saml21e16b.h"
#elif defined(__SAML21E17B__) || defined(__ATSAML21E17B__)
  #include "saml21b/saml21e17b.h"
#elif defined(__SAML21E18B__) || defined(__ATSAML21E18B__)
  #include "saml21b/saml21e18b.h"
#elif defined(__SAML21G16B__) || defined(__ATSAML21G16B__)
  #include "saml21b/saml21g16b.h"
#elif defined(__SAML21G17B__) || defined(__ATSAML21G17B__)
  #include "saml21b/saml21g17b.h"
#elif defined(__SAML21G18B__) || defined(__ATSAML21G18B__)
  #include "saml21b/saml21g18b.h"
#elif defined(__SAML21J16B__) || defined(__ATSAML21J16B__)
  #include "saml21b/saml21j16b.h"
#elif defined(__SAML21J17B__) || defined(__ATSAML21J17B__)
  #include "saml21b/saml21j17b.h"
#elif defined(__SAML21J18B__) || defined(__ATSAML21J18B__)
  #include "saml21b/saml21j18b.h"
#elif defined(__SAML21J18BU__) || defined(__ATSAML21J18BU__)
  #include "saml21b/saml21j18bu.h"
#else
  #error Device not supported
#endif

#endif /* _SAML_INCLUDED_ */
