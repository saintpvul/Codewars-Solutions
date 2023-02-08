/*

Linked Lists - Shuffle Merge

Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one list, taking nodes alternately between the two lists. So ShuffleMerge() with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null. If either list runs out, all the nodes should be taken from the other list. ShuffleMerge() should return the new list. The solution depends on being able to move nodes to the end of a list.

var first = 3 -> 2 -> 8 -> null
var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null
If one of the argument lists is null, the returned list should be the other linked list (even if it is also null). No errors need to be thrown in ShuffleMerge().

*/

// solution

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  let a = [],
    b = [],
    shuffle = [];
  while (first) {
    a.push(first.data);
    first = first.next;
  }
  while (second) {
    b.push(second.data);
    second = second.next;
  }
  for (let i = 0; a.length || b.length; i++) {
    if (a.length) {
      shuffle.push(a.shift());
    }
    if (b.length) {
      shuffle.push(b.shift());
    }
  }

  const getNext = (n, d) => {
    let node = new Node(d);
    node.next = n;
    return node;
  };

  let node = null;

  shuffle.reverse().map((n) => (node = getNext(node, n)));

  return node;
}
