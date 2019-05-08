/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //l1 : node1 -> node2 -> node3
  //l2 : node4 -> node5 -> node6
  //result: node1 -> node4 -> node2 -> node5 -> node3 -> node6
  if (!l1) return l2;
  if (!l2) return l1;

  let tempNode2;
  let head = l1;
  while (l2.next) {
    tempNode2 = l2.next;
    if (l1.next) l2.next = l1.next;
    l1.next = l2
    l1 = l2.next;
    l2 = tempNode2;
  }
  if (l2) {
    l1.next = l2;
  }

  return head;
};

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// node1.next = node2;
// node2.next = node3;

// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);

// node4.next = node5;
// node5.next = node6;

// // console.log(node4);
// console.log(zip(node1, node4));
module.exports = { Node: Node, zip: zip };
