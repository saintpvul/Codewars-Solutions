/*

Create a regular expression capable of evaluating binary strings (which consist of only 1's and 0's) and determining whether the given string represents a number divisible by 7.

Note:

Empty strings should be rejected.
Your solution should reject strings with any character other than 0 and 1.
No leading 0's will be tested unless the string exactly denotes 0.


*/

// solution

// Write a regular expression to detect whether a binary number is divisible by 7
// It won't be accepted if you code something else like Function
const solution =
  /^(0|(10((0|11)(1|00))*(10|(0|11)01)|11)(01*0(0|101|1(1|00)((0|11)(1|00))*(10|(0|11)01)))*1)+$/;
