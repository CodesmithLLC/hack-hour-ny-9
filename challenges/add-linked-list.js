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
  let carriedValue = 0;
  let currL1 = l1;
  let currL2 = l2;
  let sumLLHead = null;
  let currSumLL;
  
  while (currL1 || currL2) {
    let currSum = 0;
    if (currL1) currSum += currL1.value;
    if (currL2) currSum += currL2.value;
    if (carriedValue === 1) {
      currSum += 1;
      carriedValue = 0;
    }

    if (currSum > 9) {
      carriedValue = 1;
      currSum -= 10;
    }

    const newNode = new Node(currSum);
    
    if (!sumLLHead) {
      sumLLHead = currSumLL = newNode;
    } else {
      currSumLL.next = newNode;
      currSumLL = currSumLL.next;
    }
    
    if (currL1) currL1 = currL1.next;
    if (currL2) currL2 = currL2.next;
  }

  return sumLLHead;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
