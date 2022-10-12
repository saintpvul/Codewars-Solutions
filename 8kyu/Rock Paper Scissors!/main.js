/*

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

// solution

let rockPaperScissors = ["rock", "scissors", "paper", "rock"];

const rps = (p1, p2) =>
  p1 === p2
    ? "Draw!"
    : rockPaperScissors.lastIndexOf(p2) === rockPaperScissors.indexOf(p1) + 1
    ? "Player 1 won!"
    : "Player 2 won!";

console.log(rps("paper", "rock"));
