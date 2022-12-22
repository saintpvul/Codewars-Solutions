/*

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

*/

// solution

const broken = (x) =>
  x
    .split("")
    .map((e) => (e === "0" ? (e = "1") : (e = "0")))
    .join("");
