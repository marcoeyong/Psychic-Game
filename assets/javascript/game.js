// Creates an array that lists out all of the options (wins, losses, and guesses left).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses. They start at 0 to 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

//activated after page loads, in this case computer guess and letters guessed.
window.onload = function() {

// Randomly chooses a choice from the options array. This is the Computer's guess.
var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//.push adds letterguessed to the end of arrars and returns to new array length
computerGuess.push(compGuess);

console.log(computerGuess[0]);
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

lettersGuessed.push(userGuess);
console.log(computerGuess[0]);

// This logic determines the outcome of the game (win/loss/guesses left), and increments the appropriate number
if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	
// alert player of game decision or result of guess.
	 alert('Thats right! You made a correct guess!');
	 
	 guessesLeft = 9;
	 lettersGuessed.length = 0;
	 computerGuess.length = 0;
 
	 var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 computerGuess.push(compGuess);
	 console.log(computerGuess[0]);
}

else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	
	// alert player of game decision or result of guess.
	alert('unfortunately, you made a wrong guess. please try again!');
	
	lettersGuessed.length = 0;
	computerGuess.length = 0;

	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses left.

var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
		  "<p>Your guesses so far: " + lettersGuessed + "</p>";
		  
// Set the inner HTML contents of the #game div to our html string
 document.querySelector("#game").innerHTML = html;
}