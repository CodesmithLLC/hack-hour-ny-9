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
  let current = head;
  let count = k;
  if (k === 0) return undefined;
  //what if k is bigger than the list? just return null?
  let end = head;
  while (end.next) {
    end = end.next;
    if (--count <= 0) current = current.next;
  }
  // console.log(count);
  // if (current === head) return head.value;
  //if doesnt exist
  if (count > 1) return undefined; 
  return current.value;
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(0,a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
