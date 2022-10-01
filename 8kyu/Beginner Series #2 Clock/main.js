/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

*/

// solution

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
