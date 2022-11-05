/*

Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:Then remove the circle:
If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"

*/

// solution

function encode(s) {
  let o = s.slice(0, s.length / 2).split(""),
    e = s
      .slice(s.length / 2, s.length)
      .split("")
      .reverse(),
    encoded = [];

  for (let i = 0; i <= o.length; i++) {
    encoded.push(o[i]);
    encoded.push(e[i]);
  }

  return encoded.join("");
}

function decode(s) {
  let o = [],
    e = [],
    decoded = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      e.push(s[i]);
    } else {
      o.push(s[i]);
    }
  }
  e.reverse();
  decoded.push(o.join(""));
  decoded.push(e.join(""));

  return decoded.join("");
}
