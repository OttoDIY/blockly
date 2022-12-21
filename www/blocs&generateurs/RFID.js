/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.RFID');
goog.provide("Blockly.Blocks.arduino");
goog.require('Blockly.Blocks');


Blockly.Blocks['rfid_init'] = {
   init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/RFIDreader.png",33,33))
        .appendField(Blockly.Msg.RFID_init)
		.appendField(Blockly.Msg.RFID_init2);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_PIN_SDA)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_SDA");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_PIN_RST)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RST");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MFRC522 Important The VCC must be connected to 3.3V!!');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['rfid_init'] = function(block) {

   var pin_RST = this.getFieldValue('PIN_RST');
   var pin_SDA = this.getFieldValue('PIN_SDA');
    
	
   Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
   Blockly.Arduino.includes_['define_MRFC522'] = '#include <MFRC522.h>';
    
   Blockly.Arduino.definitions_['define_mrfc522'] = 'MFRC522 mfrc522('+pin_SDA+','+pin_RST+');\n';
 
   Blockly.Arduino.setups_['setup_spi']='SPI.begin();\n'
   Blockly.Arduino.setups_['setup_mrfc522']='mfrc522.PCD_Init();\n'

  var code = '';
  return code;
};

Blockly.Blocks['rfid_validationcard'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_VALID_VAR)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C1)
        .appendField(new Blockly.FieldTextInput("0x3F"), "C1");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C2)
        .appendField(new Blockly.FieldTextInput("0x01"), "C2");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C3)
        .appendField(new Blockly.FieldTextInput("0x23"), "C3");
		this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C4)
        .appendField(new Blockly.FieldTextInput("0x44"), "C4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write validation cards or keys');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['rfid_validationcard'] = function(block) {

   var pin_C1 = block.getFieldValue('C1');  
   var pin_C2 = block.getFieldValue('C2');  
   var pin_C3 = block.getFieldValue('C3');  
   var pin_C4 = block.getFieldValue('C4');  
   var Var_NAME = block.getFieldValue('NAME');
	   
   Blockly.Arduino.definitions_['define_validation_car_'+Var_NAME+''] = 'byte '+Var_NAME+'[4]= {'+pin_C1+','+pin_C2+','+pin_C3+','+pin_C4+'};\n';
 
  var code = '';
  return code;
};

Blockly.Blocks['RFID_detected'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_DETECTED)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['RFID_detected'] = function(block) {
  
  var code = 'mfrc522.PICC_IsNewCardPresent()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['RFID_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_READED)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['RFID_readed'] = function(block) {
  
  var code = 'mfrc522.PICC_ReadCardSerial()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['RFID_card_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_CARD_READED)
	this.setOutput(true, 'String');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['RFID_card_readed'] = function(block) {
	
  Blockly.Arduino.definitions_['define_card_readed'] = 'String cardreaded(byte *buffer,byte bufferSize) \n'+
' {\n'+
'	String card="";\n'+
'	for (byte i=0; i<bufferSize; i++)\n'+
'		{\n'+
'		card+=String(buffer[i]<0x10 ? \" 0\" : \" \");\n'+
'		card+=String(buffer[i],HEX);\n'+
'		}\n'+
'	return card;\n'+	
' }\n';
  
  var code = 'cardreaded(mfrc522.uid.uidByte, mfrc522.uid.size)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['RFID_check_card'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_CHECK_CARD)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME")
		.appendField(Blockly.Msg.RFID_CHECK_CARD2)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['RFID_check_card'] = function(block) {
	
 var Var_NAME = block.getFieldValue('NAME');	
	
  Blockly.Arduino.definitions_['compare_card_readed'] = 'bool isEqualArray(byte arrayA[],byte arrayB[],int length)\n'+
' {\n'+
'	for (int index=0; index<length; index++)\n'+
'		{\n'+
'		  if (arrayA[index]!=arrayB[index])\n'+
'		   return false;\n'+
'		}\n'+
'	return true;\n'+	
' }\n';
  
  var code = 'isEqualArray(mfrc522.uid.uidByte,'+Var_NAME+',4)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['rfid_stopread'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_STOP)	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Stop the current reading');
    this.setHelpUrl('');
  }
};
	

Blockly.Arduino['rfid_stopread'] = function(block) {

var code = 'mfrc522.PICC_HaltA();\n';
	 
	 
  return code;
};


//////////////////////////////////////////////////////////////////////////////
// NFC PN532
//////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['nfc_init'] = {
   init: function() {
	var card=window.localStorage.card;
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/NFCreader.png",33,33))
        .appendField(Blockly.Msg.NFC_init)
		.appendField(Blockly.Msg.NFC_init2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('NFC PN532 using I2 pins.ESP32 and ESP8266 doesn´t work Ok using I2C, you need to reset a lot of time to detect. Important too: you must configure the swith in the component to I2C configuration. In the board you need to use the I2C pins');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['nfc_init'] = function(block) {

   Blockly.Arduino.includes_['define_wire'] = '#include <Wire.h>';
   Blockly.Arduino.includes_['define_PN532_I2C'] = '#include <PN532_I2C.h>';
   Blockly.Arduino.includes_['define_PN532'] = '#include <PN532.h>';
   Blockly.Arduino.includes_['define_NfcAdapter'] = '#include <NfcAdapter.h>';
    
   Blockly.Arduino.definitions_['define_pn532i2c'] = 'PN532_I2C pn532i2c(Wire);\n';
   Blockly.Arduino.definitions_['define_nfc'] = 'PN532 nfc(pn532i2c);\n';
   
   Blockly.Arduino.definitions_['define_nfc_uid'] = 'uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };\n';
   Blockly.Arduino.definitions_['define_nfc_uidLength'] = 'uint8_t uidLength;\n';
       
   Blockly.Arduino.setups_['setup_nfc']=' nfc.begin();\n'
   Blockly.Arduino.setups_['setup_nfc_retries']=' nfc.setPassiveActivationRetries(0xFF);\n'
   Blockly.Arduino.setups_['setup_nfc_SAMConfig']=' nfc.SAMConfig();\n'

  var code = '';
  return code;
};

Blockly.Blocks['nfc_validationcard'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_VALID_VAR)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C1)
        .appendField(new Blockly.FieldTextInput("0x3F"), "C1");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C2)
        .appendField(new Blockly.FieldTextInput("0x01"), "C2");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C3)
        .appendField(new Blockly.FieldTextInput("0x23"), "C3");
		this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C4)
        .appendField(new Blockly.FieldTextInput("0x44"), "C4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write validation cards or keys of 4 bytes');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['nfc_validationcard'] = function(block) {

   var pin_C1 = block.getFieldValue('C1');  
   var pin_C2 = block.getFieldValue('C2');  
   var pin_C3 = block.getFieldValue('C3');  
   var pin_C4 = block.getFieldValue('C4');  
   var Var_NAME = block.getFieldValue('NAME');
	   
   Blockly.Arduino.definitions_['define_nfc_validation_car_'+Var_NAME+''] = 'uint8_t '+Var_NAME+'[4]= {'+pin_C1+','+pin_C2+','+pin_C3+','+pin_C4+'};\n';
 
  var code = '';
  return code;
};


Blockly.Blocks['nfc_validationcard_2'] = {
   init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_VALID_VAR2)
        .appendField(new Blockly.FieldTextInput("cardy"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C1)
        .appendField(new Blockly.FieldTextInput("0x3F"), "C1");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C2)
        .appendField(new Blockly.FieldTextInput("0x01"), "C2");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C3)
        .appendField(new Blockly.FieldTextInput("0x23"), "C3");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C4)
        .appendField(new Blockly.FieldTextInput("0x44"), "C4");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C5)
        .appendField(new Blockly.FieldTextInput("0x54"), "C5");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C6)
        .appendField(new Blockly.FieldTextInput("0x46"), "C6");
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_C7)
        .appendField(new Blockly.FieldTextInput("0x33"), "C7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write validation cards or keys of 7 bytes');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['nfc_validationcard_2'] = function(block) {

   var pin_C1 = block.getFieldValue('C1');  
   var pin_C2 = block.getFieldValue('C2');  
   var pin_C3 = block.getFieldValue('C3');  
   var pin_C4 = block.getFieldValue('C4');  
   var pin_C5 = block.getFieldValue('C5'); 
   var pin_C6 = block.getFieldValue('C6'); 
   var pin_C7 = block.getFieldValue('C7'); 
   var Var_NAME = block.getFieldValue('NAME');
	   
   Blockly.Arduino.definitions_['define_nfc_validation_car_'+Var_NAME+''] = 'uint8_t '+Var_NAME+'[7]= {'+pin_C1+','+pin_C2+','+pin_C3+','+pin_C4+','+pin_C5+','+pin_C6+','+pin_C7+'};\n';
 
  var code = '';
  return code;
};

Blockly.Blocks['nfc_detected'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_name)
	    .appendField(Blockly.Msg.NFC_DETECTED)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['nfc_detected'] = function(block) {
  
  var code = 'nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['nfc_card_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_name)
	    .appendField(Blockly.Msg.NFC_CARD_READED)
	this.setOutput(true, 'String');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['nfc_card_readed'] = function(block) {
	
  Blockly.Arduino.definitions_['define_nfc_card_readed'] = 'String cardreaded(uint8_t *buffer,uint8_t bufferSize) \n'+
' {\n'+
'	String card="";\n'+
'	for (uint8_t i=0; i<bufferSize; i++)\n'+
'		{\n'+
'		card+=String(buffer[i]<0x10 ? \" 0\" : \" \");\n'+
'		card+=String(buffer[i],HEX);\n'+
'		}\n'+
'	return card;\n'+	
' }\n';
  
  var code = 'cardreaded(uid,uidLength)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['nfc_check_card'] = {
  helpUrl: '',
  init: function() {
    this.setColour("#2a93e8");
    this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.NFC_CHECK_CARD)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME")
		.appendField(Blockly.Msg.NFC_CHECK_CARD2)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Arduino['nfc_check_card'] = function(block) {
	
 var Var_NAME = block.getFieldValue('NAME');	
	
  Blockly.Arduino.definitions_['compare_nfc_card_readed'] = 'bool isEqualArray(uint8_t  arrayA[],uint8_t  arrayB[],int length)\n'+
' {\n'+
'	for (int index=0; index<length; index++)\n'+
'		{\n'+
'		  if (arrayA[index]!=arrayB[index])\n'+
'		   return false;\n'+
'		}\n'+
'	return true;\n'+	
' }\n';
  
  var code = 'isEqualArray(uid,'+Var_NAME+',uidLength)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
