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
 
  // establish an output array closed over by the exterior function
 
  let prev = Math.max();
 
  function recurse(tree, prev) {
        
    // if left tree exists recurse until deepest leftmost descendant is reached
   
    if (tree.left) recurse(tree.left, prev);
   
    if (tree.value < prev) return false;
    if (tree.value > prev) prev = tree.value;
   
    // if right tree exists recurse until deepest rightmost descendant is reached
   
    if (tree.right) recurse(tree.right, prev);
     
  }
 
  recurse(tree, prev);
 
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
