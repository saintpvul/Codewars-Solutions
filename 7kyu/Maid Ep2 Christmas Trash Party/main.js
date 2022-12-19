/*

His Royal Highness Prince of Edinburgh cares a lot about the ecology and propagates waste sorting. Once per year, He organizes the Christmas Trash Party, where His employees sort the garbage that the Prince has been thrown during the year. Obviously, you want to participate in this High day.

Task
You will receive trash1 and trash2, that might be the next values:

[], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'

You have to return a boolean if they are strictly equal.

However
The Prince says when He was young, there weren't softies who were afraid to get their hands dirty, so He doesn't let His employees use gloves for work (triple equals === and strict inequality !== are not allowed).

These links might help:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
https://github.com/denysdovhan/wtfjs

*/

// solution

function compareTrash(trash1, trash2) {
  return trash1 == trash2 && typeof trash1 == typeof trash2;
}
