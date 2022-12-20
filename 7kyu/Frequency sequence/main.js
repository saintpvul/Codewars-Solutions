/*

Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

*/

// solution

function freqSeq(str, sep) {
  str = str.split("");
  let res = [],
    counter = {};
  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  for (let i = 0; i < str.length; i++) {
    res.push(counter[str[i]]);
  }
  return res.join(sep);
}
