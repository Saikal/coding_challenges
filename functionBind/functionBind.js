/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

<<<<<<< HEAD
var bind = function(func, obj) {
  // TODO: Your code here
  return func();

};


var alice = {
  name: 'alice',
  shout: function(){
    alert (this.name);
  }
};
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

=======
var bind = function(
) {
  // TODO: Your code here
};
>>>>>>> 36ec6410765e0c348df471646da7fb3f882089a3

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(
) {
  // TODO: Your code here
<<<<<<< HEAD
  return;
=======
>>>>>>> 36ec6410765e0c348df471646da7fb3f882089a3
};
