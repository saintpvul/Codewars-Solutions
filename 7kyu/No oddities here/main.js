/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/

// solution

const noOdds = (values) => values.filter((i) => i % 2 === 0 || 0);
