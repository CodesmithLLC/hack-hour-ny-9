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

function superbalanced(curNode) {
  if (curNode.value === null) return true;

  function checkBalance(curNode) {
    if (curNode.left && !curNode.right) {
      if (curNode.left.left || curNode.left.right) {
        return false;
      }
    } else if (curNode.right && !curNode.left) {
      if (curNode.right.left || curNode.right.right) {
        return false;
      }
    }

    return checkBalance(curNode.left) && checkBalance(curNode.right);
  }

  return checkBalance(curNode);

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
