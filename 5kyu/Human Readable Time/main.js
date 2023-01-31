/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

// solution

function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600),
    m = Math.floor((seconds - h * 3600) / 60),
    s = seconds - m * 60;
  return `${("00" + h).slice(-2)}:${("00" + m).slice(-2)}:${("00" + s).slice(
    -2
  )}`;
}

const humanReadable = (seconds) =>
  `${("00" + Math.floor(seconds / 3600)).slice(-2)}:${(
    "00" + Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60)
  ).slice(-2)}:${(
    "00" +
    (seconds -
      Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60) * 60)
  ).slice(-2)}`;
