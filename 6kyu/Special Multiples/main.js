/*

Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

Let's see some cases:

count_specMult(3, 200)  =>  6 

The first 3 primes are: 2, 3 and 5.

And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.
Happy coding!!

*/

// solution

function countSpecMult(n, mxval) {
    let prime = [];
    for (let i = 2; prime.length < n; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    function isPrime(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    let count = 0;
    for (let i = 1; i < mxval; i++) {
        let divisible = true;
        for (let j = 0; j < n; j++) {
            if (i % prime[j] !== 0) {
                divisible = false;
                break;
            }
        }
        if (divisible) {
            count++;
        }
    }
    return count;
}
