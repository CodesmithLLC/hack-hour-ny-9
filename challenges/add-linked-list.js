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
  if (!l1 && !l2) return null;
  if (!l1 || !l2) return l1 || l2;
  let curr1 = l1;
  let curr2 = l2;
  let carry = 0;
  let resultLL = new Node(null);
  let resultCurr = resultLL;
  while (curr1 || curr2) {
    if (curr1 && curr2) {
      if (curr1.value + curr2.value + carry >= 10) {
        resultCurr.value = (curr1.value + curr2.value + carry) % 10;
        carry = 1;
      } else {
        resultCurr.value = curr1.value + curr2.value + carry;
        carry = 0;
      }
    }
    else if (curr1) {
      resultCurr.value = curr1.value + carry;
      carry = 0;
    }
    else if (curr2) {
      resultCurr.value = curr2.value + carry;
      carry = 0;
    }
    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;
    if (curr1 || curr2) {
      resultCurr.next = new Node();
      resultCurr = resultCurr.next;
    }
  }
  if (carry > 0) resultCurr.next = new Node(carry);
  return resultLL;
}

function convertNumToLinked(num) {

  let numStr = num.toString();
  let result = new Node(Number(numStr[0]));
  let curr = result;
  for (let i = 1; i < numStr.length; i++) {
    curr.next = new Node(Number(numStr[i]))
    curr = curr.next;
  }
  return result;
}

// console.log(convertNumToLinked(1234));

// let node = new Node(2);
// node.next = new Node(1);
// node.next.next = new Node(8);

// let node2 = new Node(5);
// node2.next = new Node(9);
// node2.next.next = new Node(5);
// console.log(convertNumToLinked(123456).next.next.next.next);
console.log(addLinkedList(convertNumToLinked(918724981724), convertNumToLinked(812498127389)).next.next.next.next);

module.exports = { Node: Node, addLinkedList: addLinkedList };
