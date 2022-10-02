/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

// solution

function squareDigits(num) {
  let split = num.toString().split("");
  let newArr = [];
  for (let i = 0; i < split.length; i++) {
    newArr.push(split[i] ** 2);
  }
  return Number(newArr.join(""));
}

console.log(squareDigits(9119));
