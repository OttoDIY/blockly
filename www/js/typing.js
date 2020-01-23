// logic 
Blockly.Blocks.inout_onoff.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.controls_if.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
 Blockly.Blocks.controls_switch.getVars = function() {
	return [this.getFieldValue('SWVAR')];
};
Blockly.Blocks.logic_compare.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_operation.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_negate.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_null.getBlockType = function() {
	return Blockly.Types.NULL;
};
// loop 
Blockly.Blocks.controls_for.getVars = function() {
	return [this.getFieldValue('VAR')];
};
Blockly.Blocks.controls_repeat_ext.getBlockType = function() {
	return Blockly.Types.NUMBER;	
};
Blockly.Blocks.controls_whileUntil.getBlockType = function() {
	return Blockly.Types.BOOLEAN;	
};
Blockly.Blocks.controls_flow_statements.getVars = function() {
	return Blockly.Types.BOOLEAN;
};
// math 
Blockly.Blocks.math_number.getBlockType = function() {
   var numString = this.getFieldValue('NUM');
   return Blockly.Types.identifyNumber(numString);
};
Blockly.Blocks.inout_angle_maths.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_arithmetic.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.intervalle.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.math_single.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_trig.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_constant.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_number_property.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.math_round.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_modulo.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_int.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
// text 
Blockly.Blocks.text.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_char.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_join.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_length.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.text_isEmpty.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
// arduino_time 
Blockly.Blocks.millis.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.base_delay.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
// arduino_in 
Blockly.Blocks.digital_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_analog_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
// arduino_out 
Blockly.Blocks.inout_digital_write.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_analog_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
// DEL 
Blockly.Blocks.inout_buildin_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.blink.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.digital_write.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.bargraphe.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
// matrice 
Blockly.Blocks.matrice8x8_init.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.matrice8x8_symbole.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.matrice8x8_aff.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.matrice8x8_del.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
// arduino_serial 
Blockly.Blocks.serial_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.serial_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_line.getBlockType = function() {
	return Blockly.Types.TEXT;
};
// arduino_softserial 
Blockly.Blocks.soft_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.soft_read.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.soft_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.soft_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};