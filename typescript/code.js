/* Odd Even
function ListNode(value) {
  this.value = value;
  this.next = null;
}
var oddEvenList = function(head) {
  //     debugger;
  if (!head) return null;
  let evenHeadList = new ListNode();
  const evenHead = evenHeadList;
  let curr = head;
  while (curr && curr.next) {
    evenHeadList.next = curr.next;
    evenHeadList = evenHeadList.next;
    curr.next = curr.next.next;
    if (curr.next) {
      curr = curr.next;
    }
  }
  evenHeadList.next = null;
  curr.next = evenHead.next;

  return head;
};
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
console.log(list);

*/

/*
LCA
function LCA(root, p , q) {
    if (!root) return root;
    if (root.val === p || root.val === q) return root;
    const left = LCA(root.left, p, q)
    const right = LCA(root.right, p, q)
    if (left && right) {
        return root
    } else {
       return  left || right
    }
}

*/

/*
10.11 Build Tree
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34553/Simple-JavaScript-solution
*/

// var buildTree = function(preorder, inorder) {
//   function helper(p1, p2, i1, i2) {
//     if (p1 > p2 || i1 > i2) return null;
//     var value = preorder[p1],
//       index = inorder.indexOf(value),
//       nLeft = index - i1,
//       root = new TreeNode(value);
//     root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
//     root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);
//     return root;
//   }
//   return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };

/*
12.6 Search in 2d Matrix
*/

var matrix = [[1, 3, 5], [10, 11, 16], [23, 30, 34]];

function searchMatrix(matrix, target) {
  // start at top right corner
  let row = 0,
    col = matrix[0].length - 1;
  while (row <= matrix.length - 1 && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row += 1;
    } else {
      col -= 1;
    }
  }
  return false;
}

console.log(searchMatrix(matrix, 30));
