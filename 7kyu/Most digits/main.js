/*

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

// solution

function findLongest(arr) {
  let ndx = 0,
    l = 0,
    check = [...arr].map((e) => e.toString());
  for (let i = 0; i < check.length; i++) {
    if (check[i].length > l) {
      l = check[i].length;
      ndx = i;
    }
  }
  return arr[ndx];
}

const findLongest = (arr) =>
  arr.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
