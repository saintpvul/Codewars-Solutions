/*

Overview
This is a simple "chess themed" algorithmic puzzle - but you don't need to know anything about chess to solve it, other than 3 basic moves.

The game is played between two players who take turns moving a piece on the board: Player 1, who always plays the first move, and Player 2.

The game takes place on a 5x5 board, and at all times there is only 1 single piece on the board - it is either a Rook, a Bishop, or a Queen.

(Quick reminder: the Rook can move horizontally or vertically, the Bishop can move diagonally, the Queen can move horizontally or vertically or diagonally).

The winner is the Player who, on their turn, moves the current piece to any of the board's 4 corner squares.

Gameplay is simple - after a Player moves the current piece, they either:

win the game, if they managed to move the current piece to any of the board's 4 corner squares.
or, if they do not win on their turn, the piece will automatically transform into the "next" piece according to the following repeating cyclic pattern, and the other Player then takes their turn (from the current position on the 5x5 board):
repeating 3-cyclic pattern:
   Rook ---> Bishop 
    ^         /  
     \       v
       Queen
Given the starting piece (Rook, Bishop, or Queen) and a starting location for the piece, and assuming both players play optimally, your goal is to determine whether Player 1 has a guaranteed win, a guaranteed loss, or if the game will become an infinite never-ending guaranteed draw.

(For the purposes of this kata, "playing optimally" means that: both Players will attempt to win the game, if there is any combination of moves that will allow them to do so, and conversely will avoid any move that can lead to them losing.)

Inputs and Outputs
You will be given starting_piece, which is a stringrepresenting the piece that is on the board when the game starts, 1 of 3 possibilities:

'r' representing the Rook
'b' representing the Bishop
'q' representing the Queen
You will also be given starting_row and starting_column, both are ints from 0 to 4 inclusive: for example starting_row == 0 and starting_column == 0 means that the piece starts in the top-left square of the 5x5 board.

We use standard "array row and column" indexing to encode the 5x5 board, as represented in the diagram below:

  'r=0, c=0' | 'r=0, c=1' | 'r=0, c=2' | 'r=0, c=3' | 'r=0, c=4'  <--- row 0
  'r=1, c=0' | 'r=1, c=1' | 'r=1, c=2' | 'r=1, c=3' | 'r=1, c=4' 
  'r=2, c=0' | 'r=2, c=1' | 'r=2, c=2' | 'r=2, c=3' | 'r=2, c=4'
  'r=3, c=0' | 'r=3, c=1' | 'r=3, c=2' | 'r=3, c=3' | 'r=3, c=4' 
  'r=4, c=0' | 'r=4, c=1' | 'r=4, c=2' | 'r=4, c=3' | 'r=4, c=4'  <--- row 4
      ^                                                   ^
      |                                                   |
  column 0                                            column 4
You must return a string: 'win', 'lose', or 'draw' depending on whether Player 1 (who always goes first) has a guaranteed win, loss, or draw.

Remember - to win the game, the current player just needs to move the current piece to any of the 4 corners: (0,0), (0,4), (4,0), (4,4).

Examples
Example 1

  _'r'_ _ _  <--- row 0
  _ _ _ _ _
  _ _ _ _ _
  _ _ _ _ _
  _ _ _ _ _
    ^
    | column 1
In the above example game, the piece starts as a Rook, 'r', and in starting_row == 0, starting_column == 1.

Here Player 1 has a guaranteed winning strategy - the winning strategy is: Player 1 moves the Rook from square (0,1) to corner square (0,0) or (0,4) and immediately wins the game, without even letting Player 2 play a single move.

So the expected answer for starting_piece == 'r', starting_row == 0, starting_column == 1 is 'win'.

Example 2

  _ _ _ _ _ 
  _ _ _ _ _
  _ _ _ _ _
  _ _ _ _ _
  _ _ _'b'_
In the above example game, the piece starts as a Bishop, 'b', and in starting_row == 4, starting_column == 3.

Unlike for the previous example, where Player 1 had a guaranteed win immediately, here Player 1 can't win immediately on their first turn.

So Player 1 needs to try to make a move with the Bishop so that Player 2 can't win when they take their turn (which will be with the Queen, since that is the piece "after" the 'b' Bishop).

You should be able to analyse the various possibilities from here on ;)

Similar katas
If you like chess katas, I highly recommend Is the King in check ? by @trashy_incel

If you want a weirder and, more challenging, chess themed puzzle, check out Evil genius game - Find the moving chess piece while blindfolded by yours truly ;)

*/

// solution
