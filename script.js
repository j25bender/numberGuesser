var guessBox = document.querySelector('.guessBox');
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var number = document.querySelector('.number');
var clue = document.querySelector('.highLow')
var random = Math.floor(Math.random() * 100) + 1;
var counter = 0;
// var topRange = document.querySelector('.topRange');
// var bottomRange = document.querySelector('.bottomRange');

guessButton.addEventListener('click', guess);
clearButton.addEventListener('click', clear);
guessBox.addEventListener('keyup', enable);
// topRange.addEventListener('keyup', inRange);
// bottomRange.addEventListener('keyup', inRange);

// function inRange() {
// 	var topR = parseInt(topRange.value);
// 	var bottomR = parseInt(bottomRange.value);
// 	var answer = parseInt(guessBox.value);
//   if (answer < bottomR || answer > topR) {
//     alert('Parameter must be between ' + bottomR + ' and ' + topR + '.')
//   } else if (isNaN(topR || bottomR)){
//   	alert('You gots to enter a range yo.')
//   }
// }

function resetForm() {
    window.location.reload();
}

function guess() {
	var answer = parseInt(guessBox.value);
	
	counter++
	if (answer < random){
		clue.innerText = "too low"
	} if (answer > random) {
 		clue.innerText = "too high"
	} if (answer === random) {
		clue.innerText = "yes! You got it in " + counter + " turns."
	}
	number.innerText = answer;
	clear();
	enable();
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
}

console.log(random)
