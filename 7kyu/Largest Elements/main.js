/*

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/

// solution

function largest(n, xs) {
  xs.sort((a, b) => b - a);
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(xs[i]);
  }
  return output.reverse();
}

const largest = (n, xs) =>
  xs.sort((smallest, largest) => smallest - largest).slice(xs.length - n);
