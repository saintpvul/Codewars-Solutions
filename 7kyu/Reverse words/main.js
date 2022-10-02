/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// solution

function reverseWords(str) {
  let reverse = str.split("").reverse().join("").split(" ");
  let newArr = [];
  for (let i = reverse.length - 1; i >= 0; i--) {
    newArr.push(reverse[i]);
  }
  return newArr.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
