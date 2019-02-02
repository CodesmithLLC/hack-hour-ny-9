/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {};
  this.length = 0;
  this.max = null;

  this.push = (value) => {
    if (value > this.max) this.max = value;
    this.stack[this.length] = value;
    return ++this.length;
  }

  this.pop = () => {
    let removed = this.stack[--this.length];
    delete this.stack[this.length];
    if (this.max === removed) {
      let newMax = Object.values(this.stack).sort((a, b) => b - a)[0];
      this.max = newMax;
    }
    return removed;
  }

  this.getMax = () => {
    return this.max;
  }
}

module.exports = Stack;