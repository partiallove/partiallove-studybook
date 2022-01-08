/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    const newHead = new ListNode(0)
    newHead.next = head;
    let node = newHead;
    while(node && node.next) {
        if(node.next.val === val) {
            node.next = node.next.next;
        }
        node = node.next;
    }
    return newHead.next;
};
