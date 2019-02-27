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
  if (!l1) return l2;
  if (!l2) return l1;
  
  const l1Head = l1;
  let carried = 0;
  let sum;
  let l1Prev = l1;

  while (l1 && l2) {
    l1Prev = l1;
    
    sum = l1.value + l2.value + carried;
    carried = 0;

    if (sum > 9) {
      sum -= 10;
      if (!l1.next) l1.next = new Node(1);
      else carried = 1;
    }
    
    l1.value = sum;

    sum = 0;
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l2) l1Prev.next = l2;
  return l1Head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
