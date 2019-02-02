/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    let args = Array.from(arguments);
    let len=0;
    let stack = [];
    let max = Math.max();
    let push = () => {
      stack.push(args);
      let i = args.sort((a,b) => b-a);
      if (max < i[0]) max = i[0];
      return len + args.length;
    }
    let pop = () => {
       stack = stack.slice(-1);
       let max = Math.max(stack);
       return stack[stack.length - 1]
    }
    let getMax = () => return Math.max(stack);
    
}

module.exports = Stack;
