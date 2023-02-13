/*

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

*/

// solution

function isAlt(word) {
  return word.split("").every((c, i) => {
    if (/[aeiou]/.test(word[0])) {
      if (!(i % 2) && /[aeiou]/.test(c)) {
        return true;
      } else if (i % 2 && !/[aeiou]/.test(c)) {
        return true;
      } else {
        return false;
      }
    }
    if (!/[aeiou]/.test(word[0])) {
      if (!(i % 2) && !/[aeiou]/.test(c)) {
        return true;
      } else if (i % 2 && /[aeiou]/.test(c)) {
        return true;
      } else {
        return false;
      }
    }
  });
}
