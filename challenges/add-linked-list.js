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
  let result;
  let carry = 0;
  let c1 = l1;
  let c2 = l2;
  let l3;
  let tail;

  while (c1) {
    result = c1.value + c2.value + carry;
    carry = 0;
    console.log(result)
    if (result > 9) {
      carry = 1;
      result -= 10;
    }
    if (l3 === undefined) {
      l3 = new Node(result);
      tail = l3;
    } else {
      tail.next = new Node(result);
      tail = tail.next;
    }
    c1 = c1.next;
    c2 = c2.next;
  }
  if (carry && c2) {
    c2 = c2.value + carry;
    tail.next = c2;
  }
  console.log(carry)
  if (carry) {
    tail.next = new Node(carry);
  }
  return l3;
}

const l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(9);

const l2 = new Node(9);
l2.next = new Node(9);
l2.next.next = new Node(2);

let result = addLinkedList(l1, l2);
console.log(JSON.stringify( result))

module.exports = {Node: Node, addLinkedList: addLinkedList};
