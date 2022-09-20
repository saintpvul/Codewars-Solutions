/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// solution

function findAverage(array) {
  if (array.length <= 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b) / array.length;
  }
}

console.log(findAverage([1, 2, 3]));
console.log(findAverage([]));
console.log(findAverage([5, 10, 15]));
