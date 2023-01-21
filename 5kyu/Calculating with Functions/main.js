/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

// solution

const calc = (num, math) => (!math ? num : math(num));

const zero = (math) => calc(0, math);
const one = (math) => calc(1, math);
const two = (math) => calc(2, math);
const three = (math) => calc(3, math);
const four = (math) => calc(4, math);
const five = (math) => calc(5, math);
const six = (math) => calc(6, math);
const seven = (math) => calc(7, math);
const eight = (math) => calc(8, math);
const nine = (math) => calc(9, math);

const plus = (n) => (x) => x + n;

const minus = (n) => (x) => x - n;

const times = (n) => (x) => x * n;

const dividedBy = (n) => (x) => Math.floor(x / n);
