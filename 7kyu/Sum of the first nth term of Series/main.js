/*

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter)

*/

// solution

function SeriesSum(n) {
  if (n === 0) {
    return "0.00";
  }
  let sum = 0;
  const base = 1;
  for (i = 0; i < n; i++) {
    let mod = i * 3;
    sum += 1 / (base + mod);
  }
  return String(sum.toFixed(2));
}
