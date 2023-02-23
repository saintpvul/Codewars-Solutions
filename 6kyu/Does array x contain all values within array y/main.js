/*

We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

For example:

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.containsAll([1, 2, 3]);  =>  true
items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array

*/

// solution

Object.defineProperty(Array.prototype, "containsAll", {
  value: function (a) {
    return a.every((elem) => this.includes(elem));
  },
});

/*
Array.prototype.containsAll = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!this.includes(arr[i])) {
      return false;
    }
  }
  return true;
};

*/
