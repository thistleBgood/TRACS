window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];/*
			var textType = /*./;

			if (file.type.match(textType)) {*/
				var reader = new FileReader();

				reader.onload = function(e) {
					process(fileDisplayArea, reader.result);
					
				}

				reader.readAsText(file);
				console.log()
				/*
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}*/
		});
		
}


function process (fileDisplayArea, text) {
	
	while (fileDisplayArea.hasChildNodes()) {
		fileDisplayArea.removeChild(fileDisplayArea.lastChild);
	}
	
	console.log("reloading")
	
	lines = text.split("\n");
	
	for (i in lines) {
		var newNode = document.createElement("div");
		newNode.setAttribute("class", "statement");
		newNode.innerText = lines[i];
		newNode.setAttribute("id", "range_" + i)
		fileDisplayArea.appendChild(newNode);
	}
}
