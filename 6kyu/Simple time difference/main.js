/*

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.
In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!

*/

// solution
function solve(times) {
  const minutes = times
    .map((time) => {
      const [hour, minute] = time.split(":").map(Number);
      return hour * 60 + minute;
    })
    .sort((a, b) => a - b);

  let maxInterval = 0;
  for (let i = 0; i < minutes.length - 1; i++) {
    const interval = minutes[i + 1] - minutes[i];
    if (interval > maxInterval) {
      maxInterval = interval;
    }
  }

  const lastInterval = 1440 - minutes[minutes.length - 1] + minutes[0];
  if (lastInterval > maxInterval) {
    maxInterval = lastInterval;
  }

  const maxIntervalMinusOne = maxInterval - 1;
  const maxIntervalStr = `${Math.floor(maxIntervalMinusOne / 60)
    .toString()
    .padStart(2, "0")}:${(maxIntervalMinusOne % 60)
    .toString()
    .padStart(2, "0")}`;
  return maxIntervalStr;
}
