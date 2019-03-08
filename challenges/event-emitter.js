'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
    this.events = [];
}

EventEmitter.prototype.on = function(funcName, func) {
  // register a function in the event registry if it's new
  for (let event of this.events) {
    if (event.funcName === funcName) break;
    else {
      let event = {"funcName": funcName, : "func": func}
      this.events.push(event);    
    }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  // when an event is triggered, see if any function(s) associated with the event exist(s) in the events list
  // run the function(s) if so
  for (let event of this.events) {
    if (event.funcName === funcName) {
      event.funcName(...args);
    }
};

module.exports = EventEmitter;
