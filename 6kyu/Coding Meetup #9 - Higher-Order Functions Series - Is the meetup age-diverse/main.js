/*

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.

*/

// solution

function isAgeDiverse(list) {
  const ages = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let dev of list) {
    if (dev.age < 20) {
      ages[0]++;
    } else if (dev.age >= 20 && dev.age < 30) {
      ages[1]++;
    } else if (dev.age >= 30 && dev.age < 40) {
      ages[2]++;
    } else if (dev.age >= 40 && dev.age < 50) {
      ages[3]++;
    } else if (dev.age >= 50 && dev.age < 60) {
      ages[4]++;
    } else if (dev.age >= 60 && dev.age < 70) {
      ages[5]++;
    } else if (dev.age >= 70 && dev.age < 80) {
      ages[6]++;
    } else if (dev.age >= 80 && dev.age < 90) {
      ages[7]++;
    } else if (dev.age >= 90 && dev.age < 100) {
      ages[8]++;
    } else if (dev.age >= 100) {
      ages[9]++;
    }
  }
  return ages.every((age) => age >= 1);
}
