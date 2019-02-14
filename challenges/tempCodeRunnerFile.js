
function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  const result = [];
  function inOrder(root) {
    if (!root) return result;
    if (root.left) inOrder(root.left);
    result.push(root.value);
    if (root.right) inOrder(root.right);
  }
  inOrder(tree);

  for (let i = 0; i < result.length - 1; i += 1) {
    if (result[i] > result[i + 1]) return false;
  }
  return true;
}

var treeOne = new BinaryTree(5);
treeOne.left = new BinaryTree(3);
treeOne.left.left = new BinaryTree(1);
treeOne.left.right = new BinaryTree(4);
treeOne.right = new BinaryTree(3);

// console.log(treeOne);
console.log(validBST(treeOne));
