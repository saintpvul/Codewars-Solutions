/*

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

*/

// solution

function longest(str) {
    let longestSubstr = "";
    let currentSubstr = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] >= str[i - 1]) {
            currentSubstr += str[i];
        } else {
            if (currentSubstr.length > longestSubstr.length) {
                longestSubstr = currentSubstr;
            }
            currentSubstr = str[i];
        }
    }

    if (currentSubstr.length > longestSubstr.length) {
        longestSubstr = currentSubstr;
    }

    return longestSubstr;
}
