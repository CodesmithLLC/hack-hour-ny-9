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
  function helper(tree) {
    if (!tree) return;
    const left = helper(tree.left)
    if (left && left >= tree.value) return false;
    const right = helper(tree.right)
    if (right && right <= tree.value) return false;
    return tree.value;
  }
  return helper(tree) !== false;
}

const tree = new BinaryTree(10);
tree.left = new BinaryTree(8);
tree.right = new BinaryTree(12);
tree.left.left = new BinaryTree(6);
tree.left.right = new BinaryTree(7);
tree.left.left.left = new BinaryTree(1);
tree.left.left.right = new BinaryTree(5);

console.log(validBST(tree));


module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
