/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

const Stack = {
  returnValue: undefined,
  max: Math.max(),
  secondMax: Math.max(),
  thirdMax: Math.max(),
  arr: [],

  push: function (val) {
    if (val > this.max) {
      this.max = val;
    }
    this.arr[this.arr.length] = val;
  },
  //
  pop: function () {
    if (this.arr.length > 0) {
      this.returnValue = this.arr[this.arr.length - 1];
      if (this.arr[this.arr.length - 1] === this.max) {
        this.max = Math.max(...this.arr.slice(0, this.arr.length - 1));
      }
      this.arr.length = this.arr.length - 1;
      return this.returnValue;
    }
    return undefined;
  },

  getMax: function () {
    return this.max;
  }
}

// let stck = Stack;
// stck.push(5);
// stck.push(2);
// stck.push(55);
// stck.push(14);
// console.log(stck.arr);//
// console.log(stck.pop());
// console.log(stck.arr);
// console.log(stck.pop());
// console.log(stck.getMax());

module.exports = Stack;