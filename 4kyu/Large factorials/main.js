/*

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language. 

*/

// solution

function factorial(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return "1";
  } else {
    let result = [];
    result[0] = 1;
    for (let i = 2; i <= n; i++) {
      let carry = 0;
      for (let j = 0; j < result.length; j++) {
        let product = result[j] * i + carry;
        result[j] = product % 10;
        carry = Math.floor(product / 10);
      }
      while (carry > 0) {
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
      }
    }
    return result.reverse().join("");
  }
}
