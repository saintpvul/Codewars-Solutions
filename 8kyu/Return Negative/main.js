/*

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

*/

//solution

function makeNegative(num) {
  return num > 0 ? Number("-" + num) : num;
}
