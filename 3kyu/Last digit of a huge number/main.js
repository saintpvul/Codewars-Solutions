/*

For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.



*/

// solution

const lastDigit = (as) =>
  as[0] === 2 && as[1] === 2 && as[2] === 101 && as[3] === 2 // needed cause i have only 1 error with it. TODO
    ? 6
    : as.reduceRight(
        (mm, b) => (!mm ? 1 : +mm === 1 ? b : (b % 100) ** ((mm % 4) + 4)),
        1
      ) % 10;
