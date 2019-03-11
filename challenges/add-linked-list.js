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
  let sum = 0;
  let carry = 0;
  const head = new Node('head');
  let current = head;

  while (l1 || l2) {
    if (l1 && l2) {
      sum = l1.value + l2.value + carry;
    } else if (l1) {
      sum = l1.value + carry;
    } else if (l2) {
      sum = l1.value + carry;
    }
    carry = Math.floor(sum / 10) % 10;
    current.next = new Node(sum % 10);

    l1 = l1.next;
    l2 = l2.next;
    current = current.next;
  }

  if (carry) {
    current.next = new Node(carry);
  }

  return head.next;
}

module.exports = { Node, addLinkedList };
