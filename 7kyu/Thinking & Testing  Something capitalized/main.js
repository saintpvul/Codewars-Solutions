/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

// solution

function testit(s) {
  return s
    .split(" ")
    .map((c) => c.slice(0, c.length - 1) + c.slice(c.length - 1).toUpperCase())
    .join(" ");
}
