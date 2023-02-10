/*

You have to create a function namedone_two (oneTwo for Java or Preloaded.OneTwo for C#) that returns 1 or 2 with equal probabilities. one_two is already defined in a global scope and can be called everywhere.

Your goal is to create a function named one_two_three (oneTwoThree for Java or OneTwoThree for C#) that returns 1, 2 or 3 with equal probabilities using only the one_two function.

Do not try to cheat returning repeating non-random sequences. There is a randomness test especially for this case.

*/

// solution

function one_two_three() {
  let random = one_two() - 2 + one_two() * 2;
  while (![1, 2, 3].some((n) => n === random)) {
    random = one_two() - 2 + one_two() * 2;
  }
  return random;
}
