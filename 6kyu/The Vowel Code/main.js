/*

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.



*/

// solution

function encode(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        string[i] = "1";
        break;
      case "e":
        string[i] = "2";
        break;
      case "i":
        string[i] = "3";
        break;
      case "o":
        string[i] = "4";
        break;
      case "u":
        string[i] = "5";
        break;
    }
  }
  return string.join("");
}

function decode(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "1":
        string[i] = "a";
        break;
      case "2":
        string[i] = "e";
        break;
      case "3":
        string[i] = "i";
        break;
      case "4":
        string[i] = "o";
        break;
      case "5":
        string[i] = "u";
        break;
    }
  }
  return string.join("");
}
