/*

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

*/

// solution

function insideOut(x) {
  // Split the input string into an array of words
  const words = x.split(" ");

  const transformedWords = words.map((word) => {
    const letters = word.split("");
    const midIndex = Math.floor(word.length / 2);

    if (word.length % 2 === 0) {
      const firstHalf = letters.slice(0, midIndex).reverse().join("");
      const secondHalf = letters.slice(midIndex).reverse().join("");
      return firstHalf + secondHalf;
    } else {
      const firstHalf = letters.slice(0, midIndex).reverse().join("");
      const middleLetter = letters[midIndex];
      const secondHalf = letters
        .slice(midIndex + 1)
        .reverse()
        .join("");
      return firstHalf + middleLetter + secondHalf;
    }
  });

  return transformedWords.join(" ");
}
