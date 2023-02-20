/*

Given a triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]
Note: your code should be optimized to handle big inputs.

*/

// solution

function oddRow(n) {
  let res = [],
    count = n,
    startingValue = n * (n - 1) + 1;
  while (count) {
    res.push(startingValue);
    startingValue += 2;
    count--;
  }
  return res;
}

/*

a bit faster solution

function oddRow(n) {
  const res = [];
  const startingValue = n * (n - 1) + 1;
  for (let i = 0; i < n; i++) {
    res.push(startingValue + 2 * i);
  }
  return res;
}

*/
