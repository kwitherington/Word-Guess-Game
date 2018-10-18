// Creates an array that lists out all of the game words.
var computerChoices = ["kendrick", "kanye", "jayz", "lilwayne", "jcole", "biggie"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var wins = 0;

var winsElement = document.getElementById('wins');
var wordElement = document.getElementById('word');
var guessesRemainingElement = document.getElementById('guessesRemaining');
var wrongGuessesElement = document.getElementById('wrongGuesses');

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (var i = 0; i < alphabet.length; i++) {
        if (computerGuess === alphabet[i]) {
            
        }
    }

  if (userGuess === 'r') {
      if (computerGuess === 'p') {
          loses++;
      } else if (computerGuess === 's') {
          wins++;
      } else {
          ties++;
      }
  } else if (userGuess === 'p') {
      if (computerGuess === 's') {
          loses++;
      } else if (computerGuess === 'r') {
          wins++;
      } else {
          ties++;
      }
  } else if (userGuess === 's') {
      if (computerGuess === 'r') {
          loses++;
      } else if (computerGuess === 'p') {
          wins++;
      } else {
          ties++;
      }
  }

  winsElement.textContent = "Wins: " + wins;
  losesElement.textContent = "Loses: " + loses;
  tiesElement.textContent = "Ties: " + ties;
  pushedElement.textContent = "You Played: " + userGuess;
  computerElement.textContent = "The Computer PLayed: " + computerGuess;
};