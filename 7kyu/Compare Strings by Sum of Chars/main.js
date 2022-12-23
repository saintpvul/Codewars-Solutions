/*

Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal

*/

// solution

function compare(s1, s2) {
  if (s1 == null || /[^a-zA-Z]/g.test(s1)) s1 = "";
  if (s2 == null || /[^a-zA-Z]/g.test(s2)) s2 = "";
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  return (
    [...s1].reduce((v, x) => v + x.charCodeAt(0), 0) ==
    [...s2].reduce((v, x) => v + x.charCodeAt(0), 0)
  );
}
