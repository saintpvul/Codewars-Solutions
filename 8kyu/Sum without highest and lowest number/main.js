/*

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

*/

// solution

function sumArray(array) {
  return array && array.length > 0
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, i) => (acc += i), 0)
    : 0;
}

console.log(sumArray([6, 2, 1, 8, 10]));
