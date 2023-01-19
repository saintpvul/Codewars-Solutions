/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

// solution

function rot13(str) {
  let s1 = "abcdefghijklmnopqrstuvwxyz";
  let s2 = "NOPQRSTUVWXYZABCDEFGHIJKLM".toLowerCase();
  const replacer = str.replace(/[a-z]/gi, (v) => {
    return v === v.toUpperCase()
      ? s2[s1.indexOf(v.toLowerCase())].toUpperCase()
      : s2[s1.indexOf(v.toLowerCase())].toLowerCase();
  });
  return replacer;
}
