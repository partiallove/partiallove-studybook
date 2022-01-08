/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cur =head;
    let col = new Map();

    while(cur && !col.has(cur)) {
        col.set(cur);
        cur = cur.next;
    }
    return cur;
};