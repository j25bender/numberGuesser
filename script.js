var guessBox = document.querySelector('.guessBox');
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var number = document.querySelector('.number');
var clue = document.querySelector('.highLow')
var topRange = document.querySelector('.topRange');
var bottomRange = document.querySelector('.bottomRange');

// if(gameWon === true){
// 	topRange = topRange + 10;
// 	bottomRange = bottomRange - 10;
// }

guessButton.addEventListener('click', guess);
clearButton.addEventListener('click', clear);
guessBox.addEventListener('keyup', enable);
resetButton.addEventListener('click', resetForm);
topRange.addEventListener('keyup', setRange);
bottomRange.addEventListener('keyup', setRange);

function randomNum() {
	var random = Math.floor(Math.random() * topR) + 1;
}

function setRange() {
	var topR = parseInt(topRange.value);
	var bottomR = parseInt(bottomRange.value);
	//evalute(topR, bottomR)
}

function inRange() {
	var topR = parseInt(topRange.value);
	var bottomR = parseInt(bottomRange.value);
	var answer = parseInt(guessBox.value);
  if (answer < bottomR || answer > topR) {
    alert('Parameter must be between ' + bottomR + ' and ' + topR + '.')
  } else if (isNaN(topR || bottomR)){
  	alert('You gots to enter a range yo.')
  }
}

function resetForm() {
    window.location.reload();
}

function guess() {
	var answer = parseInt(guessBox.value);
	number.innerText = answer;
	evaluate();
	inRange();
}

function clear() {
	guessBox.value = "";
	guessBox.focus();
}

function enable() {
	if (guessBox.value === '') {
		guessButton.disabled = true;
		clearButton.disabled = true;
	} else {
		guessButton.disabled = false;
		clearButton.disabled = false;
	}
	isNan();
}

function isNan(){
	if (isNaN(guessBox.value)) {
	alert("Dude, that's not a number yo.")
	} 
}

function evaluate(top, bottom) {
	// var topR = parseInt(topRange.value);
	// var bottomR = parseInt(bottomRange.value);
	if (random < bottomR){
		random = bottomR + 1;
	}
	if (guessBox.value < random){
		clue.innerText = "Too Low!";
	} else if (guessBox.value > random){
		clue.innerText = "Too High!";
	} else if (guessBox.value == random){
		clue.innerText = "That's Spot On! Top Range +10! Bottom Range -10!";
		var newTopR = topRange.innerText + 10;
		var newBottomR = bottomRange.innerText - 10;
	}
	console.log(random);
	// console.log(newTopR.value);
	// console.log(newBottomR.value);
}