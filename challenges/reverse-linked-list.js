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
    this.prev = null;
}

function reverseLinkedList(head) {
    // let llToAr = [];
    let tempHead = new Node(head.value);
    let currentTemp = tempHead;
    let currentReal = head;
    while (currentReal.next) {
        //create new node for resultLinkedList
        currentTemp.prev = new Node(currentReal.next.value);
        //Link the next for node recently created
        currentTemp.prev.next = currentTemp;
        //iterate resultLinkedList
        currentTemp = currentTemp.prev;
        // iterate inputLinkedList
        currentReal = currentReal.next;
    }
    return currentTemp;
}

let newNode1 = new Node(5);
let newNode2 = new Node(15);
let newNode3 = new Node(25);
let newNode4 = new Node(35);
let newNode5 = new Node(45);

newNode1.next = newNode2;
newNode2.next = newNode3;
newNode3.next = newNode4;
newNode4.next = newNode5;
console.log(reverseLinkedList(newNode1));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
//