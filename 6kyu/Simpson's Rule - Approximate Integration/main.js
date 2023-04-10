/*

An integral:

∫
�
�
�
(
�
)
�
�
∫ 
a
b
​
 f(x)dx
can be approximated by the so-called Simpson’s rule:

�
−
�
3
�
(
�
(
�
)
+
�
(
�
)
+
4
∑
�
=
1
�
/
2
�
(
�
+
(
2
�
−
1
)
ℎ
)
+
2
∑
�
=
1
�
/
2
−
1
�
(
�
+
2
�
ℎ
)
)
3n
b−a
​
 (f(a)+f(b)+4∑ 
i=1
n/2
​
 f(a+(2i−1)h)+2∑ 
i=1
n/2−1
​
 f(a+2ih))
Here h = (b - a) / n, n being an even integer and a <= b.

We want to try Simpson's rule with the function f:

�
(
�
)
=
3
2
sin
⁡
(
�
)
3
f(x)= 
2
3
​
 sin(x) 
3
 
The task is to write a function called simpson with parameter n which returns the value of the integral of f on the interval [0, pi] (pi being 3.14159265359...).

Notes:
Don't round or truncate your results. See in "RUN EXAMPLES" the function assertFuzzyEquals or testing.
n will always be even.
We know that the exact value of the integral of f on the given interval is 2.
Please ask before translating.
Complement: you can see: https://www.codewars.com/kata/5562ab5d6dca8009f7000050/ about rectangle method and trapezoidal rule.

*/

// solution

function simpson(n) {
    const a = 0;
    const b = Math.PI;
    const h = (b - a) / n;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i <= n / 2; i++) {
        sum1 += f(a + (2 * i - 1) * h);
    }
    for (let i = 1; i < n / 2; i++) {
        sum2 += f(a + 2 * i * h);
    }
    return ((b - a) / (3 * n)) * (f(a) + f(b) + 4 * sum1 + 2 * sum2);
}

function f(x) {
    return (3 / 2) * Math.sin(x) ** 3;
}
