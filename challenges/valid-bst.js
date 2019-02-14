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
    const result = [];
    let valid = true;
    function inOrder(tree) {
      if (!tree) return result;
      if (tree.left) {
        inOrder(tree.left)
      }
      if (tree.value < result[result.length - 1]){
        valid = false;
      }
      result.push(tree.value)
  
      if (tree.right) {
        inOrder(tree.right)
      }
    }
    inOrder(root)
    return valid;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
