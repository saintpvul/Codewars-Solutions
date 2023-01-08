/*

A rook is a piece used in the game of chess which is played on a board of square grids. A rook can only move vertically or horizontally from its current position and two rooks attack each other if one is on the path of the other. In the following figure, the dark squares represent the reachable locations for rook R1 from its current position. The figure also shows that the rook R1 and R2 are in attacking positions where R1 and R3 are not. R2 and R3 are also in non-attacking positions.

Screenshot-2

Now, given two numbers n and k, your job is to determine the number of ways one can put k rooks on an nxn chessboard so that no two of them are in attacking positions.

NOTE: The k rooks are indistinguishable / interchangeable - this means that in the above illustration, for example, swapping rook R1 with rook R2 does not count as a new configuration - it is just a "relabelling" of the same configuration.

Range: (1 ≤ n ≤ 15) and (0 ≤ k ≤ n2)

*/

// solution

function rooks(n, k) {
  let result = 1n;
  for (let i = 0n; i < k; i++) {
    result *= n * n;
    n -= 1n;
    result /= i + 1n;
  }
  return result;
}
