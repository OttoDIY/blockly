Blockly.Blocks["led_digital_init"]={init:function(){
  var card=window.localStorage.card;
  this.appendDummyInput()
  .appendField("💡 "+Blockly.Msg.OTTO_HOME_TEXT + "#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5']]), "LED_NUMBER")
    .appendField(+Blockly.Msg.del+Blockly.Msg.CAT_numerique)
  .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setHelpUrl(Blockly.Msg.HELPURL);
  this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["led_digital_init"]=function(block){
  var dropdown_pin=block.getFieldValue("PIN");
  	var led_number = this.getFieldValue('LED_NUMBER');
    Blockly.Arduino.definitions_['ledPin' + dropdown_pin] = "const int "+led_number+"ledPin =  " + dropdown_pin + "";
  Blockly.Arduino.setups_["ledPin" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
};

Blockly.Blocks["led_digital"]={init:function(){
  this.appendDummyInput()
.appendField("💡 "+ "#")	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5']]), "LED_NUMBER")
  .appendField(Blockly.Msg.del+Blockly.Msg.CAT_numerique);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "STAT");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setHelpUrl(Blockly.Msg.HELPURL);
  this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["led_digital"]=function(block){
  var dropdown_stat=block.getFieldValue("STAT");
  var led_number = this.getFieldValue('LED_NUMBER');
  code = "digitalWrite( "+led_number+"ledPin , " + dropdown_stat + ");\n";
return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['led_pwm']={init:function() {
var card=window.localStorage.card;
  this.appendDummyInput().appendField(Blockly.Msg.del+" (PWM)").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "PWM");
  this.appendValueInput("STAT", "Number").appendField(Blockly.Msg._AT);
  this.setInputsInline(true);
this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");}
};
Blockly.Arduino['led_pwm'] = function(block) {
var droppinpwm = block.getFieldValue('PWM');
var stat=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.setups_["setup_output_"+ droppinpwm]="pinMode("+droppinpwm+", OUTPUT);";
var code="analogWrite("+droppinpwm+", " + stat + ");//on a scale of 0 - 255\n";
return code;
};

//////////////
Blockly.Blocks["buildin_led"]={init:function(){

      this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT).appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "STAT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#B655F5");
      this.setHelpUrl(Blockly.Msg.HELPURL);
      this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP)}
};
Blockly.Arduino["buildin_led"]=function(block){
  var dropdown_stat=block.getFieldValue("STAT");
var card=window.localStorage.card;
  Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
  var code="digitalWrite("+profile[card].BUILTIN_LED+", " + dropdown_stat + ");\n";
  return code
};
Blockly.Python["buildin_led"]=function(block){
  var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
var card=window.localStorage.card;
  Blockly.Python.imports_["pin"]="from machine import Pin";
Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
  return "BROCHE_"+profile[card].BUILTIN_LED+".value("+dropdown_stat+")\n"
};


//////////////
Blockly.Blocks["blink"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.blink).appendField(new Blockly.FieldDropdown(Blockly.Msg.menublink), "speed");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.blink_tooltip);
  this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino["blink"]=function(block){
var card=window.localStorage.card;
var dropdown_speed=block.getFieldValue("speed");
Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
return "digitalWrite("+profile[card].BUILTIN_LED+", HIGH);\ndelay(" + dropdown_speed + ");\ndigitalWrite("+profile[card].BUILTIN_LED+", LOW);\ndelay(" + dropdown_speed + ");\n"
};
Blockly.Python["blink"]=function(block){
var card=window.localStorage.card;
var dropdown_speed=block.getFieldValue("speed");
Blockly.Python.imports_["time"]="import time";
Blockly.Python.imports_["pin"]="from machine import Pin";
Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
return "BROCHE_"+profile[card].BUILTIN_LED+".value(0)\ntime.sleep_ms("+dropdown_speed+")\nBROCHE_"+profile[card].BUILTIN_LED+".value(1)\ntime.sleep_ms("+dropdown_speed+")\n"
};
//////////////
Blockly.Blocks['rgb_init']={init:function() {
var card=window.localStorage.card;
  this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rgb.png', 33, 33, "*")) .appendField(Blockly.Msg.OTTO_HOME_TEXT + Blockly.Msg.rvb_init);
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField("R").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "rouge");
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT)  .appendField("G").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "vert");
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField("B").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "bleu");
  this.setInputsInline(true);
this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.rvb_init_tooltip);
  this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['rgb_init'] = function(block) {
var value_rouge = block.getFieldValue('rouge');
var value_vert = block.getFieldValue('vert');
var value_bleu = block.getFieldValue('bleu');
Blockly.Arduino.variables_['rvb_'+value_rouge] = '#define redPin '+value_rouge+'\n#define greenPin '+value_vert+'\n#define bluePin '+value_bleu;
Blockly.Arduino.userFunctions_['rvb_'+value_rouge] = 'void setColor(int redValue, int greenValue, int blueValue) {\n  analogWrite(redPin, redValue);\n  analogWrite(greenPin, greenValue);\n  analogWrite(bluePin, blueValue);\n}';
Blockly.Arduino.setups_['rvb_'+value_rouge]='pinMode(greenPin, OUTPUT);\n  pinMode(redPin, OUTPUT);\n  pinMode(bluePin, OUTPUT);';
return '';
};
Blockly.Python['rgb_init'] = function(block) {
var value_rouge = block.getFieldValue('rouge');
var value_vert = block.getFieldValue('vert');
var value_bleu = block.getFieldValue('bleu');
Blockly.Python.imports_['pin']='from  machine import Pin';
Blockly.Python.imports_['pwm']='from  machine import PWM';
Blockly.Python.definitions_['rvb_'+value_rouge+"_"+value_vert+"_"+value_bleu] = 'redPin = PWM(Pin('+value_rouge+'))\ngreenPin = PWM(Pin('+value_vert+'))\nbluePin = PWM(Pin('+value_bleu+'))';
Blockly.Python.userFunctions_['rvb_'+value_rouge] = 'def setColor(redValue, greenValue, blueValue):\n  redPin.duty(redValue)\n  greenPin.duty(greenValue)\n  bluePin.duty(blueValue)\n';
  return '';
};

//////////////
Blockly.Blocks['rgb_set']={init:function() {
  this.appendDummyInput()  .appendField(Blockly.Msg.rvb_set);
  this.appendValueInput("r")  .setCheck("Number") .setAlign(Blockly.ALIGN_RIGHT) .appendField("R");
  this.appendValueInput("v") .setCheck("Number") .setAlign(Blockly.ALIGN_RIGHT) .appendField("G");
  this.appendValueInput("b") .setCheck("Number").setAlign(Blockly.ALIGN_RIGHT)  .appendField("B");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.rvb_set_tooltip);
  this.setHelpUrl('https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/')}
};
Blockly.Arduino['rgb_set'] = function(block) {
var value_r = Blockly.Arduino.valueToCode(block, 'r', Blockly.Arduino.ORDER_ATOMIC);
var value_v = Blockly.Arduino.valueToCode(block, 'v', Blockly.Arduino.ORDER_ATOMIC);
var value_b = Blockly.Arduino.valueToCode(block, 'b', Blockly.Arduino.ORDER_ATOMIC);
var code = 'setColor('+value_r+','+value_v+','+value_b+');\n';
return code;
};
Blockly.Python['rgb_set'] = function(block) {
var value_r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
var value_v = Blockly.Python.valueToCode(block, 'v', Blockly.Python.ORDER_ATOMIC);
var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
var code = 'setColor('+value_r+','+value_v+','+value_b+')\n';
return code;
}

Blockly.Blocks["rgb_setcolor"]={init:function(){
this.appendDummyInput()  .appendField(Blockly.Msg.rvb_set).appendField(Blockly.Msg.rvb_cathode);
this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"), "color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.rvb_set_tooltip);
  this.setHelpUrl("https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/")}
};
Blockly.Arduino["rgb_setcolor"]=function(block){
var color=block.getFieldValue("color");
var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
  var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
  var code = 'setColor('+red+','+green+','+blue+');\n';
  return code;
};


Blockly.Blocks["MRTX_led_setcolor"]={init:function(){
var field = new Blockly.FieldColour('#ff0000');
field.setColours(
      ['#ff0000', '#ffff00', '#ff00ff',
      '#ffffff', '#000000', '#00ff00',
  '#00ffff', '#0000ff','#ff0000']);
  field.setColumns(3);
this.appendDummyInput()  .appendField(Blockly.Msg.rvb_set_x);
this.appendDummyInput() .appendField(field, 'color');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setTooltip(Blockly.Msg.rvb_set_tooltip);
  this.setHelpUrl("https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/")}
};

Blockly.Arduino["MRTX_led_setcolor"]=function(block){
var color= block.getFieldValue("color");
var red, blue ,green;


if (color[1]=='f')
red=1
else
red=0;
if (color[3]=='f')
green=1
else
 green=0;
if (color[5]=='f')
blue=1
else
blue=0;

Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Adafruit_MCP23X08.h>';
Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X08 mcp;\n';

Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();\n';
Blockly.Arduino.setups_['setup_mcp1_pin_g_write'] = 'mcp.pinMode(1, OUTPUT);';
Blockly.Arduino.setups_['setup_mcp2_pin_b_write'] = 'mcp.pinMode(2, OUTPUT);';
Blockly.Arduino.setups_['setup_mcp3_pin_r_write'] = 'mcp.pinMode(3, OUTPUT);';

var code = 'mcp.digitalWrite(1, '+red+');\n  mcp.digitalWrite(2, '+green+');\n  mcp.digitalWrite(3, '+blue+');\n';
return code;
};

Blockly.Blocks["digital_write"]={init:function(){
  this.appendValueInput("PIN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.del);
  this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "STAT");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#B655F5");
  this.setHelpUrl(Blockly.Msg.HELPURL);
  this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["digital_write"]=function(block){
  var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat=block.getFieldValue("STAT");
  Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
  return "digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};
Blockly.Python["digital_write"]=function(block){
var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
  var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
  Blockly.Python.imports_["pin"]="from machine import Pin";
Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.OUT)";
  return "BROCHE_"+dropdown_pin+".value("+dropdown_stat+")\n"
};
