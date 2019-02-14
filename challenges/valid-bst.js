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

// Assume that each value in the tree is unique
function validBST(tree) {
  if (!tree.left && !tree.right) return true;
  // recurse into the left and right subtrees to verify that BST constraints are satisfied
  if (tree.left.value > tree.value || tree.right.value < tree.value) return false;
  // recursively traverse left subtree if one exists
  if (tree.left) validBST(tree.left)
  // recursively traverse right subtree if one exists
  if (tree.right) validBST(tree.right)
  
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
