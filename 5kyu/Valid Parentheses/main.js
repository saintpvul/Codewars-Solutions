/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

// solution

function validParentheses(parens) {
  let open = [];
  parens = parens.split("");
  for (let p of parens) {
    if (p === "(") {
      open.push(p);
    } else {
      if (!open.length) return false;
      let last = open[open.length - 1];
      if (p === ")" && last === "(") {
        open.pop();
      } else {
        break;
      }
    }
  }
  return open.length === 0;
}
