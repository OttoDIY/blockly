'use strict';

goog.provide('Blockly.Python');
goog.require('Blockly.Generator');

Blockly.Python=new Blockly.Generator("Python");
Blockly.Python.addReservedWords("and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern");
Blockly.Python.ORDER_ATOMIC=0;
Blockly.Python.ORDER_COLLECTION=1;
Blockly.Python.ORDER_STRING_CONVERSION=1;
Blockly.Python.ORDER_MEMBER=2;
Blockly.Python.ORDER_FUNCTION_CALL=2;
Blockly.Python.ORDER_EXPONENTIATION=3;
Blockly.Python.ORDER_UNARY_SIGN=4;
Blockly.Python.ORDER_BITWISE_NOT=4;
Blockly.Python.ORDER_MULTIPLICATIVE=5;
Blockly.Python.ORDER_ADDITIVE=6;
Blockly.Python.ORDER_BITWISE_SHIFT=7;
Blockly.Python.ORDER_BITWISE_AND=8;
Blockly.Python.ORDER_BITWISE_XOR=9;
Blockly.Python.ORDER_BITWISE_OR=10;
Blockly.Python.ORDER_RELATIONAL=11;
Blockly.Python.ORDER_LOGICAL_NOT=12;
Blockly.Python.ORDER_LOGICAL_AND=13;
Blockly.Python.ORDER_LOGICAL_OR=14;
Blockly.Python.ORDER_CONDITIONAL=15;
Blockly.Python.ORDER_LAMBDA=16;
Blockly.Python.ORDER_NONE=99;
Blockly.Python.PASS="  pass\n";

Blockly.Python.init=function(a) {
	Blockly.Python.imports_=Object.create(null);
    Blockly.Python.definitions_=Object.create(null);
    Blockly.Python.userFunctions_=Object.create(null);
    Blockly.Python.variableDB_ ? Blockly.Python.variableDB_.reset() : Blockly.Python.variableDB_ = new Blockly.Names(Blockly.Python.RESERVED_WORDS_)
};
Blockly.Python.finish=function(a) {
    var imports=[], froms=[], definitions=[], functions=[], card=window.localStorage.card;
    for (var name in Blockly.Python.imports_) {
		var e=Blockly.Python.imports_[name];
        e.match(/^(from\s+\S+\s+)?import\s+\S+/) ? imports.push(e) : froms.push(e)
    }

	if ( window.profile[card].cpu == "cortexM0" ) imports.push("from microbit import *");

	// newer code just uses definitions for imports as well.
	for (var name in Blockly.Python.definitions_) {
		var def = Blockly.Python.definitions_[name];
		if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
			imports.push(def);
		} else {
			definitions.push(def);
		}
	}
	if (imports.length) {
		imports.push('\n');
	}
	if (definitions.length) {
		definitions.push('\n');
	}
	for (var name in Blockly.Python.userFunctions_) {
		functions.push(Blockly.Python.userFunctions_[name]);
	}
	if (functions.length) {
		functions.push('\n');
	}
	delete Blockly.Python.imports_;
	delete Blockly.Python.definitions_;
	delete Blockly.Python.userFunctions_;
    return (imports.join("\n") + "\n\n" + froms.join("\n\n") + "\n\n" + definitions.join("\n") + "\n\n" + functions.join('\n') + "\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n") + a
};
Blockly.Python.scrubNakedValue=function(a) {
    return a+"\n"
};
Blockly.Python.quote_=function(a) {
    a=a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\%/g, "\\%").replace(/'/g,"\\'");
	return"'"+a+"'"
};
Blockly.Python.scrub_=function(a, b) {
    var c="";
	if( !a.outputConnection|| !a.outputConnection.targetConnection) {
        var d=a.getCommentText(); 
		d&&(c+=Blockly.Python.prefixLines(d, "# ")+"\n"); 
		for(var e=0; e<a.inputList.length; e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Python.allNestedComments(d))&&(c+=Blockly.Python.prefixLines(d, "# "))
    }
    e=a.nextConnection&&a.nextConnection.targetBlock(); 
	e=Blockly.Python.blockToCode(e);
	return c+b+e
};