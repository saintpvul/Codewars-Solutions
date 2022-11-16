/*

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113

*/

// solution

function hexHash(code) {
  let chars = code.split(""),
    toCheck = [],
    sum = 0;
  for (let i = 0; i < chars.length; i++) {
    toCheck.push(chars[i].charCodeAt().toString(16));
  }
  return toCheck
    .join("")
    .replace(/\D/g, "")
    .split("")
    .reduce((s, v) => (s += Number(v)), 0);
}
