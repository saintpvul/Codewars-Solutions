/*

Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
If you like this kata, check out another one: Last Survivor Ep.3

*/

// solution

let alph = "abcdefghijklmnopqrstuvwxyza";

function duplicate(a) {
  let dup = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++)
      if (i != j)
        if (a[i] === a[j]) {
          dup.push(a[i]);
          break;
        }
    if (dup.length) break;
  }
  return dup;
}

function lastSurvivors(str) {
  let dup = duplicate(str.split(""));
  if (dup.length) {
    for (let i = 0; i < dup.length; i++) {
      for (let j = 0; j < 2; j++) {
        let remove = str.indexOf(dup[i]);
        str = str.slice(0, remove) + str.slice(remove + 1, str.length);
      }
      str += alph[alph.indexOf(dup[i]) + 1];
    }
    return lastSurvivors(str);
  }
  return str;
}
