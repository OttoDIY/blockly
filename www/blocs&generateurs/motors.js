"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
 
  //////////////
 /*  motor  */
//////////////
Blockly.Blocks["moteur_dc"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/motorDC.png', 48, 48, "*"))
		.appendField(Blockly.Msg.moteur).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"6"],[Blockly.Msg.left,"5"],[Blockly.Msg.LetR,"11"]]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.direction).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs040);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=173")}
};
Blockly.Arduino["moteur_dc"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) + 5;
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
	if (dropdown_moteur=="11") {
		Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_6"]="pinMode(6, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_10"]="pinMode(10, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, OUTPUT);";
		return "analogWrite(5," + value_vitesse + ");\ndigitalWrite(10," + dropdown_etat + ");\nanalogWrite(6," + value_vitesse + ");\ndigitalWrite(11," + dropdown_etat + ");\n"
	}
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Python["moteur_dc"]=function(){return ""};
//////////////
Blockly.Blocks["moteur_dc_stop"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/motorDC.png', 48, 48, "*"))   
    .appendField(Blockly.Msg.moteurstop).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"6"],[Blockly.Msg.left,"5"],[Blockly.Msg.LetR,"11"]]), "MOTEUR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs040stop);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=173")}
};
Blockly.Arduino["moteur_dc_stop"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) + 5;
	if (dropdown_moteur=="11") {
		Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_6"]="pinMode(6, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_10"]="pinMode(10, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, OUTPUT);";
		return "analogWrite(5,0);\ndigitalWrite(10,HIGH);\nanalogWrite(6,0);\ndigitalWrite(11,HIGH);\n"
	}
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + ",0);\ndigitalWrite(" + dropdown_mot + ",HIGH);\n"
};
Blockly.Python["moteur_dc_stop"]=function(){return ""};
//////////////
Blockly.Blocks["dcmotor_v1"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
            ["M1", "1"],
            ["M2", "2"],
            ["M3", "3"],
            ["M4", "4"]
        ]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION).appendField(new Blockly.FieldDropdown([
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"],
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"],
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP, "RELEASE"]
        ]), "ETAT");
        this.appendValueInput("Vitesse").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip("");
        this.setHelpUrl("https://www.adafruit.com/products/81")}
};
Blockly.Arduino["dcmotor_v1"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.includes_["AFMotor.h"]="#include <AFMotor.h>";
    Blockly.Arduino.definitions_["AF_DCMotor" + dropdown_moteur]="AF_DCMotor motor_dc_" + dropdown_moteur + "(" + dropdown_moteur + ", MOTOR12_2KHZ);";
    return "motor_dc_" + dropdown_moteur + ".setSpeed(" + value_vitesse + ");\nmotor_dc_" + dropdown_moteur + ".run(" + dropdown_etat + ");\n"
};
Blockly.Python["dcmotor_v1"]=function(){return ""};
//////////////
Blockly.Blocks["moteur_action"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/L293D.png', 48, 48, "*"))
    	.appendField(new Blockly.FieldDropdown(Blockly.Msg.sens), "menu").appendField(Blockly.Msg.vitesse);
        this.setInputsInline(false);
        this.setColour("#2d2dd1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.mot_tooltip);
        this.setHelpUrl("http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=37")}
};
Blockly.Arduino["moteur_action"]=function(block){
    var dropdown_menu=block.getFieldValue("menu");
    var value_speed=Blockly.Arduino.valueToCode(block, "speed");
    Blockly.Arduino.includes_["AFMotor.h"]="#include <AFMotor.h>";
    Blockly.Arduino.definitions_["AF_DCMotor_1"]="AF_DCMotor motor_dc_1(1, MOTOR12_2KHZ);";
    Blockly.Arduino.definitions_["AF_DCMotor_2"]="AF_DCMotor motor_dc_2(2, MOTOR12_2KHZ);";
    switch (dropdown_menu) {
        case "a":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break;
        case "d":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(BACKWARD);\n";
            break;
        case "g":
            code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(BACKWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break
    }
    return code
};
Blockly.Python["moteur_action"]=function(block){
    var dropdown_menu=block.getFieldValue("menu");
    var value_speed=Blockly.Arduino.valueToCode(block, "speed");
    Blockly.Python.imports_["pwm"]="import";
    Blockly.Python.definitions_["motor_1"]="AF_DCMotor motor_dc_1(1, MOTOR12_2KHZ);";
    Blockly.Python.definitions_["motor_2"]="AF_DCMotor motor_dc_2(2, MOTOR12_2KHZ);";
    switch (dropdown_menu) {
        case "a":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break;
        case "d":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(BACKWARD);\n";
            break;
        case "g":
            code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(BACKWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break
    }
    return code
};
//////////////
Blockly.Blocks["moteur_stop"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/L293D.png', 48, 48, "*"))
    	.appendField(Blockly.Msg.mot_stop);
        this.setColour("#2d2dd1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.mot_stop_tooltip);
        this.setHelpUrl("http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=37")}
};
Blockly.Arduino["moteur_stop"]=function(block){
    return "motor_dc_1.run(RELEASE);\nmotor_dc_2.run(RELEASE);\n"
};
Blockly.Python["moteur_stop"]=function(block){
    return "motor_dc_1.run(RELEASE);\nmotor_dc_2.run(RELEASE);\n"
};
//////////////
Blockly.Blocks["dagu_rs027"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/motorDC.png', 48, 48, "*"))
        .appendField(Blockly.Msg.moteur).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"10"],[Blockly.Msg.left,"9"]]), "MOTEUR");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.direction).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs027);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=142")}
};
Blockly.Arduino["dagu_rs027"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) - 2;
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Python["dagu_rs027"]=function(){return ""};
//////////////
Blockly.Blocks["moteur3v"]={init:function(){
		var card=window.localStorage.card;
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/motorDC.png', 48, 48, "*"))	
        .appendField(Blockly.Msg.moteur+Blockly.Msg.pin).appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "pin");
        this.appendValueInput('speed').setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip(Blockly.Msg.moteur_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino["moteur3v"]=function(block){
    var dropdown_pin=block.getFieldValue("pin");
    var value_num=Blockly.Arduino.valueToCode(block, "speed", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
};
Blockly.Python["moteur3v"]=function(){return ""};
//////////////
Blockly.Blocks["m_pap"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/motorstep.png', 48, 48, "*"))
    .appendField(Blockly.Msg.m_pap);
    this.appendValueInput("pas", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.m_pap_step);
    this.appendValueInput("vit", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
    this.appendValueInput("ph1", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 1");
    this.appendValueInput("ph2", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 2");
    this.appendValueInput("ph3", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 3");
    this.appendValueInput("ph4", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 4");
    this.setColour("#2d2dd1");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.m_pap_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL);}
};
Blockly.Arduino["m_pap"]=function(block){
    var vitesse=Blockly.Arduino.valueToCode(block, "vit", Blockly.Arduino.ORDER_ASSIGNMENT);
    var nb_pas=Blockly.Arduino.valueToCode(block, "pas", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase1=Blockly.Arduino.valueToCode(block, "ph1", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase2=Blockly.Arduino.valueToCode(block, "ph2", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase3=Blockly.Arduino.valueToCode(block, "ph3", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase4=Blockly.Arduino.valueToCode(block, "ph4", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["stepper"]="#include <Stepper.h>";
    Blockly.Arduino.definitions_["stepper"]="Stepper moteurPAP(" + nb_pas + "," + phase1 + "," + phase2 + "," + phase3 + "," + phase4 + ");";
    Blockly.Arduino.setups_["stepper"]="moteurPAP.setSpeed("+vitesse+");";
    return ''
};
Blockly.Python["m_pap"]=function(block){
    var vitesse=Blockly.Python.valueToCode(block, "vit", Blockly.Python.ORDER_ASSIGNMENT);
    var nb_pas=Blockly.Python.valueToCode(block, "pas", Blockly.Python.ORDER_ASSIGNMENT);
    var phase1=Blockly.Python.valueToCode(block, "ph1", Blockly.Python.ORDER_ASSIGNMENT);
    var phase2=Blockly.Python.valueToCode(block, "ph2", Blockly.Python.ORDER_ASSIGNMENT);
    var phase3=Blockly.Python.valueToCode(block, "ph3", Blockly.Python.ORDER_ASSIGNMENT);
    var phase4=Blockly.Python.valueToCode(block, "ph4", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.imports_["stepper"]="import ";
    Blockly.Python.definitions_["stepper"]="Stepper moteurPAP(" + nb_pas + "," + phase1 + "," + phase2 + "," + phase3 + "," + phase4 + ");";
    Blockly.Python.setups_["stepper"]="moteurPAP.setSpeed("+vitesse+");";
    return ''
};
//////////////
Blockly.Blocks["m_pap_step"]={init:function(){
        this.appendValueInput("step", "Number").appendField(Blockly.Msg.m_pap_step1);
		this.appendDummyInput().appendField(Blockly.Msg.m_pap_step);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setTooltip(Blockly.Msg.m_pap_step_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino['m_pap_step'] = function(block) {
	var m_step = Blockly.Arduino.valueToCode(block, 'step', Blockly.Arduino.ORDER_ASSIGNMENT);
	return 'moteurPAP.step('+m_step+');\n';
};
Blockly.Python['m_pap_step'] = function(block) {
	var m_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ASSIGNMENT);
	return 'moteurPAP.step('+m_step+');\n';
};
  /////////////
 /*  servo  */
/////////////
Blockly.Blocks["servo_move"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/servo.png', 48, 48, "*")).appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1);
        this.appendValueInput("PIN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
        this.appendValueInput("DEGREE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP)}
};
Blockly.Arduino["servo_move"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_degree=Blockly.Arduino.valueToCode(block, "DEGREE", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_["define_servo"]="#include <Servo.h>";
    Blockly.Arduino.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    Blockly.Arduino.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
    return "servo_" + value_pin + ".write(" + value_degree + ");\n"
};
Blockly.Python["servo_move"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_degree=Blockly.Python.valueToCode(block, "DEGREE", Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
	Blockly.Python.definitions_["pin_"+value_pin]="servo_"+value_pin+" = PWM(Pin("+value_pin+"), freq=50, duty 75)";
    return "servo_" + value_pin + ".duty(30+(" + value_degree + "/2))\n"
};

Blockly.Blocks["servo_read_degrees"]= {
    init: function() {
      this.appendDummyInput() .appendField(new Blockly.FieldImage('media/servo.png', 48, 48, "*")) .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE) ;
      this.appendValueInput("PIN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
      this.setInputsInline(true);
      this.setOutput(true, 'Number');
      this.setColour("#2d2dd1");
      this.setHelpUrl(Blockly.Msg.HELPURL);
      this.setTooltip(Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP);
    }
};
Blockly.Arduino.servo_read_degrees = function() {
    var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["define_servo"]="#include <Servo.h>";
	Blockly.Arduino.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    var code = "servo_" + value_pin +  '.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//////////////
Blockly.Blocks["servo_rot_continue_param"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/servo360.png', 48, 48, "*")).appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT) .appendField(Blockly.Msg.direction);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.AV_AR), "ETAT");
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).setCheck("Number").appendField(Blockly.Msg.pin);
        this.appendValueInput("SPEED", "Null").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(Blockly.Msg.values);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#2d2dd1");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP)}
};
Blockly.Arduino["servo_rot_continue_param"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var degree=Blockly.Arduino.valueToCode(block, "SPEED", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_etat=block.getFieldValue("ETAT");
    if (dropdown_etat == "FORWARD") var value_degree=90 + parseInt(degree);
    if (dropdown_etat == "BACKWARD") var value_degree=90 - parseInt(degree);
    Blockly.Arduino.includes_["define_servo"]="#include <Servo.h>";
    Blockly.Arduino.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    Blockly.Arduino.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
    return "servo_" + value_pin + ".write(" + value_degree + ");\n"
};
Blockly.Python["servo_rot_continue_param"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var degree=Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_ATOMIC);
    var dropdown_etat=block.getFieldValue("ETAT");
    if (dropdown_etat == "FORWARD") var value_degree=90 + parseInt(degree);
    if (dropdown_etat == "BACKWARD") var value_degree=90 - parseInt(degree);
    Blockly.Python.includes_["define_servo"]="#include <Servo.h>";
    Blockly.Python.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    Blockly.Python.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
    return "servo_" + value_pin + ".write(" + value_degree + ");\n"
};
Blockly.Blocks["servo_PWM"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/pc9685.png', 48, 48, "*")).appendField(new Blockly.FieldImage('media/servo.png', 48, 48, "*")).appendField("PCA9685 "+ Blockly.Msg.pin);;
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"],["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"],["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]]), "PIN");
    this.appendValueInput("DEGREE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2d2dd1");
    this.setHelpUrl("PCA9685");
    this.setTooltip("https://learn.adafruit.com/16-channel-pwm-servo-driver")}
};
Blockly.Arduino["servo_PWM"]=function(block){
    var pin = block.getFieldValue('PIN');
    var degree =Blockly.Arduino.valueToCode(block, "DEGREE", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_["servo_PMW"]='#include <Wire.h>\n'
    +'#include <Adafruit_PWMServoDriver.h>\n'
    +'Adafruit_PWMServoDriver servos = Adafruit_PWMServoDriver(0x40);\n';
    Blockly.Arduino.definitions_["servo_PWM"]='unsigned int pos0=172; \n'
    +'unsigned int pos180=565; \n';
    Blockly.Arduino.userFunctions_["servo_PWM"] = 'void setServo(uint8_t n_servo, int angulo) {int duty; duty=map(angulo,0,180,pos0, pos180); servos.setPWM(n_servo, 0, duty); }';
    Blockly.Arduino.setups_["servo_PWM"]='servos.begin(); \n'
    +'servos.setPWMFreq(60);\n';
    var code = ' setServo('+pin+','+degree+');';
    return code
};