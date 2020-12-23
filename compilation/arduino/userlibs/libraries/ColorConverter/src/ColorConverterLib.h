/***************************************************
Copyright (c) 2017 Luis Llamas
(www.luisllamas.es)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License
 ****************************************************/
 
#ifndef _COLORCONVERTERLIB_h
#define _COLORCONVERTERLIB_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "Arduino.h"
#else
	#include "WProgram.h"
#endif

class ColorConverter 
{
public:
	static void RgbToHsv(uint8_t r, uint8_t g, uint8_t b, double &hue, double &saturation, double &value);

	static void RgbToHsl(uint8_t red, uint8_t green, uint8_t blue, double &hue, double &saturation, double &lighting);	

	static void HsvToRgb(double hue, double saturation, double value, uint8_t & red, uint8_t & green, uint8_t & blue);

	static void HslToRgb(double hue, double saturation, double lightness, uint8_t &red, uint8_t &green, uint8_t &blue);

	static void TemperatureToRgb(int kelvin, uint8_t & red, uint8_t & green, uint8_t & blue);

private:
	static double threeway_max(double a, double b, double c);
	static double threeway_min(double a, double b, double c);
	static double hue2rgb(double p, double q, double t);
};
#endif

