/*

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

Tests round answers to 6 decimal places.

*/

// solution

function trianglePerimeter(triangle) {
  return (
    Math.hypot(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y) +
    Math.hypot(triangle.a.x - triangle.c.x, triangle.a.y - triangle.c.y) +
    Math.hypot(triangle.b.x - triangle.c.x, triangle.b.y - triangle.c.y)
  );
}
