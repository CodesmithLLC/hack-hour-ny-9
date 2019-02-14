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
  
  function recurse(tree, arr) {
   
    if (!tree.left && !tree.right) {
      return [tree.value]
    }
    // if left tree exists recurse until deepest leftmost descendant is reached
    if (tree.left) {
      recurse(tree.left, arr);
    }
    arr.push(tree.value)
    // if right tree exists recurse until deepest rightmost descendant is reached   
    if (tree.right) {
      recurse(tree.right, arr);
    }
   
    return arr;

  }

  let output = recurse(tree, []);
  for (let i=0; i < output.length; i++) {
   
    if (output[i] > output[i+1]) {return false}
   
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
