/*

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

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
