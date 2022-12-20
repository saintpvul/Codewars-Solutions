/*

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/
/*
catchSignChange(arr) == 2;

*/

// solution

const catchSignChange = (arr) => {
  if (!arr) return 0;
  let count = 0,
    plus = false;
  if (arr[0] >= 0) {
    plus = true;
  } else if (arr[0] < 0) {
    plus = false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && plus === true) {
      plus = false;
      count++;
    } else if (arr[i] >= 0 && plus === false) {
      plus = true;
      count++;
    }
  }
  return count;
};
