/*

Check your arrows
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

// solution

function anyArrows(arrows) {
  let sum = 0;
  for (let i = 0; i < arrows.length; i++) {
    if (arrows[i].damaged === true) {
      sum++;
    }
  }
  return sum < arrows.length;
}

const anyArrows = (arrows) => arrows.some((arrow) => !arrow.damaged);
