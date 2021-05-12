"use strict";

goog.require("Blockly.Blocks");
goog.provide("Blockly.Blocks.controls");
goog.provide("Blockly.Blocks.procedures");
goog.provide("Blockly.Blocks.math");
goog.provide("Blockly.Blocks.variables");
goog.provide("Blockly.Blocks.texts");
goog.provide("Blockly.Blocks.tab");

Blockly.Blocks.controls.HUE = "#ffb400";
Blockly.Blocks.math.HUE = "#008000";
Blockly.Blocks.procedures.HUE = "#FF0000";
Blockly.Blocks.texts.HUE = "#FD6C9E";
Blockly.Blocks.variables.HUE = "#ff5700";
Blockly.Blocks.tab.HUE = "#ff5700";

// controle
Blockly.Blocks["controls_if"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            else if (thisBlock.elseifCount_ && thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            return ""
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) return null;
        var container = document.createElement("mutation");
        if (this.elseifCount_) container.setAttribute("elseif", this.elseifCount_);
        if (this.elseCount_) container.setAttribute("else", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute("elseif"), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute("else"), 10) || 0;
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput("IF" + i).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
            this.appendStatementInput("DO" + i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.elseCount_) this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "controls_if_if");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock( "controls_if_elseif");
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock( "controls_if_else");
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.elseCount_) this.removeInput("ELSE");
        this.elseCount_ = 0;
        for (var i = this.elseifCount_; i > 0; i--) {
            this.removeInput("IF" + i);
            this.removeInput("DO" + i)
        }
        this.elseifCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "controls_if_elseif":
                    this.elseifCount_++;
                    var ifInput = this.appendValueInput("IF" + this.elseifCount_).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
                    var doInput = this.appendStatementInput("DO" + this.elseifCount_);
                    doInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "controls_if_else":
                    this.elseCount_++;
                    var elseInput = this.appendStatementInput("ELSE");
                    elseInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) elseInput.connection.connect(clauseBlock.statementConnection_);
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
                case "controls_if_elseif":
                    var inputIf = this.getInput("IF" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "controls_if_else":
                    var inputDo = this.getInput("ELSE");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["controls_if_if"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_if_elseif"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_if_else"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_switch"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "SWVAR");
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        this.contextMenuType_ = "variables_set";
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["controls_case_break", "controls_case_default"]));
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.casebreakCount_ && !thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1;
            else if (!thisBlock.casebreakCount_ && thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2;
            else if (thisBlock.casebreakCount_ && !thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3;
            else if (thisBlock.casebreakCount_ && thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4;
            return ""
        });
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    getVarType: function(varName) {
        return Blockly.Types.NUMBER
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("SWVAR"))) this.setFieldValue(newName, "SWVAR")
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
        if (this.defaultCount_) this.appendStatementInput("DEFAULT")
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "controls_switch_var");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "controls_case_break");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "controls_case_default");
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
                case "controls_case_break":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).setCheck("Number").appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "controls_case_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    defaultInput;
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
                case "controls_case_break":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "controls_case_default":
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
Blockly.Blocks["controls_switch_var"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_case_break"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_case_default"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_repeat_ext"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_REPEAT_TITLE,
            args0: [{
                type: "input_value",
                name: "TIMES",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            tooltip: Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO").appendField("")
    }
};
Blockly.Blocks["controls_whileUntil"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS), "MODE");
        this.appendStatementInput("DO").appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("MODE");
            var TOOLTIPS = {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op]
        })
    }
};
Blockly.Blocks["controls_flow_statements"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "FLOW");
        this.setPreviousStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("FLOW");
            var TOOLTIPS = {
                BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
                CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
            };
            return TOOLTIPS[op]
        })
    },
    onchange: function() {
        var legal = false;
        var block = this;
        do {
            if (block.type == "controls_repeat" || block.type == "controls_repeat_ext" || block.type == "controls_forEach" || block.type == "controls_for" || block.type == "controls_whileUntil" || block.type == "base_loop") {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) this.setWarningText(null);
        else this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    }
};
Blockly.Blocks["inout_onoff"] = {
    init: function() {
        this.setColour("#ffb400");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "BOOL");
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
};
Blockly.Blocks["logic_operation"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(Blockly.Msg.LOGIC_OPERATOR), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                "and": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                "xor": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor,
                "shiftL": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL,
                "shiftR": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR,
                "or": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            };
            return TOOLTIPS[op]
        })
    }
};
Blockly.Blocks["controls_for"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_FOR_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "FROM",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "BY",
                check: "Number",
                align: "RIGHT"
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    customContextMenu: function(options) {
        if (!this.isCollapsed()) {
            var option = {
                enabled: true
            };
            var name = this.getFieldValue("VAR");
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
            var xmlField = goog.dom.createDom("field", null, name);
            xmlField.setAttribute("name", "VAR");
            var xmlBlock = goog.dom.createDom("block", null, xmlField);
            xmlBlock.setAttribute("type", "variables_get");
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option)
        }
    },
    getVarType: function(varName) {
        return Blockly.Types.NUMBER
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};
Blockly.Blocks["logic_negate"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.LOGIC_NEGATE_TITLE,
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }],
            output: "Boolean",
            colour: Blockly.Blocks.controls.HUE,
            tooltip: Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["logic_null"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.LOGIC_NULL,
            output: null,
            colour: Blockly.Blocks.controls.HUE,
            tooltip: Blockly.Msg.LOGIC_NULL_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["controls_forEach"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_FOREACH_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};
// variable
Blockly.Blocks["math_change"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_CHANGE_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: Blockly.Msg.MATH_CHANGE_TITLE_ITEM
            }, {
                type: "input_value",
                name: "DELTA",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.variables.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, l) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(l, "VAR")
    },
    customContextMenu: function(e) {
        if (!this.isCollapsed()) {
            var l = {
                    enabled: !0
                },
                t = this.getFieldValue("VAR");
            l.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", t);
            var a = goog.dom.createDom("field", null, t);
            a.setAttribute("name", "VAR");
            var o = goog.dom.createDom("block", null, a);
            o.setAttribute("type", "variables_get"), l.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(l)
        }
    },
    getVarType: function(e) {
        return Blockly.Types.NUMBER
    }
};
Blockly.Blocks["variables_get"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: "variables_set",
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        var name = this.getFieldValue("VAR");
        option.text = this.contextMenuMsg_.replace("%1", name);
        var xmlField = goog.dom.createDom("field", null, name);
        xmlField.setAttribute("name", "VAR");
        var xmlBlock = goog.dom.createDom("block", null, xmlField);
        xmlBlock.setAttribute("type", this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option)
    },
    getBlockType: function() {
        return [Blockly.Types.UNDEF, this.getFieldValue("VAR")]
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["variables_set"] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.VARIABLES_SET)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg._AT);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks['variables_set_init'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.var_set_init)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.VARIABLES_AS)
            .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE')
            .appendField(Blockly.Msg._AT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.var_set_init_tooltip);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["base_define_const"] = {
    init: function() {
        this.appendValueInput("TEXT2")
            .appendField(Blockly.Msg.base_def_const)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.base_define_const);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.base_define_const_tooltip);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks['variables_const'] = {
    init: function() {
        this.appendValueInput("VAL_CONST")
            .appendField(Blockly.Msg.ARDUINO_VAR_CONST)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.VARIABLES_AS)
            .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE')
            .appendField(Blockly.Msg._AT);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_VAR_CONST_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
// texte
Blockly.Blocks["text"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHw647ilMAAAAJmlUWHRDb21tZW50AAAAAABDcmVhdGVkIHdpdGggR0lNUCBvbiBhIE1hY5XkX1sAAAJ7SURBVEjHtZZNSFRRGIbfe/E6FjU1Vs6kwxBkiRr9EBG6MKyEWkRQFrYIoY2LoJUrFwVBP9SiIFq0NKIgKKJNkCTCBDYLhQLLKLCgBg0SorI/4W0xc++cc+aenxa9q3vOfXj5zved75wDWMQUr/EyfTiJSzjE+6yzg/s4S5Lc6WTbwWmS5EEz1sjbDDXC5Q4rCzXJBj3YS1knjLa7OSPRF+OxJIcV2yK7taYJnqWqY3FgE8cV7AxXGFIwotBXuCYOXM/nElZguyEFGSWIKXbGgxvLdQ11krX/YHueS+PBnBJtl7Fgq5iX6F4dmJSyVeRmo22C9yTbbj16QbLdZtm3A5Jtjx7slMA9FtuWckeW1KcHkxwVwHMWWzkNdwwFZr8ATjJjMd4rJa3ZVN9x1+YFuIyPBHrIhO4XwLfMWYy3SNVoi6d8gD4OCzMv8clyOu4SvsfwUWuMNLYKM0+9n+ajHOLWmsV3vTEQCDOvLPHWY4MwynuL8VgNgCzEHrvBowBqAUxjFIWq+D38EkbX2VGm3+MJ8t6CuLgu6lXkIfm+41rlPJHVL+xpozFJ3hUvRzZUndayHjNVybFZR3BcGAVIGekeDIYxbJL6Pk5TbIoizhpTEe1tH8BnzFlibsO6Si6QsK5xe8nYd0CjiDGPGSu9smT8xQFNR19/sODyePEB7xseWLmv0TZexE1HYwBj1iyL/yfwwkInQuN3eGZBi0LrfcCEhS5USr3DuH2Gle5rVh5Ush5Kr03lcqT5hOYBg7F6u/OUxrbd6dFoeouwlZcU7CpXa0/mHE8rPXursjav+gZGI9IIEOAHXnvzlmuqBhlkESDAb7zx5vD/9RdeRqsZWptG5gAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput(""), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHjaJ96CTAAACc0lEQVRIx7WWz0tUURTHv28wHadMGquZfmCFlpUwElJT0gzpGBQhSrgoiIQ2QUF/QIuCIIsKEtoHUtQiimgVPGjTwn5QVJAIGbVQ0U21i+lF3xYz87z3ee89r0VndQ983vede849517gP5mnOsxgK+oRIMAM5r3f7k+ZRgcaESDAAua8sg1r5V2qNs8LbLWKruYYdbvGHSawSLMNG2U7OW2kz0XBHO02YNjbtJU+rYJJPnEIf2G7JpvgOF22exEt0G23NeEugX7MBgBIAMgLJ6ebGxVvvUDvxeaacFlAc+hWvIxAZ3CgJizbSdaF6yaRHuKKuMIpLAvXCyK9Bc0V4R8x0HS4nhXpMv5UhN/EQBdb/ysmxSy3AAnAm8SogDaA4XCZxZgonK7l+AZ8J/odgeLdwYPYQ471HHEc+vdcF+m+o5xz8EVtbDKFAkrYBOAXgBOK0gcc8WYioSSRRx+2V+kS1F/v8V7b93BGiWCKG4QdD0T3ZznHrENBcT/hm5BLdRYHrs5bjqzi+d5PZ7xJ7Ffcd44m4k6tGF1CIvQJfdgV8ZCyforPQiL60RauX+CVPYJ27TD1C/Fm+VahR1xn+r4CPqwMbofwZYV+xpV28Jh2V3cIsiWtGj128KD1cjTRu7SkXbGDvZqskAbmNFnfmgYOa7LP2eKULUbmifl5wxRHNXCCWefQOqvRU9xmBnv48R9kO/kyEm2bCVvDm5Gx53OVVbSZFyP0hHFE8fiSaXrJXjL2LpnD45aS8WrkQdXnLNipOI/GCrpWachb9hRU6Sb6IX2P7lcRB6t13RfrEstXO/KQjCb5iOfZGPN2TPC6vDPgL0FuY1v91jVtAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
};
Blockly.Blocks["text_char"] = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAQAAAAnDwIWAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDMtMjlUMTU6MDc6MzcrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wMy0yOVQxNToxNDo0MiswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDMtMjlUMTU6MTQ6NDIrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YjRlNmRhNzEtOThkYi1kZDQ2LWEwOGQtZGYxMGQ1ZWY5YjY1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmI0ZTZkYTcxLTk4ZGItZGQ0Ni1hMDhkLWRmMTBkNWVmOWI2NTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmI0ZTZkYTcxLTk4ZGItZGQ0Ni1hMDhkLWRmMTBkNWVmOWI2NTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiNGU2ZGE3MS05OGRiLWRkNDYtYTA4ZC1kZjEwZDVlZjliNjU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDMtMjlUMTU6MDc6MzcrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PpgO+tkAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAYBJREFUeNqM1D9LAzEYBvAnpe1ZcfAUS4XSqSI46OBUB0Wxo7h00MnRL+DUwcFB3BzELyCCkw4ugiIIHYpDBQVBcCiCSl3cLKiFx8H7k+RyuT5LIe+v4U0uCQjCHuZY5xkHACRhVvhEklxNwHR5QD93zFswl9imnL0YTIc71LNuxHR5pcF9jhl7ZoFNBT5yzi9pOEJ3ORgWFcxRNhRaU2eSMB2eKnRR71DGmwqtRlceYE6yI9E10456WGvhhFkbXpboO8vmjwoC4BAvJFyPOwH/eEZZ2pTZprzfBWnsBm8WzBzkbergyzbzCCaksYbomXEaACDwLY0dsgIgC+AF12iIrrJAjvOe8dkI9pwgmNdOmp5LumHPGbjWW1vFVjhz0dpGsPcp7x8OkjLr40+0E/Gwj3/RRR9JAYDo4ahvDKCFhwTpBFi8opWAb+XDX9YeKzXn2ivKFQuejt7uWgydNz8yJW4rd5w8ZsmvCgIQ6kVLo4AiMsjgB8/iI6wIov/8DQBvHwY6b768dwAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput("", Blockly.FieldTextInput.char_validator), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAQAAAAnDwIWAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDMtMjlUMTU6MDc6NTArMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wMy0yOVQxNToxNTo0NSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDMtMjlUMTU6MTU6NDUrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZTJiYjk3YjYtMDBlNS1iNjQ2LTg5MTktN2EwY2YwMmYzMmRmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmUyYmI5N2I2LTAwZTUtYjY0Ni04OTE5LTdhMGNmMDJmMzJkZjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmUyYmI5N2I2LTAwZTUtYjY0Ni04OTE5LTdhMGNmMDJmMzJkZjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplMmJiOTdiNi0wMGU1LWI2NDYtODkxOS03YTBjZjAyZjMyZGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDMtMjlUMTU6MDc6NTArMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Piq0yUIAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAYJJREFUeNqMlL1Lw1AUxU9qbTVOVawFpSJUBIc6dBCFCH5NKjp0UBBxE/wTHBwcipuDu5PQSQcnsaODkw6CIoi4FOmkblIrHIc2yX0v6UvP9G7y4+Xem3OvRXQuSwYcwjgSaKCBKmrWn/JOCbI8p1SNh8xK2MM5x3AVAzDzbK81BWYPrwzwO3MSdmjWmQvHAExHdKzAkeYhBqAeAedR8OFo7TDeOWyj24W/I+Ex9LvwfSRcb9oiBljPKEXASWENpnhj7PQd026fYX1hFbvGArs0i9KGg0WMAvgFsC3gR6ygariM+yKNFw57aYSgcTgifMWn6af0ISOiivVjSmJS6caU77owbYjzNd5M9+b4Ie5d0mZQQRMsC/SCSRO8qcz4RGC6BbqslLYXsgq8R/MK2kohFGZRQW85ELpkANosaU7LqOvL30izfDKh/t4Y5Inm3wpTgWpAgFsBqx/5ZenwsbasFtr8VRBgmg8eehr8vJ7zesvgM6aZ9bfoJQ/Yax5wgvgfAD7U4iksjN2QAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
};
Blockly.Blocks["text_join"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "String");
        this.setMutator(new Blockly.Mutator(["text_create_join_item"]));
        this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("items", this.itemCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("text_create_join_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock("text_create_join_item");
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (var i = 0; i < this.itemCount_; i++)
            if (connections[i]) this.getInput("ADD" + i).connection.connect(connections[i])
    },
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 0;
        while (itemBlock) {
            var input = this.getInput("ADD" + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else {
            var i = 0;
            while (this.getInput("ADD" + i)) {
                this.removeInput("ADD" + i);
                i++
            }
        }
        if (this.itemCount_ == 0) this.appendDummyInput("EMPTY").appendField(this.newQuote_(true)).appendField(this.newQuote_(false));
        else
            for (var i = 0; i < this.itemCount_; i++) {
                var input = this.appendValueInput("ADD" + i);
                if (i == 0) input.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)
            }
    },
    newQuote_: Blockly.Blocks["text"].newQuote_
};
Blockly.Blocks["text_create_join_container"] = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["text_create_join_item"] = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["text_length"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_LENGTH_TITLE,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: ["String", "Array"]
            }],
            output: "Number",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: Blockly.Msg.TEXT_LENGTH_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["text_isEmpty"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_ISEMPTY_TITLE,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: ["String", "Array"]
            }],
            output: "Boolean",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: Blockly.Msg.TEXT_ISEMPTY_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
// math
Blockly.Blocks["math_number"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "NUM");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
};

Blockly.Blocks['analog_pin'] = {
  /**
   * Block for analog pin
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('A1'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip('Analog input');
  }
};
Blockly.Blocks["math_map"]={init:function(){
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendValueInput("pin", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("map");
    this.appendValueInput("A1", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("from");
    this.appendValueInput("A2", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("-");
    this.appendValueInput("B1", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("to");
    this.appendValueInput("B2", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("-");
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.m_pap_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL);}
};

Blockly.Blocks["math_arithmetic"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"],
            [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"],
            [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"],
            [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("A").setCheck("Number");
        this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["logic_compare"] = {
    init: function() {
        var OPERATORS = Blockly.RTL ? [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            [">", "LT"],
            ["\u2264", "LTE"],
            ["<", "GT"],
            ["\u2265", "GTE"]
        ] : [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            };
            return TOOLTIPS[op]
        });
        this.prevBlocks_ = [null, null]
    },
    onchange: function() {
        var blockA = this.getInputTargetBlock("A");
        var blockB = this.getInputTargetBlock("B");
        if (blockA && blockB && !blockA.outputConnection.checkType_(blockB.outputConnection))
            for (var i = 0; i < this.prevBlocks_.length; i++) {
                var block = this.prevBlocks_[i];
                if (block === blockA || block === blockB) {
                    block.setParent(null);
                    block.bumpNeighbours_()
                }
            }
        this.prevBlocks_[0] = blockA;
        this.prevBlocks_[1] = blockB
    }
};
Blockly.Blocks["math_single"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
            [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
            ["-", "NEG"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_trig"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
            [Blockly.Msg.MATH_TRIG_COS, "COS"],
            [Blockly.Msg.MATH_TRIG_TAN, "TAN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_constant"] = {
    init: function() {
        var CONSTANTS = [
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["\u221A 2", "SQRT2"],
            ["\u221A \u00BD", "SQRT1_2"],
            ["\u221E", "INFINITY"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(CONSTANTS), "CONSTANT");
        this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
};
Blockly.Blocks["math_number_property"] = {
    init: function() {
        var PROPERTIES = [
            [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
            [Blockly.Msg.MATH_IS_ODD, "ODD"],
            [Blockly.Msg.MATH_IS_PRIME, "PRIME"],
            [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
            [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
            [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]
        ];
        this.setColour(Blockly.Blocks.math.HUE);
        this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");
        var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var divisorInput = option == "DIVISIBLE_BY";
            this.sourceBlock_.updateShape_(divisorInput)
        });
        this.appendDummyInput().appendField(dropdown, "PROPERTY");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        var divisorInput = this.getFieldValue("PROPERTY") == "DIVISIBLE_BY";
        container.setAttribute("divisor_input", divisorInput);
        return container
    },
    domToMutation: function(xmlElement) {
        var divisorInput = xmlElement.getAttribute("divisor_input") == "true";
        this.updateShape_(divisorInput)
    },
    updateShape_: function(divisorInput) {
        var inputExists = this.getInput("DIVISOR");
        if (divisorInput) {
            if (!inputExists) this.appendValueInput("DIVISOR").setCheck("Number")
        } else if (inputExists) this.removeInput("DIVISOR")
    }
};
Blockly.Blocks["math_round"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)
    }
};
Blockly.Blocks["math_on_list"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]
        ];
        var thisBlock = this;
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        var dropdown = new Blockly.FieldDropdown(OPERATORS, function(newOp) {
            thisBlock.updateType_(newOp)
        });
        this.appendValueInput("LIST").setCheck("Array").appendField(dropdown, "OP");
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SUM: Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
                MIN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
                MAX: Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
                AVERAGE: Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
                MEDIAN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
                MODE: Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
                STD_DEV: Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
                RANDOM: Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
            };
            return TOOLTIPS[mode]
        })
    },
    updateType_: function(newOp) {
        if (newOp == "MODE") this.outputConnection.setCheck("Array");
        else this.outputConnection.setCheck("Number")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("op", this.getFieldValue("OP"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute("op"))
    }
};
Blockly.Blocks["math_modulo"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_MODULO_TITLE,
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_MODULO_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["math_constrain"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_CONSTRAIN_TITLE,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "input_value",
                name: "LOW",
                check: "Number"
            }, {
                type: "input_value",
                name: "HIGH",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_CONSTRAIN_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["math_random_int"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_RANDOM_INT_TITLE,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["math_random_float"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM);
        this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)
    }
};
Blockly.Blocks["inout_angle_maths"] = {
    init: function() {
        this.setColour(Blockly.Blocks.math.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput("").appendField(new Blockly.FieldAngle("90"), "ANGLE");
        this.setOutput(true, "Number");
        this.setTooltip("angle°")
    }
};
Blockly.Blocks["intervalle"] = {
    init: function() {
        var OPERATORS = [
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.appendValueInput("inf").setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_inf");
        this.appendValueInput("valeur").setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_sup");
        this.appendValueInput("sup").setCheck("Number");
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.math.HUE);
        this.setTooltip(Blockly.Msg.compare);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
// liste
Blockly.Blocks["list_create"]={
	init: function() {
		this.appendValueInput("list")
			.appendField(Blockly.Msg.LISTS_CREATE1).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR').appendField(Blockly.Msg.LISTS_CREATE2)
		this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_append"]={
	init: function() { this.jsonInit({
        "message0": Blockly.Msg.LISTS_append,
        "args0": [
            {
                    "type": "input_value",
                    "name": "value"
                },
            {
                "type": "field_variable",
                "name": "VAR",
                "variable": Blockly.Msg.VARIABLES_GET_ITEM
            }
        ],
		"inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.tab.HUE,
        "tooltip": Blockly.Msg.LISTS_append_TOOLTIP,
        "helpUrl": Blockly.Msg.ARRAY_append_url
    })},
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_size"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_dim).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.size_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["list_set"] = {
    init: function() {
		this.appendValueInput("index")
			.appendField(Blockly.Msg.LISTS_SET_INDEX_SET);
		this.appendDummyInput()
        	.appendField(Blockly.Msg.LISTS_of)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.appendValueInput("value")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.tab_create
    },
    contextMenuType_: "array_getIndex",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_get"] = {
    init: function() {
		this.appendValueInput("index")
		.appendField(Blockly.Msg.LISTS_GET);
        this.appendDummyInput()
			.appendField(Blockly.Msg.LISTS_of)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
		this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.contextMenuMsg_ = Blockly.Msg.tab_create_fix
    },
    contextMenuType_: "fixer_tableau",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
// tableau
Blockly.Blocks["creer_tableau"] = {
    init: function() {
		var prog = window.localStorage.prog;
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_create).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR').appendField(Blockly.Msg.VARIABLES_AS).appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type");
		} else {
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_create).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
		}
		this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("D0")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARRAY_taille, "c1"],[Blockly.Msg.ARRAY_contenu, "c2"]]), "choix");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["fixer_tableau"] = {
    init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_fixe)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
			.appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("value").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL)
        this.contextMenuMsg_ = Blockly.Msg.tab_create
    },
    contextMenuType_: "array_getIndex",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["array_getIndex"] = {
    init: function() {
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
			.appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL)
		this.contextMenuMsg_ = Blockly.Msg.tab_create_fix
    },
    contextMenuType_: "fixer_tableau",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["array_create_with"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "Array");
        this.setMutator(new Blockly.Mutator(["array_create_with_item"]));
        this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("items", this.itemCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "array_create_with_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock( "array_create_with_item");
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var connections = [];
        var i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            i++
        }
        this.itemCount_ = i;
        this.updateShape_();
        for (var i = 0; i < this.itemCount_; i++)
            if (connections[i]) this.getInput("ADD" + i).connection.connect(connections[i])
    },
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 0;
        while (itemBlock) {
            var input = this.getInput("ADD" + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else {
            var i = 0;
            while (this.getInput("ADD" + i)) {
                this.removeInput("ADD" + i);
                i++
            }
        }
        if (this.itemCount_ == 0) this.appendDummyInput("EMPTY").appendField(Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE);
        else
            for (var i = 0; i < this.itemCount_; i++) {
                var input = this.appendValueInput("ADD" + i);
                if (i == 0) input.appendField(Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH)
            }
    }
};
Blockly.Blocks["array_create_with_item"] = {
    init: function() {
        this.setColour(Blockly.Blocks.tab.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks["array_create_with_container"] = {
    init: function() {
        this.setColour(Blockly.Blocks.tab.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks["array_getsize"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.size).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.size_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
// fonction
Blockly.Blocks["procedures_defnoreturn"] = {
    init: function() {
        var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(nameField, "NAME").appendField("", "PARAMS");
		this.appendStatementInput("STACK");
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.argumentstype_ = []
    },
    updateParams_: function() {
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash["arg_" + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break
            }
            hash["arg_" + this.arguments_[i].toLowerCase()] = true
        }
        if (badArg) {
			this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
		} else {
			this.setWarningText(null);
		}
        var paramString = "";
        if (this.arguments_.length) paramString = "(" + this.arguments_.join(",") + ")";
        Blockly.Events.disable();
        this.setFieldValue(paramString, "PARAMS")
        Blockly.Events.enable()
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
			parameter.setAttribute('vartype', this.argumentstype_[i]);
            container.appendChild(parameter)
        }
        return container
    },
    domToMutation: function(xmlElement) {
        this.arguments_ = [];
		this.argumentstype_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++){
            if (childNode.nodeName.toLowerCase() == "arg") {
				this.arguments_.push(childNode.getAttribute("name"));
				this.argumentstype_.push(childNode.getAttribute('vartype'));
			}
		}
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock("procedures_mutatorarg");
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], "NAME");
			paramBlock.setFieldValue(this.argumentstype_[i], 'TYPEVAR');
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection
        }
        Blockly.Procedures.mutateCallers(this);
        return containerBlock
    },
    compose: function(containerBlock) {
        this.arguments_ = [];
        this.argumentstype_ = [];
        this.paramIds_ = [];
        var paramBlock = containerBlock.getInputTargetBlock("STACK");
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue("NAME"));
            this.argumentstype_.push(paramBlock.getFieldValue('TYPEVAR'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock()
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this)
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, false]
    },
    renameVar: function(oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++){
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true
            }
		}
        if (change) {
            this.updateParams_();
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++)
                    if (block.type == "procedures_mutatorarg" && Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) block.setFieldValue(newName, "NAME")
            }
        }
    },
    customContextMenu: function(options) {
        var option = {enabled:true};
        var name = this.getFieldValue("NAME");
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", name);
        var xmlMutation = goog.dom.createDom("mutation");
        xmlMutation.setAttribute("name", name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom("arg");
            xmlArg.setAttribute("name", this.arguments_[i]);
			xmlArg.setAttribute('type', this.argumentstype_[i]);
            xmlMutation.appendChild(xmlArg)
        }
        var xmlBlock = goog.dom.createDom("block", null, xmlMutation);
        xmlBlock.setAttribute("type", this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
        if (!this.isCollapsed()){
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {enabled:true};
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
                var xmlField = goog.dom.createDom("field", null, name);
                xmlField.setAttribute("name", "VAR");
				xmlField.setAttribute('type', 'TYPEVAR');
                var xmlBlock = goog.dom.createDom("block", null, xmlField);
                xmlBlock.setAttribute("type", "variables_get");
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option)
            }
		}
    },
    callType_: "procedures_callnoreturn"
};
Blockly.Blocks["procedures_defreturn"] = {
	init: function() {
		var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, Blockly.Procedures.rename);
		nameField.setSpellcheck(false);
		this.setInputsInline(false);
		this.appendDummyInput().appendField(nameField, "NAME").appendField("", "PARAMS");
		this.appendStatementInput("STACK");
		this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
		var prog = window.localStorage.prog;
		if (prog != "python") {
			this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE).appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type")
		}
		this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
		this.setColour(Blockly.Blocks.procedures.HUE);
		this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.HELPURL);
		this.arguments_ = [];
		this.argumentstype_ = []
	},
    updateParams_: Blockly.Blocks["procedures_defnoreturn"].updateParams_,
    mutationToDom: Blockly.Blocks["procedures_defnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_defnoreturn"].domToMutation,
    decompose: Blockly.Blocks["procedures_defnoreturn"].decompose,
    compose: Blockly.Blocks["procedures_defnoreturn"].compose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, true]
    },
    renameVar: Blockly.Blocks["procedures_defnoreturn"].renameVar,
    customContextMenu: Blockly.Blocks["procedures_defnoreturn"].customContextMenu,
    callType_: "procedures_callreturn"
};
Blockly.Blocks["procedures_mutatorcontainer"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["procedures_mutatorarg"] = {
    init: function() {
        var field = new Blockly.FieldTextInput("x", this.validator_);
        this.appendDummyInput().appendField("use variable").appendField(field, "NAME").appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE)
			.appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "TYPEVAR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;
        field.onFinishEditing_ = this.createNewVar_;
        field.onFinishEditing_("x")
    },
    getBlockType: function() {
        var blocklyTypeKey = this.getFieldValue("TYPEVAR");
        return Blockly.Types[blocklyTypeKey]
    },
    validator_: function(newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        return newVar || null
    },
    createNewVar_: function(newText) {
        var source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options && source.workspace.options.parentWorkspace) source.workspace.options.parentWorkspace.createVariable(newText)
    }
};
Blockly.Blocks["procedures_callnoreturn"] = {
    init: function() {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
            this.setFieldValue(newName, "NAME");
            this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", newName))
        }
    },
    setProcedureParameters_: function(paramNames, paramIds) {
        var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace);
        var mutatorOpen = defBlock && defBlock.mutator && defBlock.mutator.isVisible();
        if (!mutatorOpen) {
            this.quarkConnections_ = {};
            this.quarkIds_ = null
        }
        if (!paramIds) return;
        if (goog.array.equals(this.arguments_, paramNames)) {
            this.quarkIds_ = paramIds;
            return
        }
        if (paramIds.length != paramNames.length) throw "Error: paramNames and paramIds must be the same length.";
        this.setCollapsed(false);
        if (!this.quarkIds_) {
            this.quarkConnections_ = {};
            if (paramNames.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = paramIds;
            else this.quarkIds_ = []
        }
        var savedRendered = this.rendered;
        this.rendered = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            var input = this.getInput("ARG" + i);
            if (input) {
                var connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkIds_[i]] = connection;
                if (mutatorOpen && connection && paramIds.indexOf(this.quarkIds_[i]) == -1) {
                    connection.disconnect();
                    connection.getSourceBlock().bumpNeighbours_()
                }
            }
        }
        this.arguments_ = [].concat(paramNames);
        this.updateShape_();
        this.quarkIds_ = paramIds;
        if (this.quarkIds_)
            for (var i = 0; i < this.arguments_.length; i++) {
                var quarkId = this.quarkIds_[i];
                if (quarkId in this.quarkConnections_) {
                    var connection = this.quarkConnections_[quarkId];
                    if (!Blockly.Mutator.reconnect(connection, this, "ARG" + i)) delete this.quarkConnections_[quarkId]
                }
            }
        this.rendered = savedRendered;
        if (this.rendered) this.render()
    },
    updateShape_: function() {
        for (var i = 0; i < this.arguments_.length; i++) {
            var field = this.getField("ARGNAME" + i);
            if (field) {
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i])
                } finally {
                    Blockly.Events.enable()
                }
            } else {
                field = new Blockly.FieldLabel(this.arguments_[i]);
                var input = this.appendValueInput("ARG" + i).appendField(field, "ARGNAME" + i).appendField("=").setAlign(Blockly.ALIGN_RIGHT);
                input.init()
            }
        }
        while (this.getInput("ARG" + i)) {
            this.removeInput("ARG" + i);
            i++
        }
        var topRow = this.getInput("TOPROW");
        if (topRow)
            if (this.arguments_.length) {
                if (!this.getField("WITH")) {
                    topRow.appendField("", "WITH");
                    topRow.init()
                }
            } else if (this.getField("WITH")) topRow.removeField("WITH")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("name", this.getProcedureCall());
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
            container.appendChild(parameter)
        }
        return container
    },
    domToMutation: function(xmlElement) {
        var name = xmlElement.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), name);
        var args = [];
        var paramIds = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++)
            if (childNode.nodeName.toLowerCase() == "arg") {
                args.push(childNode.getAttribute("name"));
                paramIds.push(childNode.getAttribute("paramId"))
            }
        this.setProcedureParameters_(args, paramIds)
    },
    renameVar: function(oldName, newName) {
        for (var i = 0; i < this.arguments_.length; i++)
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                this.getField("ARGNAME" + i).setValue(newName)
            }
    },
    onchange: function(event) {
        if (!this.workspace || this.workspace.isFlyout) return;
        if (event.type == Blockly.Events.CREATE && event.ids.indexOf(this.id) != -1) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (def && (def.type != this.defType_ || JSON.stringify(def.arguments_) != JSON.stringify(this.arguments_))) def = null;
            if (!def) {
                Blockly.Events.setGroup(event.group);
                var xml = goog.dom.createDom("xml");
                var block = goog.dom.createDom("block");
                block.setAttribute("type", this.defType_);
                var xy = this.getRelativeToSurfaceXY();
                var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
                var y = xy.y + Blockly.SNAP_RADIUS * 2;
                block.setAttribute("x", x);
                block.setAttribute("y", y);
                var mutation = this.mutationToDom();
                block.appendChild(mutation);
                var field = goog.dom.createDom("field");
                field.setAttribute("name", "NAME");
                field.appendChild(document.createTextNode(this.getProcedureCall()));
                block.appendChild(field);
                xml.appendChild(block);
                Blockly.Xml.domToWorkspace(xml, this.workspace);
                Blockly.Events.setGroup(false)
            }
        } else if (event.type == Blockly.Events.DELETE) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (!def) {
                Blockly.Events.setGroup(event.group);
                this.dispose(true, false);
                Blockly.Events.setGroup(false)
            }
        }
    },
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var name = this.getProcedureCall();
        var workspace = this.workspace;
        option.callback = function() {
            var def = Blockly.Procedures.getDefinition(name, workspace);
            def && def.select()
        };
        options.push(option)
    },
    defType_: "procedures_defnoreturn"
};
Blockly.Blocks["procedures_callreturn"] = {
    init: function() {
		this.setInputsInline(true);
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        this.setOutput(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: Blockly.Blocks["procedures_callnoreturn"].getProcedureCall,
    renameProcedure: Blockly.Blocks["procedures_callnoreturn"].renameProcedure,
    setProcedureParameters_: Blockly.Blocks["procedures_callnoreturn"].setProcedureParameters_,
    updateShape_: Blockly.Blocks["procedures_callnoreturn"].updateShape_,
    mutationToDom: Blockly.Blocks["procedures_callnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_callnoreturn"].domToMutation,
    renameVar: Blockly.Blocks["procedures_callnoreturn"].renameVar,
    onchange: Blockly.Blocks["procedures_callnoreturn"].onchange,
    customContextMenu: Blockly.Blocks["procedures_callnoreturn"].customContextMenu,
    defType_: "procedures_defreturn"
};
Blockly.Blocks["procedures_ifreturn"] = {
    init: function() {
        this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.hasReturnValue_ = true
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("value", Number(this.hasReturnValue_));
        return container
    },
    domToMutation: function(xmlElement) {
        var value = xmlElement.getAttribute("value");
        this.hasReturnValue_ = value == 1;
        if (!this.hasReturnValue_) {
            this.removeInput("VALUE");
            this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN)
        }
    },
    onchange: function(e) {
        if (this.workspace.isDragging()) return;
        var legal = false;
        var block = this;
        do {
            if (this.FUNCTION_TYPES.indexOf(block.type) != -1) {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) {
            if (block.type == "procedures_defnoreturn" && this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = false
            } else if (block.type == "procedures_defreturn" && !this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = true
            }
            this.setWarningText(null);
            if (!this.isInFlyout) this.setDisabled(false)
        } else {
            this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
            if (!this.isInFlyout && !this.getInheritedDisabled()) this.setDisabled(true)
        }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
};

Blockly.Blocks['mrtduino_pin'] = {
  /**
   * Block for MRTduino board
 
   */
  init: function() {
    this.setHelpUrl('https://www.logix5.com/roboticaeducativa/mrtduino-board/');
    this.setColour("#00929f");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Port1", "13"], ["Port2", "15"],["Port3", "16"],["Port4", "14"],["Port5", "18"],["Port6", "19"],["Port7", "20"],["Port8", "21"],["Port9", "5"],["Port10", "9"],["Port11", "11"],["Port12", "12"],["Port13", "2"],["Port14", "3"],["Port15", "0"],["Port16", "1"],["RC -", "10"],["RC +", "22"],["RC S", "23"]]), "MRTPIN")
    this.setOutput(true, 'Number');
    this.setTooltip('MRTduino pins conversion. You select port and this block convert into arduino pin');
  }
};