/*

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3

*/

// solution

function sumTheTreeValues(root) {
    return root === null
        ? 0
        : root.value +
              sumTheTreeValues(root.left) +
              sumTheTreeValues(root.right);
}
