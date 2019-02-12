/**
 * Create a stack.Then create a queue using two stacks.
 * LIFO
 */


function Stack() {
  this.stack = [];
  this.push = (element)=>{
    this.stack.push(element);
  }
}
  
  
function Queue() {
  this.queue = new Stack();
}
  
let oneStack = new Stack();
oneStack.push(1)
oneStack.push(2)
oneStack.push(3)
  
let oneQueue = new Queue;
let length = oneStack.stack.length
  
for (let i = 0; i < length; i++){
  let popped = oneStack.stack.pop();
  oneQueue.queue.push(popped)   
}

module.exports = {Stack: Stack, Queue: Queue};
