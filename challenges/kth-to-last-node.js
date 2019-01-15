/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
// singly linked list forward connections only
// iterate and get length of list
// iterate a second time maintain counter with index + 1
// return when length - k === counter
function kthToLastNode(k, head) {    
  let length = getLength(head);
  let count = 0;
  current = head;
  while (current) {
    if(length - k === count){
      return current.value;
    }
    count += 1;
    current = current.next;
  }
}
function getLength(head) {
  let length = 0;
  current = head;
  while (current) {
    length += 1;
    current = current.next;
  }
  return length;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
