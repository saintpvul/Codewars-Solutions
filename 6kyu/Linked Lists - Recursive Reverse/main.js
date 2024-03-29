/*

Linked Lists - Recursive Reverse

Write a Recursive Reverse() function that recursively reverses a linked list. You may want to use a nested function for the recursive calls.

var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null

*/

// solution

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function reverse(head, prev = null) {
  if (!head) return prev;
  return reverse(head.next, new Node(head.data, prev));
}
