/*

Boxlines
Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

Notes
Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
X,Y and Z are strictly positive, and can go as large as 2^16 - 1
This is my first kata, so I hope every one will enjoy it <3

*/

// solution

const f = (x, y, z) =>
  x + (x + 2) * y * z + y + (y + 2) * x * z + z + (z + 2) * x * y;
