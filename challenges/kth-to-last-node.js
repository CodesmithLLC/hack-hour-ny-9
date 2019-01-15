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

function kthToLastNode(k, head) {

  if (head === undefined) return undefined
  
  let current = head;

  let index = 0;
  let length = 0;
  let position = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  if (k > length) {
    return undefined
  }

  position = length-k;
  current = head;

  while (index < position  && current !== null) {
    current = current.next;
    console.log(current)
    index++;
  }
  return current.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
