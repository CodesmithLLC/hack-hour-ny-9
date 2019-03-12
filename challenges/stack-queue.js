/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.push = (val) => {
    this.stack.push(val);
    // console.log(this.stack);
  }
  this.pop = () => {
    if (this.stack.length > 0) {
      let returnValue = this.stack[this.stack.length - 1];
      this.stack.length = this.stack.length - 1;
      return returnValue;
    }
    return undefined;
  }
}

// let stack1 = new Stack();
// stack1.push("hi");
// console.log(stack1.stack);

/**
* Queue Class
*/

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = (val) => {
    this.stack1.push(val);
  }

  this.dequeue = () => {
    if (this.stack2.stack.length > 0) return this.stack2.pop();
    else {
      if (this.stack1.length === 0) return;
      while (this.stack1.stack.length > 0) this.stack2.push(this.stack1.pop());
      return this.stack2.pop();
    }
  }

  // this.enqueue = (val) => {
  //   console.log('stack1', this.stack1.stack);
  //   console.log('stack2', this.stack2.stack);
  //   if (this.stack1.stack.length === 0) {
  //     this.stack1.push(val);
  //   }
  //   else this.stack2.push(val);
  // }
  // this.dequeue = () => {
  //   // console.log('stack', this.stack1.stack);
  //   if (this.stack1.stack.length === 0) return undefined;
  //   let returnValue = this.stack1.pop();
  //   while (this.stack2.stack.length > 0) this.stack1.push(this.stack2.pop());
  //   while (this.stack1.stack.length > 1) this.stack2.push(this.stack1.pop());
  //   return returnValue;
  // }
}

// let que = new Queue();
// que.enqueue(5);
// que.enqueue(6);
// que.enqueue(7);
// console.log(que.dequeue());
// console.log(que.dequeue());
// console.log(que.dequeue());
module.exports = { Stack: Stack, Queue: Queue };
