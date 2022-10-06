/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

// solution
function accum(s) {
  let str = "";
  let num = 1;
  for (let i = 0; i < s.length; i++) {
    str += `${s[i].repeat(num).toLowerCase()}-`;
    num++;
  }
  return str
    .split("-")
    .map((elem) => {
      return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
    })
    .join("-")
    .slice(str, str.length - 1);
}

console.log(accum("ZpglnRxqenU"));
