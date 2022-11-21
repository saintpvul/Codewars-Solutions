/*

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

// solution

const removeUrlAnchor = (url) =>
  url.indexOf("#") != -1
    ? url.split("").slice(0, url.lastIndexOf("#")).join("")
    : url;
