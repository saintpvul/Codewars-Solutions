/*

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

// solution

function defineSuit(card) {
  let suits = {
    clubs: "♣",
    diamonds: "♦",
    hearts: "♥",
    spades: "♠",
  };
  let index;
  let foundedSign = card.replace(/\w/gi, "");
  let values = Object.values(suits);
  let keys = Object.keys(suits);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === foundedSign[0]) {
      index = i;
      break;
    }
  }
  return "" + keys[index];
}

console.log(defineSuit("K♥"));
console.log(defineSuit("10♥"));
console.log(defineSuit("♥"));
