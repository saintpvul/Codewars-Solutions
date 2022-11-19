/*

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here

*/

// // solution

// function addLetters(...letters) {
//   return String.fromCharCode(
//     ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97
//   );
// }

// function addLetters(...letters) {
//   let letter=String.fromCharCode(letters.map(v=>v.charCodeAt()-96).reduce((a,b)=>a+b,0)%26+96)
//   return letter==='`'?'z':letter
// }
