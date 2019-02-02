/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max;
}

Stack.prototype.push = function (value) {
  if (this.index === 0) {
    this.max = value
  }

  this.storage[this.index++] = value

  if (this.max < value) {
    this.max = value
  }
};

Stack.prototype.pop = function () {
  if (this.index === 0) { return undefined }
  const last = this.storage[this.index - 1]
  delete this.storage[this.index];
  this.index--
  return last;
};

Stack.prototype.getMax = function () {
  return this.max;
}


module.exports = Stack;