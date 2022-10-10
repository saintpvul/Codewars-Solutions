/*

Task
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

*/

// solution

function cutIt(arr) {
  let newArr = [];
  let short = arr.reduce((a, b) => (a.length <= b.length ? a : b));
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].slice(0, short.length));
  }
  return newArr;
}

console.log(cutIt(["codewars", "javascript", "java"]));
