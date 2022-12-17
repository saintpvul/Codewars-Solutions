/*

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

*/

// solution

function evenOrOdd(str) {
  str = str.split("");
  return str.filter((e) => +e % 2).reduce((s, v) => (s += +v), 0) >
    str.filter((e) => +e % 2 === 0).reduce((s, v) => (s += +v), 0)
    ? "Odd is greater than Even"
    : str.filter((e) => +e % 2).reduce((s, v) => (s += +v), 0) <
      str.filter((e) => +e % 2 === 0).reduce((s, v) => (s += +v), 0)
    ? "Even is greater than Odd"
    : "Even and Odd are the same";
}
