/*

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

*/

// solution

function findChildren(dancingBrigade) {
  let parent = dancingBrigade
      .split("")
      .filter((e) => e === e.toUpperCase())
      .sort(),
    children = dancingBrigade
      .split("")
      .filter((e) => e === e.toLowerCase())
      .sort(),
    res = [];
  for (let i = 0; i < parent.length; i++) {
    res.push(parent[i]);
    for (let j = 0; j < children.length; j++) {
      if (parent[i] === children[j].toUpperCase()) {
        res.push(children[j]);
      }
    }
  }
  return res.join("");
}

const findChildren = (str) =>
  str
    .toLowerCase()
    .split("")
    .sort()
    .map((v, i, a) => (i === 0 || v !== a[i - 1] ? v.toUpperCase() : v))
    .join("");
