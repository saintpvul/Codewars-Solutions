/*

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

*/

// solution
function evenLast(numbers) {
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens.reduce((s, v) => (s += v), 0) * numbers[numbers.length - 1] || 0;
}
