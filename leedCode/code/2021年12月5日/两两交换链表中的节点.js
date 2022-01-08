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
var swapPairs = function(head) {
    //创建一个哑结点dummy
    const dummy = new ListNode(0,head);
    let temp = dummy;
    while(temp.next && temp.next.next){
        const node1 = temp.next;//两个结点中的第一个结点
        const node2 = temp.next.next;//两个结点中的第二个结点
        temp.next = node2;//将temp.next指向node2
        node1.next = node2.next;//将node1.next指向node2的下一个结点node3
        node2.next = node1;//将node2.next指向node1
        temp = node1;
    }
    return dummy.next;
};
