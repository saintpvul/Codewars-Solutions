/*

*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++

*/

// solution

const frame = (text, char) => {
    let maxLen = Math.max(...text.map((e) => e.length));
    let sides = char.repeat(maxLen + 4);
    let res = [];
    for (let i = 0; i < text.length; i++) {
        res.push(
            `${char} ${text[i]}${" ".repeat(
                maxLen - text[i].length + 1
            )}${char}`
        );
    }
    return `${sides}\n${res.join("\n")}\n${sides}`;
};
