/*

Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/

// solution

function getSumOfDigits(integer) {
  let sum = 0,
    num = integer.toString().split("");
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  return sum;
}
