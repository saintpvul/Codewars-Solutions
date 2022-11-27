/*

This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"

*/

// solution

function expandedForm(num) {
  num = num.toString().split`.`;
  let dig = num[0].split``
    .reverse()
    .map((val, i) => (val * 1 === 0 ? "" : val + "0".repeat(i)))
    .filter((val) => val)
    .reverse().join` + `;
  let dec = num[1].split``
    .map((val, i) => (val * 1 === 0 ? "" : val + "/" + "1" + "0".repeat(i + 1)))
    .filter((val) => val).join` + `;
  return [dig, dec].join` + `.replace(/^[^0-9]+/g, "");
}
