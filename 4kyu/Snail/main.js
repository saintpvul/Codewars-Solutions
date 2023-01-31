/*

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].



*/

// solution

snail = function (array) {
  let r = [];

  while (array[0]) {
    if (!array[0]) break;
    for (let i = 0; i < array[0].length; i++) {
      r.push(array[0][i]);
    }
    array.splice(0, 1);

    if (!array[0]) break;
    for (let i = 0; i < array.length; i++) {
      r.push(array[i][array[i].length - 1]);
      array[i].splice(array[i].length - 1);
    }

    if (!array[0]) break;
    array[array.length - 1].reverse().forEach((n) => r.push(n));
    array.splice(array.length - 1, 1);

    if (!array[0]) break;
    array.reverse().forEach((e, i) => {
      r.push(e[0]);
      array[i].splice(0, 1);
    });
    array.reverse();
  }
  return r;
};
