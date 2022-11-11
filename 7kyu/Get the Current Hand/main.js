/*

Clash Royale is a tower rush video game which pits players in games featuring two players in which the objective is to destroy the most opposing towers.

Players build card decks in order to play.

It's crucial to know the opponent's card deck and the opponent's current hand in order to play good.
Let's help those who can't count the cards successfully.

Card Deck Example:

Full Deck Example
Current Hand Example:

Current Hand Example
Each deck in Clash Royale has 8 cards, and you can have 4 cards at any time during the game.

After you play any card from your hand => this card goes to the end of the "queue" and goes back to your hand after you play another 4 cards. And so on.

Queue Scheme
Task:

Given an array of cards played in a certain order. You need to return the opponent's current hand (4 cards max) in any order.
If you receive less than 8 cards as an argument => return as many cards as we could possibly know from this play.

getCurrentHand(['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon']) // => ['Hog Rider', 'Earthquake']
Example:

currentHand([
  'Hog Rider',
  'Earthquake',
  'Archer Queen',
  'Giant Skeleton',
  'Fire Spirit',
  'Cannon',
  'Skeletons',
  'Hog Rider',
  'The Log',
  'Fire Spirit',
  'Earthquake',
  'Giant Skeleton',
  'Skeletons',
  'Archer Queen',
  'Fire Spirit',
  'Cannon',
  'Giant Skeleton',
  'Skeletons',
]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']
Explanation:

The current hand definitely can't contain:

'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'

Because they're the last played cards withing the 4-card range.

Archer Queen => definitely in the current hand (no Archer Queen in the last 4 cards played)
Skeletons => not in the current hand (we can see Skeletons in the last 4 cards played)

...and so on...

Good luck!

*/

// solution
