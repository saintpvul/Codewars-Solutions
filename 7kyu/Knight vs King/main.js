/*

Knight vs King
If you are not familiar with chess game you can learn more Here .

Here is the chess board (rows, denoted by numbers, are called ranks, columns, denoted by a letter, are called files):

alt text

You put a Knight and a King in the board.

Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

Return:

"Knight" if the knight is putting the king in check,
"King" if the king is attacking the knight
"None" if none of the above occur
Example:

knight = [7, "B"], king = [6, "C"]  ---> "King"
Check the test cases and Happy coding :)

*/

// solution

function knightVsKing(knightPosition, kingPosition) {
  let x = knightPosition[0] - kingPosition[0];
  let y = knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt();
  let m = x * x + y * y;
  if (m === 5) return "Knight";
  if (m < 3) return "King";
  return "None";
}
