/*

You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.

Take note of performance

*/

// solution

function numericals(s) {
    const charCounts = {};
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
        result += charCounts[char];
    }

    return result;
}
