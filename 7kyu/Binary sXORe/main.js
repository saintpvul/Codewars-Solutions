/*

Objective
Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

Examples
n	sXORe n
0	0
1	1
50	51
1000000	1000000


*/

// solution

const sxore = function (n) {
  switch (n % 4) {
    case 0:
      return n;
    case 1:
      return 1;
    case 2:
      return n + 1;
    default:
      return 0;
  }
};
