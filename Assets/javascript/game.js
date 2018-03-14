// Name List
var players = ["Babe Ruth", "Jim Brown", "Hank Aaron", "Michael Jordan", "Joe Montana", "Peyton Manning", "Jerry Rice", "Larry Bird", "Ty Cobb", "Derek Jeter"];
// Letters and Guesses

// Name selection

var playerName = players[Math.floor(Math.random() * (players.length))];
console.log(playerName);
// Variables

var wins = 0;
console.log("wins", wins);
var losses = 0;
console.log("losses", losses);
var parts = 7;

var letterSpaces = [];


var randomName = "";

var guessedLetters = [];

var incorrectGuesses = [];


for (var i = 0; i < playerName.length; i++) {
    letterSpaces.push("_")
}


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

document.onkeyup = function (event) {
    console.log(event.key);
}
// console.log(updatedIncorrectGuess);