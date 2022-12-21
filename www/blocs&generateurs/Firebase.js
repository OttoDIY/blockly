/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.Firebase');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');


Blockly.Blocks['firebase_init'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.Firebase_name_init);
	this.appendDummyInput()
		.appendField(Blockly.Msg.Firebase_url)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "URL_PATH")
		.appendField(Blockly.Msg.Firebase_api)
        .appendField(new Blockly.FieldTextInput("yyyyyyyy"), "API_READ_KEY");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init firebase data connection');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['firebase_init'] = function(block) {
	 
var URL_Path = block.getFieldValue('URL_PATH');  
var APIReadKey = block.getFieldValue('API_READ_KEY');  

Blockly.Arduino.includes_['include_firebase'] = '#include <Firebase_ESP_Client.h>\n';
Blockly.Arduino.includes_['include_TokenHelper'] = '#include <addons/TokenHelper.h>\n';
Blockly.Arduino.includes_['include_RTDBHelper'] = '#include <addons/RTDBHelper.h>\n';


Blockly.Arduino.variables_['define_firebase_defines'] = '#define API_KEY "'+APIReadKey+'";\n'+
'#define DATABASE_URL "'+URL_Path+'";\n';

Blockly.Arduino.variables_['define_firebase_variables'] = 'FirebaseData fbdo;\n'+
'FirebaseAuth auth;\n'+
'FirebaseConfig config;\n';

Blockly.Arduino.variables_['function_firebase_int'] = 'int Firebase_getInt_value(String param)\n'+
'{\n'+
'if (Firebase.ready())\n'+
'{\n'+
'if (Firebase.RTDB.getInt(&fbdo, param)) {\n'+
' if (fbdo.dataType() == "int") {\n'+
' return( fbdo.intData());\n'+
'        }\n'+
'      }\n'+
'    }\n'+
'return 0;\n'+
'}\n'; 

Blockly.Arduino.variables_['function_firebase_float'] = 'float Firebase_getFloat_value(String param)\n'+
'{\n'+
'if (Firebase.ready())\n'+
'{\n'+
'if (Firebase.RTDB.getFloat(&fbdo, param)) {\n'+
' if (fbdo.dataType() == "float") {\n'+
' return( fbdo.floatData());\n'+
'        }\n'+
'      }\n'+
'    }\n'+
'return 0;\n'+
'}\n';


Blockly.Arduino.variables_['function_firebase_double'] = 'double Firebase_getDouble_value(String param)\n'+
'{\n'+
'if (Firebase.ready())\n'+
'{\n'+
'if (Firebase.RTDB.getDouble(&fbdo, param)) {\n'+
' if (fbdo.dataType() == "double") {\n'+
' return( fbdo.doubleData());\n'+
'        }\n'+
'     }\n'+
'    }\n'+
'return 0;\n'+
'}\n';	

Blockly.Arduino.variables_['function_firebase_string'] = 'String Firebase_getString_value(String param)\n'+
'{\n'+
'if (Firebase.ready())\n'+
'{\n'+
'if (Firebase.RTDB.getString(&fbdo, param)) {\n'+
' if (fbdo.dataType() == "string") {\n '+
' return( fbdo.stringData());\n'+
'}\n'+
'}\n'+
'}\n'+
'return "0";\n'+
'}\n';

  var code='';
  return code;
};

Blockly.Blocks['firebase_start'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name)
		.appendField(Blockly.Msg.Firebase_start)		
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Start firebase connection. Before you need to connect to the wifi in station mode');
    this.setHelpUrl(''); 
  }
};


Blockly.Arduino['firebase_start'] = function(block) {
	
   
 var code= 'config.api_key = API_KEY;\n'+
'	config.database_url = DATABASE_URL;\n'+
'	Firebase.signUp(&config, &auth, "", "");\n'+
'	config.token_status_callback = tokenStatusCallback;\n'+
'	Firebase.begin(&config, &auth);\n'+
'	Firebase.reconnectWiFi(true);\n'

  return code;
};


Blockly.Blocks['firebase_write_num'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name);
	this.appendDummyInput()
        .appendField(Blockly.Msg.Firebase_type)
		.appendField(new Blockly.FieldDropdown([['int', '1'],['float', '2'],['double', '3']]),"FIELD_NUM")
		.appendField(Blockly.Msg.Firebase_Node);
	this.appendValueInput("node")
		.setCheck("String");
	this.appendValueInput("value")
        .setCheck("Number")
		.appendField(Blockly.Msg.Firebase_Value);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write a numeric value in BBDD in the node');
  }
};



Blockly.Arduino['firebase_write_num'] = function(block) {

 var node = Blockly.Arduino.valueToCode(block, 'node', Blockly.Arduino.ORDER_ATOMIC);
 var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
 var field = this.getFieldValue('FIELD_NUM');
    
 
 if(field=='1')
	var code = 'if (Firebase.ready()) Firebase.RTDB.setInt(&fbdo, '+node+', '+value+');\n';
	else if (field=='2')
		var code = 'if (Firebase.ready()) Firebase.RTDB.setFloat(&fbdo, '+node+', '+value+');\n';
	else
		var code = 'if (Firebase.ready()) Firebase.RTDB.setDouble(&fbdo, '+node+', '+value+');\n';
  
  return code;
};


Blockly.Blocks['firebase_write_text'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name)
		.appendField(Blockly.Msg.Firebase_String_Node);
	this.appendValueInput("node")
		.setCheck("String");
	this.appendValueInput("value")
        .setCheck("String")
		.appendField(Blockly.Msg.Firebase_Value);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write a text value in BBDD in the node');
  }
};


Blockly.Arduino['firebase_write_text'] = function(block) {

 var node = Blockly.Arduino.valueToCode(block, 'node', Blockly.Arduino.ORDER_ATOMIC);
 var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
     
 
  var code = 'if (Firebase.ready()) Firebase.RTDB.setString(&fbdo, '+node+', '+value+');\n';
  
  return code;
};

Blockly.Blocks['firebase_read_num'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name);
	this.appendDummyInput()
        .appendField(Blockly.Msg.Firebase_read)
		.appendField(new Blockly.FieldDropdown([['int', '1'],['float', '2'],['double', '3']]),"FIELD_NUM")
		.appendField(Blockly.Msg.Firebase_Node);
	this.appendValueInput("node")
		.setCheck("String");
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the field in int , float or double');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['firebase_read_num'] = function(block) {
 var node = Blockly.Arduino.valueToCode(block, 'node', Blockly.Arduino.ORDER_ATOMIC);
 var field = this.getFieldValue('FIELD_NUM');
    
  if(field=='1')
 	 var code = 'Firebase_getInt_value('+node+')';
  else if (field=='2')
	var code = 'Firebase_getFloat_value('+node+')';
  else
	var code = 'Firebase_getDouble_value('+node+')';	
 
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Blocks['firebase_read_text'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name);
	this.appendDummyInput()
       	.appendField(Blockly.Msg.Firebase_Read_String_Node);
	this.appendValueInput("node")
		.setCheck("String");
	this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the field in int , float or double');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['firebase_read_text'] = function(block) {
 var node = Blockly.Arduino.valueToCode(block, 'node', Blockly.Arduino.ORDER_ATOMIC);
 var field = this.getFieldValue('FIELD_NUM');
    
  var code = 'Firebase_getString_value('+node+')';	
 
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['firebase_delete_node'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/firebase.png",25,25))
        .appendField(Blockly.Msg.firebase_name)
		.appendField(Blockly.Msg.firebase_delete);
	this.appendValueInput("node")
		.setCheck("String");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write a text value in BBDD in the node');
  }
};


Blockly.Arduino['firebase_delete_node'] = function(block) {

 var node = Blockly.Arduino.valueToCode(block, 'node', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = 'if (Firebase.ready()) Firebase.RTDB.deleteNode(&fbdo, '+node+');\n';
  
  return code;
};