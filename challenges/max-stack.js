/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor(...values) {
    this.values = values || [];
    this.length = values.length;
  }

  push(value) {
    if (value === undefined) return this.length;
    this.values = [...this.values, value];
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) return null;
    const removed = this.values[this.length - 1];
    this.length--;
    this.values = this.values.slice(0, -1);
    return removed;
  }

  getMax() {
    return Math.max(...this.values);
  }
}

module.exports = Stack;