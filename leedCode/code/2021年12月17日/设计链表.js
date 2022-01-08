//初始化
var MyLinkedList = function () {
    //节点有一个val和一个next代表该节点的值和下一节点
    this.Node = function (val) {
        this.val = val;
        this.next = null;
    };
    //此处没有设置虚拟头节点，大家可以自己试试，有虚拟头的话，后面遍历链表的话会简单的多。
    this.size = 0;
};

//获取操作
MyLinkedList.prototype.get = function (index) {
    //判断边界
    if (index < 0 || index > this.size - 1) {
        return -1;
    }
    //从头开始遍历,其他方法同理
    let node = this.head;
    //查找index
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node.val;
};

//头尾添加节点均调用了addAtindex的方法
MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
};

//添加操作
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let node = this.head;
    //判断小于等于0和链表长度为0的情况
    if (index <= 0 || this.size === 0) {
        this.head = new this.Node(val);
        this.head.next = node;
    } else {
        //当index > 0时
        for (let i = 0; i < index - 1 && i <= this.size; i++) {
            node = node.next;
        }
        //循环结束开始插入
        let temp = node.next;
        node.next = new this.Node(val);
        node.next.next = temp;
    }
    this.size++;
    return;
};

//删除操作
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.size - 1) {
        return -1;
    }

    let node = this.head;

    if (index === 0) {
        //对0单独判断
        this.head = this.head.next;
        //分为大于小于0两种情况
    } else {
        //查找index
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }
        // a --> b --> c  a --> c
        let temp = node.next;
        node.next = temp.next;
        temp = null;
    }

    this.size--;
    return;
};
