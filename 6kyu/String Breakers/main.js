/*

I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

*/

// solution

function stringBreakers(n, string) {
  string = string.split(" ").join("");

  let res = [];

  for (let i = 0; i < string.length; i += n) {
    res.push(string.slice(i, i + n));
  }

  return res.join("\n");
}
