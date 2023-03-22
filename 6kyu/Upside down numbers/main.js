/*

Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!

If you like this Kata, please try

Simple Prime Streaming

Life without primes

Please also try the performance version of this kata at Upside down numbers - Challenge Edition

*/

// solution

function isStrobogrammatic(num) {
    const lookup = {
        0: "0",
        1: "1",
        6: "9",
        8: "8",
        9: "6",
    };

    const digits = String(num).split("");

    let strobogrammatic = "";
    for (let i = digits.length - 1; i >= 0; i--) {
        if (!lookup[digits[i]]) return false;
        strobogrammatic += lookup[digits[i]];
    }
    return strobogrammatic === num.toString();
}

function solve(x, y) {
    let count = 0;
    for (let i = x; i < y; i++) {
        if (isStrobogrammatic(i)) count++;
    }
    return count;
}
