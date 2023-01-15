/*

Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

*/

// solution

function squareIt(int) {
  int = int.toString();
  let pSq = [
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289,
      324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961,
    ],
    length = int.length,
    res = [];
  if (pSq.indexOf(length) != -1) {
    while (int.length) {
      res.push(int.slice(0, Math.sqrt(length)));
      int = int.slice(Math.sqrt(length));
    }
  } else {
    return "Not a perfect square!";
  }
  return res.length > 1 ? res.join("\n") : res.join("");
}
