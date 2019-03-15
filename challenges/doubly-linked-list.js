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
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  let prev = this.head.prev;
  while (curr) {
    if (curr.val !== val) {
      prev = curr;
      curr = curr.next;
    } else {
      prev.next = prev.next.next;
      curr.next.prev = prev;
    }
  }
  return;
};

module.exports = LinkedList;
