/*

Johnny wants to play code golf, but he doesn't like the normal rules for assigning a score based on the number of characters in the code.

Johnny likes concise code, but Johnny would like to be able to read his own code.

Johnny can't read hieroglyphics because Johnny was not born in Ancient Egypt.

Johnny likes beautiful code.

Johnny also loves whitespace.

Johnny thinks code that looks like a waterfall is more beautiful than code that looks like a pancake.

There is just one problem...

...

...

Johnny doesn't know how to code!

:face-palm:

Johnny needs your help!

Your job is to write a function to score a game of code golf by Johnny's rules. The rules for scoring are as follows:

all whitespace characters are counted as 0 strokes
consecutive alphanumeric characters (includes underscore) are grouped together, and the group counts as 1 stroke
non-alphanumeric characters (except underscore) are each counted as 1 stroke
Your function will be passed a string. You should calculate the number of strokes from the string and return the score as an integer.

The test cases are very descriptive with short examples that illustrate the rules in more detail. You should definitely give them a read through before you start coding, especially if you are unsure about the rules.

Note: in the test cases I am using ES6 template strings to pass the argument-string. The beginning and ending backticks are not part of the actual argument-string.

*/

// solution

const golfScore = (code) => (code.match(/\w+|\S/g) || []).length;
