/*

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold

*/

// solution

function longestWord(stringOfWords) {
  stringOfWords = stringOfWords.split(" ");
  let longest = [""];
  for (let i = 0; i < stringOfWords.length; i++) {
    if (longest[0].length <= stringOfWords[i].length) {
      longest.pop();
      longest.push(stringOfWords[i]);
    }
  }
  return longest.join("");
}
