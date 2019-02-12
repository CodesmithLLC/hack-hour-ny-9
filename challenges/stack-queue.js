/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = function(value) {   
    // this.storage[this.index] = value;
    // this.index += 1;
    this.storage[this.index++] = value;
  };
  
  Stack.prototype.pop = function() {
    // this.index -=1;
    // let popped = this.storage[this.index];
    // this.storage[this.index] = undefined;
    // return popped;
    
    if (this.index <= 0) {
      return undefined;
    }
    const toPop = this.storage[this.index -1];
    delete this.storage [--this.index];
    return toPop;
  };
  


/**
* Queue Class
*/
// create 2 stacks s1 and s2.....push all elements to s1 and then push them to s2 and then pop them out of s2.
const st1 = [];
const st2 = [];

function Queue(value) {
    st1.push(value);
}

function Dequeue() {
    if (st2.length === 0) {
      while (st1.length > 0) {
        let val = st1.pop();
        st2.push(val);
      }
   }
   return st2.pop();
}


module.exports = {Stack: Stack, Queue: Queue};
