/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const list = [];
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) {
            list.push(node.val);
            node = node.next;
        }
    }
    list.sort((a, b) => a - b);
    const res = new ListNode();
    let now = res;
    // console.log(list)
    for (let i = 0; i < list.length; i++) {
        now.next = new ListNode(list[i]);
        now = now.next;
    }
    return res.next;
};