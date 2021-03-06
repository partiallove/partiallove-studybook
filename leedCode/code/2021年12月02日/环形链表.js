
var detectCycle = function(head) {
    const visited = new Set();
    while (head !== null) {//终止条件，如果没有环 跳出循环
        if (visited.has(head)) {//如果存在重复的节点，这个节点就是入环节点
            return head;
        }
        visited.add(head);//将节点加入set中
        head = head.next;
    }
    return null;
};
