/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function zip(l1, l2) {
    let queue = [];
    let current1 = l1;
    let current2 = l2;
    while (current1 || current2) {
        queue.push(current1);
        current1 = current1.next;
        queue.push(current2);
        current2 = current2.next;
    }
    for (let i=0; i < queue.length; i++) {
        if (queue[i+1])
            queue[i].next = queue[i+1];
    }

}

module.exports = {Node: Node, zip: zip};
