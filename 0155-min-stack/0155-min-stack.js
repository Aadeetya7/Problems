
var MinStack = function () {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let n = this.stack.length;

    this.stack[n] = val;

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack[this.minStack.length] = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let val = this.stack[this.stack.length - 1];
    this.stack.length--;
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.length--
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */