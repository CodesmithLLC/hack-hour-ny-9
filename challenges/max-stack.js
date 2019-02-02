/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.removed = 0;
  this.max = 0;

  this.push = (element)=> {
    if (!element) return 'nothing to push';
    else { 
      this.stack.push(element);
      return this.stack.length;
    }
  }

  this.setMax = ()=>{
    let sorted = this.stack.sort((a, b) => a - b);
    this.max = sorted[sorted.length-1];
    return this.max;
  }

  this.pop = (element)=>{
    this.removed = this.stack[this.stack.length-1];
    this.stack.pop();
    return this.removed;
  }

  this.getMax = ()=>{
    let order = this.stack.sort((a, b) => a - b);
    console.log(order)
    return order[order.length-1] !== this.max ? this.max : order[order.length-1];
  }
}

module.exports = Stack;