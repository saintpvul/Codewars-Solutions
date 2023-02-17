/*

Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

*/

// solution

function twistedSum(n) {
  let counter = [];
  for (let i = 0; i <= n; i++) {
    counter.push(String(i));
  }
  counter = counter
    .map((e) => (e.length === 1 ? +e : e.split("").reduce((s, v) => s + +v, 0)))
    .reduce((s, v) => s + +v, 0);

  return counter;
}
