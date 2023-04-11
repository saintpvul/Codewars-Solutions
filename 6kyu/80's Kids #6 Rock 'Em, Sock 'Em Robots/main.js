/*

You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

Example:

 robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 }
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 }
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }
 
 fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

Rules

A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
Robots alternate turns attacking. Tactics are used in order.
A fight is over when a robot has 0 or less health or both robots have run out of tactics.
A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."
To Java warriors

Robot class is immutable.

Check out my other 80's Kids Katas:
80's Kids #1: How Many Licks Does It Take
80's Kids #2: Help Alf Find His Spaceship

80's Kids #3: Punky Brewster's Socks

80's Kids #4: Legends of the Hidden Temple

80's Kids #5: You Can't Do That on Television

80's Kids #6: Rock 'Em, Sock 'Em Robots

80's Kids #7: She's a Small Wonder

80's Kids #8: The Secret World of Alex Mack

80's Kids #9: Down in Fraggle Rock

80's Kids #10: Captain Planet

*/

// solution

//too slow

// function fight(robot1, robot2, tactics) {
//     let winner = "";
//     let firstMove = -1;

//     if (robot1.speed < robot2.speed) {
//         firstMove = 1;
//     }

//     while (robot1.health > 0 && robot2.health > 0) {
//         if (firstMove) {
//             for (let i = 0; i < robot2.tactics.length; i++) {
//                 robot1.health -= tactics[robot2.tactics[i]];
//                 robot2.health -= tactics[robot1.tactics[i]];
//                 if (robot1.health <= 0 || robot2.health <= 0) {
//                     break;
//                 }
//             }
//             firstMove = 0;
//         } else {
//             for (let i = 0; i < robot1.tactics.length; i++) {
//                 robot2.health -= tactics[robot1.tactics[i]];
//                 robot1.health -= tactics[robot2.tactics[i]];
//                 if (robot1.health <= 0 || robot2.health <= 0) {
//                     break;
//                 }
//             }
//             firstMove = 1;
//         }
//     }

//     if (robot1.health <= 0 && robot2.health <= 0) {
//         winner = "The fight was a draw.";
//     } else if (robot1.health <= 0) {
//         winner = robot2.name + " has won the fight.";
//     } else {
//         winner = robot1.name + " has won the fight.";
//     }

//     return winner;
// }

function fight(robot1, robot2, tactics) {
    const robots =
        robot1.speed >= robot2.speed ? [robot1, robot2] : [robot2, robot1];
    let tactic = 0;

    let index = 0;
    while (
        robot1.health > 0 &&
        robot2.health > 0 &&
        (robot1.tactics.length > tactic || robot2.tactics.length > tactic)
    ) {
        let [attacking, defending] = [robots[index], robots[1 - index]];

        if (attacking.tactics.length > tactic) {
            defending.health -= tactics[attacking.tactics[tactic]];
        }

        if (index === 1) {
            ++tactic;
        }

        index = 1 - index;
    }

    return robot1.health > robot2.health
        ? `${robot1.name} has won the fight.`
        : robot2.health > robot1.health
        ? `${robot2.name} has won the fight.`
        : "The fight was a draw.";
}
