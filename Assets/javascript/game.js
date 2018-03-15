// Names

window.onload = function () {
    var players = ["baberuth", "jimbrown", "hankaaron", "michaeljordan", "joemontana", "peytonnanning", "jerryrice", "larrybird", "tycobb", "derekjeter"];
    var playerName ;

    var selectedName = "";
    var lettersInName = [];
    
// Variables
var blanks = 0;
var totalLetters = [];
var incorrectGuesses = [];
var guessedLetters = [];
var numberGuesses = 9;

// counters
var wins = 0;

var losses = 0;

var parts = 7;

for (var i = 0; i < blanks; i++) {
    totalLetters.push("-");
}
console.log(totalLetters);
numberGuesses = 9;

function play (){
   playerName = players[Math.floor(Math.random() * (players.length))];
    console.log(playerName);
    for (var i = 0; i < playerName.length; i++) {
        letterSpaces.push("_");
    }
    
lettersInName = playerName.split("");
numBlanks = lettersInName.length;
console.log(numBlanks)
console.log(playerName)
    lettersInChosenName = chosenNord.split("");
 
totalLetters = [];
incorrectGuesses = [];
for (var i = 0; i < numSpaces; i++) {
    totalLetters.push("_");
      }
console.log(totalLetters);


document.getElementById("guesses-left").innerHTML = numGuesses;
 

document.getElementById("word-blanks").innerHTML = totalLetters.join(" ");
 
   
document.getElementById("wrong-guesses").innerHTML = incorrectGuesses.join(" ");
 }

 function letterCheck(letter) {
     var letterInName = false;
     for (var i = 0; i < numSpaces; i++) {
 
        if (selectedName[i] === letter) {
            letterInName = true; }
        }
    for (var j= 0; j < numSpaces; j++) {
        if (playerName[j] === letter) {
            totalLetters[j] = letter;
        }
    
    else {
        incorrectGuesses.push(letter);
    }
    numberGuesses--;

    function roundOver() {

    }

    
   
  document.getElementById("numberGuesses").innerHTML = numberGuesses;
 
  
  document.getElementById("spaces").innerHTML = totalLetters.join(" ");

  
  document.getElementById("incorrectguesses").innerHTML = incorrectGuesses.join(" ");

  if (lettersInChosenName).tostring() === totalGuesses.tostring ()) {
      winCounter++;
      alert("You won the game!!");
  }

  startGame();
}

  else if ()


//Game over
function gameOver() {
    if (letterSpaces.indexOf("_") === -1) {
        wins++;
    } else {
        losses++;
    }

    document.getElementById("winNumber").innerHTML = wins;

    document.getElementById("lossNumber").innerHTML = losses;

}

function clearGameOver() {
    return parts === 0;
}



// Setting up answer and start game
var answerArray = [];



function startGame() {
    partsLeft = 8;
    lettersGuessed = [];
    letterSpaces = [];

}

// document.getElementById('name').onkeyPress = function () {
//     myfunction()
// };


function updatedIncorrectGuess() {
    livesRemaining--;


    document.getElementsById("letterguessed").innerHTML = lettersGuessed.join("");


    document.getElementById("user-parts").innerHTML = partsLeft;
}

    

// capture key presses
// store previous guesses
// identify/store correct guesses
    // append correct guesses to blank spaces

// count number of guesses used (right / wrong)

// win condition / loss condition
// check answer against random word
// reset function
document.onkeyup = function (event) {
    console.log(event.key);
}

// console.log(updatedIncorrectGuess);
}

// Letters and Guesses



