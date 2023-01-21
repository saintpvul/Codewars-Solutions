/*

Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))

*/

// solution

function chained(functions) {
  return function (a) {
    for (let b = 0; b < functions.length; b++) {
      a = functions[b](a);
    }
    return a;
  };
}

function chained(functions) {
  return function (chain) {
    return functions.reduce(function (chain, f) {
      return f(chain);
    }, chain);
  };
}
