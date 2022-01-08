/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head)return null;
    var resNode = new ListNode();
    var currentNode = resNode;
    let isFirst = true;
    function eachData(data){
        if(data.val < x){
            if(isFirst){
                currentNode.val = data.val;
                isFirst = false;
            }else{
                currentNode.next = new ListNode(data.val)
                currentNode = currentNode.next;
            }
        }
        if(data.next){
            eachData(data.next)
        }
        if(data.val >= x){
            if(isFirst){
                currentNode.val = data.val;
                isFirst = false;
            }else{
                currentNode.next = new ListNode(data.val)
                currentNode = currentNode.next;
            }
        }

    }
    eachData(head);
    return resNode;
};