/*


Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Examples (in general form):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

See "Sample Tests" for your language.

Notes
Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
Ruby Don't use Ruby Prime class, it's disabled.

*/

// solution

function backwardsPrime(start, stop) {
  const isP = (num) => {
    if (num === 2 || num === 3) return true;
    if (!(num % 2) || !(num % 3) || num < 2) return false;

    let n = 5,
      sq = Math.sqrt(num);
    while (n <= sq) {
      if (!(num % n)) return false;
      n++;
    }
    return true;
  };

  let res = [];
  for (let i = start; i <= stop; i++) {
    if (isP(i)) {
      if (res.indexOf(i) != -1) {
        continue;
      }
      if (
        String(i).split("").reverse().join("") != i &&
        isP(String(i).split("").reverse().join(""))
      ) {
        res.push(i);
      }
    }
  }
  return res.filter((v) => v >= start && v <= stop).sort((a, b) => a - b);
}
