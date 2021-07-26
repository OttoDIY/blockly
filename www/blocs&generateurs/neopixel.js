'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//////////////

Blockly.Blocks["pixel_init"]={init:function(){
    var card=window.localStorage.card;
	this.appendDummyInput()	.appendField(new Blockly.FieldImage('media/neopixel.png', 33, 33, "*")).appendField(Blockly.Msg.pixel1);
    this.appendDummyInput()	.appendField(Blockly.Msg.pin).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "pin");
    this.appendValueInput("num", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pixel4);
    this.setInputsInline(true); 
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel1_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_init"]=function(block){
    var pin = this.getFieldValue('pin');
	var number=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["pixel"]="#include <Adafruit_NeoPixel.h>";
    Blockly.Arduino.definitions_["pixel"]="Adafruit_NeoPixel pixel = Adafruit_NeoPixel(" + number + ", " + pin + ", NEO_GRB + NEO_KHZ800);";
    Blockly.Arduino.setups_["pixel"]='pixel.begin();\n'
    +'pixel.clear();\n';
    return ""
};
Blockly.Python["pixel_init"]=function(block){
    var pin=Blockly.Python.valueToCode(block, "pin", Blockly.Python.ORDER_ASSIGNMENT);
	var number=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.imports_["neopixel"]="from neopixel import NeoPixel";
	Blockly.Python.imports_["pin"]="from machine import Pin";
    Blockly.Python.definitions_["pin_"+pin]="BROCHE_" + pin + " = Pin(" + pin + ", Pin.OUT)\nnp = NeoPixel(BROCHE_" + pin + ", " + number + ")";
    return ""
};


//////////////
Blockly.Blocks["pixel_setcolor"]={init:function(){
	this.appendValueInput("pin", "Number").appendField(Blockly.Msg.pixel6);
	this.appendDummyInput().appendField(Blockly.Msg.pixel3).appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_setcolor"]=function(block){
    var pin=Blockly.Arduino.valueToCode(block, "pin", Blockly.Arduino.ORDER_ASSIGNMENT);
	var color=block.getFieldValue("color");
	var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
    var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
    var code = "pixel.setPixelColor(" + pin + ", " + red + ", " + green + ", " + blue + ");\n";
    return code
};

Blockly.Python["pixel_setcolor"]=function(block){
    var pin=Blockly.Python.valueToCode(block, "pin", Blockly.Python.ORDER_ASSIGNMENT);
	var color=block.getFieldValue("color");
	var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
	var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
    return "np[" + pin + "] = (" + red + ", " + green + ", " + blue + ")\n"
};

Blockly.Blocks["pixel_rgb"]={init:function(){
	this.appendValueInput("pin", "Number").appendField(Blockly.Msg.pixel6);
    this.appendValueInput("R") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("R");
    this.appendValueInput("G").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("G");
    this.appendValueInput("B")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
    
};
Blockly.Arduino["pixel_rgb"]=function(block){
    var pin =Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ASSIGNMENT);
    var R = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var G = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var B = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'pixel.setPixelColor('+pin+','+R+','+G+','+B+');\n';
    return code 
};

Blockly.Blocks["pixel_fill"]={init:function(){
	this.appendDummyInput().appendField("🌈 fill").appendField(Blockly.Msg.pixel3).appendField(new Blockly.FieldColour("#ff0000"),"color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_fill"]=function(block){
	var color=block.getFieldValue("color");
    var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
    var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
    var code = "pixel.fill( pixel.Color("  + red + ", " + green + ", " + blue + "));\n";
    return code
};
Blockly.Blocks["pixel_fill2"]={init:function(){
	this.appendDummyInput().appendField("🌈 fill").appendField(Blockly.Msg.pixel3)
    this.appendValueInput("R") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") .appendField("R");
    this.appendValueInput("G").setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField("G");
    this.appendValueInput("B")  .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")   .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
    
};
Blockly.Arduino["pixel_fill2"]=function(block){
    var R = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var G = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var B = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
    var code = "pixel.fill(pixel.Color("  + R + ", " + G + ", " + B + "));\n";
    return code 
};
//////////////
Blockly.Blocks["pixel_show"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.pixel2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel2_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_show"]=function(block){
    return "pixel.show();\n"
};
Blockly.Python["pixel_show"]=function(block){
    return "np.write()\n"
};
Blockly.Blocks["pixel_clear"]={init:function(){
    this.appendDummyInput()  .appendField("🌈 clear🧹");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel2_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_clear"]=function(block){
    var code = 'pixel.clear();\n';
    return code;
};

//////////////
Blockly.Blocks["pixel_setbrightness"]={init:function(){
    this.appendValueInput("brightness") .setCheck("Number").appendField(Blockly.Msg.pixel5);
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.pixel5_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")}
};
Blockly.Arduino["pixel_setbrightness"]=function(block){
	var brightness=Blockly.Arduino.valueToCode(block, "brightness");
    return "pixel.setBrightness(" + brightness + ");\n"
};
Blockly.Python["pixel_setbrightness"]=function(){return""};


Blockly.Blocks["MatrixLED_WS2812B_init"] = {  init: function() {
      this.appendDummyInput()  
      .appendField(new Blockly.FieldImage('media/neopixelmatrix.png', 33, 33, "*")).appendField(Blockly.Msg.pixel1+" "+Blockly.Msg.matrice+" 8x8") .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("Pin_Matrix_init") .setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
      this.setInputsInline(true);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    }
  };
  Blockly.Arduino.MatrixLED_WS2812B_init = function() {
    var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_Matrix_init', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = 64;
    Blockly.Arduino.includes_['includes_Matrix_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
    Blockly.Arduino.definitions_['define_Matrix_ledRGB_WS2812B NeoMatrix'] = 'Adafruit_NeoPixel NeoMatrix = Adafruit_NeoPixel(' + numpixels + ', '+ pin_ledrgb +', NEO_GRB + NEO_KHZ800);';
    
    Blockly.Arduino.setups_['setup_Matrix_ledRGB_WS2812B NeoMatrix '] = 'pinMode('+pin_ledrgb+', OUTPUT);\n'
    + 'NeoMatrix.begin();';
    return '';
  };
  
  Blockly.Blocks["MatrixLED_WS2812B_init_2"] = {  init: function() {
      this.appendDummyInput()  
      .appendField(new Blockly.FieldImage('media/neopixelmatrix.png', 33, 33, "*")).appendField(Blockly.Msg.pixel1+" "+Blockly.Msg.matrice+" 8x8") .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("Pin_Matrix_init") .setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
      this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    }
  };
  Blockly.Arduino.MatrixLED_WS2812B_init_2 = function() {
    var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_Matrix_init', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = 64;
    Blockly.Arduino.includes_['includes_Matrix_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
    Blockly.Arduino.definitions_['define_Matrix_ledRGB_WS2812B NeoMatrix'] = 'Adafruit_NeoPixel NeoMatrix = Adafruit_NeoPixel(' + numpixels + ', '+ pin_ledrgb +', NEO_GRB + NEO_KHZ800);';
    
    Blockly.Arduino.setups_['setup_Matrix_ledRGB_WS2812B NeoMatrix '] = 'pinMode('+pin_ledrgb+', OUTPUT);\n'
    + 'NeoMatrix.begin();';
    return '';
  };
 
  
  Blockly.Blocks["MatrixLED_WS2812B_setPixelColor"] = { init: function() {
      this.appendDummyInput() .appendField(Blockly.Msg.pixel1+" "+Blockly.Msg.matrice)
      this.appendValueInput("Pixel_number") .setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pixel6 );
      this.appendValueInput("Red").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT) .appendField("R");
      this.appendValueInput("Green").setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT) .appendField("G");
      this.appendValueInput("Blue") .setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("B");
      this.appendValueInput("brightness") .setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.pixel5);
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    },
  };

  Blockly.Arduino.MatrixLED_WS2812B_setPixelColor = function() {
    var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
    var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
    var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
    var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);
    var lumin = Blockly.Arduino.valueToCode(this, 'brightness', Blockly.Arduino.ORDER_ATOMIC);
  
    var code = 'NeoMatrix.setPixelColor('+pixel_number+',NeoMatrix.Color('+red+','+green+','+blue+','+lumin+'));\n'
              + 'NeoMatrix.show();\n';
    return code;
  };
  
  Blockly.Blocks["MatrixLED_WS2812B_setBrightness"] = {
    init: function() {
      this.appendDummyInput().appendField(Blockly.Msg.pixel1+" "+Blockly.Msg.matrice)
      this.appendValueInput("brightness") .setCheck('Number') .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.pixel5);		
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    },
  };
  Blockly.Arduino.MatrixLED_WS2812B_setBrightness = function() {
    var lumin = Blockly.Arduino.valueToCode(this, 'brightness', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'NeoMatrix.setBrightness('+lumin+');\n';
    return code;
  };
  
  Blockly.Blocks["MatrixLED_WS2812B_CLEAN"] = {
    init: function() {
      this.appendDummyInput().appendField("clear " + Blockly.Msg.pixel1+" "+Blockly.Msg.matrice)
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    },
  };
  Blockly.Arduino.MatrixLED_WS2812B_CLEAN = function() {
    var code = 'NeoMatrix.clear();\n'
    +'NeoMatrix.show();\n';
    return code;
};
  
  Blockly.Blocks["MatrixLED_WS2812B_draw"] = {  init: function() {
       this.appendDummyInput().appendField('  ').appendField(' 0').appendField('    1').appendField('   2').appendField('    3').appendField('   4').appendField('    5').appendField('   6').appendField('    7');
      this.appendDummyInput().appendField('0 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel0')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel1')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel2')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel3')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel4')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel5')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel6')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel7');
      this.appendDummyInput().appendField('1 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel8')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel9')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel10')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel11')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel12')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel13')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel14')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel15');
      this.appendDummyInput().appendField('2 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel16')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel17')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel18')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel19')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel20')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel21')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel22')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel23');
      this.appendDummyInput().appendField('3 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel24')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel25')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel26')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel27')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel28')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel29')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel30')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel31');
      this.appendDummyInput().appendField('4 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel32')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel33')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel34')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel35')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel36')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel37')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel38')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel39');
      this.appendDummyInput().appendField('5 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel40')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel41')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel42')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel43')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel44')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel45')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel46')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel47');
      this.appendDummyInput().appendField('6 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel48')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel49')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel50')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel51')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel52')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel53')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel54')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel55');
      this.appendDummyInput().appendField('7 ')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel56')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel57')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel58')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel59')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel60')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel61')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel62')
          .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel63');
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#4b009f");
      this.setTooltip('');
      this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
    },
  };
  Blockly.Arduino.MatrixLED_WS2812B_draw = function() {
    var code = '';
    for (var i=0; i<64; i++) {
      if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
          var rgbHexa = this.getFieldValue('Pixel' + i).replace('#', '');
          code += 'NeoMatrix.setPixelColor('+ i +', 0x' + rgbHexa + ');\n'
      }
    };
    code += 'NeoMatrix.show();\n';
    return code;
  };