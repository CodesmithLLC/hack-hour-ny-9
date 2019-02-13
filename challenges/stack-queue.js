/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = []
  this.index = 0
}


/**
* Queue Class
*/


function Queue() {
  this.in = new Stack;
  this.out = new Stack;
}

Queue.prototype.enqueue = function (value) {
  this.in.push(value);
  return this.in.index + this.out.index;
}

Queue.prototype.dequeue = function () {
  if (this)
}


module.exports = { Stack: Stack, Queue: Queue };
