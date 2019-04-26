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
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;

//================================================ryan============================================


function Node(value){
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function(value){
  // If the list is empty...
  if (!this.head){
    // ...reassign the head
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    // ...otherwise assign the tail to the new node
    this.tail.next = new Node(value);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
}

// 1. Check if LL is empty
// 2. Handle if no matching value is found
// 3. Update the head
// 3a. Handle if the head is the only node
// 4. Update the middle
// 5. Update the tail

LinkedList.prototype.remove = function(value){
  if (!this.head) return undefined;
  let node = this.head;
  while (node) {
    // If a match is found...
    if (node.value === value){
      // ...and if the match is at the head...
      if (node === this.head){
        // ...and if its the only node in the list...
        if (node === this.tail){
          // ...the list should be empty after removing it
          this.head = null;
          this.tail = null;
        } else {
          // ...otherwise, reassign the head
          this.head = this.head.next;
          this.head.prev = null;
        }
      // ...or if the match is at the tail...
      } else if (node === this.tail){
        // ...update the tail
        this.tail = this.tail.prev;
        this.tail.next = null;
      // ...or if the match is in the middle...
      } else {
        // ...update the previous and next nodes
        node.prev.next = node.next;
        node.next.prev = node.prev
      }
      // return the updated list
      return this;
    // ...otherwise keep looking
    } else {
      node = node.next;
    }
  }
  // if node is ever null...there is no match, so return undefined
  return undefined;
}
