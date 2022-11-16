/*

Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing

*/

// solution

const likeOrDislike = (buttons) =>
  buttons.reduce((c, b) => (b === c ? Nothing : b), Nothing);

function likeOrDislike(buttons) {
  let dl = false,
    l = false;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons.length === 0) {
      return "Nothing";
    } else if (buttons.length === 1) {
      return buttons[i];
    } else if (buttons[i] === "Dislike" && !dl) {
      dl = true;
      l = false;
    } else if (buttons[i] === "Like" && !l) {
      l = true;
      dl = false;
    } else if (buttons[i] === "Dislike" && dl) {
      dl = false;
    } else if (buttons[i] === "Like" && l) {
      l = false;
    }
  }
  return dl ? "Dislike" : l ? "Like" : "Nothing";
}
