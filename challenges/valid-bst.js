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
// should return true when left and right subtrees return true
function validBST(tree) {
 
  // tree with single node should be valid BST
  if (!tree.left && !tree.right) return true;
  if (tree.left.value > tree.value) return false;
  if (tree.right.value < tree.value) return false;
 
  // explore left subtree (if one exists)
  if (tree.left) {
    validBST(tree.left);
  }
 
  // explore right subtree (if one exists)
   if (tree.right) {
    validBST(tree.right);
  }
    
  return validBST(tree.left) && validBST(tree.right);
  
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
