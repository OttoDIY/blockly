/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.EspNow');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');



Blockly.Blocks['espnow_init_esp32'] = {
  init: function() {
     this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
		.appendField(Blockly.Msg.ESPNOW_init);
   	this.appendValueInput("id_node")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the espnow protocol for esp32 board');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['espnow_init_esp32'] = function(block) {
  var id_node = Blockly.Arduino.valueToCode(block, 'id_node', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_espnow_esp32'] = '#include<esp_now.h>\n';
  Blockly.Arduino.includes_['define_espnow_wifi'] = '#include<WiFi.h>\n';
  
  Blockly.Arduino.variables_['define_espnow_variables'] = 'uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};\n'+
  'unsigned int IncomingIdNode;\n'+
  'unsigned int IncomingParamInt;\n'+
  'float IncomingParamFloat;\n'+
  'char IncomingParamText[24];\n'+
  '\n'+
  '//Structure\n'+
  'typedef struct struct_message {\n'+
  '  unsigned int node;\n'+
  '  unsigned int ParamInt;\n'+
  '	float ParamFloat;\n'+
  ' char ParamText[24];\n'+
  '} struct_message;\n'+
  '\n'+
  '// Create a struct_message to send\n'+
  'struct_message OutputStruct;\n'+
  '\n'+
  '// Create a struct_message to hold incoming readings\n'+
  'struct_message incomingReadings;\n'+
  '\n'+
  '//Varaibles for manage espnow\n'+
  'String success;\n'+
  '\n'+
  'esp_now_peer_info_t peerInfo;\n';
 
  	
Blockly.Arduino.definitions_['define_espnow_OnDataSent'] = 'void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {\n'+
' Serial.print("Last Packet Send Status: ");\n'+
' Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");\n'+
' if (status ==0){\n'+
'   success = "Delivery Success :)";\n'+
'  }\n'+
' else{\n'+
'    success = "Delivery Fail :(";\n'+
'  }\n'+
'}\n';

Blockly.Arduino.definitions_['define_espnow_esp32_AddPeer'] = 'void Add_peer(uint8_t broadcastAddress[]) {\n'+
'  peerInfo.channel = 0;  \n'+
'  peerInfo.encrypt = false;\n'+
'  memcpy(peerInfo.peer_addr, broadcastAddress, 6);\n'+
'  // Add peer  \n'+      
'  if (esp_now_add_peer(&peerInfo) != ESP_OK){\n'+
'   Serial.println("Failed to add peer1");\n'+
'   return;\n'+
' } \n'+
'}\n';

Blockly.Arduino.setups_['setup_espnow'] = 'Serial.begin(115200);\n'+
  '// Set device as a Wi-Fi Station\n'+
  'WiFi.mode(WIFI_STA);\n'+
  '\n'+
  '// Init ESP-NOW\n'+
  'if (esp_now_init() != ESP_OK) {\n'+
  '  Serial.println("Error initializing ESP-NOW");\n'+
  '  return;\n'+
  '}\n'+
  '\n'+
  '// Internal node.To avoid use MAC address we have created the node id into the structure.The rest param of the structure are filled with a default values\n'+
  'OutputStruct.node='+id_node+';\n'+ 
  'OutputStruct.ParamInt=0;\n'+
  'OutputStruct.ParamFloat=0.0;\n'+
  'strcpy(OutputStruct.ParamText, "Hello from node: '+id_node+'");\n'+
  '\n'+
  ' // Once ESPNow is successfully Init, we will register for Send CB to get the status of Trasnmitted packet\n'+
  'esp_now_register_send_cb(OnDataSent);\n';	
	
  
  var code = '';
  
  return code;
};

Blockly.Blocks['espnow_init_esp8266'] = {
  init: function() {
     this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
		.appendField(Blockly.Msg.ESPNOW_init);
   	this.appendValueInput("id_node")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the espnow protocol for esp8266 boards');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['espnow_init_esp8266'] = function(block) {
  var id_node = Blockly.Arduino.valueToCode(block, 'id_node', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_espnow_esp8266'] = '#include<espnow.h>\n';
  Blockly.Arduino.includes_['define_espnow_wifi_esp8266'] = '#include<ESP8266WiFi.h>\n';
  
  Blockly.Arduino.variables_['define_espnow_esp8266_variables'] = 'uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};\n'+
  'unsigned int IncomingIdNode;\n'+
  'unsigned int IncomingParamInt;\n'+
  'float IncomingParamFloat;\n'+
  'char IncomingParamText[24];\n'+
  '\n'+
  '//Structure\n'+
  'typedef struct struct_message {\n'+
  '  unsigned int node;\n'+
  '  unsigned int ParamInt;\n'+
  '	float ParamFloat;\n'+
  ' char ParamText[24];\n'+
  '} struct_message;\n'+
  '\n'+
  '// Create a struct_message to send\n'+
  'struct_message OutputStruct;\n'+
  '\n'+
  '// Create a struct_message to hold incoming readings\n'+
  'struct_message incomingReadings;\n'+
  '\n'+
  '//Varaibles for manage espnow\n'+
  'String success;\n';
  
  	
Blockly.Arduino.definitions_['define_espnow_esp8266_OnDataSent'] = 'void OnDataSent(uint8_t *mac_addr, uint8_t sendStatus) {\n'+
' Serial.print("Last Packet Send Status: ");\n'+
' if (sendStatus == 0){\n'+
'   Serial.println("Delivery success");\n'+
'  }\n'+
'  else{\n'+
'   Serial.println("Delivery fail");\n'+
' }\n'+
'}\n';

Blockly.Arduino.setups_['setup_espnow'] = 'Serial.begin(115200);\n'+
  '// Set device as a Wi-Fi Station\n'+
  'WiFi.mode(WIFI_STA);\n'+
  '\n'+
  '// Init ESP-NOW\n'+
  'if (esp_now_init() != 0) {\n'+
  '  Serial.println("Error initializing ESP-NOW");\n'+
  '  return;\n'+
  '}\n'+
  '// Set ESP-NOW Role\n'+
  'esp_now_set_self_role(ESP_NOW_ROLE_COMBO);\n'+
  '\n'+
  '// Internal node.To avoid use MAC address we have created the node id into the structure.The rest param of the structure are filled with a default values\n'+
  'OutputStruct.node='+id_node+';\n'+ 
  'OutputStruct.ParamInt=0;\n'+
  'OutputStruct.ParamFloat=0.0;\n'+
  'strcpy(OutputStruct.ParamText, "Hello from node: '+id_node+'");\n'+
  '\n'+
  ' // Once ESPNow is successfully Init, we will register for Send CB to get the status of Trasnmitted packet\n'+
  'esp_now_register_send_cb(OnDataSent);\n';	
	
  
  var code = '';
  
  return code;
};


Blockly.Blocks["espnow_reception_function"]={init:function(){
		
        this.setColour("#26C6F8");

        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
			.appendField(Blockly.Msg.ESPNOW_msg_received)
		this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('')}
};

Blockly.Arduino["espnow_reception_function"]=function(block){
	

	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	
	
	Blockly.Arduino.setups_['setup_espnow_esp32_recepcion_callback'] = '// Register for a callback function that will be called when data is received\n'+
    'esp_now_register_recv_cb(OnDataRecv);\n';	
	
	Blockly.Arduino.codeFunctions_['esp_reception_function'] ='void OnDataRecv(const uint8_t * mac_addr, const uint8_t *incomingData, int len) {\n'+
	'char macStr[18];\n'+
	'Serial.print("Packet from: ");\n'+
	'// Copies the sender mac address to a string\n'+
	'snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",\n'+
	'          mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);\n'+
	'Serial.print(macStr);\n'+
	'memcpy(&incomingReadings, incomingData, sizeof(incomingReadings));\n'+
	'Serial.print("Bytes received: ");\n'+
	'Serial.println(len);\n'+
	'IncomingIdNode = incomingReadings.node;\n'+
	'IncomingParamInt = incomingReadings.ParamInt;\n'+
	'IncomingParamFloat = incomingReadings.ParamFloat;\n'+
	'strcpy(IncomingParamText,incomingReadings.ParamText);\n'+
	'\n'+	
	''+	branch + '}\n';
	
	return "";
};


Blockly.Blocks["espnow_esp8266_reception_function"]={init:function(){
		
        this.setColour("#26C6F8");

        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
			.appendField(Blockly.Msg.ESPNOW_msg_received)
		this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('')}
};

Blockly.Arduino["espnow_esp8266_reception_function"]=function(block){
	

	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	
	
	Blockly.Arduino.setups_['setup_espnow_esp32_recepcion_callback'] = '// Register for a callback function that will be called when data is received\n'+
    'esp_now_register_recv_cb(OnDataRecv);\n';	
	
	Blockly.Arduino.codeFunctions_['esp_reception_function'] ='void OnDataRecv(uint8_t * mac_addr, uint8_t *incomingData, uint8_t len) {\n'+
	'char macStr[18];\n'+
	'Serial.print("Packet from: ");\n'+
	'// Copies the sender mac address to a string\n'+
	'snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",\n'+
	'          mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);\n'+
	'Serial.print(macStr);\n'+
	'memcpy(&incomingReadings, incomingData, sizeof(incomingReadings));\n'+
	'Serial.print("Bytes received: ");\n'+
	'Serial.println(len);\n'+
	'IncomingIdNode = incomingReadings.node;\n'+
	'IncomingParamInt = incomingReadings.ParamInt;\n'+
	'IncomingParamFloat = incomingReadings.ParamFloat;\n'+
	'strcpy(IncomingParamText,incomingReadings.ParamText);\n'+
	'\n'+	
	''+	branch + '}\n';
	
	return "";
};







Blockly.Blocks["espnow_sendmessage_all"] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_send_all)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send message to all nodes');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_sendmessage_all'] = function(block) {
	var card=window.localStorage.card;
	
	if (card =="OttoESP")
	 	 Blockly.Arduino.setups_['setup_espnow_add_peer'] = '//Register peer to all nodes \n'+
		'broadcastAddress[0]=0xFF; broadcastAddress[1]=0xFF; broadcastAddress[2]=0xFF; broadcastAddress[3]=0xFF; broadcastAddress[4]=0xFF; broadcastAddress[5]=0xFF;\n'+	
		'esp_now_add_peer(broadcastAddress, ESP_NOW_ROLE_COMBO, 1, NULL, 0);\n';
	else
		 Blockly.Arduino.setups_['setup_espnow_add_peer'] = '//Register peer to all nodes \n'+
		'broadcastAddress[0]=0xFF; broadcastAddress[1]=0xFF; broadcastAddress[2]=0xFF; broadcastAddress[3]=0xFF; broadcastAddress[4]=0xFF; broadcastAddress[5]=0xFF;\n'+	
		'Add_peer(broadcastAddress);\n';
	 
    var code ='// Send message via ESP-NOW\n'+
    'broadcastAddress[0]=0xFF; broadcastAddress[1]=0xFF; broadcastAddress[2]=0xFF; broadcastAddress[3]=0xFF; broadcastAddress[4]=0xFF; broadcastAddress[5]=0xFF;\n'+
    'esp_now_send(broadcastAddress, (uint8_t *) &OutputStruct, sizeof(OutputStruct));\n'+
	'delay(500);\n';
	    	
  return code;
};


Blockly.Blocks["espnow_sendmessage_mac"] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_send_mac);
	 this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac1")
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac2")
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac3")
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac4")
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac5")
		.appendField(new Blockly.FieldTextInput("0xFF"), "mac6");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send message to the node with this MAC');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_sendmessage_mac'] = function(block) {
	 var card=window.localStorage.card;
	 var mac1=block.getFieldValue("mac1");
	 var mac2=block.getFieldValue("mac2");
	 var mac3=block.getFieldValue("mac3");
	 var mac4=block.getFieldValue("mac4");
	 var mac5=block.getFieldValue("mac5");
	 var mac6=block.getFieldValue("mac6");
	 
	 if (card =="OttoESP")
		 Blockly.Arduino.setups_['setup_espnow_add_peer'+mac1+mac2] = '//Register peer to all nodes \n'+
		'broadcastAddress[0]='+mac1+'; broadcastAddress[1]='+mac2+'; broadcastAddress[2]='+mac3+'; broadcastAddress[3]='+mac4+'; broadcastAddress[4]='+mac5+'; broadcastAddress[5]='+mac6+';\n'+	
		'esp_now_add_peer(broadcastAddress, ESP_NOW_ROLE_COMBO, 1, NULL, 0);\n';
	 else	 
		 Blockly.Arduino.setups_['setup_espnow_add_peer'+mac1+mac2] = '//Register peer to all nodes \n'+
		'broadcastAddress[0]='+mac1+'; broadcastAddress[1]='+mac2+'; broadcastAddress[2]='+mac3+'; broadcastAddress[3]='+mac4+'; broadcastAddress[4]='+mac5+'; broadcastAddress[5]='+mac6+';\n'+	
		'Add_peer(broadcastAddress);\n';
		 
    var code ='// Send message via ESP-NOW\n'+
    'broadcastAddress[0]='+mac1+'; broadcastAddress[1]='+mac2+'; broadcastAddress[2]='+mac3+'; broadcastAddress[3]='+mac4+'; broadcastAddress[4]='+mac5+'; broadcastAddress[5]='+mac6+';\n'+
    'esp_now_send(broadcastAddress, (uint8_t *) &OutputStruct, sizeof(OutputStruct));\n'+
	'delay(500);\n';
	    	
  return code;
};

Blockly.Blocks['espnow_paramText_refund'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_read_param_text)	
    this.setOutput(true, "String");
	this.setInputsInline(true);
    this.setTooltip('Refund the param text of the structure');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_paramText_refund'] = function(block) {
  
  var code = 'IncomingParamText';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['espnow_paramNode_refund'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_read_node)	
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('Refund the node ID of the structure');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_paramNode_refund'] = function(block) {
  
  var code = 'IncomingIdNode';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['espnow_paramInt_refund'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_read_param_int)	
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('Refund the integer param of the structure');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_paramInt_refund'] = function(block) {
  
  var code = 'IncomingParamInt';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['espnow_paramFloat_refund'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_read_param_float)	
    this.setOutput(true, "Number");
	this.setInputsInline(true);
    this.setTooltip('Refund the float param of the structure');
	this.setHelpUrl(''); 
  }
};

Blockly.Arduino['espnow_paramFloat_refund'] = function(block) {
  
  var code = 'IncomingParamFloat';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['espnow_paramInt_fill'] = {
 init: function() {
	this.setColour("#26C6F8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_fill_int)
	this.appendValueInput("ParamInt")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the Node param of the structure');
  }
};

Blockly.Arduino['espnow_paramInt_fill'] = function(block) {
 		
 var ParamInt = Blockly.Arduino.valueToCode(this, 'ParamInt', Blockly.Arduino.ORDER_ATOMIC); 	
 
 var code = 'OutputStruct.ParamInt='+ParamInt+';\n';
  
  return code;
};

Blockly.Blocks['espnow_paramFloat_fill'] = {
 init: function() {
	this.setColour("#26C6F8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_fill_float)
	this.appendValueInput("ParamFloat")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the Node param of the structure');
  }
};

Blockly.Arduino['espnow_paramFloat_fill'] = function(block) {
 		
 var ParamFloat = Blockly.Arduino.valueToCode(this, 'ParamFloat', Blockly.Arduino.ORDER_ATOMIC); 	
 
 var code = 'OutputStruct.ParamFloat='+ParamFloat+';\n';
  
  return code;
};


Blockly.Blocks['espnow_paramText_fill'] = {
 init: function() {
	this.setColour("#26C6F8");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/EspNow.png",50,20))
        .appendField(Blockly.Msg.ESPNOW_fill_text)
	this.appendValueInput("ParamText")
		.setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the Node param of the structure');
  }
};

Blockly.Arduino['espnow_paramText_fill'] = function(block) {
 		
 var ParamText = Blockly.Arduino.valueToCode(this, 'ParamText', Blockly.Arduino.ORDER_ATOMIC); 	
 
 var code = 'strcpy(OutputStruct.ParamText,'+ParamText+');\n';
  
  return code;
};