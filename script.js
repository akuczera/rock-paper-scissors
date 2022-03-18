//Created array of options for 'computer' to select.
var options = [
  'rock',
  'paper',
  'scissors'
]

//Function that creates an integer between 0-2 and then returns corresponding option from array.
function computerPlay() {
  let randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick;
}

//Asking 'player' to type in a choice.
let playerSelection = window.prompt("What do you choose? Rock, Paper, or Scissors?");
playerSelection = playerSelection.toLowerCase();

//Assigning computerPlay() function to new variable.
let computerSelection = computerPlay();

//Creates one round of game, decides who the winner is based on string comparison.
function playRound(param1, param2) {
  if ((param1 === "rock") && (param2 === "scissors")) {
    alert("Computer wins! Rock crushes scissors."); 
  } else if ((param1 === "scissors") && (param2 === "rock")) {
    alert("You win! Rock crushes scissors");
  } else if ((param1 === "scissors") && (param2 === "paper")) {
    alert("Computer wins! Scissors cut through paper.");
  } else if ((param1 === "paper") && (param2 === "scissors")) {
    alert("You win! Scissors cut through paper.");
  } else if ((param1 === "paper") && (param2 === "rock")) {
    alert("Computer wins! Paper covers rock.");
  } else if ((param1 === "rock") && (param2 === "paper")) {
    alert("You win! Paper covers rock.");
  } else {
    alert("It's a tie!");
  }
}

//Run the game with variables we created earlier.
playRound(computerSelection, playerSelection);
