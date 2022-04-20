
let randompick;
let computerCount = 0;
let playerCount = 0;
let playerSelection;
let computerSelection;

//Created array of options for 'computer' to select.
const options = [
  'rock',
  'paper',
  'scissors'
]

//Function that creates an integer between 0-2 and then returns corresponding option from array.
function computerPlay() {
  randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick;
}
 
//buttons to return the text of button clicked.
const btn = document.querySelectorAll('button');

btn.forEach(btn => btn.addEventListener('click', () => {
  playerSelection = btn.innerText.toLowerCase();
  computerSelection = computerPlay();
  playRound(computerSelection, playerSelection);
}));

function playRound(param1, param2) {
  
  var element = document.getElementById("score");

  if ((param1 === "rock") && (param2 === "scissors")) {
    computerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else if ((param1 === "scissors") && (param2 === "rock")) {
    playerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else if ((param1 === "scissors") && (param2 === "paper")) {
    computerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else if ((param1 === "paper") && (param2 === "scissors")) {
    playerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else if ((param1 === "paper") && (param2 === "rock")) {
    computerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. Computer wins this round.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else if ((param1 === "rock") && (param2 === "paper")) {
    playerCount++;
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. You win this round!\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  } else {
    var text = `Computer chose ${computerSelection}, you chose ${playerSelection}. This round is a tie.\n\nComputer: ${computerCount}\nPlayer: ${playerCount}`;
  }

  element.innerText = text;

  if (computerCount == 5) {
    var para = document.createElement("p");
    var final = document.createTextNode("The computer has won this time! Choose again to start over.");
    element.appendChild(para);
    para.appendChild(final);
    computerCount = 0;
    playerCount = 0;
    return;
   } else if (playerCount == 5) {
    var para = document.createElement("p");
    var final = document.createTextNode("You win the game! Choose again to start over.");
    element.appendChild(para);
    para.appendChild(final);
    computerCount = 0;
    playerCount = 0;
    return;
 }
}






