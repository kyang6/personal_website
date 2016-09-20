window.onload = function() {
	cb = function(){ 
		create_spritz(); 
	}; 
	var script=document.createElement('SCRIPT');
	script.src="/static/js/spritz.js"
	script.onload=cb; 
	document.body.appendChild(script);
}

