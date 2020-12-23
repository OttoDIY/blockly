# Librería Arduino ColorConverter
La librería ColorConverter contiene funciones sencillas para convertir colores entre diferentes sistemas (RGB, HSV, HSL, Temperature).

Más información https://www.luisllamas.es/libreria-arduino-colorconverter/

## Instrucciones de uso

La librería ColorConverter está formada por funciones estáticas que permiten la conversión entre colores. Por tanto, no es necesario instanciar un objeto, simplemente llamamos a las funciones necesarias.

```c++
static void RgbToHsv(uint8_t r, uint8_t g, uint8_t b, double &hue, double &saturation, double &value);
static void RgbToHsl(uint8_t red, uint8_t green, uint8_t blue, double &hue, double &saturation, double &lighting);	
static void HsvToRgb(double hue, double saturation, double value, uint8_t & red, uint8_t & green, uint8_t & blue);
static void HslToRgb(double hue, double saturation, double lightness, uint8_t &red, uint8_t &green, uint8_t &blue);
static void TemperatureToRgb(int kelvin, uint8_t & red, uint8_t & green, uint8_t & blue);
```

## ToDo
- [ ] Añadir funciones de byte a byte para evitar el uso de coma flotante

## Ejemplos
La librería ColorConverter incluye los siguientes ejemplos para ilustrar su uso.

* ColorConverter: Ejemplo que muestra el uso de algunas de las funciones de conversión.
```c++
#include "ColorConverterLib.h"

void setup() 
{
	uint8_t red = 50;
	uint8_t green = 100;
	uint8_t blue = 150;
	double hue, saturation, lighting, value;
	
	ColorConverter::RgbToHsl(red, green, blue, hue, saturation, lighting);
	ColorConverter::RgbToHsv(red, green, blue, hue, saturation, value);
	ColorConverter::HslToRgb(hue, saturation, lighting, red, green, blue);
	ColorConverter::HsvToRgb(hue, saturation, lighting, red, green, blue);

	ColorConverter::TemperatureToRgb(15000, red, green, blue);
}

void loop() 
{
}
```
