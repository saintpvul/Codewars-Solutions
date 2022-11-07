/*

Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

Consider an Example :
10 , could be expressed as a sum of 1 + 2 + 3 + 4 .
Task
Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

Notes
Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
Input >> Output Examples:

* consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

* consecutiveDucks(64)  ==>  return (false)

* consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  . 
Playing with Numbers Series
Playing With Lists/Arrays Series
Bizarre Sorting-katas
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/

// solution

function consecutiveDucks(num) {
  while (num > 2) {
    if (num % 2 != 0) return true;
    num = num / 2;
  }
  return false;
}
