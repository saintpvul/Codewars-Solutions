/*

Inspired by the Fold an Array kata. This one is sort of similar but a little different.

Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

*/

// solution

function divideList(numbers) {
    const half = Math.floor(numbers.length / 2);
    return [numbers.slice(0, half), numbers.slice(half)];
}

function addLists(listA, listB) {
    if (listA.length < listB.length) {
        listA.unshift(0);
    }

    const results = [];
    for (let i = 0; i < listA.length; i++) {
        results.push(listA[i] + listB[i]);
    }

    return results;
}

function splitAndAdd(numbers, n) {
    if (numbers.length === 1) {
        return numbers;
    }

    for (let i = 0; i < n; i++) {
        const [a, b] = divideList(numbers);
        numbers = addLists(a, b);
    }

    return numbers;
}
