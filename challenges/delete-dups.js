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



function deleteDups(head) {
  let current = head
  let before = head
  let compare = head.next
  let after = head.next.next
  while (current) {
    while (compare) {
      if (current.value === compare.value) {
        before.next = after.value
        compare = after
        after = after.next
      } else {
        before = compare
        compare = after
        after = after.next
      }
    }
    current = current.next
    before = current
    compare = before.next
    after = compare.next
  }
}

module.exports = deleteDups;
