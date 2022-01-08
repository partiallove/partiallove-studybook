var rotateRight = function(head, k) {
    if (!head || !head.next || !k) return head; //特判
    let len = 1, curr = head;
    while (curr.next) {
        curr = curr.next;
        len ++;//拿到链表总长度
    }
    curr.next = head; //连接成环形链表
    let move = len - (k % len);//取模计算实际移动的步数
    while (move) {
        curr = curr.next;//根据move移动指针寻找截断点
        move --;
    }
    let t = curr.next; //保存截断点之后的点t（也就是新链表的头结点）
    curr.next = null; //截断成普通链表
    return t;//返回新链表的头结点
};
