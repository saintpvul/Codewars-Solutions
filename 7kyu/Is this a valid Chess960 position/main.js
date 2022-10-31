/*

Fischer random chess, also known as Chess960, is a variant of chess, invented by Bobby Fischer on June 19, 1996.

The rules are the same as regular chess, but the starting position is randomized according to the Randomization Rules. Note that prior knowledge of chess is not required to solve this kata, however some basic knowledge like piece distribution, initial setup, ranks vs files etc. is assumed. Here is a quick refresher.

Randomization Rules

The 2nd and 7th rank stay the same as in a normal game, filled with pawns.
All the remaining white pieces must be on the 1st rank, and black pieces on the 8th rank.
The two bishops must start on differently colored squares.
The rooks must be located on either side of the king; in other words, the king must be placed on a square between the two rooks.
The queen and knights can be located on any remaining square in the rank.
Both White and Black share the same starting position, drawn at random, in accordance to these rules.

Side note: in accordance with these rules, there are a total of 960 possible starting positions, hence the name of the variant.

Representation of position

For the purpose of this kata:

Rooks are abbreviated as R
Knights are abbreviated as N
Bishops are abbreviated as B
Queen is abbreviated as Q
King is abbreviated as K
Since black mirrors white's setup, it is enough to list White's position to fully describe the position. Furthermore, only the first rank needs to be defined, as the second rank is filled with pawns regardless of situation.

A starting position is represented by an 8 character long String. Each character in the String denotes a specific piece, in order from left-to-right.

An example starting position would be: RNBQKBNR

Your task

Given a string representation, determine whether it represents a valid Chess960 starting position. Note that the input is guaranteed to represent one king, one queen, two rooks, two bishops and two knights, in some order. You do not have to validate for missing pieces or extra pieces.

*/

// solution
