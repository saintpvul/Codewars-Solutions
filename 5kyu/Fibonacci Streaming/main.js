/*

You're going to provide a needy programmer a utility method that generates an infinite sized, sequential IntStream (in TypeScript and JS Iterator<number>, in Python generator) which contains all the numbers in a fibonacci sequence.

Use BigInt in JS as numbers get too big for JS.

A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...

*/

// solution

//using generator

function* fibonacciSequence() {
  let a = 1n,
    b = 1n;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
