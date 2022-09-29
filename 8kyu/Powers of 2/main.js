/*

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

*/

// solution

function powersOfTwo(n) {
  let arr = [];
  let j = 1;
  for (let i = 0; i <= n; i++) {
    arr.push(j);
    j = j * 2;
  }
  return arr;
}

console.log(powersOfTwo(2));
