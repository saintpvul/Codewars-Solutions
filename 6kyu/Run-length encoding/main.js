/*

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

*/

// solution

var runLengthEncoding = function (str) {
  const arr = [];
  let value = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push([value, str[i]]);
      value = 1;
    } else {
      value++;
    }
  }
  return arr;
};
