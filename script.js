/* Start with function computerPlay that randomly returns either Rock,
Paper, or Scissors. This function will make the "computers play" */

//Create array of string options
var options = [
  'Rock',
  'Paper',
  'Scissors'
]
//Declare the function
function computerPlay() {
  let randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick();
}
//Create variables for each string?
//Randomly return one of each string




/* Create a function to play s single round of RPS, should take two
parameters, playerSelection & computerSelection, returns a string that
declares the winner of the game (ie. You lose! The computer wins!).
NOTE: playerSelection should be case insensitive, doesn't matter how
someone types it in. & "RETURN" the results of this function, not
console.log() it, because we want to use this data later. */

//START WITH THESE TWO FUNCTIONS THEN MOVE ONTO PART 5 OF THE PROJECT.