/*

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

*/

// solution

function askForMissingDetails(list) {
  let res = [];
  for (let dev of list) {
    let info = Object.entries(dev);
    if (info.some((val) => val[1] === null)) {
      let idx = info.findIndex((val) => val[1] === null);
      dev.question = `Hi, could you please provide your ${info[idx][0]}.`;
      res.push(dev);
    }
  }
  return res;
}
