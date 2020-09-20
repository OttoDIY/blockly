var { ipcRenderer, shell, clipboard } = require("electron")
var remote = require('electron').remote
var { exec } = require('child_process')
var sp = require('serialport')
var fs = require('fs')
var fs2 = require("fs-extra");

var path = require('path')
var appVersion = window.require('electron').remote.app.getVersion()
var tableify = require('tableify')
var chemin = process.resourcesPath
var checkBox = document.getElementById('verifyUpdate')
var portserie = document.getElementById('portserie')
var messageDiv = document.getElementById('messageDIV')
var detailDiv = document.getElementById('detailDIV')
var btn_detail = document.getElementById('btn_detail')
var btn_close_message = document.getElementById('btn_close_message')
const homedir = require('os').homedir();
const extract = require('extract-zip');
 
function instalarArduino(callback1, callback2, callback3,callback4,callback5){
    //código de la función principal
    callback1();
    //más código de la función principal
    callback2();
    //más código de la función principal
    callback3();
	//más código si fuera necesario
	callback4();
	callback5();
}
 
function callback1(){
        creaOttoBlockly();
    }
 
function callback2(){
       copiaArchivosCompilacion();
    }
 
function callback3(){
       actualizaTarjetasArduino();
	}   
	function callback4(){
extraeLibrerias();	 }

	 function callback5(){
		terminado();
	 }   
 
function creaOttoBlockly(){
	//Creamos un directorio auxiliar en home
alert('Es la primera vez que ejecutas este programa. Hay que utilizar algunas librerías. Espera '+
'unos segundos y vuelve a compilar (si te da mensaje de error, espera un poco más y vuelve a intentarlo)...');
	var dir=homedir+'/.OttoBlockly';
	fs.mkdirSync(dir,function(err,stdout){
		if (err) {return console.error(err);}
		else{console.log('1. directorio creado correctamente: '+stdout);
	};
	});
	

}
function copiaArchivosCompilacion(){
	var fuente=__dirname+('/compilation/'); 
	var dir=homedir+'/.OttoBlockly';

	fs2.copy(fuente, dir, function (err,stdout) {
		if (err) return console.error(err)
		console.log('2. OttoBlockly creado y carpeta de compilación creada!'+stdout);
	  })
	

}
function actualizaTarjetasArduino(){
	console.log('directorio: '+__dirname+'/compilation/arduino/');
	exec('./arduino-cli core update-index && ./arduino-cli core install arduino:avr', {cwd: __dirname+'/compilation/arduino/'}, function(err, stdout, stderr){
		if (err) console.log('error installando arduino: ' +err);
		
	console.log(stdout);
	});

}
function extraeLibrerias(){
	var dir=homedir+'/.OttoBlockly';
	var source=__dirname+'/compilation/arduino/libraries.zip';
	var exct=null;
	try {
		console.log('4. iniciando extracción');
		 extract(source, { dir: homedir+'/Arduino/' },function(err,stdout){
			 if (err){
				 console.log(err);
			 }else{
				console.log(stdout);
				alert('4. librerías extraídas. Los robots deberían funcionar con normalidad')


			 }
		 })
		
	
	  } catch (err) {
		// handle any errors
		console.log(err);
	  }
	 
	}

function terminado(){
	console.log('5. vamos terminando');

/* 	fs.writeFile(homedir+'/.masaylo/arduino/sketch/sketch.ino', data, function(err,stdout){
		if (err) return console.log('error: '+err)
		console.log('copiando sketch: '+stdout);
		alert('ahora sí se ha copiado el sketch. Puedes cargarlo en tarjeta');
	}) */


}
window.addEventListener('load', function load(event) {
	var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
	var window = remote.getCurrentWindow()
	if(!window.isMaximized())window.maximize()
	function itsOK(value){
		messageDiv.style.color = '#009000'
		if (value) {
			messageDiv.innerHTML = Blockly.Msg.upload + ': OK'
			btn_close_message.style.display = "inline"
			if (localStorage.getItem('prog') != "python") btn_detail.style.display = "block"
		} else {
			messageDiv.innerHTML = Blockly.Msg.check + ': OK'
			btn_close_message.style.display = "inline"
			if (localStorage.getItem('prog') != "python") btn_detail.style.display = "block"
		}
	}
	
	var checkBox = document.getElementById('verifyUpdate')
	var portserie = document.getElementById('portserie')
	var messageDiv = document.getElementById('messageDIV')
	localStorage.setItem("verif",false)
	document.getElementById('versionapp').textContent = " OttoBlockly v" + appVersion
	function uploadOK(){
		messageDiv.style.color = '#009000'
		messageDiv.innerHTML = Blockly.Msg.upload + ': OK' + quitDiv
	}
	$('#btn_forum').on('click', function(){
		shell.openExternal('https://wikifactory.com/+OttoDIY/forum')
	})
	$('#btn_site').on('click', function(){
		shell.openExternal('https://www.ottodiy.com/')
	})
	$('#btn_contact').on('click', function(){
		shell.openExternal('https://www.ottodiy.com/#contact-us')
	})
	$('#portserie').mouseover(function(){
		sp.list().then(ports =>  {
			var nb_com = localStorage.getItem("nb_com"), menu_opt = portserie.getElementsByTagName('option')
			if(ports.length > nb_com){
				ports.forEach(function(port){
					if (port.vendorId){
						var opt = document.createElement('option')
						opt.value = port.path
						opt.text = port.path
						portserie.appendChild(opt)
						localStorage.setItem("com",port.path)
					}
				})
				localStorage.setItem("nb_com",ports.length)
				localStorage.setItem("com",portserie.options[1].value)
			}
			if(ports.length < nb_com){
				while(menu_opt[1]) {
					portserie.removeChild(menu_opt[1])
				}
				localStorage.setItem("com","com")
				localStorage.setItem("nb_com",ports.length)
			}
		});
	})
	$('#btn_quit').on('click', function(){
		window.close()
	})
	$('#btn_max').on('click', function(){
		if(window.isMaximized()){
			window.unmaximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-maximize fa-lg'></span>"
		} else {
			window.maximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-restore fa-lg'></span>"
		}
	})
	$('#btn_min').on('click', function(){
		window.minimize()
	})
	$('#btn_copy').on('click', function(){
		clipboard.writeText($('#pre_previewArduino').text())
	})
	$('#btn_bin').on('click', function(){
		if (localStorage.getItem('verif') == "false"){
			$("#message").modal("show")
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.verif + quitDiv
			return
		}
		localStorage.setItem("verif",false)
		ipcRenderer.send('save-bin') 
	})
	$.ajax({
	    cache: false,
	    url: "../config.json",
	    dataType: "json",
	    success : function(data) {
			$.each(data, function(i, update){
				if (update=="true") {
					$('#verifyUpdate').prop('checked', true)
					checkBox.dispatchEvent(new Event('change'))
					ipcRenderer.send("version", "")
				} else {
					$('#verifyUpdate').prop('checked', false)
					checkBox.dispatchEvent(new Event('change'))
				}
			})
		}
	})
	checkBox.addEventListener('change', function(event){
		if (event.target.checked) {
			fs.writeFile('config.json', '{ "update": "true" }', function(err){
				if (err) return console.log(err)
			})
		} else {
			fs.writeFile('config.json', '{ "update": "false" }', function(err){
				if (err) return console.log(err)
			})
		}
	})
	sp.list().then(ports => {
		var opt = document.createElement('option')
		opt.value = "com"
		opt.text = Blockly.Msg.com1
		portserie.appendChild(opt)
		ports.forEach(function(port) {
			if (port.vendorId){
				var opt = document.createElement('option')
				opt.value = port.path
				opt.text = port.path
				portserie.appendChild(opt)
			}
		});
		localStorage.setItem("nb_com",ports.length)
		if (portserie.options.length > 1) {
			portserie.selectedIndex = 1
			localStorage.setItem("com",portserie.options[1].value)
		} else {
			localStorage.setItem("com","com")
		}
	})
	sp.list().then(ports => {
		var messageUSB = document.getElementById('usb')
		if (ports.length === 0) {
			messageUSB.innerHTML = "Aucun port n'est disponible"
		} else {
			tableHTML = tableify(ports)
			messageUSB.innerHTML = tableHTML
		}
	});
	$('#btn_version').on('click', function(){
		$('#aboutModal').modal('hide')
		ipcRenderer.send("version", "")
	})
	$('#btn_term').on('click', function(){
		if (portserie.value=="com"){
			$("#message").modal("show")
			messageDiv.style.color = '#ff0000'
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
			return
		}
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send("repl", "") } else { ipcRenderer.send("prompt", "") }
	})
	$('#btn_factory').on('click', function(){
		ipcRenderer.send("factory", "")	
	})
	$('#btn_verify').on('click', function(){
		if (localStorage.getItem('content') == "off") {
			var data = editor.getValue()
		} else {
			var data = $('#pre_previewArduino').text()
		}
		var carte = localStorage.getItem('card')
		var prog = localStorage.getItem('prog')
		var com = portserie.value
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if (prog == "python") {
			fs.writeFile('./compilation/python/py/sketch.py', data, function(err){
				if (err) return console.log(err)
			})
			exec('python -m pyflakes ./py/sketch.py', {cwd:"./compilation/python"}, function(err, stdout, stderr){
				if (stderr) {
					rech=RegExp('token')
					if (rech.test(stderr)){
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = Blockly.Msg.error + quitDiv
					} else {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
					}
					return
				}
				messageDiv.style.color = '#009000'
				messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
			})
		} else {
			if(process!="win32"){
	
				var dir=homedir+'/.OttoBlockly';
				if (!fs.existsSync(dir)){
			
			messageDiv.innerHTML='Espere unos segundos y vuelva a intentar compilar';
			btn_close_message.style.display = "inline";
			
			//creaMasaylo().then(copiaArchivosCompilacion().then(actualizaTarjetasArduino().then(extraeLibrerias().then(terminado(data)))));
			instalarArduino(callback1, callback2, callback3,callback4,callback5);
			
			return;	
			}
			
			}
			
			fs.writeFile(homedir+'/.OttoBlockly/arduino/sketch/sketch.ino', data, function(err){
				if (err) return console.log('error nuevo'+homedir+'/.OttoBlocklylo/arduino/sketch/sketch.ino')
			})
			exec('./verify.sh ' + carte, {cwd: homedir+'/.OttoBlockly/arduino/'}, function(err, stdout, stderr){
				if (err) console.log('err0r: ' +carte);
				if (stderr) {
					fs.realpath(homedir+'.OttoBlockly/arduino/sketch/sketch.ino' , function(err, path){

						var erreur = stderr.toString().replace("exit status 1","")
						var error = erreur.replace(/error:/g,"").replace(/token/g,"")
						var errors = error.split(path)
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = "ERROR DE COMPILACIÓN"
						errors.forEach(function(e){
							messageDiv.innerHTML += e + "<br>"+carte+"<br>"
						})
						btn_close_message.style.display = "inline"
					})
					return
				}
				localStorage.setItem('detail', stdout.toString())
				messageDiv.innerHTML = Blockly.Msg.check + ': OK'
			btn_close_message.style.display = "inline"
			if (localStorage.getItem('prog') != "python") btn_detail.style.display = "block"
			})
		}
		localStorage.setItem("verif",true)
	})
	$('#btn_flash').on('click', function(){
		
		var data = $('#pre_previewArduino').text()
		var carte = localStorage.getItem('card')
		var prog = profile[carte].prog
		var speed = profile[carte].speed
		var cpu = profile[carte].cpu
		var com = portserie.value 
		if ( com == "com" ){
			messageDiv.style.color = '#ff0000'
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
			return
		}
		if ( localStorage.getItem('verif') == "false" ){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
			fs.writeFile(homedir+'/.OttoBlockly/arduino/sketch/sketch.ino', data, function(err){
				if (err) return console.log('error nuevo'+homedir+'/.OttoBlocklylo/arduino/sketch/sketch.ino')
			})
	
			console.log('No se había compilado. Verificando...')
			if(process!="win32"){
	
				var dir=homedir+'/.OttoBlockly';
				if (!fs.existsSync(dir)){
			
			messageDiv.innerHTML='Espere unos segundos y vuelva a intentar compilar';
			btn_close_message.style.display = "inline";
			
			//creaMasaylo().then(copiaArchivosCompilacion().then(actualizaTarjetasArduino().then(extraeLibrerias().then(terminado(data)))));
			instalarArduino(callback1, callback2, callback3,callback4,callback5);
			
			return;	
			}
			
			}
			exec('./verify.sh ' + carte, {cwd: homedir+'/.OttoBlockly/arduino/'}, function(err, stdout, stderr){
				if (stderr) {
					rech=RegExp('token')
					if (rech.test(stderr)){
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = Blockly.Msg.error + quitDiv
					} else {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
					}
					return
				}
				messageDiv.style.color = '#009000'
				messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
			
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
			console.log('grabando hex');
			var dir2=homedir+('/.OttoBlockly/arduino/flash.sh ');
			console.log('en '+dir2);
			exec(dir2 + com+ ' ' + carte , {cwd: homedir+'/.OttoBlockly/arduino'} , function(err, stdout, stderr){
				console.log("Puerto: "+com)
				var erreur = stderr.toString().replace(/##################################################/g,"").replace(/|/g,"")
				var errors = erreur.split("avrdude:")
				localStorage.setItem('detail', errors)
				if (err) {
					console.log('error flasheando');
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString() + "<br> "
					btn_close_message.style.display = "inline"
					return
				}
				itsOK(1)
			})
		 })
			localStorage.setItem("verif",false)
			return
		}
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if ( prog == "python" ) {
			if ( cpu == "cortexM0" ) {
				var cheminFirmware = "./compilation/python/firmware.hex"
				var fullHexStr = ""
				exec('wmic logicaldisk get volumename', function(err, stdout){
					if (err) return console.log(err)
					localStorage.setItem("volumename", stdout.split('\r\r\n').map(value => value.trim()))
				})
				exec('wmic logicaldisk get name', function(err, stdout){
					if (err) return console.log(err)
					localStorage.setItem("name", stdout.split('\r\r\n').map(value => value.trim()))
				})
				var volume = localStorage.getItem("volumename")
				var drive = localStorage.getItem("name")
				var volumeN = volume.split(',')
				var driveN = drive.split(',')
				var count = volumeN.length
				var disk = ""
				for (var i = 0 ; i < count ; i++) {
					if (volumeN[i]=="MICROBIT") disk = driveN[i]
				}
				if (disk!="") {
					fs.readFile(cheminFirmware, function(err, firmware){
						firmware = String(firmware)
						fullHexStr = upyhex.injectPyStrIntoIntelHex(firmware, data)
						fs.writeFile(disk + '\sketch.hex', fullHexStr, function(err){
							if (err) {
								messageDiv.style.color = '#ff0000'
								messageDiv.innerHTML = err.toString() + quitDiv
							}
						})
					})
					setTimeout(uploadOK, 7000)
				} else {
					messageDiv.style.color = '#000000'
					messageDiv.innerHTML = 'Connecter la carte microBit !' + quitDiv
				}
			} else {
				exec( 'python -m ampy -p ' + com + ' -b 115200 -d 1 run --no-output ./py/sketch.py', {cwd: "./compilation/python"} , function(err, stdout, stderr){
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
						return
					}
					uploadOK()
				})
			}
		} else {
			var dir2=homedir+('/.OttoBlockly/arduino/flash.sh ');
			console.log('cargando desde: '+dir2);
			exec(dir2 + com+ ' ' + carte , {cwd: homedir+'/.OttoBlockly/arduino'} , function(err, stdout, stderr){
				console.log("Puerto: "+com)
				var erreur = stderr.toString().replace(/##################################################/g,"").replace(/|/g,"")
				var errors = erreur.split("avrdude:")
				localStorage.setItem('detail', errors)
				if (err) {
					console.log('error flasheando');
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString() + "<br> "
					btn_close_message.style.display = "inline"
					return
				}
				itsOK(1)
			})
		}
		localStorage.setItem("verif",false)
	})
	$('#btn_detail').on('click', function(){
		detailDiv.innerHTML = localStorage.getItem('detail')
	})
	$('#btn_close_message').on('click', function(){
		detailDiv.innerHTML = ""
		localStorage.setItem('detail', "")
		btn_detail.style.display = "none"
		btn_close_message.style.display = "none"
		$('#message').modal('hide')
	})
	$('#btn_saveino').on('click', function(){
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
	})
	$('#btn_saveXML').on('click', function(){
		if (localStorage.getItem("content") == "on") {
	
			ipcRenderer.send('save-bloc') 
		} else {
			if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
		}
	})
	ipcRenderer.on('saved-ino', function(event, path){
		var code = $('#pre_previewArduino').text()
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-py', function(event, path){
		var code = $('#pre_previewArduino').text()
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-bloc', function(event, path){
		if (path === null) {
			return
		} else {
			var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
			var toolbox = localStorage.getItem("toolbox")
			if (!toolbox) {
				toolbox = $("#toolboxes").val()
			}
			if (toolbox) {
				var newel = document.createElement("toolbox")
				newel.appendChild(document.createTextNode(toolbox))
				xml.insertBefore(newel, xml.childNodes[0])
			}
			var toolboxids = localStorage.getItem("toolboxids")
			if (toolboxids === undefined || toolboxids === "") {
				if ($('#defaultCategories').length) {
					toolboxids = $('#defaultCategories').html()
				}
			}
			var code = Blockly.Xml.domToPrettyText(xml)
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-bin', function(event, path){
		if (path === null) {
			return
		} else {
			var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
			var toolbox = localStorage.getItem("toolbox")
			if (!toolbox) {
				toolbox = $("#toolboxes").val()
			}
			if (toolbox) {
				var newel = document.createElement("toolbox")
				newel.appendChild(document.createTextNode(toolbox))
				xml.insertBefore(newel, xml.childNodes[0])
			}
			var toolboxids = localStorage.getItem("toolboxids")
			if (toolboxids === undefined || toolboxids === "") {
				if ($('#defaultCategories').length) {
					toolboxids = $('#defaultCategories').html()
				}
			}
			var code = Blockly.Xml.domToPrettyText(xml)
			var res = path.split(".")
			fs.writeFile(res[0]+'.bloc', code, function(err){
				if (err) return console.log(err)
			})
			fs.copyFile('./compilation/arduino/build/sketch.ino.with_bootloader.hex', res[0]+'_with_bootloader.hex', (err) => {if (err) throw err})
			fs.copyFile('./compilation/arduino/build/sketch.ino.hex', res[0]+'.hex', (err) => {if (err) throw err})
			fs.copyFile('./compilation/arduino/ino/sketch.ino', res[0]+'.ino', (err) => {if (err) throw err})
		}
	})
})