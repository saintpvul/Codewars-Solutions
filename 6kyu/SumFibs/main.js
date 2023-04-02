/*

Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.
Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;

*/

// solution

function sumFibs(n) {
    let fibs = [0, 1];
    let i = 2;
    while (fibs.length <= n) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
        i++;
    }
    return fibs.reduce((s, v) => (!(v % 2) ? (s += v) : s), 0);
}