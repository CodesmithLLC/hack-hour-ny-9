/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.maxStack = [];
  this.length = 0;
  this.stack = [];
  this.pop = function () {
    this.length--;
    this.maxStack.pop();
    return this.stack.pop();
  }
  this.push = function (val) {
    this.stack.push(val);
    if (val > this.maxStack[this.maxStack.length - 1] || this.maxStack.length === 0) { this.maxStack.push(val) };
    this.length++;
    return this.length;
  }
  this.getMax = function () {
    return this.maxStack[this.maxStack.length - 1];
  }
}


module.exports = Stack;
