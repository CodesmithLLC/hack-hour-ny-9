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
  const length = lengthCounter();
  let node = head;

  if (k > length) return undefined;
  for (let i = 0; i < length - k; i++) {
    node = node.next;
  }
  return node.value;
  
  function lengthCounter() {
    let count = 1;
    let curNode = head.next
    while (curNode.next) {
      count += 1;
      curNode = curNode.next
    }
    count += 1;
    return count;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
