/*

Overview
N White frogs and N Black frogs are placed on either side of a line made up of 2*N + 1 spaces. The 1 "leftover" space is therefore empty, and is at the center of the line.

The N White frogs are placed on the left side and all face RIGHTWARDS, and the N Black frogs are placed on the right side all face LEFTWARDS.

Your goal is to get all the White frogs to the right half of the line, and all the Black frogs to the left half of the line.

N=2, start: WW_BB --> BB_WW :end

A white frog must move first, then you may choose from any of the 3 following moves, each encoded by a single letter w,b, or j:

w: move a White frog one space rightwards, if that space is empty. WWW_ -> WW_W
b: move a Black frog one space leftwards, if that space is empty. _BBB -> B_BB
j: make a rightwards jump with a White frog, or a leftwards jump with a Black frog, over ONE AND ONLY ONE frog of the opposite color, and only if the frog can land in the empty space. WB_B -> _BWB
Can you develop a general algorithm for arbitrary N that moves all the frogs to their end positions in the fewest number of moves?

Inputs and Outputs
You will be given an integer N which specifies the number of both types of frogs i.e. N White and N Black frogs. The board will therefore always be of size 2*N + 1.

You must return a string of the letters w, b, j, which encodes the moves your algorithm takes to solve the problem for a given value of N.

REMEMBER: a white frog must move first. With this condition, there will always be a unique optimal solution, which will consist of N**2 + 2*N moves, for every value of N.

Hint
You may be wondering how you can encode the different possible jump moves using only a single letter j - for example, if you somehow reached the configuration WB_WB there are 2 possible jump options: WB_WB -> _BWWB or WB_WB -> WBBW_, so how should you specify "which frog does the jump"?

Answer: in the optimal solution, every jump move will be uniquely defined.

So if your solution ever reaches a configuration where you find there are 2 or more possible jump options, you are guaranteed to eventually reach a dead-end, which means that your current list of moves will not lead to the correct answer!

Examples
N = 1, optimal solution

W_B # initial state
_WB # state after performing move: 'w'
BW_ # state after performing move: 'j'
B_W # state after performing move: 'w'
Solution string for N = 1 is therefore: 'wjw'. This solution is optimal and does indeed consist of N**2 + 2*N = 1+2 = 3 moves.

N = 2, optimal solution

WW_BB # initial state
W_WBB # state after performing move: 'w'
WBW_B # state after performing move: 'j'
WBWB_ # state after performing move: 'b'
WB_BW # state after performing move: 'j'
_BWBW # state after performing move: 'j'
B_WBW # state after performing move: 'b'
BBW_W # state after performing move: 'j'
BB_WW # state after performing move: 'w'
Solution string for N = 2 is therefore: 'wjbjjbjw'. This solution is optimal and does indeed consist of N**2 + 2*N = 4+4 = 8 moves.

*/

// solution

function whiteBlackFrogs(n) {
    let out = "";
    let frog = "w";

    for (let i = 1; i <= n; i++) {
        out += frog;
        frog = frog == "w" ? "b" : "w";
        out += "j".repeat(i);
    }

    frog = frog == "w" ? "b" : "w";

    for (let i = n - 1; i >= 1; i--) {
        out += frog;
        frog = frog == "w" ? "b" : "w";
        out += "j".repeat(i);
    }

    out += frog;

    return out;
}
