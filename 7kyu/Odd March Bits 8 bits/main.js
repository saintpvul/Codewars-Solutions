/*

Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110

*/

// solution

function bitMarch(n) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0];
  let newArr = [];
  if (n > 0 && n < 8) {
    for (let i = 0; i < n; i++) {
      arr.push(1);
      arr.shift();
    }
    do {
      newArr.push(Array(...arr));
      arr.shift();
      arr.push(0);
    } while (arr[0] !== 1);
    newArr.push(Array(...arr));
    return newArr;
  } else if (n === 0) {
    return [];
  } else {
    newArr.push([1, 1, 1, 1, 1, 1, 1, 1]);
    return newArr;
  }
}
console.log(bitMarch(2));
