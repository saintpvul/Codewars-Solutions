/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// solution

function solution(string) {
  let res = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      res.push(" ");
    }
    res.push(string[i]);
  }
  return res.join("");
}
