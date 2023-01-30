/*

After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

a bingo card



*/

// solution

function getCard() {
  let r = [];
  for (let j = 0; j < 5; j++) {
    let b = `B${Math.floor(Math.random() * 15) + 1}`;
    if (r.indexOf(b) === -1) {
      r.push(b);
    } else {
      j--;
    }
  }

  for (let j = 0; j < 5; j++) {
    let i = `I${Math.floor(Math.random() * 15) + 16}`;
    if (r.indexOf(i) === -1) {
      r.push(i);
    } else {
      j--;
    }
  }

  for (let j = 0; j < 4; j++) {
    let n = `N${Math.floor(Math.random() * 15) + 31}`;
    if (r.indexOf(n) === -1) {
      r.push(n);
    } else {
      j--;
    }
  }

  for (let j = 0; j < 5; j++) {
    let g = `G${Math.floor(Math.random() * 15) + 46}`;
    if (r.indexOf(g) === -1) {
      r.push(g);
    } else {
      j--;
    }
  }

  for (let j = 0; j < 5; j++) {
    let o = `O${Math.floor(Math.random() * 15) + 61}`;
    if (r.indexOf(o) === -1) {
      r.push(o);
    } else {
      j--;
    }
  }

  return r;
}
