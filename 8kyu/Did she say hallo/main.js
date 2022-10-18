/*

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

*/

// solution

const validateHallo = (g) => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(g);

function validateHello(greetings) {
  let hello = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  for (let i = 0; i < greetings.length; i++) {
    for (let j = 0; j < hello.length; j++) {
      if (greetings.toLowerCase().split(/\W/)[i] === hello[j]) {
        return true;
      }
    }
  }
  return false;
}
