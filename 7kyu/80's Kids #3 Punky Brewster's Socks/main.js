/*

Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.

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

function getSocks(person, socks) {
    const socksMap = {};
    for (const sock of socks) {
        socksMap[sock] = socksMap[sock] ? socksMap[sock] + 1 : 1;
    }

    if (person === "Punky") {
        for (const sock of socks) {
            const otherSock = socks.find((s) => s !== sock);
            if (otherSock && socksMap[sock] && socksMap[otherSock]) {
                return [sock, otherSock];
            }
        }
    } else if (person === "Henry") {
        for (const sock in socksMap) {
            if (socksMap[sock] > 1) {
                return [sock, sock];
            }
        }
    }

    return [];
}
