/*

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

// solution

function nextSmaller(n) {
  const digits = n.toString().split("");
  let i = digits.length - 2;
  while (i >= 0 && digits[i] <= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;
  let j = i + 1;
  let max = j;
  while (j < digits.length) {
    if (digits[j] < digits[i] && digits[j] > digits[max]) {
      max = j;
    }
    j++;
  }
  [digits[i], digits[max]] = [digits[max], digits[i]];
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).sort((a, b) => b - a);
  if (left[0] === "0") return -1;
  return parseInt(left.concat(right).join(""), 10);
}
