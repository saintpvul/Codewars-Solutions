/*

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


*/

// solution

function solution(input, markers) {
  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < markers.length; j++) {
      const index = lines[i].indexOf(markers[j]);
      if (index !== -1) {
        lines[i] = lines[i].substring(0, index).trim();
      }
    }
  }

  return lines.join("\n");
}
