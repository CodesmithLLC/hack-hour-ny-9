
//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.
//  *
//  const a = new Node('A');
//  const b = new Node('B');
//  const c = new Node('C');
//  const d = new Node('D');
//  const e = new Node('E');

//  a.next = b;
//  b.next = c;
//  c.next = d;
//  d.next = e;
//  *
//  * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
//  */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let current = head.next
  let current2 = head.next
  let count = 0
  while(current.next !== null){
    count++
    current = current.next
  }

  let arr = []
  for(let i = count; i >= 0; i--){
    arr.push(current2.value)
    current2 = current2.next
  }

  return arr[arr.length - k]
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};