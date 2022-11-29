/*

Task
For every Lambda calculuswiki combinator, infinitely many equivalent SKI calculuswiki combinators exist.
Define a function that accepts a Lambda calculus combinator, as a string, and returns an equivalent SKI combinator, as a string.
You do not need to return a shortest or simplest possible combinator; any functionally correct combinator is acceptable.

Lambda calculus
Lambda calculus terms will use variable names, abstractions and applications only, and will be in the concise form, e.g. "λxyz.xz(yz)". They will be closed.

Variable names will be single lowercase letters only. There will be no empty applications.

Strictly speaking, "λx.x(λy.y)" does not require the parentheses around "λy.y", but abstractions within applications will always be parenthesised.

SKI calculus
SKI combinators can use 'S', 'K', 'I' and any number of balanced, non-empty parentheses "()", and nothing else.

Unnecessary parentheses will be gracefully ignored silently.

Your SKI combinator does not need to require as many arguments as the Lambda calculus combinator requires, i.e. for "λxy.xy", "I" is acceptable, though you may return "S(SK)" or equivalent.

Testing
The Submit tests will evaluate your SKI combinator and compare the outcome to the input, so any correct combinator will be accepted.

The Example tests, however, simply compare your SKI combinator to a single possible correct value. Your result may be correct but different, and in this case, the Example test will fail. This does not mean your solution is necessarily incorrect (!!) but complete testing would show parts of a possible solution. This test will fail with a simple test failure. If you are certain your combinator is correct, you can adjust the Example test yourself.
dist
Your result will also be tested for being a well-formed SKI combinator; if this test fails, it does mean your solution is incorrect. This test will fail with an Error.

All input will be valid.

*/

// solution
