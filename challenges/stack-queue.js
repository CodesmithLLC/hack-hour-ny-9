/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

/**
 * Queue Class
 */

function Queue() {
  this.storage = {};
}

console.log(Stack.prototype.push(3));

module.exports = { Stack: Stack, Queue: Queue };
