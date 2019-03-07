/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteDups(head) {
  let current = head.next;
  let prev = head;

  while (hasDuplicate(head, prev)) {
    prev = prev.next;
    current = current.next;
  }

  while (current) {
    if (!hasDuplicate(head, current)) {
      current = current.next;
      prev = prev.next;
    } else {
      // if we get here its because current has a duplicate
      current = current.next;
      prev.next = current;
    }
  }

  return head;

  function hasDuplicate(head, node) {
    let current = head;
    while (current) {
      if (current.value === node.value && node !== current) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = deleteDups;
