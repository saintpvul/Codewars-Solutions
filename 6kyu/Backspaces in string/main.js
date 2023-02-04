/*

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

// solution

function cleanString(s) {
  s = s.split("");

  let i = 0,
    res = [];

  while (s.length && i < s.length) {
    if (s[i] != "#" && s[i + 1] === "#") {
      i += 2;
      continue;
    } else if (s[i] === "#") {
      i++;
      res.pop();
    } else {
      res.push(s[i]);
      i++;
    }
  }
  return res.join("");
}
