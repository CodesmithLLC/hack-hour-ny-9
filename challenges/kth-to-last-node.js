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
  //establish pointer to current element
  let current = head;
  //if linked list is empty
  if (!current) return undefined; 
  //iterate through the linked list to establish its length
  let length = 0;
  while (current) {
    length += 1;
    current = current.next;
  }
  //reset current to point to head
  current = head;
  //iterate through the linked list now with the target index
  //handle edge case where k is greater than the length
  if (k > length) return undefined;
  //if k is equal to length return value of first node of linked list (i.e., the value of head)
  if (k === length) return head.value;
  //if k is equal to length - 1 return the value of second node of linked list
  if (k === length - 1) return head.next.value;
  
  let i = 0;
  while (current) {
    if (i === length - k) return this.value;
    i += 1;    
    current = current.next;
  }


}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
