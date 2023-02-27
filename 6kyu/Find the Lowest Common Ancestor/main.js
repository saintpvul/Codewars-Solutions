/*

The Lowest Common Ancestor (LCA) of two nodes in a Tree is the lowest (i.e. deepest) node that has both specified nodes as descendants, where we define each node to be a descendant of itself.

"Given two nodes that are both part of the same tree, find the LCA and return its id. Each node will have a unique id."
Input
nodeA: the first node

nodeB: the second node

Output
Return the id of the LCA of both nodes.

Data Structures
Tree
A tree represents a hierarchical tree structure with a set of connected nodes. In this kata, there is no specific data structure for a tree. The root node (topmost node) will act as the tree.

Node
Each node in the tree can be connected to zero, one or more children, but must be connected to exactly one parent, except for the root node, which has no parent. In this kata, a node is connected to its parent using property up, its siblings using properties left and right, and its first child using property down. To get all children, call down and keep calling right until reaching a null pointer. Each node will also have a unique id.

Examples
Let's use a custom view of our example tree in JSON format, where each node is an object containing its id and an array containing all of its children. We'll end up with the recursive data structure below. All examples concern this tree.


{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: []
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
}

1. A node is the LCA of itself
LCA(node4, node4) = 4

LCA(node3, node3) = 3

LCA(node2, node2) = 2

LCA(node1, node1) = 1

2. Nodes in the same branch have one of both nodes as LCA
LCA(node1, node2) = 1

LCA(node1, node3) = 1

LCA(node1, node4) = 1

LCA(node2, node4) = 2

3. Nodes in different branches have the pivot node where both branches join as LCA
LCA(node3, node4) = 1

*/

// solution
