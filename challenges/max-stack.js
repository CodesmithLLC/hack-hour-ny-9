/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

let Stack = function () {
  this.head = null;
  this.size = 0;
};

let Node = function (data) {
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function (data) {
  let node = new Node(data);
  node.previous = this.head;
  this.head = node;
  this.size += 1;
  return this.head;
};

Stack.prototype.pop = function () {
  let temp = this.head;
  this.head = this.head.previous;
  this.size -= 1;
  return temp;
};

Stack.prototype.getMax = function () {
  let max = this.head;
  let current = this.head;
  while (this.head.previous !== null) {
    if (current > max) {
      max = current;
    }
    current = this.head.previous;
  }
  return max;
}

module.exports = Stack;