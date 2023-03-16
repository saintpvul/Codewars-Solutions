/*

mplement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:

["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

*/

// solution

function uniq(a) {
    let uniq = [];
    for (let i = 1; i <= a.length; i++) {
        if (a[i] != a[i - 1]) uniq.push(a[i - 1]);
    }
    return uniq;
}
