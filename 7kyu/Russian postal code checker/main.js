/*

You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

Examples
Valid postcodes:

198328
310003
424000
Invalid postcodes:

056879
12A483
1@63
111

*/

// solution

const zipvalidate = (postcode) =>
  postcode.length === 6 &&
  /^\d+$/.test(postcode) &&
  (postcode[0] == 1 ||
    postcode[0] == 2 ||
    postcode[0] == 3 ||
    postcode[0] == 4 ||
    postcode[0] == 6);

function zipvalidate(postcode) {
  return /^[12346]\d{5}$/.test(postcode);
}
