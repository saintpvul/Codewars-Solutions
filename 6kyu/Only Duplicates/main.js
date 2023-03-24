/*

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

// solution

function onlyDuplicates(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            continue;
        } else {
            res += str[i];
        }
    }
    return res;
}
