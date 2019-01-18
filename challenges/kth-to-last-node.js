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
  this.next = null
}

function kthToLastNode(k, head) {
  let currentNode = head;
  let cache = {};
  let length = 0;

  while (currentNode.next){
    cache[length] = currentNode.value
    length += 1;
    currentNode = currentNode.next;
  }
  cache[length] = currentNode.value;
  console.log(cache);
  return cache[length + 1 - k] || undefined;
}


// function kthToLastNode(k, head){
//   let lead = head;
//   let follow = head;
//   let counter = 1;
//
//   while (lead) {
//     lead = lead.next;
//     //once
//     if (counter > k) follow = follow.next;
//     conter++;
//   }
//   return k > counter ? 'out of range' : follow.value;
// }


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(2, a));



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
