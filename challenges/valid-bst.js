/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let head = this.value;
  let temp = head;
  while (this.left != null || this.right != null) {
    if (temp.left.value > temp.value || temp.right.value < temp.value) return false
    if (temp.left != null) temp = temp.left;
    else temp = temp.right;
  }
  return true;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
