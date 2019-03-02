/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let one = head;
  let two = head;
  let three = head;
  // let isCycle = false;
  while (one && two && three) {
    one = one.next;
    two = two.next.next;
    if (one === two) return true;
  }
  // if (isCycle) {
  //   while (three) {
  //     if (three === one && three === two) return three;
  //     else {
  //       three = three.next;
  //       one = three;
  //       two = three;
  //       while (one && two && three) {
  //         one = one.next;
  //         two = two.next.next;
  //         if (one === two) break;
  //       }
  //     }
  //   }
  // }
  return false;
}

// function hasCycle(head) {
//   let allNodes = [];
//   let current = head;
//   while (current) {
//     if (allNodes.includes(current)) return true;
//     allNodes.push(current);
//     current = current.next;
//   }
//   return false;

// }

// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('4');
// var node5 = node4.next = new Node('5');
// node5.next = node2;
// console.log(hasCycle(node1)); // => false
// hasCycle(node1); // => true//

module.exports = { Node: Node, hasCycle: hasCycle }
