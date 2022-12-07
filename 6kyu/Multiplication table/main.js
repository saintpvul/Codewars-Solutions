/*

our task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

*/

// solution

const multiplicationTable = (size) => {
  let output = [];
  for (let i = 1; i <= size; i++) {
    let num = Array(size)
      .fill(1)
      .map((e, ndx) => (e + ndx) * i);
    output.push(num);
  }
  return output;
};
