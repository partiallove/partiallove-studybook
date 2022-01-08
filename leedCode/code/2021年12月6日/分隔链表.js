/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let  samll = new ListNode(0);
    let  large = new ListNode(0);
    let min =  samll;
    let max =  large;
    while(head) {
        let temp = head.next;
        if(head.val >= x) {
            max.next = head;
            max.next.next = null;
            max = max.next;
        } else {
            min.next = head;
            min.next.next = null;
            min = min.next;
        }
        head = temp;
    }
    min.next = large.next;
    return samll.next;
};
