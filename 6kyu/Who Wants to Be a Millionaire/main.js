/*

Everybody wants to become a millionaire, don't you? In this kata, we'll evaluate a game of "Who Wants to Be A Millionaire?"

* Note that we use a custom game format in this kata!

Task
Calculate the total cash prize a player earned while playing a game of "Who Wants to Be A Millionaire?", given the prize fund for each question, the correct answers, and the actions the player made during the game.

Input
prize fund:
an array containing 15 integers, each being the prize fund for the corresponding question. For instance: [100, 200, 300, 400, 800, ...]

correct answers:
an array containing 15 letters, each being the correct answer for the corresponding question. The letters represent each of the four possible answers: "A", "B", "C", "D"

player actions:
an array containing at most 15 strings (less if game ended earlier), each being one or more actions the player made for the corresponding question. Actions the player can take:
1. Answer a question: "A", "B", "C", "D"
2. Walk away before the host asks the next question: "W"
3. Stop after the hosts asks a question, without answering: "X"
4. In addition, the player can use zero, one or more life lines, these are prepended to the player action: "1A", "23X", "3B", ...
Possible life lines:
1. "1" 50/50
2. "2" Phone a Friend
3. "3" Ask the Audience

Output
return an array of 2 integers, the first integer being the total cash prize the player earned playing the game, and the second integer being the total amount of life lines used: example [20000, 1] player earned 20000 total cash prize and used 1 lifeline

*/

// solution
