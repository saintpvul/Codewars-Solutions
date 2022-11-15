/*

In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

*/

// solution

function nameThatNumber(num) {
  let baseNums = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
    },
    getKey = Object.keys(baseNums),
    getValue = Object.values(baseNums),
    takeNum = num.toString().split(""),
    currentNdx = 0,
    result = "";
  if (getKey.includes(num.toString())) {
    currentNdx = getKey.indexOf(num.toString());
    return getValue[currentNdx];
  } else {
    if (!getKey.includes(num.toString())) {
      takeNum[0] += "0";
    }
    for (let i = 0; i < takeNum.length; i++) {
      currentNdx = getKey.indexOf(takeNum[i]);
      result += getValue[currentNdx] + " ";
    }
    return result.trim();
  }
}

const nameThatNumber = (n) => {
  const a = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    b = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  return n ? a[n] || b[~~(n / 10)] + (n % 10 ? " " + a[n % 10] : "") : "zero";
};
