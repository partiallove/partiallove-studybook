/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.cap = k;
    this.head = -1;
    this.tail = -1;
    this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;  // 如果队列还没有满就可以继续插入
    if (this.isEmpty()) { // 如果队列为空 head = 0，初始化head
        this.head = 0;
    }
    // 在尾部插入，因为是环状 所以要取模
    this.tail = (this.tail + 1) % this.cap;
    this.queue[this.tail] = value; // tail计算好，之后把对应的值放进去。
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;  // 如果是空的就不能删除
    if (this.tail === this.head) {  // 如果头部和尾部相等，又不是空的，说明队列里面就一项
        this.tail = this.head = -1;  // 初始为原始下标
    } else {
        this.head = (this.head + 1) % this.cap;  // 否则说明队列里面已经 > 1 项了，就让head指针后移，头删操作，取模是因为如果一直往后加回不到头部了就，所以要取模让它回来从0开始，就市因为队列是环状
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    // 如果为空直接返回true，不为空 就进行计算，tail + 1的原因是因为 tail是下标，cap是length
    return !this.isEmpty() && this.head == (this.tail + 1) % this.cap;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
