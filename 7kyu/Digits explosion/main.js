/*

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"


*/

//solution

function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    newStr += s[i].repeat(Number(s[i]));
  }
  return newStr;
}

console.log(explode("321"));
