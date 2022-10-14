/*

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

// solution

function stringy(size) {
  let str = "";
  return size % 2 === 0
    ? (str + 10).repeat(size / 2)
    : (str + 10).repeat(size / 2) + "1";
}

console.log(stringy(6));
