/*

100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.

*/

// solution

function mirror(text) {
    text = text.split(" ");
    let maxLen = Math.max(...text.map((e) => e.length));
    let sides = "*".repeat(maxLen + 4);
    let res = [];
    for (let i = 0; i < text.length; i++) {
        res.push(
            `${"*"} ${text[i].split("").reverse().join("")}${" ".repeat(
                maxLen - text[i].length + 1
            )}${"*"}`
        );
    }
    return `${sides}\n${res.join("\n")}\n${sides}`;
}
