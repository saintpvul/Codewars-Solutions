/*

In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!

If you like this Kata, try:

Dominant primes. It takes this idea a step further.

Consonant value

*/

// solution

function total(arr) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) return false;
    }
    return true;
  };

  return arr.reduce((s, v, i) => (s += isPrime(i) ? v : 0), 0);
}
