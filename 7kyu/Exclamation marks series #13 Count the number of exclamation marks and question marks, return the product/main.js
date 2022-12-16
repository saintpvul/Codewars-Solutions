/*

Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20

*/

// solution

function product(string) {
  string = string.split("");
  let eMark = string.filter((e) => e === "!").length,
    qMark = string.filter((e) => e === "?").length;
  return eMark * qMark;
}
