/*

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


*/

// solution

// slow solution
function sortArray(array) {
  let res = [],
    odds = [],
    evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      odds.push(array[i]);
    } else evens.push(array[i]);
  }
  odds = odds.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      res.push(odds[0]);
      odds.shift();
    } else {
      res.push(evens[0]);
      evens.shift();
    }
  }
  return res;
}

// bit faster solution
const sortArray = (a) => {
  let o = a.filter((v) => v % 2).sort((a, b) => a - b);
  return a.map((v) => (v % 2 ? o.shift() : v));
};
