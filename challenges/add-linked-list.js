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
  if (!l1) return l2;
  if (!l2) return l1;
  let carry = false;

  const addNode = (node1, node2) => {
    let add = node1.value + node2.value;
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
    return add;
  };
  let l3 = new Node();
  const l3Head = l3;

  while (l1 && l2) {
    const add = addNode(l1, l2);
    const newNode = new Node(add);
    l3.next = newNode;
    l3 = l3.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l1) {
  }
  return l3Head.next;
}

var addNode2 = (l1, l2) => {
  let currNode = new Node();
  const head = currNode;
  let sum = 0;
  while (l1 || l2 || sum) {
    if (l1) {
      l1 += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      l2 += l2.value;
      l2 = l2.next;
    }
    if (sum > 9) {
      currNode.next = new Node(sum % 10);
      sum = 1;
    } else {
      currNode.next = new Node(sum);
      sum = 0;
    }
    currNode = currNode.next;
  }
  return head.next;
};

module.exports = { Node: Node, addLinkedList: addLinkedList };
