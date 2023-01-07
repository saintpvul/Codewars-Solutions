/*

Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.

Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.

Path Finder Series:
#1: can you reach the exit?
#2: shortest path
#3: the Alpinist
#4: where are you?
#5: there's someone here


*/

// solution

function pathFinder(maze) {
  const canv = maze.split("\n").map((e) => e.split("")),
    q = [{ x: 0, y: 0, l: 0 }],
    n = canv.length - 1;

  while (q.length) {
    const { x, y, l } = q.shift();
    if (x == n && y == n) {
      return l;
    }
    canv[x][y] = "W";
    [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].forEach(([t1, t2]) => {
      if (canv[t1] && canv[t1][t2] && canv[t1][t2] != "W") {
        q.push({ x: t1, y: t2, l: l + 1 });
        canv[t1][t2] = "W";
      }
    });
  }
  return false;
}
