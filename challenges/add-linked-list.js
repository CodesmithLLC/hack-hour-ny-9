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
  let currentL1 = l1;
  let currentL2 = l2;
  let currResult = l1.value + l2.value + carry;
  if (currResult >= 10) {
    currResult = currResult - 10;
    let carry = 1;
  }
  else {
    let carry = 0
  }

  let resultList = new Node(currResult);
  if (currentL1)
    resultList.next = addLinkedList(currentL1.next, currentL2.next)
}

module.exports = { Node: Node, addLinkedList: addLinkedList };


/*
let currNode = new Node
const head = currNode
let sum = 0

while l1||l2||sum{
  if(l1){
    sum +=l1.value
    l1 = l1.next
  }
  if(l2){
    sum +=l2.value
    l2 = l2.next
  }
  if(sum > 9) {
    currNode.next = new Node(sum%10);
    sum=1
  }
  else{
    currNode.next = new Node(sum);
    sum = 0
  }
  currNode = currNode.next
}
return head.next
*/