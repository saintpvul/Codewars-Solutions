/*

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

// solution

function sevenAte9(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 9 && str[i - 1] == 7 && str[i + 1] == 7) {
      continue;
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}

const sevenAte9 = (str) => str.replace(/79(?=7)/g, "7");
