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
    //single node case
    if (head.next ==== null) return head;
    let arr = [];
    let current = head;
    while (current)
       arr.push(current);
       current = current.next;
    for (let i=arr.length-1; i>0; i--) {
        arr[i].next = arr[i-1];
    }
    return arr;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
