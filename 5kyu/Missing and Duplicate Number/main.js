/*

You are given an array containing all integers from 1 to N, except one that is missing.

In order to fill the array, one of the elements of the sequence has been duplicated.

Your mission is to find which number is missing and which one is duplicated.

Example:

solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.

Remarks:

You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one provided by the input array (which can be modified).

*/

// solution

function solution(array) {
    let missing = 0,
        duplicate = 0;
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let index = Math.abs(array[i]) - 1;
        if (array[index] > 0) {
            array[index] = -array[index];
        } else {
            duplicate = Math.abs(array[i]);
        }
    }
    for (let i = 0; i < n; i++) {
        if (array[i] > 0) {
            missing = i + 1;
            break;
        }
    }
    return [missing, duplicate];
}
