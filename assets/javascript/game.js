// Creates an array that lists out all of the game words.
var computerChoices = ["kendrick", "kanye", "jayz", "lilwayne", "jcole", "biggie"];
var images = [
    "assets/images/kendrick.jpg",
    "assets/images/kanye.jpg",
    "assets/images/jay.jpg",
    "assets/images/wayne.jpg",
    "assets/images/jcole.jpg",
    "assets/images/biggie.jpg"
]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var wins = 0;
var guessesRemaining;
var computerGuess;
var correctAnswer;
var remainingLetters;
var answerArray = [];
var wrongGuesses = [];

var winsElement = document.getElementById('wins');
var wordElement = document.getElementById('word');
var guessesRemainingElement = document.getElementById('guessesRemaining');
var wrongGuessesElement = document.getElementById('wrongGuesses');
var winningImgElement = document.getElementById('winningImg')

// This function runs when the page loads and selects the game word.
window.onload = function() {
    wins = 0;
    reset();
};

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    for (i = 0; i < alphabet.length; i++){
        if (userGuess === alphabet[i]) {
            if (correctAnswer.includes(alphabet[i])) {
                for (j = 0; j < answerArray.length; j++) {
                    if (correctAnswer[j] === alphabet[i]) {
                        answerArray[j] = alphabet[i];
                        remainingLetters--;
                    }
                }
                console.log(remainingLetters);
            } else if (wrongGuesses.indexOf(userGuess) == -1) {
                guessesRemaining--;
                wrongGuesses.push(userGuess);
                console.log(wrongGuesses);
            }
        }
    }

    //increments wins and resets game
    if (remainingLetters <= 0) {
        wins++;
        winningImgElement.src = images[computerChoices.indexOf(computerGuess)];
        reset();

    }

    if (guessesRemaining <= 0){
        alert("You Lose.. Correct Answer Was " + computerGuess);
        reset();
    }

    wordElement.textContent = answerArray.join(" ");
    guessesRemainingElement.textContent = guessesRemaining
    wrongGuessesElement.textContent = wrongGuesses.join(" ");
    winsElement.textContent = "Wins: " + wins;


};

var reset = function() {
    guessesRemaining = 12;
    wrongGuesses = [];
    answerArray = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    correctAnswer = computerGuess.split("");
    console.log(correctAnswer);
    for (i = 0; i < correctAnswer.length; i++) {
       answerArray[i] = "_";
    }
    wordElement.textContent = answerArray.join(" ");
    remainingLetters = correctAnswer.length;
}