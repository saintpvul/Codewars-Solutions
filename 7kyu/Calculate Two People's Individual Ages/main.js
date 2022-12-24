/*

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

*/

// solution

const getAges = (s, diff) =>
  s >= 0 && diff >= 0 && s >= diff
    ? [s / 2 + diff / 2, s / 2 - diff / 2]
    : null;
