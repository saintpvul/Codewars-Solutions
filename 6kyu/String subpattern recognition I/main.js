/*

In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

If you liked it, go for the next kata of the series!

*/

// solution

function hasSubpattern(string) {
    for (let len = 1; len <= Math.floor(string.length / 2); len++) {
        if (string.length % len === 0) {
            const pattern = string.slice(0, len);
            let isPattern = true;
            for (let i = len; i < string.length; i += len) {
                if (string.slice(i, i + len) !== pattern) {
                    isPattern = false;
                    break;
                }
            }
            if (isPattern) {
                return true;
            }
        }
    }
    return false;
}
