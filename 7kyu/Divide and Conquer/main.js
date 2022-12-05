/*

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.

*/

// solution

function divCon(x) {
  let sSum = 0,
    iSum = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      iSum += x[i];
    } else {
      sSum += +x[i];
    }
  }
  return iSum - sSum;
}

const divCon = (x) =>
  x.reduce((s, i) => (typeof i === "number" ? (s += i) : (s -= i)), 0);
