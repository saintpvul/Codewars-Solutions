/*

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/

// solution

function reverse(str) {
  let res = [];
  if (str.length <= 1) return "";
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      res.push(str[i].split("").reverse().join(""));
    } else {
      res.push(str[i]);
    }
  }
  return res.join(" ").trim();
}
