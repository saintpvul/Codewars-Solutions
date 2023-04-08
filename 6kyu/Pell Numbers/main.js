/*

The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1
and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)
The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...
Task
Your task is to write a method that returns nth Pell number

*/

// solution

function pell(n) {
    if (!n) {
        return 0n;
    }
    let prevPrev = 0n,
        prev = 1n;
    for (let i = 2; i <= n; i++) {
        let current = 2n * prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }
    return prev;
}
