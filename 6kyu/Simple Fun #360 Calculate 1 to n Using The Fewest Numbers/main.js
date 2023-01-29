/*

Task
You are given a positive integer n. Now we want to choose some numbers from 1 to n, and then doing some addition and subtraction(or doing nothing), all these numbers are used at most once. Eventually, all the numbers from 1 to n can be calculated.

Your task is to find the minimum amount of numbers you need to complete such calculations.

Still not understand the task? Look at the following example ;-)

Example
For n = 1, the output should be 1.

The number 1 is the only option and requires no addition and subtraction.

For n = 4, the output should be 2.

We can choose two numbers: 1 and 3.

1 == 1
3 - 1 == 2
3 == 3
3 + 1 == 4
All number from 1 to 4 can be calculated.
For n = 10, the output should be 3.

We can choose three numbers: 1, 3 and 6.

1 == 1
3 - 1 == 2
3 == 3
3 + 1 == 4
6 - 1 == 5
6 == 6
6 + 1 == 7
6 + 3 - 1 == 8
6 + 3 == 9
6 + 3 + 1 == 10
All numbers from 1 to 10 can be calculated.
Note
0 < n < 10^10

In order to avoid timeout, be aware of the code's performance ;-)

Happy Coding ^_^

*/

// solution

const fewestNumbers = (n) => Math.ceil(Math.log(n + n) / Math.log(3));
