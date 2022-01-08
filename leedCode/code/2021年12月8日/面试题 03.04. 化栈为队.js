/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);  // 存数据
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length > 1) {  // 如果栈大于1 就一直往出取数据，取到栈里面还剩下一项
        this.stack2.push(this.stack1.pop());
    }
    let res = this.stack1.pop();  // 然后取出最后一项
    while(this.stack2.length) {   // 接着这把刚刚放到另一个栈中的内容拿回来
        this.stack1.push(this.stack2.pop());
    }
    return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack1.length > 1) {  // 与pop逻辑一致
        this.stack2.push(this.stack1.pop())
    }
    let res = this.stack1[this.stack1.length - 1];  // 这里不一样，这是需要取出最后一项，而不是pop
    while(this.stack2.length) {
        this.stack1.push(this.stack2.pop());
    }
    return res;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length  // 判断两个栈中是否都没有
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
