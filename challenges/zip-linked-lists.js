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

var l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
var l2 = new Node(4);
l2.next = new Node(5);
l2.next.next = new Node(6);

function zip(l1, l2) {
  let l1curr = l1;
  let l2curr = l2;

  while (l1curr && l2curr) {
    const l1next = l1curr.next;
    const l2next = l2curr.next;
    l1curr.next = l2curr;
    l2curr.next = l1next;
    l1curr = l1next;
    l2curr = l2next;
  }
  return l1;
}

module.exports = { Node: Node, zip: zip };
