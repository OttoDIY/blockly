var { ipcRenderer } = require("electron")
var remote = require('electron')
var fs = require('fs')
const {BrowserWindow} = require('electron').remote
window.addEventListener('load', function load(event) {
	var win = remote;
	var connexion = false;
	if (localStorage.getItem('baudrate')==null){
		alert('There was not a defined baudrate. Set it at default 9600 bauds');
		localStorage.setItem("baudrate","9600");
	}
	document.getElementById('btn_envoi').disabled=true
	document.getElementById('btn_efface').onclick = function() {
		document.getElementById('fenetre_term').textContent = ''
	}
	document.getElementById('btn_envoi').onclick = function() {
		var entree = document.getElementById('schbox').value
		if (s_p.isOpen) {
			document.getElementById('fenetre_term').innerHTML += entree+"<br>"
			s_p.write(entree)
		}
	}
	document.getElementById('btn_quit').onclick = function() {
		window.close()
	}
	document.getElementById('btn_connect').onclick = function(event) {
		var SerialPort = require("serialport")
		var line = SerialPort.parsers.Readline;
		var moniteur = document.getElementById('fenetre_term')
		var baud = parseInt(localStorage.getItem("baudrate"))
		var com = localStorage.getItem("com")
		s_p = new SerialPort(com,{baudRate:baud, autoOpen:false})
		var parser = s_p.pipe(new line({ delimiter: '\n' }))
		if (connexion){
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-play'> START</span>"
			document.getElementById('btn_envoi').disabled=true
			s_p.close(function (err) { moniteur.innerHTML += 'STOP<br>' })
			connexion = false
		} else {
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-pause'> Parar</span>"
			document.getElementById('btn_envoi').disabled=false
			s_p.open(function (err) { moniteur.innerHTML += 'Communication started!<br>' })
			connexion = true
			parser.on('data', function(data){
				if (connexion){
					moniteur.innerHTML += data + "<br>"
					moniteur.scrollTop = moniteur.scrollHeight;
					moniteur.animate({scrollTop: moniteur.scrollHeight})
				}
			})
		}
	}
	document.getElementById('btn_csv').onclick = function(event) {
		ipcRenderer.send('save-csv')
	}
	ipcRenderer.on('saved-csv', function(event, path){
		var code = document.getElementById('fenetre_term').innerHTML
		code = code.split('<br>').join('\n')
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
})