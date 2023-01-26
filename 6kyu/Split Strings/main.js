/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

// solution

const solution = (str) => {
  if (!str.length) return [];
  if (str.length % 2) str = str + "_";
  str = str.split("");
  let res = [];
  for (let i = 0; i < str.length; i + 2) {
    res.push(str.splice(i, i + 2).join(""));
  }
  return res;
};
