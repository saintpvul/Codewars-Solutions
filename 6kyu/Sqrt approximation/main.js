/*

We want to approximate the sqrt function. Usually this function takes a floating point number and returns another floating point number, but in this kata we're going to work with integral numbers instead.

Your task is to write a function that takes an integer n and returns either

an integer k if n is a square number, such that k * k == n or
a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
Examples
assert.deepEqual( sqrtApproximation(4), 2 );
assert.deepEqual( sqrtApproximation(5), [2,3] );
Note : pow and sqrt functions are disabled.

Remarks
In dynamic languages, return either a single value or an array/list. In Haskell, use Either.

*/

// solution

function sqrtApproximation(number) {
    let left = 0;
    let right = number;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === number) {
            return mid;
        } else if (mid * mid < number) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [right, left];
}
