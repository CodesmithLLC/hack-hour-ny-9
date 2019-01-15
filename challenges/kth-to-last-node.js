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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, head) {
  let slow = head;
  let fast = head;

  while (k > 0) {
    if (!fast) return undefined;
    fast = fast.next;
    k -= 1;
  }
  if (!fast) return undefined;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow ? slow.value : undefined;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
