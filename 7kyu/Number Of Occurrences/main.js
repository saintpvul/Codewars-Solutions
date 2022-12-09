/*

Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

*/

// solution

Array.prototype.numberOfOccurrences = function (arg) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (arg === this[i]) {
      count++;
    }
  }
  return count;
};

Array.prototype.numberOfOccurrences = function (n) {
  return this.reduce((s, e) => (e === n ? (s += 1) : (s += 0)), 0);
};
