/*

Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

*/

// solution

// Add rooms here
var rooms = {
  firstRoom: {
    name: "red room",
    description: "the room is white? no. it's red",
    completed: true,
  },

  secondRoom: {
    name: "blue room",
    description: "the room is full of water",
    completed: true,
  },

  thirdRoom: {
    name: "black room",
    description: "where am i? is anybody here?",
    completed: false,
  },
};
