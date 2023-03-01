/*

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!

*/

// solution

function permutations(string) {
  const res = [];

  if (string.length === 1) {
    res.push(string);
    return res;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i],
      charsLeft = string.substring(0, i) + string.substring(i + 1),
      innerPermutations = permutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      res.push(firstChar + innerPermutations[j]);
    }
  }

  return Array.from(new Set(res));
}
