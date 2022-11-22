/*

Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
With scrollY = 300 and sizes = [300,200,400,600,100]

the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]

the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).

*/

// solution

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY, sizes) {
  let sum = 0,
    ndx = -1;
  for (let i = 0; i < sizes.length; i++) {
    sum += sizes[i];
    if (sum > scrollY) {
      ndx = i;
      break;
    }
  }
  return ndx;
}

const getSectionIdFromScroll = (y, s) => {
  let t = 0;
  return s.findIndex((e) => (t += e) > y);
};
