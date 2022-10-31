/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

// solution

function sumTwoSmallestNumbers(numbers) {
  let first = Math.max(...numbers),
    second = Math.max(...numbers);

  if (numbers.length < 2) {
    return "Array is too short";
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < first && numbers[i] > 0) {
      second = first;
      first = numbers[i];
    } else if (numbers[i] < second && numbers[i] != first && numbers[i] > 0) {
      second = numbers[i];
    }
  }
  return first + second;
}
