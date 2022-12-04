/*

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

// solution

function largestPairSum(numbers) {
  let max = Math.max(...numbers),
    noMax = [...numbers]
      .slice(0, numbers.indexOf(max))
      .concat([...numbers.slice(numbers.indexOf(max) + 1, numbers.length)]);
  return [max, Math.max(...noMax)].reduce((s, v) => (s += v), 0);
}
