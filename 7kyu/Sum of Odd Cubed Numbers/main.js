/*

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

// solution

const cubeOdd = (arr) =>
  arr.some((e) => isNaN(e))
    ? undefined
    : arr
        .filter((v) => v % 2)
        .reduce((sum, num) => (sum += num * num * num), 0);
