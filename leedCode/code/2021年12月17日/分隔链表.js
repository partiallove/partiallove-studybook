/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let len = 0
    let cur = head
    let res = []
    while(cur){
        len++
        cur = cur.next
    }
    let len1 = Math.floor(len/k)
    let plus = len % k
    while(head){
        let count = plus > 0 ? len1+1:len1
        cur = head
        let pre = null
        while(count > 0){
            pre = head
            head = head.next
            count--
        }
        pre.next = null
        res.push(cur)
        plus--
    }
    while(res.length !==k){
        res.push(null)
    }
    return res
};