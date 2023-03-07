/*

Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer

*/

// solution

function deleteDigit(n) {
  n = n.toString();
  let possibilities = [];

  for (let i = 0; i < n.length; i++) {
    possibilities.push(+(n.slice(0, i) + n.slice(i + 1)));
  }
  return Math.max(...possibilities);
}
