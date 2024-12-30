const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.begin = 0;
    this.end = 0;
  }

  getUnderlyingList() {
    return this.begin;
  }

  enqueue(value) {
    if (!this.end) {
        this.begin = this.end = new ListNode(value);
    } else {
        let oldEnd = this.end;
        this.end = new ListNode(value);
        oldEnd.next = this.end;
    }
}

dequeue() {
    if (!this.begin) {
        return null;
    } else {
        let deleted = this.begin;
        this.begin = this.begin.next;
        return deleted.value;
    }
  }
}

module.exports = {
  Queue
};
