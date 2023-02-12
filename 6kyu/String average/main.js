/*

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

*/

// solution

function averageString(str) {
  if (!str.length) return "n/a";
  let numbers = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      zero: 0,
    },
    res = 0;
  str = str.split(" ");
  for (let num of str) {
    res += numbers[num];
  }

  res = Math.floor(res / str.length);

  return res === 1
    ? "one"
    : res === 2
    ? "two"
    : res === 3
    ? "three"
    : res === 4
    ? "four"
    : res === 5
    ? "five"
    : res === 6
    ? "six"
    : res === 7
    ? "seven"
    : res === 8
    ? "eight"
    : res === 9
    ? "nine"
    : res === 0
    ? "zero"
    : "n/a";
}
