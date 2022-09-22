/*

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

*/

// solution

function nthFibo(n) {
  let fibo = [0, 1];
  for (let i = 0; i < n; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
  }
  return fibo[n - 1];
}
