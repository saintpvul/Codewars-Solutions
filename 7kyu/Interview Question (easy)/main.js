/*

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)

*/

// solution

function getStrings(city) {
  let output = "";
  city = city.toLowerCase().split(" ").join("").split("");
  let charsCount = {};
  for (let char of city) {
    charsCount[char] = charsCount[char] + 1 || 1;
  }
  let chars = Object.keys(charsCount),
    charsAmount = Object.values(charsCount);
  for (let i = 0; i < chars.length; i++) {
    output += chars[i] + ":";
    output += "*".repeat(charsAmount[i]) + ",";
  }
  return output.slice(0, -1);
}
