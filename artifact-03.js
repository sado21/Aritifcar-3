// var rHeight;
// var colorEven;
// var colorOdd;
// var symbol;

function createRhombus (pHeight, pColorEven, pColorOdd, pSymbol) {
	var pLine = "";
	var i = 1;
	var j;
	pHeight = Number (pHeight);
	
	if (isNaN (pHeight) || !(Number.isInteger(pHeight))) {
		pLine = "<h4>Please enter an integer (whole number) for the height of the rhombus.</h4>";
		document.getElementById('output').innerHTML = pLine;
		return;
	}
	
	if (pSymbol.length !== 1 || pSymbol === " ") {
		pLine = "<h4>Please enter a single character to make the rhombus with.<br>Also please esure that the charcter is not a space ( &nbsp ).</h4>";
		document.getElementById('output').innerHTML = pLine;
		return;
	}

	//Create top half
	while (i <= (pHeight+1)/2) {
		pLine += "<p>";
		
		//Create each line on the Rhombus
		for (j=1; j <= (pHeight); j++) {
			
			if ((j < (pHeight/2-i)+1) || (j > (pHeight/2+i))) {  //Should white fill characters be used
				pLine +="<span style='color: white ;'>" + pSymbol +"</span>";
			} else if ((j+1) % 2) {  //Is the position even or odd so we change the color
				//even
				pLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
			} else {
				//odd
				pLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
			}
			// debugger;
		}
		
		pLine += "</p>";
		document.getElementById('output').innerHTML = pLine; 
		i++;
		
	}
	
	//To make next line 1 unit smaller if the Rhombus is an oddnumber of units tall
	if (pHeight % 2) i--; 
	
	i--; 
	
	//Create bottom half
	while (i >= 1) {
		pLine += "<p>";
		
		//Create each line on the Rhombus
		for (j=1; j <= (pHeight); j++) {
			
			if ((j < (pHeight/2-i)+1) || (j > (pHeight/2+i))) {  //Should white fill characters be used
				pLine +="<span style='color: white ;'>" + pSymbol +"</span>";
			} else if ((j+1)   % 2) {  //Is the position even or odd so we change the color
				//even
				pLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
			} else {
				//odd
				pLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
			}
			// debugger;
		}
		
		pLine += "</p>";
	document.getElementById('output').innerHTML = pLine; 
	i--;
	
	}
