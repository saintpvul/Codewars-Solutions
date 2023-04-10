/*

In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

Create the following function:

runningPace(distance, time)

Where: distance - A float with the number of kilometres

time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.

*/

// solution

function runningPace(distance, time) {
    if (distance === 1) return time;

    const totalSec =
        parseInt(time.split(":")[0], 10) * 60 +
        parseInt(time.split(":")[1], 10);
    const paceInSec = totalSec / distance;

    const mins = Math.floor(paceInSec / 60);
    const sec = Math.floor(paceInSec % 60);

    return `${mins}:${sec < 10 ? `0${sec}` : sec}`;
}
