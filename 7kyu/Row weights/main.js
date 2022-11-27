/*

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)

*/

// solution

function rowWeights(array) {
  let t1 = [],
    t2 = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      t1.push(array[i]);
    } else {
      t2.push(array[i]);
    }
  }
  return [t1.reduce((w, p) => (w += p), 0), t2.reduce((w, p) => (w += p), 0)];
}
