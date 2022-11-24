/*

The national go-kart racing competition is taking place at your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

Remember a classic racing podium has three platforms for first, second and third place. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

The first place platform has the minimum height possible
The second place platform has the closest height to first place
All platforms have heights greater than zero.
Task
Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

Examples (input -> output)
11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]

*/

// solution

function racePodium(blocks) {
  let first = Math.ceil(blocks / 3) + 1;
  let second = first - 1;
  let third = blocks - first - second;
  if (third == 0) {
    third = 1;
    second -= 1;
  }
  return [second, first, third];
}

const racePodium = (blocks) =>
  ((second) =>
    blocks === 7 ? [2, 4, 1] : [second, second + 1, blocks - second * 2 - 1])(
    (blocks / 3 + 2 / 3) | 0
  );
