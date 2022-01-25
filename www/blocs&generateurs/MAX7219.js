'use strict';
goog.provide('Blockly.Blocks.MAX7219');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

// Matrix 8x8 Max7219 dependant on Otto main Libraries

Blockly.Blocks['otto9_matrix_init'] = { helpUrl: 'https://playground.arduino.cc/Main/LedControl',init: function() {
  var card=window.localStorage.card;
  this.setColour("#4b009f");
this.appendDummyInput() .appendField(new Blockly.FieldImage('media/matrix.png',33,33)) .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT+" "+Blockly.Msg.OTTO_HOME_TEXT )
this.appendDummyInput()	.appendField("CLK").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_CLK");
this.appendDummyInput()	.appendField("CS").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_CS");
this.appendDummyInput()	.appendField("DIN").appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_DIN");
this.appendDummyInput()	.appendField(Blockly.Msg.ST7735_Rotate).appendField(new Blockly.FieldDropdown([["0°", "0"], ["90°", "1"], ["180°", "2"], ["270°", "3"]]), "Orientation")
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('Init the library Aand define the pins to use the led matrix');}
};
Blockly.Arduino['otto9_matrix_init'] = function(block) {
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_cs = this.getFieldValue('PIN_CS');
  var pin_dat = this.getFieldValue('PIN_DIN');

  var Orientation = this.getFieldValue('Orientation'); 
  Blockly.Arduino.includes_['otto_lib'] = '#include <Otto.h>\n'
	+ 'Otto Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'const char data[] = "VARIABLE#";\n'
  + 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define CLK '+pin_clk+' // Clock pin\n'
	+ '#define CS '+pin_cs+'  // Chip Select pin\n'
  + '#define DIN '+pin_dat+' // Data In pin\n'
	+ '#define Orientation '+Orientation+'// 8x8 LED Matrix orientation  Top  = 1, Bottom = 2, Left = 3, Right = 4 ';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN, CS, CLK, Orientation);';
  var code='';
  return code;
};

Blockly.Blocks['otto9_matrix'] = { init: function() {
    this.appendDummyInput() .appendField('  ') .appendField('1') .appendField('  2').appendField('  3') .appendField(' 4') .appendField(' 5') .appendField('  6')
   Blockly.FieldCheckbox.CHECK_CHAR= '🔴'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel5');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel7')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel11');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel15')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel17');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel23');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel29');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_matrix'] = function(block) {
  var code = 'matrix = 0b';
  for (var i=0; i<30; i++) {
  if (this.getFieldValue('otto9_matrix_pixel' + i) == 'TRUE')
    code += '1';
    else code +='0';
  };
  code += ';\n'
  +'Otto.putMouth(matrix, false);\n';
  return code;
};

Blockly.Python['otto9_matrix'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var matrix = '0b';
    for (var i=0; i<30; i++) {
        if (this.getFieldValue('otto9_matrix_pixel' + i) == 'TRUE')
            matrix += '1';
        else matrix +='0';
    };
    var code = 'Otto.putMouth(' + matrix +', false)\n';
    return code;
};
											  
Blockly.Blocks["otto9_matrix8x8"] = {  init: function() {
  this.appendDummyInput().appendField('  ').appendField(' 0').appendField(' 1').appendField(' 2').appendField('  3').appendField('  4').appendField(' 5').appendField(' 6').appendField(' 7');
  Blockly.FieldCheckbox.CHECK_CHAR= '🔴'
  this.appendDummyInput().appendField('0 ') 
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel0')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel8')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel16')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel24')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel32')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel40')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel48')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel56');
 this.appendDummyInput().appendField('1 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel1')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel9')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel17')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel25')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel33')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel41')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel49')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel57');
 this.appendDummyInput().appendField('2 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel2')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel10')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel18')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel26')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel34')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel42')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel50')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel58');
 this.appendDummyInput().appendField('3 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel3')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel11')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel19')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel27')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel35')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel43')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel51')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel59');
 this.appendDummyInput().appendField('4 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel4')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel12')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel20')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel28')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel36')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel44')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel52')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel60');
 this.appendDummyInput().appendField('5 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel5')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel13')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel21')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel29')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel37')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel45')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel53')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel61');
 this.appendDummyInput().appendField('6 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel6')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel14')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel22')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel30')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel38')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel46')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel54')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel62');
 this.appendDummyInput().appendField('7 ')
    .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pixel7')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel15')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel23')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel31')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel39')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel47')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel55')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel63');
 this.setInputsInline(false);
 this.setPreviousStatement(true, null);
 this.setNextStatement(true, null);
 this.setColour("#4b009f");
 this.setTooltip('');
 this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
},
};
Blockly.Arduino.otto9_matrix8x8 = function() {
var code = '';
for (var i=0; i<64; i++) {

 if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
     var on = this.getFieldValue('Pixel' + i)== "TRUE"? "1" : "0";
     var row= i +1 
     {if  (i >= 0 && i <= 7)row=0}{if  (i >= 8 && i < 16)row=1}{if  (i >= 16 && i < 24)row=2}{if  (i >= 24 && i < 32)row=3}
     {if  (i >= 32 && i < 40)row=4}{if  (i >= 40 && i < 48)row=5}{if  (i >= 48 && i < 56)row=6}{if  (i >= 56 && i < 64)row=7}
     var col= i  
     {if  (i > 1 && i <= 7)col=i}{if  (i >= 8 && i < 16)col=i-8}{if  (i >= 16 && i < 24)col=i-16}{if  (i >= 24 && i < 32)col=i-24}
     {if  (i >= 32 && i < 40)col=i-32}{if  (i >= 40 && i < 48)col=i-40}{if  (i >= 48 && i < 56)col=i-48}{if  (i >= 56 && i < 64)col=i-56}
     code += ' Otto.setLed('+row+','+col+',' + on + ');'
 }
};
for (var i=0; i<8; i++) {if (this.getFieldValue('eyes_pixel' + i) == 'TRUE')row = 0;};
return code;
};

	Blockly.Python['otto9_matrix8x8'] = function() {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = '';
    for (var i = 0; i < 64; i++) {

        if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
            var on = this.getFieldValue('Pixel' + i) == "TRUE" ? "1" : "0";
            var row = Math.floor(i / 8);
            var col = i % 8;
            code += 'Otto.setLed(' + row + ',' + col + ',' + on + ')\n'
        }
    }
    return code;
};


Blockly.Blocks['otto9_mouth'] = {  init: function() {
    this.appendDummyInput()  .appendField("👄 "+Blockly.Msg.OTTO9_MOUTH_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_mouth'] = function(block) {
  var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
  var code = 'Otto.putMouth(' + dropdown_otto9_mouth_choice + ');\n';
  return code;
};

	Blockly.Python['otto9_mouth'] = function(block) {
    var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.putMouth(mouths.' + dropdown_otto9_mouth_choice.toUpperCase() + ')\n';
    return code;
};
							 
Blockly.Blocks['otto9_mouth#']={ init:function(){
  this.appendDummyInput()
  this.appendValueInput("mouth") .appendField("👄 "+Blockly.Msg.OTTO9_MOUTH_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};

Blockly.Arduino['otto9_mouth#'] = function(block) {
  var valuemouth = Blockly.Arduino.valueToCode(block, 'mouth', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'itoa('+valuemouth+', data, 10);// convert integer into a string so we can display this on the matrix\n'
  + 'Otto.clearMouth();\n'
  + 'Otto.writeText (data,50); // show the data with a fast scroll \n'
  + 'delay(50);';
  return code;
};
	Blockly.Python['otto9_mouth#'] = function(block) {
    var valuemouth = Blockly.Python.valueToCode(block, 'mouth', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n'
        + 'Otto.writeText(str('+valuemouth+'), 50) # show the data with a fast scroll \n'
        + 'delay(50)\n';
    return code;
};
											 
Blockly.Blocks['otto9_matrixp']={ init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendDummyInput() .appendField("👄 . X");
  this.appendValueInput("X") .setCheck("Number");
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Arduino['otto9_matrixp'] = function(block) {
  var valuex = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var valuey = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = ''
  if(this.getFieldValue('draw') == 'TRUE') draw= "1";
  else draw = "0";
  var code = 'Otto.setLed('+valuex+','+valuey+','+draw+');\n';
  return code;
};

	Blockly.Python['otto9_matrixp'] = function(block) {
    var valuex = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var valuey = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.setLed('+valuex+','+valuey+',1)\n';
    return code;
};
						   

Blockly.Blocks['otto9_matrix_text'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT).appendField(new Blockly.FieldTextInput('I AM OTTO'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_matrix_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  var code = 'Otto.writeText ( '+ '"' + text_input +'"' +',80); // limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n';
  return code;
};

	Blockly.Python['otto9_matrix_text'] = function(block) {
    var text_input = block.getFieldValue('input');
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n'
    + 'Otto.writeText('+ '"' + text_input +'"' +',100) # limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n';
    return code;
};
						   
Blockly.Blocks["otto9_matrix_brightness"]={init:function(){
    this.appendValueInput("brightness").setCheck("Number") .appendField("👄 "+Blockly.Msg.OTTO9_MOUTH_TEXT+" "+Blockly.LKL_VS2_BRIGHTNESS );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
    this.setHelpUrl('https://xantorohara.github.io/led-matrix-editor/')}
};
Blockly.Arduino["otto9_matrix_brightness"]=function(block){
	var brightness=Blockly.Arduino.valueToCode(block, "brightness");
    return "Otto.matrixIntensity(" + brightness + ");//the brightness of the LED matrix use values from 0 to 15 only\n"
};

	Blockly.Python["otto9_matrix_brightness"]=function(block){
    var brightness=Blockly.Python.valueToCode(block, "brightness");
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    return "Otto.matrixIntensity(" + brightness + ") #the brightness of the display. (0 to 15)\n"
};							
Blockly.Blocks['otto9_clear'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.OTTO9_CLEAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};
Blockly.Arduino['otto9_clear'] = function(block) {
  var code = 'Otto.clearMouth();\n';
  return code;
};

	Blockly.Python['otto9_clear'] = function(block) {
    Blockly.Python.definitions_['import_otto9']='import otto9';
    Blockly.Python.definitions_['import_mouths']='import mouths';
    Blockly.Python.definitions_['declare_otto9'] = 'Otto = otto9.Otto9()\n';
    Blockly.Python.definitions_['init_ledmatrix'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
    var code = 'Otto.clearMouth()\n';
    return code;
};

/// MAX7219 independent

Blockly.Blocks['Init_MAX7219_ledmatrix'] = { helpUrl: 'https://playground.arduino.cc/Main/LedControl', init: function() {
  var card=window.localStorage.card;
  this.setColour("#4b009f");
	this.appendDummyInput()	.appendField(new Blockly.FieldImage("media/matrix8x8.png",33,33))
  this.appendDummyInput().appendField(Blockly.Msg.MAX7219_LM_Number)	.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4']]), "NumberDisplays")
	this.appendDummyInput().appendField(Blockly.Msg.MAX7219_LM_NAME)
this.appendDummyInput()	.appendField(Blockly.Msg.MAX7219_LM_CLK).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_CLK");
this.appendDummyInput()	.appendField(Blockly.Msg.MAX7219_LM_CS).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_CS");
this.appendDummyInput()	.appendField(Blockly.Msg.MAX7219_LM_DAT).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_DAT");
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the MAX7219 library to use the 8X8 LED matrix'); }
};

Blockly.Arduino['Init_MAX7219_ledmatrix'] = function(block) {
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_cs = this.getFieldValue('PIN_CS');
  var pin_dat = this.getFieldValue('PIN_DAT');
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  Blockly.Arduino.includes_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_LM'] = 'LedControl lclm=LedControl('+pin_dat+','+pin_clk+','+pin_cs+','+numberDisplays+');\n';
  var code='';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_shutdown'] = {helpUrl: 'https://playground.arduino.cc/Main/LedControl',init: function() {
     this.setColour("#4b009f");
	this.appendDummyInput()	.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_SHUTDOWN)
		.appendField(new Blockly.FieldDropdown([['ON', 'false'], ['OFF', 'true']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The device will switch off/on all the LEDs on the matrix, but the data is retained!!.');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_shutdown'] = function(block) {

  var power = this.getFieldValue('power'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.shutdown('+numberDisplays+','+power+');\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_brightness'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("BRIGHTNESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_Brightness)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config the brigthness of the leds');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_brightness'] = function(block) {
  var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.setIntensity('+numberDisplays+','+brightness+');\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_clear'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_CLEAR)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Clear the display');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_clear'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 	 	 
  var code='lclm.clearDisplay('+numberDisplays+');\n';
  return code;
};


Blockly.Blocks['MAX7219_ledmatrix_draw'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_PAINT);
    Blockly.FieldCheckbox.CHECK_CHAR= '🔴'
    this.appendDummyInput()
        .appendField('  ')
        .appendField('0')
        .appendField('  1')
        .appendField(' 2')
        .appendField('  3')
        .appendField(' 4')
        .appendField('  5')
        .appendField(' 6')
        .appendField('  7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel0')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel3')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel5')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel6')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel8')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel9')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel10')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel11')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel12')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel13')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel14')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel16')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel17')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel18')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel19')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel20')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel21')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel25')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel26')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel29')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel30')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel32')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel33')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel34')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel35')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel36')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel37')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel38')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel40')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel41')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel42')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel43')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel44')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel45')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel46')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel48')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel49')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel50')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel51')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel52')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel53')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel54')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
		.appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel56')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel57')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel58')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel59')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel60')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel61')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel62')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Paint a image drawn in this block');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_draw'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var code = '';
  var rowcounter=0;
  var rowvalue='B';
  var rowline=0;
  for (var i=0; i<64; i++) {
	
	if (this.getFieldValue('Pixel' + i) != "FALSE") 
		rowvalue=rowvalue+'1';
	else
		rowvalue=rowvalue+'0';
	
	rowcounter+=1;
	if (rowcounter==8)
		{
		 code+='lclm.setRow('+numberDisplays+','+rowline+','+rowvalue+');';
		 rowcounter=0;
		 rowvalue='B';
		 rowline=rowline+1;
		}
  };
  code+='\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_row'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Row")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Row)
	this.appendValueInput("VALUE")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_value)	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_row'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = Blockly.Arduino.valueToCode(this, 'Row', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
     	 	 
  var code='lclm.setRow('+numberDisplays+','+row+','+value+');\n';
  return code;
};

Blockly.Blocks['MAX7219_ledmatrix_column'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Column")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Column)
	this.appendValueInput("VALUE")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_value)	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_column'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var Column = Blockly.Arduino.valueToCode(this, 'Column', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
   
     	 	 
  var code='lclm.setColumn('+numberDisplays+','+Column+','+value+');\n';
  return code;
};



Blockly.Blocks['MAX7219_ledmatrix_led'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour("#4b009f");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Row")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Row)
	this.appendValueInput("Column")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_LM_Column)
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_Led)
		.appendField(new Blockly.FieldDropdown([['ON', 'true'], ['OFF', 'false']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Arduino['MAX7219_ledmatrix_led'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = Blockly.Arduino.valueToCode(this, 'Row', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var Column = Blockly.Arduino.valueToCode(this, 'Column', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = this.getFieldValue('power');
   
     	 	 
  var code='lclm.setLed('+numberDisplays+','+row+','+Column+','+value+');\n';
  return code;
};

Blockly.Blocks['MAX7219_animation'] = {
    init: function() {
		 this.setColour("#4b009f");
	     this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/matrix8x8.png",22,22))
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
      this.appendDummyInput() .appendField(Blockly.Msg.matrice+" animation");
      this.appendDummyInput() .appendField(new Blockly.FieldTextInput('0x0010107c10100000,0x0000003c00000000,0x006c38fe386c0000,0x00060c1830600000,0x60660c1830660600,0x00003c003c000000,0x000000365c000000'), 'bitmap');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
            .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
      this.setInputsInline(false);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
      this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
    }
  };
   Blockly.Arduino['MAX7219_animation'] = function(block) {
    var bitmap = block.getFieldValue('bitmap');
	var numberDisplays = this.getFieldValue('NumberDisplays'); 
    var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
    Blockly.Arduino.variables_['matrix_animation'] = 'int ii = 0;';
    Blockly.Arduino.definitions_['matrix_animation'] ='const uint64_t IMAGES[] = {'+ bitmap +'};\n'
    +'const int IMAGES_LEN = sizeof(IMAGES)/8;\n';
    Blockly.Arduino.userFunctions_['matrix_animation'] = 'void displayImage(uint64_t image) {for (int ii = 0; ii < 8; ii++) { byte row = (image >> ii * 8) & 0xFF; for (int jj = 0; jj < 8; jj++) { lclm.setLed('+numberDisplays+', ii, jj, bitRead(row, jj)); } } }';
    var code = 'displayImage(IMAGES[ii]);\n'
    +'if (++ii >= IMAGES_LEN ) { ii = 0;} \n'
    +'delay(' + dropdown_otto_move_speed + ');\n';
    return code
  };


////////////////////////// NOT FUNCTIONAL

Blockly.Blocks["matrice8x8_symbole"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.matrice8x8_symbole).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L1");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L2");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L3");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L4");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L5");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L6");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L7");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L8");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_symbole_tooltip);
this.contextMenuMsg_=Blockly.Msg.matrice_create_aff},
contextMenuType_:"matrice8x8_aff",
customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
getVarType:function(varName){return Blockly.Types.getChildBlockType(this)},
  renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")}
};
Blockly.Arduino["matrice8x8_symbole"]=function(block){
  var vname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var l1=block.getFieldValue("L1");
  var l2=block.getFieldValue("L2");
  var l3=block.getFieldValue("L3");
  var l4=block.getFieldValue("L4");
  var l5=block.getFieldValue("L5");
  var l6=block.getFieldValue("L6");
  var l7=block.getFieldValue("L7");
  var l8=block.getFieldValue("L8");
Blockly.Arduino.variables_[vname]="byte " + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "};\n";
  return ""
};
Blockly.Python["matrice8x8_symbole"]=function(block){
  var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var l1=block.getFieldValue("L1");
  var l2=block.getFieldValue("L2");
  var l3=block.getFieldValue("L3");
  var l4=block.getFieldValue("L4");
  var l5=block.getFieldValue("L5");
  var l6=block.getFieldValue("L6");
  var l7=block.getFieldValue("L7");
  var l8=block.getFieldValue("L8");
Blockly.Python.variables_[vname]="byte " + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "};\n";
  return ""
};
///////////
Blockly.Blocks["matrice8x8_init"]={init:function(){
      this.appendDummyInput().appendField(new Blockly.FieldImage('media/matrix8x8.png', 48, 48, "*"))	.appendField(Blockly.Msg.matrice);
      this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
      this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
      this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
      this.setInputsInline(true);
      this.setColour("#4b009f");
      this.setTooltip(Blockly.Msg.matrice8x8_tooltip);
      this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_init"]=function(block){
  var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
  var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
  var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);
  Blockly.Arduino.includes_["matrice8x8init"]='#include <LedControl.h>';
  Blockly.Arduino.definitions_["matrice8x8init"]="LedControl lc=LedControl(" + din + "," + clk + "," + cs + ",1);";
  Blockly.Arduino.codeFunctions_["matrice8x8init"]="void afficher(byte s[]) {\n  for (int i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  };\n}";
  Blockly.Arduino.setups_["matrice8x8"]="lc.shutdown(0,false);\n  lc.setIntensity(0,1);\n  lc.clearDisplay(0);";
  return ""
};
Blockly.Python["matrice8x8_init"]=function(block){
  var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
  var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
  var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);
  Blockly.Python.imports_["max7219"]='import max7219';
Blockly.Python.imports_["pin"]="from machine import Pin";
Blockly.Python.imports_["spi"]="from machine import SPI";
  Blockly.Python.definitions_["spi"]="spi = SPI(1, baudrate=10000000, polarity=1, phase=0, sck=Pin(" + clk + "), mosi=Pin(" + din + "))\ndisplay = max7219.Matrix8x8(spi, Pin(" + cs + "), 1)";
  return ""
};

Blockly.Blocks["matrice8x8_init_2"]={init:function(){
      this.appendDummyInput().appendField(new Blockly.FieldImage('media/matrix8x8.png', 48, 48, "*"))	.appendField(Blockly.Msg.matrice);
      this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
      this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
      this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setColour("#4b009f");
      this.setTooltip(Blockly.Msg.matrice8x8_tooltip);
      this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_init_2"]=function(block){
  //var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
  //var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
  //var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);

  var cs = Blockly.Arduino.valueToCode(this, "CS", Blockly.Arduino.ORDER_NONE);
  var clk = Blockly.Arduino.valueToCode(this, "CLK", Blockly.Arduino.ORDER_NONE);
  var din = Blockly.Arduino.valueToCode(this, "DIN", Blockly.Arduino.ORDER_NONE);
 
  Blockly.Arduino.includes_["matrice8x8init"]='#include <LedControl.h>';
  Blockly.Arduino.definitions_["matrice8x8init"]="LedControl lc=LedControl(" + din + "," + clk + "," + cs + ",1);";
  Blockly.Arduino.codeFunctions_["matrice8x8init"]="void afficher(byte s[]) {\n  for (int i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  };\n}";
  Blockly.Arduino.setups_["matrice8x8"]="lc.shutdown(0,false);\n  lc.setIntensity(0,1);\n  lc.clearDisplay(0);";
  return ""
};

/////////////
Blockly.Blocks["matrice8x8_efface"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.matrice8x8_efface);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_efface"]=function(block){
  return "lc.clearDisplay(0);\n"
};
Blockly.Python["matrice8x8_efface"]=function(block){
  return "effacer();\n"
};

Blockly.Blocks["matrice8x8_brightness"]={init:function(){
  this.appendValueInput("brightness").setCheck("Number").appendField(Blockly.Msg.matrice+" intensity");   
  this.setInputsInline(true); 
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_brightness"]=function(block){
var brightness=Blockly.Arduino.valueToCode(block, "brightness");
  return "lc.setIntensity(0," + brightness + "); //the brightness of the display. (0 to 15)\n"
};
////////////
Blockly.Blocks["matrice8x8_aff"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.matrice8x8_aff).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_aff_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)
this.contextMenuMsg_=Blockly.Msg.matrice_create_symbole},
contextMenuType_:"matrice8x8_symbole",
customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
getVarType:function(varName){return Blockly.Types.getChildBlockType(this)}
};
Blockly.Arduino["matrice8x8_aff"]=function(block){
var varname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return "afficher(" + varname + ");\n"
};
Blockly.Python["matrice8x8_aff"]=function(block){
var varname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return "afficher(" + varname + ");\n"
};
//////////
Blockly.Blocks["matrice8x8_del"]={init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
  this.appendValueInput("X").appendField(Blockly.Msg.matriceLC);
this.appendValueInput("Y").setAlign(Blockly.ALIGN_RIGHT).appendField("Y");
  this.appendDummyInput() .appendField(new Blockly.FieldCheckbox("TRUE"), "STATE");
this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_del"]=function(block){
var etat=this.getFieldValue('STATE') == "TRUE"? "true" : "false";
var ligne=Blockly.Arduino.valueToCode(block, "X", Blockly.Arduino.ORDER_ASSIGNMENT);
var colonne=Blockly.Arduino.valueToCode(block, "Y", Blockly.Arduino.ORDER_ASSIGNMENT);
  return "lc.setLed(0,"+ligne+","+colonne+","+etat+");\n"
};
Blockly.Python["matrice8x8_del"]=function(block){
var etat=Blockly.Python.valueToCode(block, "STATE", Blockly.Python.ORDER_ASSIGNMENT);
var ligne=Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ASSIGNMENT);
var colonne=Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ASSIGNMENT);
  return "lc.setLed(0,"+ligne+","+colonne+","+etat+");\n"
};
Blockly.Blocks["matrice8x8_row"]={init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
this.appendValueInput("row").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice+" row");
  this.appendDummyInput() .appendField(new Blockly.FieldCheckbox("TRUE"), "STATE");
this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_row"]=function(block){
  var etat=this.getFieldValue('STATE') == "TRUE"? "0b11111111" : "0b00000000";
var row =Blockly.Arduino.valueToCode(block, "row", Blockly.Arduino.ORDER_ASSIGNMENT);
  return "lc.setRow(0,"+row+", "+etat+");\n"
};
Blockly.Blocks["matrice8x8_column"]={init:function(){
  Blockly.FieldCheckbox.CHECK_CHAR= '✅'
this.appendValueInput("row").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice+" column");
  this.appendDummyInput() .appendField(new Blockly.FieldCheckbox("TRUE"), "STATE");
this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_column"]=function(block){
  var etat=this.getFieldValue('STATE') == "TRUE"? "0b11111111" : "0b00000000";
var row =Blockly.Arduino.valueToCode(block, "row", Blockly.Arduino.ORDER_ASSIGNMENT);
  return "lc.setColumn(0,"+row+", "+etat+");\n"
};

Blockly.Blocks['matrice8x8_animation'] = {
  init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.matrice+" animation");
    this.appendDummyInput() .appendField(new Blockly.FieldTextInput('0x0010107c10100000,0x0000003c00000000,0x006c38fe386c0000,0x00060c1830600000,0x60660c1830660600,0x00003c003c000000,0x000000365c000000'), 'bitmap');
      this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
          .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
      this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
     this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
  }
};
 Blockly.Arduino['matrice8x8_animation'] = function(block) {
  var bitmap = block.getFieldValue('bitmap');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.variables_['matrix_animation'] = 'int i = 0;';
  Blockly.Arduino.definitions_['matrix_animation'] ='const uint64_t IMAGES[] = {'+ bitmap +'};\n'
  +'const int IMAGES_LEN = sizeof(IMAGES)/8;\n';
  Blockly.Arduino.userFunctions_['matrix_animation'] = 'void displayImage(uint64_t image) {for (int i = 0; i < 8; i++) { byte row = (image >> i * 8) & 0xFF; for (int j = 0; j < 8; j++) { lc.setLed(0, i, j, bitRead(row, j)); } } }';
  var code = 'displayImage(IMAGES[i]);\n'
  +'if (++i >= IMAGES_LEN ) { i = 0;} \n'
  +'delay(' + dropdown_otto_move_speed + ');\n';
  return code
};
///////////
Blockly.Blocks["matrice_symbole"]={init:function(){
  this.appendDummyInput()
  .appendField(Blockly.Msg.matrice16x8_symbole)
  .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR")
  .appendField(new Blockly.FieldDropdown([["8x8","8"],["16x8","16"]]), "matrix");
this.appendDummyInput("m161").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L1");
  this.appendDummyInput("m162").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L2");
  this.appendDummyInput("m163").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L3");
  this.appendDummyInput("m164").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L4");
  this.appendDummyInput("m165").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L5");
  this.appendDummyInput("m166").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L6");
  this.appendDummyInput("m167").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L7");
  this.appendDummyInput("m168").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L8");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setHelpUrl(Blockly.Msg.matrice16x8_helpurl);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice16x8_symbole_tooltip);
this.contextMenuMsg_=Blockly.Msg.matrice_create_aff},
contextMenuType_:"matrice16x8_aff",
customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
getVarType:function(varName){return Blockly.Types.getChildBlockType(this)},
  renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
}
};
Blockly.Arduino["matrice_symbole"]=function(block){
  var vname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
var ligne= new Array();
  ligne[0]=block.getFieldValue("L1");
ligne[1]=block.getFieldValue("L2");
  ligne[2]=block.getFieldValue("L3");
  ligne[3]=block.getFieldValue("L4");
  ligne[4]=block.getFieldValue("L5");
  ligne[5]=block.getFieldValue("L6");
  ligne[6]=block.getFieldValue("L7");
  ligne[7]=block.getFieldValue("L8");
var type_matrix=block.getFieldValue("matrix");
if (type_matrix=="16"){
  var result = "byte " + vname + "[]={\n";
  var col=new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  for (var i=0; i<16; i++) {
    for (var j=0; j<8; j++) {
      col[i]+=ligne[7-j][i];
    }
    result += "  B" + col[i] + ",\n";
  }
  result += "};\n";
  Blockly.Arduino.variables_[vname]= result ;
} else {
  Blockly.Arduino.variables_[vname]="byte " + vname + "[]={\n B" + ligne[0] + ",\n B" + ligne[1] + ",\n B" + ligne[2] + ",\n B" + ligne[3] + ",\n B" + ligne[4] + ",\n B" + ligne[5] + ",\n B" + ligne[6] + ",\n B" + ligne[7] + "};\n";
}
  return ""
};
Blockly.Python["matrice_symbole"]=function(block){
  var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
var ligne= new Array();
  ligne[0]=block.getFieldValue("L1");
ligne[1]=block.getFieldValue("L2");
  ligne[2]=block.getFieldValue("L3");
  ligne[3]=block.getFieldValue("L4");
  ligne[4]=block.getFieldValue("L5");
  ligne[5]=block.getFieldValue("L6");
  ligne[6]=block.getFieldValue("L7");
  ligne[7]=block.getFieldValue("L8");
var type_matrix=block.getFieldValue("matrix");
if (type_matrix=="16"){
  var result = "byte " + vname + "[]={\n";
  var col=new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  for (var i=0; i<16; i++) {
    for (var j=0; j<8; j++) {
      col[i]+=ligne[7-j][i];
    }
    result += "  B" + col[i] + ",\n";
  }
  result += "};\n";
  Blockly.Python.variables_[vname]= result ;
} else {
  Blockly.Python.variables_[vname]="byte " + vname + "[]={\n B" + ligne[0] + ",\n B" + ligne[1] + ",\n B" + ligne[2] + ",\n B" + ligne[3] + ",\n B" + ligne[4] + ",\n B" + ligne[5] + ",\n B" + ligne[6] + ",\n B" + ligne[7] + "};\n";
}
  return ""
};

///////////
Blockly.Blocks["matrice_init"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.matrice)
  .appendField(new Blockly.FieldDropdown([["8x8","8"],["16x8","16"]],function(option){this.sourceBlock_.updateShape(option)}), "matrix");
this.setInputsInline(false);
  this.setColour("#4b009f");
  this.setTooltip(Blockly.Msg.matrice16x8_tooltip);
  this.setHelpUrl(Blockly.Msg.matrice16x8_helpurl)},
  updateShape:function(option){
  var inputExists = this.getInput("DIN");
  if (inputExists) {
    this.removeInput("img8");
    this.appendDummyInput("img16").appendField(new Blockly.FieldImage('media/matrix8x8.png', 48, 48, "*"))
    this.removeInput("DIN");
    this.removeInput("CS");
    this.removeInput("CLK");
  }
  if (option=="8"){
    this.removeInput("img16");
    this.appendDummyInput("img16").appendField(new Blockly.FieldImage('media/matrix8x8.png', 48, 48, "*"))
          this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
          this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
          this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
  }
  },
  mutationToDom:function(){
      var container = document.createElement("mutation");
      container.setAttribute("matrix", this.getFieldValue("matrix"));
      return container
  },
  domToMutation:function(xmlElement){
      this.updateShape(xmlElement.getAttribute("matrix"))
  }
};
Blockly.Arduino["matrice_init"]=function(block){
var type_matrix=block.getFieldValue("matrix");
if (type_matrix=="16"){
  Blockly.Arduino.variables_["matrice16init"]="#define IIC_SCL A5\n#define IIC_SDA A4";
  Blockly.Arduino.codeFunctions_["matrice16init"]="void IIC_start() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n}\nvoid IIC_end() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n}\nvoid IIC_send(unsigned char send_data) {\n  for(char i = 0;i < 8;i++) {\n    digitalWrite(IIC_SCL,LOW);\n    delayMicroseconds(3);\n    if(send_data & 0x01) {\n      digitalWrite(IIC_SDA,HIGH);\n    } else {\n      digitalWrite(IIC_SDA,LOW);\n    }\n    delayMicroseconds(3);\n    digitalWrite(IIC_SCL,HIGH);\n    delayMicroseconds(3);\n    send_data = send_data >> 1;\n  }\n}\nvoid afficher (byte s[]) {\n  IIC_start();\n  IIC_send(0x40);\n  IIC_end();\n  IIC_start();\n  IIC_send(0xC0);\n  for(char i=0; i<16; i++) {\n    IIC_send(s[i]);\n  }\n  IIC_end();\n  IIC_start();\n  IIC_send(0x8F);\n  IIC_end();\n}\nvoid effacer () {\n  byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\n  afficher (t);\n}";
  Blockly.Arduino.setups_["matrice16init"]="pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);";
} else {
  var din=Blockly.Arduino.valueToCode(block, "DIN", Blockly.Arduino.ORDER_ASSIGNMENT);
  var clk=Blockly.Arduino.valueToCode(block, "CLK", Blockly.Arduino.ORDER_ASSIGNMENT);
  var cs=Blockly.Arduino.valueToCode(block, "CS", Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.includes_["matrice8init"]='#include <LedControl.h>';
  Blockly.Arduino.definitions_["matrice8init"]="LedControl lc=LedControl(" + din + "," + clk + "," + cs + ",1);";
  Blockly.Arduino.codeFunctions_["matrice8init"]="void afficher(byte s[]) {\n  for (char i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  }\n}\nvoid effacer () {\n  lc.clearDisplay(0);\n}";
  Blockly.Arduino.setups_["matrice8init"]="lc.shutdown(0,false);\n  lc.setIntensity(0,1);\n  lc.clearDisplay(0);";
}
return ""
};
Blockly.Python["matrice_init"]=function(block){
var type_matrix=block.getFieldValue("matrix");
if (type_matrix=="16"){
  Blockly.Python.variables_["matrice16init"]="#define IIC_SCL A5\n#define IIC_SDA A4";
  Blockly.Python.codeFunctions_["matrice16init"]="void IIC_start() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n}\nvoid IIC_end() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n}\nvoid IIC_send(unsigned char send_data) {\n  for(char i = 0;i < 8;i++) {\n    digitalWrite(IIC_SCL,LOW);\n    delayMicroseconds(3);\n    if(send_data & 0x01) {\n      digitalWrite(IIC_SDA,HIGH);\n    } else {\n      digitalWrite(IIC_SDA,LOW);\n    }\n    delayMicroseconds(3);\n    digitalWrite(IIC_SCL,HIGH);\n    delayMicroseconds(3);\n    send_data = send_data >> 1;\n  }\n}\nvoid afficher (byte s[]) {\n  IIC_start();\n  IIC_send(0x40);\n  IIC_end();\n  IIC_start();\n  IIC_send(0xC0);\n  for(char i=0; i<16; i++) {\n    IIC_send(s[i]);\n  }\n  IIC_end();\n  IIC_start();\n  IIC_send(0x8F);\n  IIC_end();\n}\nvoid effacer () {\n  byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\n  afficher (t);\n}";
  Blockly.Python.setups_["matrice16init"]="pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);";
} else {
  var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);
  var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
  var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
  Blockly.Python.imports_["max7219"]='import max7219';
  Blockly.Python.imports_["pin"]="from machine import Pin";
  Blockly.Python.imports_["spi"]="from machine import SPI";
  Blockly.Python.definitions_["spi"]="spi = SPI(-1, baudrate=10000000, miso=Pin(" + cs + "), mosi=Pin(" + din + "), sck=Pin(" + clk + "))\ndisplay = max7219.Matrix8x8(spi, 1)";
}
return ""
};