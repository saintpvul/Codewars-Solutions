/*

Task
Given a scrambled path, return the number of rotations needed in horizontal direction to make a clear passage from top to bottom. There is always at least one configuration possible. Multiple solutions may be possible. Any valid solution passes this kata.

Input
rows: an array of strings, each representing a row that needs to be rotated in order to make a clear passage from top to bottom.
'x': a wall
'.': a tile of path
Output
return an array of integers, specifying the amount of rotations required to make a clear passage when all rows have been rotated.
zero: no rotations
positive: number of rotations to the left
negative: number of rotations to the right
Specification
Rotations
A rotation to the left, shifts all tiles to the left, adding the left most tiles back to the right.
A rotation to the right, shifts all tiles to the right, adding the right most tiles back to the left.
rows:     rotations: [0, 1, 0, -1]    clear passage:

xx.x      0                           xx.x
xxx.      1     // rotate left        xx.x
xx.x      0                           xx.x
x.xx     -1     // rotate right       xx.x
Clear Passage
a clear passage is formed when there is a continous path possible from any tile and the top row to any tile at the bottom row
a continous path is formed by having a chain of adjacent tiles in any of the 4 directions (up, down, left, right);
Clear passages:

xx.x    .xxx
xx.x    ...x 
x..x    xx.x
        xx.x
Input constraints
100 tests with 3 <= height <= 5 and 3 <= width <= 5
100 tests with 6 <= height <= 8 and 2 <= width <= 3
100 tests with 2 <= height <= 3 and 6 <= width <= 8
100 tests with 8 <= height <= 12 and 8 <= width <= 12
100 tests with 10 <= height <= 100 and 10 <= width <= 100
10 tests with 100 <= height <= 200 and 100 <= width <= 200
10 tests with 200 <= height <= 300 and 200 <= width <= 300
10 tests with 300 <= height <= 400 and 300 <= width <= 400
5 tests with 400 <= height <= 500 and 400 <= width <= 500
Examples
Straight path - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx

Straight path - scrambled

rows:     rotations: [1, 0, 0, -2]  clear passage:

xx.x      1                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
xxx.     -2                         x.xx

Complex path - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
x...      0                         x... 
xxx.      0                         xxx.

Complex path - scrambled

rows:     rotations: [0, 0, -1, 0]  clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
...x     -1                         x... 
xxx.      0                         xxx.


*/

//solution
