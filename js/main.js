"use strict";
console.log("O~~          O~~~~           O~         O~~~~~      O~~  O~~~     O~~     O~~~~   ")
console.log("O~~        O~~    O~~       O~ ~~       O~~   O~~   O~~  O~ O~~   O~~   O~    O~~ ")
console.log("O~~      O~~        O~~    O~  O~~      O~~    O~~  O~~  O~~ O~~  O~~  O~~        ")
console.log("O~~      O~~        O~~   O~~   O~~     O~~    O~~  O~~  O~~  O~~ O~~  O~~        ")
console.log("O~~      O~~        O~~  O~~~~~~ O~~    O~~    O~~  O~~  O~~   O~ O~~  O~~   O~~~~")
console.log("O~~        O~~     O~~  O~~       O~~   O~~   O~~   O~~  O~~    O~ ~~   O~~    O~ ")
console.log("O~~~~~~~~    O~~~~     O~~         O~~  O~~~~~      O~~  O~~      O~~    O~~~~~   ")

/*

Round -Zero
01.[] Render a game in the browser
02.[] Switch turns between two players
03.[] Design logic for winning & visually display which player won
04.[x] Include separate HTML / CSS / JavaScript files
05.[] Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
06.[] Use Javascript for DOM manipulation
07.[] Deploy your game online, where the rest of the world can access it
08.[] Use semantic markup for HTML and CSS (adhere to best practices)
09.[]
10.[]
11.[]
12.[]


Round +Zero
01.[/] Make the Global variables
02.[x] Build the start game function to press the start html and start the game running.
03.[] start(); then turn the html tag "HEADER" to display = "flex"
04.[] start(); Turn off the html tag "#gameTable" to none, is only for display purpose
05.[]
06.[]
07.[]
08.[]
09.[]

*/

// Calling all Global variables
var started = false;
var scoreOne = [];
var scoreTwo = [];
var gameOptions = [];

var header = document.querySelector('header');
var menu = document.querySelector('nav');
var displayGameTable = document.querySelector('#gameTable');

var playerOneWidth = document.querySelectorAll('.playerOne');
var playerTwoWidth = document.querySelectorAll('.playerTwo');


// Lets lets play
var playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
  start();
});

// Load up everything that you need for the games. ( Your Treasure Box )
function start() {
  console.log("Let's Play <--- WIDTH --->");
  started = true;
  gameStartDisplay();
}

function gameStartDisplay() {
  console.log("Is Header in the MFH!!!");
  header.style.display = 'flex';
  menu.style.display = 'none';
  displayGameTable.style.display = 'none';
}
