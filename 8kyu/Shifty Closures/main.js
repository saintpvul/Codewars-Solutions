/*

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

*/

// solution

var nameA = "Abe";
var greet_abe = function () {
  return "Hello, " + nameA + "!";
};
let nameB = "Ben";
var greet_ben = function () {
  return "Hello, " + nameB + "!";
};
