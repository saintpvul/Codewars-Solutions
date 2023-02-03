/*

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

"(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

// solution

function primeFactors(n) {
  let temp = [],
    map = {},
    res = "";

  const calc = (n) => {
    if (n > 1) {
      for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
          temp.push(i);
          calc(n / i);
          return true;
        }
      }
    } else {
      return true;
    }
  };

  temp.map((x) => (map[x] ? map[x]++ : (map[x] = 1)));
  for (let num in map) {
    if (map[num] === 1) res += `(${num})`;
    if (map[num] > 1) res += `(${num}**${map[num]})`;
  }
  return res;
}
