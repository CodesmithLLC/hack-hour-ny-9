/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stck = [];

  Stack.prototype.push = (val) => {
    this.stck[this.stck.length] = val;
  }

  Stack.prototype.pop = () => {
    if (this.stck.length > 0) {
      this.returnValue = this.stck[this.stck.length - 1];
      this.stck.length = this.stck.length - 1;
      return returnValue;
    }
    return undefined;
  }

}

/**
* Queue Class
*/


function Queue() {
  this.stck1 = new Stack();
  this.stck2 = new Stack();

  Queue.prototype.enqueue = (val) => {
    this.stck1.push(val);
  }
  Queue.prototype.dequeue = () => {
    if (this.stck1.length === 0) return undefined;
    if (this.stck2.length === 0) stck2.push(stck1.stck[0]);

    if (this.stck2.length > 0) {
      while (this.stck1.length > 0) {
        this.stck2.push(this.stck1.pop());
      }
    }
    return this.stck2.pop();
  }
}

module.exports = { Stack: Stack, Queue: Queue };
