/**
 * Write a function to see if a binary tree is "superbalanced".
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
  function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }
  if (Math.abs(getHeight(tree.left) - getHeight(tree.right) > 1)) return false;
  return true;
}

// let bst = new BinaryTree(10);
// bst.right = new BinaryTree(12);
// bst.right.left = new BinaryTree(11);
// bst.right.right = new BinaryTree(13);
// bst.left = new BinaryTree(5);
// bst.left.right = new BinaryTree(7);
// bst.left.right.right = new BinaryTree(13);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
