/*

If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

Examples
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]

*/

// solution

function numberToWord(num) {
    const int = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    return num
        .toString()
        .split("")
        .map((i) => int[+i])
        .join("");
}

function numbersOfLetters(integer) {
    let res = [numberToWord(integer)];
    let current = numberToWord(res[0].length);
    while (res[res.length - 1] !== current) {
        res.push(current);
        current = numberToWord(current.length);
    }
    return res;
}
