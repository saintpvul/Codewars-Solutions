/*

Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

*/

// solution

function remove(string) {
  let output = string.replace(/!/g, ""),
    count = 0;
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "!") {
      count++;
    }
  }
  return output + "!".repeat(count);
}
