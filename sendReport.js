function thanks() {
	var form = document.getElementById('req');
	form.style.display = "none";
}

var sent = document.getElementById('send').addEventListener("click", thanks);