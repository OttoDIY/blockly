const remote = require('electron').remote 

window.addEventListener('load', function load(event) {
	document.getElementById('btn_quit').onclick = function(event) {
		var window = remote.getCurrentWindow() 
		window.close()
	}
	document.getElementById('btn_max').onclick = function(event) {
		var window = remote.getCurrentWindow()
		if(window.isMaximized()){
            window.unmaximize()
        }else{
            window.maximize()
        }
	}
	document.getElementById('btn_min').onclick = function(event) {
		var window = remote.getCurrentWindow() 
		window.minimize()
	}
})