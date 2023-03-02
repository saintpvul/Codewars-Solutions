/*

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

// solution

function add(a, b) {
  let res = "",
    curr = 0;
  let i = a.length - 1,
    j = b.length - 1;

  while (i >= 0 || j >= 0 || curr > 0) {
    const sum = (+a[i] || 0) + (+b[j] || 0) + curr;
    curr = Math.floor(sum / 10);
    res = (sum % 10) + res;
    i--;
    j--;
  }

  return res;
}
