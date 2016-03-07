"use strict";
console.log("O~~          O~~~~           O~         O~~~~~      O~~  O~~~     O~~     O~~~~   ")
console.log("O~~        O~~    O~~       O~ ~~       O~~   O~~   O~~  O~ O~~   O~~   O~    O~~ ")
console.log("O~~      O~~        O~~    O~  O~~      O~~    O~~  O~~  O~~ O~~  O~~  O~~        ")
console.log("O~~      O~~        O~~   O~~   O~~     O~~    O~~  O~~  O~~  O~~ O~~  O~~        ")
console.log("O~~      O~~        O~~  O~~~~~~ O~~    O~~    O~~  O~~  O~~   O~ O~~  O~~   O~~~~")
console.log("O~~        O~~     O~~  O~~       O~~   O~~   O~~   O~~  O~~    O~ ~~   O~~    O~ ")
console.log("O~~~~~~~~    O~~~~     O~~         O~~  O~~~~~      O~~  O~~      O~~    O~~~~~   ")

// Calling all Global variables
var nameLeft = "Left"
var nameRight = "Right"
var playerOneWins = 0;
var playerTwoWins = 0;

var header = document.querySelector('header');
var menu = document.querySelector('nav');
var slogan = document.querySelector('#slogan');
var footer = document.querySelector('footer');
var theWinnerIs = document.querySelector('#theWinnerIs');
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
// Background music
var backgroundSound = new Audio("sound/funeralCanticle.mp3");
backgroundSound.volume = 0.2;
backgroundSound.play();

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
  footer.style.display = 'flex';
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

  theWinnerIs.style.display = 'none';

}

/////////////////////////////////////////////
//                                         //
//  Press the keyboard "Tap" and "Return"  //
//                                         //
/////////////////////////////////////////////

function gameControl() {
  console.log("LAYER THREE: Game Control Loading UPPPP" + "" + "Real Time");
  window.addEventListener("keydown", function(e){
    // Player One, Press F to play
    if(e.keyCode === 70 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player One" + widthOne);
      widthOne += 10;
      for (var i = 0; i < playerOneWidth.length; i++) {
        playerOneWidth[i].style.width = widthOne + '%';
      }
      var snd = new Audio("sound/push.wav");
      snd.volume = 0.5;
      snd.play();
    }
    // Player Two, Press J to play
    if(e.keyCode === 74 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Player Two" + widthTwo);
      widthTwo += 10;
      for (var i = 0; i < playerTwoWidth.length; i++) {
        playerTwoWidth[i].style.width = widthTwo + '%';
      }
      var snd = new Audio("sound/push.wav");
      snd.volume = 0.3;
      snd.play();
    }

    // Background music
    if(e.keyCode === 38 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("sound");
      backgroundSound.volume = 0.2;
    }
    if(e.keyCode === 40 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("sound");
      backgroundSound.volume = 0.0;
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

        var snd = new Audio("sound/leftWon.wav");
        snd.play();

        theWinnerIs.style.display = 'flex';
        theWinnerIs.innerHTML = nameLeft +  " " + "Won!";

      } else if (widthTwo === 110) {

        console.log(nameRight + " " + "You WIN!")
        playerTwoWins += 1;
        gameReset();

        var snd = new Audio("sound/rightWon.wav");
        snd.play();

        theWinnerIs.style.display = 'flex';
        theWinnerIs.innerHTML = nameRight +  " " + "Won!";

      }
    }
    winner();
    // Press Space, To make a fresh games
    if(e.keyCode === 32 && document.activeElement !== 'text') {
      e.preventDefault();
      console.log("Five FOUR:New Game");
      playerOneWins = 0;
      playerTwoWins = 0;
      var snd = new Audio("sound/newGame1234Go.wav");
      snd.play();
      gameReset();
    }

  });
}
