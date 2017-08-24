var bottomR = 1;
var bottomRange = document.querySelector('.user-min-input');
var clearButton = document.querySelector('.clear-button');
var clue = document.querySelector('.highLow')
var guessButton = document.querySelector('.guess-button');
var guessInput = document.querySelector('.guess-input');
var random = randomNum(100, 1);
var resetButton = document.querySelector('.reset-button');
var submitRangeButton = document.querySelector('#submit-range');
var topRange = document.querySelector('.user-max-input');
var topR = 100;
var number = document.querySelector('.number');

console.log(random)

guessInput.addEventListener('keyup', enable);
guessButton.addEventListener('click', guess);
submitRangeButton.addEventListener('click', setRange);
clearButton.addEventListener('click', clear);
resetButton.addEventListener('click', resetForm);


function guess() {
	var userGuess = parseInt(guessInput.value);
	number.innerText = userGuess;
	evaluate(userGuess);
	inRange();
	clear();
	console.log(random);
}

function enable() {
	if (guessInput.value === '') {
		guessButton.disabled = true;
		clearButton.disabled = true;
	} else {
		guessButton.disabled = false;
		clearButton.disabled = false;
	}
	isNan();
}

function isNan(){
	if (isNaN(guessInput.value)) {
	alert("Dude, that is not a number yo.")
	clear();
	} 
}

function randomNum(topR, bottomR) {
	return Math.floor(Math.random() * topR) + 1;
}

function resetForm() {
    window.location.reload();
}

function clear() {
	guessInput.value = '';
	guessInput.focus();
}


function setRange() {
	topR = parseInt(topRange.value);
	bottomR = parseInt(bottomRange.value);
	console.log(topR, bottomR);
	random = randomNum(topR, bottomR);
}

function inRange() {
	var topR = parseInt(topRange.value);
	var bottomR = parseInt(bottomRange.value);
	var answer = parseInt(guessInput.value);
    if (answer < bottomR || answer > topR) {
      alert('Parameter must be between ' + bottomR + ' and ' + topR + '.')
    } else if (isNaN(topR || bottomR)) {
  	  alert('You gots to enter a range yo.')
    }
}

function evaluate(userGuess) {
	console.log(bottomR, topR)
	if (userGuess < random){
		clue.innerText = 'Too Low!';
	} else if (userGuess > random){
		clue.innerText = 'Too High!';
	} else if (userGuess === random){
		clue.innerText = 'That is Spot On! \n Top Range +10! \n Bottom Range -10!';
		random = randomNum(topR += 10, bottomR -= 10);
		console.log(random);
	}
}