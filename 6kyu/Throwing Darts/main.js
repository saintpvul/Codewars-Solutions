/*

You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140

*/

// solution

function scoreThrows(radii) {
  let points = 0,
    bonus = false;

  if (radii[0] < 5) bonus = true;

  for (let i = 0; i < radii.length; i++) {
    if (radii[i] > 10) {
      bonus = false;
    }
    if (radii[i] >= 5 && radii[i] <= 10) {
      bonus = false;
      points += 5;
    }
    if (radii[i] < 5) points += 10;
  }

  if (bonus) points += 100;

  return points;
}
