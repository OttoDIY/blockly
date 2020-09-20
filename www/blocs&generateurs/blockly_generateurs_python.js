// controle
Blockly.Python.controls_switch=function(){return''};
Blockly.Python.controls_if=function(a) {
    var b=0, c="";
	do {
        var d=Blockly.Python.valueToCode(a, "IF"+b, Blockly.Python.ORDER_NONE);
		var e=Blockly.Python.statementToCode(a, "DO"+b);
		c+=(0==b?"if ":"elif ")+d+":\n"+e; ++b
    } while(a.getInput("IF"+b)); 
	a.getInput("ELSE")&&(e=Blockly.Python.statementToCode(a, "ELSE"), c+="else:\n"+e); 
	return c
};
Blockly.Python.logic_operation=function(block) {
    var mode = block.getFieldValue("OP");
	var operator = Blockly.Python.logic_operation.OPERATORS[mode];
    var order = operator == "&&" ? Blockly.Python.ORDER_LOGICAL_AND : Blockly.Python.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Python.valueToCode(block, "A", order);
    var argument1 = Blockly.Python.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Python.logic_operation.OPERATORS = {and: "and", or: "or"};
Blockly.Python.logic_negate=function(a) {
    return["not "+(Blockly.Python.valueToCode(a, "BOOL", Blockly.Python.ORDER_LOGICAL_NOT)), Blockly.Python.ORDER_LOGICAL_NOT]
};
Blockly.Python.logic_null=function(a) {
    return["None", Blockly.Python.ORDER_ATOMIC]
}; 
Blockly.Python.controls_repeat_ext=function(a) {
    var b=a.getField("TIMES")?String(parseInt(a.getFieldValue("TIMES"), 10)):Blockly.Python.valueToCode(a, "TIMES", Blockly.Python.ORDER_NONE); 
	b=Blockly.isNumber(b)?parseInt(b, 10):"int("+b+")"; 
	var c=Blockly.Python.statementToCode(a, "DO"); 
	c=Blockly.Python.addLoopTrap(c, a.id); 
	return"for "+Blockly.Python.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+c
};
Blockly.Python.controls_whileUntil=function(a) {
    var b="UNTIL"==a.getFieldValue("MODE"), c=Blockly.Python.valueToCode(a, "BOOL", b?Blockly.Python.ORDER_LOGICAL_NOT:Blockly.Python.ORDER_NONE), d=Blockly.Python.statementToCode(a, "DO"); 
	d=Blockly.Python.addLoopTrap(d, a.id); 
	b&&(c="not "+c); 
	return"while "+c+":\n"+d
};
Blockly.Python.controls_for=function(a) {
    var b=Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), c=Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE), d=Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE), e=Blockly.Python.valueToCode(a, "BY", Blockly.Python.ORDER_NONE), f=Blockly.Python.statementToCode(a, "DO"); f=Blockly.Python.addLoopTrap(f, a.id); 
	var to = parseInt(d)+1;
	return "for "+b+" in range("+c+", "+to+", "+e+"):\n"+f
	
}; 
Blockly.Python.controls_forEach=function(a) {
    var b=Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), c=Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_RELATIONAL), d=Blockly.Python.statementToCode(a, "DO"); 
	d=Blockly.Python.addLoopTrap(d, a.id); 
	return"for "+b+" in "+c+":\n"+d
};
Blockly.Python.controls_flow_statements=function(a) {
    switch(a.getFieldValue("FLOW")) {
        case "BREAK":return"break\n"; 
		case "CONTINUE":return"continue\n"
    } throw Error("Unknown flow statement.");
};
Blockly.Python.inout_onoff=function(block){
    var code=block.getFieldValue("BOOL") == "HIGH" ? "1" : "0";
    return [code, Blockly.Python.ORDER_ATOMIC]
}; 
// math
Blockly.Python.addReservedWords("math,random,Number");
Blockly.Python.inout_angle_maths=function(block) {
    return [block.getFieldValue("ANGLE"), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.intervalle=function(block) {
	var OPERATORS = {
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var value_inf = Blockly.Python.valueToCode(block, 'inf', Blockly.Python.ORDER_ATOMIC);
    var dropdown_comp_inf = block.getFieldValue('comp_inf');
    var value_valeur = Blockly.Python.valueToCode(block, 'valeur', Blockly.Python.ORDER_ATOMIC);
    var dropdown_comp_sup = OPERATORS[block.getFieldValue('comp_sup')];
    var value_sup = Blockly.Python.valueToCode(block, 'sup', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    if (dropdown_comp_inf == 'LT') code += '(' + value_valeur + ' > ' + value_inf + ')';
    if (dropdown_comp_inf == 'GT') code += '(' + value_valeur + ' < ' + value_inf + ' )';
    if (dropdown_comp_inf == 'GTE') code += '(' + value_valeur + ' <= ' + value_inf + ' )';
    if (dropdown_comp_inf == 'LTE') code += '(' + value_valeur + ' >= ' + value_inf + ' )';
    code += ' and ( ' + value_valeur + ' ' + dropdown_comp_sup + ' ' + value_sup + ')';
    return [code, Blockly.Python.ORDER_NONE]
};
Blockly.Python.math_number=function(a) {
    a=parseFloat(a.getFieldValue("NUM")); 
	if(Infinity==a) {
        a='float("inf")'; 
		var b=Blockly.Python.ORDER_FUNCTION_CALL
    } else-Infinity==a?(a='-float("inf")', b=Blockly.Python.ORDER_UNARY_SIGN):b=0>a?Blockly.Python.ORDER_UNARY_SIGN:Blockly.Python.ORDER_ATOMIC; 
	return[a, b]
};
Blockly.Python.math_arithmetic=function(a) {
    var b= {ADD:[" + ", Blockly.Python.ORDER_ADDITIVE], 
	MINUS:[" - ", Blockly.Python.ORDER_ADDITIVE],
	MULTIPLY:[" * ", Blockly.Python.ORDER_MULTIPLICATIVE], 
	DIVIDE:[" / ", Blockly.Python.ORDER_MULTIPLICATIVE], 
	POWER:[" ** ", Blockly.Python.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")], 
	c=b[0]; b=b[1]; 
	var d=Blockly.Python.valueToCode(a, "A", b); 
	a=Blockly.Python.valueToCode(a, "B", b); 
	return[d+c+a, b]
};
Blockly.Python.math_single=function(a) {
    var b=a.getFieldValue("OP"); 
	if("NEG"==b) {
        var c=Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_UNARY_SIGN);
		return["-"+c, Blockly.Python.ORDER_UNARY_SIGN]
    }
	Blockly.Python.imports_["math"]="import math"; 
	a="SIN"==b||"COS"==b||"TAN"==b?Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_MULTIPLICATIVE):Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_NONE); 
	switch(b) {
        case "ABS":c="math.fabs("+a+")"; 
			break; 
		case "ROOT":c="math.sqrt("+ a+")"; 
			break; 
		case "LN":c="math.log("+a+")"; 
			break; 
		case "LOG10":c="math.log10("+a+")"; 
			break; 
		case "EXP":c="math.exp("+a+")"; 
			break; 
		case "POW10":c="math.pow(10,"+a+")"; 
			break; 
		case "ROUND":c="round("+a+")"; 
			break; 
		case "ROUNDUP":c="math.ceil("+a+")"; 
			break; 
		case "ROUNDDOWN":c="math.floor("+a+")"; 
			break; 
		case "SIN":c="math.sin("+a+" / 180.0 * math.pi)"; 
			break; 
		case "COS":c="math.cos("+a+" / 180.0 * math.pi)"; 
			break; 
		case "TAN":c="math.tan("+a+" / 180.0 * math.pi)"
    }
	if(c)return[c, Blockly.Python.ORDER_FUNCTION_CALL]; 
	switch(b) {
        case "ASIN":c="math.asin("+a+") / math.pi * 180"; 
		break; 
		case "ACOS":c="math.acos("+a+") / math.pi * 180"; 
		break; 
		case "ATAN":c="math.atan("+a+") / math.pi * 180"; 
		break; 
		default:throw Error("Unknown math operator: "+b);
    }
    return[c, Blockly.Python.ORDER_MULTIPLICATIVE]
};
Blockly.Python.math_constant=function(a) {
    var b= {PI:["math.pi", Blockly.Python.ORDER_MEMBER], 
		E:["math.e", Blockly.Python.ORDER_MEMBER], 
		GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2", Blockly.Python.ORDER_MULTIPLICATIVE], 
		SQRT2:["math.sqrt(2)", Blockly.Python.ORDER_MEMBER], 
		SQRT1_2:["math.sqrt(1.0 / 2)", Blockly.Python.ORDER_MEMBER], 
		INFINITY:["float('inf')", Blockly.Python.ORDER_ATOMIC]
	};
	a=a.getFieldValue("CONSTANT"); 
	"INFINITY" !=a&&(Blockly.Python.imports_["math"]="import math"); 
	return b[a]
};
Blockly.Python.math_number_property=function(a) {
	var b=Blockly.Python.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Python.ORDER_MULTIPLICATIVE), c=a.getFieldValue("PROPERTY"); 
	switch(c) {
        case "EVEN":
			var d=b+" % 2 == 0"; 
			break; 
		case "ODD":
			d=b+" % 2 == 1"; 
			break; 
		case "WHOLE":
			d=b+" % 1 == 0"; 
			break; 
		case "POSITIVE":
			d=b+" > 0"; 
			break; 
		case "NEGATIVE":
			d=b+" < 0"; 
			break; 
		case "DIVISIBLE_BY":
			a=Blockly.Python.valueToCode(a, "DIVISOR", Blockly.Python.ORDER_MULTIPLICATIVE); 
			if( !a||"0"==a)return["False", Blockly.Python.ORDER_ATOMIC];
			d=b+" % "+a+" == 0"
			break;
		case "PRIME":
			Blockly.Python.imports_["math"]="import math";
			Blockly.Python.imports_["Number"]="from numbers import Number";
			Blockly.Python.userFunctions_["isPrime"] = "def isPrime(n):\n  if n==2 or n==3:\n    return True\n  if n<=1 or n%1 != 0 or n%2 == 0 or n%3 == 0:\n    return False\n  for x in range(6, int(math.sqrt(n)) + 2, 6):\n    if n%(x-1) == 0 or n%(x+1) == 0:\n      return False\n  return True\n";
			d="isPrime(" + b + ")";
    }
    return[d, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.math_round=Blockly.Python.math_single; 
Blockly.Python.math_trig=Blockly.Python.math_single;
Blockly.Python.math_modulo=function(a) {
    var b=Blockly.Python.valueToCode(a, "DIVIDEND", Blockly.Python.ORDER_MULTIPLICATIVE); 
	a=Blockly.Python.valueToCode(a, "DIVISOR", Blockly.Python.ORDER_MULTIPLICATIVE); 
	return[b+" % "+a, Blockly.Python.ORDER_MULTIPLICATIVE]
};
Blockly.Python.math_random_int=function(a) {
    Blockly.Python.imports_["random"]="import random"; 
	var b=Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE); 
	a=Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE); 
	return["random.randint("+b+", "+a+")", Blockly.Python.ORDER_FUNCTION_CALL]
}; 
Blockly.Python.logic_compare=function(a) {
    var b= {EQ:"==", NEQ:"!=", LT:"<", LTE:"<=", GT:">", GTE:">="}[a.getFieldValue("OP")], c=Blockly.Python.ORDER_RELATIONAL, d=Blockly.Python.valueToCode(a, "A", c); 
	a=Blockly.Python.valueToCode(a, "B", c); 
	return[d+" "+b+" "+a, c]
};
// texte
Blockly.Python.text=function(a) {
    return['"'+a.getFieldValue("TEXT")+'"', Blockly.Python.ORDER_ATOMIC]
}; 
Blockly.Python.text_char=function(a) {
    return[Blockly.Python.quote_(a.getFieldValue("TEXT")), Blockly.Python.ORDER_ATOMIC]
}; 
Blockly.Python.text.forceString_=function(a) {
    return Blockly.Python.text.forceString_.strRegExp.test(a)?a:"str("+a+")"
}; 
Blockly.Python.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/;
Blockly.Python.text_join=function(a) {
    switch(a.itemCount_) {
        case 0:	return["''", Blockly.Python.ORDER_ATOMIC]; 
		case 1: return a=Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE), a=Blockly.Python.text.forceString_(a), [a, Blockly.Python.ORDER_FUNCTION_CALL]; 
		case 2: 
			var b=Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE); 
			a=Blockly.Python.valueToCode(a, "ADD1", Blockly.Python.ORDER_NONE); 
			a=Blockly.Python.text.forceString_(b)+" + "+Blockly.Python.text.forceString_(a);
            return[a, Blockly.Python.ORDER_ADDITIVE]; 
		default: 
			b=[]; 
			for(var c=0; c<a.itemCount_; c++)b[c]=Blockly.Python.valueToCode(a, "ADD"+c, Blockly.Python.ORDER_NONE); 
			a=Blockly.Python.variableDB_.getDistinctName("x", Blockly.Variables.NAME_TYPE); 
			a="''.join([str("+a+") for "+a+" in ["+b.join(", ")+"]])"; 
			return[a, Blockly.Python.ORDER_FUNCTION_CALL]
    }
};
Blockly.Python.text_length=function(a) {
    return["len("+(Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE))+")", Blockly.Python.ORDER_FUNCTION_CALL]
};
 Blockly.Python.text_isEmpty=function(a) {
    return["not len("+(Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE)||"''")+")", Blockly.Python.ORDER_LOGICAL_NOT]
};
// variable
Blockly.Python.math_change=function(a) {
	var b=Blockly.Python.valueToCode(a, "DELTA", Blockly.Python.ORDER_ADDITIVE); 
	a=Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); 
	return a+" = "+a+" + "+b
}; 
Blockly.Python.variables_get=function(a) {
    return[Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.Python.ORDER_ATOMIC]
}; 
Blockly.Python.variables_set=function(a) {
    var b=Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE);
	return Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)+" = "+b+"\n"
};
Blockly.Python.variables_set_init=function(){return ''};
Blockly.Python.base_define_const=function(){return ''};
Blockly.Python.variables_const=function(){return ''};
// fonction
Blockly.Python.procedures_defreturn=function(block) {
    var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Python.statementToCode(block, 'STACK');
	var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Python.getPythonType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + block.arguments_[x];
	}
	var returnValue = Blockly.Python.valueToCode(block, 'RETURN', Blockly.Python.ORDER_NONE);
	if (returnValue) {
        var code = 'def ' + funcName + '(' + args.join(',') + '):\n' + branch + '  return '+ returnValue + '\n';
    } else {
		var code = 'def ' + funcName + '(' + args.join(',') + '):\n' + branch + '\n';
	}
    code = Blockly.Python.scrub_(block, code);
    Blockly.Python.userFunctions_[funcName] = code;
    return ""
}; 
Blockly.Python.procedures_defnoreturn=function(block) {
	var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Python.statementToCode(block, 'STACK');
	var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Python.getPythonType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + block.arguments_[x];
	}
    var code = 'def ' + funcName + '(' + args.join(',') + '):\n' + branch + '\n';
    code = Blockly.Python.scrub_(block, code);
    Blockly.Python.userFunctions_[funcName] = code;
    return ""
};
Blockly.Python.procedures_callreturn=function(a) {
    for(var b=Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c=[], d=0; d<a.arguments_.length; d++)c[d]=Blockly.Python.valueToCode(a, "ARG"+d, Blockly.Python.ORDER_NONE); 
	return[b+"("+c.join(", ")+")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.procedures_callnoreturn=function(a) {
    for(var b=Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c=[], d=0; d<a.arguments_.length; d++)c[d]=Blockly.Python.valueToCode(a, "ARG"+d, Blockly.Python.ORDER_NONE)||"None"; 
	return b+"("+c.join(", ")+")\n"
};
Blockly.Python.procedures_ifreturn=function(a) {
    return 'return ' + Blockly.Python.valueToCode(a, 'VALUE', Blockly.Python.ORDER_NONE) + '\n'
}; 
// liste
Blockly.Python.list_create=function(block){
    var etat_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var code = Blockly.Python.valueToCode(block, "list", Blockly.Python.ORDER_ATOMIC);
    return etat_var + ' = ' + code + '\n'
};
Blockly.Python.list_append=function(block){
    var etat_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var code = Blockly.Python.valueToCode(block, "value", Blockly.Python.ORDER_ATOMIC);
    return etat_var + '.append(' + code + ')\n'
};
Blockly.Python.list_size=function(block){
	return["len(" + Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE) + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.list_get=function(block){
    var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var indice = Blockly.Python.valueToCode(block, "index", Blockly.Python.ORDER_ATOMIC);
    return [variable + '[' + indice + ']', Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.list_set=function(block){
    var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var indice = Blockly.Python.valueToCode(block, "index", Blockly.Python.ORDER_ATOMIC);
	var valeur = Blockly.Python.valueToCode(block, "value", Blockly.Python.ORDER_ATOMIC);
    return variable + '[' + indice + '] = ' + valeur + '\n'
};
// tableau
Blockly.Python.creer_tableau=function(){return ''};
Blockly.Python.fixer_tableau=function(){return ''};
Blockly.Python.array_getIndex=function(){return ''};
Blockly.Python.array_getsize=function(){return ''};
Blockly.Python.array_create_with=function(block){
    var code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
        code[n] = Blockly.Python.valueToCode(block, 'ADD' + n, Blockly.Python.ORDER_COMMA);
    }
    code = '[' + code.join(',') + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};