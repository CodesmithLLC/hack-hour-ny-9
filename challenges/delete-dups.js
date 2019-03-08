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

// to "delete" a node from a linked list have its precedessor point to the node's successpr 
// have two traverser pointers traverse the linked list to find and delete duplicate nodes
// the lead pointer will set off first to discover duplicate nodes
// the trailing pointer will perform the necessary link updates to the nodes
// 1->[1->1->1->1]->2->2->4->1->null
// 1->2->2->4->1->null
// 1->2->2->4->null

function deleteDups(head) {
  // fix one pointer to the array head and move it incrementally
  // set another to traverse the linked list to find duplicates
  if (!head.next) return head;
  let currentSearch = head;
  while (currentSearch) {
    let leadPointer = head;
    let trailingPointer = head;
    // while the traverser has not yet reached the end of the linked list
    // find the next non-duplicate element
    do {
      if (leadPointer = currentSearch) {
        leadPointer = leadPointer.next;
      }
      else {
        trailingPointer.next = leadPointer;
        trailingPointer = leadPointer;
      }
    } while (leadPointer !== null)
      
    currentSearch = currentSearch.next;
  }
}

module.exports = deleteDups;
