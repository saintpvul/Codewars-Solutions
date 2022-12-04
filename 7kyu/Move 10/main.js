/*

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.



*/

// solution

function moveTen(s) {
  let alph = "abcdefghijklmnopqrstuvwxyzabcdefghijk",
    res = "";
  for (let i = 0; i < s.length; i++) {
    res += alph[alph.indexOf(s[i]) + 10];
  }
  return res;
}

const moveTen = (s) =>
  s
    .split("")
    .map((e) =>
      e.charCodeAt() > 112
        ? String.fromCharCode(e.charCodeAt() - 16)
        : String.fromCharCode(e.charCodeAt() + 10)
    )
    .join("");
