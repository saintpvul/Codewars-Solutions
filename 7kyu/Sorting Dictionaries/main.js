/*

Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]


*/

// solution

function sortDict(dict) {
  return Object.keys(dict)
    .map((e) => [isNaN(e) ? e : Number(e), dict[e]])
    .sort((a, b) => b[1] - a[1]);
}

const sortDict = (dict) =>
  Object.keys(dict)
    .map((e) => [isNaN(e) ? e : Number(e), dict[e]])
    .sort((a, b) => b[1] - a[1]);
