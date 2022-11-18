/*

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

// solution

const orderedCount = (text) => {
  text = text.split("");
  let count = 0,
    result = [],
    temp = [];
  for (let i = 0; i < text.length; i++) {
    temp.push(text[i]);
    for (let j = 0; j < text.length; j++) {
      if (text[j] === text[i]) {
        count++;
      }
    }
    if (temp.indexOf(text[i]) === temp.lastIndexOf(text[i])) {
      result.push([text[i], count]);
    }
    count = 0;
  }
  return result;
};
