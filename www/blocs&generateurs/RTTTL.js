 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.RTTTL');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

/*
Blockly.Blocks['RTTTL_music'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER")
        .appendField(new Blockly.FieldDropdown([['StarWars','StarWars'],['MahnaMahna','MahnaMahna'],['LeisureSuit','LeisureSuit'],['MissionImp','MissionImp'],['Entertainer','Entertainer'],['Muppets','Muppets']]), "MELODY");
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play RTTTL melody');
  }
};*/

Blockly.Blocks['RTTTL_music'] = {
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#a600d3");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER");
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK)
        .appendField(new Blockly.FieldDropdown([['StarWars','StarWars'],['MahnaMahna','MahnaMahna'],['LeisureSuit','LeisureSuit'],['MissionImp','MissionImp'],['Entertainer','Entertainer'],['Muppets','Muppets'],['Flinstones','Flinstones'],['YMCA','YMCA'],['Simpsons','Simpsons'],['Indiana','Indiana'],['TakeOnMe','TakeOnMe'],['Looney','Looney'],['20thCenFox','_20thCenFox'],['Bond','Bond'],['GoodBad','GoodBad'],['PinkPanther','PinkPanther'],['A_Team','A_Team'],['Jeopardy','Jeopardy'],['Gadget','Gadget'],['Smurfs','Smurfs'],['Toccata','Toccata'],['Short','Short'],['JingleBell','JingleBell'],['Rudolph','Rudolph'],['WeWishYou','WeWishYou'],['WinterWonderland','WinterWonderland'],['OhDennenboom','OhDennenboom'],['LetItSnow','LetItSnow'],['Frosty','Frosty'],['SilentNight','SilentNight'],['LastChristmas','LastChristmas'],['AllIWant','AllIWant'],['AmazingGrace','AmazingGrace']]), "MELODY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Play RTTTL melody");
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['RTTTL_music'] = function(block) {
  var melody = this.getFieldValue('MELODY');
  var PIN_BUZZER = block.getFieldValue('PIN_BUZZER');
  var code;
  
  Blockly.Arduino.includes_['include_PlayRTTTL'] = '#include <PlayRtttl.h>\n';
  
  code= 'playRtttlBlockingPGM('+PIN_BUZZER+',(char*)'+melody+');\n';
 
 return code;
};


Blockly.Blocks['RTTTL_music_custom'] = {
  init: function() {
	var card=window.localStorage.card;
    this.setColour("#a600d3");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_BUZZER");
	this.appendValueInput("rtttl_melody")
        .setCheck("String")
		.appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Play RTTTL melody");
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['RTTTL_music_custom'] = function(block) {
 
  var PIN_BUZZER = block.getFieldValue('PIN_BUZZER');
  var rtttl_melody = Blockly.Arduino.valueToCode(block, 'rtttl_melody', Blockly.Arduino.ORDER_ATOMIC);
  
  var name_melody= rtttl_melody.slice(1,4);
  
  var code;
  
  Blockly.Arduino.includes_['include_PlayRTTTL'] = '#include <PlayRtttl.h>\n';
  
  
 Blockly.Arduino.definitions_['Melody_'+name_melody] = 'static const char melody_'+ name_melody+'[] PROGMEM = '+rtttl_melody+';\n';
  
  
  
  code= 'playRtttlBlockingPGM('+PIN_BUZZER+',(char*) melody_'+name_melody+');\n';
 
 return code;
};




