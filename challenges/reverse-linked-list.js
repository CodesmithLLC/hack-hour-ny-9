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
    if (!head || !head.next) return head;

    let prev = head;
    let current = head.next;
    let forward = head.next.next;
    head.next = null;

    while (forward) {
        current.next = prev;
        prev = current;
        current = forward;
        forward = forward.next;
    }
    current.next = prev;
    return current;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
