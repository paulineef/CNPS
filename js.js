		function calc() {
				var rSum = 0;
   				var ySum = 0;
   				var gSum = 0;
   				var rPercent = 0;
   				var yPercent = 0;
   				var gPercent = 0;

   				function rSum(){
					rSum += +$(this).value() || 0; //Denna
				};
   				
				var red = document.querySelectorAll(".red");

				for (var i = 0; i < red.length; i++) {
					var array = red[i];
					array.rSum(); 
				};


    			document.getElementByClassName(".yellow").each(function(){
					ySum += +$(this).value() || 0; //denna
				});

				document.getElementByClassName(".green").each(function(){
					gSum += +$(this).value() || 0; //denna
				});

				var sum = rSum + ySum + gSum;
				if (sum === 0) {
					// clear and return
				}
				rPercent = Math.round(100*(rSum / sum));
				yPercent = Math.round(100*(ySum / sum));
				gPercent = Math.round(100*(gSum / sum));

				var result = (gPercent - rPercent); 

				document.getElementById("#sum").value(sum);
    			document.getElementById("#r").value(rPercent);
    			document.getElementById("#y").value(yPercent);
    			document.getElementById("#g").value(gPercent);
    			document.getElementById("#result").value(result);

    			document.getElementByClassName(".clear").click(function() {
    				document.querySelectorAll("input").value("");
				});
			};

			var select = document.querySelectorAll("input.red, input.green, input.yellow");

			for (var i = 0; i < select.length; i++) {
				select[i].addEventListener("change", calc);
			};