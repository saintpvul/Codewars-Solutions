/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

// solution

function parse(data) {
  data = data.toLowerCase().split("");

  let output = [],
    number = 0;

  for (let command of data) {
    switch (command) {
      case "i":
        number += 1;
        break;
      case "d":
        number -= 1;
        break;
      case "s":
        number **= 2;
        break;
      case "o":
        output.push(number);
        break;
    }
  }

  return output;
}
