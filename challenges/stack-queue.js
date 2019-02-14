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

// ============================================================= Joel's =============================

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.index;
}

Stack.prototype.pop = function(){
  let output = this.storage[--this.index];
  delete this.storage[this.index]
  return output;
}

/**
 * Queue Class
 */
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value){
  this.in.push(value);
  return this.in.index + this.out.index;
}

Queue.prototype.dequeue = function(){
  if(this.out.index > 0) return this.out.pop();
  while(this.in.index > 1){
      this.out.push(this.in.pop());
  }
  return this.in.pop();
}

const stack = new Stack();
const queue = new Queue();


module.exports = {Stack: Stack, Queue: Queue};
