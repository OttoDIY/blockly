"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks['otto9_matrix'] = { init: function() {
    this.appendDummyInput() .appendField('  ') .appendField('1') .appendField('  2').appendField('  3') .appendField(' 4') .appendField(' 5') .appendField('  6')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
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
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
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
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto.h>\n'
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
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput() .appendField("👄 . X");
  this.appendValueInput("X") .setCheck("Number");
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendDummyInput() .appendField("✏️") .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
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
