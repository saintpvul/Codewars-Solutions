/*

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

*/

// solution

function alternate(n, firstValue, secondValue) {
  let resultArray = [];
  for (let i = 0; i < n; i++) {
    resultArray.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return resultArray;
}

const alternate = (n, firstValue, secondValue) =>
  Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? firstValue : secondValue
  );
