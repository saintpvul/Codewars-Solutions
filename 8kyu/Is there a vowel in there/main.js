/*

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

// solution
function isVow(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if ("a" === String.fromCharCode(a[i])) {
      newArr.push("a");
    } else if ("e" === String.fromCharCode(a[i])) {
      newArr.push("e");
    } else if ("o" === String.fromCharCode(a[i])) {
      newArr.push("o");
    } else if ("u" === String.fromCharCode(a[i])) {
      newArr.push("u");
    } else if ("i" === String.fromCharCode(a[i])) {
      newArr.push("i");
    } else {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
