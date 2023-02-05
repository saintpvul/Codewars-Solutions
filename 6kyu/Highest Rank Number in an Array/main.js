/*

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

// solution

function highestRank(arr) {
  let counter = {};
  for (let n of arr) {
    counter[n] ? (counter[n] += 1) : (counter[n] = 1);
  }
  let h = 0,
    res = 0;
  for (let [n, c] of Object.entries(counter)) {
    if (c > h) {
      h = c;
      res = n;
    }
    if (c === h && n > res) {
      res = n;
    }
  }
  return +res;
}
