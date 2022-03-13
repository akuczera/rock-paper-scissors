/* Start with function computerPlay that randomly returns either Rock,
Paper, or Scissors. This function will make the "computers play" */

//Create array of string options
var options = [
  'rock',
  'paper',
  'scissors'
]
//Declare the function
function computerPlay() {
  let randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick();
}

/* Create a function to play a single round of RPS, should take two
parameters, playerSelection & computerSelection, returns a string that
declares the winner of the game (ie. You lose! The computer wins!).
NOTE: playerSelection should be case insensitive, doesn't matter how
someone types it in. & "RETURN" the results of this function, not
console.log() it, because we want to use this data later. */

//Declare what playerSelection variable is.
  //Ask player to type in selection.
  //Change the case sensitivity to have all lowercase letters. Then you
  //can "match them later".
  //Put this choice into playerSelection variable
//Declare what computerSelection is.
  //This comes from the computerPlay() function.
  //Put computerPlay output into computerSelection variable.
//Create function with two parameters from above.
  //Same choice is a tie.
  //Rock beats scissors.
  //Paper beats rock.
  //Scissors beats paper.
  //Output the "winner" with a certain string on each option above.

//START WITH THESE TWO FUNCTIONS THEN MOVE ONTO PART 5 OF THE PROJECT.