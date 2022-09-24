/*

#Your Task Implement our beloved Array,prototype.filter from scratch.

Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]
Not allowed:

Array.prototype.filter
Array.prototype.forEach
I can't disable forEach since console.log needs it and the Test Cases require console.log implicitly, but please don't use it since forEach does most of the work.
Array.prototype.reduce/reduceRight
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.fiter is a function that takes a predicate function and an object as a context
The predicate function receives the current item, the index and the array itself
The context will be this inside the predicate function
NOTE

As always, take into account that an array built with [] and new Array(elemn1, elem2...) is different in content than a new Array(length).

*/

// solution
