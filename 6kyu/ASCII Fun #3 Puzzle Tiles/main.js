/*

Because my other two parts of the serie were pretty well received I decided to do another part.

Puzzle Tiles
You will get two Integer n (width) and m (height) and your task is to draw following pattern. Each line is seperated with '\n'.

Both integers are equal or greater than 1. No need to check for invalid parameters.
There are no whitespaces at the end of each line.
e.g.:
 

                                       _( )__ _( )__ _( )__ _( )__
                                     _|     _|     _|     _|     _|
                                    (_   _ (_   _ (_   _ (_   _ (_
                                     |__( )_|__( )_|__( )_|__( )_|
                                     |_     |_     |_     |_     |_
             puzzleTiles(4,3)=>       _) _   _) _   _) _   _) _   _)
                                     |__( )_|__( )_|__( )_|__( )_|
                                     _|     _|     _|     _|     _|
                                    (_   _ (_   _ (_   _ (_   _ (_
                                     |__( )_|__( )_|__( )_|__( )_|
                                     

For more informations take a look in the test cases!


Serie: ASCII Fun
ASCII Fun #1: X-Shape
ASCII Fun #2: Funny Dots
ASCII Fun #3: Puzzle Tiles
ASCII Fun #4: Build a pyramid

*/

// solution

function puzzleTiles(width, height) {
  let res = "";
  for (let i = 1; i <= height; i++) {
    if (i == 1)
      res +=
        width == 1 && height == 1
          ? "   _( )__\n"
          : "   _( )__" + " _( )__".repeat(width - 1) + "\n";
    if (i % 2 == 1) {
      res +=
        width == 1 && height == 1
          ? " _|     _|\n"
          : " _|     _|" + "     _|".repeat(width - 1) + "\n";
    } else {
      res +=
        width == 1 && height == 1
          ? " _|     _|\n"
          : " |_     |_" + "     |_".repeat(width - 1) + "\n";
    }
    if (i % 2 == 1) {
      res +=
        width == 1 && height == 1
          ? "(_   _ (_\n"
          : "(_   _ (_" + "   _ (_".repeat(width - 1) + "\n";
    } else {
      res +=
        width == 1 && height == 1
          ? "(_   _ (_\n"
          : "  _) _   _)" + " _   _)".repeat(width - 1) + "\n";
    }
    res +=
      width == 1 && height == 1
        ? " |__( )_|"
        : " |__( )_|" + "__( )_|".repeat(width - 1);
    if (i != height) {
      res += "\n";
    }
  }
  return res;
}
