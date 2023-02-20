/*

Translations appreciated

Background information
The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

[ + ] It's simple to implement
[ + ] Compared to other versions of hamming code, we can correct more mistakes
[ - ] The size of the input triples
Task 1: Encode function
Implement the encode function, using the following steps:

convert every letter of the text to its ASCII value; (ASCII value of space is 32)
convert ASCII values to 8-bit binary;
triple every bit;
concatenate the result;
For example:

input: "hey"
--> 104, 101, 121                  // ASCII values
--> 01101000, 01100101, 01111001   // binary
--> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
--> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
Task 2: Decode function:
Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:

111 --> 101 : this can and will happen
111 --> 11 : this cannot happen
Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

Steps:

Split the input into groups of three characters;
Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
Take each group of 8 characters and convert that binary number;
Convert the binary values to decimal (ASCII);
Convert the ASCII values to characters and concatenate the result
For example:

input: "100111111000111001000010000111111000000111001111000111110110111000010111"
--> 100, 111, 111, 000, 111, 001, ...  // triples
-->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
--> 01101000, 01100101, 01111001       // bytes
--> 104, 101, 121                      // ASCII values
--> "hey"

*/

// solution

function encode(text) {
  let asciiText = text.split("").map((c) => c.charCodeAt());
  console.log(asciiText);
  let binText = asciiText.map((v) =>
    v.toString(2).length < 8
      ? ("00000000" + v.toString(2)).slice(-8)
      : v.toString(2)
  );
  let prepared = binText.join("").split("");
  let res = [];

  for (let i = 0; i < prepared.length; i++) {
    res.push(prepared[i].repeat(3));
  }
  return res.join("");
}

function decode(bits) {
  let groups = bits.match(/.{3}/g);

  let correctBits = groups.map((e) => {
    let ones = (e.match(/1/g) ?? []).length;
    let zeros = (e.match(/0/g) ?? []).length;

    return ones > zeros ? "1" : "0";
  });

  let bytes = correctBits
    .join("")
    .match(/.{8}/g)
    .map((e) => parseInt(e, 2));

  return bytes.map((a) => String.fromCharCode(a)).join("");
}
