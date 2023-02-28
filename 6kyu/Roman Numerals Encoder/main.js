/*

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

*/

// solution

function solution(number) {
  // Define the Roman numeral symbols and their values
  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = "";

  // Loop through the Roman numeral symbols and their values
  for (let i = 0; i < romanSymbols.length; i++) {
    // While the number is greater than or equal to the current symbol value
    while (number >= romanValues[i]) {
      // Add the current symbol to the Roman numeral string
      romanNumeral += romanSymbols[i];
      // Subtract the current symbol value from the number
      number -= romanValues[i];
    }
  }

  return romanNumeral;
}
