/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/

// solution

Math.round = function (number) {
  let roundedNum = 0;
  let remainder = number % 1;

  if (remainder >= 0.5) {
    roundedNum = number + (1 - remainder);
  } else {
    roundedNum = number - remainder;
  }

  return roundedNum;
};

Math.ceil = function (number) {
  let intPart = number - (number % 1);
  let ceilNum = 0;

  if (number > intPart) {
    ceilNum = intPart + 1;
  } else {
    ceilNum = number;
  }

  return ceilNum;
};

Math.floor = function (number) {
  let intPart = number - (number % 1);

  return intPart;
};
