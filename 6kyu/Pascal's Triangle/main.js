/*

In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(
�
�
)
=
�
!
�
!
(
�
−
�
)
!
( 
k
n
​
 )= 
k!(n−k)!
n!
​
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

*/

// solution

function pascalsTriangle(n) {
  let res = [],
    index = 0;
  for (let i = 0; i < n; i++) {
    index = res.length - i;
    for (let j = 0; j < i + 1; j++) {
      if (!j || j === i) {
        res.push(1);
      } else {
        res.push(res[index + j] + res[index + j - 1]);
      }
    }
  }
  return res;
}
