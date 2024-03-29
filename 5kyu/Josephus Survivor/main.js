/*

In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

*/

// solution

function josephusSurvivor(n, k) {
  let d = k > n ? (k % n) - 1 : k - 1;
  if (d === -1) {
    d = n - 1;
  }

  let res = new Array(n);
  for (let i = 0; i < res.length; i++) {
    res[i] = i + 1;
  }

  while (res.length > 1) {
    res.splice(d, 1);
    d += k - 1;
    while (d >= res.length) {
      d -= res.length;
    }
  }
  return res[0];
}
