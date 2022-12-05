/*

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
Alphabet war Collection

*/

// solution

function alphabetWar(f) {
  let l = 0,
    r = 0,
    lS = {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
    },
    rS = {
      m: 4,
      q: 3,
      d: 2,
      z: 1,
    };

  for (let i = 0; i < f.length; i++) {
    if (Object.keys(lS).indexOf(f[i]) != -1) {
      l += Object.values(lS)[Object.keys(lS).indexOf(f[i])];
    } else if (Object.keys(rS).indexOf(f[i]) != -1) {
      r += Object.values(rS)[Object.keys(rS).indexOf(f[i])];
    }
  }
  return l > r
    ? `Left side wins!`
    : r > l
    ? "Right side wins!"
    : "Let's fight again!";
}
