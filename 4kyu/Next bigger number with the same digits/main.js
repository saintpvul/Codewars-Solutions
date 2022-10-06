/*

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

// solution

function nextBigger(n) {
  console.log(n);
  var chars = n.toString().split("");
  var i = chars.length - 1;
  while (i > 0) {
    if (chars[i] > chars[i - 1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length - 1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length - 1] = suf[i];
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(""));
  console.log("->" + num);
  return num;
}

console.log(nextBigger(51442));
