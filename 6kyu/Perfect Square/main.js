/*

Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:

`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";

// This is not a Perfect Square:

`..,
 ..
 ...`

*/

// solution

function perfectSquare(string) {
  string = string.split("\n");
  for (let sub of string) {
    let dot = ".".repeat(string.length);
    if (sub.length != string.length) {
      return false;
    } else if (sub != dot) {
      return false;
    }
  }
  return true;
}
