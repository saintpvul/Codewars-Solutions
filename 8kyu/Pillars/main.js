/*

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

// solution

function pillars(numPill, dist, width) {
  return numPill > 1
    ? dist * 100 * (numPill - 1) + (width * numPill - width * 2)
    : 0;
}
