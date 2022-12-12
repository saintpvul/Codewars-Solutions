/*

Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

*/

// solution

String.prototype.isLetter = function () {
  return this.length != 1
    ? false
    : this.toLowerCase().charCodeAt() >= 97 &&
        this.toLowerCase().charCodeAt() <= 122;
};
