"use strict";

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

/* communication */


/*

Blockly.Blocks["soft_init"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init).appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1").appendField("/ Tx").appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.SSERIAL_tooltip)}
};

Blockly.Blocks["soft_init2"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init).appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1").appendField("/ Tx").appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setInputsInline(true);
		this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SSERIAL_tooltip)}
};

Blockly.Blocks["soft_read"]={init:function(){
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Read);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)}
};
Blockly.Blocks["soft_write"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#0060aa");
        this.appendValueInput("CONTENT", "String").appendField(Blockly.Msg.SSERIAL_Write);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)}
};
Blockly.Blocks["soft_available"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.SSERIAL_Available_tooltip)}
};
Blockly.Blocks["serial_init"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setInputsInline(false);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_Init).appendField(new Blockly.FieldDropdown(profile[card].serialPin), "pin");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setTooltip(Blockly.Msg.Serial_Init_tooltip)}
		};
Blockly.Blocks["serial_init2"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setInputsInline(false);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_Init).appendField(new Blockly.FieldDropdown(profile[card].serialPin), "pin");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
		this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		 this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.Serial_Init_tooltip)}
};
Blockly.Blocks["serial_read"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		if (card!="python"){this.appendDummyInput().appendField(Blockly.Msg.Serial_read);} else {this.appendDummyInput().appendField(Blockly.Msg.repl_read);}
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.Serial_read_tooltip)}
};

Blockly.Blocks["serial_available"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.SSERIAL_Available_tooltip)}
};

Blockly.Blocks["serial_line"]={init:function(){
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_saut);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.Serial_saut_tooltip)}
};
Blockly.Blocks["serial_tab"]={init:function(){
    this.setColour("#0060aa");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.appendDummyInput().appendField(Blockly.Msg.Serial_space);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.Serial_space_tooltip)}
};

Blockly.Blocks["serial_write"]={init:function(){
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("CONTENT", String).appendField(Blockly.Msg.Serial_Write);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.Serial_write_tooltip)}
};
Blockly.Blocks["serial_input"]={init:function(){
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("CONTENT", String).appendField("wait user command");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.Serial_write_tooltip)}
};

/*

/*	entrée-sortie */
Blockly.Blocks["toggle"]={init:function(){
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.tempo_helpurl);
        this.appendValueInput("PIN", "Number").setCheck("Number").appendField(Blockly.Msg.toggle);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.toggle_tooltip)}
};
Blockly.Blocks["inout_digital_write"]={init:function(){
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).setCheck("Number").appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1);
        this.setInputsInline(true);
        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP)}
};
Blockly.Blocks["inout_digital_read"]={init:function(){
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP)}
};
Blockly.Blocks["digital_read"]={init:function(){
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldCheckbox("FALSE"), "pullup").appendField(Blockly.Msg.in_pullup);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.in_pullup_tooltip)}
};
Blockly.Blocks["inout_analog_write"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1).appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "broche");
        this.appendValueInput("NUM", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT).setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP)}
};
Blockly.Blocks["inout_analog_write2"]={init:function(){
    this.appendValueInput("pin", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1).setCheck("Number");
    this.appendValueInput("NUM", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT).setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929f");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP)}
};
Blockly.Blocks["inout_analog_read"]={init:function(){
		var card=window.localStorage.card;
		var prog = window.localStorage.prog;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
        } else {
			this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT+" A0");
		}
		this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)}
};
Blockly.Blocks["inout_analog_read2"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
    this.setColour("#00929f");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    if (prog != "python") {
        this.appendValueInput("pin", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT).setCheck("Number");
    } else {
        this.appendValueInput("pin", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT).setCheck("Number");
    }
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)}
};
Blockly.Blocks["inout_attachInterrupt"]={init:function(){
		var card=window.localStorage.card;
		var prog = window.localStorage.prog;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.LKL_ATTACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.LKL_DROPDOWN), "mode");
        } else {
			this.appendDummyInput().appendField(Blockly.Msg.LKL_ATTACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.irq), "mode");
		}
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LKL_MODE).appendField(new Blockly.FieldDropdown(profile[card].interrupt), 'PIN');
        this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT)}
};
Blockly.Blocks["inout_detachInterrupt"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput().appendField(Blockly.Msg.LKL_DETACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(profile[card].interrupt), 'PIN')
		this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT)}
};
/*	structure  */
Blockly.Blocks["base_setup_loop"]={
	init:function(){
		var prog = window.localStorage.prog;
        this.setColour("#2d2d64");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.init);
		} else {
			this.appendDummyInput().appendField(Blockly.Msg.def);
		}
        this.appendStatementInput("DO");
        this.appendDummyInput().appendField(Blockly.Msg.loop);
        this.appendStatementInput("LOOP");
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.base_setup_loop);
        this.contextMenu = false},
    getArduinoLoopsInstance:function(){return true},
	onchange:function(){
		var blocks = [];
		for (var blockID in BlocklyDuino.workspace.blockDB_) {
			if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_setup_loop"||BlocklyDuino.workspace.blockDB_[blockID].type == "base_loop") {
				blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
			}
		}
		if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_loop"]={
	init:function(){
        this.setColour("#2d2d64");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.loop);
        this.appendStatementInput("LOOP");
		var prog = window.localStorage.prog;
		if (prog == "python")  this.setPreviousStatement(true, null);
        this.setTooltip(Blockly.Msg.loop_tooltip)},
	onchange:function(){
		var blocks = [];
		for (var blockID in BlocklyDuino.workspace.blockDB_) {
			if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_loop") {
				blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
			}
		}
		if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_define"]={
	init:function(){
		var prog = window.localStorage.prog;
		if (prog == "python")  this.setNextStatement(true, null);
        this.setColour("#2d2d64");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.def);
        this.appendStatementInput("DO");
        this.setTooltip(Blockly.Msg.def_tooltip)},
	onchange:function(){
		var blocks = [];
		for (var blockID in BlocklyDuino.workspace.blockDB_) {
			if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_define") {
				blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
			}
		}
		if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_code"]={init:function(){
	var prog = window.localStorage.prog;
	if (prog != "python") {
		this.appendDummyInput().appendField(new Blockly.FieldTextInput("code arduino;"), "TEXT");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldTextInput("code python"), "TEXT");
	}
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setColour("#2d2d64");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.code_tooltip)}
};
Blockly.Blocks["base_begin"]={
	init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.begin);
        this.setNextStatement(true, null);
        this.setColour("#2d2d64");
        this.setTooltip(Blockly.Msg.begin_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)},
	onchange:function(){
		var blocks = [];
		for (var blockID in BlocklyDuino.workspace.blockDB_) {
			if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_begin") {
				blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
			}
		}
		if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_end"]={
	init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#2d2d64");
        this.appendDummyInput().appendField(Blockly.Msg.END);
        this.setPreviousStatement(true, null);
        this.setTooltip(Blockly.Msg.END_tooltip)},
	onchange:function(){
		var blocks = [];
		for (var blockID in BlocklyDuino.workspace.blockDB_) {
			if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_end") {
				blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
			}
		}
		if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks['base_code_entree']={init:function(){
	var prog = window.localStorage.prog;
	if (prog != "python") {
		this.appendDummyInput().appendField(new Blockly.FieldTextInput("code arduino"), "TEXT");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldTextInput("code python"), "TEXT");
	}
	this.setOutput(true);
    this.setColour("#2d2d64");
	this.setHelpUrl(Blockly.Msg.HELPURL);this.setTooltip(Blockly.Msg.code_tooltip)}
};
/*	temps  */
Blockly.Blocks["millis"]={init:function(){
	var prog = window.localStorage.prog;
    this.setColour("#00929F");
    this.setHelpUrl(Blockly.Msg.HELPURL);
	if (prog != "python") {
		this.appendDummyInput().appendField(Blockly.Msg.millis1).appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite").appendField(Blockly.Msg.millis2);
	} else {
		this.appendDummyInput().appendField(Blockly.Msg.millis).appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
	}
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.millis_tooltip)}
};
Blockly.Blocks['tempo_sans_delay']={init:function() {
	var prog = window.localStorage.prog;
	this.appendValueInput("DELAY_TIME", "Number").setCheck("Number").appendField(Blockly.Msg.tempo1);
	if (prog != "python") {
		this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null)
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.time), "unite");
	}
	this.appendStatementInput("branche").appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DO);
	this.setInputsInline(true);
	this.setColour("#00929F");
	this.setTooltip(Blockly.Msg.tempo_tooltip);
	this.setHelpUrl(Blockly.Msg.tempo_helpurl)}
};
Blockly.Blocks["base_delay"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("DELAY_TIME", "Number").appendField(Blockly.Msg.ARDUINO_BASE_DELAY).setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP)}
};
Blockly.Blocks["inout_pulsein"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_PULSEIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_0_1), "STAT");
        this.appendValueInput("PIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_Pulsein)}
};
Blockly.Blocks["millis_start"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.millis_start).appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setColour("#00929F");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.millis_start_tooltip)}
};
/* bluetooth  */
Blockly.Blocks["bluetooth_init"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/bt.png', 48, 48, "*"))
			.appendField("Bluetooth");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
		this.appendValueInput("PIN1").setAlign(Blockly.ALIGN_RIGHT).appendField("Rx");
		this.appendValueInput("PIN2").setAlign(Blockly.ALIGN_RIGHT).appendField("Tx");
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.bluetooth_init_tooltip)}
};
Blockly.Blocks["bluetooth_a"]={init:function(){
        this.appendValueInput("data_s").setCheck("Number").appendField(Blockly.Msg.bluetooth2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0060aa");
        this.setTooltip(Blockly.Msg.bluetooth2_tooltip);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl)}
};
Blockly.Blocks["bluetooth_b"]={init:function(){
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl);
        this.setColour("#0060aa");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip(Blockly.Msg.bluetooth1_tooltip);
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["bluetooth_create_item"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_default"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_create_container"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
/*  wifi  */
Blockly.Blocks["esp8266_init"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/wifi.png', 48, 48, "*"))
        .appendField(Blockly.Msg.esp8266_1);
	this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.esp8266_10)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_9,function(option){this.sourceBlock_.updateShape1_(option)}), "staticdynamic");
	this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_7,function(option){this.sourceBlock_.updateShape2_(option)}), "clientserveur");
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)},
    updateShape2_:function(option){
		var inputExists = this.getInput("V0");
		if (inputExists) {
			this.removeInput("V0")
		}
		if (option=="serveur"){
		    this.appendValueInput("V0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_8)
		}
    },
    mutationToDom:function(){
        var container = document.createElement("mutation");
        container.setAttribute("clientserveur", this.getFieldValue("clientserveur"));
        container.setAttribute("staticdynamic", this.getFieldValue("staticdynamic"))
        return container
    },
    domToMutation:function(xmlElement){
        this.updateShape2_(xmlElement.getAttribute("clientserveur"));
        this.updateShape1_(xmlElement.getAttribute("staticdynamic"))
    },
	onchange:function(){
		if (this.getInput("D0")) this.setFieldValue(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".", 'adr')
	},
    updateShape1_:function(option){
		var inputExists = this.getInput("D0");
		if (inputExists) {
			this.removeInput("D0");
			this.removeInput("D1");
			this.removeInput("D2")
		}
		if (option=="static"){
		    this.appendDummyInput("D0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_4)
				.appendField(new Blockly.FieldTextInput("192"),"IPa").appendField(".")
				.appendField(new Blockly.FieldTextInput("168"),"IPb").appendField(".")
				.appendField(new Blockly.FieldTextInput("1"),"IPc").appendField(".")
				.appendField(new Blockly.FieldTextInput("77"),"IPd");
			this.appendDummyInput("D1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_6)
				.appendField(new Blockly.FieldTextInput("255"),"MASKa").appendField(".")
				.appendField(new Blockly.FieldTextInput("255"),"MASKb").appendField(".")
				.appendField(new Blockly.FieldTextInput("255"),"MASKc").appendField(".")
				.appendField(new Blockly.FieldTextInput("0"),"MASKd");
			this.appendDummyInput("D2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_5)
				.appendField(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".","adr")
				.appendField(new Blockly.FieldTextInput("1"),"GATEWAY");
		}
    }
};
Blockly.Blocks["esp8266_send"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_send_html);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_send_html_tooltip)}
};
Blockly.Blocks["esp8266_start"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_start);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_start_tooltip)}
};
Blockly.Blocks["esp8266_html"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField("HTML :").appendField(new Blockly.FieldTextInput("my page"),"HEAD");
	this.appendStatementInput("BODY");
    this.setTooltip(Blockly.Msg.esp8266_html_tooltip)}
};
Blockly.Blocks["esp8266_wait_server"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField("wait for a client request");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)}
};
Blockly.Blocks["esp8266_wait_client"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendValueInput("host").appendField("wait for a response from the server");
    this.appendValueInput("port").setAlign(Blockly.ALIGN_RIGHT).appendField("port");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)}
};
Blockly.Blocks["esp8266_request_find"]={
	init:function(){
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_request);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl("");
        this.setColour("#154360");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["esp8266_create_item"]));
        this.setTooltip(Blockly.Msg.esp8266_request_tooltip);
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ ) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("we find");
            this.appendStatementInput("DO" + i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "esp8266_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "esp8266_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).appendField("we find");
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["esp8266_create_item"]={init:function(){
    this.setColour("#154360");
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_request_container);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false}
};
Blockly.Blocks["esp8266_create_container"]={init:function(){
        this.setColour("#154360");
        this.appendDummyInput().appendField(Blockly.Msg.esp8266_request);
        this.appendStatementInput("STACK");
        this.setTooltip("");
        this.contextMenu = false
    }
};
/*  stockage  */
Blockly.Blocks['eeprom_write']={init:function(){
    this.appendValueInput("val")
        .appendField("store data");
	this.appendValueInput("adr")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("at the address");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#154360");
    this.setTooltip("allows writing data (8 bits or one byte) in EEPROM memory, at the specified address\nATmega328p & ATmega32u4 --> 1024 bytes\nATmega2560 --> 4096 bytes");
    this.setHelpUrl(Blockly.Msg.HELPURL);
  }
};
Blockly.Blocks["eeprom_read"]={init:function(){
        this.appendValueInput("adr")
			.setCheck("Number")
			.appendField("data stored at the address");
        this.setColour("#154360");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setOutput(true, "Number");
        this.setTooltip("returns the data stored at the specified address (8 bits or one byte)\nATmega328p & ATmega32u4 --> 1024 bytes\nATmega2560 --> 4096 bytes")}
};