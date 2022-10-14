/*

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

// solution

function sumOfDifferences(arr) {
  let sum = 0;
  if (arr.length > 1) {
    let sorted = arr.sort((a, b) => b - a);
    let arrToSum = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      arrToSum.push(sorted[i] - sorted[i + 1]);
    }
    sum = arrToSum.reduce((acc, item) => (acc += item));
    return sum;
  } else return sum;
}

console.log(sumOfDifferences([5]));
console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([5, 123, 10]));
