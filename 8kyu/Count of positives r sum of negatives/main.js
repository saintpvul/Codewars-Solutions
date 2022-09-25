/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// solution

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  let count = 0,
    sum = 0;
  if (!input || !input.length) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] <= 0) {
      sum += input[i];
    }
  }
  return [count, sum];
}

console.log(countPositivesSumNegatives(arr));

let empty = [];
let n = [null, null];
console.log(countPositivesSumNegatives(empty));
console.log(countPositivesSumNegatives(n));
