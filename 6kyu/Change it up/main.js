/*

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

// solution

function changer(str) {
  str = str.toLowerCase().split("");

  let alph = "abcdefghijklmnopqrstuvwxyza",
    res = [];

  for (let i = 0; i < str.length; i++) {
    if (alph.indexOf(str[i]) != -1) {
      res.push(
        /[aeiou]/.test(alph[alph.indexOf(str[i]) + 1])
          ? alph[alph.indexOf(str[i]) + 1].toUpperCase()
          : alph[alph.indexOf(str[i]) + 1].toLowerCase()
      );
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}

const changer = (str) => {
  const charCodes = [..."abcdefghijklmnopqrstuvwxyza"].map((c) =>
    c.charCodeAt(0)
  );

  return str
    .toLowerCase()
    .split("")
    .map((c) => {
      const idx = charCodes.indexOf(c.charCodeAt(0));
      return idx !== -1
        ? /[aeiou]/.test(String.fromCharCode(charCodes[idx + 1]))
          ? String.fromCharCode(charCodes[idx + 1]).toUpperCase()
          : String.fromCharCode(charCodes[idx + 1]).toLowerCase()
        : c;
    })
    .join("");
};
