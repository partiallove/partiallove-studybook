/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head

    let resHead = null // 反转过程中，已反转链表的头结点
    let todoHead = head // 待反转链表的头结点

    // 只要待反转链表头节点还存在，就while下去
    while(todoHead) {
        // 先把待反转链表头节点断开
        let tmp = todoHead
        todoHead = todoHead.next

        // 将断开下来的节点连接到已反转的链表
        tmp.next = resHead
        resHead = tmp
    }

    return resHead
};