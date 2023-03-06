/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/

// solution

function isMerge(s, part1, part2, memo = new Map()) {
  const key = `${s},${part1},${part2}`;
  if (memo.has(key)) {
    return memo.get(key);
  }
  if (!s) {
    const result = !(part1 || part2);
    memo.set(key, result);
    return result;
  }
  const char = s[0];
  let result = false;
  if (part1[0] === char) {
    result = isMerge(s.slice(1), part1.slice(1), part2, memo);
  }
  if (!result && part2[0] === char) {
    result = isMerge(s.slice(1), part1, part2.slice(1), memo);
  }
  memo.set(key, result);
  return result;
}
