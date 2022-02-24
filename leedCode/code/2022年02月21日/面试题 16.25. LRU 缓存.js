/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.size = 0;
    this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        this.moveToHead(key, node.value);
        return node.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.moveToHead(key, value);
    } else {
        if (this.size < this.capacity) {
            this.addHead(key, value)
        } else {
            this.deleteTail();
            this.addHead(key, value);
        }
    }
};
LRUCache.prototype.deleteNode = function (key) {
    let node = this.map.get(key);
    let preNode = node.pre;
    let nextNode = node.next;
    preNode.next = nextNode;
    nextNode.pre = preNode;
    this.size--;
    this.map.delete(key);
}

LRUCache.prototype.deleteTail = function () {
    let tailPre = this.tail.pre;
    tailPre.pre.next = this.tail;
    this.tail.pre = tailPre.pre;
    this.size--;
    this.map.delete(tailPre.key);
}

LRUCache.prototype.addHead = function (key, value) {
    let newNode = { key: key, value: value };
    newNode.next = this.head.next;
    this.head.next.pre = newNode;
    this.head.next = newNode;
    newNode.pre = this.head;
    this.map.set(key, newNode);
    this.size++;
}

LRUCache.prototype.moveToHead = function (key, value) {
    this.deleteNode(key);
    this.addHead(key, value)
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
