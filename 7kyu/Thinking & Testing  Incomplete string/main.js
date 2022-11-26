/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

// solution

function testit(s) {
  //return s?
  //return s.substr(0,1) ?
  //return s.substr(0,s.length/2) ?
  return s.replace(/../g, (s) =>
    String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2)
  );
}
