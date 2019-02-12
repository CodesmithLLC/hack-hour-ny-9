/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // 1. Handle edge cases;
  if(!l1) return l2;
	if(!l2) return l1;

	// 2. Initialize pointers (using meaningful naming conventions!)
	// In JS, any value that is not referenced by something else will be automatically garbage collected by the engine
	// We use pointers so...
	// 	1) data stays referenced so it is not garbage collected 
	//	2) and we can access that data at some future point in time
  let head = l1;
	let current = l1;
  let node1 = l1.next;
	let node2 = l2;
	
	// 3. Figure out your base case and do work;
  while (node1 && node2) {
		// In our order of operations, we typically save a reference to something first, 
		// ...then handle its reassignment, so data isn't dereferenced!
    current.next = node2;
    node2 = node2.next;
    current = current.next;
    current.next = node1;
    node1 = node1.next;
    current = current.next;
	}
	
	// 4. Cleanup
  current.next = node2 ? node2 : node1;
  return head;
};

module.exports = {Node: Node, zip: zip};
