/*

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

*/

// solution

function nearestSq(n) {
  let sqrt = Math.round(Math.sqrt(n));
  return sqrt * sqrt;
}

const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;

console.log(nearestSq(111));
