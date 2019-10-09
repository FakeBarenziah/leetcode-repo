/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.value = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.value.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.value = this.value.slice(1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.value[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.value);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
