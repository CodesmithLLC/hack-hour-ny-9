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
  if (l1.value) {
    const mergedNodes = new Node(l1.value);
    mergedNodes.next = l2;
    console.log(mergedNodes);
  }
};

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
console.log(node1);
const nodea = new Node(3);
const nodeb = new Node(4);
nodea.next = nodeb;
console.log(nodea);

console.log(zip(node1, nodea));

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  //we need 4 pointers
  // In JS, any value that is not referenced by something else will be garbage collected by the engine
  // We use pointers to maintain references to data so...
  //  1. they are not garbage collected
  //   2,. we can access them at some future point in time

  let head = l1;
  let current = l1;

  let node1 = l1.next;
  let node2 = l2;
  while (node1 && node2) {
    current.next = node2;
    node2 = node2.next;
    current = current.next;
    current.next = node1;
    node1 = node1.next;
    current = current.next;
  }
  current.head = node2 ? node2 : node1;
  return head; 
} 

module.exports = {Node: Node, zip: zip};
