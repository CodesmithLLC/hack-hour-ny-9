/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */



function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let a;
    let current;
    let after;
    current = head.next
    after = current.next

    a = head
    while (current) {
        current.next = a
        a = current.value
        current = after
        after = after.next
    }
    head.value = null;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
