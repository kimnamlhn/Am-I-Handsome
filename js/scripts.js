
//random move button, không cho hover hoặc click

// k cần xài js, xài css là được rồi
// khi nào rảnh fix tiếp =))
function MoveButton()
{
	var height = window.innerHeight;
	var width = window.innerWidth;
	var yPos = Math.floor((Math.random() * height) + 1);
	var xPos = Math.floor((Math.random() * width) + 1);
	yPos=100;
	xPos=200;
	
	document.getElementById("buttonNo").style.position="absolute";
	document.getElementById("buttonNo").style.top= yPos;
	document.getElementById("buttonNo").style.right= xPos;
}

function press(element) {
    element.style.marginRight = "500px";
	element.style.backgroundColor = "red";
}
