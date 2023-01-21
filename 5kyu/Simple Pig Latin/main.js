/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// solution

const pigIt = (str) =>
  str
    .split(" ")
    .map((w) => (/\w/.test(w) ? w.slice(1) + w[0] + "ay" : w))
    .join(" ");
