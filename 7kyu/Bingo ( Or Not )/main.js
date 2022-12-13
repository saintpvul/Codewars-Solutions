/*

For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

*/

// solution

function bingo(a) {
  let alph = "_abcdefghijklmnopqrstuvwxyz",
    bingo = {};
  for (let i = 0; i < a.length; i++) {
    let char = alph[a[i]];
    if (
      char === "b" ||
      char === "i" ||
      char === "n" ||
      char === "g" ||
      char === "o"
    ) {
      bingo[char] = 1;
    }
  }
  return Object.keys(bingo).length === 5 ? "WIN" : "LOSE";
}
