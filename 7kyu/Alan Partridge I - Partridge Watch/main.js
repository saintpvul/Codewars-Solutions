/*

Backstory

To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

Task
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!

*/

// solution

function part(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (
      x[i].match(/Partridge|PearTree|Chat|Dan|Toblerone|Lynn|AlphaPapa|Nomad/)
    ) {
      sum++;
    }
  }
  return sum > 0
    ? "Mine's a Pint" + "!".repeat(sum)
    : "Lynn, I've pierced my foot on a spike!!";
}
