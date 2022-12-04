/*

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

*/

// solution

function findUniq(arr) {
  let values = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join("");
  });
  for (let i = 0; i < values.length; i++) {
    if (values.indexOf(values[i]) === values.lastIndexOf(values[i])) {
      return arr[i];
    }
  }
}
