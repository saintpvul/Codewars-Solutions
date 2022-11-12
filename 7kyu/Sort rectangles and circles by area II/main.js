/*

In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
This kata inspired by Sort rectangles and circles by area.

*/

// solution

function sortByArea(array) {
  function circ(a) {
    if (Array.isArray(a)) {
      return a.reduce((a, b) => a * b, 1);
    }
    return Math.PI * Math.pow(a, 2);
  }
  array = array.slice();
  return array.sort((a, b) => circ(a) - circ(b));
}
