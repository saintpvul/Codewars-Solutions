/*

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

// solution

const letters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function correctPolishLetters(string) {
  let polLet = Object.keys(letters),
    regLet = Object.values(letters),
    ndx = 0;

  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (polLet.indexOf(string[i]) != -1) {
      ndx = polLet.indexOf(string[i]);
      str += regLet[ndx];
    } else {
      str += string[i];
    }
  }
  return str;
}

console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));
