"use strict";

goog.require("Blockly.Arduino");

// controle
Blockly.Arduino['controls_switch']=function(block){
    var n = 0;
    var switchvar = Blockly.Arduino.variableDB_.getName(block.getFieldValue('SWVAR'), Blockly.Variables.NAME_TYPE);
    var argument = Blockly.Arduino.valueToCode(block, 'CASE' + n, Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    var code = 'switch (' + switchvar + ') {\n' + 'case ' + argument + ': \n' + branch + '  break;\n';
    for (n = 1; n <= block.casebreakCount_; n++) {
        argument = Blockly.Arduino.valueToCode(block, 'CASE' + n, Blockly.Arduino.ORDER_NONE);
        branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
        code += ' case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (block.defaultCount_) {
        branch = Blockly.Arduino.statementToCode(block, 'DEFAULT');
        code += ' default :\n' + branch + ' ';
    }
    code += '}\n'
    return code;
};
Blockly.Arduino["controls_for"]=function(block){
    var variable0 = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(block, "FROM", Blockly.Arduino.ORDER_ASSIGNMENT);
    var argument1 = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_ASSIGNMENT);
    var argument2 = Blockly.Arduino.valueToCode(block, "BY", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    return "for (" + variable0 + "=" + argument0 + " ; " + variable0 + "<=" + argument1 + " ; " + variable0 + "=" + variable0 + "+" + argument2 + ") {\n" + branch + "}\n"
};
Blockly.Arduino["controls_if"]=function(block){
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(block, "IF" + n, Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, "DO" + n);
    var code = "if (" + argument + ") {\n" + branch + "}";
    for (n = 1; n <= block.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(block, "IF" + n, Blockly.Arduino.ORDER_NONE);
        branch = Blockly.Arduino.statementToCode(block, "DO" + n);
        code += " else if (" + argument + ") {\n" + branch + "}"
    }
    if (block.elseCount_) {
        branch = Blockly.Arduino.statementToCode(block, "ELSE");
        code += " else {\n" + branch + "}"
    }
    return code + "\n"
};
Blockly.Arduino["controls_repeat_ext"]=function(block){
    var repeats = Blockly.Arduino.valueToCode(block, "TIMES", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var loopVar = Blockly.Arduino.variableDB_.getName("count", Blockly.Variables.NAME_TYPE);
    var code = "for (int " + loopVar + "=0 ; " + loopVar + "<" + repeats + " ; " + loopVar + "++) {\n" + branch + "}\n";
    return code
};
Blockly.Arduino["controls_whileUntil"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "BOOL", Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    if (block.getFieldValue("MODE") == "UNTIL") {
        if (!argument0.match(/^\w+$/)) argument0 = "(" + argument0 + ")";
        argument0 = "!" + argument0
    }
    return "while (" + argument0 + ") {\n" + branch + "}\n"
};
Blockly.Arduino["controls_forEach"]=function(block){
    var variable0 = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(block, "LIST", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code = "for (var " + variable0 + " in  " + argument0 + ") {\n" + branch + "}\n";
    return code
};
Blockly.Arduino["controls_flow_statements"]=function(block){
    switch (block.getFieldValue("FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
Blockly.Arduino["logic_operation"]=function(block){
    var mode = block.getFieldValue("OP");
	var operator = Blockly.Arduino.logic_operation.OPERATORS[mode];
    var order = operator == "&&" ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Arduino.logic_operation.OPERATORS = {and: "&", or: "|", xor: "^", shiftL: "<<", shiftR: ">>"};
Blockly.Arduino["logic_negate"]=function(block){
    var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
    var argument0 = Blockly.Arduino.valueToCode(block, "BOOL", order);
    var code = "!" + argument0;
    return [code, order]
};
Blockly.Arduino["logic_null"]=function(block){
    var code = "NULL";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_onoff"]=function(block){
    var code=block.getFieldValue("BOOL") == "HIGH" ? "HIGH" : "LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
// math
Blockly.Arduino["logic_compare"]=function(block){
    var mode = block.getFieldValue("OP");
    var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
    var order = operator == "==" || operator == "!=" ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Arduino.logic_compare.OPERATORS = {EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">="};
Blockly.Arduino['intervalle']=function(block){
    var OPERATORS = {
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var value_inf = Blockly.Arduino.valueToCode(block, 'inf', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_comp_inf = block.getFieldValue('comp_inf');
    var value_valeur = Blockly.Arduino.valueToCode(block, 'valeur', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_comp_sup = OPERATORS[block.getFieldValue('comp_sup')];
    var value_sup = Blockly.Arduino.valueToCode(block, 'sup', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    if (dropdown_comp_inf == 'LT') {
        code += '(' + value_valeur + ' > ' + value_inf + ')';
    }
    if (dropdown_comp_inf == 'GT') {
        code += '(' + value_valeur + ' < ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'GTE') {
        code += '(' + value_valeur + ' <= ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'LTE') {
        code += '(' + value_valeur + ' >= ' + value_inf + ' )';
    }
    code += ' && ( ' + value_valeur + ' ' + dropdown_comp_sup + ' ' + value_sup + ')';
    return [code, Blockly.Arduino.ORDER_NONE]
};
Blockly.Arduino["math_number"]=function(block){
    var code = window.parseFloat(block.getFieldValue("NUM"));
    var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, order]
};
Blockly.Arduino["math_arithmetic"]=function(block){
    var mode = block.getFieldValue("OP");
    var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code;
    if (!operator) {
        code = "pow(" + argument0 + ", " + argument1 + ")";
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    }
    code = argument0 + operator + argument1;
    return [code, order]
};
Blockly.Arduino.math_arithmetic.OPERATORS = {ADD: [" + ", Blockly.Arduino.ORDER_ADDITIVE],MINUS: [" - ", Blockly.Arduino.ORDER_ADDITIVE], MULTIPLY: [" * ", Blockly.Arduino.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", Blockly.Arduino.ORDER_MULTIPLICATIVE], POWER: [null, Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino["math_single"]=function(block){
    var operator = block.getFieldValue("OP");
    var code;
    var arg;
    if (operator == "NEG") {
        arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_UNARY_NEGATION);
        if (arg[0] == "-") arg = " " + arg;
        code = "-" + arg;
        return [code, Blockly.Arduino.ORDER_UNARY_NEGATION]
    }
    if (operator == "SIN" || operator == "COS" || operator == "TAN") arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_DIVISION);
    else arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_NONE);
    switch (operator) {
        case "ABS":
            code = "abs(" + arg + ")";
            break;
        case "ROOT":
            code = "sqrt(" + arg + ")";
            break;
        case "ROUND":
            code = "round(" + arg + ")";
            break;
        case "ROUNDUP":
            code = "ceil(" + arg + ")";
            break;
        case "ROUNDDOWN":
            code = "floor(" + arg + ")";
            break;
        case "SIN":
            code = "sin(" + arg + ")";
            break;
        case "COS":
            code = "cos(" + arg + ")";
            break;
        case "TAN":
            code = "tan(" + arg + ")";
            break;
        default:
            throw "Unknown math operator: " + operator;
    }
    if (code) return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
    return [code, Blockly.Arduino.ORDER_DIVISION]
};
Blockly.Arduino["math_constant"]=function(block){
    var CONSTANTS = {
        PI: ["PI", Blockly.Arduino.ORDER_MEMBER],
        E: ["E", Blockly.Arduino.ORDER_MEMBER],
        GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", Blockly.Arduino.ORDER_DIVISION],
        SQRT2: ["SQRT2", Blockly.Arduino.ORDER_MEMBER],
        SQRT1_2: ["SQRT1_2", Blockly.Arduino.ORDER_MEMBER],
        INFINITY: ["Infinity", Blockly.Arduino.ORDER_ATOMIC]
    };
    return CONSTANTS[block.getFieldValue("CONSTANT")]
};
Blockly.Arduino["math_number_property"]=function(block){
    var number_to_check = Blockly.Arduino.valueToCode(block, "NUMBER_TO_CHECK", Blockly.Arduino.ORDER_MODULUS);
    var dropdown_property = block.getFieldValue("PROPERTY");
    var code;
    if (dropdown_property == "PRIME") {
        var functionName = Blockly.Arduino.provideFunction_("math_isPrime", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||" + " n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]);
        code = functionName + "(" + number_to_check + ")";
        return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
    }
    switch (dropdown_property) {
        case "EVEN":
            code = number_to_check + " % 2 == 0";
            break;
        case "ODD":
            code = number_to_check + " % 2 == 1";
            break;
        case "WHOLE":
            code = number_to_check + " % 1 == 0";
            break;
        case "POSITIVE":
            code = number_to_check + " > 0";
            break;
        case "NEGATIVE":
            code = number_to_check + " < 0";
            break;
        case "DIVISIBLE_BY":
            var divisor = Blockly.Arduino.valueToCode(block, "DIVISOR", Blockly.Arduino.ORDER_MODULUS);
            code = number_to_check + " % " + divisor + " == 0";
            break
    }
    return [code, Blockly.Arduino.ORDER_EQUALITY]
};
Blockly.Arduino["math_round"] = Blockly.Arduino["math_single"];
Blockly.Arduino["math_trig"] = Blockly.Arduino["math_single"];
Blockly.Arduino["math_modulo"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "DIVIDEND", Blockly.Arduino.ORDER_MODULUS);
    var argument1 = Blockly.Arduino.valueToCode(block, "DIVISOR", Blockly.Arduino.ORDER_MODULUS);
    var code = argument0 + " % " + argument1;
    return [code, Blockly.Arduino.ORDER_MODULUS]
};
Blockly.Arduino["math_random_int"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "FROM", Blockly.Arduino.ORDER_COMMA);
    var arg = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_COMMA);
	var argument1 = parseInt(arg) + 1 ;
    var functionName = Blockly.Arduino.provideFunction_("random_int", ["long " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(int a,int b) {", "  if (a > b) {",  "    int c = a;", "    a = b;", "    b = c;", "  }", "  return random(a,b);", "}"]);
    Blockly.Arduino.setups_["randomseed"] = "randomSeed(analogRead(0));";
	var code = functionName + "(" + argument0 + ", " + argument1 + ")";
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
};
// texte
Blockly.Arduino['text_char']=function(block){
    var code = '\'' + block.getFieldValue('TEXT') + '\'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["text"]=function(block){
    var code = Blockly.Arduino.quote_(block.getFieldValue("TEXT"));
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["text_join"]=function(block){
    var code;
    if (block.itemCount_ == 0) return ['""', Blockly.Arduino.ORDER_ATOMIC];
    else if (block.itemCount_ == 1) {
        var argument0 = Blockly.Arduino.valueToCode(block, "ADD0", Blockly.Arduino.ORDER_UNARY_POSTFIX);
        code = "String(" + argument0 + ")";
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    } else {
        var argument;
        code = [];
        for (var n = 0; n < block.itemCount_; n++) {
            argument = Blockly.Arduino.valueToCode(block, "ADD" + n, Blockly.Arduino.ORDER_NONE);
            if (argument == "") code[n] = '""';
            else code[n] = "String(" + argument + ")"
        }
        code = code.join(" + ");
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    }
};
Blockly.Arduino["text_length"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var code = "String(" + argument0 + ").length()";
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
Blockly.Arduino["text_isEmpty"]=function(block){
    var func = [];
    func.push("boolean " + Blockly.Arduino.DEF_FUNC_NAME + "(String msg) {");
    func.push("  if (msg.length() == 0) {");
    func.push("    return true;");
    func.push("  } else {");
    func.push("    return false;");
    func.push("  }");
    func.push("}");
    var funcName = Blockly.Arduino.addFunction("isStringEmpty", func.join("\n"));
    var argument0 = Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    if (argument0 == "") argument0 = '""';
    else argument0 = "String(" + argument0 + ")";
    var code = funcName + "(" + argument0 + ")";
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
// variable
Blockly.Arduino["math_change"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "DELTA", Blockly.Arduino.ORDER_ADDITIVE);
    var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var code = varName + " = " + varName + " + " + argument0 + ";\n";
    return code
};
Blockly.Arduino['variables_get']=function(block){
    var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['variables_set']=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + ' = ' + argument0 + ';\n';
    return code;
};
Blockly.Arduino['variables_set_init']=function(block){
	var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
	Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + ' = ' + argument0 + ';';
	return "";
};
Blockly.Arduino["base_define_const"]=function(block){
    var value_text1 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value_text2 = Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.variables_[value_text1] = "#define " + value_text1 + " " + value_text2;
    return ""
};
Blockly.Arduino["variables_const"]=function(block){
  var argument0 = Blockly.Arduino.valueToCode(block, 'VAL_CONST', Blockly.Arduino.ORDER_ASSIGNMENT);
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
  Blockly.Arduino.variables_[varName] = 'const ' + typeBlock + ' ' + varName + ' = ' + argument0 + ';';
  return "";  
};
// fonction
Blockly.Arduino['procedures_defnoreturn'] = function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
	var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Arduino.getArduinoType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + block.arguments_[x];
	}
    var code = 'void ' + funcName + '(' + args.join(',') + ') {\n' + branch + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return "";
};
Blockly.Arduino['procedures_defreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    var returnType = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
    var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Arduino.getArduinoType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
	}
    var code = returnType + ' ' + funcName + '(' + args.join(',') + ') {\n' + branch + returnValue + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return '';
};
Blockly.Arduino['procedures_callreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';
    }
    var code = funcName + '(' + args.join(', ') + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};
Blockly.Arduino['procedures_callnoreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x,
            Blockly.Arduino.ORDER_NONE) || 'null';
    }
    var code = funcName + '(' + args.join(', ') + ');\n';
    return code;
};
Blockly.Arduino['procedures_ifreturn']=function(block){
    if (block.hasReturnValue_) {
        var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_NONE) || 'null';
        var code = '  return ' + value + ';\n';
    } else {
        var code = '  return;\n';
    }
    return code;
};
// tableau
Blockly.Arduino['creer_tableau']=function(block){
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
	var menu = block.getFieldValue("choix");
	var dimension = block.getFieldValue("dim");
	var l = "" ;
	var k = "" ;
	switch (menu) {
        case "c1":
            for (var i = 0; i < dimension; i++) {
				var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
				k += "[" + j + "]"
			}
			Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + k + ';';
			break;
        case "c2":
			k += "{" ;
			for (var i = 0; i < dimension; i++) {
				var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
				var nb = j.split(',');
				k += j + ",";
				l += "[" + nb.length + "]";
			}
			k=k.substr(0,k.length-1);
			k+="}";
			Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + l + '=' + k + ';';
			break;
		}
	return '';
};
Blockly.Arduino['fixer_tableau']=function(block){
    var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
	var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var dimension = block.getFieldValue("dim");
	for (var i = 0; i < dimension; i++) {
		var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
		code += "[" + j + "]"
	}
	code += '='+value_value+';\n';
    return code;
};
Blockly.Arduino["array_getIndex"]=function(block){
    var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var dimension = block.getFieldValue("dim");
	for (var i = 0; i < dimension; i++) {
		var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
		code += "[" + j + "]"
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino["array_getsize"]=function(block){
    var list = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'sizeof('+list+')/sizeof('+list+'[0])';
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino["array_create_with"]=function(block){
    var code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
        code[n] = Blockly.Arduino.valueToCode(block, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || 'null';
    }
    code = '{' + code.join(',') + '}';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};