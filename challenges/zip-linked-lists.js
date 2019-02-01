/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let l1CurrNode = l1;
  let l2CurrNode = l2;
  let isL1Turn = true;

  while (l1CurrNode || l2CurrNode) {
    if (l1CurrNode && isL1Turn) {
      // update l1NextNode
      const l1NextNode = l1CurrNode.next;

      // repoint l1CurrNode node to l2CurrNode
      if (l2CurrNode) l1CurrNode.next = l2CurrNode;
      else break;

      l1CurrNode = l1NextNode;

    } else {
      // update l2NextNode
      const l2NextNode = l2CurrNode.next;

      // repoint l2CurrNode to l1CurrNode
      if (l1CurrNode) l2CurrNode.next = l1CurrNode;
      else break;
      
      l2CurrNode = l2NextNode;
    }

    // change current turn
    isL1Turn = !isL1Turn;
  }

  return l1;
};

module.exports = {Node: Node, zip: zip};
