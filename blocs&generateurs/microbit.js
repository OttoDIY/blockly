"use strict";
goog.provide("Blockly.Blocks.Python");
goog.require("Blockly.Blocks");

/*		entrée/sortie		*/
Blockly.Blocks['io_readDigitalPin']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT + "%1",
        "args0":[{
            "type": "input_value",
            "name": "PIN",
            "check": "Number"
        }],
        "colour": "#787746",
        "output": "Number",
        "tooltip": "retourne l'état logique (0 ou 1) de la broche indiquée",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['io_readDigitalPin'] = function(block) {
	return ["pin" + Blockly.Python.valueToCode(block,"PIN", Blockly.Python.ORDER_NONE) + ".read_digital()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['io_writeDigitalPin']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 + "%1" + "à" + "%2",
        "args0":[{
            "type": "input_value",
            "name": "PIN",
            "check": "Number"
        },{
            "type": "input_value",
            "name": "VALUE",
            "check": "Boolean",
			"align": "RIGHT"
        }],
        "colour": "#787746",
        "previousStatement": null,
        "nextStatement": null,        
        "tooltip": "écrire un état logique (0 ou 1) sur la broche indiquée",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['io_writeDigitalPin'] = function(block) {
	var state = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
	var pin = Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_NONE);
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0 ;
    return "pin" + pin + ".write_digital(" + state + ")\n"
};
//////////////
Blockly.Blocks['io_readAnalogPin']={init:function() {
	var card=window.localStorage.card;
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT + "%1",
        "args0":[{
            "type": "field_dropdown",
            "name": "PIN",
            "options": profile[card].dropdownAnalog
        }],
        "colour": "#787746",
        "output": "Number",
        "tooltip": "retourne la valeur (de 0 à 1023) de la broche indiquée",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['io_readAnalogPin'] = function(block) {
	return [block.getFieldValue("PIN") + ".read_analog()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['io_writeAnalogPin']={init:function() {
	var card=window.localStorage.card;
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 + "%1 %2 à %3",
        "args0":[{
            "type": "field_dropdown",
            "name": "PIN",
            "options": profile[card].dropdownPWM
        },
		{"type": "input_dummy"
		},
		{
            "type": "input_value",
            "name": "VALUE",
            "check": "Number",
			"align": "RIGHT"
        }],
        "colour": "#787746",
        "previousStatement": null,
        "nextStatement": null,        
        "tooltip": "écrire la valeur (de 0 à 1023) sur la broche indiquée",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['io_writeAnalogPin'] = function(block) {
	var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
	var pin = block.getFieldValue("PIN");
    if (value < 0) value = 0;
    if (value > 1023) value = 1023;
    return pin + ".write_analog(" + value + ")\n"
};
/*		actionneur		*/
Blockly.Blocks['init_leds']={init:function() {
	this.jsonInit({
		"lastDummyAlign0": "CENTRE",
        "message0": "définir le symbole %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31",
        args0: [{
			"type": "field_variable",
			"name": "VAR",
			"variable": Blockly.Msg.VARIABLES_GET_ITEM
		},
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
		{
            "type": "field_checkbox",
            "checked": false,
            "name": "LED00"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED01"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED02"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED03"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED04"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED10"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED11"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED12"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED13"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED14"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED20"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED21"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED22"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED23"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED24"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED30"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED31"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED32"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED33"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED34"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED40"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED41"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED42"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED43"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED44"
        },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",        
        "tooltip": "définition d'un symbole pour la matrice :\nune case cochée allume une DEL",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['init_leds'] = function(block) {
	var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	const BRIGHTNESS = 5;
    var image = "";
    for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 5; c++) {
            var label = "LED" + r + "" + c;
            image += (block.getFieldValue(label, Blockly.Python.ORDER_MEMBER) === "TRUE") ? BRIGHTNESS : "0";
        }
        image += (r < 4) ? ":" : "";
    }
	Blockly.Python.definitions_[vname] = vname + ' = Image("' + image + '")';
    return ''
};
//////////////
Blockly.Blocks['show_leds']={init:function() {
	this.jsonInit({
		"message0": "afficher le symbole %1",
        "args0": [{
            "type": "field_variable",
			"name": "VAR",
			"variable": Blockly.Msg.VARIABLES_GET_ITEM
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": "Affiche le symbole qui aura été préalablement défini",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['show_leds'] = function(block) {
	var varname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return "display.show(" + varname + ")\n"
};
//////////////
Blockly.Blocks['show_string']={init:function() {
	this.jsonInit({
		"message0": "faire défiler %1",
        "args0": [{
            "type": "input_value",
            "name": "TEXT"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": "fait défiler le texte indiqué sur la matrice intégrée",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['show_string'] = function(block) {
	var texte = Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_NONE);
    return "display.scroll(" + texte + ")\n"
};
//////////////
Blockly.Blocks['show_icon']={init:function() {
	this.jsonInit({
		"message0": "afficher le symbole %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "ICON",
            "options": [["coeur", "HEART_SMALL"],
                ["COEUR", "HEART"],
                ["damier", "CHESSBOARD"],
                ["smile", "HAPPY"],
                ["triste", "SAD"]]
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": "affiche les symboles prédéfinis :\nun petit coeur, un gros coeur, un sourire, un visage triste et un damier",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['show_icon'] = function(block) {
	var img = block.getFieldValue("ICON");
    return "display.show(Image." + img + ")\n" 
};
//////////////
Blockly.Blocks['set_pixel']={init:function() {
	this.jsonInit({
		"message0": "mettre la DEL X %1 Y %2 à %3",
        "args0": [{
            "type": "input_value",
            "name": "X",
            "check": "Number"
        },{
            "type": "input_value",
            "name":"Y",
            "check": "Number",
			"align": "RIGHT"
        },{
            "type": "input_value",
            "name": "VALUE",
            "check": "Boolean" ,
			"align": "RIGHT"  
        }],
        "colour": "#00929F",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": Blockly.Msg.matrice16x8_del_tooltip,
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['set_pixel'] = function(block) {
	var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_NONE);
    if (x < 0) b = 0;
    if (x > 5) b = 5;
    var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_NONE);
    if (y < 0) b = 0;
    if (y > 5) b = 5;
    var state = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
    var light = 5;
    if (state == 0) light = 0;
    return "display.set_pixel(" + x + "," + y + "," + light + ")\n"
};
//////////////
Blockly.Blocks['clear']={init:function() {
	this.jsonInit({
		"message0": "éteindre toutes les DEL",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.matrice16x8_efface_tooltip,
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['clear'] = function(block) {
	return "display.clear()\n"
};
/*		capteur	*/
Blockly.Blocks['io_isButtonPressed']={init:function() {
	this.jsonInit({
		"message0": "bouton %1 est pressé",
        "args0": [{
            "type": "field_dropdown",
            "name": "BUTTON",
            "options": [
                ["A", "a"],
                ["B", "b"],
                ["A+B", "a+b"]
            ]
        }],
        "output": "Boolean",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.bp_tooltip,
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['io_isButtonPressed'] = function(block) {
	var code;
    var button = block.getFieldValue('BUTTON');
    if (button === 'a' || button === 'b') {
        code = 'button_' + button + '.is_pressed()';
    } else {
        code = 'button_a.is_pressed() and button_b.is_pressed()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getAcceleration']={init:function() {
	this.jsonInit({
		"message0": "accélération sur %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "AXIS",
            "options": [
                ["x", "x"],
                ["y", "y"],
                ["z", "z"]]
        }],
        "output": "Number",
        "colour": "#00929F",
        "tooltip": "détecte quand la crate est en mouvement sur l'un des trois axes",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['sensors_getAcceleration'] = function(block) {
	return ['accelerometer.get_' + block.getFieldValue('AXIS') + '()', Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getMagneticForce']={init:function() {
	this.jsonInit({
		"message0": "direction de la boussole",
        "output": "Number",
        "colour": "#00929F",
        "tooltip": "détecte le champ magnétique de la Terre, ce qui permet de savoir quelle direction la carte indique (0 = Nord)",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['sensors_getMagneticForce'] = function(block) {
	return ['compass.heading()', Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_calibrate']={init:function() {
	this.jsonInit({
		"message0": "calibrer de la boussole",
        "colour": "#00929F",
        "tooltip": "Pour calibrer la boussole, inclinez la cartet pour déplacer le point au centre jusqu'à ce que vous ayez rempli la totalité de l’écran",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['sensors_calibrate'] = function(block) {
	Blockly.Python.definitions_["calibrate"] = "compass.calibrate()";
	return ''
};
//////////////
Blockly.Blocks['sensors_getTemperature']={init:function() {
	this.jsonInit({
		message0: "température de la carte",
        "output": "Number",
        "colour": "#00929F",
        "tooltip": "retourne la température de la carte (légèrement différent de la température réelle)",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['sensors_getTemperature'] = function(block) {
    return ["temperature()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getLight']={init:function() {
	this.jsonInit({
		message0: "luminosité",
        "output": "Number",
        "colour": "#00929F",
        "tooltip": "détecte la luminosité ambiante grâce aux DEL de la matrice",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['sensors_getLight'] = function(block) {
    return ["display.read_light_level()", Blockly.Python.ORDER_ATOMIC]
};
/*		communication		*/
Blockly.Blocks['radioSendString']={init:function() {
	this.jsonInit({
		"message0": "envoyer %1",
        "args0": [{
            "type": "input_value",
            "name": "STR",
            "check": "String"           
        }],
        "colour" : "#006000",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "envoie une information par onde radio",
        "helpUrl": "https://microbit-micropython.readthedocs.io/fr/latest/index.html"
	})
}};
Blockly.Python['radioSendString'] = function(block) {
	Blockly.Python.imports_["radio"] = "import radio";
    Blockly.Python.definitions_["radio_on"] = "radio.on()";
    var str = Blockly.Python.valueToCode(block, "STR", Blockly.Python.ORDER_NONE);
    return "radio.send(" + str + ")\n"
};
//////////////
Blockly.Blocks['onRadioDataReceive']={init:function() {
    this.appendValueInput("CASE0").appendField("si la donnée reçue vaut");
    this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setHelpUrl(Blockly.Msg.bluetooth_helpurl);
    this.setColour("#006000");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
    this.setTooltip("vérifie qu'une donnée est reçue par onde radio et réalise les actions appropriées");
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
Blockly.Python['onRadioDataReceive'] = function(block) {
	Blockly.Python.imports_["radio"] = "import radio";
    Blockly.Python.definitions_["radio_on"] = "radio.on()";
    var n=0;
    var argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
    var branch=Blockly.Python.statementToCode(block, "DO" + n);
	var code="if radio.receive() == " + argument + ":\n" + branch;   
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
        branch=Blockly.Python.statementToCode(block, "DO" + n);
        code += "if radio.receive() == " + argument + ":\n" + branch
    }
	return code
};
//////////////
