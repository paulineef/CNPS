var h = document.getElementById('hamburger');
var c = document.getElementById('cross');
var menu = document.getElementById('menu');

menu.addEventListener('transitionend', function() {
	console.log('Transition done');
});

h.addEventListener('click', function(){
	document.getElementById('navi').classList.toggle('toggled');
	h.style.display = "none"; 
	c.style.display = "block";
	 
});

c.addEventListener('click', function(){
	document.getElementById('navi').classList.toggle('toggled');
	c.style.display = "none";
	h.style.display = "block";
	
});