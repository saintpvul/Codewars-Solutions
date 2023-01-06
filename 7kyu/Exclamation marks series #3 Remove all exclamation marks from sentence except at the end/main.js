/*

Description:
Remove all exclamation marks from sentence except at the end.

Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"

*/

// solution

const remove = (string) => string.replace(/!+(?!!*$)/g, "");
