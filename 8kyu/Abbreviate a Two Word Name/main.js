/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:


*/

// solution

function abbrevName(name) {
  let split = name.toUpperCase().split(" ");
  return `${split[0].charAt()}.${split[1].charAt()}`;
}

let f = "Sam Harris";
console.log(abbrevName(f));
