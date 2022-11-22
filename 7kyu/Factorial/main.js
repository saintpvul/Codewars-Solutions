/*

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

// solution

const factorial = (n) => (n ? factorial(n - 1) * n : 1);

function factorial(n) {
  let f = [];
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
}
