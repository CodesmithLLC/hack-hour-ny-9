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
  const head = this.head;
  // if linked list is empty, create a new node as the linked list's head
  if (!this.head) this.head = new Node(val);
  // else just add the new node to the linked list's tail
  else this.tail = new Node(val);
  return head;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  const head = this.head;
  // if linked list is empty, do nothing
  if (!this.head) return this.head;
  // if linked list is composed of a single element, do a direct value comparison
  if (!this.head.next) {
    if (val === this.head.value) {
      this.head = null;
      this.tail = null;
    }
    return this.head;
  }
  // starting from linked list's head and using two pointers, traverse linked list to find first node with target value
  // edge cases: 2-element linked list
  let search = head;
  while (search) {
    // check if search pointer has reached tail of linked list 
    if (!search.next) {
      if (search.value === val) {
        search.prev = search.next;
      }
      // return a reference to the linked list's head whether or not the target value was found
      return head;
    }
    else {
      // check if the target value has been located
      if (search.value === val) {      
        search.prev = search.next;
        return head;
      }
    }
    // continue to increment the search pointer forward
    search = search.next;
  }
  
};

module.exports = LinkedList;
