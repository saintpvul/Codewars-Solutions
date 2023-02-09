/*

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

Vowel consonant lexicon

*/

// solution

function dup(s) {
  let res = [],
    temp = "";
  for (let word of s) {
    for (let i = 0; i < word.length; i++) {
      if (temp[temp.length - 1] != word[i]) {
        temp += word[i];
      }
      continue;
    }
    res.push(temp);
    temp = "";
  }
  return res;
}
