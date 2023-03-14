/*

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.

*/

// solution

function isIntArray(arr) {
    if (!arr) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!Number.isInteger(element) || !Number.isSafeInteger(element)) {
            return false;
        }
    }
    return true;
}
