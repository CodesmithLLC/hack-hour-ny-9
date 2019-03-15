/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  let current;
  let before;
  if (!this.head) {
    this.head = new Node(val)
    current = this.head
    before = null
  } else {
    before = current
    current.next = new Node(val)
    current = current.next
    current.prev = before
    this.tail = current
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let current = this.head
  let post = current.next
  let pre = current.prev
  if (this.head.val === val) {
    post = this.head
    return current.val
  } else {
    let post = current.next
    let pre = current.prev
    current = current.next
    if (current.val === val) {

    }
  }
};

module.exports = LinkedList;
