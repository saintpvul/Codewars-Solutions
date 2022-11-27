/*

Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

*/

// solution

function minValue(values) {
  let uniq = new Set(values.sort());
  return +Array.from(uniq).reduce((s, v) => (s += v.toString()), 0);
}

// function minValue(values) {
//   let uniq = Array.from(new Set(values.sort()));
//   return parseInt(uniq.join(""));
// }
