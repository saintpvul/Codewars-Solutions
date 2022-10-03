/*

Dave owns a car park for 3 cars which is so narrow that he has to park the cars nose to tail.

Dave isn't a confident driver and is unwilling to reverse the cars so he operates a FIFO system.

The car park is open from 9am in the morning and Dave always makes sure it is empty at close of business the previous day.

Everyday Dave's customers tell Dave (with 100% accuracy and reliability) what time they will arrive and leave - these times are expressed as the number of minutes since 9am.

If the car park is full Dave turns any new arrival away. As he's thinking of expanding Dave wants to know how many cars he's turning away each day.

So can you create function: turnAway, which will calculate this.

turnAway must accept an array of pairs of start and finish times (minutes since 9am in both cases) which will be ordered by start time e.g.:

 [[48,120],[48,120],[48,120],[48,120]]
and return the number of cars turned away, in other words cars that arrive when the car park is full (which you can determine from the arrival and departure times of each car) - which in the above example, as 4 cars all turn up at 9.48 and there are only 3 spaces, is 1

*/

// solution

function turnAway(arrivals) {}
