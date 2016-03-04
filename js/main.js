"use strict";
console.log("O~~          O~~~~           O~         O~~~~~      O~~  O~~~     O~~     O~~~~   ")
console.log("O~~        O~~    O~~       O~ ~~       O~~   O~~   O~~  O~ O~~   O~~   O~    O~~ ")
console.log("O~~      O~~        O~~    O~  O~~      O~~    O~~  O~~  O~~ O~~  O~~  O~~        ")
console.log("O~~      O~~        O~~   O~~   O~~     O~~    O~~  O~~  O~~  O~~ O~~  O~~        ")
console.log("O~~      O~~        O~~  O~~~~~~ O~~    O~~    O~~  O~~  O~~   O~ O~~  O~~   O~~~~")
console.log("O~~        O~~     O~~  O~~       O~~   O~~   O~~   O~~  O~~    O~ ~~   O~~    O~ ")
console.log("O~~~~~~~~    O~~~~     O~~         O~~  O~~~~~      O~~  O~~      O~~    O~~~~~   ")

// Calling all Global variables
var started = false;
var header = document.querySelector('header');
var menu = document.querySelector('nav');

var displayGameTable = document.querySelector('#gameTable');

// Calling all Global variables of player one
var randomOne = Math.ceil(Math.random() * 100);
var playerOneHits = randomOne + "%";

var playerOneWidth = document.querySelectorAll('.playerOne');
for (var i = 0; i < playerOneWidth.length; i++) {
  playerOneWidth[i].style.width = playerOneHits;
}

// Calling all Global variables of player Two
var randomTwo = Math.ceil(Math.random() * 100);
var playerTwoHits = randomTwo + "%";

var playerTwoWidth = document.querySelectorAll('.playerTwo');
for (var i = 0; i < playerTwoWidth.length; i++) {
  playerTwoWidth[i].style.width = playerTwoHits;
}

//////////////////////
//                  //
//  Lets lets play  //
//                  //
//////////////////////

var playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
  start();
});

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// Load up everything that you need for the games. ( Your Treasure Box )  //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

function start() {
  console.log("Let's Play <--- WIDTH --->");
  started = true;
  gameReset();
  gameControl();
}

//////////////////////////////////////
//                                  //
//  Reset the game to a fresh game  //
//                                  //
//////////////////////////////////////

function gameReset() {

  console.log("Is Header in the MFH!!!");
  header.style.display = 'flex';
  menu.style.display = 'none';

  randomOne = 0;
  for (var i = 0; i < playerOneWidth.length; i++) {
    playerOneWidth[i].style.width = randomOne + '%';
  }
  randomTwo = 0;
  for (var i = 0; i < playerTwoWidth.length; i++) {
    playerTwoWidth[i].style.width = randomTwo + '%';
  }

}

/////////////////////////////////////////////
//                                         //
//  Press the keyboard "Tap" and "Return"  //
//                                         //
/////////////////////////////////////////////

function gameControl() {
  window.addEventListener("keydown", function(e){

    // Player One, Press Tab to play.
    if(e.keyCode === 9 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player One" + randomOne);
      randomOne += 10;
      for (var i = 0; i < playerOneWidth.length; i++) {
        playerOneWidth[i].style.width = randomOne + '%';
      }
    }

    // Player Two, Press Enter to play.
    if(e.keyCode === 13 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player Two" + randomTwo);
      randomTwo += 10;
      for (var i = 0; i < playerTwoWidth.length; i++) {
        playerTwoWidth[i].style.width = randomTwo + '%';
      }
    }

    // Display the game score for both players.
    var playerOneScore = document.querySelector('#OneScore'); playerOneScore.innerHTML = " " + randomOne;
    var playerTwoScore = document.querySelector('#TwoScore'); playerTwoScore.innerHTML = " " + randomTwo;

  });
}
