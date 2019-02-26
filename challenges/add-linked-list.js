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
  //   debugger;
  let carry = false;

  const start = l1.value + l2.value;
  let l3 = new Node(start);
  const l3Head = l3;
  l1 = l1.next;
  l2 = l2.next;
  while (l1 && l2) {
    let add = l1.value + l2.value;
    if (carry) {
      if (add === 9) {
        add = 0;
      } else {
        add += 1;
        carry = false;
      }
    }
    if (add > 9) {
      carry = true;
      add -= 10;
    }

    const newNode = new Node(add);
    l3.next = newNode;
    l3 = l3.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  return l3Head;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
