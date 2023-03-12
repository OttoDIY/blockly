 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.MP3YX5300');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');


Blockly.Blocks['YX5300Mp3_init_esp32'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	var card=window.localStorage.card;
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/yx5300.png",43,38))
        .appendField(Blockly.Msg.MP3YK_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.MP3YK_TX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.MP3YK_RX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the YX5300 MP3 module using Uart2 of esp32.Custom pins');
  }
};

Blockly.Arduino['YX5300Mp3_init_esp32'] = function(block) {
	
 var dropdown_pin1 = this.getFieldValue('PIN1');
 var dropdown_pin2 = this.getFieldValue('PIN2');
  
 Blockly.Arduino.definitions_['define_yx5300mp3_library'] = '#include <MD_YX5300.h>\n';
 Blockly.Arduino.definitions_['setup_serial2'] = 'HardwareSerial &mp3_player_serial=Serial2;\n';
 Blockly.Arduino.definitions_['setup_yx5300mp3'] = ' MD_YX5300 mp3(mp3_player_serial);\n';
 
 Blockly.Arduino.setups_['init_serial2'] = 'Serial2.begin(9600, SERIAL_8N1,'+dropdown_pin2+','+dropdown_pin1+');\n';
 Blockly.Arduino.setups_['init_yx5300mp3_serial'] = ' mp3_player_serial.begin(MD_YX5300::SERIAL_BPS);\n';
 Blockly.Arduino.setups_['init_yx5300mp3'] = ' mp3.begin();\n';
 Blockly.Arduino.setups_['mode_yx5300mp3'] = ' mp3.setSynchronous(true);\n';
  
  var code='';
  return code;
};



Blockly.Blocks['YX5300Mp3_set_equalizator'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_equalizer)
		.appendField(new Blockly.FieldDropdown([['Normal','0'],['Pop','1'],['Rock','2'],['Jazz','3'],['Classic','4'],['Base','5']]), "MP3_EQ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the equalizer of MP3');
  }
};



Blockly.Arduino['YX5300Mp3_set_equalizator'] = function(block) {
 		
  var eq = this.getFieldValue('MP3_EQ'); 	
  
  var code = 'mp3.equalizer('+eq+');\n';
 
  return code;
};




Blockly.Blocks['YX5300Mp3_set_volumen'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_volumen)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the volumen of MP3');
  }
};



Blockly.Arduino['YX5300Mp3_set_volumen'] = function(block) {
 		
 var volumen = Blockly.Arduino.valueToCode(this, 'Volumen', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.volume('+volumen+');\n';
 
  return code;
};




Blockly.Blocks['YX5300Mp3_operation'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_operation)
		.appendField(new Blockly.FieldDropdown([['Increase Volumen','0'],['Decrease Volumen','1'],['Reproduce next Song','2'],['Reproduce previous Song','3'],['Start Song','4'],['Pause Song','5'],['Stop Song','6'],['Reset mp3','7']]), "MP3_OPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Make an operation');
  }
};



Blockly.Arduino['YX5300Mp3_operation'] = function(block) {
 		
 var mp3_operation = this.getFieldValue('MP3_OPERATION'); 	
 
 if (mp3_operation==0) 
    var code = 'mp3.volumeInc();\n';
	else if (mp3_operation==1) 
		var code = 'mp3.volumeDec();\n';
		else if (mp3_operation==2) 
			 var code = 'mp3.playNext();\n';
			 else if (mp3_operation==3) 
				  var code = 'mp3.playPrev();\n';
				  else if (mp3_operation==4) 
						var code = 'mp3.playStart();\n';
						else if (mp3_operation==5) 
							var code = 'mp3.playPause();\n';
							else if (mp3_operation==6) 
								var code = 'mp3.playStop();\n';
						     	else 
								 var code = 'mp3.reset();\n';
    return code;
};




Blockly.Blocks['YX5300Mp3_running'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
        .appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_check);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('mp3 check need to be running in the main loop');
  }
};



Blockly.Arduino['YX5300Mp3_running'] = function(block) {
 		
  var code = 'mp3.check();\n';
 
  return code;
};



Blockly.Blocks['YX5300Mp3_playsong'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_playsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track');
  }
};



Blockly.Arduino['YX5300Mp3_playsong'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playTrack('+song+');\n';
 
  return code;
};

Blockly.Blocks['YX5300Mp3_playsongdirectiry'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
	this.appendValueInput("Song")
		.appendField(Blockly.Msg.MP3YK_playsong)
		.setCheck('Number')
	this.appendValueInput("Directory")
		.appendField(Blockly.Msg.MP3YK_playsongdirectory)
		.setCheck('Number')	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track in one folder');
  }
};



Blockly.Arduino['YX5300Mp3_playsongdirectiry'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 
 var directory = Blockly.Arduino.valueToCode(this, 'Directory', Blockly.Arduino.ORDER_ATOMIC); 
  
  var code = 'mp3.playSpecific('+directory+','+song+');\n';
 
  return code;
};



Blockly.Blocks['YX5300Mp3_playfolderrepeat'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_folderrepeat)
	this.appendValueInput("Folder")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play folder repeat');
  }
};


Blockly.Arduino['YX5300Mp3_playfolderrepeat'] = function(block) {
 		
 var folder = Blockly.Arduino.valueToCode(this, 'Folder', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playFolderRepeat('+folder+');\n';
 
  return code;
};



Blockly.Blocks['YX5300Mp3_playFolderShuffle'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
		.appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_foldershuffle)
	this.appendValueInput("Folder")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play randon all files');
  }
};



Blockly.Arduino['YX5300Mp3_playFolderShuffle'] = function(block) {
 		
 var result = Blockly.Arduino.valueToCode(this, 'Folder', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.shuffle('+result+');\n';
 
  return code;
};



Blockly.Blocks['YX5300Mp3_playTrackRepeat'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour("#FF63BB");
	this.appendDummyInput()
        .appendField("🎧 "+Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_songrepeat)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play track repeat');
  }
};



Blockly.Arduino['YX5300Mp3_playTrackRepeat'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playTrackRepeat('+song+');\n';
 
  return code;
};










