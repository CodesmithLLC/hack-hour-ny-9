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
    function inOrder(tree) {
        if (tree.left) inOrder(tree.left)
        result.push(tree.value);
        if (tree.right) inOrder(tree.right);
    }
    inOrder(tree)
    console.log(result);
    const test = [...result].sort((a,b) => a-b);
    console.log(test);
    return result.toString() === test.toString();
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
