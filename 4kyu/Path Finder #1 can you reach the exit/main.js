/*

Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked ..
Walls are marked W.
Start and exit positions are empty in all test cases.
Path Finder Series:
#1: can you reach the exit?
#2: shortest path
#3: the Alpinist
#4: where are you?
#5: there's someone here

*/

// solution

function pathFinder(maze) {
  const table = maze.split("\n").map((row) => row.split(""));
  const maxLen = table[0].length - 1;
  const stack = [[0, 0]];

  while (stack.length > 0) {
    const element = stack.pop();
    const x = element[1];
    const y = element[0];

    if (element[0] === maxLen && element[1] === maxLen) {
      return true;
    }

    if (table[y][x] === "#") {
      continue;
    }

    // Check right
    if (x + 1 <= maxLen && table[y][x + 1] === "." && table[y][x + 1] !== "#") {
      stack.push([y, x + 1]);
    }

    // Check down
    if (y + 1 <= maxLen && table[y + 1][x] === "." && table[y + 1][x] !== "#") {
      stack.push([y + 1, x]);
    }

    // Check up
    if (y - 1 >= 0 && table[y - 1][x] === "." && table[y - 1][x] !== "#") {
      stack.push([y - 1, x]);
    }

    // Check left
    if (x - 1 >= 0 && table[y][x - 1] === "." && table[y][x - 1] !== "#") {
      stack.push([y, x - 1]);
    }

    table[y][x] = "#";
  }

  return false;
}
