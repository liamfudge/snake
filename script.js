const playingBox = document.getElementById('playingBox');

const moveForward = 20;
const moveBack = -20;
const milliseconds = 100;
const widest = 760;
const smallest = 0;

var Xpos = 120;
var Ypos = 120;

var firstKey = 0;

// keypressing
	window.addEventListener('keypress', movement);
	var dValue = 0;
	var aValue = 0;
	var sValue = 0;
	var wValue = 0;
	function movement() {
		var keyName = event.key;
		if (keyName === "d") {
			if (dValue === 1 || aValue === 1) {
			} else {
				isFirstKey();
				dValue = 1;
				aValue = 0;
				sValue = 0;
				wValue = 0;
				moveR(dot1, 0, moveForward);
				
				if (firstKey > 1) {
					for (i = 0; i < globalCount; i++) {
						var oldDiv = document.getElementById('id' + i);
						playingBox.removeChild(oldDiv);
					}
					globalCountCheck();
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveXDelay(div, milliseconds*(i+1));
					}
				} else {
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveXDelay(div, milliseconds*(i+1));
					}
				}
				
			}
		} else if (keyName === "a") {
			if (dValue === 1 || aValue ===1) {
			} else {
				isFirstKey();
				dValue = 0;
				aValue = 1;
				sValue = 0;
				wValue = 0;
				moveL(dot1, 0, moveBack);
				if (firstKey > 1) {
					for (i = 0; i < globalCount; i++) {
						var oldDiv = document.getElementById('id' + i);
						playingBox.removeChild(oldDiv);
					}
					globalCountCheck();
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveXDelay(div, milliseconds*(i+1));
					}
				} else {
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveXDelay(div, milliseconds*(i+1));
					}
				}

			}
		} else if (keyName === "s") {
			if (sValue === 1 || wValue === 1) {
			} else {
				isFirstKey();
				dValue = 0;
				aValue = 0;
				sValue = 1;
				wValue = 0;
				moveD(dot1, 0, moveForward);
				if (firstKey > 1) {
					for (i = 0; i < globalCount; i++) {
						var oldDiv = document.getElementById('id' + i);
						playingBox.removeChild(oldDiv);
					}
					globalCountCheck();
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveYDelay(div, milliseconds*(i+1));
					}
				} else {
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveYDelay(div, milliseconds*(i+1));
					}
				}
			}
		} else if (keyName === "w") {
			if (sValue === 1 || wValue === 1) {
			} else {
				isFirstKey();
				dValue = 0;
				aValue = 0;
				sValue = 0;
				wValue = 1;
				moveU(dot1, 0, moveBack);
				if (firstKey > 1) {
					for (i = 0; i < globalCount; i++) {
						var oldDiv = document.getElementById('id' + i);
						playingBox.removeChild(oldDiv);
					}
					globalCountCheck();
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveYDelay(div, milliseconds*(i+1));
					}
				} else {
					for (i = 0; i < globalCount; i++) {
						var id = 'id' + i;
						var div = document.createElement("div");
						div.setAttribute("id", id);
						div.setAttribute("class", "dot1");
						div.style.left = Xpos + 'px';
						div.style.top = Ypos + 'px';
						playingBox.appendChild(div);
						moveYDelay(div, milliseconds*(i+1));
					}
				}
			}
		}
	}

// movement functions
	function moveR(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
				if (sValue === 1 || wValue === 1) {
					clearInterval(id);
				} else if(Xpos === widest || Xpos === smallest || Ypos === widest || Ypos === smallest) {
					clearInterval(id);
					youLoose();
				} else if (Xpos === randomX && Ypos === randomY) {
					youWin();
				} else {
					Xpos = Xpos + c;
					document.getElementById(a.id).style.left = Xpos + 'px';
				}
		}
		return Xpos;
	}

	function moveL(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
				if (sValue === 1 || wValue === 1) {
					clearInterval(id);
				} else if(Xpos === widest || Xpos === smallest || Ypos === widest || Ypos === smallest) {
					clearInterval(id);
					youLoose();
				} else if (Xpos === randomX && Ypos === randomY) {
					youWin();
				} else {
					Xpos = Xpos + c;
					document.getElementById(a.id).style.left = Xpos + 'px';
				}
		}
		return Xpos;
	}

	function moveXDelay(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
			var position = Xpos;
			setTimeout(function() {
				document.getElementById(a.id).style.left = position + 'px';
			}, b);
		}
	}


	function moveD(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
				if (aValue === 1 || dValue === 1) {
					clearInterval(id);
				} else if(Xpos === widest || Xpos === smallest || Ypos === widest || Ypos === smallest) {
					clearInterval(id);
					youLoose();
				} else if (Xpos === randomX && Ypos === randomY) {
					youWin();
				} else {
					Ypos = Ypos + c;
					document.getElementById(a.id).style.top = Ypos + 'px';
				}
		}
		return Ypos;
	}
	function moveU(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
				if (aValue === 1 || dValue === 1) {
					clearInterval(id);
				} else if(Xpos === widest || Xpos === smallest || Ypos === widest || Ypos === smallest) {
					clearInterval(id);
					youLoose();
				} else if (Xpos === randomX && Ypos === randomY) {
					youWin();
				} else {
					Ypos = Ypos + c;
					document.getElementById(a.id).style.top = Ypos + 'px';
				}
		}
		return Ypos;
	}


	function moveYDelay(a, b, c) {
		var id = setInterval(frame, milliseconds);
		function frame() {
			var position = Ypos;
			setTimeout(function() {
				document.getElementById(a.id).style.top = position + 'px';
			}, b);
		}
	}

// random numbers
	randomNumber();
	var randomX;
	var randomY;
	function randomNumber() {
		var ran = Math.random()*widest;
		var round20X = Math.round(ran / 20) * 20;
		var ran2 = Math.random()*widest;
		var round20Y = Math.round(ran2 / 20) * 20;
		if (round20X === smallest || round20Y === smallest) {
			round20Y = round20Y + 40;
			round20X = round20X + 40;
		} else if (round20X === widest || round20Y === widest) {
			round20Y = round20Y - 40;
			round20X = round20X - 40;
		}
		console.log('x random number is ', round20X, ' and Y random number is ', round20Y);
		setTimeout(function() {
			createNewDiv();
		}, 10);
		return (randomY = round20Y) && (randomX = round20X);
	}


// create div box
	function createNewDiv() {
		var id = 'newid1';
		var div = document.createElement("div");
		div.setAttribute("id", id);
		div.setAttribute("class", "dot2");
		div.style.left = randomX + 'px';
		div.style.top = randomY + 'px';
		playingBox.appendChild(div);
	}
// delete div box
	function deleteDiv() {
		var div = document.getElementById('newid1');
		playingBox.removeChild(div);
	}



var globalCount = 5;
// Snake count
	var snakeCount = 5;
	function addToSnakeCount() {
		console.log('global count is ', snakeCount);
		return snakeCount = snakeCount + 1;
	}

	function globalCountCheck() {
		globalCount = snakeCount;
		return globalCount;
	}

function isFirstKey() {
	return firstKey = firstKey + 1;
}

function youWin() {
	addToNumberValue();
	addToSnakeCount();
	deleteDiv();
	randomNumber();
}


// NumberVlaue
	var numberValue = 0;
	function addToNumberValue() {
		numberValue = 1;
		console.log(numberValue);
		return numberValue;
	}
	function resstoreNumberValue() {
		numberValue = 0;
		console.log(numberValue);
		return numberValue;
	}


function youLoose() {
	if(alert('you loose retry')){}
	else window.location.reload();
}