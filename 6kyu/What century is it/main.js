/*

Return the c of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

*/

// solution

function whatCentury(year) {
  let c = Math.ceil(year / 100);
  if (c > 10 && c < 20) return `${c}th`;
  switch (c % 10) {
    case 1:
      return `${c}st`;
    case 2:
      return `${c}nd`;
    case 3:
      return `${c}rd`;
    default:
      return `${c}th`;
  }
}
