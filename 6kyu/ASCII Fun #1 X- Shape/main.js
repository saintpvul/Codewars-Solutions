/*

You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

Examples

                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■


*/

// solution

function x(n) {
  let res = [],
    fill = "□".repeat(n).split("");
  for (let i = 0; i < n; i++) {
    fill[i] = "■";
    fill[n - i - 1] = "■";
    res.push(fill.join(""));
    fill = "□".repeat(n).split("");
  }
  return res.join("\n");
}
