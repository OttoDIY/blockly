var { ipcRenderer } = require("electron")
var remote = require('electron').remote 

window.addEventListener('load', function load(event) {
	document.getElementById('btn_envoi').onclick = function(event) {
		var entree = document.getElementById('schbox').value
		var moniteur = document.getElementById('fenetre_repl')
		var chevron = '<span class="fa fa-chevron-right"></span><span class="fa fa-chevron-right"></span><span class="fa fa-chevron-right"></span>'
		moniteur.innerHTML += chevron + " " + entree + "<br>"
		moniteur.scrollTop = moniteur.scrollHeight;
		moniteur.animate({scrollTop: moniteur.scrollHeight})
	}
	document.getElementById('btn_quit').onclick = function(event) {
		var window = remote.getCurrentWindow() 
		window.close()
	}
})