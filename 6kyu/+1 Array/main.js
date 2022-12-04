/*

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer

*/

// solution

function upArray(arr) {
  if (
    !arr.length ||
    arr.some(function (v) {
      return v < 0 || v > 9;
    })
  )
    return null;
  let i = 1,
    len = arr.length,
    v;
  while ((v = arr[--len] + i)) {
    arr[len] = v % 10;
    i = ~~(v / 10);
  }
  return i ? [i].concat(arr) : arr;
}
