/*

Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


*/

// solution

function myLanguages(results) {
  let res = Object.keys(results);
  return res
    .filter((value) => results[value] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

let check = { Java: 10, Ruby: 80, Python: 65 }; // -->  ["Ruby", "Python"]
let check2 = { Hindi: 60, Dutch: 93, Greek: 71 }; //-->  ["Dutch", "Greek", "Hindi"]
let check3 = { "C++": 50, ASM: 10, Haskell: 20 }; // -->  []

console.log(myLanguages(check));
