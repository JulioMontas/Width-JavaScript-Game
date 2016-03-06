"use strict";
console.log("O~~          O~~~~           O~         O~~~~~      O~~  O~~~     O~~     O~~~~   ")
console.log("O~~        O~~    O~~       O~ ~~       O~~   O~~   O~~  O~ O~~   O~~   O~    O~~ ")
console.log("O~~      O~~        O~~    O~  O~~      O~~    O~~  O~~  O~~ O~~  O~~  O~~        ")
console.log("O~~      O~~        O~~   O~~   O~~     O~~    O~~  O~~  O~~  O~~ O~~  O~~        ")
console.log("O~~      O~~        O~~  O~~~~~~ O~~    O~~    O~~  O~~  O~~   O~ O~~  O~~   O~~~~")
console.log("O~~        O~~     O~~  O~~       O~~   O~~   O~~   O~~  O~~    O~ ~~   O~~    O~ ")
console.log("O~~~~~~~~    O~~~~     O~~         O~~  O~~~~~      O~~  O~~      O~~    O~~~~~   ")

// When you win
// you going to show who won. and also a manu, and also a short cut to keep playing the game faster.
// How do i add the value of


// Do i need two function for game play and replay?

// Calling all Global variables
var nameLeft = "Left"
var nameRight = "Right"
var playerOneWins = 0;
var playerTwoWins = 0;

var header = document.querySelector('header');
var menu = document.querySelector('nav');
var slogan = document.querySelector('#slogan');

var displayGameTable = document.querySelector('#gameTable');

// Calling all Global variables of player one
var widthOne = Math.ceil(Math.random() * 100);
var widthOneHits = widthOne + "%";
// Reading each class from section
var playerOneWidth = document.querySelectorAll('.playerOne');
for (var i = 0; i < playerOneWidth.length; i++) {
  playerOneWidth[i].style.width = widthOneHits;
}

// Calling all Global variables of player Two
var widthTwo = Math.ceil(Math.random() * 100);
var widthTwoHits = widthTwo + "%";
// Reading each class from section
var playerTwoWidth = document.querySelectorAll('.playerTwo');
for (var i = 0; i < playerTwoWidth.length; i++) {
  playerTwoWidth[i].style.width = widthTwoHits;
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

var playButton = document.querySelector('#replay');
playButton.addEventListener('click', function() {
  gameReset();
});

console.log("LAYER ONE");
////////////////////////////////////////////////////////////////////////////
//                                                                        //
// Load up everything that you need for the games. ( Your Treasure Box )  //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

function start() {
  header.style.display = 'flex';
  menu.style.display = 'none';
  slogan.style.display = 'none';

  gameReset();
  gameControl();
}

//////////////////////////////////////
//                                  //
//  Reset the game to a fresh game  //
//                                  //
//////////////////////////////////////

function gameReset() {
  console.log("LAYER TWO: Game Reset");

  widthOne = 0;
  for (var i = 0; i < playerOneWidth.length; i++) {
    playerOneWidth[i].style.width = widthOne + '%';
  }

  widthTwo = 0;
  for (var i = 0; i < playerTwoWidth.length; i++) {
    playerTwoWidth[i].style.width = widthTwo + '%';
  }

  // Display the game score for both players.
  var playerOneHits = document.querySelector('#oneTotalHits');
  playerOneHits.innerHTML = playerOneWins + " ";

  var playerTwoHits = document.querySelector('#twoTotalHits');
  playerTwoHits.innerHTML = " " + playerTwoWins;

  // Display the % of the width size.
  var playerOneWidthSize = document.querySelector('#OneScore');
  playerOneWidthSize.innerHTML = " " + widthOne + "%";

  var playerTwoWidthSize = document.querySelector('#TwoScore');
  playerTwoWidthSize.innerHTML = " " + widthTwo + "%";

}

/////////////////////////////////////////////
//                                         //
//  Press the keyboard "Tap" and "Return"  //
//                                         //
/////////////////////////////////////////////

function gameControl() {
  console.log("LAYER THREE: Game Control Loading UPPPP" + "" + "Real Time");
  window.addEventListener("keydown", function(e){
    // Player One, Press Tab to play.
    if(e.keyCode === 9 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player One" + widthOne);
      widthOne += 10;
      for (var i = 0; i < playerOneWidth.length; i++) {
        playerOneWidth[i].style.width = widthOne + '%';
      }
    }
    // Player Two, Press Enter to play.
    if(e.keyCode === 16 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player Two" + widthTwo);
      widthTwo += 10;
      for (var i = 0; i < playerTwoWidth.length; i++) {
        playerTwoWidth[i].style.width = widthTwo + '%';
      }
    }

    // Display the % of the width size but in REAL TIME
    var playerOneWidthSize = document.querySelector('#OneScore');
    playerOneWidthSize.innerHTML = " " + widthOne + "%";

    var playerTwoWidthSize = document.querySelector('#TwoScore');
    playerTwoWidthSize.innerHTML = " " + widthTwo + "%";

    //////////////////////////
    //                      //
    //  Declare the Winner  //
    //                      //
    //////////////////////////

    // Bug01. [] if both player wins, is going to call out that "nameRight" won and then that "You both win".
    //           Why is not stoping at if((widthOne + widthTwo) === 200).
    function winner(){
      console.log("LAYER FOUR: Who is the winner");
      if((widthOne + widthTwo) === 220) {
        console.log("You both win")
        gameReset();
      } else if (widthOne === 110) {
        console.log(nameLeft + " " + "You WIN!");
        playerOneWins += 1;
        gameReset();
      } else if (widthTwo === 110) {
        console.log(nameRight + " " + "You WIN!")
        playerTwoWins += 1;
        gameReset();
      }
    }
    winner();
  });
}
