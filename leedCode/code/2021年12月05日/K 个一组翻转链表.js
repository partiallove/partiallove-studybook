// 反转区间 [a, b) 的元素，注意是左闭右开
const reverse = (a, b) => {
    let pre, cur, nxt;
    cur = a;
    while (cur != b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    // 返回反转后的头结点
    return pre;
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head == null) {
        return head;
    }
    let a = head,
        b = head;
    for (let i = 0; i < k; i++) {
        // 不足 k 个，不需要反转，base case
        if (b == null) {
            return head;
        } else {
            b = b.next;
        }
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};
