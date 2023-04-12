/*

You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

With your last movements, you've decided to draw an "X" marks the spot for the next archaeologist.

Given an odd number, n, draw an X for the next crew. Follow the example below.

markSpot(5) ->

X       X
  X   X
    X
  X   X
X       X

For a clearer understanding of the output, let '.' represent a space and \n the newline.
X.......X\n
..X...X\n
....X\n
..X...X\n
X.......X\n

markSpot(3) ->

X   X
  X
X   X  
If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.

The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.

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

function markSpot(n) {
    if (n === 1) {
        return "X\n";
    }

    if (n % 2 === 0 || isNaN(n) || n < 1) {
        return "?";
    }

    let result = [" ".repeat(n - 1) + "X"];
    let spaceStart = n - 3;
    let spaceMid = 3;

    while (result.length !== n) {
        let line = " ".repeat(spaceStart) + "X" + " ".repeat(spaceMid) + "X";
        result.push(line);
        result.unshift(line);
        spaceMid += 4;
        spaceStart -= 2;
    }
    return result.join("\n") + "\n";
}
