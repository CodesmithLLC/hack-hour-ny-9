/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.length = 0;
  this.storage = [];

  this.push = (value) => {
    this.length += 1;
    return this.storage.push(value);
  };

  this.pop = () => {
    if (!this.length) {
      return undefined;
    }
    this.length -= 1;
    return this.storage.pop();
  };
}

/**
 * Queue Class
 */

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = (value) => {
    this.stack1.push(value);
  };

  this.dequeue = () => {
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    }
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  };
}

module.exports = { Stack, Queue };
