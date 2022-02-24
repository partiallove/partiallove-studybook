var flatten = function(head) {
    mergeChirld(head);
    return head;
};
function mergeChirld(head){
    let last = head;
    let cur = head;
    while(cur){
        let next = cur.next;
        if(cur.child){
            let tail = mergeChirld(cur.child);
            //将孩子夹在cur和next之间
            [tail.next,cur.child.prev,cur.next]
                = [next,cur,cur.child];
            //判断next是不是null，不是的话设置prev
            if(next){
                next.prev = tail;
            }
            cur.child = null;
        }
        last = cur;
        cur = cur.next;
    }
    return last;
}