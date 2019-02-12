/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.values = [];
  }

  pop() {
    if (this.values.length === 0) return undefined;
    
    return this.values.shift();
  }

  push(value) {
    return this.values.push(value);
  }
}


/**
* Queue Class
*/  4
// [1, 2, 3, 4] 
// [1, 2, 1, 3, 2, 1, 4, 3, 2, 1]

class Queue {
  constructor() {
    this.queue = new Stack();
    this.reversedStack = new Stack();
  }

  enqueue(value) {
    this.reversedStack = new Stack();
    this.reversedStack.push(value);
    
    for (let i = this.queue.values.length - 1; i >= 0; i--) {
      this.reversedStack.push(this.queue.values[i]);
    }

    this.queue.push(value);

    return value;
  }

  dequeue() {
    if (this.queue.length === 0) return undefined;

    const popedValue = this.reversedStack.pop();

    this.queue = new Stack();
    for (let i = this.reversedStack.values.length - 1; i >= 0; i--) {
      this.queue.push(this.reversedStack.values[i]); 
    }

    return popedValue;
  }
}


module.exports = {Stack: Stack, Queue: Queue};
