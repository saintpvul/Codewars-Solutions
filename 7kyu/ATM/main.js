/*

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

*/

// solution

function solve(n) {
  let count = 0,
    nums = [500, 200, 100, 50, 20, 10];

  for (let i of nums) {
    while (i <= n) {
      n = n - i;
      count += 1;
    }
  }
  return n !== 0 ? -1 : count;
}
