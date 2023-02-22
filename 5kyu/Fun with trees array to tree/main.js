/*

You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15 
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

*/

// solution

function arrayToTree(array) {
  if (!array.length) {
    return undefined;
  }

  const root = new TreeNode(array[0]);
  const queue = [root];
  let i = 1;

  while (i < array.length) {
    const current = queue.shift();

    if (i < array.length) {
      const left = array[i++];
      if (left !== null) {
        current.left = new TreeNode(left);
        queue.push(current.left);
      }
    }

    if (i < array.length) {
      const right = array[i++];
      if (right !== null) {
        current.right = new TreeNode(right);
        queue.push(current.right);
      }
    }
  }

  return root;
}
