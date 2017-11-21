

function calc() {
	var rSum = 0;
	var ySum = 0;
	var gSum = 0;
	var rPercent = 0;
	var yPercent = 0;
	var gPercent = 0;

	var red = document.querySelectorAll(".red");

	for (var i = 0; i < red.length; i++) {
		rSum += +red[i].value || 0;  
	}

	var yellow = document.querySelectorAll(".yellow");

	for (var y = 0; y < yellow.length; y++) {
		ySum += +yellow[y].value || 0;  
	}

	var green = document.querySelectorAll(".green");

	for (var g = 0; g < green.length; g++) {
		gSum += +green[g].value || 0;  
	}

	var sum = rSum + ySum + gSum;

	if (sum === 0) {
		clear();
		return;
	}

	rPercent = Math.round(100*(rSum / sum));
	yPercent = Math.round(100*(ySum / sum));
	gPercent = Math.round(100*(gSum / sum));

	var result = (gPercent - rPercent); 

	document.getElementById("sum").value = sum; 
	document.getElementById("r").value = rPercent;
	document.getElementById("y").value = yPercent;
	document.getElementById("g").value = gPercent;
	document.getElementById("result").value = result;
}

function clear() {
	var input = document.querySelectorAll("input");
	for (var i = 0; i < input.length; i++) {
		input[i].value = "";
	}
}

var select = document.querySelectorAll(".red, .green, .yellow");

for (var i = 0; i < select.length; i++) {
	select[i].addEventListener("change", calc);
}

document.getElementById("clear").addEventListener("click", clear);