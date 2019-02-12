/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.inventory = [];
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.inventory.push(value);
  this.length += 1;
  return this;
};

Stack.prototype.pop = function() {
  const popped = this.inventory.pop();
  this.length -= 1;
  return popped;
};

// const stackOne = new Stack();
// console.log(stackOne.push(1).push(2));
// const test = stackOne.pop();
// console.log(test);
// console.log(stackOne.length);

/**
 * Queue Class
 */

function Queue() {
  this.stackOne = new Stack();
  this.stackTwo = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.stackOne.push(value);
  return this;
};

Queue.prototype.dequeue = function() {
  while (this.stackOne.length) {
    const popped = this.stackOne.pop();
    this.stackTwo.push(popped);
  }
  return this.stackTwo.pop();
};

// const test = new Queue();
// test.enqueue(1).enqueue(2);
// console.log(test.dequeue());

module.exports = { Stack: Stack, Queue: Queue };
