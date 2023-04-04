/*

We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]
If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]
Range for the random tests: 1000 <= n <= 200000

(The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)

Happy coding!!

*/

// solution

function primeBefAft(num) {
    let prev = num - 1;
    let next = num + 1;

    function isPrime(n) {
        if (n < 2) {
            return false;
        }
        if (n === 2) {
            return true;
        }
        if (n % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (!(n % i)) {
                return false;
            }
        }
        return true;
    }

    while (prev >= 2) {
        if (isPrime(prev)) {
            break;
        }
        prev--;
    }
    while (true) {
        if (isPrime(next)) {
            break;
        }
        next++;
    }
    return [prev, next];
}
