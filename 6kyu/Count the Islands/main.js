/*

Summary
Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.

Islands
An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

Below you can see an example with 2 islands:

on the left in the form of a matrix of 1's and 0's
on the right in an equivalent stringified form using "X" and "~" characters for better readability
[
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
  [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
]
Specification
Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.

*/

// solution

function countIslands(image) {
    let result = 0;
    for (let y = 0; y < image.length; y++) {
        for (let x = 0; x < image[y].length; x++) {
            if (image[y]?.[x]) {
                result++;
                flood(image, x, y);
            }
        }
    }
    return result;
}

function flood(image, x, y) {
    if (image[y]?.[x]) {
        image[y][x] = 0;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
        ];
        for (const [dx, dy] of directions) {
            flood(image, x + dx, y + dy);
        }
    }
}
