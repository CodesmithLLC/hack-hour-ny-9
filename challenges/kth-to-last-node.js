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
  let length = lengthCounter();
  let node = head;
  console.log(length)
  
  if (k > length) {return undefined}
  for (let i = 1; i <= length - k; i++) {
    node = node.next
    console.log(node)

  }
  return node.value


  function lengthCounter() {
    let counter = 0;
    let current = head;
    while(current.next) {
      counter++;
      current = current.next;
    }
    counter++;
    return counter;
  }

}
console.log(kthToLastNode(6, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
