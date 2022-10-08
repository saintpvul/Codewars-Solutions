/*

Story
POTUS thinks he is all alone in the White House on Christmas Eve.

But is he?

The White House has a wall-penetrating radar security system that sees everything.

Kata Task
Process the radar image.

Return true if POTUS really is home alone.

Legend
# walls
X POTUS
o elves
Notes
The house corners are square only
The radar can also see into nearby buildings
Examples
ex1
   o                o        #######
 ###############             #     #
 #             #        o    #     #
 #  X          ###############     #
 #                                 #
 ###################################

*/

// solution

function allAlone(m) {
  let h = m.length,
    w = m[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let potus = () => {
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) if (m[y][x] == "X") return [y, x];
    return [-1, -1];
  };
  let hash = (y, x) => y * w + x;
  let inside = (y, x) => y >= 0 && x >= 0 && y < h && x < w && m[y][x] != "#";
  let q = [],
    seen = new Set();

  q.unshift(potus());
  while (q.length) {
    let [y, x] = q.pop();
    let i = hash(y, x);
    if (inside(y, x) && !seen.has(i)) {
      if (m[y][x] == "o") return false;
      seen.add(i);
      for (let [dy, dx] of dirs) {
        q.unshift([y + dy, x + dx]);
      }
    }
  }
  return true;
}

console.log(
  allAlone([
    "#################             ".split(""),
    "#     o         #   o         ".split(""),
    "#          ######        o    ".split(""),
    "####       #                  ".split(""),
    "   #       ###################".split(""),
    "   #                         #".split(""),
    "   #                  X      #".split(""),
    "   ###########################".split(""),
  ])
);
