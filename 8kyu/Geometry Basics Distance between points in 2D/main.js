/*

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.

*/

// solution

const distanceBetweenPoints = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
