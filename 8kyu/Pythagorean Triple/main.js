/*

Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false

*/

// solution

function isPythagoreanTriple(integers) {
  let sort = integers.sort((a, b) => a - b);
  return sort[0] ** 2 + sort[1] ** 2 === sort[2] ** 2;
}

console.log(isPythagoreanTriple([3, 4, 5]));

console.log(isPythagoreanTriple([8, 15, 17]));
