/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let curr = head;
  let prev = curr.next;
  let prevPrev = curr.next.next;
  let newHead;

  while(prevPrev){
    console.log('______________before_____________')
    console.log('curr', curr)
    console.log('prev', prev)
    console.log('prevPrev', prevPrev)
    prev.next = Object.assign({},curr);
    curr = prev;
    prev = prevPrev;
    prevPrev = prevPrev.next;
    
    console.log('______________after_____________')
    console.log('curr', curr)
    console.log('prev', prev)
    console.log('prevPrev', prevPrev)
  }
  console.log('last', prev)
  return prev;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log('OUTPUT:',reverseLinkedList(head));



module.exports = {
  Node: Node,
  reverseLinkedList: reverseLinkedList
};
