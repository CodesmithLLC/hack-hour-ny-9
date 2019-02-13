/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  return [];
}

/**
* Queue Class
*/


function Queue() {
  const queue = {};
  queue.storage = Stack();
  queue.tempStorage = Stack();
  console.log(queue.storage);
  console.log(queue.tempStorage);
  queue.enqueue = (val) => {
    // this.nextStorage.push(val);
    let top = this.storage.pop();
    while(top) {
      this.tempStorage.push(top);
      let top = this.storage.pop();
    }
    console.log('temp', tempStorage);
    console.log('store', storage);
    this.storage.push(val);
    top = this.tempStorage.pop();
    while(top) {
      this.storage.push(top);
      let top = this.tempStorage.pop();
    }
    console.log('store', storage);
    console.log('temp', tempStorage);
    
  }
  return queue;
}

const queue = Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(que);

module.exports = {Stack: Stack, Queue: Queue};
