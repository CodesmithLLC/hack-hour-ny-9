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
  this.check = false;
  this.num = 0;
}

function superbalanced(tree) {
  let current = this.value;
  let root = this.value;
  let arr = [];
  let count = 0;
  if (current.left === null && current.right === null) {
    return true;
  } else {
    while (current) {
      count++;
      if (current.left && current.left.check === false) {
        current = current.left;
        current.num++;
      } else if (current.right && current.right.check === false) {
        current = current.right;
        current.num++;
      } else if (current.left === null && current.right === null) {
        current.check = true;
        current = root;
        arr.push(count);
        count = 0;
      }

      if (current.num === 2) {
        current.check = true;
      }
    }

    if (arr === arr.reverse()) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
