
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

function playerChoice() {
  let input = window.prompt("What do you choose? Rock, Paper, or Scissors?").toLowerCase();
  
  if ( input == "rock" || input == "paper" || input == "scissors") {
    selected = input;
  } else {
    playerChoice();
  }
  return selected;
}
  
let randompick;
let computerCount = 0;
let playerCount = 0;
let playerSelection;
let computerSelection;

function playRound(param1, param2) {
  if ((param1 === "rock") && (param2 === "scissors")) {
    computerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else if ((param1 === "scissors") && (param2 === "rock")) {
    playerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else if ((param1 === "scissors") && (param2 === "paper")) {
    computerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else if ((param1 === "paper") && (param2 === "scissors")) {
    playerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else if ((param1 === "paper") && (param2 === "rock")) {
    computerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else if ((param1 === "rock") && (param2 === "paper")) {
    playerCount++;
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  } else {
    alert(`Computer chose ${computerSelection}, you chose ${playerSelection}. This round is a tie.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`)
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = playerChoice();
    
    playRound(computerSelection, playerSelection);
  }

  if (computerCount > playerCount) {
    alert(`The computer has won this time!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`);
  } else if (playerCount > computerCount) {
    alert(`You win the game!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`);
  } else {
    alert(`The game is a tie!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`);
  }
}

game();