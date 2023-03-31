/*

Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.

*/

// solution

function encode(input) {
    let count = 1;
    let res = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i + 1] != input[i]) {
            res += count + input[i];
            count = 1;
        } else {
            count++;
        }
    }
    return res;
}

function decode(input) {
    let amount = input
        .replace(/[^0-9]/g, " ")
        .trim()
        .split(" ")
        .filter((n) => n);
    let chars = input
        .replace(/[0-9]/g, " ")
        .trim()
        .split(" ")
        .filter((c) => c);
    let res = "";
    for (let i = 0; i < chars.length; i++) {
        res += chars[i].repeat(amount[i] * 1);
    }
    return res;
}
