/*

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

// solution

const getSize = (width, height, depth) => [
  (width * height + height * depth + depth * width) * 2,
  width * height * depth,
];
