/*

Connect Four
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.

*/

// solution

function whoIsWinner(piecesPositionList) {
  const dict = { A: 35, B: 36, C: 37, D: 38, E: 39, F: 40, G: 41 },
    res = new Array(42).fill("-"),
    rRegExp =
      /((R.{6}){3}R)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})R{4}))|(^((.{3,6}|.{10,13}|.{17,20})(R.{5}){3}R))|(^(.{0,3}|.{7,10}|.{14,17})(R.{7}){3}R)/,
    yRegExp =
      /((Y.{6}){3}Y)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})Y{4}))|(^((.{3,6}|.{10,13}|.{17,20})(Y.{5}){3}Y))|(^(.{0,3}|.{7,10}|.{14,17})(Y.{7}){3}Y)/;
  for (let s of piecesPositionList) {
    res[dict[s[0]]] = s[2];
    dict[s[0]] -= 7;
    if (rRegExp.test(res.join(""))) return "Red";
    if (yRegExp.test(res.join(""))) return "Yellow";
  }
  return "Draw";
}
