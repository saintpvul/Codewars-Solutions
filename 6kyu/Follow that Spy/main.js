/*

We are tracking down our rogue agent Matthew Knight also known as Roy Miller. He travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey.

Task
You are given an array of routes of his itineraries. List down the only places where he will go in correct order based on his itineraries.

Example
Given the following routes:

[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
The result will be:

"USA, BRA, UAE, JPN, PHL"
Note:

It is safe to assume that there will be no repeating place with a different route.
There are no empty routes.
There will be at least one (1) route (from one waypoint to another).

*/

// solution

function findRoutes(routes) {
    const trace = [];

    const startingPoint = routes.find(
        (pair) => !routes.some((p) => p[1] === pair[0])
    );
    trace.push(startingPoint[0], startingPoint[1]);

    while (trace.length < routes.length + 1) {
        const nextPoint = routes.find(
            (pair) => pair[0] === trace[trace.length - 1]
        );
        trace.push(nextPoint[1]);
    }

    return trace.join(", ");
}
