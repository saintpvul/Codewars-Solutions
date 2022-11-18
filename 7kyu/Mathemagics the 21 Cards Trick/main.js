/*

The Twenty-One Card Trick, also known as the 11th card trick or three column trick, is a simple self-working card trick that uses basic mathematics to reveal the user's selected card.
The game uses a selection of 21 cards out of a standard deck. These are shuffled and the player selects one at random. The cards are then dealt out face up in three columns of 7 cards each. The player points to the column containing their card. The cards are picked up and the process is repeated three times, at which point the magician reveals the selected card.

Source: Wikipedia

Your task is to implement an algorithm that is able to execute the Twenty-One Card Trick. To simplify things, the cards will be changed to the set of integers between 1 and 21(inclusive). The function will be passed as argument a member of the audience that has selected a certain card and has a method get_input that receives a list of 3 lists as arguments and returns the index of the column containing the selected card. Example:

const audience = new Audience(13);

> audience.getInput([[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]]);
1 // Since 13 is at the 2nd column
After 3 times it is asked, however, the audience member no longer will give an answer. Use these three functions invokations to discover which card the audience member has.

*/

// solution

function guessTheCard(audience) {
  let array = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
    ],
    answer = array[audience.getInput(array)];
  array = [
    [1, 2, 17, 18, 12, 13, 14],
    [3, 4, 10, 11, 19, 20, 21],
    [8, 9, 15, 16, 5, 6, 7],
  ];
  answer = array[audience.getInput(array)].filter((n) => answer.includes(n));
  array = [
    [1, 4, 17, 11, 12, 20, 7],
    [3, 9, 10, 16, 19, 13, 6],
    [8, 2, 15, 18, 5, 21, 14],
  ];
  answer = array[audience.getInput(array)].filter((n) => answer.includes(n));
  return answer[0];
}
