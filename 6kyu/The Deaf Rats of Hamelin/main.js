/*

Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

Series
The deaf rats of Hamelin (2D)

*/

// solution

var countDeafRats = function (town) {
  if (!town) {
    return 0;
  } else {
    [l, r] = town.split("P");
    return ((l + r.split("").reverse().join("")).match(/O~|~O/g) || []).filter(
      (e) => e === "O~"
    ).length;
  }
};
