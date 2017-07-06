/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  var result = [];
  // add an item to the top of the stack
  this.push = function(item) {
    result.push(item);
  };

  // remove an item from the top of the stack
  this.pop = function() {
    result.pop(item);
  };

  // return the number of items in the stack
  this.size = function() {
    return result.length();
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    // TODO: implement `enqueue`
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    if (outbox.isEmpty()) {
        while (!inbox.isEmpty()) {
           outbox.push(inbox.pop());
        }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    return inbox.size()+outbox.size();
  };
};


