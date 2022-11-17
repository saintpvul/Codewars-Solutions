/*

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

*/

// solution

function tidyNumber(n) {
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    if (n[i] > n[i + 1]) {
      return false;
    }
  }
  return true;
}
