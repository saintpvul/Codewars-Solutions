/*

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

*/

// solution

function solve(s) {
  let uC = s.length - s.replace(/[A-Z]/g, "").length,
    lC = s.length - s.replace(/[a-z]/g, "").length,
    nC = s.length - s.replace(/[0-9]/g, "").length,
    sC = s.length - s.replace(/\W|_/g, "").length;
  return [uC, lC, nC, sC];
}
