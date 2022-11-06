/*

Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

Trailing zeros should be left out. For example

squareRoot(39) // => 6.245;
rather than

squareRoot(39) // => 6.24500;


*/

// solution

function squareRoot(x) {
  if (x < 0 || isNaN(x)) {
    return NaN;
  }

  let square = x / 2,
    temp = 0;

  while (square != temp) {
    temp = square;
    square = (x / square + square) / 2;
  }
  return square === Math.round(square) ? square : +square.toFixed(5);
}
