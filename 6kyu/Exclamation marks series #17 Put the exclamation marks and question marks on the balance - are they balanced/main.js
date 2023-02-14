/*

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"

*/

// solution

function balance(left, right) {
  left = left.split("");
  right = right.split("");

  let count = [0, 0];
  for (let i = 0; i < left.length; i++) {
    if (left[i] === "!") {
      count[0] += 2;
    }
    if (left[i] === "?") {
      count[0] += 3;
    }
  }

  for (let i = 0; i < right.length; i++) {
    if (right[i] === "!") {
      count[1] += 2;
    }
    if (right[i] === "?") {
      count[1] += 3;
    }
  }
  return count[0] > count[1]
    ? "Left"
    : count[0] < count[1]
    ? "Right"
    : "Balance";
}

/*

function balance(left,right){
  let l = left.split('').map(e=>e === '!' ? 2 : 3).reduce((s,v)=> s+= v, 0),
      r = right.split('').map(e=>e === '!' ?  2 : 3).reduce((s,v)=> s+= v, 0)
  return l > r ? 'Left' : l < r ? 'Right' : 'Balance'
}

*/
