/*

Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string


*/

// solution

function sortVowels(s) {
  if (!s) return "";
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/.test(s[i].toLowerCase())) {
      res.push(`|${s[i]}`);
    } else {
      res.push(`${s[i]}|`);
    }
  }
  return res.join("\n");
}
