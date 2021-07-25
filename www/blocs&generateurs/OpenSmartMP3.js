 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.OpenSmartMP3');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');

Blockly.Blocks['OpenSmartMp3_init_ss'] = {
  init: function() {
	 var card=window.localStorage.card;
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/opensmart.png",43,38))
        .appendField(Blockly.Msg.MP3OS_init)
		.appendField(Blockly.Msg.MP3OS_TX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_TX");
   this.appendDummyInput()
		.appendField(Blockly.Msg.MP3OS_RX)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_RX");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the OpenSmart MP3 module');
  }
};


Blockly.Arduino['OpenSmartMp3_init_ss'] = function(block) {
	
 //var pin_rx = Blockly.Arduino.valueToCode(this, "PIN_RX", Blockly.Arduino.ORDER_NONE);
 //var pin_tx = Blockly.Arduino.valueToCode(this, "PIN_TX", Blockly.Arduino.ORDER_NONE);
 var pin_rx = this.getFieldValue('PIN_RX');
 var pin_tx = this.getFieldValue('PIN_TX');

 Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n'; 
 Blockly.Arduino.includes_['define_osmp3_library'] = '#include <RedMP3.h>\n';
 Blockly.Arduino.definitions_['setup_osmp3'] = ' MP3 mp3('+pin_rx+','+pin_tx+');\n';
 
 Blockly.Arduino.setups_['init_osmp3'] = ' delay(500);//Requires 500ms to wait for the MP3 module to initialize \n';
   
 var code='';
 return code;
   
};

Blockly.Blocks['OpenSmartMp3_set_volumen'] = {
 init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3OS_name)
		.appendField(Blockly.Msg.MP3OS_volumen)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the volumen of MP3');
  }
};

Blockly.Arduino['OpenSmartMp3_set_volumen'] = function(block) {
 		
 var volumen = Blockly.Arduino.valueToCode(this, 'Volumen', Blockly.Arduino.ORDER_ATOMIC); 	
 var code = 'mp3.setVolume('+volumen+');\ndelay(50);\n';
  
 
  return code;
};

Blockly.Blocks['OpenSmartMp3_operation'] = {
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3OS_name)
		.appendField(Blockly.Msg.MP3OS_operation)
		.appendField(new Blockly.FieldDropdown([['Increase Volumen','0'],['Decrease Volumen','1'],['Reproduce next Song','2'],['Reproduce previous Song','3'],['Start Song','4'],['Pause Song','5'],['Stop Song','6'],['Foward','7'],['Rewind','8'],['Stop inject','9'],['Single cycle','10'],['All cycle','11']]), "MP3_OPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Make an operation');
  }
};


Blockly.Arduino['OpenSmartMp3_operation'] = function(block) {
 		
 var mp3_operation = this.getFieldValue('MP3_OPERATION'); 	
 
 if (mp3_operation==0) 
    var code = 'mp3.volumeUp();\ndelay(50);\n';
	else if (mp3_operation==1) 
		var code = 'mp3.volumeDown();\ndelay(50);\n';
		else if (mp3_operation==2) 
			 var code = 'mp3.nextSong();\ndelay(50);\n';
			 else if (mp3_operation==3) 
				  var code = 'mp3.previousSong();\ndelay(50);\n';
				  else if (mp3_operation==4) 
						var code = 'mp3.play();\ndelay(50);\n';
						else if (mp3_operation==5) 
							var code = 'mp3.pause();\ndelay(50);\n';
							else if (mp3_operation==6) 
								var code = 'mp3.stopPlay();\ndelay(50);\n';
								else if (mp3_operation==7) 
									var code = 'mp3.forward();\ndelay(50);\n';
									else if (mp3_operation==8) 
										var code = 'mp3.rewind();\ndelay(50);\n';
										else if (mp3_operation==9) 
											var code = 'mp3.stopInject();\ndelay(50);\n';
											else if (mp3_operation==10) 
												var code = 'mp3.singleCycle();\ndelay(50);\n';						
													else 
													var code = 'mp3.allCycle();\ndelay(50);\n';
    return code;
};

Blockly.Blocks['OpenSmartMp3_playsong'] = {
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3OS_name)
		.appendField(Blockly.Msg.MP3OS_playsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track');
  }
};

Blockly.Arduino['OpenSmartMp3_playsong'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playWithIndex('+song+');\ndelay(50);\n';
 
  return code;
};

Blockly.Blocks['OpenSmartMp3_playsongdirectiry'] = {
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3OS_name)
	this.appendValueInput("Song")
		.appendField(Blockly.Msg.MP3OS_playsong)
		.setCheck('Number')
	this.appendValueInput("Directory")
		.appendField(Blockly.Msg.MP3OS_playsongdirectory)
		.setCheck('Number')	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track in one folder');
  }
};

Blockly.Arduino['OpenSmartMp3_playsongdirectiry'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 
 var directory = Blockly.Arduino.valueToCode(this, 'Directory', Blockly.Arduino.ORDER_ATOMIC); 
  
  var code = 'mp3.playWithFileName('+directory+','+song+');\ndelay(50);\n';
 
  return code;
};

Blockly.Blocks['OpenSmartMp3_injectindex'] = {
  init: function() {
	this.setColour("#a600d3");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3OS_name)
		.appendField(Blockly.Msg.MP3OS_inject)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('inject a song according to the physical index of song in the TF card when it is playing song.');
  }
};

Blockly.Arduino['OpenSmartMp3_injectindex'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.injectWithIndex('+song+');\ndelay(50);\n';
 
  return code;
};
