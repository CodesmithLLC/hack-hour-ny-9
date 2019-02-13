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
    const reversedList;
    const tempArr = [];
    if (head.value !== undefined) {
        tempArr.unshift(head);
    }
    while (head.next !== null) {
        head = head.next;
        tempArr.unshift(head);
    }

    tempArr.forEach((ele) => {

    })

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
