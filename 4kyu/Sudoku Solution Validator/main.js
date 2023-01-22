/*

Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

*/

// solution

function validSolution(board) {
  const checkRow = (b) => {
    for (let i = 0; i < b.length; i++) {
      for (let j = 1; j < b[i].length; j++) {
        if (b[i][j]) {
          if (b[i][j] === b[i][j - 1]) return false;
        }
      }
    }
    return true;
  };
  const checkCol = (b) => {
    for (let i = 0; i < b.length; i++) {
      for (let j = 1; j < b[i].length; j++) {
        if (b[j][i]) {
          if (b[j][i] === b[j - 1][i]) return false;
        }
      }
    }
    return true;
  };
  const checkDiagonal = (b) => {
    let res = [];
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[i].length; j++) {
        res.push(b[i][j]);
      }
    }
    res = res.sort();
    for (let k = 1; k < res.length; k++) {
      if (res[k]) {
        if (res[k] === res[k - 1]) return false;
      }
    }
    return true;
  };
  const checkGrid = (r, c) => {
    let b = [];
    b.push([board[r][c], board[r][c + 1]], board[r][c + 2]);
    b.push([board[r + 1][c], board[r + 1][c + 1], board[r + 1][c + 2]]);
    b.push([board[r + 2][c], board[r + 2][c + 1], board[r + 2][c + 2]]);
    return checkRow(b) && checkCol(b) && checkDiagonal(b);
  };
  return (
    checkCol(board) &&
    checkRow(board) &&
    checkGrid(0, 0) &&
    checkGrid(0, 3) &&
    checkGrid(0, 6) &&
    checkGrid(3, 0) &&
    checkGrid(3, 3) &&
    checkGrid(3, 6) &&
    checkGrid(6, 0) &&
    checkGrid(6, 3) &&
    checkGrid(6, 6)
  );
}
