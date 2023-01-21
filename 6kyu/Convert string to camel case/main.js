/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

// solution

function toCamelCase(str) {
  str = str.replace(/[-_]/gi, " ");
  return str
    .split(" ")
    .map((w, i) => (i > 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join("");
}
