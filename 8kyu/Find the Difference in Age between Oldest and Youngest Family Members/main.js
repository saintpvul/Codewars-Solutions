/*

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

*/

// solution

function differenceInAges(ages) {
  let youngest = ages.sort((a, b) => a - b)[0],
    oldest = ages.sort((a, b) => a - b)[ages.length - 1],
    diff = oldest - youngest;
  return [youngest, oldest, diff];
}

function differenceInAges(ages) {
  let youngest = Math.min(...ages),
    oldest = Math.max(...ages),
    diff = oldest - youngest;
  return [youngest, oldest, diff];
}

const differenceInAges = (ages) => [
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
];
