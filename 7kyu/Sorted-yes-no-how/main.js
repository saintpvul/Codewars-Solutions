/*

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

// solution

function isSortedAndHow(array) {
  let ascending = [...array].sort((a, b) => a - b),
    descending = [...array].sort((a, b) => b - a);
  if (!array) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ascending[i]) return "yes, ascending";
    if (array[i] === descending[i]) return "yes, descending";
    else return "no";
  }
}
