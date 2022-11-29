/*

In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]


*/

// solution

function getLargerNumbers(a, b) {
  let out = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= b[i]) {
      out.push(a[i]);
    } else {
      out.push(b[i]);
    }
  }
  return out;
}

const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));
