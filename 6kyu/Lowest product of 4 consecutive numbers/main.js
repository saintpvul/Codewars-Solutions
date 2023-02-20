/*

Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"

*/

// solution

function lowestProduct(input) {
  input = input.split("");

  if (input.length < 4) {
    return "Number is too small";
  }

  let lowest = Infinity;

  for (let i = 0; i <= input.length - 4; i++) {
    let product = input.slice(i, i + 4).reduce((p, v) => p * +v, 1);
    if (lowest > product) {
      lowest = product;
    }
  }
  return lowest;
}
