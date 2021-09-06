"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
  ////////////
 /*  html  */
////////////
Blockly.Blocks['emptyVar'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": Blockly.Msg.VARIABLES_GET_ITEM
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#FFA500"
        });
    }
};
Blockly.Arduino['emptyVar'] = function(block) {
    var value = block.getFieldValue('value');
    var code = '<meta charset=\\"UTF-8\\">");\n';
    code += '<title>'+looseEscape(value)+'</title>");\n';
    return code
};
Blockly.Python['emptyVar'] = function(block) {
    return "'''+ "+Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)+" +'''"
};
//////////////
Blockly.Blocks['emptytext'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "un texte."
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};
Blockly.Arduino['emptytext'] = function(block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
};
Blockly.Python['emptytext'] = function(block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
};
//////////////
Blockly.Blocks['textmod'] = {
    init: function() {
        this.jsonInit({
            "message0": '< %1 > %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "gras",
                            "strong"
                        ],
                        [
                            "italique",
                            "em"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};
Blockly.Arduino['textmod'] = function(block){
    var content = Blockly.Arduino.statementToCode(block,'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>' + content + '</' + type + '>'
};
Blockly.Python['textmod'] = function(block){
    var content = Blockly.Python.statementToCode(block,'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>' + content + '</' + type + '>'
};
//////////////
Blockly.Blocks['paragraph'] = {
    init: function() {
        this.jsonInit({
            "message0": '<p> %1 %2 </p>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};
Blockly.Arduino['paragraph'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier');
    return '<p' + block_modifier + '>' + statements_content + '</p>");\n'
};
Blockly.Python['paragraph'] = function(block) {
    var statements_content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier');
    return '<p' + block_modifier + '>' + statements_content + '</p>\n'
};
//////////////
Blockly.Blocks['header'] = {
    init: function() {
        this.jsonInit({
            "message0": '<h %1 > %2 %3 </h>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],
]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};
Blockly.Arduino['header'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<h' + header_size + block_modifier + '>' + statements_content + '</h' + header_size + '>");\n'
};
Blockly.Python['header'] = function(block) {
    var statements_content = Blockly.Python.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<h' + header_size + block_modifier + '>' + statements_content + '</h' + header_size + '>\n'
};
//////////////
Blockly.Blocks['link'] = {
    init: function() {
        this.jsonInit({
            "message0": '<a href=%1 > %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};
Blockly.Arduino['link'] = function(block){
    var text = Blockly.Arduino.statementToCode(block, 'content');
    var link = URLInput(block.getFieldValue('target'));
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<a href=\\"' + link + '\\" target=\\"_blank\\"' + block_modifier + '>' + text + '</a>'
};
Blockly.Python['link'] = function(block){
    var text = Blockly.Python.statementToCode(block, 'content');
    var link = URLInput(block.getFieldValue('target'));
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Python.ORDER_ATOMIC);
    return '<a href=\"' + link + '\" target=\"_blank\"' + block_modifier + '>' + text + '</a>'
};
//////////////
Blockly.Blocks['table'] = {
    init: function() {
        this.jsonInit({
            "message0": '<table> %1 %2 </table>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "table"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#727272"
        });
    }
};
Blockly.Arduino['table'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<table' + block_modifier + '>' + content + '</table>");\n'
};
Blockly.Python['table'] = function(block){
    var content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Python.ORDER_ATOMIC);
    return '<table' + block_modifier + '>\n' + content + '</table>\n'
};
//////////////
Blockly.Blocks['tablerow'] = {
    init: function() {
        this.jsonInit({
            "message0": '<tr> %1 %2 </tr>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "tablerow"
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#727272"
        });
    }
};
Blockly.Arduino['tablerow'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<tr' + block_modifier + '>' + content + '</tr>'
};
Blockly.Python['tablerow'] = function(block){
    var content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<tr' + block_modifier + '>' + content + '</tr>\n'
};
//////////////
Blockly.Blocks['tableheading'] = {
    init: function() {
        this.jsonInit({
            "message0": '<th> %1 %2 </th>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272"
        });
    }
};
Blockly.Arduino['tableheading'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<th' + block_modifier + '>' + content + '</th>'
};
Blockly.Python['tableheading'] = function(block){
    var content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Python.ORDER_ATOMIC);
    return '<th' + block_modifier + '>' + content + '</th>\n'
};
//////////////
Blockly.Blocks['tabledata'] = {
    init: function() {
        this.jsonInit({
            "message0": '<td> %1 %2 </td>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272"
        });
    }
};
Blockly.Arduino['tabledata'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<td' + block_modifier + '>' + content + '</td>'
};
Blockly.Python['tabledata'] = function(block){
    var content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Python.ORDER_ATOMIC);
    return '<td' + block_modifier + '>' + content + '</td>'
};
//////////////
Blockly.Blocks['image'] = {
    init: function() {
        this.jsonInit({
            "message0": '<img src=%1 >',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": "http://lesormeaux.net/img/puzzle-piece.png"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};
Blockly.Arduino['image'] = function(block){
    var source = block.getFieldValue('source');
    var code = '<img src=\\"' + URLInput(source) + '\\">");\n';
    return code
};
Blockly.Python['image'] = function(block){
    var source = block.getFieldValue('source');
    var code = '<img src=\"' + URLInput(source) + '\">\n';
    return code
};
//////////////
Blockly.Blocks['args'] = {
    init: function() {
        this.jsonInit({
            "message0": 'style : %1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"
                }
            ],
            "colour": "#00CC00",
            "output": "attributes"
        });
    }
};
Blockly.Arduino['args'] = function(block) {
    var code = Blockly.Arduino.statementToCode(block, 'content');
    return 'style=\\"' + code + '\\"'
};
Blockly.Python['args'] = function(block) {
    var code = Blockly.Python.statementToCode(block, 'content');
    return 'style=\"' + code + '\"'
};
//////////////
Blockly.Blocks['color'] = {
    init: function() {
        this.jsonInit({
            "message0": 'color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#FF0000"

                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};
Blockly.Arduino['color'] = function(block){
    var color = block.getFieldValue('value');
    return 'color : ' + color + ' ; '
};
Blockly.Python['color'] = function(block){
    var color = block.getFieldValue('value');
    return 'color: ' + color + '; '
};
//////////////
Blockly.Blocks['bgcolor'] = {
    init: function() {
        this.jsonInit({
            "message0": 'background-color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};
Blockly.Arduino['bgcolor'] = function(block){
    var color = block.getFieldValue('value');
    return 'background-color : ' + color + ' ; '
};
Blockly.Python['bgcolor'] = function(block){
    var color = block.getFieldValue('value');
    return 'background-color: ' + color + '; '
};
//////////////
Blockly.Blocks['textalign'] = {
    init: function(){
        this.jsonInit({
            "message0": "text-align: %1 ;",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["center", "center"],
                        ["left", "left"],
                        ["right", "right"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        })
    }
};
Blockly.Arduino['textalign'] = function(block){
    var value = block.getFieldValue('value');
    return 'text-align : ' + value + ' ; '
};
Blockly.Python['textalign'] = function(block){
    var value = block.getFieldValue('value');
    return 'text-align: ' + value + '; '
};
//////////////
Blockly.Blocks['border'] = {
    init: function() {
        this.jsonInit({
            "message0": 'border: %1 px %2 %3 ;',
            "args0": [
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 2,
                    "min": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "solid",
                            "solid"
                        ],
                        [
                            "dotted",
                            "dotted"
                        ],
                        [
                            "dashed",
                            "dashed"
                        ],
                        [
                            "double",
                            "double"
                        ]
                    ]
                },
                {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#000000"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};
Blockly.Arduino['border'] = function(block){
    var width = fullEscape(block.getFieldValue('width'));
    var type =  block.getFieldValue('type');
    var color = block.getFieldValue('color');
    return 'border : ' + width + 'px ' + type + ' ' + color + ' ; '
};
Blockly.Python['border'] = function(block){
    var width = fullEscape(block.getFieldValue('width'));
    var type =  block.getFieldValue('type');
    var color = block.getFieldValue('color');
    return 'border: ' + width + 'px ' + type + ' ' + color + '; '
};
//////////////
Blockly.Blocks['input'] = {
    init: function() {
        this.jsonInit({
            "message0": '<input type=%1 value=%2 >',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [["checkbox","checkbox"],["radio","radio"],["submit","submit"],["text","text"]]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#154360"
        });
    }
};
Blockly.Arduino['input'] = function(block){
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    return '<input type=\\"' + type + '\\" value=\\"' + value + '\\" name=\\"' + value + '\\">';
};
Blockly.Python['input'] = function(block){
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    return '<input type=\"' + type + '\" value=\"' + value + '\" name=\"' + value + '\">\n';
};
//////////////
Blockly.Blocks['form'] = {
    init: function() {
        this.jsonInit({
            "message0": '<form action=%1 method=%2> %3 %4 </form>',
            "args0": [
				{
                    "type": "field_input",
                    "name": "action",
                    "text": "/"
                },
                {
                    "type": "field_dropdown",
                    "name": "method",
                    "options": [["GET","GET"],["POST","POST"],["PUT","PUT"]]
                },
				{
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "form"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#154360"
        });
    }
};
Blockly.Arduino['form'] = function(block){
	var action = block.getFieldValue('action');
	var method = block.getFieldValue('method');
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<form action=\\"' + action + '\\" method=\\"' + method + '\\" ' + block_modifier + '>' + content + '</form>");\n'
};
Blockly.Python['form'] = function(block){
	var action = block.getFieldValue('action');
	var method = block.getFieldValue('method');
    var content = Blockly.Python.statementToCode(block, 'content');
    var block_modifier = Blockly.Python.statementToCode(block, 'modifier', Blockly.Python.ORDER_ATOMIC);
    return '<form action=\"' + action + '\" method=\"' + method + '\" ' + block_modifier + '>\n' + content + '</form>\n'
};
//////////////
Blockly.Blocks['label'] = {
    init: function() {
        this.jsonInit({
            "message0": '<label for=%1> %2 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "for",
                    "text": ""
                },
				{
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#154360"
        });
    }
};
Blockly.Arduino['label'] = function(block){
    var content = block.getFieldValue('value');
    var for_value = block.getFieldValue('for');
    return '<label for=' + for_value + '>' + content + '</label>\n'
};
Blockly.Python['label'] = function(block){
    var content = block.getFieldValue('value');
    var for_value = block.getFieldValue('for');
    return '<label for="' + for_value + '">' + content + '</label>\n'
};
//////////////
Blockly.Blocks['br'] = {
    init: function() {
        this.jsonInit({
            "message0": '<br>',
            "args0": [
                {
                    "type": "field_dummy"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#000000"
        });
    }
};
Blockly.Arduino['br'] = function(block){
    return '<br>'
};
Blockly.Python['br'] = function(block){
    return '<br>\n'
};
  ////////////////
 /*  function  */
////////////////
function fullEscape(input){
    return escape(input)
        .replace(/%25/g, "%");
}
function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function CSSEscape(input) {
    return input
        .replace(/;/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/</g, "")
        .replace(/:/g, "")
}
function URLInput(input){
    var URLRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(URLRegex.test(input)){
        return input;
    }
}