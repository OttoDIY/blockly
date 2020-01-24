var { ipcRenderer } = require("electron")
var remote = require('electron').remote 
var fs = require('fs'), connexion, SerialPort;

window.addEventListener('load', function load(event) {
	if(localStorage.getItem("baudrate")) {
		document.getElementById('vitesse').value = localStorage.getItem("baudrate");
	}else{
		localStorage.setItem("baudrate",9600);
	}
	connexion = false;
	SerialPort = require("serialport")
	document.getElementById('btn_envoi').disabled=true
	document.getElementById('btn_efface').onclick = function(event) {
		document.getElementById('fenetre_term').textContent = ''
	}
	document.getElementById('btn_envoi').onclick = function(event) {
		var entree = document.getElementById('schbox').value
		if (s_p.isOpen) {
			document.getElementById('fenetre_term').innerHTML += entree+"<br>"
			s_p.write(entree)
		}
	}
	moniteur = document.getElementById('fenetre_term');
	document.getElementById('btn_quit').onclick = function(event) {
		var window = remote.getCurrentWindow() 
		window.close()
	}
	document.getElementById('btn_connect').onclick = function(event) {
		baud = parseInt(localStorage.getItem("baudrate"))
		com = localStorage.getItem("com")
		if (connexion){
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-play'> Open</span>"
			document.getElementById('btn_envoi').disabled=true
			s_p.close(function (err) { moniteur.innerHTML += '--- CLOSED SERIAL PORT ---<br>' })
			connexion = false
		} else {
			s_p = new SerialPort(com,{baudRate:baud, autoOpen:false})
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-pause'> Close</span>"
			document.getElementById('btn_envoi').disabled=false
			s_p.open(function (err) { if(!err) moniteur.innerHTML += '--- OPENED SERIAL PORT ---<br>'; else moniteur.innerHTML += '--- ERROR OPENING SERIAL PORT: '+err.message+' ---<br>' })
			connexion = true
			s_p.on('data', function(data){
				if (connexion){
					moniteur.innerHTML += data.toString().replace(/\r?\n/g, "<br />")
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