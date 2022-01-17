const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    while (temp1 !== null && temp2 !== null) {//合并子区间 小的节点先连
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {//两条链表还有节点没合并完，直接合并过来
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}

const toSortList = (head, tail) => {
    if (head === null) {//极端情况
        return head;
    }
    if (head.next === tail) {//分割到只剩一个节点
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {//的到中间节点
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));//分割区间 递归合并
}

var sortList = function(head) {
    return toSortList(head, null);
};
