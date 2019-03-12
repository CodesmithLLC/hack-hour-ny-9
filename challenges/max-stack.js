/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.max = -Infinity;

  this.push = (value) => {
    this.storage.push(value);
    if (value > this.max) {
      this.max = value;
    }
    return this.storage.length;
  };

  this.pop = () => {
    if (this.length === 0) {
      return undefined;
    }
    const popped = this.storage.pop();
    this.max = Math.max(...this.storage);
    return popped;
  };

  this.getMax = () => {
    if (this.length === 0) {
      return undefined;
    }
    return this.max;
  };
}

module.exports = Stack;
