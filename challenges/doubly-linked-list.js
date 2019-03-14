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
  if (!this.head && !this.tail) {
    let newNode = new Node(val);
    this.head = newNode
    this.tail = newNode
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
  } else if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    let curr = this.head.next;
    while (curr) {
      if (curr.val === val) {
        curr.next.prev = curr.prev;
        curr.prev = curr.next;
      }
    }
  }
};

let ll = new LinkedList();

ll.add(5);
ll.add(7);
ll.add(8);
ll.add(7);

module.exports = LinkedList;
