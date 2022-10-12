/*

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

// solution
function position(letter) {
  let alph = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alph.length; i++) {
    if (alph[i] === letter) {
      return `Position of alphabet: ${i + 1}`;
    }
  }
}
