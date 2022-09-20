/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

// solution

function isIsogram(str) {
  if (str.length <= 1) {
    return true;
  }
  let splitStr = str.toLowerCase().replace(/\s/gi, "").split("");
  let newArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (!newArr.includes(splitStr[i])) newArr.push(splitStr[i]);
  }
  if (newArr.join("") === splitStr.join("")) {
    return true;
  } else {
    return false;
  }
}

let check = "isogram",
  check2 = "Ass   ume",
  check3 = "";

console.log(isIsogram(check));
console.log(isIsogram(check2));
console.log(isIsogram(check3));
