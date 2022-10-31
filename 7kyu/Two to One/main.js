/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

// solution

function longest(s1, s2) {
  let letters = s1.split("").concat(s2.split("")),
    uniq = Array.from(new Set(letters)),
    sorted = uniq.sort();
  return sorted.join("");
}
