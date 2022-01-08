/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p = head
    let q = head
    let i = 0
    while(p){
        if(i>=k){
            q = q.next
        }
        i++
        p =p.next
    }
    return i < k ? null :q

};
