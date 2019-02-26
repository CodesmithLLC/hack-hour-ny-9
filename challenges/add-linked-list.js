/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let op1 = '', op2 = '';
  let curr1 = l1;
  let curr2 = l2;
  // if one linked list is empty
  if (!l2) return l1;
  if (!l1) return l2;
  while (curr1 || curr2) {
    if (curr1) op1.concat(curr1.value.toString());
    if (curr2) op2.concat(curr2.value.toString());
  }
  let sum = (parseInt(op1) + parseInt(op2)).toString().split('');
  // finally create a linked list from the nodes by defining next pointers
  let node = sum.map(el => new Node(el));
  for (let i=0; i < node.length - 1; i++) {
    // set next value of node
    node[i].next = node[i+1]
  }
  // return a handle to the head of the linked list
  return node[0]
}
    
    
    
module.exports = {Node: Node, addLinkedList: addLinkedList};
