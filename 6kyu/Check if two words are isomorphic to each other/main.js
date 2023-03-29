/*

Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

Task
In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

Your solution must be able to handle words with more than 10 characters.

Example
True:

CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS
False:

AB CC
XXY XYY
ABAB CD

*/

// solution

function isomorph(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    const map = {};
    const usedPositions = {};

    for (let i = 0; i < a.length; i++) {
        const charA = a[i];
        const charB = b[i];

        if (!map[charA]) {
            if (usedPositions[charB]) {
                return false;
            }

            map[charA] = charB;
            usedPositions[charB] = true;
        } else if (map[charA] !== charB) {
            return false;
        }
    }

    return true;
}
