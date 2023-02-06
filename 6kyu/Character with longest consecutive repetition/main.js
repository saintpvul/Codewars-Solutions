/*

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)

*/

// solution

function longestRepetition(s) {
  let char = "",
    count = 1,
    temp = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (temp.every((s) => s < count)) {
        char = s[i] + count;
      }
      temp.push(count);
      count = 1;
    }
  }
  return !char ? ["", 0] : [char.slice(0, 1), char.slice(1) * 1];
}
