/* eslint-disable no-plusplus */
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
  let counter = 0;
  let size = 0;
  let current = head;
  while (current) {
    if (current.value) {
      size++;
      current = current.next;
    }
  }
  if (size < k) {
    return undefined;
  }
  current = head;
  while (counter < size - k) {
    current = current.next;
    counter++;
  }
  return current.value;
}

module.exports = { Node, kthToLastNode };

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(5, a));

/*
let lead = head;
let follow = head;
let counter = 1;

while (lead) {
  lead=lead.next;
  if (counter > k) follow = follow.next;
  counter++
}

return k > counter ? 'out of range' : follow.value;
*/
