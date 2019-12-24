<!DOCTYPE HTML>
<html>
<head>
	<link rel="icon" type="image/png" href="media/icon.png" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title> OttoBlockly </title>
	<!-- JavaScript -->
	<script type="text/javascript" src="js/blockly.min.js"></script>
	<script type="text/javascript" src="js/type.js"></script>
	<script type="text/javascript" src="js/types.js"></script>
	<script type="text/javascript" src="js/typings.js"></script>
	<script type="text/javascript" src="js/generate_python.js"></script>
	<script type="text/javascript" src="js/generate_cpp.js"></script>
	<script type="text/javascript" src="js/blocklino.js"></script>
	<script type="text/javascript" src="js/boards.js"></script>
	<script src="js/jquery.min.2.1.3.js" onload="window.$ = window.jQuery = module.exports;"></script>
	<script type="text/javascript" src="js/bootstrap.toggle.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.3.3.6.js"></script>
	<script type="text/javascript" src="js/prettify.min.js"></script>
	<script type="text/javascript" src="blocs&generateurs/blockly_blocs.js"></script>
	<script type="text/javascript" src="blocs&generateurs/arduino_blocs.js"></script>
	<script type="text/javascript" src="blocs&generateurs/arduino_generateurs_cpp.js"></script>
	<script type="text/javascript" src="blocs&generateurs/arduino_generateurs_python.js"></script>
	<script type="text/javascript" src="blocs&generateurs/blockly_generateurs_cpp.js"></script>
	<script type="text/javascript" src="blocs&generateurs/blockly_generateurs_python.js"></script>
	<script type="text/javascript" src="blocs&generateurs/_actionneur.js"></script>
	<script type="text/javascript" src="blocs&generateurs/_capteur.js"></script>
	<script type="text/javascript" src="blocs&generateurs/_html.js"></script>
	<script type="text/javascript" src="blocs&generateurs/_microbit.js"></script>
	<script type="text/javascript" src="blocs&generateurs/otto.js"></script>
	<script type="text/javascript" src="js/typing.js"></script>
	<script type="text/javascript" src="lang/code.js"></script>
	<script type="text/javascript" src="js/hexlify.js"></script>
	<script type="text/javascript" src="js/intel-hex.browser.js"></script>
	<script type="text/javascript" src="js/ace.js"></script>
	<script type="text/javascript" src="js/ext-language_tools.js"></script>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.3.3.6.css"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.toggle.min.css"/>
	<link rel="stylesheet" type="text/css" href="css/blocklino.css"/>
	<link rel="stylesheet" type="text/css" href="css/prettify.min.css"/>
</head>
<body onload="BlocklyDuino.init()">
	<div class="loading"></div>
	<div id="toptitle">
		<div id="title">
            <span><img src="media/icon.png"/><span id="span_blocklin"></span></span>
		</div>
        <div id="title-bar-btns">
			<button id="btn_min" type="button" class="btn btn-minmax"><span class="fa fa-minimize fa-lg"></span></button>
			<button id="btn_max" type="button" class="btn btn-minmax"><span class="fa fa-maximize fa-lg"></span></button>
			<button id="btn_quit" type="button" class="btn btn-quit"><span class="fa fa-times fa-1_75x"></span></button>
        </div>
	</div>
	<div id="header">
		<div id="btn_all" >
			<ul class="nav nav-tabs" role="tablist" style="display: none;">
				<li role="presentation" class="active"><a href="#content_blocks" aria-controls="content_blocks" role="tab" data-toggle="tab"></a></li>
				<li role="presentation"><a href="#content_code" aria-controls="content_code" role="tab" data-toggle="tab"></a></li>
			</ul>
				<input id="codeORblock" checked data-size="small" data-toggle="toggle" data-on="<span class='fa fa-puzzle fa-1_5x' style='color:#727272'></span>" data-off="<span class='fa fa-code fa-1_5x'></span>" data-style="ios" data-onstyle="default" data-offstyle="default" type="checkbox">
				<span style="color:white;font-size:20"> | </span>
				<button id="btn_config" class="btn btn-arduino" data-toggle="modal" data-target="#configModal">
					<span class="fa fa-cog fa-lg fa-fw"></span>
				</button>
				<span style="color:white;font-size:20"> | </span>
				<button id="btn_new" class="btn btn-arduino-rect">
					<span class="fa fa-file fa-fw"></span>
				</button>
				<button id="btn_fakeload" class="btn btn-arduino-rect">
					<span class="fa fa-folder-open fa-lg fa-fw"></span>
				</button>
				<button id="btn_example" class="btn btn-arduino-rect" data-toggle="modal" data-target="#exampleModal">
					<span class="fa fa-file-text fa-lg fa-fw"></span>
				</button>
				<input type="file" id="load" accept=".bloc,.xml,.py,.ino" style="display: none;" />
				<button id="btn_saveXML" class="btn btn-arduino-rect">
					<span class="fa fa-floppy-o fa-lg fa-fw"></span>
				</button>
				<button id="btn_print" class="btn btn-arduino-rect">
					<span class="fa fa-camera"> </span>
				</button>
				<span style="color:white;font-size:4">|</span>
				</button>
				<button id="btn_undo" class="btn btn-arduino">
					<span class="fa fa-undo"> </span>
				</button>
				<button id="btn_redo" class="btn btn-arduino">
					<span class="fa fa-repeat"> </span>
				</button>
				<span style="color: white; font-size: 4">|</span>
				<button id="btn_card" class="btn btn-arduino-rect" data-toggle="modal" data-target="#card" style="margin-top: -2px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">
					<span class="fa fa-microchip fa-fw" > </span>
				</button>	
				<select style="margin-left: -3px; height: 30px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-left-width: 0px;" id="boards" onchange="BlocklyDuino.change_card();">
					<optgroup label="C / C++">
						<option value="leonardo" >Arduino Léonardo</option>
						<option value="mega" >Arduino Méga 2560</option>
						<option value="micro" >Arduino Micro</option>
						<option value="mini" >Arduino Mini</option>
						<option value="nano" >Arduino Nano</option>
						<option value="pro8" >Arduino Pro / Pro Mini 3.3V</option>
						<option value="uno" >Arduino Uno</option>
						<option value="yun" >Arduino Yun</option>
						<option value="atmegang" >DAGU RS027</option>
						<option value="pro16" >DAGU RS040</option>
					</optgroup>
					<optgroup label="Python">
						<option value="esp8266" >ESP 8266</option>
						<option value="esp32" >ESP 32</option>
						<option value="microbit" >micro:bit</option>
						<option value="pyboard" >Pyboard</option>
					</optgroup>
				</select>
				<span style="color:white;font-size:4">|</span>
				<button id="btn_usb" class="btn btn-arduino-rect" data-toggle="modal" data-target="#usb" style="margin-top: -2px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">
					<span class="fa fa-usb fa-fw"></span>
				</button>	
				<select style="margin-left: -4px; height: 30px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-left-width: 0px;" id="portserie" onchange="BlocklyDuino.save_com();"></select>
				<span style="color:white;font-size:4">|</span>
				<button id="btn_verify" class="btn btn-arduino" data-toggle="modal" data-target="#message">
					<span class="fa fa-check fa-1_5x fa-fw"> </span>
				</button>
				<button id="btn_flash" class='btn btn-arduino' data-toggle="modal" data-target="#message">
					<span class="fa fa-arrow-right fa-1_5x fa-fw"> </span>
				</button>
				<span id="survol" style="color:#fff"></span>
		</div>
		<div id="btn_group" class="btn-group" role="group">
				<button id="btn_bin" class='btn btn-default'>
						<span class="fa fa-code-fork fa-lg fa-fw"> </span>
				</button>
			<button id="btn_search" class="btn btn-default">
				<span class="fa fa-binoculars"> </span>
			</button>
			<button id="btn_factory" class="btn btn-default">
				<span class="fa fa-industry fa-fw"></span>
			</button>
			<button id="btn_about" class="btn btn-default" data-toggle="modal" data-target="#aboutModal">
				<span class="fa fa-question fa-lg fa-fw"></span>
			<button id="btn_term" class="btn btn-default">
					<span class="fa fa-search fa-lg fa-fw"></span>
			</button>
			<button id="btn_preview" class="btn btn-default">
				<span class="fa fa-code fa-lg fa-fw"> </span>
			</button>
		</div>
	</div>
	<div id="divBody" class="tab-content">
		<div role="tabpanel" id="content_blocks" class="tab-pane fade in active" style="position: relative;">
			<div id="toggle" class="modal-content" style="display: none;">
				<pre id="pre_previewArduino"></pre>
				<div id="btn_group" class="btn-group" role="group">
					<button id="btn_saveino" class="btn btn-default">
						<span class="fa fa-floppy-o"> </span>
					</button>
					<button id="btn_copy" class="btn btn-default">
						<span class="fa fa-files-o"> </span>
					</button>
				</div>
			</div>
		</div>
		<div role="tabpanel" id="content_code" class="tab-pane fade">#enter your code here</div>
	</div>
	<!-- message modal -->
	<div class="modal fade" id="message" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static" >
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body" >
					<div id = "messageDIV"></div>
				</div>  
			</div>
		</div>
	</div>
	<!-- about modal -->
	<div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&#215;</span></button>
			<span class="fa fa-2x" class="modal-title" id="aboutModalLabel"></span>
		  </div>
		  <div class="modal-body">
			<div class="container-fluid">
				<div class="row">
				  <div class="col-md-4"><img src="media/logo.png" style="width:128px; height:128px;"/></div>
				  <div class="col-md-8">
					<span class="fa fa-lg" id="versionapp"></span><br /><br />
					<span id="aboutBody"></span><br /><br />
					<button id="btn_site" class="btn btn-default">
						<span class="fa fa-search" id="span_site"></span>
					</button>
				  	<button id="btn_forum" class="btn btn-default">
						<span class='fa fa-comments' id="span_forum"></span>
					</button>
				  	<button id="btn_contact" class="btn btn-default">
						<span class='fa fa-envelope' id="span_contact"></span>
					</button>
				  </div>
				</div>
			</div>
		  </div>
		  <div class="modal-footer">
			<input type="checkbox" id="verifyUpdate"><span id="span_update"></span><br />
			<button id="btn_version" type="button" class="btn btn-xs btn-default"><span id="span_verify_update"></span></button><br />
		  </div>
		</div>
	  </div>
	</div>
	<!-- toolbox config modal -->
	<div class="modal fade" id="configModal" tabindex="-1" role="dialog" aria-labelledby="configModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&#215;</span></button>
				<span class="fa fa-cog fa-2x" class="modal-title"  id="configModalLabel"></span>
			</div>
			<div class="modal-body">
				<label id="span_languageMenu"></label>
				<select id="languageMenu"></select><br><br>
				<div id="divToolbox">
					<label id="labelToolboxDefinition"></label>
					<select id="toolboxes">
						<option value="toolbox_6">Beginner 👶</option>
						<option value="toolbox_arduino_all" selected="selected">Maker 👨‍🏭</option>
						<option value="toolbox_microbit">Microbit 👨‍💻</option>
						<option value="toolbox_lycee">Advanced 👨‍🚀</option>
					</select>
				</div>
			</div>
		  <input type="checkbox" name="select_all" id="select_all"/> <span id="span_select_all"> </span>
		  <div class="modal-body" id="modal-body-config"></div>
		  <div class="modal-footer">
			<button id="btn_valid_config" type="button" class="btn btn-primary"></button>
		  </div>
		</div>
	  </div>
	</div>
	<!-- example modal -->
	<div class="modal fade" id="exampleModal" >
	  <div class="modal-dialog modal-lg">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" ><span aria-hidden="true">&#215;</span></button>
			<span class="fa fa-file-text fa-2x" class="modal-title" id="exampleModalLabel"></span>
		  </div>
		  <div class="modal-body">
			<div class="table-responsive">
				<table class="table table-hover">
					<tbody id="includedContent"></tbody>
				</table>
			</div>
		  </div>
		</div>
	  </div>
	</div>
	<!-- CARD modal -->
	<div class="modal fade" id="card" >
	  <div class="modal-dialog modal-md">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" ><span aria-hidden="true">&#215;</span></button>
			<span class="fa fa-microchip fa-2x" class="modal-title" id="cardLabel"></span>
		  </div>
		  <div class="modal-body">
			<div class="arduino_card_mini_picture_div" style="height: 516px">
				<img id="arduino_card_mini_picture"/>
			</div>
			<select size="16" multiple id="pinout" onchange="BlocklyDuino.cardPicture_change();">
				<optgroup label="C / C++">
					<option value="leonardo" >Arduino Léonardo</option>
					<option value="mega" >Arduino Méga 2560</option>
					<option value="micro" >Arduino Micro</option>
					<option value="mini" >Arduino Mini</option>
					<option value="nano" >Arduino Nano</option>
					<option value="pro8" >Arduino Pro / Pro Mini 3.3V</option>
					<option value="uno" >Arduino Uno</option>
					<option value="yun" >Arduino Yun</option>
					<option value="atmegang" >DAGU RS027</option>
					<option value="pro16" >DAGU RS040</option>
				</optgroup>
				
				<optgroup label="Python">
					<option value="esp8266" >ESP 8266</option>
					<option value="esp32" >ESP 32</option>
					<option value="microbit" >micro:bit</option>
					<option value="pyboard" >Pyboard</option>
				</optgroup>
			</select>
			<br><br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
		  </div>
		</div>
	  </div>
	</div>
	<!-- USB modal -->
	<div class="modal fade" id="usb" >
	  <div class="modal-dialog modal-sm">
		<div class="modal-content">	
		  <div class="modal-body">
			<span id="aboutusbLabel"></span>
		  </div>
		</div>
	  </div>
	</div>
	<!-- modal_rvb -->
	<div id="modal_blink" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples//blink/OttoDIY.png" style="height:333px"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_bp -->
	<div id="modal_bp" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/bp/OttoDIYPLUS.png" style="height:333px"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_buzzer -->
	<div id="modal_buzzer" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/buzzer/OttoDIY.png" style="height:333px;"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_matrice -->
	<div id="modal_matrice" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/matrice/OttoDIYH.png" style="height:333px"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_ligne -->
	<div id="modal_ligne" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/ligne/ligne.png" style="height:512px"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_hum -->
	<div id="modal_hum" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/hum/hum.png" style="height:512px"/>
				</div>
			</div>
		</div>
	</div>
	<!-- modal_potar -->
	<div id="modal_potar" class="modal modal-child" data-modal-parent="#exampleModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body">
					<img src="examples/potar/OttoDIY&PLUS.png" style="height:333px"/>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">	
	$(window).load(function(){$(".loading").fadeOut("slow")});
	ace.require("ace/ext/language_tools");
	var editor = ace.edit("content_code");
    editor.setTheme("ace/theme/sqlserver");
	editor.session.setTabSize(2);
	editor.setShowPrintMargin(false);
	require('../resources/app/index.js');
	require('../resources/app/factory.js');
</script>
</html>