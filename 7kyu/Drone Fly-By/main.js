/*

The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

*/

// solution

function flyBy(lamps, drone) {
  let pos = drone.indexOf("T"),
    on = lamps.slice(0, pos + 1).replace(/x/g, "o"),
    off = lamps.slice(pos + 1, lamps.length);

  return on + off;
}

const flyBy = (lamps, drone) =>
  lamps.slice(0, drone.indexOf("T") + 1).replace(/x/g, "o") +
  lamps.slice(drone.indexOf("T") + 1, lamps.length);
