/*

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

*/

// solution

function mostFrequentItemCount(collection) {
  if (collection.length < 1) return 0;
  let count = 0,
    temp = 0;
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection.length; j++) {
      if (collection[j] === collection[i]) {
        temp++;
      }
    }
    if (temp > count) {
      count = temp;
    }
    temp = 0;
  }
  return count;
}

function mostFrequentItemCount(collection) {
  if (collection.length < 1) return 0;

  let map = {};
  for (let num of collection) {
    map[num] = (map[num] || 0) + 1;
  }
  return Math.max(...Object.values(map));
}
