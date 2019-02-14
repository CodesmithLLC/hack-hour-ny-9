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
    function buildInOrder(root) {
        if (root.left) buildInOrder(root.left);
        result.push(root);
        if (root.right) buildInOrder(root.right);
    }
    buildInOrder(tree);
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i + 1]) return false;
    }
    return true;
}

// function validBST(tree) {
//     if (tree.left) {
//         if (tree.left.value >= tree.value) return false;
//         if (!validBST(tree.left)) return false;
//     }
//     if (tree.right) {
//         if (tree.right.value <= tree.value) return false;
//         if (!validBST(tree.right)) return false;
//     }
//     return true;
// }

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
