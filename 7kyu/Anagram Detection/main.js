/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"



*/

// solution

/* hashMap doesnt work on codewars

function chars(str) {
  let charObj = {};
  str = str.toLowerCase().replace(/^\w/g);
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

function isAnagram(test, original) {
	if(test.length != original.length){
		return false
	}
  const testChars = chars(test),
    originalChars = chars(original);

  if (Object.keys(testChars).length != Object.keys(originalChars).length) {
    return false;
  }
  console.log(testChars);
  console.log(originalChars);
  for (let char of testChars) {
    if (testChars[char] !== originalChars[char]) {
      return false;
    }
  }
  return true;
}
*/

// low speed solution

const isAnagram = (test, original) =>
  test.toLowerCase().split("").sort().join("") ===
  original.toLowerCase().split("").sort().join("");
