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
  if (!head && !tail) {
    this.head = new Node(val);
    this.tail = new Node(val);
  } else {
    let newNode = new Node(val);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (this.head.val === val && this.tail.val === val) {
    this.head = null;
    this.tail = null;
  } else if (head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    let curr = head.next;
    while (curr) {
      if (curr.val === val) {
        curr.next.prev = curr.prev;
        curr.prev = curr.next;
      }
    }
  }
};

module.exports = LinkedList;
