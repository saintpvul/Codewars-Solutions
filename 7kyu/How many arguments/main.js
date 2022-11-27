/*

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/

// solution

const args_count = (...arguments) => arguments.length;
