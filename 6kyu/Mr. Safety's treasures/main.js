/*

Introduction
Mr. Safety loves numeric locks and his Nokia 3310. He locked almost everything in his house. He is so smart and he doesn't need to remember the combinations. He has an algorithm to generate new passcodes on his Nokia cell phone.
postimage

Task
Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an algorithm to open his numeric locks. Can you do it without his Nokia 3310?

Input
The str or message (Python) input string consists of lowercase and upercase characters. It's a real object that you want to unlock.

Output
Return a string that only consists of digits.
Example
``` unlock("Nokia") // => 66542 unlock("Valut") // => 82588 unlock("toilet") // => 864538 ```

*/

// solution

function unlock(str) {
    const letterToDigit = {
        a: "2",
        b: "2",
        c: "2",
        d: "3",
        e: "3",
        f: "3",
        g: "4",
        h: "4",
        i: "4",
        j: "5",
        k: "5",
        l: "5",
        m: "6",
        n: "6",
        o: "6",
        p: "7",
        q: "7",
        r: "7",
        s: "7",
        t: "8",
        u: "8",
        v: "8",
        w: "9",
        x: "9",
        y: "9",
        z: "9",
    };

    let digits = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        if (letterToDigit[letter]) {
            digits += letterToDigit[letter];
        }
    }

    return digits;
}
