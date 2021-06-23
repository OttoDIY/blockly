/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.Telegram');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['telegram_init'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_name_init)
		.appendField(Blockly.Msg.Telegram_BotToken)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "BOT_TOKEN")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.Telegram_ChatID)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "CHAT_ID")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init telegram functions');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['telegram_init'] = function(block) {
	 
 var BotToken = block.getFieldValue('BOT_TOKEN');  
 var ChatID = block.getFieldValue('CHAT_ID'); 
 
  Blockly.Arduino.includes_['include_telegram'] = '#include <WiFiClientSecure.h>\n'+
  '#include <UniversalTelegramBot.h>\n';
  
  Blockly.Arduino.variables_['define_telegram'] = '#define BOT_TOKEN "'+BotToken+'"\n'+
 '#define CHAT_ID "'+ChatID+'"\n';
  
  Blockly.Arduino.variables_['define_telegram_variables'] = 'X509List cert(TELEGRAM_CERTIFICATE_ROOT);\n'+
	'WiFiClientSecure secured_client;\n'+
	'UniversalTelegramBot bot(BOT_TOKEN, secured_client);\n'+
	'int numNewMessages=0;\n';

  Blockly.Arduino.setups_['setup_telegram'] = 'secured_client.setTrustAnchors(&cert);\n';

  var code='';
  return code;
};


Blockly.Blocks['telegram_loop_message'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_Loop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['telegram_loop_message'] = function(block) {
    
  var code ='numNewMessages = bot.getUpdates(bot.last_message_received + 1);\n'+
    'while (numNewMessages)\n'+
    '{\n'+
    '  handleNewMessages(numNewMessages);\n'+
    '  numNewMessages = bot.getUpdates(bot.last_message_received + 1);\n'+
    '}\n';
	
  return code;
};



Blockly.Blocks["telegram_reception_function"]={init:function(){
		
        this.setColour("#008080");

        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
			.appendField(Blockly.Msg.Telegram_receive)
		this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('')}
};

Blockly.Arduino["telegram_reception_function"]=function(block){
	

	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_['telegram_reception_function'] ='void handleNewMessages(int numNewMessages){\n'+
	 'for (int i = 0; i < numNewMessages; i++)\n'+
		'{\n'+
		'	String text = bot.messages[i].text;\n'+	branch + '}\n'+
	'}\n';
	
	return "";
};


Blockly.Blocks['telegram_sendmessage'] = {
  init: function() {
     this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
		.appendField(Blockly.Msg.Telegram_name);
   	this.appendValueInput("texttosend")
        .setCheck(null)
		.appendField(Blockly.Msg.TelegramSend);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['telegram_sendmessage'] = function(block) {
  var texttosend = Blockly.Arduino.valueToCode(block, 'texttosend', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'bot.sendMessage(CHAT_ID, '+ texttosend+', "");\n';
  
  return code;
};

Blockly.Blocks['telegram_message_name_received'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
		.appendField(Blockly.Msg.Telegram_name)
        .appendField(Blockly.Msg.Telegram_fromName);
    this.setOutput(true, "String");
	this.setInputsInline(true);
    this.setTooltip('Refund the field in long or number');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['telegram_message_name_received'] = function(block) {
   
  var code = 'bot.messages[i].from_name';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['telegram_message_received'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_message)	
    this.setOutput(true, "String");
	this.setInputsInline(true);
    this.setTooltip('Refund the message');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['telegram_message_received'] = function(block) {
  
  var code = 'text';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};








