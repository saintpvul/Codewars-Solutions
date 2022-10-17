/*

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

*/

// solution

function uniTotal(string) {
  return string
    .split("")
    .reduce((accum, item) => (accum += item.charCodeAt()), 0);
}

console.log(uniTotal("a"));
console.log(uniTotal("aaa"));
