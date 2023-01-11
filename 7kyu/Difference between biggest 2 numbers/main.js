/*

You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.

*/

// solution

function diffBig2(arr) {
  let firstMax = Math.max(...arr);
  arr.splice(arr.indexOf(firstMax), 1);
  return firstMax - Math.max(...arr);
}
