/*

ou are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Symmetry with respect to the main cross diagonal: diag_2_sym (or diag2Sym or diag-2-sym)

diag_2_sym(s) => "plhd\nokgc\nnjfb\nmiea"
Counterclockwise rotation 90 degrees: rot_90_counter (or rot90Counter or rot-90-counter)

rot_90_counter(s)=> "dhlp\ncgko\nbfjn\naeim"
selfie_diag2_counterclock (or selfieDiag2Counterclock or selfie-diag2-counterclock) It is initial string + string obtained by symmetry with respect to the main cross diagonal + counterclockwise rotation 90 degrees .

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim"
or printed for the last:

selfie_diag2_counterclock
abcd|plhd|dhlp
efgh|okgc|cgko
ijkl|njfb|bfjn
mnop|miea|aeim
Task
Write these functions diag_2_sym, rot_90_counter, selfie_diag2_counterclock
and

high-order function oper(fct, s) where fct is the function of one letiable f to apply to the string s (fct will be one of diag_2_sym, rot_90_counter, selfie_diag2_counterclock)
Examples
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_2_sym, s) => "plhd\nokgc\nnjfb\nmiea"
oper(rot_90_counter, s) => "dhlp\ncgko\nbfjn\naeim"
oper(selfie_diag2_counterclock, s) => "abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim"
Notes
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Bash Note: The ouput strings should be separated by \r instead of \n. See "Sample Tests".

*/

// solution

function rot90Counter(strng) {
    let a = strng
        .split("\n")
        .map(function (x) {
            return [...x].reverse().join("");
        })
        .map(function (x) {
            return x.split("");
        });
    let b = a[0].map(function (_, c) {
        return a.map(function (r) {
            return r[c];
        });
    });
    return b
        .map(function (x) {
            return x.join("");
        })
        .join("\n");
}
function diag2Sym(strng) {
    return rot90Counter(strng)
        .split("\n")
        .map(function (x) {
            return [...x].reverse().join("");
        })
        .join("\n");
}
function selfieDiag2Counterclock(strng) {
    let newstr2 = diag2Sym(strng).split("\n");
    let newstr3 = rot90Counter(strng).split("\n");
    return strng
        .split("\n")
        .map(function (x, i) {
            return x + "|" + newstr2[i] + "|" + newstr3[i];
        })
        .join("\n");
}
function oper(fct, s) {
    return fct(s);
}
