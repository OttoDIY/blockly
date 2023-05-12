"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
  /////////////
 /*  audio  */
/////////////

Blockly.Blocks["buzzer_init"]={init:function(){
  var card=window.localStorage.card;
  this.appendDummyInput().appendField(new Blockly.FieldImage('media/buzzer.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO_HOME_TEXT + Blockly.Msg.OTTO9_BUZZER)
  .appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#FF63BB");
  this.setHelpUrl(Blockly.Msg.HELPURL);
  this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["buzzer_init"]=function(block){
  var value_pin=block.getFieldValue("PIN");
    Blockly.Arduino.definitions_["setup_buzzer"] = "const int buzzer"+" =  " + value_pin + ";";
  Blockly.Arduino.setups_["setup_buzzer" ]="pinMode(" + value_pin + ", OUTPUT);";
  var code = '';
  return code;
};

Blockly.Blocks['buzzer_music'] = {
  init: function() {
    this.setColour("#FF63BB");
    this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
	this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK)
        .appendField(new Blockly.FieldDropdown([['StarWars','StarWars'],['MahnaMahna','MahnaMahna'],['LeisureSuit','LeisureSuit'],['MissionImp','MissionImp'],['Entertainer','Entertainer'],['Muppets','Muppets'],['Flinstones','Flinstones'],['YMCA','YMCA'],['Simpsons','Simpsons'],['Indiana','Indiana'],['TakeOnMe','TakeOnMe'],['Looney','Looney'],['20thCenFox','_20thCenFox'],['Bond','Bond'],['GoodBad','GoodBad'],['PinkPanther','PinkPanther'],['A_Team','A_Team'],['Jeopardy','Jeopardy'],['Gadget','Gadget'],['Smurfs','Smurfs'],['Toccata','Toccata'],['Short','Short'],['JingleBell','JingleBell'],['Rudolph','Rudolph'],['WeWishYou','WeWishYou'],['WinterWonderland','WinterWonderland'],['OhDennenboom','OhDennenboom'],['LetItSnow','LetItSnow'],['Frosty','Frosty'],['SilentNight','SilentNight'],['LastChristmas','LastChristmas'],['AllIWant','AllIWant'],['AmazingGrace','AmazingGrace']]), "MELODY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Play RTTTL melody");
	this.setHelpUrl('');
  }
};

Blockly.Arduino['buzzer_music'] = function(block) {
  var melody = this.getFieldValue('MELODY');
  var code;
  Blockly.Arduino.includes_['include_PlayRTTTL'] = '#include <PlayRtttl.hpp>\n';
	code= 'playRtttlBlockingPGM(buzzer'+',(char*)'+melody+');\n';
 return code;
};

Blockly.Blocks['buzzer_music_custom'] = {  init: function() {
  this.setColour("#FF63BB");
  this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
	this.appendValueInput("rtttl_melody").setCheck("String").appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Play RTTTL melody");
	this.setHelpUrl('');
  }
};

Blockly.Arduino['buzzer_music_custom'] = function(block) {
  var rtttl_melody = Blockly.Arduino.valueToCode(block, 'rtttl_melody', Blockly.Arduino.ORDER_ATOMIC);
  var name_melody= rtttl_melody.slice(1,4);
  var code;
  Blockly.Arduino.includes_['include_PlayRTTTL'] = '#include <PlayRtttl.hpp>\n';
 Blockly.Arduino.definitions_['Melody_'+name_melody] = 'static const char melody_'+ name_melody+'[] PROGMEM = '+rtttl_melody+';\n';
	 code= 'playRtttlBlockingPGM(buzzer'+',(char*) melody_'+name_melody+');\n';
 return code;
};

Blockly.Blocks["play"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
    this.appendDummyInput().appendField(Blockly.Msg.play).appendField(new Blockly.FieldDropdown(Blockly.Msg.note), "note")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.tempo), "tempo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.play_tooltip);
    this.setHelpUrl(Blockly.Msg.play_helpurl)}
};

Blockly.Arduino["play"]=function(block){
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
    return "tone( buzzer," + value_note + "," + value_tempo + ");\n delay(" + value_tempo + ");\n"
};

Blockly.Python["play"]=function(block){
    var value_pin=block.getFieldValue("PIN");
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
	Blockly.Python.imports_["time"]="import time";
	return "Play_"+value_pin+" = PWM(Pin("+value_pin+"), freq=" + value_note + ")\ntime.sleep(" + value_tempo + ")\nPlay_" + value_pin + ".deinit()\n"
};
//////////////
Blockly.Blocks["tone"]={init:function(){
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
        this.appendValueInput("NUM").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2).setCheck("Number");
        this.appendValueInput("TPS").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3).setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)}
};
Blockly.Arduino["tone"]=function(block){
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps=Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);
    return "tone( buzzer," + "," + value_num + "," + value_tps + ");\ndelay(" + value_tps + ");\n"
};
Blockly.Python["tone"]=function(block){
    var value_pin=block.getFieldValue("PIN");
    var value_num=Blockly.Python.valueToCode(block, "NUM", Blockly.Python.ORDER_ATOMIC);
    var value_tps=Blockly.Python.valueToCode(block, "TPS", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
    Blockly.Python.imports_["time"]="import time";
    return "Buzzer_"+dropdown_pin+" = PWM(Pin("+dropdown_pin+"), freq=" + value_num + ")\ntime.sleep(" + value_tps + ")\nBuzzer_"+dropdown_pin+".deinit()\n"
};
//////////////
Blockly.Blocks["beep"]={init:function(){
  var card=window.localStorage.card;
  this.appendDummyInput().appendField(Blockly.Msg.beep).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN");
    this.setColour("#FF63BB");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);this.setTooltip(Blockly.Msg.beep_TOOLTIP)}
};
Blockly.Arduino["beep"]=function(block){
    var value_pin=block.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
Blockly.Python["beep"]=function(block){
    var value_pin=block.getFieldValue("PIN");
    Blockly.Python.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
//////////////
Blockly.Blocks["notone"]={init:function(){
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)}
};
Blockly.Arduino["notone"]=function(block){
    return "noTone( buzzer," + ");\n"
};
Blockly.Python["notone"]=function(block){
    var value_pin=block.getFieldValue("PIN");
    Blockly.Python.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "noTone(" + value_pin + ");\n"
};

Blockly.Blocks['cute_play'] = {init: function() {
    this.appendDummyInput() .appendField("🎼") .appendField(Blockly.Msg.OTTO9_SOUND_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#FF63BB"); }
};

Blockly.Arduino['cute_play'] = function(block) {
  var dropdown_sound = block.getFieldValue('sound');
  Blockly.Arduino.includes_['cute_sound'] = '#include <CuteBuzzerSounds.h>\n';
  Blockly.Arduino.setups_['cute_sound']='  cute.init(buzzer);\n';
  var code = 'cute.play(' + dropdown_sound + ');\n';
  return code;
};

//////////////
Blockly.Blocks["lp2i_mp3_init"]={init:function(){
    var card=window.localStorage.card;
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/dfplayer.png', 33, 33, "*")).appendField(Blockly.Msg.OTTO_HOME_TEXT + "DFMini")
    this.appendDummyInput()	.appendField(Blockly.Msg.MP3OS_TX).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_TX");
    this.appendDummyInput()	.appendField(Blockly.Msg.MP3OS_RX).appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RX");
    this.appendValueInput("Volume", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_Volume);
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_autoplay).appendField(new Blockly.FieldCheckbox("FALSE"), "play");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.lp2i_mp3_tooltip);
    this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_init"]=function(block){
    var pin_rx = this.getFieldValue('PIN_RX');
    var pin_tx = this.getFieldValue('PIN_TX');
var autoplay=block.getFieldValue('play') == 'TRUE';
var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
var volume=parseInt(vol);
var volume_hex;
Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
Blockly.Arduino.definitions_['setup_osmp3'] = 'SoftwareSerial DFMiniSerial('+pin_rx+','+pin_tx+');\n';
if (volume>48){
    volume_hex="0x30";
}else{
    volume_hex="0x"+volume.toString(16);
}
Blockly.Arduino.codeFunctions_["fonction_mp3"]="void exe_cmd(byte CMD, byte Par1, byte Par2) {\n  word check=-(0xFF + 0x06 + CMD + 0x00 + Par1 + Par2);\n  byte Command[10]={0x7E,0xFF,0x06,CMD,0x00,Par1,Par2,highByte(check),lowByte(check),0xEF};\n  for (int i=0; i<10; i++) {\n    DFMiniSerial.write( Command[i]);\n  };\n}";
if (autoplay){
    Blockly.Arduino.setups_["setup_mp3"]="DFMiniSerial.begin(9600);\n  delay(1000);\n  exe_cmd(0x3F,0,0);\n  exe_cmd(0x06,0," + volume_hex + ");\n  exe_cmd(0x11,0,1);\n";
}else{
    Blockly.Arduino.setups_["setup_mp3"]="DFMiniSerial.begin(9600);\n  delay(1000);\n  exe_cmd(0x3F,0,0);\n  exe_cmd(0x06,0," + volume_hex + ");";
};
return ""
};
Blockly.Python["lp2i_mp3_init"]=function(block){
var autoplay=block.getFieldValue('play') == 'TRUE';
var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
var volume=parseInt(vol);
Blockly.Python.imports_["kt403a"]="from kt403A import KT403A";
if (volume>48){
    var volume_hex="0x30";
}else{
    var volume_hex="0x"+volume.toString(16);
}
if (autoplay){
    Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")\nmp3.EnableLoopAll()";
}else{
    Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")";
};
return ""
};
//////////////
Blockly.Blocks["lp2i_mp3_play_track"]={init:function(){
    this.appendValueInput("num", "Number")
		.appendField(Blockly.Msg.lp2i_mp3_play+" #");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_track_tooltip);
    this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
    return "exe_cmd(0x03,0,"+piste+");\n"
};
Blockly.Python["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ATOMIC);
    return "mp3.PlaySpecific("+piste+")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_play"]={init:function(){
    this.appendDummyInput()
    	.appendField(Blockly.Msg.lp2i_mp3_play);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_tooltip);
    this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_play"]=function(block){
    return "exe_cmd(0x0D,0,1);\n"
};
Blockly.Python["lp2i_mp3_play"]=function(block){
    return "mp3.Play()\n"
};

Blockly.Blocks["lp2i_mp3_volume"]={init:function(){
        this.appendValueInput("Volume", "Number")
        	.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_vol);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF63BB");
        this.setTooltip(Blockly.Msg.lp2i_mp3_vol_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	var volume=parseInt(vol);
	var volume_hex;
	if (volume>48){
		volume_hex="0x30";
	}else{
		volume_hex="0x"+volume.toString(16);
	}
	return "exe_cmd(0x06,0," + volume_hex + ");\n"
};
Blockly.Python["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
	return "mp3.SetVolume(" + volume_hex + ")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_next"]={init:function(){
        this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_mp3_next);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF63BB");
        this.setTooltip(Blockly.Msg.lp2i_mp3_next_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_next"]=function(block){
    return "exe_cmd(0x01,0,1);\n"
};
Blockly.Python["lp2i_mp3_next"]=function(block){
    return "mp3.PlayNext()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_prev"]={init:function(){
        this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_mp3_prev);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF63BB");
        this.setTooltip(Blockly.Msg.lp2i_mp3_prev_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_prev"]=function(block){
    return "exe_cmd(0x02,0,1);\n"
};
Blockly.Python["lp2i_mp3_prev"]=function(block){
    return "mp3.PlayPrevious()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_pause"]={init:function(){
        this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_mp3_pause);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF63BB");
        this.setTooltip(Blockly.Msg.lp2i_mp3_pause_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_pause"]=function(block){
    return "exe_cmd(0x0E,0,0);\n"
};
Blockly.Python["lp2i_mp3_pause"]=function(block){
    return "mp3.Pause()\n"
};


 /////////////
 /*  Audio for MRTX-Uno Board */
/////////////

Blockly.Blocks["play_x"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1_X);
    this.appendDummyInput()
		.appendField(Blockly.Msg.play)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.note), "note")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.tempo), "tempo")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.play_tooltip);
    this.setHelpUrl(Blockly.Msg.play_helpurl)}
};
Blockly.Arduino["play_x"]=function(block){
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
    Blockly.Arduino.setups_["setup_output"]="pinMode( 11, OUTPUT);";
    return "tone(11," + value_note + "," + value_tempo + ");\n delay(" + value_tempo + ");\n"
};


Blockly.Blocks["tone_x"]={init:function(){
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_TONE_INPUT1_X);
        this.appendValueInput("NUM").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2).setCheck("Number");
        this.appendValueInput("TPS").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3).setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)}
};
Blockly.Arduino["tone_x"]=function(block){
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps=Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output"]="pinMode(11, OUTPUT);";
    return "tone(11," + value_num + "," + value_tps + ");\ndelay(" + value_tps + ");\n"
};

Blockly.Blocks["beep_x"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.beep);
    this.setColour("#FF63BB");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);this.setTooltip(Blockly.Msg.beep_TOOLTIP)}
};
Blockly.Arduino["beep_x"]=function(block){
    Blockly.Arduino.setups_["setup_output"]="pinMode(11, OUTPUT);";
    return "tone(11,440,1000);\ndelay(1000);\n"
};

Blockly.Blocks["notone_x"]={init:function(){
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)}
};
Blockly.Arduino["notone_x"]=function(block){

    Blockly.Arduino.setups_["setup_output"]="pinMode(11, OUTPUT);";
    return "noTone(11);\n"
};

//////////////
//Pins usung the mcp23008 adapter
Blockly.Blocks["digital_mcp_write"]={init:function(){
    var card=window.localStorage.card;
	this.setColour("#00929f");
    this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1).appendField(new Blockly.FieldDropdown(profile[card].dropdownMCPPins), "PIN");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["digital_mcp_write"]=function(block){
    var dropdown_pin=block.getFieldValue("PIN");
    var dropdown_stat=block.getFieldValue("STAT");

Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Adafruit_MCP23X08.h>';
Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X08 mcp;\n';

Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();\n';

    Blockly.Arduino.setups_["setup_mcp_output_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", OUTPUT);";
    return "mcp.digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};

Blockly.Blocks["digital_mcp_read"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT).appendField(new Blockly.FieldDropdown(profile[card].dropdownMCPPins), "PIN");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.in_pullup).appendField(new Blockly.FieldCheckbox("FALSE"), "pullup");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.in_pullup_tooltip)}
};

Blockly.Arduino["digital_mcp_read"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=block.getFieldValue("PIN");

Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Adafruit_MCP23X08.h>';
Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X08 mcp;\n';

Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();\n';

    if (pull_up) {

        Blockly.Arduino.setups_["setup_mcp_input_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {

        Blockly.Arduino.setups_["setup_mcp_input_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", INPUT);"
    };

    var code="mcp.digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};



 /////////////
 /*  audio buzzer for esp32 */
/////////////

Blockly.Blocks["play_esp32"]={init:function(){
	var card=window.localStorage.card;
    //this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
	 this.appendDummyInput()
	    .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER");
    this.appendDummyInput()
		.appendField(Blockly.Msg.play)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.note), "note")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.tempo), "tempo")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF63BB");
    this.setTooltip(Blockly.Msg.play_tooltip);
    this.setHelpUrl(Blockly.Msg.play_helpurl)}
};
Blockly.Arduino["play_esp32"]=function(block){
    //var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var value_pin = block.getFieldValue('PIN_BUZZER');
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");

    Blockly.Arduino.setups_["setup_tone_esp32"]="ledcSetup(4,5000,8);\nledcAttachPin("+value_pin+",4);\n";

    return "ledcWriteTone(4," + value_note + ");\n delay(" + value_tempo + ");\n"
};


Blockly.Blocks["tone_esp32"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
       //this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
	    this.appendDummyInput()
	    .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER");
        this.appendValueInput("NUM").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2).setCheck("Number");
        this.appendValueInput("TPS").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3).setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)}
};
Blockly.Arduino["tone_esp32"]=function(block){
	var value_pin = block.getFieldValue('PIN_BUZZER');
    //var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps=Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.setups_["setup_tone_esp32"]="ledcSetup(4,5000,8);\nledcAttachPin("+value_pin+",4);\n";

    return "ledcWriteTone(4," + value_num + ");\n delay(" + value_tps + ");\n"
};

//////////////

Blockly.Blocks["notone_esp32"]={init:function(){
    	var card=window.localStorage.card;
        this.setColour("#FF63BB");
        this.setHelpUrl(Blockly.Msg.HELPURL);
       //this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
	   this.appendDummyInput()
	    .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER");
		this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)}
};
Blockly.Arduino["notone_esp32"]=function(block){
    var value_pin = block.getFieldValue('PIN_BUZZER');

    Blockly.Arduino.setups_["setup_tone_esp32"]="ledcSetup(4,5000,8);\nledcAttachPin("+value_pin+",4);\n";
	return "ledcWriteTone(4,0);\n"
};

Blockly.Blocks['led_pwm_esp32']={init:function() {
	var card=window.localStorage.card;
    this.appendDummyInput().appendField(Blockly.Msg.del+" (PWM)").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "PWM");
    this.appendValueInput("STAT", "Number").appendField(Blockly.Msg._AT);
    this.setInputsInline(true);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");}
};
Blockly.Arduino['led_pwm_esp32'] = function(block) {
  var droppinpwm = block.getFieldValue('PWM');
  var stat=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.setups_["setup_led_esp32_"+ droppinpwm]="ledcSetup(7,5000,8);\nledcAttachPin("+droppinpwm+",7);\n";

  var code="ledcWrite(7," + stat + ");\n";

  return code;
};

/*
//////////////RGB for ESP32
Blockly.Blocks['rgb_init_esp32']={init:function() {
	var card=window.localStorage.card;
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rgb.png', 33, 33, "*")) .appendField(Blockly.Msg.rvb_init);
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
Blockly.Arduino['rgb_init_esp32'] = function(block) {
  var value_rouge = block.getFieldValue('rouge');
  var value_vert = block.getFieldValue('vert');
  var value_bleu = block.getFieldValue('bleu');
  Blockly.Arduino.variables_['rvb_'+value_rouge] = '#define redPin '+value_rouge+'\n#define greenPin '+value_vert+'\n#define bluePin '+value_bleu+'\n';
  Blockly.Arduino.userFunctions_['rvb_'+value_rouge] = 'void setColor(int redValue, int greenValue, int blueValue) {\n ledcWrite(5,greenValue);\n ledcWrite(6,redValue);\n  ledcWrite(7,blueValue);\n}';
  Blockly.Arduino.setups_['rvb_esp32'+value_rouge]='ledcSetup(5,5000,8);\nledcAttachPin(greenPin,5);\nledcSetup(6,5000,8);\nledcAttachPin(redPin,6);\nledcSetup(7,5000,8);\nledcAttachPin(bluePin,7);\n';
  return '';
};


  Blockly.Blocks["rgb_setcolor_anode"]={init:function(){
	this.appendDummyInput()  .appendField(Blockly.Msg.rvb_set).appendField(Blockly.Msg.rvb_anode);
	this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B655F5");
    this.setTooltip(Blockly.Msg.rvb_set_tooltip);
    this.setHelpUrl("https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/")}
};
Blockly.Arduino["rgb_setcolor_anode"]=function(block){
	var color=block.getFieldValue("color");
	var colorR=color[1] + color[2], colorG=color[3] + color[4], colorB=color[5] + color[6];
    var red=255-parseInt(colorR,16), green=255-parseInt(colorG,16), blue=255-parseInt(colorB,16);
    var code = 'setColor('+red+','+green+','+blue+');\n';
    return code;
};
*/
