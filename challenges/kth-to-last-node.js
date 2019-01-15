/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

  let currentNode = head; 
  let cache = {}; 
  let length = 0; 

  // we know the head so we can search unil we reach this.next = null which is the tail and then 
while(currentNode.next){
  cache[length] = currentNode.value
  length+=1; 
  currentNode= currentNode.next
}
cache[length]= currentNode.value
console.log(cache)
return cache[length+1-k]

  // somehow go backwards from that k times 
    // well. we know how long it will take to get to the tail so we can do a cache for all the values and then retrive it 
    // so 1st node is key 1 and its value and second node is key 2 value - etc and then we  know the length of the last node because its value is null and then subject n from that 

}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node ('E')


 a.next = b;
 b.next = c;
 c.next = d;
d.next =  e; 

 console.log (kthToLastNode(4, a))
 



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
