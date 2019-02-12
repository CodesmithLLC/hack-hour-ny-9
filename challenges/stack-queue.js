/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
  this.push = (value) => {
    this.stack[this.length] = value;
    this.length += 1;
    return this.length;
  };

  this.pop = () => {
    this.length -= 1;
    this.value = this.stack[this.length];
    delete this.stack[this.length];
    return this.value;
  };
}

/**
* Queue Class
*/

function Queue() {
  const s1 = new Stack();
  const s2 = new Stack();
  this.push = (value) => {
    if (s1.length > 0) {
      while (s1.length > 0) {
          console.log(s2)
        s2.push(s1.stack[s1.length - 1]);
        s1.pop();
      }
      s1.push(value);
      while (s2.length > 0) {
        s1.push(s2.stack[s2.length - 1]);
        s2.pop();
      }
      return s1;
    }
    s1.push(value);
    return s1;
  };
  this.pop = () => {
    return s1.pop();
  };
}

module.exports = {Stack: Stack, Queue: Queue};
