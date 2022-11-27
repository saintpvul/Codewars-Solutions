/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

// solution

function count(string) {
  let output = {};
  string = string.toLowerCase().replace(/[^\w]/g);
  for (let char of string) {
    output[char] = output[char] + 1 || 1;
  }
  return output;
}
