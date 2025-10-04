
var MyQueue = function() {
    this.items = []
    this.rear = 0;
     this.front = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.items[this.rear] = x;
    this.rear++
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.empty()) return null;
    const item = this.items[this.front];
    delete this.items[this.front]
    this.front++
    return item
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.items[this.front]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.front - this.rear === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */