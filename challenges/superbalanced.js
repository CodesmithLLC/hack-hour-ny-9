/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  function maxDepth(root) {
    if (!root) return 0;
    const left = maxDepth(root.left) + 1;
    const right = maxDepth(root.right) + 1;
    return Math.max(left, right);
  }
  const left = maxDepth(tree.left);
  const right = maxDepth(tree.right);
  return Math.abs(left - right) < 2;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
