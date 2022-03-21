
function game() {

//Created array of options for 'computer' to select.
var options = [
  'rock',
  'paper',
  'scissors'
]

//Function that creates an integer between 0-2 and then returns corresponding option from array.
function computerPlay() {
  randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick;
}

let randompick;
let computerCount = 0;
let playerCount = 0;
let playerSelection;
let computerSelection;

function playRound(param1, param2) {
  if ((param1 === "rock") && (param2 === "scissors")) {
    computerCount++; 
  } else if ((param1 === "scissors") && (param2 === "rock")) {
    playerCount++;
  } else if ((param1 === "scissors") && (param2 === "paper")) {
    computerCount++;
  } else if ((param1 === "paper") && (param2 === "scissors")) {
    playerCount++;
  } else if ((param1 === "paper") && (param2 === "rock")) {
    computerCount++;
  } else if ((param1 === "rock") && (param2 === "paper")) {
    playerCount++;
  } else {
  }
}

  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = window.prompt("What do you choose? Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    
    playRound(computerSelection, playerSelection);
    
    computerSelection.toUpperCase;
    playerSelection.toUpperCase;

    if (computerCount > playerCount) {
      alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round. Computer: ${computerCount} Player: ${playerCount}`)
    } else if (playerCount > computerCount) {
      alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round! Computer: ${computerCount} Player: ${playerCount}`)
    } else {
      alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. This round is a tie. Computer: ${computerCount} Player: ${playerCount}`)
    }
  }
}

game();