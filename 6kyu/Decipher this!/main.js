/*

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'


*/

// solution

const decipherThis = (str) =>
  str
    .split(" ")
    .map((e) => e.replace(/\d+/g, (v) => String.fromCharCode(v * 1)))
    .map((e) =>
      e.length > 2
        ? e.slice(0, 1) + e.slice(-1) + e.slice(2, -1) + e.slice(1, 2)
        : e
    )
    .join(" ");
