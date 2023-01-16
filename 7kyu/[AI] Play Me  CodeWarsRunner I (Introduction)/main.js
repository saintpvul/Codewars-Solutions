/*

[AI] Play Me : CodeWarsRunner I (Introduction)
Introduction
Are you bored or tired of coding in the same way as usual? Here, meet the CodeWarsRunner game. You don't have to play it by yourself. Instead, your AI will do it for you! Very simple, just press keys, run, and reach goals in all stages. That's it!

Task
You have to write an AI, AI(game) function, to receive an object of arcade game framework, TooGameCWR. Your AI should play and solve all stages available. Key pressing, game inspecting, and game status are managed by the framework API. For more information, please see in the API listing below.

Game Briefing:
6 basic test levels and 100 random test levels
Start with 5 lives
Dying cost you 1 life and restart the playing level.
Constant horizontal move speed: 10 unit/s
A goal on floor: area 10 units
Goal reach attempt must be done within goal area, otherwise you die. Successful attempt will automatically proceed you to the next level.
Key Mapping:
Horizontal move:
Left: ← or <
Right: → or >
Goal reach attempt: X or x (minimum 1 second required)
CodeWarsRunner Framework API:
TooGameCWR.inspectTG()
Output : { lives: n, currentLevel: l, objects: [Object, Object, ...] }
n as integer : a number of current lives available
l as integer : an index of current level
[Object, Object, ...] as Array : an array of visible objects related to the player's location, sorted by locations
Object : { type: t, location: [x1, x2], height: h }
t as string : Currently, only goal available
x1, x2 as float : Boundaries of the object, x1 < x2
h as float : Height of the object
TooGameCWR.press(KeyStroke)
Input KeyStroke as string : "KnKnKn..."
K as character (see in Key Mapping) followed by n as number of time in second, can be either integer or float. The command execution will be terminated if the stage is cleared or when you die.
Output : depends on playing status after keypress command is executed
Playing : Output as same as TooGameCWR.inspectTG(), the status is reported immediatly after the command execution is done.
Clearing the stage : 'Cleared!' / 'All Cleared!'
Dying : 'Died!'
Game over : 'Game Over!'
TooGameCWR.status()
Output : { lives: n, currentLevel: l, level_status: [bool, bool, ...] }
n as integer : a number of current lives available
l as integer : an index of current level
[bool, bool, ...] as Array : an array of level pass status, true if cleared, false otherwise.
Note 1: All float values evaluated are rounded to 2 decimal places, except input.
Note 2: If all stages are cleared, TooGameCWR.inspectTG() and TooGameCWR.press(KeyStroke) will return "All Cleared!". Conversely, it will be "Game Over!" if all lives have been consumed.
Note 3: TooGameCWR.getFullInfo() is not allowed in real test cases.
Examples:
// Basic

function AI(game){
  game.inspectTG();
  // First level
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [100, 110], height: 0 } ]
  // }
  
  game.press('→2');
  // Move right 2 seconds * speed 10 unit/s = 20 units
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [80, 90], height: 0 } ]
  // }
  
  game.press('→3.5');
  // Move right 3.5 seconds * speed 10 unit/s = 35 units
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [45, 55], height: 0 } ]
  // }
  
  game.press('→1.156');
  // Move right 1.1156 seconds * speed 10 unit/s = 11.156 > 11.16 units (rounded the result to 2 decimal places)
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [33.84, 43.84], height: 0 } ]
  // }
  
  game.press('→3.5');
  // Move right 3.5 seconds * speed 10 unit/s = 35 units (to goal location)
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [-1.16, 9.16], height: 0 } ]
  // }
  
  game.press('X1');
  // 'Cleared!'
  
  game.inspectTG();
  // Automatically changed to next level
  // {
  //   lives: 5,
  //   currentLevel: 1,
  //   objects: [ { type: 'goal', location: [-1234, -1244], height: 0 } ]
  // }
}
// Dying + Get clear status

function AI(game){
  game.inspectTG();
  // Started, outside goal location
  // {
  //   lives: 2,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [50, 60], height: 0 } ]
  // }
  
  game.press('→2');
  // Move right 20 units
  // {
  //   lives: 2,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [30, 40], height: 0 } ]
  // }
  
  game.press('X5');
  // Dummy goal reach attempting, resulting in death and level reset
  // 'Died!'
  
  game.inspectTG();
  // {
  //   lives: 1,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [50, 60], height: 0 } ]
  // }

  game.press('X1');
  // Trigger death, waste the last life
  // 'Game Over!'
  
  game.inspectTG();
  // 'Game Over!'
  
  game.status();
  // Get clear status, assuming 2 levels in total
  // {
  //   lives: 0,
  //   currentLevel: 0,
  //   level_status: [false, false]
  // }
}
// Multiple pressing commands + Get clear status

function AI(game){
  game.inspectTG();
  // Started, get the info
  // {
  //   lives: 5,
  //   currentLevel: 0,
  //   objects: [ { type: 'goal', location: [1000, 1010], height: 0 } ]
  // }
  
  game.press('→30>50>10→10x1');
  // →30 : Move right 300 units
  // >50 : Move right 500 units
  // >10 : Move right 100 units
  // →10 : Move right 100 units
  // Stand at 1000 units then attempt reaching goal
  // 'Cleared!'
  
  game.inspectTG();
  // Next level
  // {
  //   lives: 5,
  //   currentLevel: 1,
  //   objects: [ { type: 'goal', location: [-1150, -1160], height: 0 } ]
  // }
  
  game.press('<115X1');
  // 'Cleared!'
  
  game.status();
  // Get clear status, assuming 5 levels in total
  // {
  //   lives: 5,
  //   currentLevel: 2,
  //   level_status: [true, true, false, false, false]
  // }
}
Manual Tests
You can edit CWRunnerExample in the Example Test Cases as follow:

// Fixed cases: Location must be sorted

const CWRunnerExample = new TooGameCWR([
  [{ type: 'goal', location: [1, 2], height: 0 }],
  [{ type: 'goal', location: [-2, -1], height: 0 }],
  .
  .
  .
]);
// Random cases: n as integer number of random cases

const CWRunnerExample = new TooGameCWR(n);

*/

// solution
