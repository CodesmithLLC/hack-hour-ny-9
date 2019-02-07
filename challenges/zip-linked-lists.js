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
  if (l1.value === undefined) return l2;
  if (l2.value === undefined) return l1;

  let l1Next = l1.next;
  l1.next = l2.value;
  let l2Next = l2.next;
  l1Next.next = newNode.next = l2.value;
}

module.exports = { Node: Node, zip: zip };
