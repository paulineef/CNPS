var success = document.getElementById('message');
var form = document.getElementById('req');

function report() {
	var text = form.firstname.value + " " + form.lastname.value +" ("+form.email.value+") from " + form.company.value + " got a CNPS of " + form.CNPS.value + "and would like a report.";
	$.ajax({
		method: 'POST',
		url: 'https://hooks.slack.com/services/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',
		data: 'payload=' + JSON.stringify({
			text: text,
			username: 'CNPS Calculator',  // Osäker om man kan ha mellanslag i username
			icon_emoji: ':100:', // Du får välja helt själv, Simon avgör om du chose wisely eller poorly ;)
		}),
		success: function() {
			clear();	
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Borde inte hända nu
		},
		complete: function() {
			// Kommer du inte använda i detta fall heller
		},
	});
}

function thanks(e) {
	e.preventDefault();
	report();
	message.style.display = "block";
	req.style.display = "none";
}

function clear() {
	var input = document.querySelectorAll("input");
	for (var i = 0; i < input.length; i++) {
		input[i].value = "";
	}
}

var sent = document.getElementById('send').addEventListener("click", thanks);